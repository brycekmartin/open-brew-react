import React, { useEffect, useState } from 'react';

import 'typeface-roboto';
import './App.css';
import { BreweryList } from './components/brewery-list';
import {BreweryDataList} from './Types/BreweryData';

import {BrowserRouter as Router, Switch, Route, useParams} from 'react-router-dom';
import BreweryDetail from './components/brewery-detail';

const App: React.FC = () => {

  const [breweriesList, setBreweriesList] = useState<BreweryDataList>({breweries: []});
  const [error, setError] = useState<string>('');
  const [loaded, setLoaded] = useState<string>('');
  useEffect(() => {
     //fetch("http://andculture-interview-api.azurewebsites.net:8080/api/brewery")
    //fetch("http://localhost:55667/api/brewery")
    fetch("https://andculture-interview-api.herokuapp.com/api/brewery")
    .then(response => response.json())
    .then(response => setBreweriesList(response))
    .then(response => setLoaded('loaded'))
    .catch(error => setError(error));
    //setBreweriesList(data.results);
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route exact path="/" component={BreweryList} /> */}
          <Route exact path="/" render={(props) => <BreweryList {...props} breweries={breweriesList} />} />
          {/* <Route path="/brewery/:id"><BreweryDetail /></Route> */}
          {/* {<Route exact path="/brewery/:id" render= {(props) => <BreweryDetail {...props} />} /> } */}
          <Route path="/brewery/:id" component={BreweryDetail} />

        </Switch>
      </Router>
      {/* <header className="App-header">
        <h1>Open Brew for andCulture</h1>
        {console.log(breweriesList)}
        {loaded === 'loaded' && (< BreweryList breweries={breweriesList}/>)}
      </header> */}

    </div>
  );
}

export default App;
