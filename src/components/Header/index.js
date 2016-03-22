import React, { Component } from 'react';
import { Link } from 'react-router';
import { styles } from './styles.scss';


export class Header extends Component {
    render() {
        return (
            <nav className={`${styles} navbar navbar-inverse navbar-fixed-top`}>
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="">Project Name</a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to="/home" activeClassName="active">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" activeClassName="active">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
