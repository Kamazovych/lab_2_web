import Header from './components/Header';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-slate-100 font-sans text-slate-800 flex flex-col">
            <Header />
            <main className="flex-grow flex flex-col md:flex-row justify-center gap-8 p-8 max-w-6xl mx-auto w-full">
                <Experience />
                <Skills />
            </main>
            <Footer />
        </div>
    );
}

export default App;