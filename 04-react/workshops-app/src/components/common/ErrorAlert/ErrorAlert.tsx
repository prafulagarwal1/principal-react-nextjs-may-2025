import { Alert } from "react-bootstrap";

interface Props {
    err: Error
}

const ErrorAlert = ({ err } : Props) => {
    return (
        <Alert variant="danger">
            {err.message}
        </Alert>
    );
};

export default ErrorAlert;