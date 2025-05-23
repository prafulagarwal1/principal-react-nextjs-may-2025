import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import VotingWidget, { VoteFunction } from "../../../../common/VotingWidget/VotingWidget";
import ISession from "../../../../../models/ISession";

interface Props {
    session: ISession,
    vote: VoteFunction
}

const Item = ( { session, vote } : Props ) => {
    const { id, name, speaker, level, duration, abstract, upvoteCount } = session;

    return (
        <Row>
            <Col
                xs={1}
                className="d-flex flex-column justify-content-center align-items-center"
            >
                <VotingWidget
                    votes={upvoteCount}
                    vote={vote}
                />
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