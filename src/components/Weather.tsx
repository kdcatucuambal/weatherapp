const Weather = ({ result }: any) => {
  const { name, main } = result;
  if (!name) return null;

  const kelvin = 273.15;

  return (
    <div>
      <div className="card-panel white col s12">
        <h2>The weather from {name} is: </h2>
        <p className="temperatura">
          {(main.temp - kelvin).toFixed(2)} <span> &#x2103;</span>
        </p>
        <p>
          Max Weather:
          {(main.temp_max - kelvin).toFixed(2)} <span> &#x2103;</span>
        </p>
        <p>
          Min Weather:
          {(main.temp_min - kelvin).toFixed(2)} <span> &#x2103;</span>
        </p>
      </div>
    </div>
  );
};

export default Weather;
