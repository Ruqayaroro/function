// =============================================
// 4. ARRAY METHODS — STRETCH: Total with reduce
// =============================================
// Write totalPrice(menu) that returns the sum of all prices.
// Use: reduce   ->   array.reduce((sum, item) => sum + ..., 0)
// The 0 is the starting value of sum.
//
// The checks at the bottom print ✅ when your function is correct.

{
  const menu = [
    { name: "Shawarma", price: 600, category: "food" },
    { name: "Karak", price: 150, category: "drink" },
    { name: "Mandi", price: 2500, category: "food" },
    { name: "Fresh juice", price: 800, category: "drink" },
    { name: "Luqaimat", price: 1000, category: "dessert" },
  ];

  function cheapNames(menu, maxPrice) {
    return menu
      .filter((item) => item.price <= maxPrice)
      .map((item) => item.name);
  }

  check("cheapNames(menu, 800)",
    () => cheapNames(menu, 800),
    ["Shawarma", "Karak", "Fresh juice"]);

  check("cheapNames(menu, 100)",
    () => cheapNames(menu, 100),
    []);
}
