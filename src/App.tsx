import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import UserDetails from './components/user-details/UserDetials';

function App() {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        axios.get('http://localhost:3000/worker-exp ').then(res => {
            setData(res.data);
        });

    }, [])

    return (
        <div className="App">
            <header className="App-header">
                {data && data.map((d: any) =>
                    <UserDetails workerData={d} />
                )}
            </header>
        </div>
    );
}

export default App;
