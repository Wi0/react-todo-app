import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default props =>
    <Fragment>
        <AppBar>
            <Toolbar>
                <Typography variant="h4" color="inherit">
                    Todo App
                </Typography>
            </Toolbar>
        </AppBar>
    </Fragment>
    