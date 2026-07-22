import logo from "../assets/logo-dark.png";

export default function Hero() {
  return (
    <div className="bg-hero-bg px-6 pb-8 pt-12 flex flex-col items-center">
      <img
        src={logo}
        alt="Tarkowski Estate"
        className="w-full object-contain"
        style={{ maxWidth: 300 }}
      />
      <p
        className="mt-3 text-center uppercase"
        style={{ color: "rgba(255,255,255,0.45)", fontSize: 12, letterSpacing: "0.08em" }}
      >
        Paweł Tarkowski · Estate Invest Boutique
      </p>
    </div>
  );
}
