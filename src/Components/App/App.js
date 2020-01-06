import React from 'react';
import './App.css';
import axios from 'axios';


import RecipeList from '../RecipeList/RecipeList';
import SearchBar from '../SearchBar/SearchBar';
// import Navbar from '../Navbar/Navbar';
// import edamam from '../../Utils/edamam';

class App extends React.Component {
  state = { recipes: [] };

  searchEdamam = (ingredient,excluded,sortBy) => {
    let healthValue = '';

    if (sortBy==='low-fat') healthValue='&diet=low-fat';
    else if (sortBy) healthValue = '&health=' + sortBy;
    
    
    // no of results returned from search - default is 10
    let maxResults = 6;
    // build up the api call
    let search = 'https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?'
      + 'q=' + ingredient
      + healthValue
      + '&to=' + maxResults
      + '&excluded=' + excluded
      + '&app_id=cb77ee15&app_key=9fc5801c84197306956b21346122b774';
      
    axios.get(search)
      .then((response) => {
        console.log(response.data);
        let recipeArray = response.data.hits.map((item, i) => {
          let recipeObj = {};
          recipeObj.recipeUrl = item.recipe.url;
          recipeObj.recipeId = i;
          recipeObj.recipeTitle = item.recipe.label;
          recipeObj.recipeImage = item.recipe.image;
          recipeObj.recipeIngredients = item.recipe.ingredientLines;
          return recipeObj;
        })
        this.setState({ recipes: recipeArray });
      })
      .catch(function (error) {
        console.log(error);
      })
    }
  // searchEdamam = () => {
  //   const KEY = '19255ef2ec8e768ccf91879ad9ccab45';
  //   const ID = 'd0ac4a36';
  //   let search = axios.create({
  //     baseURL: 'https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?',
  //     params: {
  //         'q': 'ingredient',
  //         'app_id': ID,
  //         'app_key': KEY,
  //         'excluded': 'excluded',
  //         'Health': 'sortBy',
  //     },
  // });     

  //   axios.get(search)
  //     .then((response) => {
  //       console.log(response.data);
  //       this.setState({ recipes: response.data.hits });
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  // }
  // searchEdamam = async term => {
  //   const response = await axios.get(search);
  //     this.setState({ recipes: response.data.hits });
  //   };  

  render() {
    return (
      <div className="App" >
        {/* <Navbar /> */}
        <SearchBar searchEdamam={this.searchEdamam} />
        <RecipeList recipes={this.state.recipes} />
      </div >
    );
  }
}

export default App;
