package com.accolite.StudentDashBoard.Service;

import com.accolite.StudentDashBoard.Model.Student;
import com.accolite.StudentDashBoard.Repositary.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentServiceimp {
    @Autowired
    private StudentRepo repo;
    public Student registerStudents(Student student){
        return this.repo.save(student);
    }
    public List<Student> getStudents(){
        return this.repo.findAll();}

    public Student getByID(Integer id){
        Optional<Student> stu = this.repo.findById(id);
        return stu.get();
    }

    public void deleteStudent(Integer id){
         this.repo.deleteById(id);

    }
    public Student UpdateStudent(Student student){
        Integer rollNumber=student.getRollnumber();
        Student std=repo.findById(rollNumber).get();
        std.setName(student.getName());
        std.setAddress(student.getAddress());
        std.setPercentage(student.getPercentage());
        return repo.save(std);


    }

}
