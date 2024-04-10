import "./_style.scss";
import { CiViewList } from "react-icons/ci";
import { useState, useEffect } from "react";
import { removeReservation } from "../../../database";

const ReservationList = ({ reservation }) => {
  const [reservationList, setReservationList] = useState([]);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setReservationList(reservation);
  }, [reservation]);

  const handleDeleteReservation = async (reservationId) => {
    try {
      setLoading(true);
      await removeReservation(reservationId);

      const updatedReservationList = reservationList.filter(
        (item) => item.id !== reservationId
      );
      setReservationList(updatedReservationList);
      setConfirmDelete(null);
    } catch (error) {
      console.error("Failed to delete reservation:", error);
    } finally {
      setLoading(false);
    }
  };

  const openConfirmation = (reservationId) => {
    setConfirmDelete(reservationId);
  };

  const closeConfirmation = () => {
    setConfirmDelete(null);
  };

  const handleConfirmation = (reservationId, confirm) => {
    if (confirm) {
      handleDeleteReservation(reservationId);
    } else {
      closeConfirmation();
    }
  };

  const ConfirmationModal = ({ reservationId }) => (
    <div className="confirmation-modal">
      <p>Are you sure you want to delete this reservation?</p>
      <div className="confirmation-yes-no">
        <button
          className="confirm-button"
          onClick={() => handleConfirmation(reservationId, true)}
        >
          Yes
        </button>
        <button
          className="cancel-button"
          onClick={() => handleConfirmation(reservationId, false)}
        >
          No
        </button>
      </div>
    </div>
  );

  return (
    <>
      <div className="reservation-table">
        <h2>
          Your Reservation List <CiViewList />
        </h2>
        {confirmDelete && <ConfirmationModal reservationId={confirmDelete} />}
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
                <td>
                  <img
                    className="img-delete"
                    src="/assets/bin.png"
                    alt="Delete"
                    onClick={() => openConfirmation(item.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {loading && (
        <div className="loading-message">Deleting reservation...</div>
      )}
    </>
  );
};

export default ReservationList;
