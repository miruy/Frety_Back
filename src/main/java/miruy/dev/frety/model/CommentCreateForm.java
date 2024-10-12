package miruy.dev.frety.model;

import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CommentCreateForm {

    @NotEmpty(message = "내용을 입력하세요.")
    private String commentContent;
}
