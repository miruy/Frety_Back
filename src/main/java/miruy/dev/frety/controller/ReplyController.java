package miruy.dev.frety.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import miruy.dev.frety.entity.Comment;
import miruy.dev.frety.entity.Member;
import miruy.dev.frety.entity.Reply;
import miruy.dev.frety.model.ReplyCreateForm;
import miruy.dev.frety.service.CommentService;
import miruy.dev.frety.service.MemberService;
import miruy.dev.frety.service.ReplyService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.security.Principal;
import java.util.HashMap;
import java.util.Map;

@RequestMapping("/reply")
@RequiredArgsConstructor
@Controller
public class ReplyController {
    private final CommentService commentService;
    private final MemberService memberService;
    private final ReplyService replyService;

    @PreAuthorize("isAuthenticated()")
    @PostMapping("/create/{commentId}")
    public String createReply(@PathVariable("commentId") long commentId, @Valid ReplyCreateForm replyCreateForm, Principal principal) {
        Comment comment = this.commentService.getComment(commentId);
        Member member = this.memberService.getUser(principal.getName());

        this.replyService.createReply(comment, replyCreateForm.getReplyContent(), member);
        return String.format("redirect:/chord/%s#comment_%s",
                comment.getChord().getId(), comment.getId());
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping("/edit/{id}")
    @ResponseBody
    public ResponseEntity<Map<String, String>> editReply(@PathVariable("id") long id, Principal principal) {
        Reply reply = this.replyService.getReply(id);

        if (!reply.getAuthor().getUsername().equals(principal.getName())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "수정 권한이 없습니다.");
        }

        // 댓글 내용을 JSON으로 반환
        Map<String, String> response = new HashMap<>();
        response.put("replyContent", reply.getContent());

        return ResponseEntity.ok(response);
    }

    @PreAuthorize("isAuthenticated()")
    @PostMapping("/edit/{id}")
    public String editReply(@Valid ReplyCreateForm replyCreateForm, @PathVariable("id") Long id, Principal principal) {
        Reply reply = this.replyService.getReply(id);

        if (!reply.getAuthor().getUsername().equals(principal.getName())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "수정 권한이 없습니다.");
        }

        this.replyService.editReply(reply, replyCreateForm.getReplyContent());
        return String.format("redirect:/chord/%s#comment_%s",
                reply.getComment().getChord().getId(), reply.getComment().getId());
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping("/delete/{id}")
    public String deleteReply(Principal principal, @PathVariable("id") Long id) {
        Reply reply = this.replyService.getReply(id);

        if (!reply.getAuthor().getUsername().equals(principal.getName())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "삭제 권한이 없습니다.");
        }

        this.replyService.deleteReply(reply);
        return String.format("redirect:/chord/%d", reply.getComment().getChord().getId(), reply.getComment().getId());
    }
}
