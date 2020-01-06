import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            ingredient: '',
            excluded: '',
            sortBy: ''
        };

        this.changeIngredient = this.changeIngredient.bind(this);
        this.changeExcluded = this.changeExcluded.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSortByChange = this.handleSortByChange.bind(this);

        this.sortByOptions = {
            'Vegetarian': 'vegetarian',
            'Vegan': 'vegan',
            'Low-fat': 'low-fat'
        };
    }

getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
        return 'active'
    }
    return '';
}

handleSortByChange(sortByOption) {
    this.setState({sortBy: sortByOption});
}


changeIngredient(event) {
    this.setState({ingredient: event.target.value });
}

renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
        let sortByOptionValue = this.sortByOptions[sortByOption];
        return (<li className={this.getSortByClass(sortByOptionValue)}
                    key={sortByOptionValue}
                    onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
                    {sortByOption}
                </li>);
    });
}

changeExcluded(event) {
    this.setState({excluded: event.target.value});
}

handleSearch = (event) => {
    this.props.searchEdamam(this.state.ingredient, this.state.excluded, this.state.sortBy);

    event.preventDefault();
}

render() {
    return (
        <div className="SearchBar">
            <div className="SearchBar-fields">
                <input 
                    placeholder="Enter Ingredient(s) left in your cupboard" 
                    value={this.state.ingredient}
                    onChange={this.changeIngredient} 
                />
                <input 
                    placeholder="Enter Ingredient(s) to exclude"
                    value={this.state.exclude} 
                    onChange={this.changeExcluded} 
                />
            </div>
            <div className="SearchBar-sort-options">
                <ul>
                    {this.renderSortByOptions()}
                </ul>
            </div>
            <div className="SearchBar-submit">
                <a href="www.#.com" onClick={this.handleSearch}>Let's Go</a>
            </div>
        </div>
        );
    }
}

export default SearchBar;