import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import authService from './authService'

const chef = JSON.parse(localStorage.getItem('chef'))

const initialState = {
    chef: chef ? chef : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}


//Register Chef
<<<<<<< HEAD
export const register = createAsyncThunk('auth/register', async (chef, thunkAPI) => {
=======
export const registers = createAsyncThunk('auth/register', async (chef, thunkAPI) => {
>>>>>>> c6b67e94 (improved frontend, added validation login + registration)
 try {
    return await authService.register(chef) 
 }   
 catch (error) {
const message = (error.response && error.response.data && error.reponses.data.message) || error.message || error.toString()
return thunkAPI.rejectWithValue(message) 
}
})


//Register Chef
export const login = createAsyncThunk('auth/login', async (chef, thunkAPI) => {
    try {
       return await authService.login(chef) 
    }   
    catch (error) {
   const message = (error.response && error.response.data && error.reponses.data.message) || error.message || error.toString()
   return thunkAPI.rejectWithValue(message) 
   }
   })

//Logout chef 
export const logout = createAsyncThunk('auth/logout', async () => {
 await authService.logout()
   })

export const authSlice = createSlice({
    name: 'auth',
    initialState, 
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        },
    },
    extraReducers: (builder) => {
    builder
<<<<<<< HEAD
    .addCase(register.pending, (state) => {
        state.isLoading = true
    })
    .addCase(register.fulfilled, (state, action) => {
=======
    .addCase(registers.pending, (state) => {
        state.isLoading = true
    })
    .addCase(registers.fulfilled, (state, action) => {
>>>>>>> c6b67e94 (improved frontend, added validation login + registration)
        state.isLoading = false
        state.isSuccess = true
        state.chef = action.payload
    })
<<<<<<< HEAD
    .addCase(register.rejected, (state, action) => {
=======
    .addCase(registers.rejected, (state, action) => {
>>>>>>> c6b67e94 (improved frontend, added validation login + registration)
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.chef = null
    })
    .addCase(logout.fulfilled, (state) => {     
        state.chef = null
    })
    .addCase(login.pending, (state) => {
        state.isLoading = true
    })
    .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.chef = action.payload
    })
    .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.chef = null
    })

    },
})




export const {reset} = authSlice.actions
export default authSlice.reducer