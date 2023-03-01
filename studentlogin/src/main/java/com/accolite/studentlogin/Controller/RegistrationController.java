    package com.accolite.studentlogin.Controller;

    import com.accolite.studentlogin.Model.RegistrationForm;
    import com.accolite.studentlogin.Service.RegistrationService;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.web.bind.annotation.*;

    import javax.validation.Valid;
    import java.util.List;
    @RestController
    @CrossOrigin("*")
    public  class RegistrationController {
        @Autowired
        private RegistrationService service;
        @PostMapping("/register")
        public RegistrationForm registerdetails(@RequestBody RegistrationForm registerd){
             return  this.service.registerdetails(registerd);

        }

        @GetMapping("/totalDetails")
        public List<RegistrationForm> getregisterdetails(){
            return  this.service.getregisterdetails();

        }

    }
