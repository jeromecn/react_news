import React from 'react';
import {Link} from 'react-router';
import './mobile_news_component.css'
export default class MobileNewsComponent extends React.Component{


    render(){

        const newlist=this.props.news.map((newsItem, index) => (
            <Link to={`details/${newsItem.title}`} target='_blank' key={index}>
               <section  className='mob_news_sec'>

                    <div style={{width:this.props.ImageWidth}}>
                        <img src={newsItem.img} alt={newsItem.title} style={{width:this.props.ImageWidth}}/>
                    </div>

                    <div className='mob_news_right'>
                        <h3>{newsItem.title}</h3>
                        <span className='mob_news_realtype'>{newsItem.tag}</span>
                        <span>{newsItem.auther}</span>
                    </div>
                </section>
            </Link>

        ));
        return(
            <div>
            {newlist}

            </div>
        );
    }
}












