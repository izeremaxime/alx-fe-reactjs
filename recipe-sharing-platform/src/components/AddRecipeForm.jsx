import React, { useState } from "react";

const AddRecipeForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!title.trim()) newErrors.title = "Title is required.";
    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
    } else {
      const items = ingredients.split(",").map((i) => i.trim()).filter(Boolean);
      if (items.length < 2) {
        newErrors.ingredients = "Please include at least 2 ingredients (comma separated).";
      }
    }
    if (!steps.trim()) newErrors.steps = "Preparation steps are required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const recipeData = { title, ingredients, steps };
    if (onSubmit) onSubmit(recipeData);

    // Reset form after submission
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto md:max-h-2 bg-white shadow-lg rounded-2xl p-6 space-y-4"
    >
      <h2 className="text-2xl font-bold text-gray-800 text-center">Add New Recipe</h2>

      {/* Title */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter recipe title"
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
      </div>

      {/* Ingredients */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">Ingredients (comma separated)</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="e.g., eggs, milk, flour"
          rows={3}
        />
        {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
      </div>

      {/* Steps */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">Preparation Steps</label>
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Describe how to prepare the recipe..."
          rows={4}
        />
        {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-200"
      >
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
