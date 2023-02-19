import { Head } from "$fresh/runtime.ts";
import NavBar from "../components/Navbar.tsx";
import { tw } from "twind";

const title = ["about", "gallery", "project", "contact"];

export const Project = () => {
  return (
    <>
      <Head>
        <title>Fresh App | Project</title>
      </Head>
      <NavBar title={title} />
      <main
        className={tw("mt-52 px-24 text-center text-brand-background text-xl")}
      >
        Project is under development
      </main>
    </>
  );
};

export default Project;
