import Book from "../components/Book";
import { useState } from "react";
import { UserBookDetails } from "../@types/UserBookDetails";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Arrow } from "./Arrow";

interface BookSectionProps {
  title: string;
  books: UserBookDetails[];
}

const BookSection = ({ books, title }: BookSectionProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
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
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <section className="w-6/12">
      <div className="flex items-center gap-1">
        <h1 className="text-dark-blue text-3xl font-bold">{title}</h1>
        <h3 className="text-dark-blue text-lg font-bold">
          ({books.length} {books.length === 1 ? "livro" : "livros"})
        </h3>
      </div>
      {books.length > 0 ? (
        <div className="navigation-wrapper relative">
          <main ref={sliderRef} className="keen-slider gap-3">
            {books.map((book) => {
              return (
                <Book key={book.id} book={book} slider={`keen-slider__slide`} />
              );
            })}
          </main>
          {loaded && instanceRef.current && (
            <div className="">
              <Arrow
                left
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </div>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </section>
  );
};

export default BookSection;
