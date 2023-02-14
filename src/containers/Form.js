import "./styles.css";
import { UncontrolledForm } from "../components/UncontrolledForm";
import { ControlledForm } from "../components/ControlledForm";

function Form() {
  return (
    <div className="App">
      <p>Uncontrolled</p>
      <UncontrolledForm />
      <p>Controlled</p>
      <ControlledForm />
    </div>
  );
}

export default Form;
