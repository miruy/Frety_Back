package miruy.dev.chordric.repository;

import miruy.dev.chordric.entity.Chord;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ChordRepository extends JpaRepository<Chord, Long> {

    // 최신 등록된 코드 (createdAt 내림차순) - 페이지네이션 지원
    Page<Chord> findAll(Pageable pageable);

    // 댓글이 많은 코드 (comments 수 내림차순 정렬) - 페이지네이션 지원
    @Query("SELECT c FROM Chord c LEFT JOIN c.comments comm GROUP BY c ORDER BY COUNT(comm) DESC")
    Page<Chord> findPopularChords(Pageable pageable);
}
