import React from "react";
import "./_style.scss";

const ReservationList = ({ reservation }) => {
  console.log("Reservation data in ReservationList:", reservation);
  return (
    <div className="reservation-table">
      <h2>Your Reservation List</h2>
      <table className="reservation-table">
        <thead>
          <tr>
            <th>Reservation Date</th>
            <th>Name</th>
            <th>Number of People</th>
            <th>Table</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {reservation.map((item, index) => (
            <tr key={index}>
              <td>{item.reservationDate}</td>
              <td>{item.reservationName}</td>
              <td>{item.reservationNumberOfPeople}</td>
              <td>{item.reservationTable}</td>
              <td>{item.reservationTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationList;
