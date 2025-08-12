import type { ReactNode } from "react";

const Error = ({ children }: { children: ReactNode }) => {
  return <div className="error">{children}</div>;
};

export default Error;
