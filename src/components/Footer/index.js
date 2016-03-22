import React, { Component } from 'react';
import './styles.scss';


export class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <p className="text-muted">&copy; 2016 Company Name</p>
                    </div>
                </div>
            </footer>
        );
    }
}
