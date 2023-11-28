package com.example.demo.controller;

import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginForm {

    @NotEmpty(message = "내용은 필수입니다.")
    private String name;

    private String birth;
}