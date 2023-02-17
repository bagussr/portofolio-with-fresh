import { asset } from "$fresh/runtime.ts";
import { FunctionComponent as FC } from "preact";
import { tw } from "twind";
import { css } from "twind/css";
import { animatePhoto, revealAnimationV2 } from "../../style/animation.ts";

export const MainProfile: FC = () => {
  return (
    <>
      <div
        className={tw(
          "sm:w-[28rem] sm:h-[30rem] w-[14rem] h-[15rem] flex relative rounded rounded-xl  bg-gray-300",
          css({
            "&::after": {
              content: '""',
              display: "inline-block",
              width: "100%",
              bottom: "0",
              height: "50%",
              position: "absolute",
              borderRadius: "0.75rem",
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.05), rgb(0,0,0,0.1), rgb(0,0,0,0.3), rgba(0,0,0,0.6))",
            },
          }),
          animatePhoto,
        )}
      >
        <span className={tw("w-full h-full overflow-hidden")}>
          <img
            style={{
              transform: "scale(1.1) translate(0%,10%)",
              filter: "brightness(1.1) contrast(0.9) saturate(1.2)",
            }}
            className={tw(
              "w-max h-max",
            )}
            src={asset("/images/profile.png")}
            alt=""
          />
        </span>
        <span
          className={tw(
            "absolute bottom-20 p-3 -right-20 shadow shadow-md",
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
              "font-bold text-2xl capitalize cursor-default",
              css({
                height: "2pc",
              }),
            )}
          >
            fullstack developer
          </h2>
        </span>
      </div>
    </>
  );
};
