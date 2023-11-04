import { SearchManufacturerProps } from "@/types";
import React from "react";
import Image from "next/image";
import { Combobox, Transition } from "@headlessui/react";
import { Autocomplete, TextField } from "@mui/material";
import { manufacturers } from "@/constants";

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={200}
              className="ml-4"
              alt="Car logo"
            />
            
          </Combobox.Button>
          <Autocomplete
          className="mx-[50px]"
              disablePortal
              id="combo-box-demo"
              options={manufacturers}
              sx={{ width: 250 }}
               renderInput={(params) => <TextField {...params} label="Car Company" />}
            /> 
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
