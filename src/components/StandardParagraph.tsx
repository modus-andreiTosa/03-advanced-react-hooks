import type { ReactNode } from "react";

export const StandardParagraph = ({ children }: { children: ReactNode }) => {
  return (
    <p className="lg:mb-3 lg:p-2 text-md rounded-md bg-indigo-950 text-gray-50">
      {children}
    </p>
  );
};
