import ISession from "../../../../../models/ISession";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

interface Props {
    session: ISession
}

const Item = ( { session } : Props ) => {
    const { id, name, speaker, level, duration, abstract, upvoteCount } = session;

    return (
        <Row>
            <Col
                xs={1}
                className="d-flex flex-column justify-content-center align-items-center"
            >
                {/* @todo voting widget */}
                {upvoteCount}
            </Col>
            <Col xs={11}>
                <h3>{ name }</h3>
                <div>by { speaker }</div>
                <div>{ level }</div>
                <div>{ duration }</div>
                <div>{ abstract }</div>
            </Col>
        </Row>
    );
}

export default Item;