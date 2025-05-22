import { useEffect } from "react";
import { getWorkshops } from "../../../services/workshops";

const WorkshopsList = () => {
    useEffect(
        () => {
            // console.log( 1 );
            const workshops = getWorkshops();
            console.log(workshops);
        },
        []
    );

    // console.log( 2 );

    return (
        <div>
            <h1>List of Workshops</h1>
            <hr />

        </div>
    );
}

export default WorkshopsList;