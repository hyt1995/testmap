import React from 'react';
import { Map, GoogleApiWrapper,Marker,InfoWindow } from "google-maps-react"
import axios from "axios"
import Eventinfo from "./eventinfo"
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link, Route,Switch } from "react-router-dom"
import "antd/dist/antd.css";

let posteventname = [];


const API = "LcY0N9PYkutIkegyzhNA0I%2FfMrE11FOhUNjKlRModjkGTL2JM020kNi5YJteWdeouEQH%2Bx4S50MRj6BQbyEIhw%3D%3D"

class Showmap extends React.Component {
    constructor(props){
        super(props)
        this.state={
          eventlist:[],
          showingInfoWindow: false,
          activeMarker: {},
          selectedPlace: {},
          infosindow:""
        }
      }

      componentDidMount=()=>{
        this.geteventdata();
      }

// 축제 이벤트 와 위치 그리고 상세페이지 불러오는 함수
      geteventdata =()=>{
        // 여기는 샘플 함수
        axios.get(`http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchFestival?ServiceKey=${API}&eventStartDate=20200101&eventEndDate=&areaCode=&sigunguCode=&cat1=&cat2=&cat3=&listYN=Y&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&arrange=A&numOfRows=5&pageNo=1`)
        .then(result=>{
          const {data:{response:{body:{items:{item}}}}} = result
          for(let n =0; n < item.length;n++){
            const partlist = item[n]
            this.setState({
              eventlist:[...this.state.eventlist,partlist]
            })
          }
          console.log(this.state.eventlist)
        })
        .catch(err=>console.log(err))
        //여기까지

// 여기가 본문 함수
        // axios.get(`http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchFestival?ServiceKey=${API}&eventStartDate=20200101&eventEndDate=&areaCode=&sigunguCode=&cat1=&cat2=&cat3=&listYN=Y&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&arrange=A&numOfRows=500&pageNo=1`)
        // .then(result=>{
        //   const {data:{response:{body:{items:{item}}}}} = result
        //   for(let n =0; n < item.length;n++){
        //     const partlist = item[n]
        //     this.setState({
        //       eventlist:[...this.state.eventlist,partlist]
        //     })
        //   }
        //   console.log(this.state.eventlist)
        //   for(let n =0; n<item.length; n++){
        //     axios.get(`http://api.visitkorea.or.kr/openapi/service/rest/KorService/detailCommon?ServiceKey=${API}&contentTypeId=${item[n].contenttypeid}&contentId=${item[n].contentid}&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&transGuideYN=Y`)
        //     .then(res=>{
        //       console.log(res)
        //       const {data:{response:{body:{items:{item}}}}} = res
        //     })
        //     .catch(err=>console.log(err))
        //   }
        // })
        // .catch(err=>console.log(err))
      }
// 여기까지

      installeventname=()=>{
        axios.get(`http://api.visitkorea.or.kr/openapi/service/rest/KorService/detailCommon?ServiceKey=${API}&contentTypeId=15&contentId=910544&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&transGuideYN=Y`)
        .then(result=>{
          console.log(result)
          // const {data:{response:{body:{items:{item}}}}} = result
          // for(let i =0; i< item.length; i++){
          //   posteventname.push(item[i])
          // }
          // console.log(posteventname);
        })
        .catch(err=> console.log(err))
      //   // axios.post("http://localhost:4003/installeventname",{eventname:posteventname})
      //   // .then(result=>console.log(result))
      //   // .catch(err=>console.log(err))
      }
// 이 함수가 이벤트 이름 db에 저장하는 함수
      // installeventname1=()=>{
        // axios.get(`http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchFestival?ServiceKey=${API}&eventStartDate=20200101&eventEndDate=&areaCode=&sigunguCode=&cat1=&cat2=&cat3=&listYN=Y&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&arrange=A&numOfRows=500&pageNo=1`)
        // .then(result=>{
        //   const {data:{response:{body:{items:{item}}}}} = result
        //   for(let i =0; i< item.length; i++){
        //     posteventname.push(item[i].title)
        //     console.log(posteventname);
        //   }
        // })
        // .catch(err=> console.log(err))
      //   console.log("눌렸음")
      //   axios.post("http://localhost:4003/installeventname",{eventname:posteventname})
      //   .then(result=>console.log(result))
      //   .catch(err=>console.log(err))
      // }


      onmarkerclick=(props,marker, e)=>{
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true,
            infosindow:marker.name
        });
        console.log(this.state.activeMarker.title);
        //버튼을 눌렀을 경우 axios로 this.state.activeMarker.title를 서버로 보내고
        // 그에 해당하는 값을 클라이언트에 보내 페이지를 구성하면 된다 
      }

      onmapclick=(props)=>{
          if(this.state.showingInfoWindow){
              this.setState({
                  showingInfoWindow:false,
                  activeMarker:null
              })
          }
      }


    render(){
        const mapStyles = {
            width: "83.7%",
            height: "90%",
        };
        const eventmarkers = this.state.eventlist.map((item,i)=>{
            return(
                    <Marker key={i++}
                        name={item.title+ " " + item.tel+ " " + item.eventstartdate+ " " +item.eventenddate}
                        title={item.title} 
                        position={{ lat:item.mapy, lng:item.mapx }}
                        onClick={this.onmarkerclick}
                    />
            )
        })
        const { area } = this.props
        console.log(area)
        return(
            <div style={{backgroundColor:"#ffffff", height:"100%"}}>
                <Map
                  google = {this.props.google}
                  zoom={area.whkvy} //14
                  style={mapStyles}
                  initialCenter={{ lat:area.ysung, lng:area.xsung }}
                  onClick={this.onmapclick}
                >
                    {eventmarkers}
                    <Marker 
                      name={"Current location"}
                      title={"center maker"} 
                      position={{ lat:area.ysung, lng:area.xsung }}
                      onClick={this.onmarkerclick}
                    />
                        <InfoWindow 
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}
                        >
                            <div>
                                {this.state.infosindow}
                                <button onClick={()=>this.props.history.push("./eventinfo")}>상세정보 보기</button>
                            </div>
                        </InfoWindow>
                    {/* lat-mapy , lng-mapx */}
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyCgl0XB4EdBHtmyB4P7Pu4HbnM3gndzyiY"
})(Showmap);


{/* <Link to="eventinfo"></Link> */}

