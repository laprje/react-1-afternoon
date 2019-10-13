// import React, {Component} from 'react';

// class FilterObject extends Component {
//     constructor() {
//         super();
//         this.state = {
//             unfilteredArray: [
//                 {age: 19, height: "Six Two", name: 'Lance'},
//                 {age: 19, hairColor: 'blonde', name: "Paul"},
//                 { age: 45, hairColor: "grey", height: "Six One"},
//                 {name: "Kris", hairColor: 'black', height: 'Five Eight'}
//             ],
//             userInput: '',
//             filteredArray: []

//             //finished here, you createed the constructor and finished all of the initial state requirements
//         }
//     }

//     handleChange(val) {
//         this.setState({userInput: val});
//       }
    
//       filterArray(prop) {
//         let unfilteredArray = this.state.unfilteredArray;
//         let filteredArray = [];
    
//         for ( let i = 0; i < unfilteredArray.length; i++ ) {
//           if ( filteredArray[i].hasOwnProperty(prop) ) {
//             filteredArray.push(unfilteredArray[i]);
//           }
//         }
    
//         this.setState({ filteredArray: filteredArray });
//       }

//     render() {
//         return (
//             <div className="puzzleBox filterObjectPB">
//                 <h4>Filter Object</h4>
//                 <span className="puzzleText">
//                 Original:
//                 {JSON.stringify(this.state.unfilteredArray, null, 10)}
//                 </span>
//                 <input className="confirmationButton" onChange={(e) => this.handleChange(e.target.value) }>

//                 </input>
//                 <button className="confirmationButton" onClick={ () => this.filterArray(this.state.userInput) }>
//                     Filter
//                 </button>
//                 <span className="resultsBox filterObjectRB"> Filtered:
//                 {JSON.stringify(this.state.filteredArray, null, 10)}
//                 </span>
//             </div>
//         )
//     }
// }

// export default FilterObject;

import React, { Component } from 'react';

export default class FilterObject extends Component {

  constructor() {
    super();

    this.state = {
      unfiltered: [
        {age: 19, height: "Six Two", name: 'Lance'},
                        {age: 19, hairColor: 'blonde', name: "Paul"},
                        { age: 45, hairColor: "grey", height: "Six One"},
                        {name: "Kris", hairColor: 'black', height: 'Five Eight'}
      ],

      userInput: '',
      filtered: []
    }
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  filterEmployees(prop) {
    let unfiltered = this.state.unfiltered;
    let filtered = [];

    for ( let i = 0; i < unfiltered.length; i++ ) {
      if ( unfiltered[i].hasOwnProperty(prop) ) {
        filtered.push(unfiltered[i]);
      }
    }

    this.setState({ filtered: filtered });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4> Filter Object </h4>
        <span className="puzzleText"> Original: { JSON.stringify(this.state.unfiltered, null, 10) } </span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.filterEmployees(this.state.userInput) }> Filter </button>
        <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filtered, null, 10) } </span>
      </div>
    )
  }
}