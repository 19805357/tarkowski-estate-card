import Hero from "./components/Hero";
import TileGrid from "./components/TileGrid";
import PdfList from "./components/PdfList";
import ContactCard from "./components/ContactCard";

export default function App() {
  return (
    <div className="min-h-screen bg-bg pb-10">
      <Hero />
      <div className="flex flex-col gap-6 mt-6">
        <TileGrid />
        <PdfList />
        <ContactCard />
      </div>
    </div>
  );
}
