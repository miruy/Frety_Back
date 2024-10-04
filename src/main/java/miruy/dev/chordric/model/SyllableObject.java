package miruy.dev.chordric.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SyllableObject {
    private String text;   // 음절
    private String chord;  // 기타 코드 (null일 수도 있음)
}
