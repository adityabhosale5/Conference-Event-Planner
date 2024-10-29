import { createSlice } from "@reduxjs/toolkit";
import jasmine from "./assets/jasmine.png";
import lavender from "./assets/lavender.png";
import Lonicera from "./assets/Lonicera.png";
import mint from "./assets/mint.png";
import Plumeria from "./assets/Plumeria.png";
import rose from "./assets/rose.png";

export const afplantSlice = createSlice({
  name: "afplant",
  initialState: [
    {
      id: 0,
      img: jasmine,
      name: "Jasmine",
      cost: 300,
      desc: "A sweetly scented plant known for its star-shaped white or yellow flowers",
      quantity: 0,
    },
    {
      id: 1,
      img: lavender,
      name: "Lavender",
      cost: 200,
      desc: "An aromatic herb with purple flowers, used for fragrance and relaxation",
      quantity: 0,
    },
    {
      id: 2,
      img: Lonicera,
      name: "Lonicera",
      cost: 250,
      desc: "A fragrant climber with tubular flowers, attracting bees and hummingbirds",
      quantity: 0,
    },
    {
      id: 3,
      img: rose,
      name: "Rose",
      cost: 300,
      desc: "A classic flowering plant symbolizing love, available in various colors and fragrances",
      quantity: 0,
    },
    {
      id: 4,
      img: Plumeria,
      name: "Plumeria",
      cost: 450,
      desc: "A tropical plant with fragrant, colorful flowers, often used in leis",
      quantity: 0,
    },
    {
      id: 5,
      img: mint,
      name: "Mint",
      cost: 250,
      desc: "A fast-growing herb with refreshing leaves, used in culinary and medicinal applications",
      quantity: 0,
    },
  ],
  reducers: {
    incrementafQuantity: (state, action) => {
      const plant = state.find((item) => item.id === action.payload);
      if (plant) {
        plant.quantity++;
      }
    },
    decrementafQuantity: (state, action) => {
      const plant = state.find((item) => item.id === action.payload);
      if (plant && plant.quantity > 0) {
        plant.quantity--;
      }
    },
    decrementToZeroafQuantity: (state, action) => {
      const plant = state.find((item) => item.id === action.payload);
      if (plant && plant.quantity > 0) {
        plant.quantity = 0;
      }
    },
  },
});

export const { incrementafQuantity, decrementafQuantity, decrementToZeroafQuantity} = afplantSlice.actions;
export default afplantSlice.reducer;
