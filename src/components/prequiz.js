import React,  { useState } from 'react';
import './prequiz.css'; // This file will contain the necessary CSS
import Footer from './footer';

const PreQuiz = () => {

    return (
        <div className="applicationquiz">
            {/* Header Section */}
            <header className="header">
                <img src="logo.png" alt="MSU-IIT NMPC Logo" className="logol" />
                <h2 className="landingh2off2">MSU-IIT National Multi-Purpose Cooperative</h2>
            </header>


            {/* Form Container */}
            <div className="sulodPormquiz">
                <h3 className="titlequiz">Pre Approval Quiz</h3>
                <form className="quizpre">
                <div class="quizsection">
                            <p>Personal Information</p>
                            <div class="itemquiz">
                                <label>First Name:</label>
                                <input type="text" />
                            </div>
                            <div class="itemquiz">
                                <label>Middle Name:</label>
                                <input type="text" />
                            </div>
                            <div class="itemquiz">
                                <label>Last Name:</label>
                                <input type="text" />
                            </div>
                            <div class="itemquiz">
                                <label>Birth Date:</label>
                                <input type="date" />
                            </div>
                            <div class="itemquiz">
                                <label>Age:</label>
                                <input type="number" />
                            </div>
                            <div class="itemquiz">
                                <label>Mobile Number:</label>
                                <input type="tel" />
                            </div>
                            <div class="itemquiz">
                                <label>Email Address:</label>
                                <input type="email" />
                            </div>
                            <div class="itemquiz">
                                <label>Residential Status:</label>
                                <input type="text" />
                            </div>
                        </div>

                        <div class="quizsection">
                            <p>Employment Information</p>
                            <div class="itemquiz">
                                <label>First Name:</label>
                                <input type="text" />
                            </div>
                            <div class="itemquiz">
                                <label>Middle Name:</label>
                                <input type="text" />
                            </div>
                            <div class="itemquiz">
                                <label>Last Name:</label>
                                <input type="text" />
                            </div>
                            <div class="itemquiz">
                                <label>Birth Date:</label>
                                <input type="date" />
                            </div>
                            <div class="itemquiz">
                                <label>Age:</label>
                                <input type="number" />
                            </div>
                            <div class="itemquiz">
                                <label>Mobile Number:</label>
                                <input type="tel" />
                            </div>
                            <div class="itemquiz">
                                <label>Email Address:</label>
                                <input type="email" />
                            </div>
                            <div class="itemquiz">
                                <label>Residential Status:</label>
                                <input type="text" />
                            </div>
                        </div>

                        <div class="quizsection">
                            <p>Financial Information</p>
                            <div class="itemquiz">
                                <label>First Name:</label>
                                <input type="text" />
                            </div>
                            <div class="itemquiz">
                                <label>Middle Name:</label>
                                <input type="text" />
                            </div>
                            <div class="itemquiz">
                                <label>Last Name:</label>
                                <input type="text" />
                            </div>
                            <div class="itemquiz">
                                <label>Birth Date:</label>
                                <input type="date" />
                            </div>
                            <div class="itemquiz">
                                <label>Age:</label>
                                <input type="number" />
                            </div>
                            <div class="itemquiz">
                                <label>Mobile Number:</label>
                                <input type="tel" />
                            </div>
                            <div class="itemquiz">
                                <label>Email Address:</label>
                                <input type="email" />
                            </div>
                            <div class="itemquiz">
                                <label>Residential Status:</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div class="parent-containerapp">
                                <a href="/cashflow" class="submit-btn">Next →</a>
                            </div>

                    </form>


        

            </div>

            < Footer />
        </div>
    );
};

export default PreQuiz;
