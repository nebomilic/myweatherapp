import React, { Component } from 'react';
class App extends Component {

    someMethod() {
        // I put this here just to avoid some linter errors
        console.log(this.props);
    }


    render() {
        return (
            <div className='testStyle'>this is the stuff!</div>

        );
    }
}


export default App;

