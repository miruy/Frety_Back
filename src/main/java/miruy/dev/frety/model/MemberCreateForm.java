package miruy.dev.frety.model;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MemberCreateForm {

    @Size(min = 3, max = 25, message = "아이디는 3자 이상 25자 이하로 입력해주세요.")
    @NotEmpty(message = "아이디를 입력하세요.")
    private String username;

    @NotEmpty(message = "비밀번호를 입력하세요.")
    private String password;

    @NotEmpty(message = "비밀번호 확인을 입력하세요.")
    private String confirmPassword;

    @NotEmpty(message = "이메일을 입력하세요.")
    @Email
    private String email;
}
