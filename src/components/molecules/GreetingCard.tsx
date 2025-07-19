import Card from "../atoms/Card";
import { useRouteContext } from "@tanstack/react-router";

export default function GreetingCard() {
  const userData = useRouteContext({
    from: "/(main)/_mainLayout",
    select: (context) => context.user,
  });

  return (
    <Card className="flex flex-col p-5 gap-[5px]">
      <h2 className="font-bold text-[32px]">Hello, {userData?.username}</h2>
      <span className="text-muted-foreground">Have a great working day!</span>
    </Card>
  );
}
