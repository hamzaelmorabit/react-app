import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

export class DishdetailComponent extends Component {
  constructor(props) {
    super(props);
  }

  dateFormat(date_) {
    var table = date_.split("-");

    var month = new Array();
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sep";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";
    var n = month[table[1] - 1];
    const date =
      " " +
      n +
      " " +
      (parseInt(table[2].substring(0, 2)) + 1) +
      ", " +
      table[0];
    return date;
  }
  renderDish(dish) {
    if (dish != null)
      return (
        <div>
          <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>

          <ul className="list-unstyled">
            <dt>Comments</dt>
            {dish.comments.map((comment) => (
              <>
                <dd>{comment.comment}</dd>
                <li>
                  ---{comment.author} ,{this.dateFormat(comment.date)}
                </li>
              </>
            ))}
          </ul>
        </div>
      );
    else return <div></div>;
  }
  render() {
    return <div>{this.renderDish(this.props.selectedDish)}</div>;
  }
}
