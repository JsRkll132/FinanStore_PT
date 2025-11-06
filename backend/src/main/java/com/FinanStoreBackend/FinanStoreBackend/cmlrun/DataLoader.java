package com.FinanStoreBackend.FinanStoreBackend.cmlrun;

import java.math.BigDecimal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.FinanStoreBackend.FinanStoreBackend.models.Products;
import com.FinanStoreBackend.FinanStoreBackend.repository.ProductRepository;

//@Component
public class DataLoader implements CommandLineRunner {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public void run(String... args) throws Exception {
        // Crear productos de prueba
        Products product1 = new Products();
        product1.setName("Producto A");
        product1.setPrice(new BigDecimal("10.00"));
        productRepository.save(product1);

        Products product2 = new Products();
        product2.setName("Producto B");
        product2.setPrice(new BigDecimal("20.00"));
        productRepository.save(product2);

        Products product3 = new Products();
        product3.setName("Producto C");
        product3.setPrice(new BigDecimal("30.00"));
        productRepository.save(product3);

        System.out.println("Productos de prueba cargados.");
    }
}