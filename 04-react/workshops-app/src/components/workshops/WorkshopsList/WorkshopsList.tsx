import { useEffect, useState } from "react";
import { Button, Col, Card, Row } from "react-bootstrap";
import { useSearchParams } from "react-router";


import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";
import ErrorAlert from "../../common/ErrorAlert/ErrorAlert";
import Pagination from "../../common/Pagination/Pagination";

import Item from "./Item/Item";

import { getWorkshops } from "../../../services/workshops";
import IWorkshop from "../../../models/IWorkshop";

const WorkshopsList = () => {
    // const [ workshops, setWorkshops ] = useState([] as IWorkshop[]);
    const [loading, setLoading] = useState(true);
    const [workshops, setWorkshops] = useState<IWorkshop[]>([]);
    const [error, setError] = useState<Error | null>(null);

    // const [page, setPage] = useState<number>(1);

    const [searchParams, setSearchParams] = useSearchParams();
    const page = +(searchParams.get("page") || "1"); // Default to page 1

    useEffect(
        () => {
            // console.log( 1 );
            const helper = async () => {
                setLoading( true );

                try {
                    const workshops = await getWorkshops(page);
                    console.log(workshops);

                    setWorkshops(workshops);
                } catch(error) {
                    setError(error as Error);
                }

                setLoading(false);
            };

            helper();
        },
        [ page ]
    );

    const previous = (newPage: number) => {
        if (page <= 1) {
            return;
        }

        // when the new state depends on the current state, we use the function form of the setter
        // setPage(p => p - 1);
        setSearchParams({ page: '' + newPage });
    };

    const next = (newPage: number) => {
        // setPage((p) => p + 1);
        setSearchParams({ page: '' + newPage });
    };

    // console.log( 2 );

    const [filterKey, setFilterKey] = useState('');
    const [filteredWorkshops, setFilteredWorkshops] = useState<IWorkshop[]>([]);

    // side-effect for filtering when filterKey or workshops states change
    useEffect(
        () => {
            setFilteredWorkshops(
                workshops.filter(
                    (workshop) => workshop.name.toUpperCase().includes(filterKey.toUpperCase())
                )
            );
        },
        [workshops, filterKey]
    );

    return (
        <div>
            <h1>List of Workshops</h1>
            <hr />

            <div>
                <Pagination
                    page={page}
                    onPrevious={previous}
                    onNext={next}
                    disablePrevious={!(loading === false && error === null)}
                    disableNext={!(loading === false && error === null)}
                />
            </div>

            <div className="my-3">
                <input
                    type="search"
                    className="form-control"
                    placeholder="Type to search by name"
                    value={filterKey}
                    onChange={(event) => setFilterKey(event.target.value)}
                />
                <div>
                    Workshops whose name has
                    <span className="text-primary"> {filterKey} </span> are shown.
                </div>
            </div>

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
                    <Row xs={1} md={2} lg={3} xxl={4}>
                        {
                            filteredWorkshops.map(
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