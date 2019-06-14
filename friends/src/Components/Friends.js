import React from 'react'
import FriendItem from './FriendItem'

const Friends = (props) => {
    return (
        <div>
            <h1>The Squad</h1>
            {props.friends.map(friendMap => <FriendItem friend={friendMap} update={props.update} delete={props.delete}/>)}
        </div>
    )
}

export default Friends