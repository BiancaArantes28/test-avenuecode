import React from "react";
import "./App.css";
import "h8k-components";
import AddPerson from "./components/AddPerson/AddPerson";
import ListPeople from "./components/ListPeople/ListPeople";
import { useValidationPerson } from "./hooks/useValidationPerson";
const title = "Telephone Directory";

const App = () => {
  const {
    setEmail,
    setName,
    setPhone,
    contacts,
    validatePerson,
  } = useValidationPerson();

  return (
    <div>
      <h8k-navbar header={title}></h8k-navbar>
        <div className="flex align-items-center justify-content-center container">
          <AddPerson
            setName={setName}
            setEmail={setEmail}
            setPhone={setPhone}
            validatePerson={validatePerson}
          />
			    <ListPeople contacts={contacts} />
        </div>
    </div>
  );
};

export default App;
