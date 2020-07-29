import React from "react"
import Nav from "./../../components/Nav/nav";
import Container from '@material-ui/core/Container';
import Homepage from "./../Home/home";
import Member from '../Member/member';
import Products from '../Products/products';
import Test from '../test/test';


function Landing() {
    return (
        <Container>
            <Nav home={<Homepage/>} products={<Products/>} guide="XX" member={<Member/>} />            
        </Container>
    )
}

export default Landing