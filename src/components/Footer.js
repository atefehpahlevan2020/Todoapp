import React from 'react';
import { Component } from 'react';
import FilterLink from './FilterLink';
import { SHOW_ALL , SHOW_ACTIVE , SHOW_COMPLETED } from './../actions/actionType';

class Footer extends Component{
    render() {
        return (
            <div>
                <span>Show : </span>
                <FilterLink filter={SHOW_ALL}>All</FilterLink>
                &nbsp;&nbsp;
                <FilterLink filter={SHOW_ACTIVE}>Active</FilterLink>
                &nbsp;&nbsp;
                <FilterLink filter={SHOW_COMPLETED}>Completed</FilterLink>
            </div>
        )
    }
}
export default Footer;
