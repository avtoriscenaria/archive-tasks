import React, {Component} from 'react';
import Breadcrumbs from './Breadcrumbs';
import './styles.scss';
import translations from '../../constants/translations';


export default class MainHeader extends Component{


    render() {
        return (
            <div className={'main-header'}>
                <Breadcrumbs crumbs={[translations.tests, translations.attentiveness_test]}/>
            </div>
        );
    }
}