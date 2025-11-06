package com.FinanStoreBackend.FinanStoreBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.FinanStoreBackend.FinanStoreBackend.models.Products;

public interface ProductRepository extends JpaRepository<Products, Long> {

}