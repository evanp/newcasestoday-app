import React from 'react';
import './NewCasesToday.css';

class NewCasesToday extends React.Component {
    constructor(props) {
        super(props);
        this.state = {props, newCases: 0}
    }

    render() {
        return <div class='NewCasesToday' data-testid='new-cases-today'>{(this.state.newCases >= 0) ? '+' : ''}{this.state.newCases}</div>
    }
}


export default NewCasesToday;
