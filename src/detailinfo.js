import React from 'react';
import { Carousel, Descriptions, Badge, Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;




class Detailinfo extends React.Component {
    render(){
        const { propscontent,day } =this.props;
        // console.log(day)
        return(
            <div>
                <Descriptions title="축제 이름" bordered>
                    <Descriptions.Item label="축제 이름" span={2}>{propscontent.title}</Descriptions.Item>
                    <Descriptions.Item label="전화번호" span={1}>{propscontent.tel}</Descriptions.Item>

                    <Descriptions.Item label="축제 내용" span={3}>
                    {propscontent.overview}
                    </Descriptions.Item>

                    <Descriptions.Item label="시작 날짜" span={1}>{day.startday}</Descriptions.Item>
                    <Descriptions.Item label="종료 날짜" span={2}>{day.endday}</Descriptions.Item>

                    <Descriptions.Item label="주소" span={3}>
                    {propscontent.addr1}
                    </Descriptions.Item>

                    <Descriptions.Item label="축제 관련 사이트" span={3}>
                        <Badge status="processing" text="Running" />
                        <br />
                        <a href={propscontent.homepage} target="_blank" title="새창:행사 홈페이지로 이동">{propscontent.homepage}</a>
                    </Descriptions.Item>
                    <Descriptions.Item label="입장료">$80.00</Descriptions.Item>
                    <Descriptions.Item label="할인">$20.00</Descriptions.Item>
                    <Descriptions.Item label="주최 기관">{propscontent.telname}</Descriptions.Item>
                </Descriptions>
            </div>
        )
    }
}


export default Detailinfo;