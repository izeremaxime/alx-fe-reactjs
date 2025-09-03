import React, { useState, useEffect } from "react";
// "react-router-dom", "BrowserRouter", "Route", "Routes", "RecipeDetail"
const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  {/* "Link", "to" */}

  useEffect(() => {
    fetch("/data.json") // make sure data.json is in public folder
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading recipes:", error));
  }, []);

  return (
    <div className="p-6  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
            <p className="text-gray-600">{recipe.summary}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
