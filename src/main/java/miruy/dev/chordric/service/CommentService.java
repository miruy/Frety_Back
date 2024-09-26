package miruy.dev.chordric.service;

import lombok.RequiredArgsConstructor;
import miruy.dev.chordric.entity.Chord;
import miruy.dev.chordric.entity.Comment;
import miruy.dev.chordric.entity.Member;
import miruy.dev.chordric.exception.DataNotFoundException;
import miruy.dev.chordric.repository.CommentRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class CommentService {
    private final CommentRepository commentRepository;

    public void createComment(Chord chord, String content, Member member) {
        Comment comment = new Comment();
        comment.setContent(content);
        comment.setCreatedAt(LocalDateTime.now());
        comment.setChord(chord);
        comment.setAuthor(member);
        this.commentRepository.save(comment);
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
