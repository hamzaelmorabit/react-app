import React, { Component } from "react";
import { DishdetailComponent } from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";
import { Menu } from "./MenuComponent";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import { Switch, Route, Redirect } from "react-router-dom";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import Contact from "./Contact";

class Main extends Component {
  constructor(props) {
    console.log(`Main component Constructor Invoked`);
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDishId: null,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
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
    return (
      <Home
        dish={this.state.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured)[0]}
      />
    );
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
          <Route exact path="/contactus" component={Contact} />
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
