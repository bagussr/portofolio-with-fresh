import { asset, Head } from "$fresh/runtime.ts";
import NavBar from "../components/Navbar.tsx";
import { tw } from "twind";
import { css } from "twind/css";
import { animatePhoto, revealAnimation } from "../style/animation.ts";
import { line } from "../style/styles.ts";

const title = ["about", "gallery", "project", "contact"];

export const About = () => {
  return (
    <>
      <Head>
        <title>Fresh App | About</title>
        <link
          rel="shortcut icon"
          type="image/ico"
          href={asset("/favicon.ico")}
        />
      </Head>
      <NavBar title={title} />
      <main className={tw("w-full px-20 py-10 mt-20")}>
        <div className={tw("flex justify-around")}>
          <span
            className={tw(
              "px-5 h-full flex flex-col items-center",
            )}
          >
            <img
              src={asset("/images/illustrator.png")}
              alt=""
              className={tw(
                "w-[40rem] grayscale-[50%]",
                css({
                  filter: "drop-shadow(2px 5px 6px  rgba(0,0,0,0.6))",
                }),
                animatePhoto,
              )}
            />
            <a
              href="https://fresh.deno.dev"
              className={tw("mt-12 mr-5 shadow shadow-lg", revealAnimation(3))}
            >
              <img
                width="197"
                height="37"
                src="https://fresh.deno.dev/fresh-badge.svg"
                alt="Made with Fresh"
              />
            </a>
          </span>
          <div
            className={tw(
              " w-full flex flex-col pr-20 text-brand-background",
              revealAnimation(2.6),
            )}
          >
            <h1
              className={tw(
                "font-semibold text-[5rem]",
                css({
                  "&": {
                    letterSpacing: "8px",
                    lineHeight: "4.5rem",
                  },
                }),
              )}
            >
              Bagus Syamsu Rahmtullah
            </h1>
            <span className={tw(line)}></span>
            <p
              className={tw(
                "font-light tracking-widest py-5",
              )}
            >
              Hy, I am from Bandung and i'm 22 years old,I am a student at the
              Universitas Pendidikan Indonesia with a Bachelor's degree with a
              major in Software Rekaya. Creative thinker, has a high curiosity
              and is adaptable. I have an interest in software development and
              data science
            </p>
            <div className={tw("flex flex-col")}>
              <h2
                className={tw(
                  "font-semibold text-[2rem]",
                )}
              >
                Education
              </h2>
              <div className={tw("flex flex-col gap-y-5")}>
                <div className={tw("flex w-full justify-between")}>
                  <span className="flex flex-col">
                    <h3 className={tw("text-lg ")}>
                      Universitas Pendidikan Indonesia
                    </h3>
                    <h3 className={tw("text-md opacity-50")}>
                      S1 Rekayasa Perangkat Lunak
                    </h3>
                  </span>
                  <p>2020 - Present</p>
                </div>
                <div className={tw("flex w-full justify-between")}>
                  <span className="flex flex-col">
                    <h3 className={tw("text-lg ")}>
                      SMA Negeri 6 Bandung
                    </h3>
                    <h3 className={tw("text-md opacity-50")}>
                      Mathematics and Natural Science
                    </h3>
                  </span>
                  <p>2017 - 2020</p>
                </div>
                <div className={tw("flex w-full justify-between")}>
                  <h3 className={tw("text-lg ")}>
                    SMP Negeri 6 Bandung
                  </h3>
                  <p>2017 - 2020</p>
                </div>
              </div>
              <h2
                className={tw(
                  "font-semibold text-[2rem] mt-5",
                )}
              >
                Experience
              </h2>
              <div className={tw("flex  gap-y-5 flex-col")}>
                <div className={tw("flex w-full justify-between")}>
                  <span className="flex flex-col">
                    <h3 className={tw("text-lg ")}>
                      Intern at byPulsa
                    </h3>
                    <h3 className={tw("text-md opacity-50")}>
                      Mobile Developer
                    </h3>
                  </span>
                  <p>2023 - Present</p>
                </div>
                <div className={tw("flex w-full justify-between")}>
                  <span className="flex flex-col">
                    <h3 className={tw("text-lg ")}>
                      Part of Himpunan Rekayasa Perangkat Lunak
                    </h3>
                    <h3 className={tw("text-md opacity-50")}>
                      Lead of Department of Creative Economy
                    </h3>
                  </span>
                  <p>2022 - 2023</p>
                </div>
                <div className={tw("flex w-full justify-between")}>
                  <span className="flex flex-col">
                    <h3 className={tw("text-lg ")}>
                      Web Developer at Himpunan Rekayasa Perangkat Lunak
                    </h3>
                    <h3 className={tw("text-md opacity-50")}>
                      Lead of Frontend Developer
                    </h3>
                  </span>
                  <p>2022 - 2023</p>
                </div>
                <div className={tw("flex w-full justify-between")}>
                  <span className="flex flex-col">
                    <h3 className={tw("text-lg ")}>
                      Part of Digifest at AI4Impact
                    </h3>
                    <h3 className={tw("text-md opacity-50")}>
                      Content Creator
                    </h3>
                  </span>
                  <p>2021 - 2022</p>
                </div>
                <div className={tw("flex w-full justify-between")}>
                  <span className="flex flex-col">
                    <h3 className={tw("text-lg ")}>
                      Student Ambassador at Bisa.Ai
                    </h3>
                    <h3 className={tw("text-md opacity-50")}>
                      Content Creator
                    </h3>
                  </span>
                  <p>2021 - 2022</p>
                </div>
              </div>
              <h2
                className={tw(
                  "font-semibold text-[2rem] mt-5",
                )}
              >
                Technology Stack
              </h2>
              <div className={tw("flex flex-wrap gap-5")}>
                <img src={asset("/svg/typescript.svg")} alt="" />
                <img src={asset("/svg/javascript.svg")} alt="" />
                <img src={asset("/svg/python.svg")} alt="" />
                <img src={asset("/svg/react.svg")} alt="" />
                <img src={asset("/svg/srok.svg")} alt="" />
                <img src={asset("/svg/django.svg")} alt="" />
                <img src={asset("/svg/node.svg")} alt="" />
                <img src={asset("/svg/prisma.svg")} alt="" />
                <img
                  src={asset("/images/about/fastapi.png")}
                  width="60px"
                  alt="fastapi"
                />
                <img
                  src={asset("/images/about/deno.png")}
                  style={{
                    height: "56px",
                  }}
                  alt="deno"
                />
                <img
                  src={asset("/images/about/fresh.png")}
                  style={{
                    height: "56px",
                    width: "58px",
                  }}
                  alt="fresh"
                />
                <img
                  src={asset("/images/about/laravel.png")}
                  style={{
                    height: "56px",
                  }}
                  alt="laravel"
                />
                <img
                  src={asset("/images/about/flutter.png")}
                  style={{
                    height: "56px",
                  }}
                  alt="flutter"
                />
                <img
                  src={asset("/images/about/dart.png")}
                  style={{
                    height: "56px",
                  }}
                  alt="dart"
                />
                <img
                  src={asset("/images/about/pandas.png")}
                  style={{
                    height: "56px",
                  }}
                  alt="pandas"
                />
                <img
                  src={asset("/images/about/seaborn.png")}
                  style={{
                    height: "56px",
                  }}
                  height="50px"
                  alt="seaborn"
                />
                <img
                  src={asset("/images/about/nextjs.png")}
                  width="80px"
                  alt="nextjs"
                />
              </div>
              <h2
                className={tw(
                  "font-semibold text-[2rem] mt-5",
                )}
              >
                Interest
              </h2>
              <div className={tw("flex gap-x-6 gap-y-3 flex-wrap")}>
                <span
                  className={tw(
                    "btn-outline cursor-default border-brand-black text-brand-black",
                  )}
                >
                  Machine Learning
                </span>
                <span
                  className={tw(
                    "btn-outline cursor-default border-brand-secondary text-brand-secondary",
                  )}
                >
                  Android
                </span>
                <span
                  className={tw(
                    "btn-outline cursor-default border-brand-green text-brand-green",
                  )}
                >
                  Web
                </span>
                <span
                  className={tw(
                    "btn-outline cursor-default border-brand-blue text-brand-blue",
                  )}
                >
                  Artificial Intellegence
                </span>
                <span
                  className={tw(
                    "btn-outline cursor-default border-brand-background text-brand-background",
                  )}
                >
                  Data Analyst
                </span>
                <span
                  className={tw(
                    "btn-outline cursor-default border-brand-brown text-brand-brown",
                  )}
                >
                  Web Assembly
                </span>
                <span
                  className={tw(
                    "btn-outline cursor-default border-brand-secondary text-brand-secondary",
                  )}
                >
                  Web Security
                </span>
                <span
                  className={tw(
                    "btn-outline cursor-default border-brand-green text-brand-green",
                  )}
                >
                  Blockchain
                </span>
                <span
                  className={tw(
                    "btn-outline cursor-default border-brand-sky text-brand-sky",
                  )}
                >
                  Natural Processing Language
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
