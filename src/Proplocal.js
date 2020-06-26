import React from 'react';
import axios from "axios"
import "antd/dist/antd.css";
import { Row, Col, Divider, Card, Button } from 'antd';
import { BrowserRouter, Route,Switch,Link } from "react-router-dom";
import Map1 from "./map2"


// const eventresult1 = [
//   {"title":"중구", "point":{"x": 126.99760159, "y": 37.56384258}},
//   {"title":"용산구", "point":{"x": 126.99048953, "y": 37.53252748}},
//   {"title":"성동구", "point":{"x": 127.03706964, "y": 37.5634306}},
//   {"title":"광진구", "point":{"x": 127.08240211, "y": 37.53859377}},
//   {"title":"동대문구", "point": {"x": 127.03996869, "y": 37.57441117}},
//   {"title":"중랑구", "point": {"x": 127.09281389, "y": 37.60652774}},
//   {"title":"성북구", "point": {"x": 127.01671042, "y": 37.58941377}},
//   {"title":"강북구", "point": {"x": 127.02554427, "y": 37.63979595}},
//   {"title":"도봉구", "point": {"x": 127.04727741, "y": 37.66870167}}
// ]

class Proplocal extends React.Component {
  constructor(props){
    super(props)
    this.state={
      pleaselocal:"",
      arraylocalname:{},
      changemy:true
    }
  }

  clicklocalname1= async (e)=>{
    await this.setState({
      pleaselocal:e.localname,
      arraylocalname:{
        name:e.localname,
        xsung:e.xsung,
        ysung:e.ysung,
        whkvy:14
      },
      changemy:false
    })

    await console.log(this.state.changemy)
    // await axios.get(`/req/search?service=search&version=2.0&request=search&key=${vworld.key}&format=json&size=10&page=1&query=${this.state.chooselocal}&type=district&category=L2&crs=EPSG:4326`)
    //     .then( async (result) =>  {
    //       await console.log(result.data.response.result.items)
    //       await this.setState({
    //         proplocalname:result.data.response.result.items
    //       })
    //       await console.log(this.state.proplocalname)
    //     })
    //     .catch(err=>console.log(err))
  }




    render(){
        const { name, array } = this.props;
        console.log(array)
        const display = array.map((dong,i)=>{
          return(
            <Col key={i++} span={6}>
              <div>
                <Link to ={`/local/${name}/${this.state.pleaselocal}`}>
                  <Button type="primary" style={{width:200, height:100}} onClick={()=>this.clicklocalname1(dong)}>{dong.localname}</Button>
                </Link>
              </div>
                {/* <div>
                  <Link to="/map"><Button type="primary" style={{width:200, height:30}} onClick={()=>this.clicklocalname1(dong)}>지도로 이동</Button></Link>
                </div> */}
            </Col>
          )
        })

        if(this.state.changemy){
          return (
            <div style={{padding:50,backgroundColor:"#fcffe6"}}>
              <Divider orientation="middle" style={{ color: "black", fontWeight: "normal"}}>
                {name}
              </Divider>
              <Row justify="center" gutter={[50,70]}>
                {display}
              </Row>
              {/* <Switch>
                <Route path={`/local/${name}/:key1`} render={()=> <Map1 area={this.state.arraylocalname}/>}  />
              </Switch> */}
            </div>
          )
        }else{
          return(
            <div>
              <Map1 area={this.state.arraylocalname}/>
            </div>
          )
        }
        
    }
}

export default Proplocal;