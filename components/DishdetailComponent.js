import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
  CardBody,
  CardTitle,
} from "reactstrap";
import { Link } from "react-router-dom";
export const DishdetailComponent = (props) => {
  // componentDidMount = () => {
  //   console.log(`DishdetailComponent component componentDidMount Invoked`);
  // };
  // componentDidUpdate = () => {
  //   console.log(`DishdetailComponent component componentDidUpdate Invoked`);
  // };

  // const dateFormat = (date_) => {
  //   var table = date_.split("-");

  //   var month = new Array();
  //   month[0] = "Jan";
  //   month[1] = "Feb";
  //   month[2] = "Mar";
  //   month[3] = "Apr";
  //   month[4] = "May";
  //   month[5] = "Jun";
  //   month[6] = "Jul";
  //   month[7] = "Aug";
  //   month[8] = "Sep";
  //   month[9] = "Oct";
  //   month[10] = "Nov";
  //   month[11] = "Dec";
  //   var n = month[table[1] - 1];
  //   const date =
  //     " " +
  //     n +
  //     " " +
  //     (parseInt(table[2].substring(0, 2)) + 1) +
  //     ", " +
  //     table[0];
  //   return date;
  // };
  function RenderDish({ dish, comments }) {
    console.log(comments);

    if (dish != null) {
      return (
        <div>
          <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else return <div></div>;
  }

  function RenderComments({ comments }) {
    console.log(comments);
    if (comments != null) {
      return (
        <div>
          <Card>
            <CardBody>
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
          <RenderDish dish={props.selectedDish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComments comments={props.comments} />
        </div>
      </div>
    </div>
  );

  // <RenderDish dish={props.selectedDish} comments={props.comments} />;
};
