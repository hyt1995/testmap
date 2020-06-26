import React from 'react';
import axios from "axios"
import { Button, Zoom } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter, Route,Switch,Link } from "react-router-dom"
import Proplocal from "./Proplocal";
import Propproplocal from "./Propproplocal"
import Map1 from "./map2"
//인천광역시 부산광역시 울산광역시 대구광역시 대전광역시 전라남도 광주광역시 전라북도 경기도
const vworld = {
    key: "483E0418-2F46-3223-80A1-F66D16A24685",
    url : "http://api.vworld.kr",
    localname:"충청남도",
    policelocal:["서울특별시","인천광역시","대전광역시","경기도","충청북도","충청남도","세종특별자치시","광주광역시","경상북도","경상남도","전라남도","부산광역시","대구광역시","울산광역시","강원도","전라북도"]
}


class Selectlocal extends React.Component {
  state={
    chooselocal:"",
    proplocalname:[],
    formap:{},
    formaplocalname:"",
    area:{}
  }



  clickparentlocalname= async (e)=>{// db에 저장시키기 위한 함수
       //여기는 첫번째 서울시 경기도 등 저장하는 함수
  //  axios.get("/req/search?service=search&version=2.0&request=search&key=483E0418-2F46-3223-80A1-F66D16A24685&format=json&size=10&page=1&query=경기도&type=district&category=L1&crs=EPSG:4326") 
  //  .then(result=>{
  //    console.log(result.data.response.result.items[0])
  //    axios.post("http://localhost:4003/firstlocalnameinstall",{data:result.data.response.result.items[0]})
  //    .then(res=>console.log(res))
  //    .catch(err=>console.log(err))
  //  })
  //  .catch(err=>console.log(err));

       //여기까지가
       // 시 군 저장하는 곳
      axios.get(`/req/search?service=search&version=2.0&request=search&key=${vworld.key}&format=json&size=1000&page=1&query=부산광역시&type=district&category=L2&crs=EPSG:4326`)
      // axios.get(`/req/search?service=search&version=2.0&request=search&key=483E0418-2F46-3223-80A1-F66D16A24685&format=json&errorformat=json&size=3000&page=1&query=대전광역시&type=district&category=L4&crs=EPSG:4326`)
        .then( result =>  {
        console.log(result.data.response.result.items)
        axios.post("http://localhost:4003/seconlocalnameinstall",{data:result.data.response.result.items, localname:"부산광역시"})
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
        })
        .catch(err=>console.log(err))
        //여기까지
  }

 //클릭하면 관련 데이터를 서버에서 불러오는 좌표
  getfirseclocalname=(e)=>{ //동 읍 지역을 불러오는 함수
    axios.post("http://localhost:4003/getfirseclocalname",{data:e.localname})
    .then(res=>{
      this.setState({
        chooselocal:e.localname, //경기도 같은 이름 저장
        proplocalname:res.data  // 경기도의 밑에 지역의 이름하고 좌표를 저장
      })
      console.log(this.state)
    })
    .catch(err=>console.log(err))
  }

  getarea=(e)=>{ 
    axios.post("http://localhost:4003/getarea",{data:e.localname})
    .then(res=>{
      console.log(res.data.localname)
      this.setState({
        formap:{
          arealocalname:res.data.localname,
          xsung:res.data.xsung,
          ysung:res.data.ysung,
          whkvy:13
        }
      })
      console.log(this.state.formap)
    })
    .catch(err=>console.log(err))
  }



    // getlocaldata=()=>{
    //     axios.get(`/req/search?service=search&version=2.0&request=search&key=${vworld.key}&format=json&size=10&page=1&query=${this.state.chooselocal}&type=district&category=L2&crs=EPSG:4326`)
    //     .then(result=>console.log(result.data.response.result.items))
    //     .catch(err=>console.log(err)) // 도 시 군 별로 다 불러 와서 그냥 데이터 베이스에 저장할것
    // }

    render(){
      const displaylocalname = vworld.policelocal.map((localname,i)=>{
        return(
          <div key={i++} style={{alignItems: "center",justifyContent: "center",textAlign: "center",border: 10, solid :"black" ,backgroundColor:"skyblue",width:"300px",marginBottom:"30px",height:"200px",borderRadius:"20px"}}>
            <div style={{fontSize:"30px",marginTop:"40px"}}>
              <Link to={`/local/${localname}`}>
                <Button onClick={()=>this.getfirseclocalname({localname})
                } style={{fontSize:"40px",height:"100px",width:"300px"}}>{localname}
                </Button>
                </Link>
            </div>
            <div>
              <Link to="/local/maps">
                <Button onClick={()=>this.getarea({localname})} style={{textAlign: "right",marginTop:"5px",width:"200px"}}>지도 넘어가기</Button>
              </Link>
            </div>
          </div>
        )
      });
      

        return(
          <div>
            <Switch>
            <Route path="/local/maps" render={() => <Map1 area={this.state.formap} />} />
            {/* <Route path={`/local/${this.state.chooselocal}/:key1`} render={()=> <Map1 area={this.state.arraylocalname}/>} onCreate={this.handlecreate} /> */}
            <Route path="/local/:id" render={() => <Proplocal name={this.state.chooselocal} array={this.state.proplocalname} />} />
              <Route path="/local">
                <div style={{margin:"60px"}}>
                  <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                  >
                    {displaylocalname}
                  </Grid>
                </div>
            </Route>
            </Switch>
          </div>
        )
    }
}

export default Selectlocal