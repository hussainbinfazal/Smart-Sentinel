import Image from "next/image";
import Header from "./components/Header";
import Herosection from "./components/Herosection";
import Whatwedo from "./components/Whatwedo";
import Testemonials from "./components/Testemonials";
import Callus from "./components/Callus";
import OnsiteWork from "./components/OnsiteWork";
import Form from "./components/Form";
import Installations from "./components/Installations";

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen max-w-screen-2xl flex flex-col items-start justify-center bg-white dark:bg-black/40 relative px-6">
      <div className="w-full mx-auto flex flex-col items-center justify-center pt-6 gap-22">
        <div className="px-2 w-full flex items-center justify-center bg-[#D4D4D4]/20 dark:bg-black  py-0.5 rounded-sm">
          <div className=" w-[90%] ">
            <Herosection />
          </div>
        </div>

        <Whatwedo /> {/* what we do section is completed*/}
        <Testemonials />
        <Callus />
        <OnsiteWork />
        <Installations />
        <Form />
      </div>


    </div>
  );
}
