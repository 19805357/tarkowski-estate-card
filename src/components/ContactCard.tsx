import { contacts } from "../data/links";
import Icon from "./Icon";

export default function ContactCard() {
  return (
    <div className="mx-4 rounded-xl border border-border bg-surface overflow-hidden">
      {contacts.map((contact, index) => {
        const content = (
          <>
            <Icon name={contact.icon} size={18} className="text-text-secondary shrink-0" />
            <span className="text-text-primary truncate">{contact.value}</span>
          </>
        );

        const rowStyle = {
          borderBottom: index < contacts.length - 1 ? "1px solid #E5E7EB" : "none",
        };

        if (contact.url) {
          return (
            <button
              key={index}
              onClick={() => window.open(contact.url, "_blank")}
              className="w-full flex items-center gap-3 px-4 py-3 text-left"
              style={rowStyle}
            >
              {content}
            </button>
          );
        }

        return (
          <div key={index} className="flex items-center gap-3 px-4 py-3" style={rowStyle}>
            {content}
          </div>
        );
      })}
    </div>
  );
}
