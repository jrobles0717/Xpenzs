import { FormContextType, initialExpense } from "../util/types";

import React from "react";

export const FormContext = React.createContext<FormContextType>({
  form: initialExpense,
  updateForm: () => {},
  // updateColor: () => {},
  // updateImage: () => {},
  // updateDotType: () => {},
});
