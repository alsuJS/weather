import { SearchCity } from "../Component/SearchCity";
import { Moon } from "@/Component/Moon";
import { Sun } from "@/Component/Sun";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [weather, setWeather] = useState({});
  const [searchValue, setSearchValue] = useState("Ulaanbaatar");
  const getSearchValue = (event) => {
    const inputValue = event.target.value;
    setSearchValue(inputValue);
  };
  const getCities = async () => {
    
    try {
      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries"
      );
      const data = await response.json();
      const result = data?.data?.filter((city) => {
        const findCities = SearchCity.cities.find(
          (findCitie) => findCitie === searchValue
        );
        return findCities;
      });

      const city = result[0].cities.find((city) => city === searchValue);
      setSearchValue(city);
      console.log(city);
    } catch (error) {}
  };

  const getWeather = async () => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${searchValue}`
      );
      const data = await response.json();

      setWeather(data);
    } catch (error) {}
  };
  useEffect(() => {
    getCities();
    getWeather();
  }, []);

  const getValue = (event) => {
    if (event.keyCode === 13) {
      getWeather();
    }
  };
  return (
    <div className="flex gap-12">
      <div className="w-[800px] bg-amber-200 z-0 h-[1200px]">
        <div>
          <SearchCity getValue={getValue} getSearchValue={getSearchValue} />

          <div>
            <p>{weather?.main?.temp}</p>
            <img className="-z-10 absolute" src="sun-little.webp" alt="" />
            <div className="ml-[90px] w-[300px] ">
              <Sun temp={weather} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[800px] bg-black h-[1200px]">
        <div>
          <div>
            <img className="" src="moon-little.webp" alt="" />
            <div className="border-1 w-[300px]">
              <Moon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
