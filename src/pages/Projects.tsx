import React from 'react';
import Calculator from '../components/Calculator'; // Include the calculator component here if relevant

const Projects: React.FC = () => {
    return (
        <main>
            <h1>Projects</h1>
            <p>Some of my projects include:</p>

            <h2>A Small Calculator</h2>
            <Calculator /> {/* This includes the Calculator component */}
        </main>
    );
};

export default Projects;
