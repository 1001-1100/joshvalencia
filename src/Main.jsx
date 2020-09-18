import React, {Component} from 'react';
import SimpleCard from './SimpleCard';
import ChooseCard from './ChooseCard';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Fact from './Fact';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

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
            <Container>
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    <center>
                    Happy Birthday Josh Valencia!
                    </center>
                </Typography>
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                        <Box my={1}>
                            {/* <ChooseCard/> */}
                        </Box>
                        <Box my={1}>
                            {/* <ChooseCard/> */}
                        </Box>
                        <Box my={1}>
                            {/* <ChooseCard/> */}
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <SimpleCard/>
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                </Grid>
                {/* <Box my={4}>
                </Box>
                <Box my={4}>
                </Box> */}
                <center>
                    <Fact fact={this.props.fact} />
                    {Date.now() < 1600444801000 &&
                    <Box>
                    {!this.state.formOpen && 
                    <Button onClick={() => this.setState({formOpen: true})}variant="contained" color="primary">
                        Leave a greeting
                    </Button>
                    }
                    {this.state.formOpen &&
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScoo3fKScXWdnG_tMIryAt8Piqv-KoC9pAo6L7GVfjDjDfFYQ/viewform?embedded=true" width="720" height="1024" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                    }
                    </Box>
                    }
                </center>
            </Box>
            </Container>
         );
    }
}

export default Main;