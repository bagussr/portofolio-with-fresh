import { asset } from "$fresh/runtime.ts";
import { FunctionComponent as FC } from "preact";
import { tw } from "twind";
import { css } from "twind/css";
import { animatePhoto } from "../../style/animation.ts";

interface Props {
  image: string;
}

export const SecondProfile: FC<Props> = ({ image }) => {
  return (
    <>
      <span
        className={tw(
          "w-32 sm:h-[30rem] h-[24rem] bg-brand-blue rounded rounded-xl object-cover relative overflow-hidden",
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
              animationDelay: "3s",
            },
          }),
          animatePhoto,
        )}
      >
        <img
          src={asset(image)}
          alt=""
          className={tw("absolute bottom-40 scale-[3] ")}
          style={{
            filter: "brightness(1.1) saturate(0.7)",
            backdropFilter: "contrast(0.3) brightness(1.8)",
          }}
        />
      </span>
    </>
  );
};

export default SecondProfile;
