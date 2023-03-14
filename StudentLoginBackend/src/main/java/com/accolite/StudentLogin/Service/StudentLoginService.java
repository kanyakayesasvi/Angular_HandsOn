package com.accolite.StudentLogin.Service;

import com.accolite.StudentLogin.Model.StudentLogin;

import java.util.List;

public interface StudentLoginService {
    public  int loginValidation(String username,String password);
    public StudentLogin registerLogin(StudentLogin studentLogin);

    public List<StudentLogin> getLogin();
}
