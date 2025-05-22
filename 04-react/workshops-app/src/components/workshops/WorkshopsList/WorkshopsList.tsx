import { useEffect, useState } from "react";
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
                workshops.length !== 0 ? (
                    <div>{workshops.length}</div>
                ) : (
                    <div>Data not available</div>
                )
            }

        </div>
    );
}

export default WorkshopsList;