import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'

const Header = () => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                Project Portfolio
                </Typography>
                    <Button component={Link} to="/admin">
                        Admin
                    </Button>
                    <Button component={Link} to="/">
                        Projects
                    </Button>
            </Toolbar>

        </AppBar>
        </div>
    )
}
export default Header;