import "./App.scss";
import Banner from "./components/Banner/Banner";
import Card from "./components/Card/Card";
import React, { useEffect, useState } from "react";
import bannerhome from "./assets/img/bannerbig.png";

function App() {
  const [propertyData, setPropertyData] = useState([]);

  useEffect(() => {
    fetch("./logements.json")
      .then((response) => response.json())
      .then((data) => {
        setPropertyData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Banner bannerimg={bannerhome} />
      <div className="main__div">
        {propertyData &&
          propertyData.map((property) => (
            <Card
              name={property.title}
              id={property.id}
              cover={property.cover}
              key={property.id}
            />
          ))}
      </div>
    </>
  );
}

export default App;
