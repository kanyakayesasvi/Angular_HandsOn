package com.accolite.studentlogin.Service;

import com.accolite.studentlogin.Model.RegistrationForm;
import com.accolite.studentlogin.Repositary.RegeistarationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegistrationService {
    @Autowired
    private RegeistarationRepo repo;

    public RegistrationForm registerdetails(RegistrationForm registerd){
            return  this.repo.save(registerd);
    }

    public List<RegistrationForm> getregisterdetails(){
        return this.repo.findAll();
    }

}
