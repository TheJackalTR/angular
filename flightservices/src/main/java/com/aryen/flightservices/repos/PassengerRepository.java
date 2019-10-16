package com.aryen.flightservices.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aryen.flightservices.entities.Passenger;

public interface PassengerRepository extends JpaRepository<Passenger, Integer> {

}
