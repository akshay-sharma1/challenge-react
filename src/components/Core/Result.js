import React from 'react';

import { Typography, makeStyles, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root : {
        marginTop : 30,
        margin: 'auto', 
        maxWidth: 300
    }
}));


function Result( props ) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Typography variant="h6" style={{marginBottom: 20}}> Your Results:</Typography>
            <Typography style={{marginBottom: 20}}>{props.description}</Typography>
            <Button color="secondary" variant="contained" onClick={props.goBack}>
                Retake
            </Button>
        </div>
    )
}

export default Result;