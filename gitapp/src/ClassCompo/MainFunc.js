import React from 'react'
import MyFormCom from '../ClassCompo/FormCom'
import MyUserCom from '../ClassCompo/UserCom'

const API_URL = "https://api.github.com";

class MyMainCom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputVal: '',
            Api_Data: []
        }
        this.inputSearch = this.inputSearch.bind(this)
    }

    inputSearch = (e) => {
        this.setState({
            inputVal: e.target.value
        })
    }

    HandleButtonEvent = async (e) => {
        const { inputVal, Api_Data } = this.state
        e.preventDefault()
        if (inputVal === '') {
            return
        }
        await fetch(`${API_URL}/search/users?q=${inputVal}`)
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    Api_Data: data.items
                })
            })
            .catch((err) => {
                console.log(err)
            })
        this.setState({
            inputVal: ''
        })

    }

    render() {
        const { inputVal, Api_Data } = this.state
        return (
           
            <>
            <h2>GitHub Search Engine</h2>
                <MyFormCom
                    inputChnage={this.inputSearch}
                    buttonClick={this.HandleButtonEvent}
                    value={inputVal}
                /><br />

                {Api_Data.length === 0 ? "No Results Found" :
                    <>
                        {Api_Data.map((user, index) => (
                            <MyUserCom
                                avatar={user.avatar_url}
                                url={user.html_url}
                                username={user.login}
                                Score={user.score}
                            />
                        ))}
                    </>
                }
            </>
        )

    }
}
export default MyMainCom;