import React, { useEffect, useState } from "react";

function Components() {
  const [clothingItems, setClothingItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          "https://fakestoreapi.com/products/category/men's clothing"
        );
        const data = await result.json();
        setClothingItems(data); // Storing the fetched data in state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Men's Clothing</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {clothingItems.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{ width: "100px", height: "100px", objectFit: "contain" }}
            />
            <h3>{item.title}</h3>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Components;
