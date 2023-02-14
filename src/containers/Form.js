import "./styles.css";
import { UncontrolledForm } from "../components/UncontrolledForm";
import { ControlledForm } from "../components/ControlledForm";
import { useEffect, useState } from "react";
import { AddressService } from "../services/address.service";

const response = [
  {
    id: 1,
    title: "Título 1",
    description: "descrição 1"
  },
  {
    id: 2,
    title: "Título 2",
    description: "descrição 2"
  },
  {
    id: 3,
    title: "Título 3",
    description: "descrição 3"
  }
];

function Form() {
  const addressService = AddressService.getInstance();

  const minhaVar = "valor constante";
  const [meuArr, setMeuArr] = useState([]);
  const [address, setAddress] = useState();

  // async function doRequisition() {
  // }

  const doRequisition = async () => {
    const myResponse = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(response);
      }, 3000);
    });

    console.log("executou a resposta");
    setMeuArr(myResponse);
  };

  useEffect(() => {
    doRequisition();
  }, []);

  const findAddressByCep = () => {
    // const res = await addressService.findByCep('01001000');
    // setAddress(res.data);
    addressService
      .findByCep("01001000")
      .then((res) => {
        setAddress(res.data);
        return addressService.findByCep(res.data.id);
      })
      .then((res) => {})
      .catch((err) => {})
      .finally(() => {
        console.log("terminou a req");
      });
  };

  useEffect(() => {
    findAddressByCep();
  }, []);

  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox {minhaVar}</h1>
      <h2>Start editing to see some magic happen!</h2>
      {address && <div>Logradouro: {address.logradouro}</div>}
      <LabelItem
        title="Meu título"
        description="Descrição nova"
        style={{ color: "red", backgroundColor: "blue" }}
        className="minha-classe"
        novoAtributo="valor dele"
      ></LabelItem>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {meuArr.map(({ id, title, description }) => (
            <tr key={id}>
              <td>{title}</td>
              <td>{description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {meuArr.map(({ id, title, description }) => (
        <LabelItem key={id} title={title} description={description} />
      ))} */}
      <p>Uncontrolled</p>
      <UncontrolledForm />
      <p>Controlled</p>
      <ControlledForm />
    </div>
  );
}

export default Form;
