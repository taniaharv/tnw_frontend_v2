import React from 'react';
import './Recipe.css';

class Recipe extends React.Component {
    render() {
        return (
            <div className="Recipe">
                <div className="image-container">
                    <img src={this.props.recipe.recipeImage} alt='' width="50" />
                </div>
                <h2>{this.props.recipe.recipeTitle}</h2>
                <div className="Recipe-information">
                    <div className="Recipe-Ingredients">
                        <ul>{this.props.recipe.recipeIngredients.map(recipe => {
                            return <li> {recipe} </li>
                        })}
                        </ul>
                    </div>
                    <div className="Recipe-Url">
                        <a href={this.props.recipe.recipeUrl}>  </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Recipe;