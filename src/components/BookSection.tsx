import Book from "../components/Book";
import { useState } from "react";
import { UserBookDetails } from "../@types/UserBookDetails";
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'


interface BookSectionProps {
  title: string;
  books: UserBookDetails[]
}

const BookSection = ({ books, title }: BookSectionProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 1, spacing: 5 },
      },
      "(min-width: 865px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1150px)": {
        slides: { perView: 3, spacing: 5 },
      },
      "(min-width: 1300px)": {
        slides: { perView: 4, spacing: 10 },
      },
    },
    slides: { perView: 1 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true);
    },
  })


  return (
    <section className="w-8/12 mb-16">

      <div className="flex items-center justify-between">
        <div className="flex items-center justify-around gap-1">
          <h1 className="text-dark-blue text-3xl font-bold">{title}</h1>
          <h3 className="text-dark-blue text-lg font-bold">
            ({books.length} {books.length > 1 ? "livros" : "livro"})
          </h3>
        </div>
        <div className="text-rose-400 text-sm font-bold">Ver todos</div>
      </div>
      <main ref={sliderRef} className="keen-slider ">
        {books.length > 0
          ? books
            .map((book) => {
              return <Book key={book.id} book={book} slider='keen-slider__slide' />;
            })
          : null}
      </main>

    </section>
  );
};

export default BookSection;
