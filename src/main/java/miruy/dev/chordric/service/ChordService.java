package miruy.dev.chordric.service;

import jakarta.persistence.criteria.*;
import lombok.RequiredArgsConstructor;
import miruy.dev.chordric.entity.Chord;
import miruy.dev.chordric.entity.Member;
import miruy.dev.chordric.exception.DataNotFoundException;
import miruy.dev.chordric.repository.ChordRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class ChordService {
    private final ChordRepository chordRepository;

    // 최신 등록된 코드 (페이지네이션)
    public Page<Chord> getLatestChords(int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "createAt"));
        return chordRepository.findAll(pageable);
    }

    // 댓글이 가장 많은 코드 (페이지네이션)
    public Page<Chord> getPopularChords(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return chordRepository.findPopularChords(pageable);
    }

    public void createChord(String singer, String title, String content, Member member) {
        Chord chord = new Chord();
        chord.setArtist(singer);
        chord.setSong(title);
        chord.setContent(content);
        chord.setCreateAt(LocalDateTime.now());
        chord.setAuthor(member);

        this.chordRepository.save(chord);
    }

    public Chord getChord(Long id) {
        Optional<Chord> chord = this.chordRepository.findById(id);
        if (chord.isPresent()) {
            return chord.get();
        } else {
            throw new DataNotFoundException("코드를 불러오는데 실패하였습니다.");
        }
    }

    public void editChord(Chord chord, String artist, String song, String content) {
        chord.setArtist(artist);
        chord.setSong(song);
        chord.setContent(content);
        chord.setUpdateAt(LocalDateTime.now());

        this.chordRepository.save(chord);
    }

    public void deleteChord(Chord chord) {
        this.chordRepository.delete(chord);
    }

    public void vote(Chord chord, Member member) {
        chord.getVoter().add(member);
        this.chordRepository.save(chord);
    }

    public Page<Chord> searchChords(String keyword, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Specification<Chord> spec = search(keyword);
        return chordRepository.findAll(spec, pageable);
    }

    private Specification<Chord> search(String kw) {
        return (Root<Chord> chord, CriteriaQuery<?> query, CriteriaBuilder cb) -> {
            query.distinct(true);  // 중복을 제거
            Join<Chord, Member> member1 = chord.join("author", JoinType.LEFT); // 코드 작성자 기준
            return cb.or(cb.like(chord.get("song"), "%" + kw + "%"),         // 노래 제목 검색
                    cb.like(chord.get("artist"), "%" + kw + "%"),       // 가수 이름 검색
                    cb.like(member1.get("username"), "%" + kw + "%"));  // 코드 작성자 검색
        };
    }
}
