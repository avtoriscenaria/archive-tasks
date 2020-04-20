
import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';
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

export default function DatePickers({value, onChangeDate, minDate, maxDate}) {
    const classes = useStyles();
    const [open, isOpen] = useState(false);

    const chooseDate = (date) => {
        if (onChangeDate) {
            onChangeDate(date);
            isOpen(false)
        }
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around" className={'date-picker'}>
                <KeyboardDatePicker
                    className={'picker-input'}
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    minDate={minDate}
                    maxDate={maxDate}
                    value={value || new Date()}
                    open={open}
                    disabled={true}
                    onClick={() => isOpen(true)}
                    onClose={() => isOpen(false)}
                    onChange={chooseDate}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </Grid>
        </MuiPickersUtilsProvider>
    )

    // return (
    //     <form className={`${classes.container} date-picker`} noValidate>
    //         <TextField
    //             type="date"
    //             defaultValue={makeDefaultValue(value)}
    //             className={classes.textField}
    //             value={value}
    //             open={false}
    //             onFocus={v => console.log('FOCUS')}
    //             onChange={v => console.log(v.target.value)}
    //             InputLabelProps={{
    //                // shrink: true,
    //             }}
    //         />
    //     </form>
    // );
}