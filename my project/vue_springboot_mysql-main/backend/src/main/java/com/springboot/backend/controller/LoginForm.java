package com.springboot.backend.controller;

import lombok.Getter;
import lombok.Setter;

import jakarta.validation.constraints.NotEmpty;

@Getter
@Setter
public class LoginForm {

    @NotEmpty(message = "내용은 필수입니다.")
    private String name;

    private String birth;
}
