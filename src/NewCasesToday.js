import './NewCasesToday.css';

export default function NewCasesToday(props) {
  
  return <div>
      <span className='NewCasesToday' data-testid='new-cases-today'>+{props.newCases}</span>
      (<span className='delta' data-testid='delta'>{(props.delta >= 0) ? '+' : '-'}{Math.abs(props.delta)}</span>)
      </div>
}

