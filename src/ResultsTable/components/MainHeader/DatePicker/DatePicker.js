import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './styles.scss'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        height: 38
    },
    textField: {
        width: 150,
        height: '100%',
        '& > label': {
            display: 'none'
        },
        '& > .MuiInputBase-root': {
            margin: 0,
            height: '100%'
        },
        '& > .MuiInputBase-root > input': {
            padding: '5px 0'
        }

    },
}));

const makeDefaultValue = (v) => {

    if (v === undefined) {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth()+1;
        let day = date.getDate();

        return `${year}-${month < 10 ? '0'+month : month}-${day < 10 ? '0'+day : day}`
    }
};

export default function DatePickers({value}) {
    const classes = useStyles();

    return (
        <form className={`${classes.container} date-picker`} noValidate>
            <TextField
                type="date"
                defaultValue={makeDefaultValue(value)}
                className={classes.textField}
                value={value}
                onFocus={v => console.log('FOCUS')}
                onChange={v => console.log(v.target.value)}
                InputLabelProps={{
                   // shrink: true,
                }}
            />
        </form>
    );
}