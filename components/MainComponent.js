import React, { Component } from "react";
import { DishdetailComponent } from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";
import { Menu } from "./MenuComponent";
class Main extends Component {
  constructor(props) {
    console.log(`Main component Constructor Invoked`);
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDishId: null,
    };
  }

  componentDidMount = () => {
    console.log(`Main component componentDidMount Invoked`);
  };
  componentDidUpdate = () => {
    console.log(`Main component componentDidUpdate Invoked`);
  };

  onDishSelect(dish) {
    this.setState({ selectedDishId: dish });
  }
  render() {
    console.log(`Main component render Invoked`);

    return (
      <div className="container">
        <Menu
          dishes={this.state.dishes}
          onClick={(selectedDish) => this.onDishSelect(selectedDish)}
        />
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <DishdetailComponent
              selectedDish={this.state.dishes.find(
                (dish) => dish.id == this.state.selectedDishId
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
