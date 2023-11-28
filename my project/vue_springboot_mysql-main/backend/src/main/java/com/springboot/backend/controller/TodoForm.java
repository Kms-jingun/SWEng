package com.springboot.backend.controller;

import lombok.Getter;
import lombok.Setter;

import jakarta.validation.constraints.NotEmpty;

@Getter
@Setter
public class TodoForm {

    @NotEmpty(message = "내용은 필수입니다.")
    private String item;

    private String date;

    private boolean completed;

    private String time;
}
