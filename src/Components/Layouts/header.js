import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CreateBtn from '../Todos/Dialogs/Create';

export default function Header ( { onTodoCreate } ) {
    
    return (
        <Fragment>
            <AppBar>
                <Toolbar className="NavBar">
                    <Typography variant="h4" color="inherit">
                        Todo App
                    </Typography>
                    <CreateBtn onCreate={onTodoCreate} />
                </Toolbar>
            </AppBar>
        </Fragment>
    )
    
}
    
    