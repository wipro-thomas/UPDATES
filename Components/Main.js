import React, {Component} from 'react';
import List from './List';
import Title from './Title';

class Main extends Component{
    render(){
        return <div>
            <Title title = {"To do list:"} />
                <List tasks = {['Clean the house', 'Read a book']}/>
                <List tasks = {['Walk the pet', 'Find gold']}/>
              </div>   
    }
}

export default Main