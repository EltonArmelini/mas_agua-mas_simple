package com.masaguamassimple.backend.models.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Entity
@Data
public class Orders {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long refOrder;
    private LocalDate create_at;
    private LocalDate delivery_date;
    @Enumerated(EnumType.STRING)
    private OrderState state;
    @ManyToOne
    @JoinColumn(name = "client_id")
    private Clients client;

    @ManyToMany
    @JoinTable(name = "order_detail_products",
            joinColumns = @JoinColumn(name = "order_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "product_id",
                    referencedColumnName = "id"))
    private List<Products> products;
}
