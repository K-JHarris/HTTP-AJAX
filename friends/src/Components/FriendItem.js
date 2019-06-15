import React from 'react'

const FriendItem = (props) => {
    return (
        <div>
            <p>{props.friend.id}</p>
            <p>{props.friend.name}</p>
            <p>{props.friend.email}</p>
            <button onClick={() => props.delete(props.friend)}>Delete</button>
        </div>
    )
}

export default FriendItem