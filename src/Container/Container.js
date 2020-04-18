import React, {Component} from 'react';
import Task1_1 from '../Task1/Task1_1';
import Task1_2 from '../Task1/Task1_2';
import Task2 from '../Task2'


export default class Container extends Component{
    state = {
        result: {},

    };

    onChange = r => {
        //console.log(r.complete);
        this.setState({result: r.result})
    };

    render() {
        const {result} = this.state;

        return (
            <div style={{margin: 100, width: 800, border: '1px solid black'}}>
                <Task2 result={result} onChange={this.onChange} finished={false} fResults={<div>FINISH</div>} timeOut={true}/>
            </div>
        )
    }
}