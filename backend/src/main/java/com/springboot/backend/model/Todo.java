package com.springboot.backend.model;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDateTime;

// 유저가 실제로 작성하게 되는 내용, TodoForm에 뭐 더붙여서 여기에 넣고 그걸 서버DB에 올림
// 실제로 DB내부에서 접근하기 위해 Entity 특성 존재

@Entity
@Getter
@Setter
@DynamicInsert
public class Todo {

    @Id
    @GeneratedValue
    @Column(name = "todo_id")
    private Long id;

    private String item;

    private String date;

    private boolean completed;

    private String time;

    private LocalDateTime writeDate;
    private LocalDateTime updateDate;

    @Column(columnDefinition = "varchar(1) default 'Y'")
    private String useYn;
}
