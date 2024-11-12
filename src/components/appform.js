import React, { useState } from 'react';
import './appform.css'; // This file will contain the necessary CSS
import Footer from './footer';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Modal from 'react-modal';
import L from 'leaflet';


const icon = L.icon({
    iconUrl: 'src/to/pin.jpg', // Provide your custom marker icon path here
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [0, -41],
});

const LocationPin = ({ onLocationSelect }) => {
    useMapEvents({
        click(e) {
            const { lat, lng } = e?.latlng || {};
            if (lat !== undefined && lng !== undefined) {
                onLocationSelect([lat, lng]);
            } else {
                console.error("Error: Location data is undefined.");
            }
        }
    });
    return null;
};
const Appform = () => {

    const [isMapVisible, setIsMapVisible] = useState(false);
    const [location, setLocation] = useState(null); // To store selected location
    
    const handleCheckboxChange = (event) => {
        if (event.target.checked) {
            setIsMapVisible(true); // Show map modal
        } else {
            setIsMapVisible(false); // Hide map modal
        }
    };
    
    const handleLocationSelect = (selectedLocation) => {
        setLocation(selectedLocation); // Store selected location
        setIsMapVisible(false); // Optionally close the map after selection
    };
    return (
        <div className="application-form-pageapp">
            {/* Header Section */}
            <header className="header">
                <img src="logo.png" alt="MSU-IIT NMPC Logo" className="logol" />
                <h2 className="landingh2off2">MSU-IIT National Multi-Purpose Cooperative</h2>
            </header>

            {/* Form Container */}
            <div className="sulodPorm">
            <h3 className="lontaytel">Loan Application Form</h3>
                <form className="porm">
                    <div className="plesDet">
                        <div className="lugar">
                        <label for="branch">BRANCH</label>
                            <select id="branch" name="branch" required>
                                <option value="tibanga">Tibanga</option>
                                <option value="main">Main</option>
                            </select>
                        </div>

                        <div className="det">
                            <label htmlFor="dateFiled">DATE FILED</label>
                            <input type="date" id="dateFiled" name="dateFiled" required />
                        </div>

                    </div>
                    
                    <div className="bago">
                        <div className="application-type">
                        <label class="pili">New
                                <input type="checkbox" id="payroll"  name="applicationType" value="new" />
                                <span class="checkmarkapp"></span>
                            </label>
                            <label className="pili">
                                <input type="checkbox" id="renewal" name="applicationType" value="renewal" />
                                <span className="checkmarkapp"></span> Renewal
                            </label>
                        </div>
                    </div>


                    <div className="isa">

                        <div className="pormleft">
                            <div className="fillupan">
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="name" required />
                            </div>

                            <div className="fillupan">
                                <label htmlFor="email">Email Address:</label>
                                <input type="email" id="email" name="email" required />
                            </div>

                            <div className="fillupan">
                                <label htmlFor="permanentAddress">Permanent Address:</label>
                                <textarea id="permanentAddress" name="permanentAddress" required></textarea>
                            </div>

                            <div className="fillupan">
                                <label htmlFor="presentAddress">Present Address:</label>
                                <textarea id="presentAddress" name="presentAddress" required></textarea>
                            </div>

                            <div className="fillupan">
                                <label htmlFor="phone">Telephone/Mobile No.:</label>
                                <input type="text" id="phone" name="phone" required />
                            </div>
                            <div className="ageapp">
                                <label htmlFor="age">Age:</label>
                                <input type="number" id="age" name="age" required />
                            </div>
                            <div className="genderapp">
                                <label htmlFor="sex">Sex:</label>
                                <select id="sex" name="sex" required>
                                    <option value="female">Female</option>
                                    <option value="male">Male</option>
                                </select>
                            </div>

                            <div className="civilapp">
                                <label htmlFor="civilStatus">Civil Status:</label>
                                <select id="civilStatus" name="civilStatus" required>
                                    <option value="single">Single</option>
                                    <option value="married">Married</option>
                                </select>
                            </div>

                            <div className="fillupan">
                                <label htmlFor="spouseName">Name of Spouse:</label>
                                <input type="text" id="spouseName" name="spouseName" />
                            </div>

                            <div className="fillupan">
                                <label htmlFor="spouseOccupation">Spouse Occupation:</label>
                                <input type="text" id="spouseOccupation" name="spouseOccupation" />
                            </div>
                            
                                    <div className="form-row-checkbox-upload-date">
                                            <div className="checkboxq-groupapp">
                                                <label class="pili">Share Residence Location
                                                    <input type="checkbox" id="shareResidenceLocation" name="shareResidenceLocation" value="shareResidenceLocation" onChange={handleCheckboxChange}/>
                                                    <span class="checkmarkapp"></span>
                                                </label>
                                                </div>
                                                <div className="sher">
                                                    <textarea
                                                        type="text"
                                                        value={location ? `Latitude: ${location[0]}, Longitude: ${location[1]}` : ''}
                                                        placeholder="Please select your location on the map"
                                                        readOnly
                                                        className="location-input"
                                                    />
                                                </div>

                                                

                                            {/* Modal for Map with Pin */}
                                            <Modal
                                                isOpen={isMapVisible}
                                                onRequestClose={() => setIsMapVisible(false)}
                                                contentLabel="Select Residence Location"
                                                className="map-modal"
                                                overlayClassName="map-modal-overlay"
                                            >
                                                <MapContainer
                                                    center={[12.8797, 121.7740]} // Centered on the Philippines
                                                    zoom={5}
                                                    style={{ height: "500px", width: "100%" }}
                                                >
                                                    <TileLayer
                                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                                        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                                                    />
                                                    {/* Pin marker when user clicks */}
                                                    {location && (
                                                        <Marker position={location} icon={icon}>
                                                            <Popup>
                                                                Selected Location: <br /> Latitude: {location[0]} <br /> Longitude: {location[1]}
                                                            </Popup>
                                                        </Marker>
                                                    )}
                                                    <LocationPin onLocationSelect={handleLocationSelect} />
                                                </MapContainer>
                                            </Modal>
                                        </div>
                        </div>


                        <div className="pormrayt">
                            <div className="fillupan">
                                <label htmlFor="loanType">Loan Type:</label>
                                <select id="loanType" name="loanType" required>
                                    <option value="personal">Personal Loan</option>
                                    <option value="educational">Educational Loan</option>
                                    <option value="pensioner">Pensioner Loan</option>
                                </select>
                            </div>

                            <div className="fillupan">
                                <label htmlFor="amountApplied">Amount Applied:</label>
                                <input type="number" id="amountApplied" name="amountApplied" required />
                            </div>

                            <div className="fillupan">
                                <label htmlFor="loanTerm">Term of Loan:</label>
                                <input type="text" id="loanTerm" name="loanTerm" required
/>

                            </div>

                            <div className="fillupan">
                                <label htmlFor="loanPurpose">Purpose of Loan:</label>
                                <textarea id="loanPurpose" name="loanPurpose" required></textarea>
                            </div>

                            <div className="fillupan">
                                <label htmlFor="employer">Employer:</label>
                                <input type="text" id="employer" name="employer" required />
                            </div>

                            <div className="fillupan">
                                <label htmlFor="employerContact">Employer Contact No.:</label>
                                <input type="text" id="employerContact" name="employerContact" required />
                            </div>

                            <div className="fillupan">
                                <label htmlFor="employmentStatus">Employment Status/Position Held:</label>
                                <input type="text" id="employmentStatus" name="employmentStatus" required />
                            </div>

                            <div className="fillupan">
                                <label htmlFor="businessName">Business Name:</label>
                                <input type="text" id="businessName" name="businessName" />
                            </div>

                            <div className="fillupan">
                                <label htmlFor="businessAddress">Business Address:</label>
                                <input type="text" id="businessAddress" name="businessAddress" />
                            </div>

                            <div className="fillupan">
                                <label htmlFor="coopMembershipLength">Length of Coop Membership:</label>
                                <input type="text" id="coopMembershipLength" name="coopMembershipLength" />
                            </div>

                            <div className="fillupan">
                                <label>Account Balance:</label>
                                <div className="balanceFields">
                                    <label htmlFor="shareCapital">Share Capital:</label>
                                    <input type="text" id="shareCapital" name="shareCapital" />
                                    <label htmlFor="savingDeposit">Savings Deposit:</label>
                                    <input type="text" id="savingDeposit" name="savingDeposit" />
                                    <label htmlFor="otherDeposit">Other Deposit:</label>
                                    <input type="text" id="otherDeposit" name="otherDeposit" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Collateral and Payment Details */}
            <div className="form-rowapp">
                {/* Collateral/Security Offered */}
                <div class="column-1app">
                
                    <div class="fillupan">
                    <label for="payment">Collateral/Security Offered</label>
                        <div class="checkbox-groupapp">
                            <label class="pili">Real Estate - REM
                                <input type="checkbox" id="real-estate" name="collateral" value="real-estate"/>
                                <span class="checkmarkapp"></span>
                            </label>

                            <label class="pili">Vehicle - Chattel
                                <input type="checkbox" id="vehicle" name="collateral" value="vehicle"/>
                                <span class="checkmarkapp"></span>
                            </label>

                            <label class="pili">ATM Deposit
                                <input type="checkbox" id="atm-deposit" name="collateral" value="atm-deposit"/>
                                <span class="checkmarkapp"></span>
                            </label>

                            <label class="pili">Savings/Time Deposit
                                <input type="checkbox" id="savings-deposit" name="collateral" value="savings-deposit"/>
                                <span class="checkmarkapp"></span>
                            </label>

                            <label class="pili">Appliances
                                <input type="checkbox" id="appliances" name="collateral" value="appliances"/>
                                <span class="checkmarkapp"></span>
                            </label>

                            <label class="pili">None
                                <input type="checkbox" id="none" name="collateral" value="none"/>
                                <span class="checkmarkapp"></span>
                            </label>

                            <label class="pili">Others:
                                <input type="checkbox" id="others" name="collateral" value="others"/>
                                <span class="checkmarkapp"></span>
                            </label>
                            <br></br>
                            <textarea id="payment" name="payment" required></textarea>
                            

                        </div>
                    </div>
                </div>

                {/* Source of Payment */}
                <div class="column-1app">
                    <div class="fillupan">
                        <label for="payment">Source of Payment</label>
                        <div class="checkbox-groupapp">
                            <label class="pili">Salary
                                <input type="checkbox" id="salary" name="payment" value="salary"/>
                                <span class="checkmarkapp"></span>
                            </label>

                            <label class="pili">Pension
                                <input type="checkbox" id="pension" name="payment" value="pension"/>
                                <span class="checkmarkapp"></span>
                            </label>

                            <label class="pili">Allotment
                                <input type="checkbox" id="allotment" name="payment" value="allotment"/>
                                <span class="checkmarkapp"></span>
                            </label>

                            <label class="pili">Commission/Incentives
                                <input type="checkbox" id="commission" name="payment" value="commission"/>
                                <span class="checkmarkapp"></span>
                            </label>

                            <label class="pili">Income from Business
                                <input type="checkbox" id="income-business" name="payment" value="income-business"/>
                                <span class="checkmarkapp"></span>
                            </label>

                            <label class="pili">Financial Assistance
                                <input type="checkbox" id="financial-assistance" name="payment" value="financial-assistance"/>
                                <span class="checkmarkapp"></span>
                            </label>

                            <label class="pili">Others:
                                <input type="checkbox" id="payment-others" name="payment" value="payment-others"/>
                                <span class="checkmarkapp"></span>
                            </label>
                            <br></br>
                            <textarea id="payment" name="payment" required></textarea>
                        </div>
                    </div>
                </div>

                <div class="column-1app">
                    <div class="fillupan">
                        <label for="payment">Mode of Payment</label>
                        <div class="checkbox-groupapp">
                            <label class="pili">Daily
                                <input type="checkbox" id="daily" name="payment" value="daily"/>
                                <span class="checkmarkapp"></span>
                            </label>

                            <label class="pili">Weekly
                                <input type="checkbox" id="weekly" name="payment" value="weekly"/>
                                <span class="checkmarkapp"></span>
                            </label>

                            <label class="pili">Semi-Monthly
                                <input type="checkbox" id="semiMonthly" name="payment" value="semiMonthly"/>
                                <span class="checkmarkapp"></span>
                            </label>

                            <label class="pili">Monthly
                                <input type="checkbox" id="monthly" name="payment" value="monthly"/>
                                <span class="checkmarkapp"></span>
                            </label>

                            <label class="pili">Quarterly
                                <input type="checkbox" id="quarterly" name="payment" value="quarterly"/>
                                <span class="checkmarkapp"></span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="column-1app">
                    <div class="fillupan">
                        <label for="payment">Manner of Payment</label>
                        <div class="checkbox-groupapp">
                            <label class="pili">Thru Coop/OTC
                                <input type="checkbox" id="otc" name="payment" value="otc"/>
                                <span class="checkmarkapp"></span>
                            </label>

                            <label class="pili">Collector
                                <input type="checkbox" id="collector" name="payment" value="collector"/>
                                <span class="checkmarkapp"></span>
                            </label>

                            <label class="pili">Payroll Deduction
                                <input type="checkbox" id="payroll" name="payment" value="payroll"/>
                                <span class="checkmarkapp"></span>
                            </label>

                            <label class="pili">PDC
                                <input type="checkbox" id="pdc" name="payment" value="pdc"/>
                                <span class="checkmarkapp"></span>
                            </label>

                            <label class="pili">Auto-Debit
                                <input type="checkbox" id="debit" name="payment" value="debit"/>
                                <span class="checkmarkapp"></span>
                            </label>
                        </div>
                    </div>
                </div>
                </div>


                            <p className="aboutp">
                                I warrant the truth and correctness of all data 
                                and information herein to the best of my knowledge. 
                                I expressly submit to any credit investigation and hereby agree that 
                                any false information that will be discovered will automatically cause
                                the disapproval of this application.
                            </p>
                            <br></br>
                            {/* Upload Signature and Date */}
                            <div className="form-rowapp">
                                <div className="columnapp">
                                    <div className="form-groupapp">
                                        <label htmlFor="borrower-signature">Member-Borrower’s Signature</label>
                                        <input type="file" id="borrower-signature" name="borrowerSignature" required />
                                    </div>
                                </div>

                                <div className="columnapp">
                                    <div className="form-groupapp">
                                        <label htmlFor="spouse-signature">Spouse’s Signature</label>
                                        <input type="file" id="spouse-signature" name="spouseSignature" />
                                    </div>
                                </div>

                                <div className="columnapp">
                                    <div className="form-groupapp">
                                        <label htmlFor="date">Date</label>
                                        <input type="date" id="date" name="date" required />
                                    </div>
                                </div>

                            </div>

                           

                            <div class="parent-containerapp">
                                <a href="/cashflow" class="submit-btn">Next →</a>
                            </div>


                        </form>
                    </div>

         <Footer />
        </div>
    );
};

export default Appform;
