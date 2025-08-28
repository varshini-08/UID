import React from 'react';

const Hero = () => {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '120px 20px 80px',
      textAlign: 'center'
    }}>
      <div className="container">
        <h1 style={{fontSize: '3rem', marginBottom: '20px'}}>
          Transform Your Health & Fitness Journey
        </h1>
        <p style={{fontSize: '1.2rem', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px'}}>
          Join thousands of members achieving their wellness goals with our state-of-the-art facilities and expert trainers
        </p>
        <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap'}}>
          <button style={{
            background: '#4caf50',
            color: 'white',
            border: 'none',
            padding: '15px 30px',
            borderRadius: '8px',
            fontSize: '1.1rem',
            cursor: 'pointer'
          }}>
            Start Free Trial
          </button>
          <button style={{
            background: 'transparent',
            color: 'white',
            border: '2px solid white',
            padding: '15px 30px',
            borderRadius: '8px',
            fontSize: '1.1rem',
            cursor: 'pointer'
          }}>
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;