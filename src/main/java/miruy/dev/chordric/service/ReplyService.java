package miruy.dev.chordric.service;

import lombok.RequiredArgsConstructor;
import miruy.dev.chordric.entity.Comment;
import miruy.dev.chordric.entity.Reply;
import miruy.dev.chordric.repository.ReplyRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@RequiredArgsConstructor
@Service
public class ReplyService {
    private final ReplyRepository replyRepository;

    public void createReply(Comment comment, String content) {
        Reply reply = new Reply();
        reply.setContent(content);
        reply.setCreatedAt(LocalDateTime.now());
        reply.setComment(comment);
        this.replyRepository.save(reply);
    }
}
