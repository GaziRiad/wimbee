import NavigationWrapper from "../NavigationWrapper";

function Hero({ title, video, locale }) {
  return (
    <section className={`hero-section h-screen bg-cover bg-center`}>
      {video && (
        <video
          className="absolute left-0 top-0 h-full w-full object-cover"
          src={video}
          autoPlay
          loop
          muted
        />
      )}
      <NavigationWrapper locale={locale} />
      <div className="relative mx-auto flex h-full max-w-[1568px] items-center px-4">
        <h1 className="max-w-xl text-titleSmall text-light-200 lg:text-titleMedium 2xl:max-w-5xl 2xl:text-titleLarge">
          {title}
        </h1>
      </div>
    </section>
  );
}

export default Hero;
