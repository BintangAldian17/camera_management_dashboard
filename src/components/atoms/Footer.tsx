import { cn } from "@/lib/utils";

export default function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn("md:text-base text-sm", className)}>
      Copyright ©2025{" "}
      <span className="font-bold">Nusapala Berkah Autonomous</span>
    </footer>
  );
}
