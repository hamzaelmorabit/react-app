import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

export const DishdetailComponent = (props) => {
  // componentDidMount = () => {
  //   console.log(`DishdetailComponent component componentDidMount Invoked`);
  // };
  // componentDidUpdate = () => {
  //   console.log(`DishdetailComponent component componentDidUpdate Invoked`);
  // };

  // dateFormat(date_) {
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
  // }
  function RenderDish({ dish }) {
    function dateFormat(date_) {
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

          <ul className="list-unstyled">
            <dt>Comments</dt>
            {dish.comments.map((comment, i) => (
              <>
                {" "}
                {/* dateFormat(comment.date) */}
                <dd>{comment.comment}</dd>
                <li key={i}>
                  ---{comment.author} ,
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  }).format(new Date(Date.parse(comment.date)))}
                </li>
              </>
            ))}
          </ul>
        </div>
      );
    } else return <div></div>;
  }

  console.log(`DishdetailComponent component render Invoked`);

  return <RenderDish dish={props.selectedDish} />;
};
