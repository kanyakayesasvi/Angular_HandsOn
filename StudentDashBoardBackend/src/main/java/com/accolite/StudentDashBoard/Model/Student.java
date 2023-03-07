package com.accolite.StudentDashBoard.Model;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name="student")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString

public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int rollnumber;
    private String name;
    private String address;
    private  double percentage;


}
