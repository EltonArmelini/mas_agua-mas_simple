package com.masaguamassimple.backend.models.entities;


import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Clients {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fullName;
    private String address;
    private String cuit;
    private String phoneNumber;
    @OneToMany(mappedBy = "client")
    private List<Orders> orders;
}
