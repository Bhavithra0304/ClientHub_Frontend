import React from "react";
import "../styles/Welcome.css";

const Welcome = () => {
  return (
    <div className="Welcome">

      <section className="hero">
        <div className="hero-content">
          <h1 className="heading">ClientHub-Customer Management System</h1>
          <p>
            A secure and efficient platform to manage customer data
            professionally and reliably.
          </p>
          <button className="primary-btn">Explore System</button>
        </div>
      </section>

      <section className="about">
        <div className="about-content">
          <h2>About Our System</h2>
          <p>
            Our Customer Management System helps organizations store,
            track, and manage customer information with ease and accuracy.
          </p>
          <p>
            Built with a focus on performance, security, and simplicity.
          </p>
        </div>
      </section>

      <section className="modules">
        <div className="modules-container">
          <h2>Core Features</h2>

          <div className="cards">
            <div className="card">
              <h3>Add Customers</h3>
              <p>Register new customers with essential details.</p>
            </div>

            <div className="card">
              <h3>View Customers</h3>
              <p>Access all customer records in a single dashboard.</p>
            </div>

            <div className="card">
              <h3>Update Records</h3>
              <p>Edit and update customer information easily.</p>
            </div>

            <div className="card">
              <h3>Delete Customers</h3>
              <p>Remove inactive or duplicate customer data securely.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Welcome;
