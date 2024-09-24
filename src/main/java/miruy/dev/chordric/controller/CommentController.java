package miruy.dev.chordric.controller;

import lombok.RequiredArgsConstructor;
import miruy.dev.chordric.entity.Chord;
import miruy.dev.chordric.service.ChordService;
import miruy.dev.chordric.service.CommentService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RequestMapping("/comment")
@RequiredArgsConstructor
@Controller
public class CommentController {

    private final ChordService chordService;
    private final CommentService commentService;

    @PostMapping("/create/{id}")
    public String createComment(Model model, @PathVariable("id") long id, @RequestParam(value = "content") String content) {
        Chord chord = this.chordService.getChord(id);
        this.commentService.createComment(chord, content);
        return String.format("redirect:/chord/%d", id);
    }
}
