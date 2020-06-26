import React from 'react';
import { Map, GoogleApiWrapper,Marker,InfoWindow,showInfoWindow } from "google-maps-react"
import axios from "axios"

const API = "LcY0N9PYkutIkegyzhNA0I%2FfMrE11FOhUNjKlRModjkGTL2JM020kNi5YJteWdeouEQH%2Bx4S50MRj6BQbyEIhw%3D%3D"

class Showmap extends React.Component {
    constructor(props){
        super(props)
        this.state={
          eventlist:[]
        }
      }

      componentDidMount=()=>{
        this.geteventdata();
      }


      geteventdata =()=>{

        const { eventlist } = this.state;
    
        axios.get(`http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchFestival?ServiceKey=${API}&eventStartDate=20200101&eventEndDate=&areaCode=&sigunguCode=&cat1=&cat2=&cat3=&listYN=Y&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&arrange=A&numOfRows=5&pageNo=1`)
        .then(result=>{
          const {data:{response:{body:{items:{item}}}}} = result
        //   console.log(item)
          for(let n =0; n < item.length;n++){
            const partlist = item[n]
            this.setState({
              eventlist:[...this.state.eventlist,partlist]
            })
          }
          console.log(this.state.eventlist[0].mapx)
        })
        .catch(err=>console.log(err))
    
    
    
    
    
    
    
        // axios.get(`http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchFestival?ServiceKey=${API}&eventStartDate=20200101&eventEndDate=&areaCode=&sigunguCode=&cat1=&cat2=&cat3=&listYN=Y&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&arrange=A&numOfRows=500&pageNo=1`)
        // .then(result=>{
        //   const {data:{response:{body:{items:{item}}}}} = result
        //   console.log(item[0])
        //   for(let n =0; n<item.length; n++){
        //     axios.get(`http://api.visitkorea.or.kr/openapi/service/rest/KorService/detailCommon?ServiceKey=${API}&contentTypeId=${item[n].contenttypeid}&contentId=${item[n].contentid}&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&transGuideYN=Y`)
        //     .then(res=>{
        //       // console.log(res)
        //       const {data:{response:{body:{items:{item}}}}} = res
        //     })
        //     .catch(err=>console.log(err))
        //   }
        // })
        // .catch(err=>console.log(err))
      }



    render(){
        const mapStyles = {
            width: "100%",
            height: "100%",
        };
        const eventmarkers = this.state.eventlist.map((item,i)=>{
            return(
                <Marker key={i}
                    name={"Current location"}
                    title={"marker title"} 
                    position={{ lat:item.mapy, lng:item.mapx }}
                />
            )
        })
        return(
            <div>
                <Map
                  google = {this.props.google}
                  zoom={14}
                  style={mapStyles}
                  initialCenter={{ lat:37.5, lng:127 }}
                >
                    {eventmarkers}
                    {/* <Marker 
                      name={"Current location"}
                      title={"marker title"} 
                      position={{ lat:35.2360687598, lng:128.8731002475 }}
                    /> */}
                    {/* lat-mapy , lng-mapx */}
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyCgl0XB4EdBHtmyB4P7Pu4HbnM3gndzyiY"
})(Showmap);