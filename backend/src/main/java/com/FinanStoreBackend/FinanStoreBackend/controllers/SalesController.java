package com.FinanStoreBackend.FinanStoreBackend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.FinanStoreBackend.FinanStoreBackend.models.Sales;
import com.FinanStoreBackend.FinanStoreBackend.services.SalesService;

@RestController
@RequestMapping("/api/sales")
public class SalesController {

    
    @Autowired
    private SalesService saleService;

    @GetMapping
    public List<Sales> getAllSales() {
        return saleService.getAllSales();
    }

    @PostMapping
    public Sales createSale(@RequestBody List<Long> productIds) {
        return saleService.createSale(productIds);
    }
}
