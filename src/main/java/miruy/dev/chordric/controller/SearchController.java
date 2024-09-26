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
public class SearchController {

    private final ChordService chordService;

    @GetMapping("/search")
    public String search(@RequestParam("keyword") String keyword, @RequestParam(value = "page", defaultValue = "0") int page, Model model) {
        if (keyword == null || keyword.trim().isEmpty()) {
            return "searchResults";
        }

        // 페이지네이션과 검색어를 통해 코드 검색
        Page<Chord> results = chordService.searchChords(keyword, page, 10);

        model.addAttribute("results", results);
        model.addAttribute("keyword", keyword);

        return "searchResults";
    }

}
