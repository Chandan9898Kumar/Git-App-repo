import React, { useState } from 'react'
import MyForms from '../SearchUserwithButton/MyForm'
import UserShowS from '../SearchUserwithButton/UserShow'
import '../App.css';
const API_URL = "https://api.github.com";
const MyFunction = () => {
    const [inputVal, setInputVal] = useState('')
    const [Api_Data, setApi_Data] = useState([])

    const MyInputchange = (e) => {
        setInputVal(e.target.value)
    }

    const MyHandleSubmit = async (e) => {
        e.preventDefault()
        if (inputVal === '') {
            return
        }
        await fetch(`${API_URL}/search/users?q=${inputVal}`)
            .then(response => response.json())
            .then((data) => {
                setApi_Data(data.items)
            }).catch((err) => {
                console.log(err, "my error")
            })
        setInputVal('')
    }

    return (
        <>
            <div className='app'>
                <main className='main'>
                    <h1>GitHub Search Engine</h1>
                    <MyForms
                        value={inputVal}
                        onChanges={MyInputchange}
                        submitButton={MyHandleSubmit}
                    />
                    <h2 data-testid="results-header">Results</h2>
                    <div id="results">

                        <div>

                            {!Api_Data?.length ? "No Result Found Please Search valid user" :
                                <>
                                    {Api_Data.map((user) => (
                                        <UserShowS
                                            avatar={user.avatar_url}
                                            url={user.html_url}
                                            username={user.login}
                                            Score={user.score}
                                        />
                                    ))}
                                </>

                            }

                        </div>
                    </div>
                </main>
            </div>
        </>

    )
}
export default MyFunction;
