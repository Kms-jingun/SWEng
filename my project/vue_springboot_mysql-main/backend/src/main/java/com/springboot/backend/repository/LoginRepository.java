package com.springboot.backend.repository;

import com.springboot.backend.model.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class LoginRepository{

    private final EntityManager em;

    // 작성
    public void save(User user){
        em.persist(user);
    }

    // 단건 조회
    public boolean checkBirth(long id, String birth){
        User loginUser = em.find(Todo.class, id);
        String userBirth = loginUser.getBirth();
        if(userBirth == birth){
            return true;
        }else{
            return false;
        }
    }

    public long findByName(String name){
        User loginUser = null;
        try {
            loginUser = em.createQuery(
                            "select u from User u" +
                                    " where u.name = " + name, User.class)
                    .getSingleResult()
        } catch (Exception e){
            return -1;
        } finally {
            return loginUser.getId()
        }

    }

}
