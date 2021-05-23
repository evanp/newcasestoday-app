import React, {useEffect} from 'react';
import './App.css';
import NewCasesToday from './NewCasesToday';
import { useDispatch, useSelector } from 'react-redux';

const MONTREAL_URL = "https://data.newcasestoday.app/city/CA/CA_MTR.csv"

function App(props) {

  const location = "Montreal";
  const newCases = useSelector(state => state.newCases)
  const lastDate = useSelector(state => state.lastDate)
  const delta = useSelector(state => state.delta)
  const dispatch = useDispatch();

  function getNewCasesToday() {
    return dispatch => {
        fetch(MONTREAL_URL)
        .then(res => res.text())
        .then(text => {
          const lines = text.split('\n')
          const rows = lines.map(line => line.split(';'))
          const data = rows.filter(row => row[0].length > 0)
          const latest = data[data.length - 1]
          const delta = parseInt(latest[1], 10) - parseInt(data[data.length - 2][1], 10)
          if (latest) {
              dispatch({
                  type: "FETCH_NEW_CASES",
                  data: {
                      lastDate: latest[0],
                      newCases: parseInt(latest[1], 10),
                      delta: delta
                  }
              });
          }
      });
    };
  }

  useEffect(() => {
    dispatch(getNewCasesToday());
  });

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-title">New COVID-19 cases in {location} as of <span data-testid="last-date">{lastDate}</span></div>
        <NewCasesToday newCases={newCases} delta={delta} />
      </header>
    </div>
  );
}

export default App;
