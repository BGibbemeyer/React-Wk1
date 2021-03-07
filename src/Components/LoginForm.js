import React from 'react';

class LoginForm extends React.Component {
    render () {
        return (
            <form>
                <h3>Log In</h3>
                <input type= "text" className="User Name"
                 placeholder="User Name"/> <br/><br/>
                <input type="password" placeholder= "Password"/> 
            </form>);
    }
}

export default LoginForm;