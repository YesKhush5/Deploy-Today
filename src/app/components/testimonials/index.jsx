const Testimonials = () => {
  return (
    <div className="container relative mx-auto py-5 px-4 w-full max-w-7xl  text-gray-700 ">
      <div className="flex flex-col items-center border border-gray-300  rounded-lg p-8">
        <div className="mb-8 px-4">
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold">
            Join 100's of happy clients
          </h2>
        </div>
        <div className="mx-auto w-full max-w-sm sm:max-w-3xl lg:max-w-6xl">
          <ul className="grid grid-cols-6 gap-5">
            <li className="col-span-full sm:col-span-3 lg:col-span-2 py-6 px-4 flex flex-col rounded-xl shadow-lg bg-white">
              <div className="flex items-center space-x-3">
                <span className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden">
                  <img
                    src="https://i.pravatar.cc/300"
                    alt=""
                    className="object-cover"
                  />
                </span>
                <div className="text-left">
                  <h3 className="text-base font-semibold">Clara Megan</h3>
                  <p className="text-sm text-gray-400">@claramegan</p>
                </div>
              </div>
              <div className="mt-4 flex text-sm">
                <p className="text-sm">
                  <span className="text-blue-400 font-semibold">
                    @FancyTailwind{" "}
                  </span>
                  Optio, vel officia quas aliquam perspiciatis quod doloremque
                  eos veritatis quisquam reiciendis accusantium quam animi! Ipsa
                  laudantium tempore placeat ad, rem quibusdam.
                </p>
              </div>
            </li>
            <li className="col-span-full sm:col-span-3 lg:col-span-2 py-6 px-4 flex flex-col rounded-xl shadow-lg bg-white">
              <div className="flex items-center space-x-3">
                <span className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden">
                  <img
                    src="https://i.pravatar.cc/300"
                    alt=""
                    className="object-cover"
                  />
                </span>
                <div className="text-left">
                  <h3 className="text-base font-semibold">Leo Turner</h3>
                  <p className="text-sm text-gray-400">@leoturner</p>
                </div>
              </div>
              <div className="mt-4 flex text-sm">
                <p className="text-sm">
                  <span className="text-blue-400 font-semibold">
                    @FancyTailwind{" "}
                  </span>
                  Cumque optio atque eius. Veniam maiores neque maxime
                  voluptatibus, id dicta ex saepe esse doloremque, natus sed
                  aperiam ut illum recusandae quia?
                </p>
              </div>
            </li>
            <li className="col-span-full sm:col-span-3 lg:col-span-2 py-6 px-4 flex flex-col rounded-xl shadow-lg bg-white">
              <div className="flex items-center space-x-3">
                <span className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden">
                  <img
                    src="https://i.pravatar.cc/300"
                    alt=""
                    className="object-cover"
                  />
                </span>
                <div className="text-left">
                  <h3 className="text-base font-semibold">Keith Chambers</h3>
                  <p className="text-sm text-gray-400">@keithchambers</p>
                </div>
              </div>
              <div className="mt-4 flex text-sm">
                <p className="text-sm">
                  <span className="text-blue-400 font-semibold">
                    @FancyTailwind{" "}
                  </span>
                  Dignissimos nulla eligendi voluptatibus accusantium, ducimus
                  illo voluptate a eveniet fugiat, nam accusamus error? Dolorem
                  debitis excepturi labore accusantium asperiores fuga est!
                </p>
              </div>
            </li>
            
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Testimonials;
