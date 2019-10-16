package com.aryen.flightservices.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aryen.flightservices.entities.Reservation;

public interface ReservationRepository extends JpaRepository<Reservation, Integer> {

}
