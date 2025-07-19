import { useLoginMutation } from "@/lib/api/login-api";
import { useAuth } from "@/lib/hooks/use-auth";
import type { LoginPayload } from "@/types/login-type";
import { useNavigate } from "@tanstack/react-router";
import { AxiosError } from "axios";
import { useState } from "react";
import LogoSmall from "@/assets/images/logo-small.png";
import XIcon from "@/components/atoms/icons/XIcon";
import InputField from "@/components/molecules/InputField";
import Button from "@/components/atoms/Button";
import { useInputFocus } from "@/lib/hooks/use-input-focus";
import toast from "react-hot-toast";

export default function LoginForm() {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const { ref: usernameInput } = useInputFocus();

  const [errorMessage, setErrorMessage] = useState("");
  const [loginValues, setLoginValues] = useState<LoginPayload>({
    password: "",
    username: "",
  });

  const { mutate, status } = useLoginMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    setLoginValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(loginValues, {
      onSuccess: (data) => {
        signIn(data.token);
        setLoginValues({ password: "", username: "" });
        navigate({ to: "/" });
        toast.success("Login successful!");
      },
      onError: (err: unknown) => {
        if (err instanceof AxiosError) {
          console.log(err.response?.data);
          setErrorMessage(err.response?.data?.error ?? err.message);
        }
      },
    });
  };

  return (
    <div className="flex flex-col items-start md:w-[500px] w-full bg-white shadow-card rounded-[10px] p-8 2xl:bg-transparent 2xl:shadow-none 2xl:p-0 2xl:rounded-none 2xl:w-[564px]">
      <div className="flex gap-[34px] items-center  mb-5">
        <img alt="Logo" src={LogoSmall} />
        <h1 className="font-bold text-[64px]">Login</h1>
      </div>
      <h2 className="font-bold text-[40px] text-link-inactive mb-[25px]">
        Login Page
      </h2>
      <form className="flex flex-col gap-[25px] w-full" onSubmit={handleSubmit}>
        {errorMessage && (
          <div className="w-full flex justify-between items-center py-5 px-[15px] bg-destructive/30 rounded-[6px] text-start">
            {errorMessage}
            <span
              role="button"
              className="cursor-pointer"
              onClick={() => setErrorMessage("")}
            >
              <XIcon />
            </span>
          </div>
        )}
        <InputField
          ref={usernameInput}
          textLabel="Email/Username"
          name="username"
          value={loginValues.username}
          onChange={handleChange}
        />
        <InputField
          type="password"
          textLabel="Password"
          name="password"
          value={loginValues.password}
          onChange={handleChange}
        />
        <Button
          type="submit"
          isLoading={status === "pending"}
          size="grow"
          disabled={
            status === "pending" ||
            loginValues.username.trim() === "" ||
            loginValues.password.trim() === ""
          }
        >
          Login
        </Button>
      </form>
    </div>
  );
}
