export default function BannerSection({ imageUrl, title = "Who we are", breadcrumb = "Who we are" }) {
    return (
      <section
        className="relative h-96 bg-cover bg-center flex items-center justify-center text-white mb-5"
        style={{
          backgroundImage: `url(${imageUrl})`,
          borderRadius: "0 0 15px 15px",
        }}
      >
        <div className="absolute w-full h-full left-0 right-0 bottom-0 top-0 inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 text-center ">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="mt-2">
            Home / <span className="text-green-400">{breadcrumb}</span>
          </p>
        </div>
      </section>
    );
  }