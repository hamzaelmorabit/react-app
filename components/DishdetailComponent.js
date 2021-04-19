import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
  CardBody,
  CardTitle,
  Button,
  Label,
  ModalHeader,
  ModalBody,
  Modal,
  Col,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import { FadeTransform, Stagger } from "react-animation-components";
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

export const DishdetailComponent = (props) => {
  function RenderDish({ dish, dishesLoading, errMsg }) {
    if (dishesLoading) {
      return (
        <div className="container">
          <div className="row">
            <Loading />
          </div>
        </div>
      );
    } else if (errMsg) {
      return (
        <div className="container">
          <div className="row">
            <h4>{errMsg}</h4>
          </div>
        </div>
      );
    } else if (dish != null) {
      return (
        <div>
          <FadeTransform
            in
            transformProps={{
              exitTransform: "scale(0.5) translateY(-50%)",
            }}
          >
            <Card>
              <CardImg top src={baseUrl + dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </FadeTransform>
        </div>
      );
    } else return <div></div>;
  }

  class CommentForm extends Component {
    constructor(props) {
      super(props);

      this.state = {
        author: "",
        rating: "1",
        message: "",
        isModalOpen: false,
      };

      this.toggleModal = this.toggleModal.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
      this.setState({
        isModalOpen: !this.state.isModalOpen,
      });
    }

    handleSubmit(values) {
      // this.setState({ author: val["author"] });
      // this.setState({ message: val["message"] });
      // this.setState({ rating: val["rating"] });
      console.log(
        this.props.dishId,
        values.rating,
        values.author,
        values.message
      );
      this.props.addComment(
        this.props.dishId,
        values.rating,
        values.author,
        values.message
      );

      alert("Current State is: " + JSON.stringify(values));
    }
    render() {
      return (
        <>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={this.toggleModal}
          >
            <i className="fa fa-pencil fa-lg"> Submit Comment</i>
          </button>

          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
            <ModalBody>
              <LocalForm onSubmit={(val) => this.handleSubmit(val)}>
                <Row row>
                  <Col md={10}>
                    <Label htmlFor="rating">Rating</Label>
                  </Col>
                </Row>
                <Row row>
                  <Col md={10}>
                    <Control.select
                      model=".rating"
                      name="rating"
                      className="form-control"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Control.select>
                  </Col>
                </Row>
                <Row row>
                  <Col md={10}>
                    <Label htmlFor="author">Your Name</Label>
                  </Col>
                </Row>
                <Row row>
                  <Col md={10}>
                    <Control.text
                      model=".author"
                      id="author"
                      name="author"
                      placeholder="Your Name"
                      className="form-control"
                      innerRef={(input) => this.setState({ author: input })}
                      validators={{
                        required,
                        minLength: minLength(3),
                        maxLength: maxLength(15),
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".author"
                      show="touched"
                      messages={{
                        required: "Required",
                        minLength: "Must be greater than 2 characters",
                        maxLength: "Must be 15 characters or less",
                      }}
                    />
                  </Col>
                </Row>
                <Row row>
                  <Col md={10}>
                    <Label htmlFor="message">Comment</Label>
                  </Col>
                </Row>
                <Row className="form-group">
                  <Col md={10}>
                    <Control.textarea
                      model=".message"
                      id="message"
                      name="message"
                      rows="12"
                      className="form-control"
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Col md={{ size: 10, offset: 2 }}>
                    <Button type="submit" color="primary">
                      Submit
                    </Button>
                  </Col>
                </Row>
              </LocalForm>
            </ModalBody>
          </Modal>
        </>
      );
    }
  }
  function RenderComments({ comments, dishId, addComment }) {
    console.log(comments);
    if (comments != null) {
      return (
        <div>
          <Card>
            <CardBody>
              <Stagger in>
                <h3>Comments</h3>{" "}
                {comments.map((comt) => (
                  <>
                    <CardTitle>{comt.comment}</CardTitle>
                    <CardText>
                      ---{comt.author} ,
                      {new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                      }).format(new Date(Date.parse(comt.date)))}
                    </CardText>
                  </>
                ))}
              </Stagger>
              <CommentForm dishId={dishId} addComment={addComment} />
            </CardBody>
          </Card>
        </div>
      );
    } else return <div></div>;
  }

  console.log(`DishdetailComponent component render Invoked`);

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.selectedDish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.selectedDish.name}</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish
            dish={props.selectedDish}
            isLoading={props.isLoading}
            errMsg={props.errMsg}
          />
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComments
            comments={props.comments}
            dishId={props.selectedDish.id}
            addComment={props.postComment}
            commentsErrMess={props.commentsErrMess}
          />
        </div>
      </div>
    </div>
  );
};
