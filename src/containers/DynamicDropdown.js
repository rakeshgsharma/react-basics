import React from 'react';

export default class DynamicDropdown extends React.Component {
    state = {
        masterIngredient: ['eggs', 'salt', 'chilli'],
        currentIngredient: '',
        currentMenuIngredients: [],
        name: '',
        price: '',
        menuItems: []
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleDropDown = (e) => {
        if(e.target.value) {
            this.setState({
                currentIngredient: e.target.value
            })
        }
    }

    handleAddIngredient = () => {
        if(this.state.currentIngredient) {
            this.setState({
                currentMenuIngredients: [...this.state.currentMenuIngredients, this.state.currentIngredient]
            })
        }
    }

    handleMenuSave = () => {
        const { name, price, currentMenuIngredients } = this.state;
        this.setState({
            menuItems: [...this.state.menuItems, { name, price, currentMenuIngredients }]
        }, () => console.log(this.state.menuItems))
    }

    render() {
        return (<>
        <form>
            Name: <input name="name" onChange={this.handleChange}></input> <br/>
            Price: <input name="price" onChange={this.handleChange}></input> <br/>
            <select value={this.state.currentIngredient} onChange = {this.handleDropDown} >
                <option value=''>None</option>
                {this.state.masterIngredient.map(ingredient => (<option value={ingredient}>{ingredient}</option>)) }
            </select>
            <button type="button" onClick={this.handleAddIngredient}>Add Ingredient</button>
            <ul>
                {this.state.currentMenuIngredients.map(ingredient => <li>{ingredient}</li>)}
            </ul>
            <button type="button" onClick={this.handleMenuSave}>Save Menu Item</button>
        </form>
        <br/>
        <form>
            {this.state.currentMenuIngredients.map((ingredient) => {
                return (<>
                    <select value={ingredient} onChange = {this.handleDropDown} >
                        <option value=''>None</option>
                        {this.state.masterIngredient.map(ingredient => (<option value={ingredient}>{ingredient}</option>)) }
                    </select> <br />
                </>
                )})}
                <select value={this.state.currentIngredient} onChange = {this.handleDropDown} >
                    <option value=''>None</option>
                    {this.state.masterIngredient.map(ingredient => (<option value={ingredient}>{ingredient}</option>)) }
                </select>
                <button type="button" onClick={this.handleAddIngredient}>Add Ingredient</button>
        </form>
        <h2>Menu</h2>
        <ol>
        {this.state.menuItems.map(item => {
            return (
            <li>
                <h4>{item.name}</h4>
                Price: {item.price} <br/>
                <ul>
                    {item.currentMenuIngredients.map(ingredient => <li>{ingredient}</li>) }
                </ul>
            </li>
            )
        })}
        </ol>
        </>)
    }
}