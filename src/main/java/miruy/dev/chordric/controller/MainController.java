package miruy.dev.chordric.controller;

import lombok.RequiredArgsConstructor;
import miruy.dev.chordric.entity.Chord;
import miruy.dev.chordric.service.ChordService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@RequestMapping("/")
@RequiredArgsConstructor
@Controller
public class MainController {

    private final ChordService chordService;

    @GetMapping
    public String getChordList(Model model) {
        // 최신 등록된 코드
        List<Chord> latestChords = chordService.getLatestChords();
        model.addAttribute("latestChords", latestChords);

        // 댓글이 많은 인기 코드
        List<Chord> popularChords = chordService.getPopularChords();
        model.addAttribute("popularChords", popularChords);

        return "main";
    }
}
