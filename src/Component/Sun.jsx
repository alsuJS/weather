import { Home, MapPin,User, Heart } from "lucide-react";
export const Sun = () => {
  return (
    <div className="bg-transparent px-[20px] py-4 border-2 rounded-4xl w-[414px] h-[828px]">
      <p className="">{new Date().toDateString()}</p>
      <h1 className="text-[40px]">Ulaanbaatar</h1> <MapPin/>
      <img className="w-60 h-60" src="sun.png" alt="moon" />
      <h1>9.5</h1>
      <p className="text-[#777CCE]">Partly Cloudy</p>
      <div className="flex gap-8">
        <Home className="w-20"/>
        <MapPin className="w-20"/>
        <Heart className="w-20"/>
        <User className="w-20"/>
      </div>
    </div>
  );
};
