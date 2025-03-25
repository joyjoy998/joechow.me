import { IconFileDescription } from "@tabler/icons-react";

export default function Resume() {
  return (
    <div className="flex items-center justify-center w-8 h-8 p-[5px] duration-500 opacity-60 hover:opacity-100 border-muted-foreground">
      <a
        href="/assets/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-primary transition-colors"
      >
        <IconFileDescription />
      </a>
    </div>
  );
}
