
import { CardContainer, CardImage, CardBody, CardPrice, CardProductName } from "./styles/Card";

import Button from "./Button";

const Card = (props) => {
  return (
    <CardContainer width="500px">
      <CardImage src={props.cards.imageUrl} />
      <CardBody>
        <CardPrice>{props.cards.price}</CardPrice>
        <CardProductName>{props.cards.productName}</CardProductName>
        <Button />
      </CardBody>
    </CardContainer>
  );
};
export default Card;