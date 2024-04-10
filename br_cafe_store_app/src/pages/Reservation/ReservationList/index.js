import React from "react";
import "./_style.scss";
import { CiViewList } from "react-icons/ci";
import { useState, useEffect } from "react";

const ReservationList = ({ reservation }) => {
  console.log("Reservation data in ReservationList:", reservation);
  const [reservationList, setReservationList] = useState([]);

  useEffect(() => {
    setReservationList(reservation);
  }, [reservation]);
  return (
    <div className="reservation-table">
      <h2>Your Reservation List <CiViewList /></h2>
      <table className="reservation-table">
        <thead>
          <tr>
            <th>Reservation Date (Year/Month/Day)</th>
            <th>Name</th>
            <th>People</th>
            <th>Table</th>
            <th>Time</th>
            <th>Delete?</th>
          </tr>
        </thead>
        <tbody>
          {reservationList.map((item, index) => (
            <tr key={index}>
              <td>{item.reservationDate}</td>
              <td>{item.reservationName}</td>
              <td>{item.reservationNumberOfPeople}</td>
              <td>{item.reservationTable}</td>
              <td>{item.reservationTime}</td>
              <td><img className="img-delete" src="/assets/bin.png" alt="Delete" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationList;
