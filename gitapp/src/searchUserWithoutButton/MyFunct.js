import React, { useState } from 'react'

const API_URL = "https://api.github.com";
const MyFunct = () => {
    const [inputVal, setInputVal] = useState('')
    const [Api_Data, setApi_Data] = useState([])

    const SerachInput = async (e) => {
        setInputVal(e.target.value)
        if(e.target.value===''){
            return 
        }
        await fetch(`${API_URL}/search/users?q=${e.target.value}`)
            .then(response => response.json())
            .then((data) => {
                const Timer = setTimeout(() => {
                    setApi_Data(data.items)
                }, 3000, inputVal)
                return (() => clearTimeout(Timer))
            }).catch((err) => {
                console.log(err, "my error")
            })
    }
    return (
        <>
            <div style={{
                margin: "0px",
                top: "15%",
                marginLeft: '50px'
            }}>

                Search User   <input
                    type="text"
                    value={inputVal}
                    onChange={SerachInput}
                    placeholder="Type"
                />
            </div>

            {
                inputVal === '' ? 'No Results Found'
                    :
                    <>
                        {!Api_Data?.length  && Api_Data===undefined? "No Result Found Please Search valid user"
                            :
                            <ul>
                                {Api_Data.map((user, index) => (
                                    <li key={index}>
                                        <img
                                            src={user.avatar_url}
                                            alt="Profile"
                                            width="50"
                                            height="50"
                                        />
                                        <br />
                                        Score : {user.score}
                                        <br />
                                        <a href={user.html_url} >
                                            {user.login}
                                        </a>
                                        <hr />
                                    </li>
                                ))}
                            </ul>
                        }
                    </>
            }
        </>
    )
}
export default MyFunct;
