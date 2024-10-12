package miruy.dev.frety.service;

import lombok.RequiredArgsConstructor;
import miruy.dev.frety.entity.Comment;
import miruy.dev.frety.entity.Member;
import miruy.dev.frety.entity.Reply;
import miruy.dev.frety.exception.DataNotFoundException;
import miruy.dev.frety.repository.ReplyRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class ReplyService {
    private final ReplyRepository replyRepository;

    public Reply createReply(Comment comment, String content, Member author) {
        Reply reply = new Reply();
        reply.setComment(comment);
        reply.setAuthor(author);
        reply.setContent(content);
        reply.setCreatedAt(LocalDateTime.now());
        return replyRepository.save(reply);
    }

    public Reply getReply(Long id) {
        Optional<Reply> reply = this.replyRepository.findById(id);
        if (reply.isPresent()) {
            return reply.get();
        } else {
            throw new DataNotFoundException("답글을 불러오는데 실패하였습니다.");
        }
    }

    public void editReply(Reply reply, String content) {
        reply.setContent(content);
        reply.setUpdateAt(LocalDateTime.now());
        this.replyRepository.save(reply);
    }

    public void deleteReply(Reply reply) {
        replyRepository.delete(reply);
    }
}
