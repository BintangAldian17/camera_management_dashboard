import Card from "@/components/atoms/Card";
import { useRouteContext } from "@tanstack/react-router";
import Text from "@/components/atoms/Text";

export default function GreetingCard() {
  const userData = useRouteContext({
    from: "/(main)/_mainLayout",
    select: (context) => context.user,
  });

  return (
    <Card className="flex flex-col p-5 gap-[5px]">
      <Text as="h2" variant="title">
        Hello, {userData?.username}
      </Text>
      <Text as="span" variant="body" className="text-muted-foreground">
        Have a great working day!
      </Text>
    </Card>
  );
}
