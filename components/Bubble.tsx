import { FunctionComponent as FC } from "preact";
import { tw } from "twind";
import { BubbleSizeType } from "../types/components.ts";
import { BubbleSize } from "../style/styles.ts";
import { bubble } from "../style/styles.ts";

interface Props {
  image: string;
  size?: keyof BubbleSizeType;
}

export const Bubble: FC<Props> = ({ image, size = "sm" }) => {
  return (
    <div
      style={{
        display: "inline-block",
        perspective: "1200px",
        perspectiveOrigin: "50% 50%",
      }}
      className="p-4"
    >
      <figure
        className={tw(
          `inline-block ${BubbleSize[size]} rounded rounded-full relative`,
          bubble,
        )}
      >
        <img
          className="w-full h-full absolute rounded rounded-full object-cover"
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
