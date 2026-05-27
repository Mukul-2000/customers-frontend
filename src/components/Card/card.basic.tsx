import { Card } from "react-bootstrap";
import "./card.css"

interface ICardBasic {
    body: any
    className?:any
    style?:any
}

export default function CardBasic (props: ICardBasic){
    return (
        <Card className="dhun-card-basic">
            <Card.Body className={props.className} style={props.style}>
                {props.body}
            </Card.Body>
        </Card>
    )
}