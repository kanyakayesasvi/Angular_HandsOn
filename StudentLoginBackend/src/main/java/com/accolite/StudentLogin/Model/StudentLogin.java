package com.accolite.StudentLogin.Model;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name ="StudentLogin")
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class StudentLogin {
//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    int id;
    @Id
    private String username;
    private String password;
}
