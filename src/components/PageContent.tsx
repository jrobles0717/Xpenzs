import React from "react";

const PageContent: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
};
export default PageContent;
