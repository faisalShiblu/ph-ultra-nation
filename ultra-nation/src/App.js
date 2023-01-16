import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './component/Country';

function App() {
  const apiKey = "f44c94dbf7b5e7b73292d46795fb63f2";
  const [countries, setCountries] = useState([]);
  //const [cart, setCart] = useState([]);
  // const handleAddCountry = (country) => {
  //   const newCart = [...cart, country];
  //   setCart(newCart);
  // };
  useEffect(() => {
    fetch('http://api.countrylayer.com/v2/all?access_key=' + apiKey)
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(er => console.log(er))
  }, []);
  return (
    <div className="App">
      <h4>Country loaded : {countries.length}</h4>
      {/* <h4>Country added : {cart.length}</h4> */}
      {countries.map(country => <Country country={country} key={country.alpha3Code}></Country>)}
    </div>
  );
}

export default App;
