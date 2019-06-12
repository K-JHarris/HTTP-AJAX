import React from 'react';
import SingleFriend from './singlefriend'

function FriendsList(props) {
  return (
    <div>
      <p>{props.friends.map(friendsMap => <SingleFriend friend={friendsMap}/>)}</p>
    </div>
  );
}

export default FriendsList;
