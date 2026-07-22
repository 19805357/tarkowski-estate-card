# Tarkowski Estate — Digital Business Card
## Specyfikacja projektu dla Claude Code

---

## 1. CEL APLIKACJI

Mobilna wizytówka-portfolio Pawła Tarkowskiego do pokazania przy przypadkowym spotkaniu.
Otwierana w przeglądarce telefonu — działa jak apka (PWA).
Zawiera: logo, linki do projektów/Lovable, PDFy, kontakt.

---

## 2. STACK TECHNICZNY

- **React** (Vite + TypeScript)
- **Tailwind CSS** — styling
- **Lovable.app** — hosting i deployment
- **Brak backendu** — dane statyczne w pliku `src/data/links.ts`

---

## 3. STRUKTURA PLIKÓW

```
src/
  App.tsx                  # root
  main.tsx
  data/
    links.ts               # JEDYNE MIEJSCE edycji linków i PDF-ów
  components/
    Hero.tsx               # logo + imię + subtitle
    TileGrid.tsx           # siatka kafelków projektów
    PdfList.tsx            # lista dokumentów PDF
    ContactCard.tsx        # dane kontaktowe
  assets/
    logo-dark.png          # Logo-on-dark.png (Tarkowski Estate Invest Boutique)
public/
  manifest.json            # PWA manifest
  favicon.ico
```

---

## 4. PLIK DANYCH — `src/data/links.ts`

**To jest jedyne miejsce gdzie dodaje się linki i PDFy. Nigdy nie hardkoduj URL-i w komponentach.**

```typescript
export type Tile = {
  id: string;
  name: string;
  sub: string;
  icon: string;         // nazwa ikony z lucide-react
  url: string;
  accent?: boolean;     // true = wyróżniony kafelek (niebieski)
};

export type PdfItem = {
  id: string;
  name: string;
  meta: string;
  url: string;
};

export type ContactItem = {
  icon: string;         // lucide-react
  value: string;
  url?: string;         // opcjonalny link
};
```

Pełną zawartość tablic `tiles`, `pdfs`, `contacts` trzymamy w `src/data/links.ts`.

---

## 5. DESIGN — ZASADY

### Hero
- Tło: `#0D1117` (ciemny granat)
- Logo: `src/assets/logo-dark.png` — max-width 300px, wycentrowane
- Subtitle: `rgba(255,255,255,0.45)`, 12px, letter-spacing

### Kafelki (TileGrid)
- Grid 2 kolumny, gap 8px
- Białe tło, border `1px solid #e5e7eb`
- border-radius 12px, padding 14px 16px
- Kafelek `accent=true`: tło `#EFF6FF`, border `#185FA5`, tekst `#0C447C`
- Na klik: `window.open(url, '_blank')`

### Lista PDF
- Pełna szerokość, border-bottom między elementami
- Ikona PDF po lewej, tekst środek, chevron po prawej
- Na klik: `window.open(url, '_blank')`

### Kontakt
- Karta z białym tłem, border, border-radius 12px
- Każdy wiersz: ikona + wartość, border-bottom między wierszami
- Klikalny jeśli ma `url`

### Kolory ogólne
```
background strony:  #F9FAFB
surface karty:      #FFFFFF
border:             #E5E7EB
text primary:       #111827
text secondary:     #6B7280
text muted:         #9CA3AF
accent blue:        #185FA5
accent bg:          #EFF6FF
```

---

## 6. PWA — `public/manifest.json`

```json
{
  "name": "Tarkowski Estate",
  "short_name": "Tarkowski",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0D1117",
  "theme_color": "#0D1117",
  "icons": [
    { "src": "/favicon.ico", "sizes": "64x64", "type": "image/x-icon" }
  ]
}
```

Dodaj w `index.html`:
```html
<link rel="manifest" href="/manifest.json">
<meta name="theme-color" content="#0D1117">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
```

---

## 7. JAK DODAĆ NOWY LINK LUB PDF

**Otwórz `src/data/links.ts` i:**

### Nowy kafelek projektu:
```typescript
// dodaj do tablicy tiles:
{
  id: "nowy-projekt",
  name: "Nazwa projektu",
  sub: "opis lub URL",
  icon: "Globe",           // ikona z lucide-react
  url: "https://...",
},
```

### Nowy PDF:
```typescript
// dodaj do tablicy pdfs:
{
  id: "nowy-pdf",
  name: "Nazwa dokumentu",
  meta: "opis / parametry",
  url: "https://link-do-pdf.pl/plik.pdf",
},
```

### Nowy kontakt:
```typescript
// dodaj do tablicy contacts:
{
  icon: "Globe",
  value: "tarkowski.estate",
  url: "https://tarkowski.estate",
},
```

---

## 8. DEPLOYMENT NA LOVABLE

1. Wklej kod do nowego projektu Lovable
2. Wgraj `Logo-on-dark.png` do `src/assets/`
3. Kliknij **Publish**
4. URL: `tarkowski-estate-card.lovable.app` (lub własna domena)
5. Na telefonie: otwórz URL → "Dodaj do ekranu głównego" → działa jak apka

---

## 9. TELEFON KONTAKTOWY — WAŻNE

Numer telefonu Wave Nieruchomości: **503-859-009**
Nigdy nie używaj 503-859-099 — to błędny numer.

---

## 10. CZEGO NIE ROBIĆ

- Nie hardkoduj URL-i w komponentach — tylko `src/data/links.ts`
- Nie dodawaj backendu ani bazy danych
- Nie używaj `localStorage` — dane są statyczne
- Nie zmieniaj kolorów hero (`#0D1117`) — to kolor tła logo
- Nie skaluj logo powyżej 300px szerokości
