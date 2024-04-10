import React from "react";
import MySiteRoutes from "./routes";
import * as database from "./database";
import { useEffect, useState } from "react";
import { Loading } from "./components/UserMessages/loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [reservation, setReservation] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await database.load();
        setReservation(data);
      } catch (error) {
        console.error("Failed to load tasks:", error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div>
      {isLoading ? <Loading /> : <MySiteRoutes reservation={reservation} />}
    </div>
  );
}

export default App;
