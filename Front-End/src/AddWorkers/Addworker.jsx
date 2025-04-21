import './Addworkers.css';
import { useState } from 'react';

export default function Addworkers() {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('http://localhost:5000/addworker', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, role })
        });

        const data = await res.text();
        alert(data);
        setName('');
        setRole('');
    };

    return (
        <div className="container">
            <h2>Worker Management System</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Worker Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Worker Role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                />
                <button type="submit">Add Worker</button>
            </form>
        </div>
    );
}
