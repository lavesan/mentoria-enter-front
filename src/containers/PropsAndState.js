import { useState, useEffect } from "react";
import { LabelItem } from "../components/LabelItem";
import { AddressService } from "../services/address.service";

const response = [
  {
    id: 1,
    title: "Título 1",
    description: "descrição 1",
  },
  {
    id: 2,
    title: "Título 2",
    description: "descrição 2",
  },
  {
    id: 3,
    title: "Título 3",
    description: "descrição 3",
  },
];

export const PropsAndState = () => {
  const minhaVar = "valor constante";
  const [meuArr, setMeuArr] = useState([]);
  const [address, setAddress] = useState();
  const addressService = AddressService.getInstance();

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
    <>
      <h1>Constante: {minhaVar}</h1>
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
      ))}
    </>
  );
};
