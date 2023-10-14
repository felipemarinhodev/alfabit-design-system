import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";

export type ModalProps = {
  children: string;
  isOpen: boolean;
  title: string;
  onClose: () => void;
} & React.HTMLAttributes<HTMLDivElement>

const Modal = ({ children, isOpen, onClose, title }: ModalProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Panel className="">
            <div className="">
              <Dialog.Title as="h3" className="">
                {title}
              </Dialog.Title>
              <button onClick={onClose}>
                <XMarkIcon className="" />
              </button>
            </div>
            {children}
          </Dialog.Panel>
        </Transition.Child>
      </Dialog >
    </Transition >
  )
};

export default Modal;
