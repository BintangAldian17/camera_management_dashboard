import { Link } from "@tanstack/react-router";
import Button from "../atoms/Button";

export default function NotFound() {
  return (
    <main className="w-full h-screen flex items-center justify-center flex-col gap-5">
      <div className="text-center">
        <h1 className="md:text-4xl text-2xl  font-bold mb-4">
          404 - Page Not Found
        </h1>
        <p className="md:text-lg text-sm text-placeholder">
          The page you are looking for does not exist.
        </p>
      </div>
      <Button>
        <Link to="/">Go Back Home</Link>
      </Button>
    </main>
  );
}
