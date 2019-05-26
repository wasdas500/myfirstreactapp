import React, {Component} from 'react';
import Post from './Post'
export default class Posts extends Component {
    render(){
        return(
            <div className="left">
                <Post alt="nature" src="https://www.kalw.org/sites/kalw/files/styles/medium/public/201601/Nature-Brain.jpg" />
            
                <Post alt="nature" src="https://www.kalw.org/sites/kalw/files/styles/medium/public/201601/Nature-Brain.jpg" />
            
                <Post alt="nature" src="https://www.kalw.org/sites/kalw/files/styles/medium/public/201601/Nature-Brain.jpg" />
            
            </div>
        )

    }
}