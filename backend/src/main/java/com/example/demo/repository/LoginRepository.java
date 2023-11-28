package com.example.demo.repository;

import com.example.demo.model.User;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class LoginRepository{

    private final EntityManager em;

    // 작성
    public void save(User user){
        em.persist(user);
    }

    // 단건 조회
    public Long checkBirth(long id, String birth){
        User loginUser = em.find(User.class, id);
        String userBirth = loginUser.getBirth();
        if(userBirth == birth){
            return id;
        }else{
            return -1L;
        }
    }

    public long findByName(String name){
        User loginUser = null;
        try {
            loginUser = em.createQuery(
                            "select u from User u" +
                                    " where u.name = " + name, User.class)
                    .getSingleResult();
        } catch (Exception e){
            return -1;
        } finally {
            return loginUser.getId();
        }

    }

}
