package miruy.dev.chordric.service;

import lombok.RequiredArgsConstructor;
import miruy.dev.chordric.entity.Chord;
import miruy.dev.chordric.exception.DataNotFoundException;
import miruy.dev.chordric.repository.ChordRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
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

    public void createChord(String singer, String title, String content) {
        Chord chord = new Chord();
        chord.setArtist(singer);
        chord.setSong(title);
        chord.setContent(content);
        chord.setCreateAt(LocalDateTime.now());
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
}
