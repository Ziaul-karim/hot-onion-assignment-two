import React, { useContext, useState } from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import Logo from '../../header-img/logo2.png'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}


const Login = () => {
    
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn:  false,
        name: '',
        email: '',
        password: '',
        error: '',
        isSuccess: false
    });

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleSubmit = (e) => {
        if(newUser && user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((res) => {
                const newUserInfo = {...user};
                newUserInfo.isSuccess = true;
                newUserInfo.error = '';
                setUser(newUserInfo);
                updateUserInfo(user.name);
            })
            .catch((error) => {
                var errorMessage = error.message;
                const newUserInfo = {...user};
                newUserInfo.isSuccess = false;
                newUserInfo.error = errorMessage;
                setUser(newUserInfo);
            });
        }
        if(!newUser && user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((res) => {
                const  user = firebase.auth().currentUser;

                if (user != null) {
                    const newUserInfo = {...user};
                    newUserInfo.isSuccess = true;
                    newUserInfo.error = '';
                    newUserInfo.name = user.displayName;
                    newUserInfo.email = user.email;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                }
            })
            .catch((error) => {
                var errorMessage = error.message;
                const newUserInfo = {...user};
                newUserInfo.isSuccess = false;
                newUserInfo.error = errorMessage;
                setUser(newUserInfo);
            });
        }
        e.preventDefault()

    }

    const handleBlur = e => {
        let isFieldValid = true;
        if(e.target.name === 'email'){
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if(e.target.name === 'password'){
            const isPasswordValid = e.target.value.length > 6;
            const isPasswordHasNum = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && isPasswordHasNum;
        }
        if(isFieldValid){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo)
        }
    }

    const updateUserInfo = name =>{
        const user = firebase.auth().currentUser;

        user.updateProfile({
        displayName: name
        }).then(res => {
            console.log('User Name Updated')
        }).catch(function(error) {
            console.log(error)
        });
    }

    const getUser = user =>{
               
    }
    return (
        <div className='container' style={{marginTop:'100px'}}>
            
            <div className='login-form-details'>
                <div className="login-logo">
                    <img style={{width:'100%'}} src={Logo} alt=""/>
                </div>
                    <form onSubmit={handleSubmit} style={{marginTop: '30px'}}>
                        {newUser && <input type="name" onBlur={handleBlur} name='name' placeholder='Name'/>}
                        <input type="email" onBlur={handleBlur} name='email' placeholder='Email' required/>
                        <input type="password" onBlur={handleBlur} name='password' id='password' placeholder='Password'/>
                        {newUser && <input type="password" onBlur={handleBlur} name='password' id='confirmPassword' placeholder='Confirm Password'/>}
                        {newUser ? <input type="submit" value="Sign Up"/> : <input type="submit" value="Sign In"/> }
                    </form>
                {user.isSuccess ? <h3 style={{color: 'green', fontWeight: 'bold'}}>User { newUser ? 'Created' : 'Logged In'} Successfully</h3> : <h3 style={{color: 'red', fontWeight: 'bold'}}>{user.error}</h3>}
                {
                    newUser ? <div style={{marginTop: '30px', textAlign:'center'}} className='switch-login'>
                                <p style={{color: 'red'}}>Already Have An Account?</p>
                                <p style={{cursor: 'pointer'}} onClick={()=> setNewUser(!newUser)} className='switch'>Login</p>
                             </div>
                            :<div style={{marginTop: '30px', textAlign:'center'}} className='switch-login'>
                                <p style={{color: 'red'}}>Don't have an Account?</p>
                                <p style={{cursor: 'pointer'}} onClick={()=> setNewUser(!newUser)} className='switch'>Sign Up Here</p>
                            </div>
                }
                
                
            </div>
                
        </div>
    );
};

export default Login;