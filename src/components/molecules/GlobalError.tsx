import Button from "@/components/atoms/Button";
import { type ErrorComponentProps } from "@tanstack/react-router";
import Text from "../atoms/Text";

export default function GlobalError(props: ErrorComponentProps) {
  return (
    <div className="h-screen w-full flex items-center justify-center flex-col gap-5">
      <Text as="span" variant="title">
        Something Wrong, Please try again!
      </Text>
      <Button onClick={props.reset}>Retry</Button>
    </div>
  );
}
