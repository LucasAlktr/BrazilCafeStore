import React, { useState } from "react";
import "./_style.scss";
import { FaCheck } from "react-icons/fa";
import { save } from "../../../database";
import { Saving } from "../../../components/UserMessages/saving";

const ReservationForm = ({ onAddReservation }) => {
  const [reservationData, setReservationData] = useState({
    reservationDate: "",
    numberOfPeople: "",
    name: "",
    table: "",
    time: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [savedSuccessfully, setSavedSuccessfully] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservationData({
      ...reservationData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedDate = formatDate(reservationData.reservationDate);
    try {
      setIsSaving(true);
      const docRef = await save({
        reservationDate: formattedDate,
        reservationName: reservationData.name,
        reservationNumberOfPeople: parseInt(reservationData.numberOfPeople),
        reservationTable: reservationData.table,
        reservationTime: reservationData.time,
      });
      onAddReservation({
        id: docRef.id,
        reservationDate: formattedDate,
        reservationName: reservationData.name,
        reservationNumberOfPeople: parseInt(reservationData.numberOfPeople),
        reservationTable: reservationData.table,
        reservationTime: reservationData.time,
      });
      setSavedSuccessfully(true);
      setReservationData({
        reservationDate: "",
        numberOfPeople: "",
        name: "",
        table: "",
        time: "",
      });
      console.log("Reservation added successfully:", docRef.id);
    } catch (error) {
      console.error("Failed to add reservation:", error);
      setErrorMessage("Failed to add reservation. Please try again.");
    } finally {
      setIsSaving(false);
      setTimeout(() => {
        setSavedSuccessfully(false);
        setErrorMessage("");
      }, 3000);
    }
  };

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${year}/${month}/${day}`;
  };

  return (
    <div className="reservation-form-container">
      <h2>Make a Reservation</h2>
      <form onSubmit={handleSubmit} className="reservation-form">
        {isSaving ? (
          <Saving />
        ) : (
          <>
            <div className="form-group">
              <label htmlFor="reservationDate">Reservation Date:</label>
              <input
                type="date"
                id="reservationDate"
                name="reservationDate"
                value={reservationData.reservationDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="numberOfPeople">Number of People:</label>
              <input
                type="number"
                id="numberOfPeople"
                name="numberOfPeople"
                value={reservationData.numberOfPeople}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={reservationData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="table">Table:</label>
              <select
                id="table"
                name="table"
                value={reservationData.table}
                onChange={handleChange}
                required
              >
                <option value="">Select a table</option>
                <option value="SaoPaulo Table">SaoPaulo Table</option>
                <option value="Rio Table">Rio Table</option>
                <option value="Brasilia Table">Brasilia Table</option>
                <option value="Amazonas Table">Amazonas Table</option>
                <option value="Bahia Table">Bahia Table</option>
                <option value="Parana Table">Parana Table</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="time">Time:</label>
              <select
                id="time"
                name="time"
                value={reservationData.time}
                onChange={handleChange}
                required
              >
                <option value="">Select a time</option>
                <option value="10 am">10 am</option>
                <option value="11 am">11 am</option>
                <option value="12 pm">12 pm</option>
                <option value="01 pm">01 pm</option>
                <option value="02 pm">02 pm</option>
                <option value="03 pm">03 pm</option>
                <option value="04 pm">04 pm</option>
                <option value="05 pm">05 pm</option>
                <option value="06 pm">06 pm</option>
                <option value="07 pm">07 pm</option>
                <option value="08 pm">08 pm</option>
                <option value="09 pm">09 pm</option>
                <option value="10 pm">10 pm</option>
              </select>
            </div>
            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}
            {savedSuccessfully && (
              <div className="success-message">
                Reservation added successfully!
              </div>
            )}
            <button type="submit">
              Reserve <FaCheck />
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default ReservationForm;
