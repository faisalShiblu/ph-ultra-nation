import React from 'react';

const Country = (props) => {
    const country = props.country;
    const handleAddCountry = props.handleAddCountry;
    const flagStyle = { height: '50px' }
    const countryStyle = { border: '1px solid red', margin: '10px', padding: '10px' }
    return (
        <div style={countryStyle}>
            <h4>This is {country.name} {country.alpha2Code}</h4>
            <img style={flagStyle} src={country.flag} alt={country.alpha3Code} />
            <p>Population: {country.population}</p>
            <p><small>Region: {country.region}</small></p>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;