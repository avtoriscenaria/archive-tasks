import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Breadcrumbs as _Breadcrumbs} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import './styles.scss';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
    },
    crumbs: {
        height: '100%',
        '& > .MuiBreadcrumbs-ol': {
            height: '100%'
        }
    },
    crumb: {
        height: '100%'
    }
}));

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function Breadcrumbs({crumbs}) {
    const classes = useStyles();

    return (
        <div className={`${classes.root} breadcrumbs`}>
            <_Breadcrumbs className={classes.crumbs} separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                {
                    crumbs.map((c, i) => i === crumbs.length-1 ? null : (
                        <Link key={`crumb-${i}`} className={classes.crumb} color="inherit" href="/" onClick={handleClick}>
                            {c}
                        </Link>
                    ))
                }
                <Typography color="textPrimary">{crumbs[crumbs.length-1]}</Typography>
            </_Breadcrumbs>
        </div>
    );
}