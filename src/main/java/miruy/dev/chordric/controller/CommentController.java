package miruy.dev.chordric.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import miruy.dev.chordric.entity.Chord;
import miruy.dev.chordric.entity.Comment;
import miruy.dev.chordric.entity.Member;
import miruy.dev.chordric.model.CommentCreateForm;
import miruy.dev.chordric.service.ChordService;
import miruy.dev.chordric.service.CommentService;
import miruy.dev.chordric.service.MemberService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.security.Principal;
import java.util.HashMap;
import java.util.Map;

@RequestMapping("/comment")
@RequiredArgsConstructor
@Controller
public class CommentController {

    private final ChordService chordService;
    private final CommentService commentService;
    private final MemberService memberService;

    @PreAuthorize("isAuthenticated()")
    @PostMapping("/create/{id}")
    public String createComment(Model model, @PathVariable("id") long id, @Valid CommentCreateForm commentCreateForm, BindingResult bindingResult, Principal principal) {
        Chord chord = this.chordService.getChord(id);
        Member member = this.memberService.getUser(principal.getName());

        if (bindingResult.hasErrors()) {
            model.addAttribute("chord", chord);
            return "chordDetail";
        }

        Comment comment = this.commentService.createComment(chord, commentCreateForm.getCommentContent(), member);
        return String.format("redirect:/chord/%s#comment_%s",
                comment.getChord().getId(), comment.getId());
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping("/edit/{id}")
    @ResponseBody
    public ResponseEntity<Map<String, String>> editComment(@PathVariable("id") long id, Principal principal) {
        Comment comment = this.commentService.getComment(id);

        if (!comment.getAuthor().getUsername().equals(principal.getName())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "수정 권한이 없습니다.");
        }

        // 댓글 내용을 JSON으로 반환
        Map<String, String> response = new HashMap<>();
        response.put("commentContent", comment.getContent());

        return ResponseEntity.ok(response);
    }

    @PreAuthorize("isAuthenticated()")
    @PostMapping("/edit/{id}")
    public String editComment(@Valid CommentCreateForm commentCreateForm, @PathVariable("id") Long id, Principal principal) {
        Comment comment = this.commentService.getComment(id);

        if (!comment.getAuthor().getUsername().equals(principal.getName())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "수정 권한이 없습니다.");
        }

        this.commentService.editComment(comment, commentCreateForm.getCommentContent());
        return String.format("redirect:/chord/%s#comment_%s",
                comment.getChord().getId(), comment.getId());
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping("/delete/{id}")
    public String deleteComment(Principal principal, @PathVariable("id") Long id) {
        Comment comment = this.commentService.getComment(id);

        if (!comment.getAuthor().getUsername().equals(principal.getName())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "삭제 권한이 없습니다.");
        }

        this.commentService.deleteComment(comment);
        return String.format("redirect:/chord/%d", comment.getChord().getId());
    }
}
