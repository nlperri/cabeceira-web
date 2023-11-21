import Header from "../components/Header";
import BookExploreSection from "../components/BookExploreSection";
import { useContext } from "react";
import { useToast } from "../hooks/useToast";
import { ModalContext } from "../contexts/ModalContext";
import BookExploreDetails from "../components/BookExploreDetails";

const Explore = () => {
  const { isOpen, handleSetIsOpen } = useContext(ModalContext);
  const { emmitErrorToast, emmitSuccessToast, Toast } = useToast();

  return (
    <div>
      <Header />
      <main className="w-full min-h-[100vh] flex items-center flex-col ">
        <BookExploreSection />
      </main>
      {isOpen && (
        <BookExploreDetails
          handleSetIsOpen={handleSetIsOpen}
          emmitErrorToast={emmitErrorToast}
          emmitSuccessToast={emmitSuccessToast}
        />
      )}
      <Toast />
    </div>
  );
};

export default Explore;
