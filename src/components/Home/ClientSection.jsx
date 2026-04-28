import vmax from "../../assets/crm/logos/vmax.png";
import fmc from "../../assets/crm/logos/fitmomclub.jpg";
import LK from "../../assets/crm/logos/lk.jpg";
import mindfully from "../../assets/crm/logos/yours-mindfully.png";
import fkc from "../../assets/crm/logos/fitkid.png";
import fdc from "../../assets/crm/logos/fitdad.png";
import miracle from "../../assets/crm/logos/miracle.png";

const logos = [
  { alt: "VMax Healthtech", className: "h-20", src: vmax },
  { alt: "FitMom Club", className: "h-13", src: fmc },
  { alt: "LK", className: "h-[74px]", src: LK },
  { alt: "FitDad Club", className: "h-13", src: fdc },
  { alt: "Yours Mindfully", className: "h-15", src: mindfully },
  { alt: "FitKid Club", className: "h-15", src: fkc },
  { alt: "LK", className: "h-[74px]", src: LK },
  { alt: "Miracle", className: "h-15", src: miracle },
];

export const TrustedBy = () => (
  <section className="bg-white px-8 py-12 text-center">
    <p className="mb-10 text-xl tracking-wide text-black">
      Trusted by leading Coaching organizations Worldwide
    </p>

    <div className="flex flex-wrap items-center justify-center gap-20">
      {logos.map(({ alt, className, src }) => (
        <img
          key={alt}
          src={src}
          alt={alt}
          className={`${className} object-contain opacity-[0.98] grayscale`}
        />
      ))}
    </div>
  </section>
);