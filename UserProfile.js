import React, { useState } from 'react';

const UserProfile = () => {
    // State initialization
    const [userProfile, setUserProfile] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        address: {
            street: '123 Main St',
            city: 'New York',
            country: 'USA'
        }
    });

    // State for input fields
    const [street, setStreet] = useState(userProfile.address.street);
    const [city, setCity] = useState(userProfile.address.city);
    const [country, setCountry] = useState(userProfile.address.country);

    // Function to update address immutably
    const updateAddress = () => {
        setUserProfile(prevProfile => ({
            ...prevProfile,
            address: {
                ...prevProfile.address,
                street,
                city,
                country
            }
        }));
    };

    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
            <h2>User Profile</h2>
            <p><strong>Name:</strong> {userProfile.name}</p>
            <p><strong>Email:</strong> {userProfile.email}</p>
            <h3>Address</h3>
            <p><strong>Street:</strong> {userProfile.address.street}</p>
            <p><strong>City:</strong> {userProfile.address.city}</p>
            <p><strong>Country:</strong> {userProfile.address.country}</p>

            <h3>Update Address</h3>
            <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} placeholder="Street" />
            <br />
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" />
            <br />
            <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Country" />
            <br />
            <button onClick={updateAddress} style={{ marginTop: '10px' }}>Update Address</button>
        </div>
    );
};

export default UserProfile;
