package com.example.demo.repository;

import com.example.demo.model.User;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class LoginRepository{

    private final EntityManager em;

    // 작성
    public void save(User user){
        em.persist(user);
    }

    // 단건 조회
    public Long checkBirth(Optional<User> loginUser2, String birth){
        if(loginUser2.orElse(null).getBirth().equals(birth)){
            return loginUser2.orElse(null).getId();
        }else{
            return -1L;
        }
    }

    public Optional<User> findByName(String name) {
        List<User> findUser = em.createQuery("select u from user u where u.name = :name", User.class)
                .setParameter("name", name)
                .getResultList();
        return findUser.stream().findAny();
    }
}
