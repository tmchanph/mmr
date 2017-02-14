import LayoutCSS from './layout.css';

import React from 'react';
import Header from './header';
import Footer from './footer';
import Dashboard from '../dashboard/dashboard';

export default class Layout extends React.PureComponent{
  render(){
    return(
      <div>
        <Header />
        <div className="container layout">
            {this.props.children || <Dashboard />}
        </div>
        <Footer />
      </div>
    );
  }
};