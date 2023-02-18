import { asset, Head } from "$fresh/runtime.ts";
import { FunctionComponent as FC } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import NavBar from "../components/Navbar.tsx";
import { tw } from "twind";
import { css } from "twind/css";
import { revealAnimation } from "../style/animation.ts";
import { SMTPClient } from "denomailer";

const title = ["about", "gallery", "project", "contact"];

interface Input {
  email?: string;
  msg?: string;
}

export const handler: Handlers = {
  async POST(_req: Request, _ctx) {
    const client = new SMTPClient({
      connection: {
        hostname: "smtp.mailgun.org",
        port: 465,
        tls: true,
        auth: {
          username:
            "postmaster@sandbox57181427a83c442e8a2ad90ec28edfa1.mailgun.org",
          password: "9bbbd4c139f49f5a30033948d7939f03-ca9eeb88-0d523e29",
        },
      },
    });
    let data: Input = {};
    const f = await _req.formData();
    for (const v of f.entries()) {
      // @ts-ignore /
      data[v[0]] = v[1];
    }
    if (data.email !== undefined) {
      try {
        // await client.send({
        //   from: data.email ? data.email : "",
        //   to: "bagusssyamsu@gmail.com",
        //   subject: "Message from web portofolio",
        //   content: data.msg,
        // });
        data = {};
      } catch (err) {
        console.log(err);
      } finally {
        // client.close();
      }
    }
    return _ctx.render({
      "msg": "Thank you for sending me an email",
    });
  },
};

export const Contact: FC<PageProps> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Fresh App | Contact</title>
        <link
          rel="shortcut icon"
          type="image/ico"
          href={asset("/favicon.ico")}
        />
      </Head>
      <NavBar title={title} />
      <form
        encType="multipart/form-data"
        method="POST"
        className={tw(
          " mt-24 px-10 py-24 flex items-center text-brand-background flex-col z-20 relative gap-y-5",
          revealAnimation(2),
        )}
      >
        {data?.msg
          ? (
            <p className={tw("absolute text-lg text-brand-primary top-10")}>
              {data.msg}
            </p>
          )
          : null}
        <p>
          Want to get in touch? Please fill out this form.
        </p>
        <span className={tw("flex flex-col items-start w-1/2 gap-y-2")}>
          <label className={tw("font-semibold text-lg")} htmlFor="Email">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="Email"
            className={tw("input")}
            placeholder="Email"
            required
          />
        </span>
        <span className={tw("flex flex-col items-start w-1/2 gap-y-2")}>
          <label className={tw("font-semibold text-lg")} htmlFor="msg">
            Messages
          </label>
          <textarea name="msg" id="msg" className={tw("input h-32")}></textarea>
          <button type="submit" className={tw("btn self-start mt-5 py-2 px-8")}>
            Send
          </button>
        </span>
      </form>
    </>
  );
};

export default Contact;
