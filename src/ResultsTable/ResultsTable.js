import React, {Component} from 'react';
import './styles.scss'
import MainHeader from "./components/MainHeader";
import Table from "./components/Table";

export default class ResultsTable extends Component{

    render() {

        return (
            <div className='results-table'>
                <MainHeader/>
                <Table data={[{
                    name: 'adasda',
                    email: 'dadada.asda.@a.asdad',
                    date: 123123,
                    data: [
                        {
                            task: '0',
                            time:'123',
                            right: 2,
                            wrong: 2,
                            all: 8
                        },
                        {
                            task: '0',
                            time:'123',
                            right: 2,
                            wrong: 2,
                            all: 8
                        },
                        {
                            task: '0',
                            time:'123',
                            right: 2,
                            wrong: 2,
                            all: 8
                        },
                        {
                            task: '0',
                            time:'123',
                            right: 2,
                            wrong: 2,
                            all: 8
                        },
                        {
                            task: '0',
                            time:'123',
                            right: 2,
                            wrong: 2,
                            all: 8
                        },
                        {
                            task: '0',
                            time:'123',
                            right: 2,
                            wrong: 2,
                            all: 8
                        }
                    ]
                }]}/>
            </div>
        )
    }
}