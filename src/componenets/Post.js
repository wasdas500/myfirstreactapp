import React, {Component} from 'react';
import User from './User'
export default class Post extends Component {
    render(){
        return(
            <div className="post">
                <User
                src="https://i.ytimg.com/vi/L3wKzyIN1yk/maxresdefault.jpg"
                alt="prince"
                name="Nekto" />
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    some account
                </div>
                <div className="post__descr">
                    some accountdddddddd
                </div>
            </div>
        )
    }
}