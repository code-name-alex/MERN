import React, { Component } from 'react';

class Personcard extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                Age: {this.props.age}<br />
                Hair Color: {this.props.hairColor} <br />

                <button onClick={() => this.props.increaseAge()}>Birthday Button</button>

            </div>
        )
    }
}

export default Personcard;