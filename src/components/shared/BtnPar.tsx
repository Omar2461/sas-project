import { ReactNode } from "react";

type BtnPanelProps = {
  children: ReactNode;
};

function BtnPar({ children }: BtnPanelProps) {
  return (
    <div className="bg-black/60 rounded-4xl relative w-50 top-10 left-8  flex h-11">
      {children}
    </div>
  );
}

export default BtnPar;
