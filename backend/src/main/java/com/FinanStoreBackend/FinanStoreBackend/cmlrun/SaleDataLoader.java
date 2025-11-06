package com.FinanStoreBackend.FinanStoreBackend.cmlrun;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.FinanStoreBackend.FinanStoreBackend.models.Products;
import com.FinanStoreBackend.FinanStoreBackend.models.Sales;
import com.FinanStoreBackend.FinanStoreBackend.repository.ProductRepository;
import com.FinanStoreBackend.FinanStoreBackend.repository.SaleRepository;

//@Component
public class SaleDataLoader implements CommandLineRunner {

    @Autowired
    private SaleRepository saleRepository;

    @Autowired
    private ProductRepository productRepository;

    @Override
    public void run(String... args) throws Exception {
        // Obtener productos de la base de datos
        List<Products> products = productRepository.findAll();

        // Crear una venta de prueba
        Sales sale = new Sales();
        sale.setDate(LocalDateTime.now());
        sale.setProducts(products); // Asociamos todos los productos a la venta

        // Calcular el total de la venta
        BigDecimal totalAmount = products.stream()
                .map(Products::getPrice)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        sale.setTotalAmount(totalAmount);
        saleRepository.save(sale);

        System.out.println("Venta de prueba cargada.3");
    }
}