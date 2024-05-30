"use client";

import login from "@/actions/login";
import { useFormState, useFormStatus } from "react-dom";
import Button from "@/components/forms/button";
import Input from "../forms/input";
import ErrorMessage from "../helper/error-message";
import { useEffect } from "react";

const FormButton = () => {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled={pending}>Loading...</Button>
      ) : (
        <Button>Log in</Button>
      )}
    </>
  );
};

export default function LoginForm() {
  const [state, action] = useFormState(login, {
    ok: false,
    error: "",
    data: null,
  });

  useEffect(() => {
    if (state.ok) {
      window.location.href = "/account";
    }
  }, [state.ok]);

  return (
    <>
      <form action={action}>
        <Input label="Username" name="username" type="text" />
        <Input label="Password" name="password" type="password" />
        <FormButton />
        <ErrorMessage error={state.error} />
      </form>
    </>
  );
}
