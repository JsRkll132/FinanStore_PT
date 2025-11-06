package com.FinanStoreBackend.FinanStoreBackend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.FinanStoreBackend.FinanStoreBackend.models.Products;
import com.FinanStoreBackend.FinanStoreBackend.repository.ProductRepository;

@Service
public class ProductsService {

    @Autowired
    private ProductRepository productRepository;

    public List<Products> getAllProducts() {
        return productRepository.findAll();
    }

    public Products createProduct(Products product) {
        return productRepository.save(Optional.ofNullable(product).orElseThrow());
    }
}