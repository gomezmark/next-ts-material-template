import { Component } from "react";
import Layout from "../layout/Default";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

class Index extends Component {
    
    constructor(props: any) {
        // constructor
        super(props);
    }

    render () {
        return (
            <Layout>
                <Grid 
                    container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    <Grid item xs={12}>
                        <Typography>
                            Welcome to Template
                        </Typography>
                    </Grid>
                </Grid>
            </Layout>
        )
    }
};

export default Index;
