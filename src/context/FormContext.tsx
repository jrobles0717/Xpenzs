import { FormContextType, initialExpense } from "../util/types";

import React from "react";

export const FormContext = React.createContext<FormContextType>({
  form: initialExpense,
  updateForm: () => {},
  updateDate: () => {},
  // updateColor: () => {},
  // updateImage: () => {},
  // updateDotType: () => {},
});
