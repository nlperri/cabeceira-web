import Header from "../components/Header";
import BookSection from "../components/BookSection";
import { BookShelfStatus } from "../@types/UserBookDetails";

const sectionsData = [
  {
    title: "Quero ler",
    status: BookShelfStatus.WANT_TO_READ,
  },
  {
    title: "Lendo",
    status: BookShelfStatus.READING,
  },
  {
    title: "Lidos",
    status: BookShelfStatus.READED,
  },
];

const Home = () => {
  return (
    <div>
      <Header />
      <main className="w-full h-[100vh] flex flex-col items-center justify-center">
        {sectionsData.map((section) => {
          return (
            <BookSection
              key={section.title}
              title={section.title}
              status={section.status}
            />
          );
        })}
      </main>
    </div>
  );
};

export default Home;
