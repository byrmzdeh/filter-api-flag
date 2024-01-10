import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
  const { name } = useParams();
  const [details, setDetails] = useState({});
  console.log(name)

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((res) => res.json())
      .then((api) => setDetails(api[0])); 
  }, [name]); 

  console.log(details);

  return (
    <div className='detailsData'>
      <div className="detailCard">
        <p>Capital : {details.name?.official}</p>
        <p>Population : {details.population}</p>
        <p>Region : {details.region}</p>
      </div>
    </div>
  );
};

export default CountryDetails;
