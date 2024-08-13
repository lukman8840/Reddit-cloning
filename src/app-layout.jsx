import { Outlet } from "react-router"
import Navbar from "./Components/Navbar"
import SideNav from "./Components/SideNav"
import styled from "styled-components"

export const AppLayout = () => {
    return <>
    <Container>
        <div className="navBar">
    <Navbar />
    <hr />
        </div>
        <div className="sideBar">
    <SideNav />
    <Separator />
        </div>
        <div className="outlet">
        
    <Outlet />
        </div>
        
    </Container>
</>
}

const Container = styled.div`
     //display:grid;
     //grid-template-columns: 1fr 1fr 1fr;
    // grid-template-rows: 80px 80vh ;
    position:relative;

    background:coral !important;
    .sideBar{
    position:absolute;
    left: -100px;
    background: red;
    }
    .outlet{
    
    width:100%;
    margin:auto;
    position:absolute;
    left:250px;
    }
`;

const Separator = styled.hr`
  border: none;
  border-left: 1px solid #ccc; 
  height: 100%;
  margin: 0;
`;