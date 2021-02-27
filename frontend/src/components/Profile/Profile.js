import React from 'react';

const profile = (props) => {
    const user = props.profile.user
    return (
        <div className='profile'>
            <h2>Welcome to my web existence!</h2>
            {user ? <p>First Name: {user.first_name}</p> : null}
        </div>
    )
}

export default profile;