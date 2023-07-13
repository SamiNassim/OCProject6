import './App.scss';
import Banner from './components/Banner/Banner';
import Card from './components/Card/Card';
import React, { useEffect, useState } from 'react';

function App() {

  const [propertyData, setPropertyData] = useState([])

  useEffect(() => {
    fetch("./logements.json")
      .then((response) => response.json()
        .then((data) => setPropertyData(data))
        .catch((error) => console.log(error))
      )
  }, [])

  console.log(propertyData)

  return (
    <>
      <Banner bgimg="banner__div" /><div className='main__div'>
        {propertyData.map((property) => (
          <Card
            name={property.title}
            id={property.id}
            cover={property.cover}
          />
        ))}
      </div>
    </>

  );
}

export default App;
