import React, { useState, useEffect } from 'react';
import '../../assets/css/Landing.css';
import landingButton from '../../assets/media/rectangle.png';
import card1 from '../../assets/media/abstract-shape-1.png';
import card2 from '../../assets/media/abstract-shape-2.png';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const [isBodyHidden, setIsBodyHidden] = useState(true);
    const [changeLocation, setChangeLocation] = useState(false);
    const navigate = useNavigate();

    const handleHover = () => {
        setIsBodyHidden(false);
    };

    const handleMouseLeave = () => {
        setIsBodyHidden(true);
    };

    const handleChangeLocation = () => {
        setChangeLocation(true);

        // Get the top position of the landing-header-container
        const landingHeaderContainer = document.querySelector('.landing-explore-container');
        const offsetPixels = 100; // Adjust this value based on your needs
        const targetPosition = landingHeaderContainer.offsetTop - offsetPixels;


        // Scroll to the target position
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth' // Optional: Add smooth scrolling effect
        });
    }

    useEffect(() => {
        setChangeLocation(false)
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Optional: Add smooth scrolling effect
        });
        setIsBodyHidden(true);
    }, [])

    const Card = ({ cardImg, title }) => {
        return (
            <div className="card">
                <img className='img' src={cardImg} alt='icon' />
                <div className="textBox">
                    <p className="text head">{title}</p>
                </div>
            </div>
        );
    };


    return (
        <div className='landing-container'>
            {isBodyHidden && <style>{'body { overflow-y: hidden !important; scrollbar-width: none; }'}</style>}
            <div className='landing-header-container'>
                <div className='landing-wrapper'>
                    <div className='landing-button-container' onClick={() => {
                        navigate('/login')
                    }}>
                        <img className='landing-button-img' src={landingButton} alt='V' />
                    </div>
                </div>
                <div className='landing-title'>
                    OWDN<span>A</span>C
                </div>

            </div>
            <div className='landing-explore-container'>
                <div className={`${changeLocation ? 'landing-explore-description-container-clicked-location' : 'landing-explore-description-container '}`} onClick={handleChangeLocation}>
                    <div className='landing-explore-description-title'>
                        DISCOVER OUR UNIVERSE
                    </div>
                    {!changeLocation && (
                        <div className='landing-explore-description-content'>
                            EMBARK ON A JOURNEY BEYOND THE STARS
                        </div>
                    )}

                </div>
                <div className='landing-explore-details-container'>
                    <div className='landing-explore-details-wrapper'>
                        <div class="landing-explore-card rainbow">
                            <div class="color-layer"></div>
                            <div class="color-layer"></div>
                            <div class="landing-explore-card-info">
                                <p class="landing-explore-card-title">Boost Your Startup</p>
                                <p class="landing-explore-card-description">the best way to showcase your project</p>
                                <div className='landing-explore-card-button' onClick={() => {
                                    navigate('/login')
                                }}>JOIN US</div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='landing-explore-card-container'>

                    <Card cardImg={card2} title={"DYNAMIC"} />
                    <Card cardImg={card1} title={"STABLE"} />
                    <Card cardImg={landingButton} title={"POWERFUL"} />

                </div>
            </div>
        </div>
    );
}

export default LandingPage;
