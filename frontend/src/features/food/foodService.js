import axios from 'axios'

const API_URL = '/api/foods/'

const foodCreate = async (foodData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, foodData, config)
    return response.data
}

const foodGet = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)
    return response.data
}


const foodDelete = async (foodId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + foodId, config)
    return response.data
}


const foodUpdate = async (foodId, foodedUpdateData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.put(API_URL + foodId, foodedUpdateData, config)
    return response.data
}

const foodService = {
    foodCreate, foodGet, foodDelete, foodUpdate
}

export default foodService