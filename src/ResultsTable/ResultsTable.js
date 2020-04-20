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

    state={
        start: new Date(),
        end: new Date()
    };

    onChangeDate = (day, param) => {
        const {onChangeDate} = this.props;

        this.setState({[param]:day})
    };

    render() {
        const {data, onChoose, crumbs, onChangeCrumbs} = this.props;
        const {start, end} = this.state;

        return (
            <div className='results-table'>
                <MainHeader onChangeDate={this.onChangeDate} crumbs={crumbs} onChangeCrumbs={onChangeCrumbs} start={start} end={end}/>
                <Divider/>
                <Table
                    data={data}
                    onChange={onChoose}
                />
            </div>
        )
    }
}