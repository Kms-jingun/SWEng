package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.service.LoginService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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
    public Long signUp(@RequestBody @Valid LoginForm form, BindingResult bindingResult){
        log.info("Post : signUp");

        return validation(form, bindingResult);
    }

    @PostMapping("/login/signIn")
    public Long signIn(@RequestBody @Valid LoginForm form, BindingResult bindingResult){
        log.info("Post : signIn");

        return loginService.isExist(form.getName(),form.getBirth());

    }


    private Long validation(@Valid @RequestBody LoginForm form, BindingResult bindingResult) {

        if(bindingResult.hasErrors()){
            return -3L;
        }

        User user = new User();
        user.setName(form.getName());
        user.setBirth(form.getBirth());

        return loginService.save(user);
    }


}
