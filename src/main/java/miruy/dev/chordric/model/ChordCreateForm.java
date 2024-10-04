package miruy.dev.chordric.model;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ChordCreateForm {

    @NotEmpty(message = "아티스트명을 입력하세요.")
    @Size(max = 200)
    private String artist;

    @NotEmpty(message = "곡 제목을 입력하세요.")
    @Size(max = 200)
    private String song;

    @NotEmpty(message = "코드를 입력하세요.")
    private String content;
//    @NotEmpty(message = "코드를 입력하세요.")
//    private List<SyllableObject> content;
}
