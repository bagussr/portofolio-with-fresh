import { Head } from "$fresh/runtime.ts";
import NavBar from "../components/Navbar.tsx";

const title = ["about", "gallery", "project", "contact"];

export const Project = () => {
  return (
    <>
      <Head>
        <title>Fresh App | Project</title>
      </Head>
      <NavBar title={title} />
    </>
  );
};

export default Project;
