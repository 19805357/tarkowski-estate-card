import { tiles } from "../data/links";
import Icon from "./Icon";

export default function TileGrid() {
  return (
    <div className="grid grid-cols-2 gap-2 px-4">
      {tiles.map((tile) => (
        <button
          key={tile.id}
          onClick={() => window.open(tile.url, "_blank")}
          className="text-left rounded-xl border"
          style={{
            padding: "14px 16px",
            backgroundColor: tile.accent ? "#EFF6FF" : "#FFFFFF",
            borderColor: tile.accent ? "#185FA5" : "#E5E7EB",
          }}
        >
          <Icon
            name={tile.icon}
            size={20}
            color={tile.accent ? "#0C447C" : "#111827"}
          />
          <div
            className="mt-2 font-medium"
            style={{ color: tile.accent ? "#0C447C" : "#111827" }}
          >
            {tile.name}
          </div>
          <div className="text-xs mt-0.5 text-text-secondary">{tile.sub}</div>
        </button>
      ))}
    </div>
  );
}
