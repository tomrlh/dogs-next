import styles from "./login.module.css";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.login}>
      <div className={styles.forms}>{children}</div>
    </div>
  );
}
