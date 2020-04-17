import React, {Component} from 'react';
import translations from '../constants/transltions';
import PropTypes from 'prop-types';
import './styles.scss';
import LetterInputs from "../components/LetterInputs";
import table from './table1.png';

const red = 'к', black = 'ч';

export default class  Task1_1 extends Component{

    static propTypes = {
        result: PropTypes.object,
        onChange: PropTypes.func.isRequired,
        onFinish: PropTypes.func.isRequired,
        finished: PropTypes.bool,
        fResults: PropTypes.object,
    };

    onDelete = async (i, param) => {
        const {result, onChange} = this.props;

        if (onChange) {

            // if (!not_focus) {
            //     let arr = result[param] || [];
            //     arr[i] = arr[i] === undefined ? undefined : '';
            //     let newResult = {
            //         ...result,
            //         [param]: arr
            //     };
            //
            //     await onChange(newResult);
            // }

            //console.log('DELETE')


            let input = document.getElementById(`input-${param}-${i-1 > 0 ? i-1 : 0}`);

            if (input) {
                input.getElementsByTagName('input')[0].focus()
            }

        }
    };

    onChange = async (v, i, param) => {
        const {result, onChange, onFinish} = this.props;

        if (onChange) {
            //console.log('CHANGE', v);
            let arr = result[param] || [];
            arr[i] = v;
            let newResult = {
                ...result,
                [param]: arr
            };

            await onChange(newResult);

            if ( this.checkResult(newResult) ) {
                if (onFinish) {
                    onFinish(newResult)
                }
            }

            let input = document.getElementById(`input-${param}-${i+1}`);
                if (input) {
                    input.getElementsByTagName('input')[0].focus()
                }
        }
    };

    checkResult = (result) => {
        return (result.red || []).filter(v => v).length === 25 && (result.black || []).filter(v => v).length === 24
    };

    makeEnabled = (i, res, size) => {
        let red = (res.red || []).filter((v, _i) => (size===24 || _i < i) && v).length;
        let black =  (res.black || []).filter((v, _i) =>  (size===25 || _i < i) && v).length;

        if (size === 24) {
            return i !== black
        } else {
            return i !== red || black !== 24
        }
    };

    render() {
        const {finished, fResults, result} = this.props;

        return (
            <div className='task1_1'>
                <div className='name'>{translations.task1_1_name}</div>
                <div className='description'>
                    {
                        finished ? fResults : translations.task1_1_description
                    }
                </div>
                <div className='task_image'>
                    <img alt='' src={table}/>
                </div>
                <div className='answers_fields'>
                    <LetterInputs label={black} size={24} color={'black'} onChange={(v, i) => this.onChange(v, i, 'black')}
                                  onDelete={i => this.onDelete(i, 'black')}
                                  disabled={finished}
                                  answers={result.black || []} enabled={i => this.makeEnabled(i, result, 24)}/>
                    <LetterInputs label={red} size={25} color={'red'} onChange={(v, i) => this.onChange(v, i, 'red')}
                                  onDelete={i => this.onDelete(i, 'red')}
                                  disabled={finished}
                                  answers={result.red || []} enabled={i => this.makeEnabled(i, result, 25)}/>
                </div>
            </div>
        )
    }
}