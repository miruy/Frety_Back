package miruy.dev.chordric.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@Entity
public class Chord {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 200)
    private String artist;

    @Column(length = 200)
    private String song;

    private String capo;

    private String playingStyle;

    @Column(columnDefinition = "TEXT") // 길이 제한 없음 의미
    private String content;

    private LocalDateTime createAt;

    private LocalDateTime updateAt;

    @OneToMany(mappedBy = "chord", cascade = CascadeType.REMOVE)
    private List<Comment> comments;

    @ManyToOne
    private Member author;

    @ManyToMany
    Set<Member> voter;
}
