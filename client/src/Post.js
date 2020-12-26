import React from 'react';
import PostItem from './Post-item';

const Posts = (props) => {
    return (
        <div className="App">
            <PostItem title="Hello World" content="This is a content of Hello World" />
            <PostItem title="Goodbye World" content="This is a speed of say" />
        </div>
    )
}

export default Posts;