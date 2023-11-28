package com.springboot.backend.service;

import com.springboot.backend.model.User;
import com.springboot.backend.repository.LoginRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class LoginService {

    private final LoginRepository loginRepository;

    /**
     * Todo 작성
     */
    @Transactional
    public Long save(User user){
        loginRepository.save(user);

        return user.getId();
    }

    /**
     * 로그인 체크
     * 만약 name이 없다면 -2, name은 있는데 birth가 없다면 -1 
     * 정상적으로 로그인이 된다면 해당 유저의 id 반환
     */
    public Long isExist(String name, String birth){
        long id = loginRepository.findByName(name);
        if(id == -1){
            return -2L;
        }else{
            return loginRepository.checkBirth(id,birth);
        }

    }

}
