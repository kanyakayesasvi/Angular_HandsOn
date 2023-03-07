package com.accolite.studentlogin.Model;

import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
@Table(name="Registration_Details")
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class RegistrationForm {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    @NotBlank(message = "enter your name")
    @Size(min=4)
    private String first_name;

    @NotBlank(message = "enter ur last name")
    @Size(min=1)
    private String last_name;
    private String middle_name;
    @NotBlank
    @Email(message = "please enter the valid emailid")
    @Column(name = "EMail")
    private String email;
    @NotBlank(message = "Please say your gender")
    @Column(name = "Gender")
    private String gender;
    @NotNull
    private Long phoneNumber;
    @DateTimeFormat(pattern = "yyyy-mm-dd")
    @Column(name = "Birthday")
    private Date birthday;
    @Size(min=5)
    @Column(name = "Address")
    private String address;

    @Size(min = 8)
    @NotBlank(message = "Password should not be empty")
    @Column(name = "Password")
    private String password;



}
