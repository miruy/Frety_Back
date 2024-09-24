package miruy.dev.chordric.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import miruy.dev.chordric.entity.Chord;
import miruy.dev.chordric.form.ChordForm;
import miruy.dev.chordric.service.ChordService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/chord")
@RequiredArgsConstructor
@Controller
public class ChordController {

    private final ChordService chordService;

    @GetMapping("/create")
    public String createChord(ChordForm chordForm) {
        return "createChordForm";
    }

    @PostMapping("/create")
    public String createChord(@Valid ChordForm chordForm, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return "createChordForm";
        }
        this.chordService.createChord(
                chordForm.getArtist(),
                chordForm.getSong(),
                chordForm.getContent()
        );
        return "redirect:/";
    }

    @GetMapping(value = "/{id}")
    public String detail(Model model, @PathVariable("id") long id) {
        Chord chord = this.chordService.getChord(id);
        model.addAttribute("chord", chord);
        return "chordDetail";
    }
}
