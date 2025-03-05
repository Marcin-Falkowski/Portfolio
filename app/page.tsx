import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

export default function Page() {
  return (
    <section className="flex justify-center flex-col  ml-72 mt-32 w-max">
      <div className="flex flex-col mb-10">
        <h3 className="mb-8 text-2xl font-semibold text-titles">
          Hello Everyone.
        </h3>
        <h1 className="mb-4 text-6xl uppercase font-bold w-96">{`I'm Marcin Falkowski`}</h1>
      </div>
      <Link href={"/about"}>
        <div className="flex bg-main border-2 border-sub-main w-96 h-16 justify-between items-center">
          <div className="flex w-full justify-center items-center">
            <p className="font-bold uppercase tracking-normal text-xl">
              React Native Developer
            </p>
          </div>
          <div className="flex w-24 h-16 bg-sub-main justify-center items-center">
            <ArrowForwardIcon color="inherit" fontSize="large" />
          </div>
        </div>
      </Link>
    </section>
  );
}
