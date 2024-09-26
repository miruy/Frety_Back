package miruy.dev.chordric.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import miruy.dev.chordric.entity.Chord;
import miruy.dev.chordric.entity.Member;
import miruy.dev.chordric.form.CommentCreateForm;
import miruy.dev.chordric.service.ChordService;
import miruy.dev.chordric.service.CommentService;
import miruy.dev.chordric.service.MemberService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.security.Principal;

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

        this.commentService.createComment(chord, commentCreateForm.getCommentContent(), member);
        return String.format("redirect:/chord/%d", id);
    }
}
