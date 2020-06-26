import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route,Switch,Link } from "react-router-dom"
import Signup from "./signup"
import Showmap from "./map1"
import Selectlocal from "./Selectlocal"
import Edituser from "./edituser"
import Mypage from "./Mypage"
import Proplocal from "./Proplocal";
import Eventinfo from "./eventinfo"
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';
import Ranking from "./ranking"
import styled from "styled-components";
import logo from "./concert-2527495.jpg"
import Testmap from "./testmap"


const { Header, Content, Footer } = Layout;

function Index(){
  return(
    <div>
      {/* <Container style={{width:"200px", height:"200px"}}>Use Event
      
      <div style={{fontSize:"60px", color:"#ffffff", fontWeight:700, backgroundColor:"#ffccc7", height:"200px", display:"flex", justifyContent:"center", alignItems: "center"}}></div>
      </Container> */}
      
      
      <div style={{marginRight:"150px", marginLeft:"150px"}}>
      
        <Layout>
        <img  src={logo} style={{height:"300px"}} />
        <div style={{fontSize:"60px",fontWeight: "bold" ,position: "absolute",color:"#ffffff", marginTop:"100px", marginLeft:"300px"}}>
          {/* 원하는 적당한 위치를 지정하면 이 글이 그 위치에 나타남.left: 100px; width: 450px; bottom: 140px; font-size: 1.8em, */}
          Use Event
        </div>
          <Header>
            <div>
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} >
                <Menu.Item key="1"><Link to="local">위치검색</Link></Menu.Item>
                <Menu.Item key="2"><Link to="Mypage">My page</Link></Menu.Item>
                <Menu.Item key="3"><Link to="Ranking">축제 랭킹</Link></Menu.Item>
                <Menu.Item key="4"><Link to="map">지도 보기</Link></Menu.Item>
              </Menu>
            </div>
          </Header>
        </Layout>
        {/* <ul>
          <li><Link to="/">Login</Link></li>
          <li><Link to="/signup">signup</Link></li>
          <li><Link to="/map">map</Link></li>
          <li><Link to="/local">map</Link></li>
          <li><Link to="/Edituser">Edituser</Link></li>
        </ul> */}
        {/* <Switch>
          <Route exact path="/"><App /></Route>
          <Route path="/signup"><Signup /></Route>
          <Route path="/local"><Selectlocal /></Route>
          <Route path="/Edituser"><Edituser /></Route>
          <Route path="/Mypage"><Mypage /></Route>
          <Route path="/map"><Showmap /></Route>
          <Route path="/Ranking"><Ranking /></Route>
          <Route path="/Eventinfo"><Eventinfo /></Route>
          <Route path="/">404 not found</Route>
        </Switch> */}
        <Testmap />
      </div>
    </div>
  )
}


ReactDOM.render(<BrowserRouter><Index /></BrowserRouter>,document.getElementById('root'));


