import React from 'react';


function Countries({data}) {


  
    return (
      <div >
      {data.map(item =>(
        <div key={item.name} className="country">
        <img src={item.flag} alt=""/>
        <p>{item.name}</p>
        <p>Population {item.population}</p>
        <p>Region {item.region}</p>
        <p>Capital{item.capital}</p>
        </div>
      ))}
  
  
      </div>
    );
  }
  
  export default Countries;
  