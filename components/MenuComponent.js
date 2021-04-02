import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

export const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
      <div className="col-1 col-md-5 m-1">
        <Card key={dish.id} onClick={() => props.onClick(dish.id)}>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Card>
      </div>
    );
  });

  return <div className="row">{menu}</div>;
};
//mosh-hamedani/vidly-api-node
