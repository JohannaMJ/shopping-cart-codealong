import { createSlice } from '@reduxjs/toolkit';

const productData = [
  { id: 1, title: 'Socks', price: 100, emoji: '🧦' },
  { id: 2, title: 'Gloves', price: 250, emoji: '🧤' },
  { id: 3, title: 'Scarf', price: 200, emoji: '🧣' },
  { id: 4, title: 'Crown', price: 300, emoji: '👑' },
];

export const products = createSlice({
  name: 'products',
  initialState: productData,
});
