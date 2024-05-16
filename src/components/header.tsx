import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";

export default async function Header() {
  const user = true;
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} href={"/"}>
          <Image
            src={"/assets/dogs.svg"}
            alt="dogs"
            width={28}
            height={22}
            priority
          />
        </Link>
        {user ? (
          <Link className={styles.login} href={"/account"}>
            dogs-user
          </Link>
        ) : (
          <Link className={styles.login} href={"/login"}>
            Login/Create
          </Link>
        )}
      </nav>
    </header>
  );
}
