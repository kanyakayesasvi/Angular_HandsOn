package com.accolite.studentlogin.Repositary;

import com.accolite.studentlogin.Model.RegistrationForm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegeistarationRepo extends JpaRepository<RegistrationForm,Integer> {
}
