package miruy.dev.chordric.form;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ChordForm {

    @NotEmpty(message = "가수명은 필수항목입니다.")
    @Size(max = 200)
    private String artist;

    @NotEmpty(message = "제목은 필수항목입니다.")
    @Size(max = 200)
    private String song;

    @NotEmpty(message = "코드는 필수항목입니다.")
    private String content;
}
