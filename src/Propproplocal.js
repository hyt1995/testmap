import React from 'react';
import axios from "axios"
// import { Button } from '@material-ui/core';
import "antd/dist/antd.css";
import { Row, Col, Divider, Card, Button } from 'antd';
import { BrowserRouter, Route,Switch,Link } from "react-router-dom"
import Map1 from "./map1"



const eventresult = [
    {"title":"중dd구", "point":{"x": 126.99760159, "y": 37.56384258}},
    {"title":"용dd산구", "point":{"x": 126.99048953, "y": 37.53252748}},
    {"title":"성동dd구", "point":{"x": 127.03706964, "y": 37.5634306}},
    {"title":"광진dd구", "point":{"x": 127.08240211, "y": 37.53859377}},
    {"title":"동대d문구", "point": {"x": 127.03996869, "y": 37.57441117}},
    {"title":"중랑dd구", "point": {"x": 127.09281389, "y": 37.60652774}},
    {"title":"성d북구", "point": {"x": 127.01671042, "y": 37.58941377}},
    {"title":"강북d구", "point": {"x": 127.02554427, "y": 37.63979595}},
    {"title":"도ddd봉구", "point": {"x": 127.04727741, "y": 37.66870167}}
  ]




class Propproplocal extends React.Component {

    state={
        chooselocal:"",
        propproplocalname:[]
      }



      clicklocalname= async (e)=>{
        await this.setState({
          chooselocal:e.title,
          propproplocalname:eventresult
        })
        await console.log(this.state.chooselocal)
      }




    render(){
        const { proplocalname, proparraylocaname } = this.props

        const display = this.state.propproplocalname.map((dong,i)=>{
          return(
            <Col span={6}>
                <Button type="primary" style={{width:200, height:100}}>{dong.title}</Button>
                <Link to="/map"><Button type="primary" style={{width:200, height:30}}>지도로 이동</Button></Link>
            </Col>
            
          )
        })
        const {foo} = this.props.location.state;
console.log(foo)
        return (
            <div style={{padding:50,backgroundColor:"#fcffe6"}}>
              <Divider orientation="middle" style={{ color: "black", fontWeight: "normal"}}>
                {proplocalname}
              </Divider>
              <Row justify="center" gutter={[50,70]}>
                {display}
              </Row>
              <Switch>
                <Route path="/map1"><Map1></Map1></Route>
              </Switch>
            </div>
        )
    }
}

export default Propproplocal;