import React, {Component} from 'react';
import Task1_1 from '../Task1/Task1_1';
import Task1_2 from '../Task1/Task1_2';
import Task2 from '../Task2'
import ResultsTable from "../ResultsTable";
import translations from "../ResultsTable/constants/translations";

const data = [{
    name: 'adasda',
    email: 'dadada.asda.@a.asdad',
    date: 123123,
    enabled: false,
    _id: 'adasdad123123d,asd',
    data: [
        {
            task: '0',
            time: 123,
            right: 2,
            wrong: 2,
            empty: 1,
            date: 123123123
        },
        {
            task: '1.1',
            time: 123,
            right: 2,
            wrong: 2,
            empty: 1,
            date: 123123123
        },
        {
            task: '1.2',
            time: 123,
            right: 2,
            wrong: 2,
            empty: 1,
            date: 123123123
        },
        {
            task: '2',
            time: 123,
            right: 2,
            wrong: 2,
            empty: 1,
            date: 123123123
        },
        {
            task: '3',
            time: 1231,
            right: 2,
            wrong: 2,
            empty: 1,
            date: 123123123
        },
        {
            task: '4',
            time: 2323,
            right: 2,
            wrong: 2,
            empty: 1,
            date: 123123123
        }
    ],
}];

export default class Container extends Component{
    state = {
        result: {},
        data: [],
        crumbs: [translations.tests, translations.attentiveness_test]
    };

    componentDidMount() {
        this.setState({data})
    }

    onChange = r => {
        //console.log(r);
        this.setState({result: r.result})
    };

    onChoose = (id, value) => {

        let user = this.state.data.find(u => u._id === id);
        console.log(id, value, user)
        if (user) {
            user.enabled = value;
            this.forceUpdate()
        }
    };

    onChangeDate = (e, v) => {
        console.log(e, v)
    };

    onChangeCrumbs =() => {

    };

    render() {
        const {result, crumbs} = this.state;

        return (
            <div style={{margin: 100, width: 1000,
            //    border: '1px solid black'
            }}>
                {/*<ResultsTable data={this.state.data} onChoose={this.onChoose}*/}
                {/*              crumbs={crumbs} onChangeDate={this.onChangeDate}*/}
                {/*              onChangeCrumbs={this.onChangeCrumbs}*/}
                {/*/>*/}
                <Task2 result={result} onChange={this.onChange}
                       finished={false} fResults={<div>FINISH</div>} timeOut={true}/>
            </div>
        )
    }
}