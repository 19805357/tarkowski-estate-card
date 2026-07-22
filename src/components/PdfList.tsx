import { FileText, ChevronRight } from "lucide-react";
import { pdfs } from "../data/links";

export default function PdfList() {
  if (pdfs.length === 0) return null;

  return (
    <div className="mx-4 rounded-xl border border-border bg-surface overflow-hidden">
      {pdfs.map((pdf, index) => (
        <button
          key={pdf.id}
          onClick={() => window.open(pdf.url, "_blank")}
          className="w-full flex items-center gap-3 px-4 py-3 text-left"
          style={{
            borderBottom: index < pdfs.length - 1 ? "1px solid #E5E7EB" : "none",
          }}
        >
          <FileText size={20} className="text-text-secondary shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="font-medium text-text-primary truncate">{pdf.name}</div>
            <div className="text-xs text-text-secondary truncate">{pdf.meta}</div>
          </div>
          <ChevronRight size={18} className="text-text-muted shrink-0" />
        </button>
      ))}
    </div>
  );
}
