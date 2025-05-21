import { useState } from "react";

const App = () => {
    //   const x = 100; // static data
    const [ title, setTitle ] = useState('Workshops App'); // dynamic data

    return (
        <div>
            <h1>{title}</h1>
            <hr />

            <button onClick={() => setTitle('Workshops Application')}>
                Change title
            </button>

            {/* Exercise */}
            <span>
                You have clicked this button
                <span>{/* show the count of times the button is clicked */}</span> times
            </span>
        </div>
    );
};

export default App;
