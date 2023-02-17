import { Head } from "$fresh/runtime.ts";
import NavBar from "../components/Navbar.tsx";

const title = ["about", "gallery", "project", "contact"];

export const Gallery = () => {
  return (
    <>
      <Head>
        <title>Fresh App | Gallery</title>
      </Head>
      <NavBar title={title} />
    </>
  );
};

export default Gallery;
