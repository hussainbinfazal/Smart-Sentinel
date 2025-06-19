import Image from "next/image";
import Header from "./components/Header";
import Herosection from "./components/Herosection";
import Whatwedo from "./components/Whatwedo";
import Testemonials from "./components/Testemonials";
import Callus from "./components/Callus";
import OnsiteWork from "./components/OnsiteWork";
import Form from "./components/Form";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-start justify-center bg-white relative">
      <Herosection />
      <Whatwedo />
      <Testemonials />
      <Callus />
      <OnsiteWork />
      <Form />
      
    </div>
  );
}
