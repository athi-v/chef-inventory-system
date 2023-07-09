import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import foodService from './foodService'


const initialState = {
    food: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//Food Create
export const foodCreate = createAsyncThunk('foods/create', async (foodData, thunkAPI) => {
try{

    const token = thunkAPI.getState().auth.chef.token
    return await foodService.foodCreate(foodData, token)
}
 catch(error) {
 const message = (error.response && error.response.data && error.reponses.data.message) || error.message || error.toString()
return thunkAPI.rejectWithValue(message) 

}})

//Food Get
export const foodGet = createAsyncThunk('foods/getAll', async (_, thunkAPI) => {
    try{
    
        const token = thunkAPI.getState().auth.chef.token
        return await foodService.foodGet(token)
    }
     catch(error) {
     const message = (error.response && error.response.data && error.reponses.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message) 
    
    }})

    export const foodDelete = createAsyncThunk('foods/delete', async (id, thunkAPI) => {
        try{
        
            const token = thunkAPI.getState().auth.chef.token
            return await foodService.foodDelete(id, token)
        }
         catch(error) {
         const message = (error.response && error.response.data && error.reponses.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message) 
        
        }})

        export const foodUpdate = createAsyncThunk('foods/update', async ({ id, updatedData }, thunkAPI) => {
            try {
                const token = thunkAPI.getState().auth.chef.token;
                return await foodService.foodUpdate(id, updatedData, token);
            } catch (error) {
                const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                return thunkAPI.rejectWithValue(message);
            }
        });
        

export const foodSlice = createSlice({
    name: 'food', 
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
        .addCase(foodCreate.pending, (state) => {
            state.isLoading = true
        })
        .addCase(foodCreate.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.food.push(action.payload)
        })
        .addCase(foodCreate.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(foodGet.pending, (state) => {
            state.isLoading = true
        })
        .addCase(foodGet.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.food = action.payload
        })
        .addCase(foodGet.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(foodDelete.pending, (state) => {
            state.isLoading = true
        })
        .addCase(foodDelete.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.food = state.food.filter((foodItem) => foodItem._id !== action.payload.id)
        })
        .addCase(foodDelete.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(foodUpdate.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(foodUpdate.fulfilled, (state, action) => {
            const { id, updatedData } = action.payload;
            const index = state.food.findIndex((foodItem) => foodItem._id === id);
            if (index !== -1) {
              state.food[index] = { ...state.food[index], ...updatedData };
            }
          })
        .addCase(foodUpdate.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
        
    }
})

export const {reset} = foodSlice.actions
export default foodSlice.reducer