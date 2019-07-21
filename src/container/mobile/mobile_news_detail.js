import React from 'react';
import {Row, Col} from 'antd';
import MobileHeader from '../../component/mobile/header/mobile_header';
import MobileFooter from '../../component/mobile/footer/mobile_footer';
import Comment from '../../component/common/common_comment';
import 'mobile_news_detail.css'

export default class MobileNewsDetail extends React.Component {
    constructor() {
        super();
        this.state = {
            newsItem: ''
        };
    }

    componentDidMount() {
        let fetchOption = {
            method: 'GET',
            mode: "cors",
        };
        fetch("http://192.168.1.164:10239/api/detail?k=" + this.props.params.uniquekey, fetchOption)
            .then(response => response.json())
            .then(json => {
                this.setState({newsItem: json.data[0]});
                document.title = this.state.newsItem.title;
            });
    }

    createMarkup() {
        return {__html: this.state.newsItem.content};
    }

    render() {
        return (

            <div>

                <Row style={{marginTop:'1em'}}>
                    <Col span={1}>
                    </Col>
                    <Col span={22}>
                        <div>
                            <img src={this.state.newsItem.img} />
                        </div>
                        <div dangerouslySetInnerHTML={this.createMarkup()}/>
                    </Col>
                    <Col span={1}/>
                </Row>
            </div>

        );
    }
}