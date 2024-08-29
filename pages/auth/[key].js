import Head from "next/head";
import { useRouter } from "next/router";

export default function Auth() {
  const router = useRouter();
  const key = router.query.key;

  return (
    <>
      <Head>
        <title>
          {key === "login"
            ? "Login - Result Management System"
            : "Register - Result Management System"}
        </title>
        <meta
          name="description"
          content="Admin Page for result management system"
        />
      </Head>
      <div className="centerDiv">Auth Page - {key}</div>
    </>
  );
}
