package miruy.dev.chordric.model;

import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ReplyCreateForm {

    @NotEmpty(message = "내용을 입력하세요.")
    private String replyContent;
}
