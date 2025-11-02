import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: { cities: JSON.parse(localStorage.getItem("favorites")) || [] },
  reducers: {
    addFavorite: (state, action) => {
      if (!state.cities.includes(action.payload)) {
        state.cities.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state.cities));
      }
    },
    removeFavorite: (state, action) => {
      state.cities = state.cities.filter((c) => c !== action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.cities));
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
