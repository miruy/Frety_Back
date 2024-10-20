package miruy.dev.frety.controller;

import lombok.RequiredArgsConstructor;
import miruy.dev.frety.entity.Chord;
import miruy.dev.frety.service.ChordService;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RequiredArgsConstructor
@Controller
public class MainController {

    private final ChordService chordService;

    @GetMapping({"/", "/list"})
    public String getChordList(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "latest", required = false) String tab,
            Model model) {

        // 최신 등록된 코드 페이지 (10개씩 가져옴)
        Page<Chord> latestChords = chordService.getLatestChords(page, 10);
        model.addAttribute("latestChords", latestChords);

        // 댓글이 많은 인기 코드 페이지 (10개씩 가져옴)
        Page<Chord> popularChords = chordService.getPopularChords(page, 10);
        model.addAttribute("popularChords", popularChords);

        // 현재 탭
        model.addAttribute("tab", tab);
        return "main";
    }
}
