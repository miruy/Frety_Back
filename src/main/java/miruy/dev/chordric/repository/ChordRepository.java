package miruy.dev.chordric.repository;

import miruy.dev.chordric.entity.Chord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ChordRepository extends JpaRepository<Chord, Long> {
    // 댓글이 많은 코드 (comments 수 내림차순 정렬)
    @Query("SELECT c FROM Chord c LEFT JOIN c.comments comm GROUP BY c ORDER BY COUNT(comm) DESC")
    List<Chord> findPopularChords();
}
