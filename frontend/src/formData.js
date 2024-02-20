// useFormValues.js
import { useState } from "react";

// Define your custom hook
const useFormValues = (initialValues) => {
  // Use useState inside the hook
  const [formValues, setFormValues] = useState({ ...initialValues });

  // Define a function to handle form value changes
  const handleFormValueChange = (key, value) => {
    setFormValues({
      ...formValues,
      [key]: value
    });
  };

  // Return the state and the function to update it
  return [formValues, handleFormValueChange];
};

export default useFormValues;
