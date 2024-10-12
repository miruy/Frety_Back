package miruy.dev.frety.util;

import java.time.Duration;
import java.time.LocalDateTime;

public class DateTime {
    public static String getTimeAgo(LocalDateTime createdAt) {
        LocalDateTime now = LocalDateTime.now();
        Duration duration = Duration.between(createdAt, now);

        long days = duration.toDays();
        long hours = duration.toHours() % 24;
        long minutes = duration.toMinutes() % 60;
        long seconds = duration.getSeconds() % 60;

        // 적절하게 조건을 걸어 반환값을 설정
        if (days > 0) {
            return days + "일 전";
        } else if (hours > 0) {
            return hours + "시간 전";
        } else if (minutes > 0) {
            return minutes + "분 전";
        } else {
            if (seconds < 2) {
                return "방금 전";
            } else {
                return seconds + "초 전";
            }
        }
    }
}
