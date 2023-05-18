import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchUsersList } from '../api/userAPI'

export const fetchUsers = createAsyncThunk(
  'users/fetchUsersList',
  async params => {
    const { page, per_page } = params
    const response = await fetchUsersList(page, per_page)
    return response
  }
)

const userSlice = createSlice({
  name: 'users',
  initialState: {
    usersList: [],
    userData: null,
    isLoading: false
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.usersList = [...state?.usersList, ...action.payload.data]
        state.userData = action.payload
        state.isLoading = false
      })
      .addCase(fetchUsers.rejected, state => {
        state.isLoading = false
      })
  }
})

export const selectUsers = state => state?.usersData?.usersList

export const selectLoading = state => state.usersData.isLoading

export default userSlice.reducer
