import { FunctionComponent as FC } from "preact";
import { Directive, tw } from "twind";
import { CSSRules } from "twind/css";
import { BubbleSizeType } from "../types/components.ts";
import { BubbleSize } from "../style/styles.ts";
import { bubble } from "../style/styles.ts";

interface Props {
  image: string;
  size?: keyof BubbleSizeType;
  style?: Directive<CSSRules>;
}

export const Bubble: FC<Props> = ({ image, size = "sm", style }) => {
  return (
    <div
      style={{
        display: "inline-block",
        perspective: "1200px",
        perspectiveOrigin: "50% 50%",
      }}
      className={tw("p-4", style)}
    >
      <figure
        className={tw(
          `inline-block ${BubbleSize[size]} rounded rounded-full relative`,
          bubble,
        )}
      >
        <img
          className={tw(
            "w-full h-full absolute rounded rounded-full object-cover",
          )}
          src={image
            ? image
            : "https://imgs.search.brave.com/E5eljiEdq9UnfXoDxmAQSvX3TGX0aTKO2JcqiuXlHDM/rs:fit:1200:1200:1/g:ce/aHR0cDovL3dhbGx1/cC5uZXQvd3AtY29u/dGVudC91cGxvYWRz/LzIwMTYvMDQvMDYv/MzUwNTQ1LWxhbmRz/Y2FwZS1yaXZlci5q/cGc"}
          alt=""
        />
      </figure>
    </div>
  );
};

export default Bubble;
