export const UncontrolledForm = () => {
  const onSubmit = (event) => {
    event.preventDefault();

    var formData = new FormData(event.target);

    // iterate through entries...
    for (var pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }

    // ...or output as an object
    console.log(Object.fromEntries(formData));
  };

  return (
    <form
      style={{ display: "flex", flexFlow: "column wrap" }}
      onSubmit={onSubmit}
    >
      <input name="name" />
      <input type="radio" name="selecao-radio" value="primeiro" />
      <input type="radio" name="selecao-radio" value="segundo" />
      <input type="radio" name="selecao-radio" value="terceiro" />
      <div
        style={{
          display: "flex",
          flexFlow: "row nowrap",
          width: "100%",
          justifyContent: "space-around"
        }}
      >
        <button type="button">Botão normal</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
