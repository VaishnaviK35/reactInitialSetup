import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { FormikConfig, useFormik } from "formik";
import * as Yup from "yup";
import apiClient from "../services/ApiClient";
import { toast } from "react-toastify";
import { AxiosResponse } from "axios";
import { TextField } from "@mui/material";

export default function ClientForm() {
  const formik = useFormik({
    initialValues: {
      client_name: "",
      client_email: "",
    },
    onSubmit: () => {
      addClient();
    },
    validationSchema: Yup.object().shape({
      client_name: Yup.string()
        .matches(/^[a-zA-Z ]+$/, "Only letters and spaces are allowed")
        .required("User Name is required."),
      client_email: Yup.string()
        .required("User Email is required.")
        .email("Invalid Email Address"),
    }),
  });

  interface addClientParams {
    name: string;
    email: string;
  }

  type ClientData = {
    // Define properties based on what your API expects
    name: string;
    email: string;
    phone?: string;
  };

  type ClientResponse = {
    // Define properties based on what the API returns
    id: string;
    name: string;
    email: string;
    phone?: string;
  };

  const addClientAPI: UseMutationResult<
    AxiosResponse<ClientResponse>,
    Error,
    ClientData
  > = useMutation({
    mutationFn: (values: ClientData) =>
      apiClient.post<ClientResponse>("create-client", values),
    onSuccess: () => {
      formik.resetForm();
      toast.success("Organization details added successfully.");
    },
    onError: (err: any) => {
      console.log("err : ", err);
    },
  });

  function addClient() {
    const { client_name, client_email, ...rest } = formik.values;
    const modified_params = { name: client_name, email: client_email, ...rest };
    addClientAPI.mutate(modified_params);
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        label="Name"
        name="client_name"
        variant="outlined"
        value={formik.values.client_name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.client_name ? true : false}
      />
      {formik.errors && formik.errors.client_name && (
        <div>{formik.errors.client_name}</div>
      )}
      <TextField
        label="Email"
        type="email"
        name="client_email"
        variant="outlined"
        value={formik.values.client_email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.client_email ? true : false}
      />
      {formik.errors && formik.errors.client_email && (
        <div>{formik.errors.client_email}</div>
      )}
    </form>
  );
}
