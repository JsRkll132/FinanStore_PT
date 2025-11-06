package com.FinanStoreBackend.FinanStoreBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.FinanStoreBackend.FinanStoreBackend.models.Sales;

public interface SaleRepository extends JpaRepository<Sales, Long> {
}