import { Card, CardBody, CardText } from "react-bootstrap";
import { BookmarkFill, Clipboard2Check, GearFill, ListUl, PlayBtnFill } from "react-bootstrap-icons";

const JSidebarLeft = () => {
  return (
    <Card className="mt-3">
      <CardBody>
        <CardText>
          <BookmarkFill />
          Le mie offerte di lavoro
        </CardText>
        <CardText>
          <ListUl />
          Preferenze
        </CardText>
        <CardText>
          <Clipboard2Check />
          Valutazioni delle competenze
        </CardText>
        <CardText>
          <PlayBtnFill />
          Indicazioni per chi cerca lavoro
        </CardText>
        <CardText>
          <GearFill />
          Impostazioni candidatura
        </CardText>
      </CardBody>
    </Card>
  );
};

export default JSidebarLeft;
