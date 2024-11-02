package com.masaguamassimple.backend.models.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Products {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String sku;
    private String name;
    private Float price;
    private Integer stock;
    @ManyToMany(mappedBy = "products")
    private List<Orders> orders;
}
