import React, { Component } from "react";
import { DishdetailComponent } from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";
import { Menu } from "./MenuComponent";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import { connect } from "react-redux";
import Contact from "./Contact";
import About from "./AboutComponent";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

class Main extends Component {
  constructor(props) {
    console.log(`Main component Constructor Invoked`);

    super(props);
    // this.props = {
    //   dishes: DISHES,
    //   selectedDishId: null,
    //   comments: COMMENTS,
    //   promotions: PROMOTIONS,
    //   leaders: LEADERS,
    // };
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
        dish={this.props.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
        leader={this.props.leaders.filter((leader) => leader.featured)[0]}
      />
    );
  };

  DishdetailComponent_ = ({ match }) => {
    console.log(match.params.id);
    return (
      <DishdetailComponent
        selectedDish={
          this.props.dishes.filter(
            (dish) => dish.id == parseInt(match.params.id, 10)
          )[0]
        }
        comments={this.props.comments.filter(
          (comment) => comment.dishId == parseInt(match.params.id, 10)
        )}
      />
    );
  };
  AboutUsComponent = () => {
    return <About leaders={this.props.leaders} />;
  };
  render() {
    console.log(`Main component render Invoked`);

    return (
      <div className="container">
        <Header />
        <Switch>
          <Route path="/home" component={this.HomePage} />
          <Route path="/aboutus" component={this.AboutUsComponent} />
          <Route
            exact
            path="/menu"
            component={(props) => <Menu dishes={this.props.dishes} />}
          />
          <Route path="/menu/:id" component={this.DishdetailComponent_} />

          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        {/* <Menu
          dishes={this.props.dishes}
          onClick={(selectedDish) => this.onDishSelect(selectedDish)}
        /> */}
        {/* <div className="row">
          <div className="col-12 col-md-5 m-1">
            <DishdetailComponent
              selectedDish={this.props.dishes.find(
                (dish) => dish.id == this.props.selectedDishId
              )}
            />
          </div>
        </div> */}
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
