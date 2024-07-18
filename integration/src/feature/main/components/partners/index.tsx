export const Partners = () => {
  const images = Array.from({ length: 5 }, (_, i) => `/partners/${i}.png`);
  return (
    <div
      className="flex-col flex justify-center items-center pt-[100px] md:pt-[150px] lg:pt-[200px] pb-[200px] md:pb-[250px] lg:pb-[300px] bg-white"
      style={{
        backgroundImage: `url('/layers/oval-footer.png')`,
        backgroundSize: "60%",
        backgroundPosition: "right bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <p className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[38px] text-font-black font-medium max-w-[800px] leading-10 mb-[60px]">
        Nos Partenaires
      </p>
      <div className="flex items-center flex-wrap justify-center max-w-[1200px] w-[90%]">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="partner logo"
            className="object-contain max-w-[140px] w-full grayscale mb-5 mx-2.5"
          />
        ))}
      </div>
    </div>
  );
};
