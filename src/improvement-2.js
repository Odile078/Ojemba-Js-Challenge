/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */

// FUNCTION 2
export default function searchFoodItems(items) {
  const foodItems = [];
  items.forEach((item) => (item.type === "Food" ? foodItems.push(item) : null));
  return foodItems;
}
