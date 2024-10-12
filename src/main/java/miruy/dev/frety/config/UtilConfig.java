package miruy.dev.frety.config;

import miruy.dev.frety.util.DateTime;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class UtilConfig {

    @Bean
    public DateTime dateTimeUtil() {
        return new DateTime();
    }
}