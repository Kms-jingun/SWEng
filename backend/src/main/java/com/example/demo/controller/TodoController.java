package com.example.demo.controller;

import com.example.demo.model.Todo;
import com.example.demo.service.TodoService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
public class TodoController {
    private long userId;
    private final TodoService todoService;

    @GetMapping("/todos/set/{id}")
    public long setUser(@PathVariable("id") Long id){
        log.info("Get : User Save");

        userId = id;

        return userId;
    }

    /**
     * Todo 등록
     * @return
     */
    @PostMapping("/todos/save")
    public String createJsonTodo(@RequestBody @Valid TodoForm form, BindingResult bindingResult){
        log.info("Post : Todo Save");

        return validation(userId, form, bindingResult);
    }

    /**
     * Todo 목록
     * @return
     */
    @GetMapping("/todos/{orderState}")
    public List<Todo> list(@PathVariable("orderState") Boolean orderState){
        log.info("Get : Todos List");

        return todoService.findTodos(userId, orderState);
    }

    /**
     * Todo 완료 상태 업데이트
     * @return
     */
    @PutMapping("/todos/update/{id}")
    public String updateTodo(
            @PathVariable("id") Long id,
            @RequestBody UpdateTodoRequest request
    ){
        log.info("Put : Todo update");

        todoService.updateTodoComplted(id, request.isCompleted());

        Todo findTodo = todoService.findOne(id);

        if(request.isCompleted() == findTodo.isCompleted()){
            return "ok update";
        } else {
            return "fail";
        }
    }

    /**
     * Todo 삭제(DB 업데이트)
     */
    @PutMapping("/todos/delete/{id}")
    public String deleteTodo(
            @PathVariable("id") Long id
    ){
        log.info("Delete : Todo Delete");

        todoService.updateTodoUseYn(id);

        Todo findTodo = todoService.findOne(id);

        if(findTodo.getUseYn().equals("N")){
            return "ok delete";
        } else {
            return "fail";
        }
    }

    @PutMapping("/todos/clear")
    public String clearAllTodo(){
        log.info("Clear : Todo All Clear");

        int result = todoService.updateTodoAllClear(userId);

        if(result > 0){
            return "ok clear";
        } else {
            return "fail";
        }
    }

    private String validation(Long id, @Valid @RequestBody TodoForm form, BindingResult bindingResult) {

        if(bindingResult.hasErrors()){
            return "todo error";
        }

        Todo todo = new Todo();
        todo.setUserId(id);
        todo.setItem(form.getItem());
        todo.setCompleted(form.isCompleted());
        todo.setDate(form.getDate());
        todo.setTime(form.getTime());
        todo.setWriteDate(LocalDateTime.now());
        todo.setUpdateDate(LocalDateTime.now());

        todoService.save(todo);

        return "ok validation(save)";
    }

    @Data
    static class UpdateTodoRequest{

        private Long id;
        @NotEmpty
        private boolean completed;

    }
}