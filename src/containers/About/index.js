import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DocumentMeta from 'react-document-meta';
import { AboutSection } from 'components/AboutSection';
import * as CounterActions from 'actions/counter';


const metaData = {
    title: 'About'
};

@connect(
    state => ({
        counter: state.counter
    }),
    dispatch => bindActionCreators(CounterActions, dispatch)
)

export class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main">
                <DocumentMeta {...metaData} />
                <AboutSection {...this.props} />
            </div>
        );
    }
}
