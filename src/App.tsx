import React, { useEffect, useState } from 'react';

import 'typeface-roboto';
import './App.css';
import { BreweryList } from './components/brewery-list';
import {IBreweryDataList} from './Types/BreweryData';

import {BrowserRouter as Router, Switch, Route, useParams} from 'react-router-dom';
import BreweryDetail from './components/brewery-detail';

const App: React.FC = () => {

  const [breweriesList, setBreweriesList] = useState<IBreweryDataList>({breweries: []});
  const [error, setError] = useState<string>('');
  const [loaded, setLoaded] = useState<string>('');
  useEffect(() => {
    fetch("http://localhost:55667/api/brewery")
    //fetch("https://andculture-interview-api.herokuapp.com/api/brewery")
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
          <Route exact path="/" render={(props) => <BreweryList {...props} breweries={breweriesList} />} />
          <Route path="/brewery/:id" component={BreweryDetail} />
        </Switch>
      </Router>


    </div>
  );
}

export default App;
