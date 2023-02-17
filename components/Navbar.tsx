import { theme, tw } from "twind";
import { css } from "twind/css";
import { glow, revealAnimation, slideTop } from "../style/animation.ts";

interface Props {
  title: string[];
}

export default function Navbar(props: Props) {
  return (
    <>
      <div className={tw("relative w-full", slideTop)}>
        <a
          href="../../"
          className={tw(
            "z-20 w-8 h-8  rounded rounded-full absolute top-4 left-4 overflow-hidden",
            css({
              "&::after": {
                content: '""',
                position: "absolute",
                borderRadius: "50%",
                top: "2.6px",
                left: "2.6px",
                backgroundColor: "#003459",
                display: "inline-block",
                width: "85%",
                height: "85%",
              },
              "&::before": {
                position: "absolute",
                background:
                  "linear-gradient(90deg,  red,blue,yellow,green, red, yellow, blue, green)",
                backgroundSize: "100%",
                content: '""',
                display: "inline-block",
                filter: "blur(2px)",
                height: "100%",
                width: "100%",
                animationDelay: "3s",
                animation: "3s ease infinite",
                animationName: glow,
              },
            }),
          )}
        >
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 50 1440 320"
          className="absolute hidden sm:block"
        >
          <path
            fill="#003459"
            fill-opacity="1"
            d="M0,160L60,138.7C120,117,240,75,360,90.7C480,107,600,181,720,197.3C840,213,960,171,1080,165.3C1200,160,1320,192,1380,208L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          >
          </path>
        </svg>
        <nav className="sm:h-16 h-12 w-screen sm:px-20 px-10 flex items-center sm:items-end justify-center relative bg-brand-background sm:bg-transparent">
          <span className="flex sm:gap-x-10 gap-x-5">
            {props?.title.map((item: string, index: number) => (
              <a
                className={tw(
                  "sm:text-lg text-sm text-white capitalize relative",
                  css({
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      display: "inline-block",
                      borderColor: "white",
                      width: "0%",
                      bottom: "0px",
                      transition: "all 0.3s",
                    },
                    "&:hover::before": {
                      content: '""',
                      width: "100%",
                      border: "1px solid",
                      position: "absolute",
                      display: "inline-block",
                    },
                  }),
                  revealAnimation(1.2),
                )}
                href={`/${item}`}
                key={index}
              >
                {item}
              </a>
            ))}
          </span>
        </nav>
      </div>
    </>
  );
}
