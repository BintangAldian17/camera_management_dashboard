import IlustrationLogin from "@/assets/images/ilustration-login.png";
import Footer from "@/components/atoms/Footer";

export default function LoginLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <main className="max-h-screen h-screen w-full max-w-[1700px] mx-auto flex flex-col items-center pb-[22px] justify-center relative md:p-0 p-5">
      <div className="flex items-center justify-center grow w-full h-full ">
        {children}
        <div className="2xl:w-[766px] w-full 2xl:static absolute 2xl:h-full h-screen 2xl:z-0 -z-20 hidden xl:block">
          <img
            alt="Ilustration Login"
            src={IlustrationLogin}
            className="h-full w-full 2xl:object-contain object-cover"
          />
        </div>
      </div>
      <Footer className="mt-auto " />
    </main>
  );
}
