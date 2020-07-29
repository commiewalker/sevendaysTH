import React from 'react'
import { Grid, Paper, Box, Typography } from "@material-ui/core";


function Test() {

    return (
        <Grid container={true} spacing={2}>
            <Grid item xs={12}>
                <Paper elevation={5}>
                 <Box>
                 <p>XX</p>
                 <img src="/pic/allproducts.jpg" alt="products" />
                 </Box>
                </Paper>
            </Grid>
        </Grid>

    )
}

export default Test;