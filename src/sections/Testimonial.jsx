import React from "react";
import { clients } from "../exports";
import ClientGrid from "../components/ClientGrid";

const Testimonial = () => {
  return (
    <section
      id="testimonial"
      className=" w-full flex flex-col gap-5 h-fit p-7 lg:p-20"
    >
      <p className=" text-center text-xl">Testimonials</p>
      <h1 className=" text-green-600 font-bold text-6xl text-center leading-[68px]">
        What clients says
      </h1>
      <p className=" text-slate-950 text-2xl text-center ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        eligendi vitae,
        <br /> animi eveniet obcaecati quos veniam beatae ullam perferendis
        accusamus, ad ipsa ea neque nesciunt quod quibusdam maiores nam.
      </p>
      <div className=" flex justify-center items-center flex-wrap mt-5 w-full gap-6">
        {clients.map((client) => (
          <div key={client.name} className=" w-80 ">
            <ClientGrid {...client} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
