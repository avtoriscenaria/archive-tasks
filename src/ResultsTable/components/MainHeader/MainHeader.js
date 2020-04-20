import React, {Component} from 'react';
import Breadcrumbs from './Breadcrumbs';
import './styles.scss';
import DatePickers from "./DatePicker";


export default class MainHeader extends Component{


    render() {
        const {onChangeDate, crumbs, start, end} = this.props;

        return (
            <div className={'main-header'}>
                <div className='mh-breadcrumbs'>
                    <Breadcrumbs crumbs={crumbs}/>
                </div>
                <div className='mh-datepickers'>
                    <DatePickers onChangeDate={v => onChangeDate(v, 'start')} value={start} maxDate={end}/>
                    -
                    <DatePickers onChangeDate={v => onChangeDate(v, 'end')} value={end} minDate={start}/>
                </div>
            </div>
        );
    }
}