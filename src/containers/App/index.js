import React, { Component } from 'react';

/* global styles for app */
import './styles/app.scss';

/* application components */
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

export class App extends Component {
    static propTypes = {
        children: React.PropTypes.any,
    };

    render() {
        return (
            <div>
                <Header />
                <main>
                    {this.props.children}
                </main>
                <Footer />
            </div>
        );
    }
}
