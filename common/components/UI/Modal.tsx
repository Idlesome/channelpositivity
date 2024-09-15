import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Backdrop: React.FC<{ onClick: () => void }> = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-[100vh] z-20 bg-black bg-opacity-75"
      onClick={props.onClick}
    />
  );
};

const ModalOverlay: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <div className="fixed min-w-[265px] top-0 left-0 w-9/12 md:w-4/12 lg:w-3/12 h-[100vh] z-30 bg-white animate-slide-right">
      <div className="">{props.children}</div>
    </div>
  );
};

type ModalProps = {
  onClick: () => void;
  children: React.ReactNode;
};
export const Modal = ({ onClick, children }: ModalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return (
    <>
      {mounted
        ? createPortal(
            <Backdrop onClick={onClick} />,
            document.querySelector("#overlays") as HTMLElement
          )
        : null}
      {mounted
        ? createPortal(
            <ModalOverlay>{children}</ModalOverlay>,
            document.querySelector("#overlays") as HTMLElement
          )
        : null}
    </>
  );
};
