package miruy.dev.chordric.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import miruy.dev.chordric.entity.Chord;
import miruy.dev.chordric.entity.Member;
import miruy.dev.chordric.form.ChordCreateForm;
import miruy.dev.chordric.form.CommentCreateForm;
import miruy.dev.chordric.service.ChordService;
import miruy.dev.chordric.service.MemberService;
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

@RequestMapping("/chord")
@RequiredArgsConstructor
@Controller
public class ChordController {

    private final ChordService chordService;
    private final MemberService memberService;

    @PreAuthorize("isAuthenticated()")
    @GetMapping("/create")
    public String createChord(ChordCreateForm chordForm) {
        return "chordCreate";
    }

    @PreAuthorize("isAuthenticated()")
    @PostMapping("/create")
    public String createChord(@Valid ChordCreateForm chordForm, BindingResult bindingResult, Principal principal) {
        if (bindingResult.hasErrors()) {
            return "chordCreate";
        }

        Member member = this.memberService.getUser(principal.getName());

        this.chordService.createChord(
                chordForm.getArtist(),
                chordForm.getSong(),
                chordForm.getContent(),
                member
        );
        return "redirect:/";
    }

    @GetMapping(value = "/{id}")
    public String detail(Model model, @PathVariable("id") long id, CommentCreateForm commentCreateForm) {
        Chord chord = this.chordService.getChord(id);
        model.addAttribute("chord", chord);
        return "chordDetail";
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping("/edit/{id}")
    public String editChord(ChordCreateForm chordCreateForm, @PathVariable("id") long id, Principal principal) {
        Chord chord = this.chordService.getChord(id);

        if (!chord.getAuthor().getUsername().equals(principal.getName())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "수정 권한이 없습니다.");
        }

        chordCreateForm.setArtist(chord.getArtist());
        chordCreateForm.setSong(chord.getSong());
        chordCreateForm.setContent(chord.getContent());
        return "chordCreate";
    }

    @PreAuthorize("isAuthenticated()")
    @PostMapping("/edit/{id}")
    public String editChord(@Valid ChordCreateForm chordCreateForm, BindingResult bindingResult, Principal principal, @PathVariable("id") Long id) {
        if (bindingResult.hasErrors()) {
            return "chordCreate";
        }

        Chord chord = this.chordService.getChord(id);

        if (!chord.getAuthor().getUsername().equals(principal.getName())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "수정 권한이 없습니다.");
        }

        this.chordService.editChord(chord, chordCreateForm.getArtist(), chordCreateForm.getSong(), chordCreateForm.getContent());
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
