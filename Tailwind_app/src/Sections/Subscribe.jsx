import Button from "../Components/Button";

const Subscribe = () => {
  return (
    <section
      className="max-container items-center justify-between max-lg:flex-col gap-10 flex"
      id="contact us"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full ">
        <div className="flex w-full items-center ">
          <input
            type="text"
            placeholder="subscribe@nike.com"
            className="input flex-grow "
          />
          <Button label="Sign up" />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
