import React from 'react';

function Terms() {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Terms and Conditions</h1>
            <p style={styles.paragraph}>Welcome to sakhawatansari.dev!</p>
            <p style={styles.paragraph}>These terms and conditions outline the rules and regulations for the use of yourslogo's Website, located at <a href="https://github.com/sakhawatansari" style={styles.link}>https://github.com/sakhawatansari</a>.</p>
            <h2 style={styles.subHeader}>1. Introduction</h2>
            <p style={styles.paragraph}>By accessing this website we assume you accept these terms and conditions. Do not continue to use sakhawatansari.dev if you do not agree to take all of the terms and conditions stated on this page.</p>
            <h2 style={styles.subHeader}>2. User Responsibilities</h2>
            <p style={styles.paragraph}>[Details about user responsibilities]</p>
            <h2 style={styles.subHeader}>3. Intellectual Property</h2>
            <p style={styles.paragraph}>[Details about intellectual property]</p>
            <h2 style={styles.subHeader}>4. Termination</h2>
            <p style={styles.paragraph}>[Details about termination]</p>
            <h2 style={styles.subHeader}>5. Dispute Resolution</h2>
            <p style={styles.paragraph}>[Details about dispute resolution]</p>
            <h2 style={styles.subHeader}>6. Limitation of Liability</h2>
            <p style={styles.paragraph}>[Details about limitation of liability]</p>
            <h2 style={styles.subHeader}>7. Governing Law</h2>
            <p style={styles.paragraph}>[Details about governing law]</p>
        </div>
    );
}

const styles = {
    container: {
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
        color: '#333',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '800px',
        margin: 'auto',
    },
    header: {
        fontSize: '2em',
        marginBottom: '20px',
        color: '#4CAF50',
    },
    subHeader: {
        fontSize: '1.5em',
        marginTop: '20px',
        marginBottom: '10px',
        color: '#333',
    },
    paragraph: {
        marginBottom: '10px',
    },
    link: {
        color: '#4CAF50',
        textDecoration: 'none',
    },
};

export default Terms;
