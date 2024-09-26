package miruy.dev.chordric.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import miruy.dev.chordric.entity.Chord;
import miruy.dev.chordric.form.CommentCreateForm;
import miruy.dev.chordric.service.ChordService;
import miruy.dev.chordric.service.CommentService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/comment")
@RequiredArgsConstructor
@Controller
public class CommentController {

    private final ChordService chordService;
    private final CommentService commentService;

    @PostMapping("/create/{id}")
    public String createComment(Model model, @PathVariable("id") long id, @Valid CommentCreateForm commentCreateForm, BindingResult bindingResult) {
        Chord chord = this.chordService.getChord(id);

        if (bindingResult.hasErrors()) {
            model.addAttribute("chord", chord);
            return "chordDetail";
        }

        this.commentService.createComment(chord, commentCreateForm.getCommentContent());
        return String.format("redirect:/chord/%d", id);
    }
}
