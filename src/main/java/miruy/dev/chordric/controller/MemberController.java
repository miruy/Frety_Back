package miruy.dev.chordric.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import miruy.dev.chordric.model.MemberCreateForm;
import miruy.dev.chordric.service.MemberService;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@RequiredArgsConstructor
@Controller
public class MemberController {

    private final MemberService memberService;

    @GetMapping("/signup")
    public String signup(MemberCreateForm memberCreateForm) {
        return "signup";
    }

    @PostMapping("/signup")
    public String signup(@Valid MemberCreateForm memberCreateForm, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return "signup";
        }

        if (!memberCreateForm.getPassword().equals(memberCreateForm.getConfirmPassword())) {
            bindingResult.rejectValue("confirmPassword", "Passwords do not match", "비밀번호가 일치하지 않습니다.");
            return "signup";
        }

        try {
            memberService.create(memberCreateForm.getUsername(), memberCreateForm.getEmail(), memberCreateForm.getPassword());
        } catch (DataIntegrityViolationException e) {
            e.printStackTrace();
            bindingResult.reject("Signup Failed", "이미 등록된 사용자입니다.");
            return "signup";
        } catch (Exception e) {
            e.printStackTrace();
            bindingResult.reject("Signup Failed", e.getMessage());
            return "signup";
        }

        return "redirect:/login";
    }

    @GetMapping("/login")
    public String login() {
        return "login";
    }
}

