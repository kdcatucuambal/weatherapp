import { Fragment, useEffect, useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Error from "./components/Error";
import { Search } from "./interfaces/Interfaces";

function App() {
  const [search, setSearch] = useState<Search>({
    city: "",
    country: "",
  });

  const [query, setQuery] = useState(false);
  const [result, setResult] = useState<any>({});
  const [error, setError] = useState(false);

  useEffect(() => {
    const consutlApi = async () => {
      const appId = "97b992138be91e88831180eaaa30671c";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search.city},${search.country}&appid=${appId}`;
      const response = await fetch(url);
      const weather = await response.json();
      setResult(weather);
      setQuery(false);
    };

    if (query) {
      consutlApi();
    }

    if (result.cod === "404") {
      setError(true);
    } else {
      setError(false);
    }
  }, [query]);

  let component;

  if (error) {
    component = <Error message="There are no results"></Error>;
  } else {
    component = <Weather result={result}></Weather>;
  }

  return (
    <Fragment>
      <Header title="Weather App KEVAPP"></Header>
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form
                search={search}
                setSearch={setSearch}
                setQuery={setQuery}
              ></Form>
            </div>
            <div className="col m6 s12">{component}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
