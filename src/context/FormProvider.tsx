import { Expense, FormProviderProps, initialExpense } from "../util/types";
import React, { ChangeEvent, useState } from "react";

import { FormContext } from "./FormContext";

// function isString(value: any): value is string {
//   return typeof value === "string";
// }

// function convertArrayBufferToString(arrayBuffer: ArrayBuffer): string {
//   const decoder = new TextDecoder("utf-8");
//   return decoder.decode(arrayBuffer);
// }

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [form, setForm] = useState<Expense>(initialExpense);

  // const updateImage = (img: string) => {
  //   setForm((prevForm) => {
  //     return {
  //       ...prevForm,
  //       image: img,
  //     };
  //   });
  // };

  // const updateDotType = (value: string) => {
  //   setForm((prevForm) => {
  //     return {
  //       ...prevForm,
  //       dotsOptions: {
  //         ...prevForm.dotsOptions,
  //         type: value,
  //       },
  //     };
  //   });
  // };

  const updateForm = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> | Date
  ) => {
    if ("target" in e) {
      const { name, value } = e.target;
      setForm((prevState: Expense) => {
        return {
          ...prevState,
          [name]: value,
        };
      });
    } else {
      setForm((prevState: Expense) => {
        return {
          ...prevState,
          date: e as Date,
        };
      });
    }
  };

  const contextValue = React.useMemo(() => ({ form, updateForm }), [form]);

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};

export default FormProvider;
