import React from 'react';
import './home.css';
import { home } from '../../../assets/images';
import { Container } from '@mui/material';
import { SearchBox } from '../../shared/searchBox/SearchBox';

const Home = () => {
    return (
        <div className="">
            <div className='home'>
                <div className='left-home'>
                    <Container>
                        <h2>Unlocking Doors to <span>Success</span> Your <span>Future</span> Starts Here.</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum similique sequi iure! Rem, sapiente! Iste, in ab! Obcaecati iure voluptatum ex cum at dignissimos adipisci! Veritatis, sed voluptatibus. Neque, tempora?
                        </p>
                        <div className='companyWithApplicant-container'>
                            <div className='companyWithApplicant'>
                                <div className='left-company'>
                                    <h3>150+</h3>
                                    <p>Companies</p>
                                </div>
                                <div className='right-applicant'>
                                    <h3>550+</h3>
                                    <p>Registered Candidates</p>
                                </div>
                            </div>
                        </div>
                        {/* <SearchBox /> */}
                    </Container>
                </div>
                <div className='right-home'>
                    <img src={home} />
                </div>
            </div>
        </div>
    )
}

export default Home;
