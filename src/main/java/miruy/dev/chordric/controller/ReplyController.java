package miruy.dev.chordric.controller;

import lombok.RequiredArgsConstructor;
import miruy.dev.chordric.entity.Chord;
import miruy.dev.chordric.entity.Comment;
import miruy.dev.chordric.service.ChordService;
import miruy.dev.chordric.service.CommentService;
import miruy.dev.chordric.service.ReplyService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RequestMapping("/reply")
@RequiredArgsConstructor
@Controller
public class ReplyController {

    private final CommentService commentService;
    private final ReplyService replyService;

    @PostMapping("/create/{chordId}/{commentId}")
    public String createReply(Model model, @PathVariable("chordId") long chordId, @PathVariable("commentId") long commentId, @RequestParam(value = "replyContent") String replyContent) {
        Comment comment = this.commentService.getComment(commentId);
        this.replyService.createReply(comment, replyContent);
        return String.format("redirect:/chord/%d", chordId);
    }
}
