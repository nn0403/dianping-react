import React, { Component } from 'react';
import Category from './componets/Category';
import Headline from './componets/Headline';
import Discount from './componets/Discount';
import LikeList from './componets/LikeList';

class Home extends Component {
    render() {
        return(
            <div>
                <Category/>
                <Headline/>
                <Discount/>
                <LikeList/>
            </div>
        )
    };
}

export default Home;