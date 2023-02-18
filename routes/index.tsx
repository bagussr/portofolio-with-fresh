import { asset, Head } from "$fresh/runtime.ts";
import { FunctionComponent as FC } from "preact";
import Navbar from "../components/Navbar.tsx";
import { tw } from "twind";
import { css } from "twind/css";
import {
  animatePhoto,
  revealAnimation,
  revealAnimationV2,
} from "../style/animation.ts";
import { MainProfile } from "../components/Profile/main.tsx";
import { SecondProfile } from "../components/Profile/secondary.tsx";

const title = ["about", "gallery", "project", "contact"];

export default function Home({}: FC) {
  return (
    <>
      <Head>
        <title>Bagus Syamsu Rahmatullah</title>
        <link
          rel="shortcut icon"
          type="image/ico"
          href={asset("/favicon.ico")}
        />
        <link rel="manifest" href={asset("/manifest.json")} />
      </Head>

      <Navbar title={title} />
      <div
        className={tw(
          "relative sm:px-10 px-3 w-full sm:py-24 py-6 flex  mt-4 w-max-screen sm:flex-row flex-col",
        )}
      >
        <div
          className={tw(
            "flex gap-x-5 sm:flex-row flex-col w-full items-center",
          )}
        >
          <a
            href="https://fresh.deno.dev"
            className={tw(
              "absolute bottom-0 shadow shadow-lg",
              revealAnimation(3),
            )}
          >
            <img
              width="197"
              height="37"
              src="https://fresh.deno.dev/fresh-badge.svg"
              alt="Made with Fresh"
            />
          </a>
          <div className={tw("flex flex-row gap-x-5 justify-center relative")}>
            <span
              className={tw(
                "absolute -top-10 left-20 p-3 -right-20 shadow shadow-md",
                css({
                  "&": {
                    zIndex: 10,
                    backgroundColor: "rgba(253,253,253,1)",
                    height: "fit-content",
                    width: "fit-content",
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    display: "inline-block",
                    backgroundColor: "#00a8e8",
                    top: 0,
                    width: "20px",
                    left: "-20px",
                    height: "3.5rem",
                  },
                }),
                revealAnimationV2(2.4),
              )}
            >
              <h2
                className={tw(
                  "font-bold text-2xl capitalize w-max cursor-default",
                  css({
                    height: "2pc",
                  }),
                )}
              >
                Universitas Pendidikan Indonesia
              </h2>
            </span>
            <span
              className={tw(
                "w-32 sm:h-[30rem]  h-[24rem] bg-brand-green rounded rounded-xl overflow-hidden relative",
                css({
                  "&::after": {
                    content: '""',
                    display: "inline-block",
                    width: "100%",
                    bottom: "0",
                    height: "50%",
                    position: "absolute",
                    background:
                      "linear-gradient(to bottom, rgba(255,255,255,0.05), rgb(0,0,0,0.1), rgb(0,0,0,0.3), rgba(0,0,0,0.6))",
                  },
                  animationDelay: "-0.2s",
                }),
                animatePhoto,
              )}
            >
              <img
                src={asset("/images/profile3.png")}
                alt=""
                className={tw("absolute bottom-24 sm:scale-[2.4] scale-[1.9]")}
                style={{
                  filter: "brightness(1.1)",
                  backdropFilter: "contrast(0.3) brightness(1.7)",
                }}
              />
            </span>
            <SecondProfile image="/images/profile2.png" />
          </div>
          <MainProfile />
        </div>
        <div className={tw("px-10 py-20 flex flex-col relative")}>
          <h1
            className={tw(
              "font-semibold text-[5rem]",
              css({
                "&": {
                  letterSpacing: "12px",
                  lineHeight: "4.5rem",
                },
              }),
              revealAnimation(2),
            )}
          >
            Bagus Syamsu Rahmtullah
          </h1>
          <div className={tw("absolute bottom-0 right-0 flex gap-x-5 px-20")}>
            <span
              className={tw("btn", revealAnimation(2))}
            >
              Instagram
              <img
                src={asset("/svg/instagram.svg")}
                className={tw("h-6")}
              />
            </span>
            <span
              className={tw("btn", revealAnimation(2))}
            >
              Github
              <img
                src={asset("/svg/Vector.svg")}
                className={tw("h-6")}
              />
            </span>
            <span
              className={tw("btn", revealAnimation(2))}
            >
              Linkedin
              <img
                src={asset("/svg/linkedin.svg")}
                className={tw("h-6")}
              />
            </span>
          </div>
        </div>
      </div>
      {/* <Bubble image={asset("/assets_1.JPG")} size={"md"} /> */}
    </>
  );
}
