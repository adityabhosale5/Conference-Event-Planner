import { createSlice } from "@reduxjs/toolkit";
import chamaedoreabamboopalm from "./assets/chamaedoreabamboopalm.png";
import exoticaglaonemalipstickredplant from "./assets/Exoticaglaonemalipstickredplant.png";
import peacelilyplant from "./assets/peacelilyplant.png";
import philodendronbirkinplant from "./assets/philodendronbirkinplant.png";
import sansevieriasuperbasnake from "./assets/sansevieriasuperbasnake.png";
import zamiazzplant from "./assets/zamiazzplant.png";

export const plantSlice = createSlice({
  name: "plant",
  initialState: [
    {
      id: 0,
      img: chamaedoreabamboopalm,
      name: "Chamaedorea Bamboo Palm Plant",
      cost: 600,
      desc: "Removes Toxic Gases & Helps Fight Pollution Giving Fresh Oxygen To Breathe",
      quantity: 0,
    },
    {
      id: 1,
      img: exoticaglaonemalipstickredplant,
      name: "Exotic Aglaonema Lipstick Red Plant",
      cost: 800,
      desc: "A vibrant indoor plant with striking red-edged leaves, known for its air-purifying qualities",
      quantity: 0,
    },
    {
      id: 2,
      img: peacelilyplant,
      name: "Peace Lily Plant",
      cost: 400,
      desc: "Dark green leaves and white blooms, valued for low maintenance and air purification",
      quantity: 0,
    },
    {
      id: 3,
      img: philodendronbirkinplant,
      name: "Philodendron Birkin Plant",
      cost: 500,
      desc: "A trendy indoor plant featuring glossy green leaves with striking white pinstripes",
      quantity: 0,
    },
    {
      id: 4,
      img: sansevieriasuperbasnake,
      name: "Sansevieria Superba Snake Plant",
      cost: 700,
      desc: "Top Air Purifying Plant For Home As Approved By NASA",
      quantity: 0,
    },
    {
      id: 5,
      img: zamiazzplant,
      name: "Zamia ZZ Plant",
      cost: 450,
      desc: "Cleans air, fights against polluting gases, and gives fresh oxygen",
      quantity: 0,
    },
  ],
  reducers: {
    incrementQuantity: (state, action) => {
      const plant = state.find((item) => item.id === action.payload);
      if (plant) {
        plant.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const plant = state.find((item) => item.id === action.payload);
      if (plant && plant.quantity > 0) {
        plant.quantity--;
      }
    },
    decrementToZeroQuantity: (state, action) => {
      const plant = state.find((item) => item.id === action.payload);
      if (plant && plant.quantity > 0) {
        plant.quantity = 0;
      }
    },
  },
});

export const { incrementQuantity, decrementQuantity, decrementToZeroQuantity } = plantSlice.actions;
export default plantSlice.reducer;
