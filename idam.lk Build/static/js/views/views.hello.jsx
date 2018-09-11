import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
    render () {
        return <p> Hello {this.props.name}!</p>;
    }
}

render(<App name="Your Name Here"/>, document.getElementById('hello'));