import { apiLogin } from '../Services/APiService';

export const useAuth = () => {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        apiLogin(userData).subscribe({
            next: (response) => {
                console.log('Login successful');
                console.log('User data:', response);
                sessionStorage.setItem('accessToken', response.response.accessToken);
                setUser(response.response);
            },
            error: (error) => {
                console.error('Login failed:', error);
            }
        });
           
    };

    const logout = () => {
        sessionStorage.removeItem('accessToken');
        setUser(null);
    };

    return { user, login, logout };
};

import { useState } from 'react';