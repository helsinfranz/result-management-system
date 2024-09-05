import Student from "@/components/student/student";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Result Management System</title>
        <meta
          name="description"
          content="Dashboard for result management system"
        />
      </Head>
      <Student />
    </>
  );
}
