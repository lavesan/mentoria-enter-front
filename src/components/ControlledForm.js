import { useForm, useWatch } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";

const validationSchema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().required().email(),
  fieldReg: yup.string().required().matches(/^\d+$/, "Só aceito números")
});

export const ControlledForm = () => {
  const {
    control,
    handleSubmit,
    register,
    setValue,
    getValues,
    formState: { errors }
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: ""
    },
    resolver: yupResolver(validationSchema)
  });

  const email = useWatch({
    control,
    name: "email"
  });

  const onSubmit = handleSubmit((values) => {
    console.log("values: ", values);
  });

  useEffect(() => {
    console.log("email: ", email);
    setValue("name", email, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true
    });
    console.log("valor pelo get values: ", getValues().name);
  }, [email]);

  return (
    <form onSubmit={onSubmit}>
      <input {...register("name")} placeholder="name" />
      <p>{errors.name && errors.name.message}</p>
      <br />
      <input {...register("email")} placeholder="email" />
      <input {...register("fieldReg")} placeholder="fieldReg" />
      <p>{errors.fieldReg && errors.fieldReg.message}</p>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};
