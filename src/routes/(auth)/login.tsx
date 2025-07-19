import { createFileRoute } from "@tanstack/react-router";
import LoginForm from "@/components/organisms/LoginForm";
import LoginLayout from "@/components/templates/LoginLayout";
import { APP_NAME } from "@/lib/constant";

export const Route = createFileRoute("/(auth)/login")({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: `${APP_NAME} | Login` }],
  }),
});

function RouteComponent() {
  return (
    <LoginLayout>
      <LoginForm />
    </LoginLayout>
  );
}
