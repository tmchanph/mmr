import React from 'react';
import { Navbar } from 'react-bootstrap';

export default class Footer extends React.PureComponent{
  render(){
    return(
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              Copyright 2017
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
    );
  }
};