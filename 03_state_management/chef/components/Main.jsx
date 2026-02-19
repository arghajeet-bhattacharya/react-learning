import { useState } from 'react';

export default function Main() {
    const [ingredientList, setIngredientList] = useState([]);
    const handleAddIngredient = (formData) => {
        const newIngredient = formData.get('ingredient');
        setIngredientList(prevArr => [...prevArr, newIngredient]);
    }

    const ingredientAddedList = ingredientList.map(element => <li key={element}>{element}</li>)

    return (
        <main>
            <form action={handleAddIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g: oregano"
                    aria-label="Add Ingredient"
                    name="ingredient"
                />
                <button>Add Ingredient</button>
            </form>
            <ul>
                {ingredientAddedList}
            </ul>
        </main>
    )
}