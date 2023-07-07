import { useState } from "react";
import "./AddPerson.css";
export default function AddPerson({ setName, setPhone, setEmail, validatePerson }) {
  
  return (
    <section>
      <div className="card pa-30 mr-30">
        <form data-testid="add-person-form">
          <div className="layout-column mb-15">
            <label htmlFor="name" className="mb-3">
              Person Name
            </label>
            <input
              type="text"
              placeholder="Enter Person Name"
              name="name"
              data-testid="person-name-input"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="layout-column mb-15">
            <label htmlFor="number" className="mb-3">
              Phone Number
            </label>
            <input
              type="number"
              placeholder="Enter Phone Number"
              name="number"
              data-testid="phone-number-input"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="layout-column mb-30">
            <label htmlFor="email" className="mb-3">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email Address"
              name="email"
              data-testid="person-email-input"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="layout-row justify-content-end">
            <button type="button" className="mx-0" data-testid="add-person-button" onClick={() => validatePerson()}>
              Add Person
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
