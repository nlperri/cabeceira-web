import { createContext, ReactNode, useState } from "react";
import { UserBookDetails } from "../@types/UserBookDetails";

interface ModalContextProps {
  isOpen: boolean;
  handleSetIsOpen: () => void;
  bookContent: UserBookDetails | null;
  handleSetBookContent: (content: UserBookDetails) => void;
  closeModal: (e:React.MouseEvent<HTMLDivElement>) => void;
}

interface ModalContextProviderProps {
  children: ReactNode;
}

export const ModalContext = createContext<ModalContextProps>({
  isOpen: true,
  bookContent: null,
  handleSetIsOpen: () => {},
  handleSetBookContent: () => {},
  closeModal: (_e: React.MouseEvent<HTMLDivElement>) => {},
});

export function ModalContextProvider({ children }: ModalContextProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [bookContent, setBookContent] = useState<UserBookDetails | null>(null);

  const handleSetIsOpen = () => {
    setIsOpen((previous) => !previous);
  };

  const handleSetBookContent = (content: UserBookDetails) => {
    setBookContent(content)
    handleSetIsOpen()
  };

  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    const modalBody = document.querySelector('#modalBody')?.getBoundingClientRect()

    if(modalBody) {
          if (e?.clientY < modalBody?.top || e?.clientY > modalBody?.bottom || e?.clientX < modalBody?.left || e?.clientX > modalBody?.right) {
            handleSetIsOpen()
          }
    }
}

  return (
    <ModalContext.Provider
    value={{
      isOpen,
      bookContent,
      handleSetIsOpen,
      handleSetBookContent,
      closeModal
    }}
    >
      {children}
    </ModalContext.Provider>
  );
}