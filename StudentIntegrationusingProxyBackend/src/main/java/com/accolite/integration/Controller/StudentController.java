package com.accolite.integration.Controller;

import com.accolite.integration.Model.Student;
import com.accolite.integration.Service.StudentImple;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//@CrossOrigin
public class StudentController {
    @Autowired
    private StudentImple service;


    @GetMapping("/allStudents")
    public List<Student> getAllStudents(){
        return this.service.getAllStudents();
    }

    @PostMapping("/EnterStudent")
    public Student createstudent(@RequestBody  Student student){
        return  this.service.createstudent(student);
    }
}
