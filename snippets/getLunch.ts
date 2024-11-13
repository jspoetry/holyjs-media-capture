// #region getLunch
const lunch = await getLunch({
  firstCourse: {
    soup: true, // Хочу суп, не важно какой, лишь бы был
  }, 
  // На второе
  mainCourse: {
    ideal: "shawarma-msk", // хочу шаурму
    min: "shawarma-spb", // в крайнем случае — шаверму
  },
  drink: "coffee", // В качестве напитка желательно кофе
  // На десерт
  dessert: {
    exact: "ice-cream", // хочу только ice-cream
  },
});
// #endregion getLunch

// #region expanded
const lunch = await getLunch({
  soup: {
    ideal: true,
  },
  mainCourse: {
    ideal: "shawarma",
    min: "shawarma",
  },
  drink: {
    ideal: "coffee",
  },
  dessert: {
    exact: "ice-cream",
  },
});
// #endregion expanded

export {};
