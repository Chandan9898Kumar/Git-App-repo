import React from 'react'
import '../App.css';
class MyUserCom extends React.Component {
    // constructor(props){
    //     super(props)
    // }

    render() {
        const { Score, avatar, username, url } = this.props
        return (
            <>
                <div className='user'>
                    <img
                        src={avatar}
                        alt="Profile"
                        width="70"
                        height="45"
                    />
                    <a href={url} target="_blank" rel="noreferrer">{username}</a>

                    Score : {Score}
                </div>
            </>
        )

    }
}
export default MyUserCom;
