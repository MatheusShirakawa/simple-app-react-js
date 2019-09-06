import React from 'react';


import Post from './Post';


export default class App extends React.Component{
    render(){
        return (
            <div>
                <h1>Hello World</h1>
                <Post title="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut " />
                <Post title=" labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris " />
                <Post title="sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
            </div>
        );

    }
}
