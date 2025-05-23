import { useEffect, useState } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-regular-svg-icons";

import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";
import ErrorAlert from "../../common/ErrorAlert/ErrorAlert";

import { getWorkshopById } from '../../../services/workshops';
import IWorkshop from '../../../models/IWorkshop';
import FormattedDate from '../../common/FormattedDate/FormattedDate';
interface Props {
    id: number
}

const WorkshopDetails = ( { id } : Props ) => {
    const [loading, setLoading] = useState(true);
    const [workshop, setWorkshop] = useState<IWorkshop | null>(null);
    const [error, setError] = useState<Error | null>(null);

    useEffect(
        () => {
            const helper = async () => {
                setLoading(true);

                try {
                    const workshop = await getWorkshopById(id);

                    setLoading(false);
                    setWorkshop(workshop);
                } catch (error) {
                    setLoading(false);
                    setError(error as Error);
                }
            };

            helper();
        },
        [id]
    );

    return (
        <div>
            {loading && (
                <LoadingSpinner />
            )}

            {!loading && error && (
                <ErrorAlert err={error} />
            )}

            {!loading && !error && workshop && (
                <>
                    <h1>{workshop.name}</h1>
                    <hr />
                    <Row>
                        <Col xs={12} md={4}>
                            <Image
                                src={workshop.imageUrl}
                                alt={workshop.name}
                                fluid
                            />
                        </Col>
                        <Col xs={12} md={8}>
                            <div className="mb-3">
                                <div>{workshop.time}</div>
                                <div>
                                    <FormattedDate date={workshop.startDate} />
                                    <span> - </span>
                                    <FormattedDate date={workshop.endDate} />
                                </div>
                                <div>
                                    {workshop.location.address},
                                    {workshop.location.city},
                                    {workshop.location.state}
                                </div>
                                <div>
                                    <span className="me-4">
                                        <FontAwesomeIcon icon={workshop.modes.inPerson ? faCheckCircle : faTimesCircle} className="me-2" />
                                        In person
                                    </span>
                                    <span>
                                        <FontAwesomeIcon icon={workshop.modes.online ? faCheckCircle : faTimesCircle} className="me-2" />
                                        Online
                                    </span>
                                </div>
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: workshop.description }}></div>
                        </Col>
                    </Row>
                </>
            )}
        </div>
    );
};

export default WorkshopDetails;