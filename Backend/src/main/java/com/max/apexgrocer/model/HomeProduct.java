package com.max.apexgrocer.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class HomeProduct {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private long productId;
    private String productName;
    private String productcategory;
    private long productcost;
    private String imagePath;
    
}
