import Header from "../components/Header";
import BookSection from "../components/BookSection";


const Home = () => {
    const sections = ["Lendo", "Quero ler", "Lidos"]

    return (
        <div>
            <Header />
            <main className="w-full h-[100vh] flex flex-col items-center justify-center">
                {sections.map((section) => {
                    return <BookSection title={section} />
                })
                }
            </main>
        </div>

    )
}

export default Home;



