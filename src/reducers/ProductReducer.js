import { v4 as uuid } from "uuid";

export const initialState = [
  {
    id: uuid(),
    name: "Product Name Exemple",
    quantity: 5,
    buyPrice: 15,
    sellPrice: 50,
  },
  {
    id: uuid(),
    name: "USB Kingston 16GB",
    quantity: 5,
    buyPrice: 40,
    sellPrice: 80,
  },
  {
    id: uuid(),
    name: "Wifi USB Regular",
    quantity: 10,
    buyPrice: 20,
    sellPrice: 50,
  },
];

export default (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [
        ...state,
        {
          id: uuid(),
          name: action.payload.name,
          quantity: action.payload.quantity,
          buyPrice: action.payload.buyPrice,
          sellPrice: action.payload.sellPrice,
        },
      ];
    case "DELETE_PRODUCT":
      return [...state].filter((item) => item.id !== action.payload.id);
    case "EDIT_PRODUCT":
      const stateCopy = [...state];
      stateCopy.forEach((p) => {
        if (p.id === action.payload.id) {
          p.name = action.payload.name;
          p.quantity = action.payload.quantity;
          p.buyPrice = action.payload.buyPrice;
          p.sellPrice = action.payload.sellPrice;
        }
      });
      return stateCopy;
    default:
      console.log("default state returned");
      return state;
  }
};
