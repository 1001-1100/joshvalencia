import React, {Component} from 'react';
import SimpleCard from './SimpleCard';
import Greeting from './Greeting';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Fact from './Fact';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { FixedSizeList } from 'react-window';

class Main extends Component {

    constructor(props){
        super(props);
        this.state = {
            formOpen: false
        };
    }

    handleClose = () => {
        return false;

    }

    render() { 
        return ( 
            <Container maxWidth="lg">
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    <center>
                    Happy Birthday Josh Valencia!
                    </center>
                </Typography>
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                        {this.props.leftGreetings.map(greeting => 
                            <Box my={1}>
                                <Greeting message={greeting.message} name={greeting.name}/>
                            </Box>
                        )}
                    </Grid>
                    <Grid item xs={6}>
                        <SimpleCard/>
                        <center>
                            <Fact fact={this.props.fact} />
                            <Box my={2}>
                            <Button onClick={this.props.reRoll}variant="contained" color="primary">
                                Re-Roll
                            </Button>
                            </Box>
                            <Box>
                            <Button onClick={this.leaveGreeting}variant="contained" color="secondary">
                                Leave a greeting
                            </Button>
                            </Box>
                        </center>
                    </Grid>
                    <Grid item xs={3}>
                        {this.props.rightGreetings.map(greeting => 
                            <Box my={1}>
                                <Greeting message={greeting.message} name={greeting.name}/>
                            </Box>
                        )}
                    </Grid>
                    {/* <Grid item xs={3}>
                        {this.props.greetings.map(greeting => 
                            <Box my={1}>
                                <Greeting message={greeting.message} name={greeting.name}/>
                            </Box>
                        )}
                    </Grid>
                    <Grid item xs={3}>
                        {this.props.greetings.map(greeting => 
                            <Box my={1}>
                                <Greeting message={greeting.message} name={greeting.name}/>
                            </Box>
                        )}
                    </Grid>
                    <Grid item xs={3}>
                        {this.props.greetings.map(greeting => 
                            <Box my={1}>
                                <Greeting message={greeting.message} name={greeting.name}/>
                            </Box>
                        )}
                    </Grid>
                    <Grid item xs={3}>
                        {this.props.greetings.map(greeting => 
                            <Box my={1}>
                                <Greeting message={greeting.message} name={greeting.name}/>
                            </Box>
                        )}
                    </Grid>  */}
                </Grid>
                {/* <Box my={4}>
                </Box>
                <Box my={4}>
                </Box> */}

            </Box>
            </Container>
         );
    }
}

export default Main;