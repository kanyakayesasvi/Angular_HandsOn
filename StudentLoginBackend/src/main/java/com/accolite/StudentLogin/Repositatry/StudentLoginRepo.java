package com.accolite.StudentLogin.Repositatry;

import com.accolite.StudentLogin.Model.StudentLogin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentLoginRepo extends JpaRepository<StudentLogin,String> {
//    StudentLogin findByUsername(String username);
}
