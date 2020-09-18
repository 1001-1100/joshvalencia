import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


class Greeting extends Component {

    render() { 
        
        return ( 
            <Card variant="outlined">
                <CardContent>
                    <Box my={2}>
                        <Typography variant="body2" component="p">
                            {this.props.message}
                        </Typography>
                    </Box>
                    <Typography align='center' variant="body1" color="textSecondary">
                        {this.props.name}
                    </Typography>
                </CardContent>
            </Card>
         );
    }
}

export default Greeting;