import React from "react";
import { NextComponentType } from "next/types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const style = {
    root: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1
    }
};

const header: NextComponentType<any> = (props: any) => {
    const { classes } = props;
    console.log(classes);
    return (
        <div className={ classes.root }>
            <AppBar position="static">
                <Toolbar>
                    <MenuIcon></MenuIcon>
                    <Typography variant="h6" style={ style.title }>
                        News
                    </Typography>
                    <IconButton>
                        <MenuIcon></MenuIcon>
                    </IconButton>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withStyles(style)(header);