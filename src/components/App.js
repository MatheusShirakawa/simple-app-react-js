import React from 'react';


import Post from './Post';


export default class App extends React.Component{
    render(){
        return (
            <div>
                <h1>Hello World</h1>  
                <Post title="loucura" />
                <Post title="teste 2443423" />
                <Post title="meu deus" />
            </div>
        );

    }
}