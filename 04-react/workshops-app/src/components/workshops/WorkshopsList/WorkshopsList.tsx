import { useEffect, useState } from "react";
import { Button, Col, Card, Row } from "react-bootstrap";
import { Link } from "react-router";

import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";
import ErrorAlert from "../../common/ErrorAlert/ErrorAlert";

import Item from "./Item/Item";

import { getWorkshops } from "../../../services/workshops";
import IWorkshop from "../../../models/IWorkshop";

const WorkshopsList = () => {
    // const [ workshops, setWorkshops ] = useState([] as IWorkshop[]);
    const [loading, setLoading] = useState(true);
    const [workshops, setWorkshops] = useState<IWorkshop[]>([]);
    const [error, setError] = useState<Error | null>(null);

    useEffect(
        () => {
            // console.log( 1 );
            const helper = async () => {
                setLoading( true );

                try {
                    const workshops = await getWorkshops();
                    console.log(workshops);

                    setWorkshops(workshops);
                } catch(error) {
                    setError(error as Error);
                }

                setLoading(false);
            };

            helper();
        },
        []
    );

    // console.log( 2 );

    return (
        <div>
            <h1>List of Workshops</h1>
            <hr />

            {
                /* if..else like behavior using ? : */
                loading ? (
                    <LoadingSpinner />
                ) : (
                    <div>Completed loading</div>
                )
            }

            {
                /* if like behavior using && */
                loading === false && error !== null && (
                    <ErrorAlert err={error} />
                )
            }

            {
                /*workshops.length !== 0 ? (
                    <div>{workshops.length}</div>
                ) : (
                    <div>Data not available</div>
                )*/
            }
            {
                workshops.length !== 0 && (
                    <Row xs={1} md={3} lg={4}>
                        {
                            workshops.map(
                                (workshop) => (
                                    <Col key={workshop.id} className="my-3 d-flex">
                                        <Item {...workshop} />
                                    </Col>
                                )
                            )
                        }
                    </Row>
                )
            }
        </div>
    );
}

export default WorkshopsList;