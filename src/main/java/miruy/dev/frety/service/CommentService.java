package miruy.dev.frety.service;

import lombok.RequiredArgsConstructor;
import miruy.dev.frety.entity.Chord;
import miruy.dev.frety.entity.Comment;
import miruy.dev.frety.entity.Member;
import miruy.dev.frety.exception.DataNotFoundException;
import miruy.dev.frety.repository.CommentRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class CommentService {
    private final CommentRepository commentRepository;

    public Comment createComment(Chord chord, String content, Member member) {
        Comment comment = new Comment();
        comment.setContent(content);
        comment.setCreatedAt(LocalDateTime.now());
        comment.setChord(chord);
        comment.setAuthor(member);
        this.commentRepository.save(comment);
        return comment;
    }

    public Comment getComment(Long id) {
        Optional<Comment> comment = this.commentRepository.findById(id);
        if (comment.isPresent()) {
            return comment.get();
        } else {
            throw new DataNotFoundException("댓글을 불러오는데 실패하였습니다.");
        }
    }

    public void editComment(Comment comment, String content) {
        comment.setContent(content);
        comment.setUpdateAt(LocalDateTime.now());
        this.commentRepository.save(comment);
    }

    public void deleteComment(Comment comment) {
        this.commentRepository.delete(comment);
    }
}
