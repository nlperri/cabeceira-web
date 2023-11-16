import Header from "../components/Header";
import BookSection from "../components/BookSection";

const Home = () => {
  const sections = [
    {
      id: 1,
      title: "Quero ler",
    },
    {
      id: 2,
      title: "Lendo",
    },
    {
      id: 3,
      title: "Lidos",
    },
  ];

  return (
    <div>
      <Header />
      <main className="w-full h-[100vh] flex flex-col items-center justify-center">
        {sections.map((section) => {
          return <BookSection key={section.id} title={section.title} />;
        })}
      </main>
    </div>
  );
};

export default Home;
