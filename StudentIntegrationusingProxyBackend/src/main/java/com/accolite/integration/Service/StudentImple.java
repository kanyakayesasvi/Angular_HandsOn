package com.accolite.integration.Service;

import com.accolite.integration.Model.Student;
import com.accolite.integration.Repositary.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class StudentImple {
    @Autowired
    private StudentRepo repo;

    public List<Student> getAllStudents(){
        return this.repo.findAll();

    }

    public Student createstudent(Student s){
        return this.repo.save(s);
    }
}
