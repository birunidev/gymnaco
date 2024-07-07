import { useState } from "react";
import countries from "../../data/countries.json";

export default function CountrySelect() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const [isCountrySelectOpen, setIsCountrySelectOpen] = useState(false);

  return (
    <div className="h-full w-[129px] relative">
      <button
        onClick={() => setIsCountrySelectOpen(true)}
        className="flex w-full items-center justify-between bg-white px-[8px] py-[12px]"
      >
        <div className="flex gap-2">
          {selectedCountry.flag}
          <span>{selectedCountry.dial_code}</span>
        </div>
        <img src="/assets/icons/caret.svg" className="w-[12px]" alt="" />
      </button>
      {isCountrySelectOpen && (
        <div className="country-select-wrapper absolute w-full h-[300px] overflow-y-scroll">
          {countries.map((country) => (
            <button
              type="button"
              onClick={() => {
                setSelectedCountry(country);
                setIsCountrySelectOpen(false);
              }}
              className="country-select bg-white px-[8px] py-[4px] hover:bg-gray-200 w-full"
            >
              <div className="flex gap-2">
                <span>{country.flag}</span>
                <span>{country.dial_code}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
