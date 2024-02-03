import React, { useState } from 'react';

const ServiceCard = ({ title, description, styles }) => (
  <li style={styles.serviceCard}>
    <h3 style={styles.serviceTitle}>{title}</h3>
    <p style={styles.serviceDescription}>{description}</p>
  </li>
);

const Services = ({ onRequestQuotation }) => {
  const [quotationName, setQuotationName] = useState('');

  const servicesList = [
    {
      title: 'Web Development',
      description: 'I specialize in building modern and responsive websites using the latest technologies. From static landing pages to dynamic web applications, I create solutions tailored to your needs.',
    },
    {
      title: 'Customization',
      description: 'I offer customization services to enhance existing websites or web applications. Whether you need to add new features, improve user experience, or optimize performance, I can help.',
    },
    {
      title: 'Digitizing Traditional Systems',
      description: 'I can modernize and digitize your traditional systems, bringing them into the digital age. This includes converting paper-based processes into efficient and automated digital workflows.',
    },
    {
      title: 'Frontend Development',
      description: 'I have expertise in frontend technologies such as HTML, CSS, and JavaScript. I create visually appealing and interactive user interfaces to provide a seamless experience for your audience.',
    },
    {
      title: 'Backend Development',
      description: 'I develop robust server-side applications using technologies like Node.js, Express, and databases like MongoDB or MySQL. This ensures a solid foundation for your web projects.',
    },
    {
      title: 'Full Stack Development',
      description: 'I provide end-to-end solutions by combining frontend and backend development skills. This allows me to create fully functional and scalable web applications that meet your business requirements.',
    },
    {
      title: 'Responsive Design',
      description: 'With a focus on user experience, I design and develop websites that work seamlessly across various devices and screen sizes. Your website will look great on desktops, tablets, and mobile devices.',
    },
  ];

  const handleQuotationRequest = () => {
    if (quotationName.trim() === '') {
      alert('Please provide your name for the quotation.');
    } else {
      onRequestQuotation(quotationName);
      alert('Quotation request sent!');
    }
  };

  return (
    <div className="services" style={styles.servicesContainer}>
      <h2 style={styles.heading}>Services</h2>
      <ul style={styles.list}>
        {servicesList.map((service, index) => (
          <ServiceCard key={index} {...service} styles={styles} />
        ))}
      </ul>
    </div>
  );
};

const styles = {
  
  servicesContainer: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '30px',
    backgroundColor: '#f8f8f8',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    color: '#333',
    fontSize: '32px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  list: {
    listStyle: 'none',
    padding: '0',
    display: 'grid',
    gap: '20px',
  },
  serviceCard: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  serviceTitle: {
    color: '#007bff',
    fontSize: '24px',
    margin: '20px 0 10px',
    textAlign: 'center',
  },
  serviceDescription: {
    color: '#666',
    fontSize: '16px',
    margin: '0 20px 20px',
    textAlign: 'center',
  },
};

export default Services;
