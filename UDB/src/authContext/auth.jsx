import {create} from 'zustand';
import axios from 'axios';

// Define the Zustand store
export const useAuthStore = create((set, get) => ({
    user: null,
    token: localStorage.getItem('authToken'),
    userId: null,
    // productDetails: [],

    // Fetch user data
    fetchUserData: async () => {
        const { token, userId } = get();
        console.log("Now userId is : ",userId)
        if (!token || !userId) return;
        try {
            const response = await axios.get(`http://localhost:8000/user/users/${userId}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            set({ user: response.data.data });
            console.log("User data in authcontext store ", response.data.data);
        } catch (error) {
            console.error('Failed to load user data:', error);
            get().logout();
        }
    },

    // Login function
    login: async (data) => {
        const { token, userData } = data;
        console.log("User Id and token: ",token,userData._id)   
        try {
            set({ token, userId: userData._id });
            localStorage.setItem('authToken', token);
    
            // Call fetchUserData to ensure user data is updated
            await get().fetchUserData();  // Ensure user data is loaded after login
            return true;
        } catch (error) {
            console.error('Sorry Login failed:', error);
            return false;
        }
    },

    // Logout function
    logout: () => {
        set({ user: null, token: null, userId: null });
        localStorage.removeItem('authToken');
    },

    // Check if the user is authenticated
    checkAuthentication: (navigate) => {
        const { token, user } = get();
        if (!token || !user) {
            navigate('/login'); // Redirect to Login if not authenticated
            return false;
        }
        return true;
    },}))