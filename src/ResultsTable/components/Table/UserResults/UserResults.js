import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Table as _Table} from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import StarIcon from '@material-ui/icons/Star';
import translations from '../../constants/translations';
import './styles.scss';

const columns = [
    {name: 'task'},
    {name: 'time'},
    {name: 'right'},
    {name: 'wrong'},
    {name: 'empty'},
    {name: 'date'}
];

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    }
});

const calculateResult = (data, param) => {
    if (param === 'time') {
        return ''
    } else  {
        return ''
    }
};

export default function Table({data}) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <_Table className={'r-table'} aria-label="simple table">
                <TableHead className={`rt-header`}>
                    <TableRow>
                        {
                            columns.map((c, i) =>
                                <TableCell key={`${c.name}-${i}`} className={`rth-cell ${c.key || c.name}`} align="left">
                                    {
                                        c.name === 'task' ? translations.total : calculateResult(data, c.name)
                                    }
                                </TableCell>
                            )
                        }
                    </TableRow>
                </TableHead>
                <TableBody className={`rt-body`}>
                    {data.map((row, i) => (
                        <TableRow key={`${row.name}-${i}`}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </_Table>
        </TableContainer>
    );
}