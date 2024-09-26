package miruy.dev.chordric.config;

import miruy.dev.chordric.util.DateTime;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class UtilConfig {

    @Bean
    public DateTime dateTimeUtil() {
        return new DateTime();
    }
}