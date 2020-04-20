import React, {Component} from 'react';
import Breadcrumbs from './Breadcrumbs';
import './styles.scss';
import translations from '../../constants/translations';
import DatePickers from "./DatePicker";


export default class MainHeader extends Component{


    render() {
        const {onChangeDate, crumbs} = this.props;

        return (
            <div className={'main-header'}>
                <div className='mh-breadcrumbs'>
                    <Breadcrumbs crumbs={crumbs}/>
                </div>
                <div className='mh-datepickers'>
                    <DatePickers/>
                    -
                    <DatePickers/>
                </div>
            </div>
        );
    }
}