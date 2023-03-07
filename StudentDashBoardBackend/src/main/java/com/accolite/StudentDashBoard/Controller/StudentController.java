package com.accolite.StudentDashBoard.Controller;

import com.accolite.StudentDashBoard.Model.Student;
import com.accolite.StudentDashBoard.Service.StudentServiceimp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(allowedHeaders = "*",origins = "*")
public class StudentController {
    @Autowired
    private StudentServiceimp service;

    @PostMapping("/RegisterStudent")
    public Student registerStudent(@RequestBody Student student){
        return  service.registerStudents(student);
    }
    @GetMapping("/GetStudents")
    public List<Student> getstudents(){
        return service.getStudents();
    }

    @GetMapping("/GetStudentsById/{id}")
    public Student getByID(@PathVariable Integer id){
        return service.getByID(id);
    }

    @DeleteMapping("/DeleteStudent/{id}")
    public  void deleteStudent(@PathVariable Integer id){
        service.deleteStudent(id);    }

    @PutMapping("/UpdateStudent/{id}")
    public  Student updateStudent(@RequestBody Student student,@PathVariable Integer id){
        return service.UpdateStudent(student);

    }
}