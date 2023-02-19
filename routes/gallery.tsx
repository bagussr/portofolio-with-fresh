import { asset, Head } from "$fresh/runtime.ts";
import NavBar from "../components/Navbar.tsx";
import { tw } from "twind";
import { css } from "twind/css";
import { Bubble } from "../components/Bubble.tsx";

const title = ["about", "gallery", "project", "contact"];

export const Gallery = () => {
  return (
    <>
      <Head>
        <title>Fresh App | Gallery</title>
      </Head>
      <NavBar title={title} />
      <main
        className={tw("flex relative mt-24 px-10 py-18 text-brand-background")}
      >
        <div className={tw("flex flex-col")}>
          <div className={tw("flex justify-between w-full")}>
            <span className={tw("flex gap-x-10")}>
              <img
                src={asset("/images/gallery/7.JPG")}
                alt=""
                className={tw(
                  "w-64 h-[26rem]",
                  css({
                    filter: "grayscale(1) contrast(1.5)",
                    borderRadius: "10px 0 20px 0",
                    boxShadow: "1px 2px 7px 1px  rgba(0,0,0,0.5)",
                  }),
                )}
              />
              <p className={tw("w-32")}>
                corner of shophouse in the middle of the city and on the edge of
                the train line
              </p>
            </span>
            <span
              className={tw(
                "pl-20 py-20 flex flex-1 h-max gap-x-5 justify-between",
              )}
            >
              <span className={tw("flex flex-col gap-y-10")}>
                <p className={tw(" text-lg")}>
                  person in front of the porch of the house
                </p>
                <img
                  src={asset("/images/gallery/10.JPG")}
                  alt=""
                  className={tw(
                    "w-[26rem]",
                    css({
                      filter: "grayscale(1) contrast(1.5)",
                      boxShadow: "1px 2px 7px 1px  rgba(0,0,0,0.5)",
                    }),
                  )}
                />
              </span>
              <span className={tw("flex flex-col gap-y-10")}>
                <img
                  src={asset("/images/gallery/11.JPG")}
                  alt=""
                  className={tw(
                    "w-[26rem]",
                    css({
                      filter: "grayscale(1) contrast(1.5)",
                      boxShadow: "1px 2px 7px 1px  rgba(0,0,0,0.5)",
                    }),
                  )}
                />
                <p className={tw(" text-lg")}>
                  Bandung Train Station
                </p>
              </span>
            </span>
          </div>
          <div className={tw("flex mt-10 justify-between")}>
            <div
              className={tw(
                "flex-1 -mt-20 flex flex-col relative items-center",
              )}
            >
              <Bubble
                image="/images/gallery/8.JPG"
                style={css({
                  filter: "saturate(1.5)",
                })}
              />
              <Bubble
                image="/images/gallery/6.JPG"
                style={css({
                  filter: "saturate(1.5)",
                  position: "absolute",
                  top: "320px",
                  left: "20px",
                })}
                size="xs"
              />
              <Bubble
                image="/images/gallery/4.JPG"
                style={css({
                  filter: "saturate(1.5)",
                  position: "absolute",
                  top: "550px",
                  left: "70px",
                })}
                size="xxs"
              />
              <p className={tw("absolute w-12 top-[24rem] right-28")}>
                Experience using local trains during Ramadan holidays with
                family
              </p>
            </div>
            <div className={tw("flex-1 flex justify-center items-center")}>
              <img
                src={asset("/images/gallery/3.JPG")}
                className={tw(
                  "w-3/4 ",
                  css({
                    filter: "grayscale(1)",
                    borderRadius: "200px",
                    boxShadow:
                      "0px 2px 7px 1px  rgba(0,0,0,0.5), 0 10px 10px rgba(0,0,0,0.3), 0 10px 10px rgba(0,0,0,0.2)",
                  }),
                )}
                alt=""
              />
            </div>
            <div
              className={tw("flex-1 flex  items-center -mt-5 relative")}
            >
              <span
                className={tw("flex flex-col gap-y-8 w-80 grow ml-20")}
              >
                <img
                  src={asset("/images/gallery/1.JPG")}
                  className={tw(
                    css({
                      borderRadius: "20px 10px 0 0 ",
                      boxShadow: "1px 2px 7px 1px  rgba(0,0,0,0.5)",
                      filter: "contrast(0.8)",
                    }),
                  )}
                  alt=""
                />
                <img
                  src={asset("/images/gallery/2.JPG")}
                  className={tw(
                    css({
                      boxShadow: "1px 2px 7px 1px  rgba(0,0,0,0.5)",
                      filter: "saturate(0.6) contrast(0.9)",
                    }),
                  )}
                  alt=""
                />
                <img
                  src={asset("/images/gallery/9.JPG")}
                  className={tw(
                    css({
                      borderRadius: "0 0 20px 10px",
                      boxShadow: "1px 2px 7px 1px  rgba(0,0,0,0.5)",
                    }),
                  )}
                  alt=""
                />
              </span>
              <p
                className={tw(
                  "-rotate-90  flex absolute -right-40 font-semibold text-xl ",
                )}
              >
                West Java from my perspective photography
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Gallery;
