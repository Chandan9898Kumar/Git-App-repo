import React from 'react'

class MyFormCom extends React.Component {
    // constructor(props){
    //     super(props)
    // }

    render() {
        const { buttonClick, inputChnage, value } = this.props
        return (
            <>

                <div style={{


                }}>
                    Search Users :  <input
                        value={value}
                        type="text"
                        onChange={inputChnage}
                    />
                    <br /><br />

                    <button
                        type="submit"
                        onClick={buttonClick}
                    >Click Here</button>

                </div>
            </>
        )

    }
}
export default MyFormCom;
