import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';
import { handlePending, handleRejected } from './helpers';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.unshift(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(({ id }) => id !== action.payload.id);
      })
      .addMatcher(action => {
        return action.type.endsWith('pending');
      }, handlePending)
      .addMatcher(action => {
        return action.type.endsWith('rejected');
      }, handleRejected);
  },
});

export const { addContactAction, removeContactAction } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
