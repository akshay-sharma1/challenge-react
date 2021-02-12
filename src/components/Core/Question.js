import React from 'react'

import { makeStyles, Typography, Card, CardContent, Divider, RadioGroup, Radio, FormControlLabel } from '@material-ui/core'
import LiveHelp from '@material-ui/icons/LiveHelp';


// custom card styles
const useStyles = makeStyles({
    root: {
        marginTop : 10,
        width: 500,
        marginBottom: 50,
        margin: "auto",
      },
      title: {
        fontSize: 14,
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
      },
      pos: {
        marginBottom: 10,
      },

})


function Question( props ) {
    const classes = useStyles()

    return (
            <Card className={classes.root}>
                <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            <span style={{marginRight : 10}}><LiveHelp color="primary" fontSize="large"/></span>
                            Question {props.number + 1}
                        </Typography>
                    <Divider className={classes.pos}/>
                    <Typography style={{fontWeight : 'bold', marginBottom : 20}}>{props.question.prompt}</Typography>
                    <RadioGroup onChange={props.onChange} name={String(props.number + 1)}>
                        {Object.keys(props.question.options).map((keyName, keyIndex) => {
                            return <FormControlLabel value={keyName} control={<Radio required />} label={props.question.options[keyName]} key={keyIndex}/>
                        })}
                    </RadioGroup>
                    </CardContent>
            </Card>
    )
}

export default Question;