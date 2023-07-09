import axios from 'axios' 


const API_URL = '/api/chefs/'

//Register chef  
const register = async (chefData) => {
    const response = await axios.post(API_URL + 'register', chefData)
    if(response.data) {
        localStorage.setItem('chef', JSON.stringify(response.data))
    }
    return response.data
}


//Login chef  
const login = async (chefData) => {
    const response = await axios.post(API_URL + 'login', chefData)
    if(response.data) {
        localStorage.setItem('chef', JSON.stringify(response.data))
    }
    return response.data
}

//Logout chef
const logout = async () => {
localStorage.removeItem('chef')
}


const authService = {
    register, login, logout
}

export default authService