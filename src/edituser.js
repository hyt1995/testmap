import React from 'react';
import { Timeline, Radio, Row, Col, Divider, Form, Input, InputNumber, Button, Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import Avatar from "./uploadpicture"





class Edituser extends React.Component{

    state={
        propbuttonvalue:true
    }

    
    handleprop=(e)=>{
        this.setState({
            propbuttonvalue:false
        })
        this.props.onCreate(this.state);
    }




    render(){
        return(
            <div>
                <Divider orientation="middle" style={{ color: '#333', fontWeight: 'normal' }}>
                        내 정보 수정
                </Divider>
                <Row gutter={16} style={{justifyContent:"center"}}>
                    <Col span={6}>
                      {/* <div style={{border: "1px solid #000000", borderRadius:"10px", width:"100px", height:"100px"}}>
                        사진
                      </div> */}
                      <div>
                          <Avatar />
                      </div>
                      <button style={{backgroundColor:"#ffffff", border: "0px", margin: "10px"}}>
                          내 사진 수정
                      </button>
                    </Col>
                    <Col span={12}>
                      <Form labelCol={{ span: 7 }} wrapperCol={{ span: 16 }}>
                          <Form.Item label="아이디" rules={[{ required: true }]}>
                              <Input />
                          </Form.Item>
                          <Form.Item label="비밀번호" rules={[{ required: true }]}>
                              <Input />
                          </Form.Item>
                          <Form.Item label="비밀번호 확인" rules={[{ required: true }]}>
                              <Input />
                          </Form.Item>
                      </Form>
                    </Col>
                </Row>
                <div style={{textAlign:"center"}}>
                    <button onClick={this.handleprop} style={{border: "0px solid #000000",textAlign:"center", height:"90px", width:"100px", borderRadius: "20px",fontWeight:700, backgroundColor:"#ffffff" }}>수정완료</button>
                </div>
            </div>
        )
    }
}


export default Edituser;