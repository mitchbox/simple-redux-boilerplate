import React, { Component, PropTypes } from 'react';

class Counter extends Component {
    render() {
        const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <p>Clicked: <span className="badge">{counter}</span> times</p>
                    <div className="btn-group">
                        <button className="btn btn-default" onClick={increment}>+</button>
                        <button className="btn btn-default" onClick={decrement}>-</button>
                        <button className="btn btn-default" onClick={incrementIfOdd}>Increment if odd</button>
                        <button className="btn btn-default" onClick={() => incrementAsync()}>Increment async</button>
                    </div>
                </div>
            </div>
        );
    }
}

Counter.propTypes = {
    increment     : PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    decrement     : PropTypes.func.isRequired,
    counter       : PropTypes.number.isRequired
};

export default Counter;
