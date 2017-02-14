import TasksCSS from './tasks.css';

import React from 'react';
import { Badge } from 'react-bootstrap';

export default class StarredTaskBadge extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 1
        };
    }
    render(){
        return(
            <span>Starred Tasks <Badge>{this.state.count}</Badge></span>
        );
    }
};