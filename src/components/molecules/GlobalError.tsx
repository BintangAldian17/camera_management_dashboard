import Button from "@/components/atoms/Button";
import { type ErrorComponentProps } from "@tanstack/react-router";

export default function GlobalError(props: ErrorComponentProps) {
  return (
    <div className="h-screen w-full flex items-center justify-center flex-col gap-5">
      <span className="text-lg xl:text-2xl font-bold">Something Wrong!</span>
      <Button onClick={props.reset}>Retry</Button>
    </div>
  );
}
