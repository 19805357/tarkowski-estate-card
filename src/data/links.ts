export type Tile = {
  id: string;
  name: string;
  sub: string;
  icon: string; // nazwa ikony z lucide-react
  url: string;
  accent?: boolean; // true = wyróżniony kafelek (niebieski)
};

export type PdfItem = {
  id: string;
  name: string;
  meta: string;
  url: string;
};

export type ContactItem = {
  icon: string; // lucide-react
  value: string;
  url?: string; // opcjonalny link
};

export const tiles: Tile[] = [
  {
    id: "wave",
    name: "Wave Nieruchomości",
    sub: "wavenieruchomosci.pl",
    icon: "Building2",
    url: "https://wavenieruchomosci.pl",
    accent: true,
  },
  {
    id: "archetyp",
    name: "Archetyp mieszkaniowy",
    sub: "wavearchetyp.lovable.app",
    icon: "Brain",
    url: "https://wavearchetyp.lovable.app",
  },
  {
    id: "siedlisko",
    name: "Siedlisko Kłodawa",
    sub: "Lovable showcase",
    icon: "Home",
    url: "https://siedlisko-wave-showcase.lovable.app",
  },
  {
    id: "opoczno",
    name: "Opoczno — hala",
    sub: "Lovable showcase",
    icon: "Warehouse",
    url: "https://opocznohala.lovable.app",
  },
  {
    id: "jasienska",
    name: "Jasieńska Leśna Przystań",
    sub: "Lovable showcase",
    icon: "Trees",
    url: "https://wavejasienskaprzystan.lovable.app",
  },
  {
    id: "kalkulator",
    name: "Kalkulator magazynowy",
    sub: "NPV / IRR / ROI",
    icon: "Calculator",
    url: "https://wavenieruchomosci.pl/kalkulator-inwestycji-magazynowej/",
  },
];

export const pdfs: PdfItem[] = [
  {
    id: "gdynia-yacht",
    name: "Analiza — Gdynia Yacht Club",
    meta: "IRR · NPV · warianty 5,5 vs 6,0 mln",
    url: "https://wavenieruchomosci.pl", // ← podmień na bezpośredni link do PDF
  },
];

export const contacts: ContactItem[] = [
  {
    icon: "Linkedin",
    value: "linkedin · tarkowskisdpomaster",
    url: "https://www.linkedin.com/in/tarkowskisdpomaster/",
  },
  {
    icon: "Mail",
    value: "office@tarkowski.estate",
    url: "mailto:office@tarkowski.estate",
  },
  {
    icon: "Mail",
    value: "biuro@wavenieruchomosci.pl",
    url: "mailto:biuro@wavenieruchomosci.pl",
  },
  {
    icon: "Phone",
    value: "503-859-009",
    url: "tel:+48503859009",
  },
  {
    icon: "MapPin",
    value: "Gdańsk, Polska",
  },
];
