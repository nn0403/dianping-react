import React, { Component } from 'react';
import Category from './componets/Category';
import Headline from './componets/Headline';

class Home extends Component {
    render() {
        return(
            <div>
                <Category/>
                <Headline/>
            </div>
        )
    };
}

export default Home;