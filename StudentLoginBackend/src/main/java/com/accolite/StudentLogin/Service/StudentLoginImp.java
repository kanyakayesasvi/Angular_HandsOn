package com.accolite.StudentLogin.Service;

import com.accolite.StudentLogin.Model.StudentLogin;
import com.accolite.StudentLogin.Repositatry.StudentLoginRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.PreparedStatement;
import java.util.List;

@Service
public class StudentLoginImp implements StudentLoginService {
    @Autowired
    private StudentLoginRepo repo;
    @Override
    public int loginValidation(String username, String password) {

        StudentLogin std= repo.findById(username).orElseThrow(null);
        if(std.getUsername().equals(username) && std.getPassword().equals(password)){
            return  1;
        }
        return 0;
    }

    @Override
    public StudentLogin registerLogin(StudentLogin studentLogin) {
        return this.repo.save((studentLogin));
    }

    @Override
    public List<StudentLogin> getLogin() {
        return this.repo.findAll();
    }


}
