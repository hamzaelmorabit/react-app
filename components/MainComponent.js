import React, { Component } from "react";
import { DishdetailComponent } from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";
import { Menu } from "./MenuComponent";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import { Switch, Route, Redirect } from "react-router-dom";

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

  HomePage = () => {
    return <Home />;
  };

  render() {
    console.log(`Main component render Invoked`);

    return (
      <div className="container">
        <Header />
        <Switch>
          <Route path="/home" component={this.HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Redirect to="/home" />
        </Switch>
        {/* <Menu
          dishes={this.state.dishes}
          onClick={(selectedDish) => this.onDishSelect(selectedDish)}
        /> */}
        {/* <div className="row">
          <div className="col-12 col-md-5 m-1">
            <DishdetailComponent
              selectedDish={this.state.dishes.find(
                (dish) => dish.id == this.state.selectedDishId
              )}
            />
          </div>
        </div> */}
        <Footer />
      </div>
    );
  }
}

export default Main;
