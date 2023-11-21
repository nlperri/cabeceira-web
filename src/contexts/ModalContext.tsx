import { createContext, ReactNode, useState } from "react";
import { UserBookDetails } from "../@types/UserBookDetails";
import { BookVolumeData } from "../@types/bookVolume.type";

interface ModalContextProps {
  isOpen: boolean;
  handleSetIsOpen: () => void;
  bookContent: UserBookDetails | null;
  bookExploreContent: BookVolumeData | null;
  handleSetBookContent: (content: UserBookDetails) => void;
  handleSetBookExploreContent: (content: BookVolumeData) => void;
  closeModal: (e: React.MouseEvent<HTMLDivElement>) => void;
}

interface ModalContextProviderProps {
  children: ReactNode;
}

export const ModalContext = createContext<ModalContextProps>({
  isOpen: true,
  bookContent: null,
  bookExploreContent: null,
  handleSetIsOpen: () => {},
  handleSetBookContent: () => {},
  handleSetBookExploreContent: () => {},
  closeModal: (_e: React.MouseEvent<HTMLDivElement>) => {},
});

export function ModalContextProvider({ children }: ModalContextProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [bookContent, setBookContent] = useState<UserBookDetails | null>(null);
  const [bookExploreContent, setBookExploreContent] =
    useState<BookVolumeData | null>(null);

  const handleSetIsOpen = () => {
    setIsOpen((previous) => !previous);
  };

  const handleSetBookContent = (content: UserBookDetails) => {
    setBookContent(content);
    handleSetIsOpen();
  };

  const handleSetBookExploreContent = (content: BookVolumeData) => {
    setBookExploreContent(content);
    handleSetIsOpen();
  };

  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    const modalBody = document
      .querySelector("#modalBody")
      ?.getBoundingClientRect();

    if (modalBody) {
      if (
        e?.clientY < modalBody?.top ||
        e?.clientY > modalBody?.bottom ||
        e?.clientX < modalBody?.left ||
        e?.clientX > modalBody?.right
      ) {
        handleSetIsOpen();
      }
    }
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        bookContent,
        bookExploreContent,
        handleSetIsOpen,
        handleSetBookContent,
        closeModal,
        handleSetBookExploreContent,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
