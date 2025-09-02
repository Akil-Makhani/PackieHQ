const TrustedBrands = () => {
  const baseLogos = [
    "/cadbury.svg",
    "/sony.svg",
    "/toyota.svg",
    "/solo.svg",
  ];
  const logos = [...baseLogos, ...baseLogos];

  return (
    <section className="w-full bg-[#f2f9fc]">
      <div className="mx-auto px-20 py-14">
        <h2 className="font-robotoSlab text-center text-2xl md:text-3xl font-bold
       text-[#384451]">
          Trusted by thousands of brands
        </h2>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8  gap-y-10 items-center justify-items-center">
          {logos.map((src, idx) => (
            <img
              key={`${src}-${idx}`}
              src={src}
              alt="Brand logo"
              className="h-15 md:h-15 object-contain opacity-70 "
              loading="lazy"
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#" className="inline-flex font-semibold items-center gap-2 text-[#384451] hover:text-blue-500">
            View customer stories
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands; 