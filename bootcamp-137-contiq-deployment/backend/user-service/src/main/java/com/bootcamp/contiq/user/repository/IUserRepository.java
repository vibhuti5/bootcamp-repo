package com.bootcamp.contiq.user.repository;

import com.bootcamp.contiq.user.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IUserRepository extends JpaRepository<User, String> {
    User findByEmail(String email);
}
