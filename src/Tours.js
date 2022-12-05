import { useState, useEffect } from "react";
import Loading from "./Loading";
import Tour from "./Tour";

export default function Tours() {
  let [isFetch, setIsFetch] = useState(false);
  let [toursData, setToursData] = useState([]);
  let url = "https://course-api.com/react-tours-project";

  function removeTour(id) {
    setToursData(toursData.filter((tour) => tour.id !== id));
  }

  const fetchTours = async () => {
    await (
      await fetch(url)
    )
      .json()
      .then(async (response) => setToursData(response))
      .catch((error) => {
        console.log(error);
      });
    setIsFetch(true);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (!isFetch) return <Loading />;
  if (isFetch) {
    if (toursData.length !== 0)
      return <Tour props={toursData} removeTour={removeTour} />;
    else
      return (
        <div className="container">
          <h1>There are no tours left!</h1>
          <br />
          <button onClick={fetchTours}>REFRESH</button>
        </div>
      );
  }
}
