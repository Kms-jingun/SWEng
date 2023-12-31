package com.example.demo.repository;

import com.example.demo.model.Todo;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class TodoRepository {

    private final EntityManager em;

    // 작성
    public void save(Todo todo){
        em.persist(todo);
    }

    // 단건 조회
    public Todo findOne(Long id){
        return em.find(Todo.class, id);
    }

    // 전체 조회
    public List<Todo> findAll(Long userId, boolean orderState){

        List<Todo> todoList = null;
        if(orderState){
            todoList = em.createQuery(
                            "select t from todo t" +
                                    " where t.useYn = 'Y'" +
                                    " AND t.userId = " + userId +
                                    " order by t.writeDate DESC ", Todo.class)
                    .getResultList();
        } else {
            todoList = em.createQuery(
                            "select t from todo t" +
                                    " where t.useYn = 'Y'" +
                                    " AND t.userId = " + userId +
                                    " order by t.writeDate ASC ", Todo.class)
                    .getResultList();
        }

        return todoList;
    }

    // 전체 업데이트
    public int updateTodoAllClear(Long userId) {
        return em.createQuery(
                        "update todo t " +
                                " set t.useYn = 'N' " +
                                " where t.useYn = 'Y'" +
                                " AND t.userId = " + userId)
                .executeUpdate();
    }
}