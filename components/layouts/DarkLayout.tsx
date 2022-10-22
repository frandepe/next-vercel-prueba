import { FC, ReactNode } from "react";

type PropChildren = {
  children: ReactNode;
};

export const DarkLayout: FC<PropChildren> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(224, 224, 224, 0.5)",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <h3>Datk-Layout</h3>
      <div>{children}</div>
    </div>
  );
};
