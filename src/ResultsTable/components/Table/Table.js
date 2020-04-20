import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Table as _Table} from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import StarIcon from '@material-ui/icons/Star';
import translations from '../../constants/translations';
import './styles.scss';

const columns = [
    {name: 'star'},
    {name: 'name/email', key: 'name_email'},
    {name: 'task'},
    {name: 'time'},
    {name: 'right'},
    {name: 'wrong'},
    {name: 'empty'},
    {name: 'date'}
];

const makeTime = (time) => {

    let hours = Math.floor(time/3600000);
    let minutes = Math.floor((time-hours)/60000);
    let seconds = Math.floor((time-hours-minutes)/1000);

    return `${hours}:${minutes<10 ? '0'+minutes : minutes}:${seconds<10 ? '0'+seconds : seconds}`

};

const calculateSum = (data, param) => {

    let res = 0;
    for (let task of data) {
        res += task[param]
    }

    if (param === 'time') {
        return makeTime(res)
    } else {
        return res
    }
};

const useStyles = makeStyles({
    table: {
        minWidth: 650,
        boxShadow: 'none',
        paddingTop: 16
    }
});

export default function Table({data, onChange}) {
    const classes = useStyles();

    return (
        <TableContainer className={classes.table} component={Paper}>
            <_Table className={'r-table'} aria-label="simple table">
                <TableHead className={`rt-header`}>
                    <TableRow>
                        {
                            columns.map((c, i) => c.name === 'star' ?
                                <TableCell key={`${c.name}-${i}`} align='left' className={`rth-cell ${c.name}`}>
                                    <Checkbox disabled={true} icon={<StarIcon />} checkedIcon={<StarIcon />} name="checkedH" />
                                </TableCell>
                                :
                                <TableCell key={`${c.name}-${i}`} className={`rth-cell ${c.key || c.name}`} align="left">
                                    {
                                        c.name !== 'date' ? translations[c.name] :
                                            <div className='cell-item'>
                                                {translations[c.name]}
                                                {c.name === 'date' ? <ArrowDownwardIcon /> : null}
                                            </div>
                                    }

                                </TableCell>
                            )
                        }
                    </TableRow>
                </TableHead>
                <TableBody className={`rt-body`}>
                    {data.map((row, i) => (
                        <TableRow key={`${row.name}-${i}`}>
                            <TableCell className={`rtb-cell checkbox`}>
                                <div>
                                    <Checkbox icon={<StarBorderIcon />} checked={row.enabled} checkedIcon={<StarIcon />} name="checkedH" onChange={e => onChange(row._id, e.target.checked)}/>
                                </div>
                            </TableCell>
                            <TableCell className={`rtb-cell name-email`}>
                                <div>
                                    {`${row.name}\n${row.email}`}
                                </div>
                            </TableCell >
                            {
                                columns.map((c, i) => i < 2 ? null : (
                                    <TableCell key={`cell-${i}`} className={`rtb-cell ${c.name}`}>
                                        <div className='results-sum'>
                                            {
                                                c.name === 'task' ? translations.total :
                                                    c.name === 'date' ? row.date :
                                                   calculateSum(row.data, c.name)
                                            }
                                        </div>
                                        {
                                            c.name === 'date' ? null :
                                            row.data.map((r, _i) => <div key={`result-${_i}`} className='small-table-cell'>{c.name === 'time' ? makeTime(r[c.name]): r[c.name]}</div>)
                                        }
                                    </TableCell>
                                ))
                            }
                        </TableRow>
                    ))}
                </TableBody>
            </_Table>
        </TableContainer>
    );
}