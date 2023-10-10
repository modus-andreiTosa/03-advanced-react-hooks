import type { ReactNode } from "react";

export const StandardSectionHeader = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <div className="lg:mb-3 flex items-center">
      <h5 className="font-semibold text-sky-800">{children}</h5>
    </div>
  );
};
