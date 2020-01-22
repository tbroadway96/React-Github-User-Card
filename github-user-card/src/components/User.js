import React from 'react';

const User = (props) => {
    return (
        <div>
            <img src = {props.user.avatar_url} alt = 'This user has no avatar' />
            <h1>{props.user.name}</h1>
            <h2>Username: {props.user.login}</h2>
            <p>{props.user.bio}</p>
            <p>Location: {props.user.location}</p>
            <p>Followers: {props.user.followers}</p>
            <p>Following: {props.user.following}</p>
        </div>
    )
}

export default User;