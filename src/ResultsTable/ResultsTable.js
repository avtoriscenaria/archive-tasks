import React, {Component} from 'react';
import './styles.scss'
import Divider from '@material-ui/core/Divider';
import MainHeader from "./components/MainHeader";
import Table from "./components/Table";
import PropTypes from 'prop-types';

export default class ResultsTable extends Component{
    static propTypes = {
        data: PropTypes.array,
        onChoose: PropTypes.func,
        onChangeDate: PropTypes.func,
        crumbs: PropTypes.array,
        onChangeCrumbs: PropTypes.func
    };

    render() {
        const {data, onChoose, onChangeDate, crumbs, onChangeCrumbs} = this.props;

        return (
            <div className='results-table'>
                <MainHeader onChangeDate={onChangeDate} crumbs={crumbs} onChangeCrumbs={onChangeCrumbs}/>
                <Divider/>
                <Table
                    data={data}
                    onChange={onChoose}
                />
            </div>
        )
    }
}