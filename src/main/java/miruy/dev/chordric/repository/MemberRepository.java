package miruy.dev.chordric.repository;

import miruy.dev.chordric.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {
}
