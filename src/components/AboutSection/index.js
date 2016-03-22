import React, { Component } from 'react';
import { styles } from './styles.scss';
import Counter from 'components/Counter';


export class AboutSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h2>About Page</h2>
                </div>
                <div className="page-header">
                    <h2>Counter Example</h2>
                </div>
                <Counter {...this.props} />
            </div>
        );
    }
}
