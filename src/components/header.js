import React from 'react';

import { Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root : {
        marginTop : 30,
        margin: 'auto', 
        maxWidth: 300
    }
}));



function Header( props ) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Typography variant="h6">Do Your Parents Miss You or Do They Just Feel Obligated to Talk to You?</Typography>
        </div>
    )
}

export default Header