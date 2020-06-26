import React from 'react';
import { Timeline, Radio, Row, Col, Divider } from 'antd';
import {Link } from "react-router-dom"
import Edituser from "./edituser"


class Mypage extends React.Component{
    state={
        mode:"alternate",
        buttonvalue:false,
    }


    onChange = (e) => {
        this.setState({
            mode:e.target.value
        })
      };

      changebuttonvalue=(e)=>{
          this.setState({
            buttonvalue:true
          })
      }

      consolelog=(e)=>{
          this.setState({
            buttonvalue:false
          })
      }



    render(){
        return(
            <div>
                {this.state.buttonvalue ? <Edituser onCreate={this.consolelog} /> : 
                <div>
                    <Divider orientation="middle" style={{ color: '#434343', fontWeight: 'normal' }}>
                        내 정보
                    </Divider>
                    <Row gutter={16}>
                        <Col className="gutter-row" span={24} >
                            <div style={{textAlign:"center"}}>한영탁</div>
                        </Col>
                        <Col className="gutter-row" span={6} >
                            <div style={{marginLeft:"50px",textAlign:"center", border: "2px solid #000000", borderRadius:75,width:"150px", height:"150px"}}>내 사진</div>
                        </Col>
                        <Col className="gutter-row" span={5}>
                            <div style={{textAlign:"end"}}>성별 : 남자</div>
                        </Col>
                        <Col className="gutter-row" span={7}>
                            <div style={{textAlign:"start"}}></div>
                        </Col>
                        <Col className="gutter-row" span={6} style={{marginTop:"40px"}}>
                            <button onClick={this.changebuttonvalue} style={{border: "2px solid #000000",textAlign:"center", height:"90px", width:"100px", marginLeft:"90px", borderRadius: "20px",fontWeight:700, backgroundColor:"#ffffff", border: "0px" }}>
                                내 정보 수정
                            </button>
                        </Col>
                    </Row>
                </div>
    }
                <div>
                    <Divider orientation="middle" style={{ color: '#333', fontWeight: 'normal' }}>
                        내 타임라인
                    </Divider>
                    <Radio.Group
                        onChange={this.onChange}
                        value={this.state.mode}
                        style={{
                        marginBottom: 20,
                        }}
                    >
                        <Radio value="left">Left</Radio>
                        <Radio value="right">Right</Radio>
                        <Radio value="alternate">Alternate</Radio>
                    </Radio.Group>
                    <Timeline mode={this.state.mode}>
                        <Timeline.Item label="2015-09-01"><div style={{fontWeight:500, fontSize:"20px"}}>Create a services</div></Timeline.Item>
                        <Timeline.Item label="2015-09-01 09:12:11">Solve initial network problems</Timeline.Item>
                        <Timeline.Item>Technical testing</Timeline.Item>
                        <Timeline.Item label="2015-09-01"><div style={{fontWeight:500, fontSize:"20px"}}>Technical testing</div></Timeline.Item>
                        <Timeline.Item label="2015-09-01"><div style={{fontWeight:500, fontSize:"20px"}}>Create a sNetwork problems being solvedervices</div></Timeline.Item>
                        <Timeline.Item label="2015-09-01"><div style={{fontWeight:500, fontSize:"20px"}}>Technical testing</div></Timeline.Item>
                        <Timeline.Item label="2015-09-01"><div style={{fontWeight:500, fontSize:"20px"}}>Create a services</div></Timeline.Item>
                        <Timeline.Item label="2015-09-01"><div style={{fontWeight:500, fontSize:"20px"}}>CrNetwork problems being solvedeate a serNetwork problems being solvedvices</div></Timeline.Item>
                        <Timeline.Item label="2015-09-01"><div style={{fontWeight:500, fontSize:"20px"}}>Create a services</div></Timeline.Item>
                        <Timeline.Item label="2015-09-01"><div style={{fontWeight:500, fontSize:"20px"}}>Create a seNetwork problems being solvedrvices</div></Timeline.Item>
                        <Timeline.Item label="2015-09-01"><div style={{fontWeight:500, fontSize:"20px"}}>Network problems being solved</div></Timeline.Item>
                        <Timeline.Item label="2015-09-01"><div style={{fontWeight:500, fontSize:"20px"}}>Create a serNetwork problems being solvedvices</div></Timeline.Item>
                        <Timeline.Item label="2015-09-01"><div style={{fontWeight:500, fontSize:"20px"}}>Technical testiTechnical testingng</div></Timeline.Item>
                        <Timeline.Item label="2015-09-01"><div style={{fontWeight:500, fontSize:"20px"}}>Network problems being solved</div></Timeline.Item>
                        <Timeline.Item label="2015-09-01"><div style={{fontWeight:500, fontSize:"20px"}}>Create a services</div></Timeline.Item>
                        <Timeline.Item label="2015-09-01"><div style={{fontWeight:500, fontSize:"20px"}}>Network prTechnical testingoNetwork problems being solvedblems being solved</div></Timeline.Item>
                        <Timeline.Item label="2015-09-01"><div style={{fontWeight:500, fontSize:"20px"}}>Create a services</div></Timeline.Item>
                        <Timeline.Item label="2015-09-01"><div style={{fontWeight:500, fontSize:"20px"}}>Technical testing</div></Timeline.Item>
                        <Timeline.Item label="2015-09-01"><div style={{fontWeight:500, fontSize:"20px"}}>Create a servicNetwork problems being solvedes</div></Timeline.Item>
                        <Timeline.Item label="2015-09-01"><div style={{fontWeight:500, fontSize:"20px"}}>Create a services</div></Timeline.Item>
                        <Timeline.Item label="2015-09-01"><div style={{fontWeight:500, fontSize:"20px"}}>Network problems being solveds</div></Timeline.Item>
                        <Timeline.Item label="2015-09-01"><div style={{fontWeight:500, fontSize:"20px"}}>Network problems being solveds</div></Timeline.Item>
                        <Timeline.Item label="2015-09-01"><div style={{fontWeight:500, fontSize:"20px"}}>Create a services</div></Timeline.Item>
                        <Timeline.Item label="2015-09-01"><div style={{fontWeight:500, fontSize:"20px"}}>Network problems being solved</div></Timeline.Item>
                        <Timeline.Item label="2015-09-01"><div style={{fontWeight:500, fontSize:"20px"}}>Create a services</div></Timeline.Item>
                        <Timeline.Item label="2015-09-01"><div style={{fontWeight:500, fontSize:"20px"}}>Create a sNetwork problems being solvedervices</div></Timeline.Item>
                        <Timeline.Item label="2015-09-01"><div style={{fontWeight:500, fontSize:"20px"}}>Create a services</div></Timeline.Item>
                        <Timeline.Item label="2015-09-01"><div style={{fontWeight:500, fontSize:"20px"}}>Create a Network problems being solvedservices</div></Timeline.Item>
                        <Timeline.Item label="2015-09-01"><div style={{fontWeight:500, fontSize:"20px"}}>CrNetwork problems being solvedeate a services</div></Timeline.Item>
                        <Timeline.Item label="2015-09-01"><div style={{fontWeight:500, fontSize:"20px"}}>Create a services</div></Timeline.Item>
                    </Timeline>
    </div>
            </div>
        )
    }
}


export default Mypage;