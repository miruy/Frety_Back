package miruy.dev.chordric.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

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

    private String content;

    private LocalDateTime createAt;

    @OneToMany(mappedBy = "chord", cascade = CascadeType.REMOVE)
    private List<Comment> comments;
}
