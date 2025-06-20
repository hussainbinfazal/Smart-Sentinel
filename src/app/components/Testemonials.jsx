import React, { useState } from 'react'
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const Testemonials = () => {
  const [testemonial,setTestemonial] = useState([{
    icon:
    image:,
    
  }])
  return (
    <div className='max-w-screen-2xl min-h-[300px] bg-white flex flex-col items-center justify-center p-4'>

<Carousel
        className="w-full max-w-full !p-0 bg-transparent dark:bg-black  outline-none border-none"
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
          
        }}
         plugins={[Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: true  })]}
      >
        <CarouselContent className={"bg-[#D4D4D4]/20 dark:bg-black border-none outline-none "}>
          {(products || []).map((product) => (
            <CarouselItem key={product} className={"border-none  outline-none bg-[#D4D4D4]/20 dark:bg-black gap-x-2 "}>
              <div className="relative w-full h-full bg-[#D4D4D4]/20  border-none outline-none dark:rounded-sm  ">
                <Card className="w-full h-full  max-h-[700px] !p-0 rounded-none bg-[#D4D4D4]/20 outline-none border-none dark:rounded-sm">
                  <CardContent className="flex aspect-square items-center justify-center p-0  rounded-none w-full max-h-[700px] outline-none border-none">
                    <div className="relative w-full h-full border-none outline-none">
                      <Image
                        src={product?.image}
                        alt={"Product Image"}
                        fill
                        className="object-contain relative rounded-none  z-0 border-none outline-none"
                      />
                      <div className="absolute  left-4 top-1/2 transform -translate-y-1/2 z-10 space-y-6 text-white">
                        <div className="bg-black/5 backdrop-blur-[1px] p-6 rounded-lg mr-4 md:mr-1  max-w-3xl">
                          <h2 className="text-2xl md:text-7xl font-bold mt-4 text-white drop-shadow-lg">
                          {product?.heading}
                        </h2>
                        <p className=" w-full max-w-[4xl] text-sm md:text-xl text-gray-100 font-normal mt-4  leading-relaxed">
                          {product?.text}
                        </p>
                        </div>
                      </div>
                      <div className="backdrop-blur-[2px]  backdrop-brightness-105 z-5 rounded-sm dark:rounded-lg w-full h-full"></div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className={"border-none outline-none text-gray-300 bg-transparent"} />
        <CarouselNext className={"border-none outline-none text-gray-300 bg-transparent"}/>
      </Carousel>
    </div>
  )
}

export default Testemonials
