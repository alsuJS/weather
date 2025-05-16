import { Home, MapPin, User, Heart } from "lucide-react";
export const Sun = ({ temp }) => {
  return (
    <div className="bg-black/20 shadow-xl/30 px-[20px] mt-[20px] py-4 rounded-4xl w-[414px] h-[828px]">
      <p className="mt-[30px]">{new Date().toDateString()}</p>
      <div className="flex gap-[20px] m-[40px]">
        <h1 className="text-[40px]">{temp?.location?.name}</h1> <MapPin />
      </div>
      <img className="w-60 h-60" src="sun.png" alt="moon" />
      <h1 className="text-[80px]">{temp?.current?.temp_c}</h1>
      <p className="text-[#777CCE]">Partly Cloudy</p>
      <div className="flex gap-8">
        <Home className="w-20 " />
        <MapPin className="w-20" />
        <Heart className="w-20" />
        <User className="w-20" />
      </div>
    </div>
  );
};
