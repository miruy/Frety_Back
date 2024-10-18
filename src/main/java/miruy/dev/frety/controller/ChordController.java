package miruy.dev.frety.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import miruy.dev.frety.entity.Chord;
import miruy.dev.frety.entity.Member;
import miruy.dev.frety.model.ChordCreateForm;
import miruy.dev.frety.model.CommentCreateForm;
import miruy.dev.frety.model.SyllableObject;
import miruy.dev.frety.service.ChordService;
import miruy.dev.frety.service.MemberService;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.server.ResponseStatusException;

import java.security.Principal;
import java.util.List;

@RequestMapping("/chord")
@RequiredArgsConstructor
@Controller
public class ChordController {

    private final ChordService chordService;
    private final MemberService memberService;

    @PreAuthorize("isAuthenticated()")
    @GetMapping("/create")
    public String createChord(ChordCreateForm chordForm, Model model) {

        // SEO metadata
        model.addAttribute("title", "악보 제작");
        model.addAttribute("description", "Frety에 직접 제작한 기타 악보를 등록하고, 다른 사람들과 공유해보세요.");

        return "chordCreate";
    }

    @PreAuthorize("isAuthenticated()")
    @PostMapping("/create")
    public String createChord(@Valid ChordCreateForm chordForm, BindingResult bindingResult, Principal principal) {
        if (bindingResult.hasErrors()) {
            return "chordCreate";
        }

        Member member = this.memberService.getUser(principal.getName());

        // JSON 문자열을 List<SyllableObject>로 변환
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            List<List<SyllableObject>> syllables = objectMapper.readValue(chordForm.getContent(), new TypeReference<List<List<SyllableObject>>>() {
            });
            String contentJson = objectMapper.writeValueAsString(syllables);
            this.chordService.createChord(
                    chordForm.getArtist(),
                    chordForm.getSong(),
                    chordForm.getCapo(),
                    chordForm.getPlayingStyle(),
                    contentJson,
                    member
            );
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            bindingResult.reject("content", "콘텐츠 변환 중 오류가 발생했습니다.");
            return "chordCreate";
        }

        return "redirect:/";
    }

    @GetMapping(value = "/{id}")
    public String detail(Model model, @PathVariable("id") long id, CommentCreateForm commentCreateForm) {
        Chord chord = this.chordService.getChord(id);
        model.addAttribute("chord", chord);
        model.addAttribute("commentCreateForm", commentCreateForm);

        // SEO metadata
        model.addAttribute("title", chord.getArtist() + " - " + chord.getSong());
        model.addAttribute("description", chord.getArtist() + " - " + chord.getSong() + " 기타 코드");

        return "chordDetail";
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping("/edit/{id}")
    public String editChord(ChordCreateForm chordCreateForm, @PathVariable("id") long id, Principal principal, Model model) {
        Chord chord = this.chordService.getChord(id);

        if (!chord.getAuthor().getUsername().equals(principal.getName())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "수정 권한이 없습니다.");
        }

        chordCreateForm.setArtist(chord.getArtist());
        chordCreateForm.setSong(chord.getSong());
        chordCreateForm.setCapo(chord.getCapo());
        chordCreateForm.setPlayingStyle(chord.getPlayingStyle());

        // JSON 문자열을 List<SyllableObject>로 변환 후 다시 JSON 문자열로 직렬화
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            List<List<SyllableObject>> contentList = objectMapper.readValue(chord.getContent(), new TypeReference<List<List<SyllableObject>>>() {
            });
            String contentJson = objectMapper.writeValueAsString(contentList);

            chordCreateForm.setContent(contentJson);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            throw new RuntimeException("Content를 객체로 변환하는 데 실패했습니다.");
        }

        // SEO metadata
        model.addAttribute("title", "악보 수정");
        model.addAttribute("description", "악보 수정을 통해 완성도 높은 악보를 만들어 보세요.");

        return "chordEdit";
    }

    @PreAuthorize("isAuthenticated()")
    @PostMapping("/edit/{id}")
    public String editChord(@Valid ChordCreateForm chordCreateForm, BindingResult bindingResult, Principal principal, @PathVariable("id") Long id) {
        if (bindingResult.hasErrors()) {
            return "chordEdit";
        }

        Chord chord = this.chordService.getChord(id);

        if (!chord.getAuthor().getUsername().equals(principal.getName())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "수정 권한이 없습니다.");
        }

        // JSON 문자열을 List<SyllableObject>로 변환
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            List<List<SyllableObject>> syllables = objectMapper.readValue(chordCreateForm.getContent(), new TypeReference<List<List<SyllableObject>>>() {
            });
            String contentJson = objectMapper.writeValueAsString(syllables);
            this.chordService.editChord(chord, chordCreateForm.getArtist(), chordCreateForm.getSong(), chordCreateForm.getCapo(), chordCreateForm.getPlayingStyle(), contentJson);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            bindingResult.reject("content", "콘텐츠 변환 중 오류가 발생했습니다.");
            return "chordEdit";
        }

        return String.format("redirect:/chord/%d", id);
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping("/delete/{id}")
    public String deleteChord(Principal principal, @PathVariable("id") Long id) {
        Chord chord = this.chordService.getChord(id);

        if (!chord.getAuthor().getUsername().equals(principal.getName())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "삭제 권한이 없습니다.");
        }

        this.chordService.deleteChord(chord);
        return "redirect:/";
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping("/vote/{id}")
    public String chordVote(Principal principal, @PathVariable("id") Long id) {
        Chord chord = this.chordService.getChord(id);
        Member member = this.memberService.getUser(principal.getName());
        this.chordService.vote(chord, member);
        return String.format("redirect:/chord/%s#vote_%s", id, chord.getId());
    }
}
