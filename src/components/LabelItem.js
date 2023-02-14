import { useEffect, useState } from "react";

// Arrow function
const LabelItem = ({ title, description, ...props }) => {
  let minhaVariavelLet = "inicial";
  const [meuState, setMeuState] = useState("inicial");

  // hooks
  useEffect(() => {
    setTimeout(() => {
      // console.log('executou');
      minhaVariavelLet = "mudou";
      setMeuState("mudou");
    }, 2000);
  }, []);

  // useEffect(() => {
  //   console.log(`valor do state: ${meuState}`);
  // }, [meuState]);

  // useEffect(() => {
  //   console.log(`valor do let: ${minhaVariavelLet}`);
  // }, [minhaVariavelLet])

  return (
    <div {...props}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>meu let: {minhaVariavelLet}</p>
      <p>meu state: {meuState}</p>
    </div>
  );
};

export { LabelItem };
