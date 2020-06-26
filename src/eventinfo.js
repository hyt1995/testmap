import React from 'react';
import { Carousel, Descriptions, Badge, Layout, Menu } from 'antd';
import Comment from "./comment"
import Detailinfo from "./detailinfo"
import Eventinfomap from "./eventinfomap"
import axios from "axios"


const API = "LcY0N9PYkutIkegyzhNA0I%2FfMrE11FOhUNjKlRModjkGTL2JM020kNi5YJteWdeouEQH%2Bx4S50MRj6BQbyEIhw%3D%3D"


const { Header, Content, Footer } = Layout;



class Eventinfo extends React.Component {
    constructor(props){
        super(props)
        this.state={
            layoutnumber:1,
            detailinfo:{},
            date:{},
            place:{}
        }
    }

    componentDidMount=()=>{
        this.getdetailinfo()
    }


    getdetailinfo=()=>{
        const { content:{content} } = this.props;
        // console.log("#########################################",content)
        axios.get(`http://api.visitkorea.or.kr/openapi/service/rest/KorService/detailCommon?ServiceKey=${API}&contentTypeId=${content.contenttypeid}&contentId=${content.contentid}&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&transGuideYN=Y`)
        .then(res=>{
            // console.log(res)
            const {data:{response:{body:{items:{item}}}}} = res
            this.setState({
                detailinfo:item,
                date:{
                    startday:content.eventstartdate,
                    endday:content.eventenddate
                },
                place:{
                    mapx:content.mapx,
                    mapy:content.mapy
                }
            })
            // console.log("*****************",this.state.date)
        })
        .catch(err=>console.log(err))
    }



    changelayoutnumber=(i)=>{
        this.setState({
            layoutnumber:i
        })
    }

    // infonumber=()=>{}


    render(){
        const { content: {content} } = this.props
        const { layoutnumber } = this.state;
        // let infochang = 
        return(
            <div>
                <Carousel autoplay style={{textAlign: "center",height: "350px",lineHeight: "200px",background: "#364d79",overflow: "hidden"}}>
                    <div style={{alignItems: "center",height: "200px",lineHeight: "200px",overflow: "hidden"}}>
                        <img src="http://tong.visitkorea.or.kr/cms/resource/48/2560348_image2_1.jpg" style={{width:"1500px", height:"400px"}}/>
                    </div>
                    <div>
                    <img src="http://tong.visitkorea.or.kr/cms/resource/48/2560348_image2_1.jpg" style={{width:"1500px", height:"400px"}}/>
                    </div>
                </Carousel>
                <Layout>
                    <Header style={{background:"#fff1f0"}}>
                    <div>
                        <Menu mode="horizontal" defaultSelectedKeys={['3']} style={{background:"#fff1f0"}} >
                        <Menu.Item key="1" onClick={()=>this.changelayoutnumber(1)}>상세정보</Menu.Item>
                        <Menu.Item key="2" onClick={()=>this.changelayoutnumber(2)}>후기</Menu.Item>
                        <Menu.Item key="3" onClick={()=>this.changelayoutnumber(3)}>지도보기</Menu.Item>
                        </Menu>
                    </div>
                    </Header>
                </Layout>
                {layoutnumber === 2?  <Comment /> : layoutnumber === 3? <Eventinfomap xy={this.state.place} /> : <Detailinfo propscontent={this.state.detailinfo} day={this.state.date}/>}
                <div></div>
            </div>
        )
    }
}






export default Eventinfo;


// http://tong.visitkorea.or.kr/cms/resource/48/2560348_image2_1.jpg
// http://tong.visitkorea.or.kr/cms/resource/48/2560348_image2_1.jpg