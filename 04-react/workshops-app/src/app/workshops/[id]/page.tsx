import { useParams } from "react-router";

import WorkshopDetails from "../../../components/workshops/WorkshopDetails/WorkshopDetails";

const WorkshopDetailsPage = () => {
    const { id } = useParams();

    return <WorkshopDetails id={+(id as string)} />;
};

export default WorkshopDetailsPage;