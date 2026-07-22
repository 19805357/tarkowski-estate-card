import Hero from "./components/Hero";
import ProjectCarousel from "./components/ProjectCarousel";
import PdfList from "./components/PdfList";
import ContactCard from "./components/ContactCard";

export default function App() {
  return (
    <div className="min-h-screen bg-bg pb-10 overflow-x-hidden">
      <Hero />
      <div className="flex flex-col gap-6 mt-2">
        <ProjectCarousel />
        <PdfList />
        <ContactCard />
      </div>
    </div>
  );
}
