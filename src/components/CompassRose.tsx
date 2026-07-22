type CompassRoseProps = {
  rotation: number;
};

const TICKS = Array.from({ length: 16 }, (_, i) => i * 22.5);
const CARDINALS: { label: string; deg: number }[] = [
  { label: "N", deg: 0 },
  { label: "E", deg: 90 },
  { label: "S", deg: 180 },
  { label: "W", deg: 270 },
];

export default function CompassRose({ rotation }: CompassRoseProps) {
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
      style={{ width: 320, height: 320, marginTop: -60 }}
    >
      <svg
        viewBox="0 0 200 200"
        width="100%"
        height="100%"
        style={{
          transform: `rotate(${-rotation}deg)`,
          transition: "transform 500ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <circle cx="100" cy="100" r="92" fill="#EFF6FF" opacity="0.5" />
        <circle cx="100" cy="100" r="92" stroke="#185FA5" strokeWidth="1" fill="none" opacity="0.35" />

        {TICKS.map((deg) => {
          const isCardinal = deg % 90 === 0;
          const len = isCardinal ? 14 : 7;
          const x1 = 100 + 92 * Math.sin((deg * Math.PI) / 180);
          const y1 = 100 - 92 * Math.cos((deg * Math.PI) / 180);
          const x2 = 100 + (92 - len) * Math.sin((deg * Math.PI) / 180);
          const y2 = 100 - (92 - len) * Math.cos((deg * Math.PI) / 180);
          return (
            <line
              key={deg}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#185FA5"
              strokeWidth={isCardinal ? 1.5 : 0.75}
              opacity={isCardinal ? 0.6 : 0.3}
            />
          );
        })}

        <polygon points="100,26 108,100 100,90 92,100" fill="#185FA5" opacity="0.55" />
        <polygon points="100,174 108,100 100,110 92,100" fill="#9CA3AF" opacity="0.4" />
        <circle cx="100" cy="100" r="4" fill="#0C447C" />

        {CARDINALS.map(({ label, deg }) => {
          const x = 100 + 78 * Math.sin((deg * Math.PI) / 180);
          const y = 100 - 78 * Math.cos((deg * Math.PI) / 180);
          return (
            <text
              key={label}
              x={x}
              y={y}
              fill="#0C447C"
              fontSize="11"
              fontWeight="600"
              textAnchor="middle"
              dominantBaseline="middle"
              style={{ transform: `rotate(${rotation}deg)`, transformOrigin: `${x}px ${y}px` }}
            >
              {label}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
