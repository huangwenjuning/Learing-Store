import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Util from '../../utils/utils';
import axios from '../../axios/index';
import './index.less';

class Header extends Component {
    componentWillMount() {
        this.setState({
            userName: '无骛',
        });
        // 设置当前时间
        setInterval(() => {
            let sysTime = Util.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        }, 1000);
        this.getWeatherAPIData();
    }

    // 通过百度接口获取当前天气
    getWeatherAPIData() {
        let city = '深圳';
        axios.jsonp({
            url: `http://api.map.baidu.com/telematics/v3/weather?location=${encodeURIComponent(city)}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
        }).then((res) => {
            if (res.status === 'success') {
                let data = res.results[0].weather_data[0];
                this.setState({
                    dayPictureUrl: data.dayPictureUrl,
                    weather: data.weather
                });              
            }
        })
    }

    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span={24}>
                        <span>欢迎，{ this.state.userName }</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">首页</Col>
                    <Col span={20} className="weather">
                        <span className="date">{ this.state.sysTime }</span>
                        <span className="weather-img">
                            <img src={this.state.dayPictureUrl} alt=""/>
                        </span>
                        <span className="weather-detail">{ this.state.weather }</span>
                    </Col>
                </Row>                
            </div>
        )
    }
}

export default Header;