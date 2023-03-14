package com.accolite.StudentLogin.Controller;

import com.accolite.StudentLogin.Model.StudentLogin;
import com.accolite.StudentLogin.Service.StudentLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class StudentLoginController {
    @Autowired
    private StudentLoginService service;

    @PostMapping("/Register")
    public StudentLogin registerLogin(@RequestBody StudentLogin studentLogin){
        return service.registerLogin(studentLogin);
    }

    @GetMapping("/loginlist")
    public List<StudentLogin> getLogin(){
        return service.getLogin();
    }

    @GetMapping("user/{username}/{password}")
    public  int loginValidation(@PathVariable("username") String username, @PathVariable("password") String password){
        int v= service.loginValidation(username, password);
        if(v==0){
            return 0;
        }
        return  v;
    }

}
