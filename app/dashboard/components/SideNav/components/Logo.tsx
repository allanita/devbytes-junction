import Image from "next/image";

const Logo = () => {
  return (
    <div className="card w-full bg-base-100 shadow-xl hover:cursor-pointer">
      <div className="card-body p-6 flex-row justify-center items-center gap-3">
        <Image
          className="m-0"
          src={"/imgs/logo-512px.png"}
          width={30}
          height={30}
          alt="Logo"
        />
        <div>
          <p className="m-0 font-bold antialiased">DevBytes Junction</p>
        </div>
      </div>
    </div>
  );
};

export default Logo;
