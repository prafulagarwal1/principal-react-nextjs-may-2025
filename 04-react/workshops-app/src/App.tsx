import { Alert, Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router';
import Menu from './components/common/Menu/Menu';
import HomePage from "./app/page";
import WorkshopsListPage from './app/workshops/page';
import AddWorkshopPage from './app/workshops/add/page';
import WorkshopDetailsPage from './app/workshops/[id]/page';
import NotFoundPage from './app/not-found';

import './App.scss';

const App = () => {
    return (
        <div>
            <Alert
                variant="warning"
                dismissible={true}
                onClose={() => alert('You are closing the alert message')}
            >
                <Alert.Heading>
                    Note on React Version
                </Alert.Heading>
                <p>
                    The current version of React is v19. This app is built
                    using React v18. The way an app was built using React
                    v16.7 or earlier was significantly different.
                </p>
            </Alert>

            <Menu />

            <Container className="my-5">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/workshops" element={<WorkshopsListPage />} />
                    <Route path="/workshops/add" element={<AddWorkshopPage />} />
                    <Route path="/workshops/:id/*" element={<WorkshopDetailsPage />} />

                    {/* Add this route */}
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Container>
        </div>
    );
};

export default App;
