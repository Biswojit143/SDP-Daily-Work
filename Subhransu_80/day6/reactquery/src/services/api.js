export const fetchProducts = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "iPhone 15", price: 80000 },
        { id: 2, name: "MacBook Air", price: 120000 }
      ]);
    }, 800);
  });
};
