package com.accolite.integration.Model;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "student_Integration_Table")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString




public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int rollnub;

    private  String student_name;
        private String phone_number;



}
