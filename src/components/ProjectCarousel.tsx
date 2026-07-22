import { useEffect, useRef, useState } from "react";
import { tiles } from "../data/links";
import Icon from "./Icon";
import CompassRose from "./CompassRose";

const CARD_WIDTH_PERCENT = 78;
const SIDE_PADDING_PERCENT = (100 - CARD_WIDTH_PERCENT) / 2;

const DIRECTIONS = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];

function directionFor(index: number, total: number) {
  const degree = Math.round((index * 360) / total);
  const label = DIRECTIONS[Math.round(degree / 45) % 8];
  return { degree, label };
}

export default function ProjectCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const cards = Array.from(el.children) as HTMLElement[];

    const onScroll = () => {
      const containerCenter = el.scrollLeft + el.clientWidth / 2;
      let closest = 0;
      let minDist = Infinity;
      cards.forEach((card, i) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const dist = Math.abs(cardCenter - containerCenter);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });
      setActive(closest);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const activeDegree = directionFor(active, tiles.length).degree;

  const scrollTo = (index: number) => {
    const el = containerRef.current;
    if (!el) return;
    const card = el.children[index] as HTMLElement | undefined;
    if (!card) return;
    el.scrollTo({
      left: card.offsetLeft + card.offsetWidth / 2 - el.clientWidth / 2,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <div className="relative h-[180px] overflow-hidden">
        <CompassRose rotation={activeDegree} />
      </div>

      <div
        ref={containerRef}
        className="flex overflow-x-auto -mt-16"
        style={{
          scrollSnapType: "x mandatory",
          paddingLeft: `${SIDE_PADDING_PERCENT}%`,
          paddingRight: `${SIDE_PADDING_PERCENT}%`,
          scrollbarWidth: "none",
        }}
      >
        {tiles.map((tile, i) => {
          const { degree, label } = directionFor(i, tiles.length);
          return (
            <button
              key={tile.id}
              onClick={() => {
                if (i === active) {
                  window.open(tile.url, "_blank");
                } else {
                  scrollTo(i);
                }
              }}
              className="text-left rounded-xl border shrink-0"
              style={{
                width: `${CARD_WIDTH_PERCENT}%`,
                marginRight: 12,
                scrollSnapAlign: "center",
                padding: "16px 18px",
                backgroundColor: tile.accent ? "#EFF6FF" : "#FFFFFF",
                borderColor: tile.accent ? "#185FA5" : "#E5E7EB",
                opacity: i === active ? 1 : 0.55,
                transform: i === active ? "scale(1)" : "scale(0.94)",
                transition: "opacity 300ms ease, transform 300ms ease",
              }}
            >
              <div className="flex items-center justify-between">
                <Icon
                  name={tile.icon}
                  size={22}
                  color={tile.accent ? "#0C447C" : "#111827"}
                />
                <span className="text-[11px] font-semibold text-accent tracking-wide">
                  {label} · {degree.toString().padStart(3, "0")}°
                </span>
              </div>
              <div
                className="mt-2 font-medium"
                style={{ color: tile.accent ? "#0C447C" : "#111827" }}
              >
                {tile.name}
              </div>
              <div className="text-xs mt-0.5 text-text-secondary">{tile.sub}</div>
            </button>
          );
        })}
      </div>

      <div className="flex justify-center gap-1.5 mt-3">
        {tiles.map((tile, i) => (
          <button
            key={tile.id}
            onClick={() => scrollTo(i)}
            aria-label={`Pokaż ${tile.name}`}
            className="rounded-full"
            style={{
              width: i === active ? 16 : 6,
              height: 6,
              backgroundColor: i === active ? "#185FA5" : "#D1D5DB",
              transition: "all 250ms ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}
