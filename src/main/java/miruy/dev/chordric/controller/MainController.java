package miruy.dev.chordric.controller;

import lombok.RequiredArgsConstructor;
import miruy.dev.chordric.entity.Chord;
import miruy.dev.chordric.service.ChordService;
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
            @RequestParam(defaultValue = "latest", required = false) String activeTab,
            Model model) {

        // 최신 등록된 코드 페이지 (10개씩 가져옴)
        Page<Chord> latestChords = chordService.getLatestChords(page, 10);
        model.addAttribute("latestChords", latestChords);

        // 댓글이 많은 인기 코드 페이지 (10개씩 가져옴)
        Page<Chord> popularChords = chordService.getPopularChords(page, 10);
        model.addAttribute("popularChords", popularChords);

        // 현재 페이지 번호와 총 페이지 수 전달 (페이지네이션용)
        model.addAttribute("currentPage", page);

        // 현재 탭
        model.addAttribute("activeTab", activeTab);

        return "main";
    }
}
