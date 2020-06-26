import React from 'react';
import axios from "axios"
import Selectlocal from "./Selectlocal"
import Showmap from "./map1"
import { BrowserRouter, Route,Switch,Link } from "react-router-dom"
import { Timeline, Radio, Row, Col, Divider, Form, Input, InputNumber, Button, Upload, message } from 'antd';



class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      eventlist:[],
      id:"",
      password:"",
      setLogin:false
    }
  }
  

  onchaneforlogin=(e)=>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }

submitlogininfo=(e)=>{
  e.preventDefault();
  console.log(this.state.id,this.state.password)
  axios.post("http://localhost:4003/login",{userid:this.state.id, password:this.state.password})
  .then(result=>{
    console.log(result.data.reason)
    const islogin = result.data.reason;
    if(islogin){
      this.setState({
        setLogin : islogin
      })
    }
  })
  .catch(err=>console.log(err))
}
  

  render(){
    if(this.state.setLogin){
      return(
        <div>
          <Showmap />
      </div>
      )
    }else {
        return (
          <div>
            <Divider orientation="middle" style={{ color: '#333', fontWeight: 'normal' }}>
              login
            </Divider>
            <form onSubmit={this.submitlogininfo}>
              <div>
              <Form labelCol={{ span: 7 }} wrapperCol={{ span: 10 }}>
                  <Form.Item label="아이디" rules={[{ required: true }]}>
                      <Input name="id" placeholder="아이디" onChange={this.onchaneforlogin} value={this.state.id} />
                  </Form.Item>
                  <Form.Item label="비밀번호" rules={[{ required: true }]}>
                      <Input name ="password" placeholder="비밀번호" onChange={this.onchaneforlogin} value={this.state.password}/>
                  </Form.Item>
              </Form>
              </div>
              <div>
                <div>
                  <Link to="signup"><button>회원가입</button></Link>
                </div>
                <button onClick={this.submitlogininfo}>로그인</button>
              </div>
            </form>
          </div>
        );
    }
  }
}

export default App;



// <div>
//                 <input name="id" placeholder="아이디" onChange={this.onchaneforlogin} value={this.state.id}/>
//                 <div>
//                 <input name ="password" placeholder="비밀번호" onChange={this.onchaneforlogin} value={this.state.password}/>
//               </div>
//               </div>