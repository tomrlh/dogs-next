import styles from "./login.module.css";

export default function LoginForm() {
  return (
    <>
      <form action="">
        <input type="text" name="username" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <button>Log in</button>
      </form>
    </>
  );
}
