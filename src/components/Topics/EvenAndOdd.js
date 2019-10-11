import React, {Component} from 'react';

class EvenAndOdd extends Component {
    constructor() {
        super()
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
      }
    }

    handleChange(val) {
        this.setState({userInput: val})
    }

    assignEvenAndOdd(userInput) {
        let arr = userInput.split(',');
        let odds = [];
        let evens = [];
        for (let i = 0; i < arr.length; i++) {
            if(arr[i] % 2 === 0) {
                evens.push(parseInt(arr[i], 10));
            } else odds.push(parseInt(arr[i], 10));
        }
        this.setState({evenArray: evens, oddArray: odds})
    }

    render() {
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4>
                    Evens and Odds
                </h4>
                <input className="inputLine" onChange={(event) => this.handleChange(event.target.value)}>

                </input>
                <button className="confirmationBox" onClick={ () => this.assignEvenAndOdd(this.state.userInput)}>
                    Split
                </button>
                <span className="resultsBox">
                    Evens: {JSON.stringify(this.state.evenArray)}
                </span>
                <span className="resultsBox">
                    Odds: {JSON.stringify(this.state.oddArray)}
                </span>
            </div>
        )
    }
}

export default EvenAndOdd;