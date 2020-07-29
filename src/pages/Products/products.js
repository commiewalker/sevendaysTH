import React from 'react';
import { Button, ButtonGroup, Grid, Paper, Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
//import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Products() {
  const classes = useStyles();

  return (
      <Grid container={true}>
        <Grid item xs={2}>
          <Paper elevation={5}>
            <div className={classes.root}>
              <ButtonGroup
                orientation="horizontal"
                color="secondary"
                aria-label="horizontal contained primary button group"
                variant="text"
                size="large"
                
              >
                <Button>FIBERRY</Button>
                <Button>COFFEE</Button>
                <Button>COLLAGEN</Button>
                <Button>XXX</Button>
                <Button>YYY</Button>
                <Button>ZZZ</Button>
              </ButtonGroup>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={10}>
          <Paper elevation={5}>
            <p>XXX</p>
            <img src="/pic/allproducts.jpg" alt="products" className="bigimg" />
            <img src="/pic/allproducts.jpg" alt="products" className="bigimg" />
            <img src="/pic/allproducts.jpg" alt="products" className="bigimg" />
            <img src="/pic/allproducts.jpg" alt="products" className="bigimg" />
            <img src="/pic/allproducts.jpg" alt="products" className="bigimg" />
          </Paper>
        </Grid>
      </Grid>
  );
}