import { Id } from 'react-toastify'

interface BookExploreDetailsProps {
    handleSetIsOpen: () => void;
    emmitErrorToast: (message: string, duration: number) => Id;
  }

const BookExploreDetails = ({handleSetIsOpen, emmitErrorToast }: BookExploreDetailsProps) => {
    return (<></>)
}

export default BookExploreDetails