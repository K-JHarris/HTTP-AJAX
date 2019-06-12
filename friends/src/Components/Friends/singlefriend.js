import React from 'react';

function SingleFriend(props) {
  console.log(props.friend)
  return (
    <div>
      {props.friend.id}
      {props.friend.age}
      {props.friend.name}
      {props.friend.email}
    </div>
  );
}

export default SingleFriend;
