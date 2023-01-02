import React from 'react'
import icon from '../../assets/Srmseal.png'
import './Auth.css'

const Auth = () => {

    return (
        <section className="auth-section">
            <div className='auth-container-2'>
                <img src={icon} alt="stack overflow" className='login-logo' />
                <form>
                    <label htmlFor="email">
                        <div style={{ display: "flex", justifyContent: "flex-start", padding: '5px' }}>
                            <h4>Email</h4>
                        </div>
                        <input type="email" name='email' id='email' />
                    </label>
                    <label htmlFor="password">
                        <div style={{ display: "flex", justifyContent: "flex-start", padding: '5px' }}>
                            <h4>Password</h4>
                        </div>
                        <input type="password" name='password' id='password' />
                    </label>
                    <button type='submit' className='auth-btn'>
                        Log in
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Auth