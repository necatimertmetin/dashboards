import React, { useEffect, useState } from "react";
import '../../assets/css/Authorization.css';
import abstractTriangle from '../../assets/media/abstract-shape.png';
import { useNavigate } from "react-router-dom";
const Authorization = () => {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState(null);
    const [showSignIn, setShowSignIn] = useState(true)
    const [showSignUp, setShowSignUp] = useState(false)
    const [showAdmin, setAdmin] = useState(false)
    const handleChange = (e) => {
        if (e.target.checked) {
            console.log(e.target.value, " checked")
            setSelectedOption(e.target.value)
        }

    }

    useEffect(() => {
        if (selectedOption === "sign-in") {
            setShowSignIn(true);
            setShowSignUp(false);
            setAdmin(false);
        }
        else if (selectedOption === "sign-up") {
            setShowSignUp(true)
            setShowSignIn(false);
            setAdmin(false);
        }
        else if (selectedOption === "admin") {
            setAdmin(true)
            setShowSignIn(false);
            setShowSignUp(false);
        }
        else {

        }
    }, [selectedOption])
    const SignUp = () => {

        return (
            <div className="authorization-type-container sign-up">
                <div className="authorization-type-description-container">
                    <div className="authorization-type-description-title">
                        BRING YOUR PROJECTS TO LIFE
                    </div>
                    <div className="authorization-type-description-content">
                        You Have All The Reason in the world to achieve your grandest dreams.
                    </div>
                    <div className="authorization-type-description-title">
                        <p>
                            IMAGINATION
                        </p>
                        <span>
                            +
                        </span>
                        <p>
                            INNOVATION
                        </p>
                        <span>
                            =
                        </span>
                        <p>
                            REALIZATION
                        </p>
                    </div>
                </div>
                <div className="authorization-type-form-container">
                    <div className="authorization-type-form-part">
                        E-MAIL
                        <input type="text" />
                    </div>
                    <div className="authorization-type-form-part">
                        USERNAME
                        <input type="text" />
                    </div>
                    <div className="authorization-type-form-part">
                        PASSWORD
                        <input type="password" />
                    </div>
                    <div className="authorization-type-form-part">
                        <div className="authorization-type-form-button">
                            JOIN US
                        </div>
                    </div>

                </div>

            </div>
        )
    }
    const SignIn = () => {

        return (
            <div className="authorization-type-container sign-in">
                <div className="authorization-type-description-container">
                    <div className="authorization-type-description-title">
                        WELCOME AGAIN
                    </div>
                    <div className="authorization-type-description-content">
                        You Don't get Lucky...
                    </div>
                    <div className="authorization-type-description-title">
                        YOU MAKE LUCK <span>HAPPEN</span>
                    </div>
                    
                </div>
                <div className="authorization-type-form-container">
                    <div className="authorization-type-form-part">
                        USERNAME / E-MAIL
                        <input type="text" />
                    </div>
                    <div className="authorization-type-form-part">
                        PASSWORD
                        <input type="password" />
                    </div>
                    <div className="authorization-type-form-part">
                        <div className="authorization-type-form-button" onClick={() => {
                            navigate('/dashboard')
                        }}>
                            I'M READY !
                        </div>
                    </div>

                </div>

            </div>
        )
    }
    const Admin = () => {

        return (
            <div className="authorization-type-container sign-admin">
                <div className="authorization-type-description-container">
                    <div className="authorization-type-description-title">
                        <span>CAPTAIN</span>
                        
                    </div>
                    <div className="authorization-type-description-title">
                        We All Ready For Your Instructions
                    </div>
                    <div className="authorization-type-description-title">
                        
                        <span>
                            MASTER PANEL IS READY
                        </span>
                    </div>
                </div>
                <div className="authorization-type-form-container">
                    <div className="authorization-type-form-part">
                        USERNAME
                        <input type="text" />
                    </div>
                    <div className="authorization-type-form-part">
                        PASSWORD
                        <input type="password" />
                    </div>
                    <div className="authorization-type-form-part">
                        <div className="authorization-type-form-button">
                            OPEN SESAME
                        </div>
                    </div>

                </div>

            </div>
        )
    }
    return (
        <div className="authorization-container">
            <img src={abstractTriangle} alt="V" className="authorization-background-hover-icon"/>
            <div className='landing-title'>
                OWDN<span>A</span>C
            </div>
            <div className="authorization-content-wrapper">
                {showSignIn && <SignIn />}
                {showSignUp && <SignUp />}
                {showAdmin && <Admin />}
            </div>

            <div class="radio-input">
                <label class="label">
                    <input type="radio" name="radio" value={"sign-up"} onChange={handleChange} />
                    <span class="check">SIGN-UP</span>
                </label>
                <label class="label">
                    <input type="radio" name="radio" value={"sign-in"} onChange={handleChange} />
                    <span class="check">SIGN-IN</span>
                </label>

                <label class="label">
                    <input type="radio" name="radio" value={"admin"} onChange={handleChange} />
                    <span class="check">ADMIN</span>
                </label>
            </div>


        </div>
    )
}
export default Authorization;