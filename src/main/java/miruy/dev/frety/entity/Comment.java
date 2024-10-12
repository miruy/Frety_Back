package miruy.dev.frety.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@Entity
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(columnDefinition = "TEXT")
    private String content;

    private LocalDateTime createdAt;

    private LocalDateTime updateAt;

    @ManyToOne
    private Chord chord;

    @ManyToOne
    private Member author;

    // orphanRemoval = true: Comment에서 Reply가 제거되면 데이터베이스에서도 답글 삭제
    @OneToMany(mappedBy = "comment", cascade = CascadeType.REMOVE, orphanRemoval = true)
    private List<Reply> replies;
}
