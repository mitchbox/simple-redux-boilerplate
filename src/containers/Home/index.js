import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

/* components */
import { HomeSection } from 'components/HomeSection';

const metaData = {
    title: 'Simple Redux Boilerplate',
    description: '',
    canonical: '',
    meta: {
        charset: 'utf-8',
        name: {
            keywords: 'react,meta,document,html,tags'
        }
    }
};

export class Home extends Component {
    render() {
        return (
            <div>
                <DocumentMeta {...metaData} />
                <HomeSection />
            </div>
        );
    }
}
