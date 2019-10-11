import React, {Component} from 'react';

class FilterObject extends Component {
    constructor() {
        super();
        this.setState = {
            unfilteredArray: [
                {age: 19, hairColor: brown, height: "Six Two"},
                {age: 1, color: 'white', make: "Subaru", model: "STI"},
                {age: 2, color: "white", make: "GMC", model: "Canyon"},
                {color: 'green', name: 'grass'},
                {name: "Price", age: 45, hairColor: "grey", height: "Six One"}
            ],
            userInput: '',
            filteredArray: []

            //finished here, you createed the constructor and finished all of the initial state requirements
        }
    }
    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">

                </span>
                <input className="confirmationButton">

                </input>
                <button className="confirmationButton">

                </button>
                <span className="resultsBox filterObjectRB">

                </span>
            </div>
        )
    }
}

export default FilterObject;