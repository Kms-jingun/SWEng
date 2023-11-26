package com.springboot.backend.controller;

import com.springboot.backend.model.User;
import com.springboot.backend.service.LoginService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotEmpty;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
public class LoginController {

    private final LoginService loginService;

    /**
     * 회원가입
     * @return
     */
    @PostMapping("/login/signUp")
    public String signUp(@RequestBody @Valid LoginForm form, BindingResult bindingResult){
        log.info("Post : signUp");

        return validation(form, bindingResult);
    }

    @PostMapping("/login/signIn")
    public String signIn(@RequestBody @Valid LoginForm form, BindingResult bindingResult){
        log.info("Post : signIn");

        if(loginService.isExist(form.getName(),form.getBirth())){
            return "ok";
        } else {
            return "fail";
        }
    }


    private String validation(@Valid @RequestBody LoginForm form, BindingResult bindingResult) {

        if(bindingResult.hasErrors()){
            return "signUp error";
        }

        User user = new User();
        user.setName(form.getName());
        user.setBirth(form.getBirth());

        loginService.save(user);

        return "ok";
    }


}
