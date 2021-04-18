import React, { Component } from "react";
import { DishdetailComponent } from "./DishdetailComponent";

import { Menu } from "./MenuComponent";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import { connect } from "react-redux";
import Contact from "./Contact";
import About from "./AboutComponent";
import { addComment, fetchDishes } from "../redux/ActionStore";

import { actions } from "react-redux-form";
const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, author, comment, rating) =>
    dispatch(addComment(dishId, author, comment, rating)),

  fetchDishes: () => {
    dispatch(fetchDishes());
  },

  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"));
  },
});

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
    this.props.fetchDishes();
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
        dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
        dishesLoading={this.props.dishes.isLoading}
        dishesErrMess={this.props.dishes.errMess}
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
          this.props.dishes.dishes.filter(
            (dish) => dish.id == parseInt(match.params.id, 10)
          )[0]
        }
        isLoading={this.props.dishes.isLoading}
        errMsg={this.props.dishes.errMsg}
        comments={this.props.comments.filter(
          (comment) => comment.dishId == parseInt(match.params.id, 10)
        )}
        addComment={this.props.addComment}
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

          <Route
            exact
            path="/contactus"
            component={() => (
              <Contact resetFeedbackForm={this.props.resetFeedbackForm} />
            )}
          />

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
