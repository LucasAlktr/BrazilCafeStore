import React from "react";
import './_style.scss';
import ReservationList from "./ReservationList";

const Reservation = ({ reservation }) => {
  console.log("Reservation data in Reservation:", reservation);
  return (
    <div className="reservation-container">
      <section className="reservation-section">
        <h2>RESERVATION AREA</h2>
        <p>
          <strong>Find your table Now!</strong>
        </p>
      </section>
      <section>
        <div>
          <ReservationList reservation={reservation} />
        </div>
      </section>
    </div>
  );
};

export default Reservation;
