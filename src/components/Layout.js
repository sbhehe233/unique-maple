import React from 'react';
import {Helmet} from 'react-helmet';
import _ from 'lodash';

import {safePrefix} from '../utils';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';

export default class Body extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>{_.get(this.props, 'pageContext.frontmatter.title') && _.get(this.props, 'pageContext.frontmatter.title') + ' - '}{_.get(this.props, 'pageContext.site.siteMetadata.title')}</title>
                    <meta charSet="utf-8" />
                    <link rel="stylesheet" id="miyazaki-google-fonts-css" href="https://fonts.googleapis.com/css?family=Teko%3A400%2C500%2C600%2C700&amp;subset=latin-ext&amp;ver=4.9.2" type="text/css" media="all" />
                    <meta name="viewport" content="width=device-width, initialScale=1, userScalable=no" />
                    <link rel="stylesheet" href={safePrefix('assets/css/main.css')} />
                    <link rel="stylesheet" href={safePrefix('assets/css/markdown-images.css')} />
                    <noscript>{`<link rel="stylesheet" href=${safePrefix('assets/css/noscript.css')} />`}</noscript>
                </Helmet>
                    <div id="wrapper">
                        <Header {...this.props} />
                        <div id="main">
                            <div className="inner">
                                {this.props.children}
                            </div>
                        </div>
                        <Footer {...this.props} />
                    </div>
                    <Menu {...this.props} />
            </React.Fragment>
        );
    }
}
