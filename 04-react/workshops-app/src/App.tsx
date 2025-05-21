import { useState } from "react";
import { Alert } from 'react-bootstrap';

import './App.scss';

const App = () => {
    //   const x = 100; // static data
    const [ title, setTitle ] = useState('Workshops App'); // dynamic data
    let [ count, setCount ] = useState(0); // dynamic data -> when the second button is clicked, count has to be changed by calling setCount

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

            <h1>{title}</h1>
            <hr />

            <button onClick={() => {
                setTitle('Workshops Application');
                // setCount( count + 1 );
            }}>
                Change title
            </button>

            <button onClick={() => setCount( count + 1 )}>
                You have clicked this button <span>{count}</span> times
            </button>
        </div>
    );
};

export default App;
