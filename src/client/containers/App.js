import React, { Component } from 'react';

class App extends Component {

    someMethod() {
        // I put this here just to avoid some linter errors
        console.log(this.props);
    }


    render() {
        return (
            <div>this is the shit!</div>

        );
    }
}


export default App;

