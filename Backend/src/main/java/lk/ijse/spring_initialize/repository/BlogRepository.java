package lk.ijse.spring_initialize.repository;

import lk.ijse.spring_initialize.entity.Blog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BlogRepository extends JpaRepository<Blog,Integer> {

}
