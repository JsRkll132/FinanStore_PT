package com.FinanStoreBackend.FinanStoreBackend.services;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.FinanStoreBackend.FinanStoreBackend.models.Products;
import com.FinanStoreBackend.FinanStoreBackend.models.Sales;
import com.FinanStoreBackend.FinanStoreBackend.repository.ProductRepository;
import com.FinanStoreBackend.FinanStoreBackend.repository.SaleRepository;

@Service
public class SalesService {
    
    @Autowired
    private SaleRepository saleRepository;

    @Autowired
    private ProductRepository productRepository;

    public List<Sales> getAllSales() {
        return saleRepository.findAll();
    }

    public Sales createSale(List<Long> productIds) {
        // Obtiene los productos seleccionados
        List<Products> products = productRepository.findAllById(productIds);

        // Calcula el total de la venta
        BigDecimal totalAmount = products.stream()
                .map(Products::getPrice)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        // Crea la venta
        Sales sale = new Sales();
        sale.setDate(LocalDateTime.now());
        sale.setProducts(products);
        sale.setTotalAmount(totalAmount);

        // Guarda la venta
        return saleRepository.save(sale);
    }
}