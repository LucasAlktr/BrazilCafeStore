import React from "react";
import './_style.scss';
import ReservationList from "./ReservationList";
import ReservationForm from "./ReservationForm";
import { AiFillCalendar } from "react-icons/ai";

const Reservation = ({ reservation }) => {
  console.log("Reservation data in Reservation:", reservation);
  return (
    <div className="reservation-container">
      <section className="reservation-section">
        <h2>RESERVATION AREA <AiFillCalendar /></h2>
        <p>
          <strong>Find your table Now! Make a Reservation </strong>
        </p>
      </section>

      <section>
        <div>
          <ReservationForm />
        </div>
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
