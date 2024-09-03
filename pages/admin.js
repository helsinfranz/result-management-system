import Head from "next/head";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";
import { signOut } from "next-auth/react";

export default function Admin({ session }) {
  return (
    <>
      <Head>
        <title>Admin - Result Management System</title>
        <meta
          name="description"
          content="Admin Page for result management system"
        />
      </Head>
      <div className="centerDiv">
        Admin Page - {session?.user?.name ? session?.user?.name : "User"}
        <button onClick={() => signOut()}>Logout</button>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  let session = await getServerSession(context.req, context.res, authOptions);
  if (session) {
    if (session.user.image === undefined) {
      session.user.image = null;
    }
    return {
      props: { session },
    };
  }
  return {
    redirect: {
      destination: "/auth/login",
      permanent: false,
    },
  };
}
