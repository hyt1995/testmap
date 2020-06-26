import React from 'react';
import axios from "axios"

class Singup extends React.Component {

    state={
        gender:false,
        id:"",
        password:"",
        passwordcheck:"",
        list:[]
    }




    changetargetvalue=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    changefemale=(e)=>{
        this.setState({
            gender:true
        })
    }

    changeman=(e)=>{
        this.setState({
            gender:false
        })
    }

    postdata=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:4003/signup",{userid:this.state.id, password:this.state.password, gender:this.state.gender})
        .then(result=>console.log(result))
        .catch(err=>console.log(err))
    }


    render(){
        console.log(this.props)
        return(
            <div style={{alignItems:"center"}}>
                <div style={{margin:30}}>
                    <input name="id" placeholder="아이디 입력" onChange={this.changetargetvalue} value={this.state.id} />
                </div>
                <div style={{margin:30}}>
                    <input name="password" placeholder="비밀번호 입력" onChange={this.changetargetvalue} value={this.state.password} />
                </div>
                <div style={{margin:30}}>
                    <input name="passwordcheck" placeholder="비밀번호 체크" onChange={this.changetargetvalue} value={this.state.passwordcheck} />
                </div>
                <div style={{margin:30}}>
                    <button onClick={this.changeman}>남</button><button onClick={this.changefemale} >여</button>
                </div>
                <div style={{margin:30}}>
                    <button onClick={this.postdata}>회원가입</button>
                </div>
            </div>
        )
    }
}


export default Singup