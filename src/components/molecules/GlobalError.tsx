import Button from "@/components/atoms/Button";
import { type ErrorComponentProps } from "@tanstack/react-router";

export default function GlobalError({ error, reset }: ErrorComponentProps) {
  console.log(error);
  return (
    <div className="h-screen w-full flex items-center justify-center flex-col gap-5">
      <span className="text-lg xl:text-2xl font-bold">Something Wrong!</span>
      <Button onClick={reset}>Retry</Button>
    </div>
  );
}
