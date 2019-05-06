import React, { Component } from "react";
import Recipe from './Recipe';
import RecipeSearch from './RecipeSerach';


export default class RecipeList extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Hello RecipeList.js</h1>
                <RecipeSearch />
                <Recipe />
            </React.Fragment>
        )
    }
}
