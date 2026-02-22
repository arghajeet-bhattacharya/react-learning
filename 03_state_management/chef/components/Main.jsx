import { useState } from 'react';

export default function Main() {
    const [ingredientList, setIngredientList] = useState([]);
    const handleAddIngredient = (formData) => {
        const newIngredient = formData.get('ingredient');
        setIngredientList(prevArr => [...prevArr, newIngredient]);
    }

    const ingredientAddedList = ingredientList.map(element => <li key={element}>{element}</li>);

    const displaySection = () => {
        if (ingredientAddedList.length > 0) {
            return <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientAddedList}</ul>

                {ingredientAddedList.length > 4 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>}
            </section>
        }
    }

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
            {displaySection()}
        </main>
    )
}