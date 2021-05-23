import React, {useEffect} from 'react';
import './App.css';
import NewCasesToday from './NewCasesToday';
import { useDispatch, useSelector } from 'react-redux';
import { Sparklines, SparklinesCurve, SparklinesSpots, SparklinesReferenceLine } from 'react-sparklines';

const MONTREAL_URL = "https://data.newcasestoday.app/city/CA/CA_MTR.csv"

function App(props) {

  const location = "Montreal";

  const newCases = useSelector(state => state.newCases)
  const lastDate = useSelector(state => state.lastDate)
  const delta = useSelector(state => state.delta)
  const timeline = useSelector(state => state.timeline)

  const dispatch = useDispatch();

  function getNewCasesToday() {
    return dispatch => {
        fetch(MONTREAL_URL)
        .then(res => res.text())
        .then(text => {
          const lines = text.split('\n')
          const rows = lines.map(line => line.split(';'))
          const data = rows.filter(row => row[0].length > 0)
          const timeline = data.map(datum => parseInt(datum[1]))
          const sda = timeline.map((value, idx, arr) => {
            const pts = arr.slice(Math.max(idx - 7, 0), idx + 1);
            return (pts.length == 0) ? 0 : Math.round(pts.reduce((a, b) => a + b)/pts.length)
          })        
          const recent = sda.slice(-28)
          const lastDate =  data[data.length - 1][0]
          const newCases = timeline[timeline.length - 1]
          const delta = newCases - timeline[timeline.length - 2]

          if (data.length > 0) {
              dispatch({
                  type: "FETCH_NEW_CASES",
                  data: {
                      lastDate: lastDate,
                      newCases: newCases,
                      delta: delta,
                      sda: sda[sda.length - 1],
                      timeline: recent
                  }
              });
          }
      });
    };
  }

  useEffect(() => {
    dispatch(getNewCasesToday());
  });

  document.title = `New COVID-19 cases in ${location} as of ${lastDate}`;

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-title">New COVID-19 cases in {location} as of <span data-testid="last-date">{lastDate}</span></div>
        <NewCasesToday newCases={newCases} delta={delta} min={0} />
        <Sparklines data={timeline}>
          <SparklinesCurve color="red" />
          <SparklinesReferenceLine type="median" />
          <SparklinesSpots />
        </Sparklines>
      </header>
    </div>
  );
}

export default App;
