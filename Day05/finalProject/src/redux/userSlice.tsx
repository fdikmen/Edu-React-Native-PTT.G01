import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import API from '../api/axiosConfig';
import { Alert } from 'react-native';

interface User {
    id: number;
    name: string;
    email: string;
}

interface UserState {
    currentUser: User | null;
    users: User[];
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    users: [],
    currentUser: null,
    loading: false,
    error: null,
};

export const loginUser = createAsyncThunk(
    'users/loginUser',
    async ({ username, password }: { username: string; password: string }, { rejectWithValue }) => {
        try {
            const response = await API.get<User[]>('/users', {
                params: {
                  username: username,
                  password: password
                }
              });
            const users = response.data; //NOT: Burada mockapi.io kullanıcı adı ile filtrelendiği için tek bir kullanıcı dönecektir.
            console.log(users[0]);
            if (users.length > 0) {
                const currentUser = users[0];
                return currentUser;
            } else {
                throw new Error('Invalid username or password');
            }
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Kullanıcıları almak için async thunk oluşturma
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await API.get<User[]>('/users');
    return response.data;
});

// Kullanıcı eklemek için async thunk oluşturma
export const addUser = createAsyncThunk('users/addUser', async (user: User) => {
    const response = await API.post<User>('/users', user);
    return response.data;
});

// Kullanıcı silmek için async thunk oluşturma
export const deleteUser = createAsyncThunk('users/deleteUser', async (userId: number) => {
    await API.delete(`/users/${userId}`);
    return userId;
});

// Kullanıcı güncellemek için async thunk oluşturma
export const updateUser = createAsyncThunk('users/updateUser', async (user: User) => {
    const response = await API.put<User>(`/users/${user.id}`, user);
    return response.data;
});

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => { // LOADING
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {  // SUCCESS
                state.loading = false;
                state.currentUser = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => { // ERROR
                state.loading = false;
                state.error = action.payload ? action.payload.message : 'Failed to login';
            });

        // Kullanıcıları almak için async thunk'ı ekler
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'Failed to fetch users.';
        });

        // Kullanıcı eklemek için async thunk'ı ekler
        builder.addCase(addUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(addUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users.push(action.payload);
        });
        builder.addCase(addUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'Failed to add user.';
        });

        // Kullanıcı silmek için async thunk'ı ekler
        builder.addCase(deleteUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users = state.users.filter((user) => user.id !== action.payload);
        });
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'Failed to delete user.';
        });

        // Kullanıcı güncellemek için async thunk'ı ekler
        builder.addCase(updateUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.loading = false;
            const updatedUser = action.payload;
            const index = state.users.findIndex((user) => user.id === updatedUser.id);
            if (index !== -1) {
                state.users[index] = updatedUser;
            }
        });
        builder.addCase(updateUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'Failed to update user.';
        });
    },
});

export const userActions = {
    ...userSlice.actions,
    fetchUsers,
    addUser,
    deleteUser,
    updateUser,
};

export default userSlice.reducer;
