import React from 'react';
import { Table, Tag, Space } from 'antd';
import {Link } from "react-router-dom"
import "antd/dist/antd.css";

// 현재 고쳐야할것 데이터베이스 eventname에서 columns의 데이어이름과 맞게 열을 다시 조정하고 
// 데이터를 props로 받아오면 
        //   let alldata = []
        //   for(데이터 숫자만큼 숫자로 돌리고){
        //     const testdata = {key:0}
        //       데이터 객체 1은 
        //       testdata.key = n
        //       testdata.name = data[n].title 
        //       testdata.age = data[n].age
        //       testdata.address = data[n].address
        //       alldata.push(testdata)
        //   }
        // 이렇게 배열로 저장해서 출력될 수 있도록 한다


class Edituser extends React.Component{
    render(){
        const columns = [
            {
              title: '축제 이름',
              dataIndex: 'name',
              key: 'name',
              render: asdf => <a style={{color:"#000000", fontWeight:700}}>{asdf}</a>,
            },
            {
                title: '시작날짜',
                dataIndex: 'firstday',
                key: 'firstday',
              },
              {
                title: '종료날짜',
                key: 'endday',
                dataIndex: 'endday',
              },
            {
              title: "전화번호",
              dataIndex: 'tel',
              key: 'tel',
            },
            {
              title: '주소',
              key: 'address',
              dataIndex: 'address',
            },
            {
                title: '축제 반응',
                key: 'like',
                dataIndex: 'like',
                render: (like) => (
                    <Tag style={{color:"#ff4d4f", backgroundColor:"#ffffff", border: "0px"}}><button style={{fontWeight:700, backgroundColor:"#ffffff", border: "0px"}}>좋아요</button>   {like}</Tag>
                ),
              },
              {
                key: 'like',
                dataIndex: 'like',
                render: (hate) => (
                    <Tag style={{color:"#1890ff", backgroundColor:"#ffffff", border: "0px"}}><button style={{fontWeight:700, backgroundColor:"#ffffff", border: "0px"}}>싫어요</button>   {hate}</Tag>
                ),
              },
              {
                key: 'button',
                dataIndex: 'button',
                render: ()=><Link to="/Eventinfo"><button style={{width:"170px",height:"50px", backgroundColor:"#ffffff", border: "0px", color:"#cf1322"}}>상세정보</button></Link>
              },
          ];

        //   like.map((hate)=>{
        //     return (
                
        //     )
        // })

          const data = [
            {
              key: '1',
              name: 'John Brown',
              firstday: 20201004,
              endday: 202010345,
              tel: "02393453",
              address: 'New York No. 1 Lake Park',
              like: "3545345",
              hate: "345"
            },
            {
                key: '2',
                name: 'John Brown',
                firstday: 20201004,
                endday: 202010345,
                tel: "02393453",
                address: 'New York No. 1 Lake Park',
                like: "34534534",
                hate: "3454"
              },
              {
                key: '3',
                name: 'John Brown',
                firstday: 20201004,
                endday: 202010345,
                tel: "02393453",
                address: 'New York No. 1 Lake Park',
                like: "like",
                hate: "hate"
              },
              {
                key: '4',
                name: 'John Brown',
                firstday: 20201004,
                endday: 202010345,
                tel: "02393453",
                address: 'New York No. 1 Lake Park',
                like: "like",
                hate: "hate"
              },
              {
                key: '5',
                name: 'John Brown',
                firstday: 20201004,
                endday: 202010345,
                tel: "02393453",
                address: 'New York No. 1 Lake Park',
                like: "like",
                hate: "hate"
              },
              {
                key: '6',
                name: 'John Brown',
                firstday: 20201004,
                endday: 202010345,
                tel: "02393453",
                address: 'New York No. 1 Lake Park',
                like: "like",
                hate: "hate"
              },
              {
                key: '7',
                name: 'John Brown',
                firstday: 20201004,
                endday: 202010345,
                tel: "02393453",
                address: 'New York No. 1 Lake Park',
                like: "like",
                hate: "hate"
              },
              {
                key: '8',
                name: 'John Brown',
                firstday: 20201004,
                endday: 202010345,
                tel: "02393453",
                address: 'New York No. 1 Lake Park',
                like: "like",
                hate: "hate"
              },
              {
                key: '9',
                name: 'John Brown',
                firstday: 20201004,
                endday: 202010345,
                tel: "02393453",
                address: 'New York No. 1 Lake Park',
                like: "like",
                hate: "hate"
              },
              {
                key: '10',
                name: 'John Brown',
                firstday: 20201004,
                endday: 202010345,
                tel: "02393453",
                address: 'New York No. 1 Lake Park',
                like: "like",
                hate: "hate"
              },
              {
                key: '11',
                name: 'John Brown',
                firstday: 20201004,
                endday: 202010345,
                tel: "02393453",
                address: 'New York No. 1 Lake Park',
                like: "like",
                hate: "hate"
              },
              {
                key: '12',
                name: 'John Brown',
                firstday: 20201004,
                endday: 202010345,
                tel: "02393453",
                address: 'New York No. 1 Lake Park',
                like: "like",
                hate: "hate"
              },
              {
                key: '13',
                name: 'John Brown',
                firstday: 20201004,
                endday: 202010345,
                tel: "02393453",
                address: 'New York No. 1 Lake Park',
                like: "like",
                hate: "hate"
              },
              {
                key: '14',
                name: 'John Brown',
                firstday: 20201004,
                endday: 202010345,
                tel: "02393453",
                address: 'New York No. 1 Lake Park',
                like: "like",
                hate: "hate"
              },
          ];
        return(
            <div>
                <div style={{fontSize : "30px", textAlign : "center" , margin:"10px", border: "2px solid #000000" , width: "500px", borderRadius : "10px"}}>
                    useEvent 전국 문화 축제 랭킹
                </div>
                <Table dataSource={data} columns={columns}/>
                <div></div>
            </div>
        )
    }
}

export default Edituser;



   