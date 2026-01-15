import { useState } from 'react';

export default function Main() {
    const [ingredientList, setIngredientList] = useState(['Chicken']);
    const handleAddIngredient = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get('ingredient');


        console.log('THIS IS SPARTA: ', newIngredient);
        ingredientList.push(newIngredient);
        console.log('THIS IS SPARTA-2: ', ingredientList);
        setIngredientList(ingredientList)
    }

    const ingredientAddedList = ingredientList.map(element => <li key={element}>{element}</li>)

    return (
        <main>
            <form onSubmit={handleAddIngredient} className="add-ingredient-form">
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