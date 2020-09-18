import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class Picture extends Component {

    render() { 
        
        return ( 
            <Card variant="outlined">
                <CardMedia
                style={{height:0, paddingTop:'100%'}}
                image="/pictures/20181204_180923.gif"
                />
                {/* <CardContent>
                    <Typography variant="h5" component="h2">
                        Hello there
                    </Typography>
                    <Typography color="textSecondary">
                        {this.props.category}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {this.props.description}
                    </Typography>
                </CardContent> */}
            </Card>
         );
    }
}

export default Picture;