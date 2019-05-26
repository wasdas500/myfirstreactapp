import React from 'react';
import User from './User';


export default function Users(){
    return(
        <div className="right">
            <User
                src="https://i.ytimg.com/vi/L3wKzyIN1yk/maxresdefault.jpg"
                alt="prince"
                name="Nekto" />
            <div className="users__block">
            <User
                src="https://i.ytimg.com/vi/L3wKzyIN1yk/maxresdefault.jpg"
                alt="prince"
                name="Nekto" 
                min/>
            <User
                src="https://i.ytimg.com/vi/L3wKzyIN1yk/maxresdefault.jpg"
                alt="prince"
                name="Nekto" 
                min/>
            <User
                src="https://i.ytimg.com/vi/L3wKzyIN1yk/maxresdefault.jpg"
                alt="prince"
                name="Nekto" 
                min/>

            </div>
        </div>
    )
}