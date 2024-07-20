import logo from "../assets/logo.png";

interface NavbarProps {
  active: number;
  setActive: (active: number) => void;
}

export default function Navbar({ active, setActive }: NavbarProps) {
  return (
    <div className="bg-white w-[84%] h-[90%] rounded-2xl shadow-lg flex ps-8">
      <div className="pe-14">
        <img className="w-56 h-28 mt-6" src={logo} />
        <p
          onClick={() => setActive(0)}
          className={`text-2xl mt-16 cursor-pointer ${
            active === 0 ? "font-semibold" : ""
          } `}
        >
          Dashboard
        </p>
        <p
          onClick={() => setActive(1)}
          className={`text-2xl mt-3 cursor-pointer ${
            active === 1 ? "font-semibold" : ""
          }`}
        >
          Rockets
        </p>
      </div>
      <img
        style={{
          backgroundImage:
            'url("https://live.staticflickr.com/7706/26751237322_5a52540ea3_h.jpg")',
          backgroundSize: "cover",
          // backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
          borderRadius: "0 1.2rem 1.2rem 0",
        }}
      />
    </div>
  );
}
