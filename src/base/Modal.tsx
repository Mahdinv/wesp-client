import React, { type ReactNode } from "react";
import { createPortal } from "react-dom";
import { FaXmark } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";

export interface ModalContentConfig {
  imageUrl: string;
  headline: string;
  title: string;
  footerText: string;
  footerActionText: string;
  onFooterActionTextClick?: () => void;
}

interface AuthModalProps {
  open: boolean;
  onClose?: () => void;
  children?: ReactNode;
  config: ModalContentConfig;
}

const Modal: React.FC<AuthModalProps> = (props) => {
  return createPortal(
    <AnimatePresence mode="wait">
      {props.open && (
        <motion.div
          key="modal-backdrop"
          className="fixed inset-0 bg-black/70 z-[9998] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative z-[9999] w-full xs:w-full sm:w-1/2 md:w-[40%] lg:w-[30%] xl:w-[25%] 2xl:w-[23%] bg-white rounded-md overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex flex-col items-center justify-center w-full h-full">
              <div className="absolute left-4 top-4 z-50 bg-gray-300 rounded-full p-2 duration-300 hover:scale-110 hover:bg-gray-200">
                <FaXmark
                  className="text-green-800 duration-300 hover:scale-110"
                  onClick={props.onClose}
                />
              </div>

              <div className="absolute w-96 h-96 bg-[#169C89] rounded-full right-0 top-0 transform translate-x-32 -translate-y-44 opacity-40"></div>

              <header className="bg-gradient-to-b from-emerald-100 to-transparent w-full px-2">
                <img
                  src={props.config.imageUrl}
                  alt="auth-image"
                  className="relative w-64 h-auto mx-auto my-auto"
                />
                <h6 className="px-2">{props.config.headline}</h6>
                <small className="px-2 text-green-950 font-semibold inline-block">
                  {props.config.title}
                </small>
              </header>

              <section className="flex-1 w-full px-4">{props.children}</section>

              <footer className="bg-[#E8F3F2] flex items-center justify-center w-full py-4">
                <small className="text-green-950 inline-flex items-center gap-1">
                  {props.config.footerText}{" "}
                  <span
                    onClick={props.config.onFooterActionTextClick}
                    className="hover:cursor-pointer font-bold duration-300 hover:underline underline-offset-4 decoration-2"
                  >
                    {props.config.footerActionText}
                  </span>
                </small>
              </footer>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById("modal") as HTMLElement
  );
};

export default Modal;
