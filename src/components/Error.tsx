import { ErrorResponse, useRouteError } from "react-router-dom";
import React, { Fragment } from "react";

import MainNavigation from "./MainNavigation";
import PageContent from "./PageContent";

const Error: React.FC = () => {
  const error = useRouteError() as ErrorResponse;

  let title = "An error ocurred!";

  let message = "Something went wrong!";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resourses or page.";
  }

  return (
    <Fragment>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </Fragment>
  );
};

export default Error;
