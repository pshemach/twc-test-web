import img from "../assets/logo.png";

export default function LogoLarge() {
  return (
    <div>
      <img src={img} alt="" className="w-40 h-16" />
      <div className="w-318.75px h-141.63px bg-#083F46">
        <span className="font-bold">contact</span>
        <br />
        <span>portal</span>
      </div>
    </div>
  );
}
