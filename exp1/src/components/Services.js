import React from 'react';

const Services = () => {
  const services = [
    {
      icon: '💪',
      title: 'Personal Training',
      description: 'One-on-one coaching with certified trainers'
    },
    {
      icon: '🏥',
      title: 'Health Checkups',
      description: 'Regular health assessments and wellness plans'
    },
    {
      icon: '🥗',
      title: 'Nutrition Planning',
      description: 'Customized diet plans for your fitness goals'
    }
  ];

  return (
    <section style={{padding: '80px 20px', background: '#f8f9fa'}}>
      <div className="container">
        <h2 style={{textAlign: 'center', marginBottom: '50px', color: '#2c5530'}}>
          Our Services
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px'
        }}>
          {services.map((service, index) => (
            <div key={index} style={{
              background: 'white',
              padding: '30px',
              borderRadius: '10px',
              textAlign: 'center',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
            }}>
              <div style={{fontSize: '3rem', marginBottom: '20px'}}>
                {service.icon}
              </div>
              <h3 style={{color: '#2c5530', marginBottom: '15px'}}>
                {service.title}
              </h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;