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
    <hr />
        </div>
        <div className="outlet">
        
    <Outlet />
        </div>
        
    </Container>
</>
}

const Container = styled.div`
    // display:grid;
    // grid-template-columns: 1fr 1fr 1fr;
    // grid-template-rows: 80px 80vh ;
    position:relative;
    .sideBar{
    position:absolute
    }
    .outlet{
    
    width:100%;
    margin:auto;
    position:absolute;
    left:250px;
    }


`