import React, { Component } from 'react';
import { styles } from './styles.scss';


export class HomeSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h2>Home Page</h2>
                </div>
            </div>
        );
    }
}
