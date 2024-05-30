"use client";

import login from "@/actions/login";
import { useFormState, useFormStatus } from "react-dom";
import Button from "@/components/forms/button";

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

  return (
    <>
      <form action={action}>
        <input type="text" name="username" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <FormButton />
        {state.error}
      </form>
    </>
  );
}
