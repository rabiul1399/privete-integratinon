import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>Please Register</h3>
            <form >
                <input type="text" placeholder='Your Name'/><br />
                <input type="text" placeholder='Your Email'/><br />
               <input type="password" name="" id="" placeholder='Enter Your password'/><br />
                <input type="submit" value={'Register'}/>
            </form>
        </div>
    );
};

export default Register;