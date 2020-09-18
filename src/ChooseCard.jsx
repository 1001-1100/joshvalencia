import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class Greeting extends Component {

    render() { 
        
        return ( 
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="body2" component="p">
                        {this.props.message}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        <center>
                            {this.props.author}
                        </center>
                    </Typography>
                </CardContent>
            </Card>
         );
    }
}

export default Greeting;