import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { DownIcon } from "../../../icons/icons";


const Right = () => {
  return (
    <svg
      className="w-4 h-4 text-green-500"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 12"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 5.917 5.724 10.5 15 1.5"
      />
    </svg>
  );
};
const Cross = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z" /></svg>
  )
}
const whychoose = [
  { name: "Account Profit Share", arc: "80% | 95% with Add-on" },
  { name: "Profit Target", arc: "8% / 5%" },
  { name: "Account Reset Option", arc: <Right /> },
  { name: "One Step Challenge", arc: <Right /> },
  { name: "Free Merchandise", arc: <Right /> },
];

// Data for other platforms
const otherPlatforms = {
  FTMO: [
    "80%",
    "10% / 5%",
    <Cross />,
    <Cross />,
    <Cross />
  ],
  FundedNext: [
    "80% | 90% with Add-on",
    "10% / 5%",
    "Yes (Fee)",
    <Right />,
    "Merch for top performers"
  ],
  "Funding Pips": [
    "80%",
    "10% / 5%",
    <Right />,
    <Right />,
    <Cross />
  ],
  Fxify: [
    "80% | 90%+",
    "8% / 5%",
    <Right />,
    <Right />,
    <Cross />
  ],
  MyFundedFX: [
    "80% | 90% after milestone",
    "8% / 5%",
    <Right />,
    <Right />,
    <Right />
  ]
};
const platformOptions = Object.keys(otherPlatforms).map(name => ({ title: name }));

export default function WhyChoose() {
  const [selectedCompany, setSelectedCompany] = useState("FTMO");
  return (
    <section className="relative " >
      <div className="container">
        <div className="mx-auto md:mb-16 mb-10 max-w-xl text-center" data-aos-duration={600} data-aos="fade-down" >
          <h2 className="section-heading"> Why Choose ARC</h2>
          <p className="animate-gradient text-lg font-bold">
            Compare Markets
          </p>
        </div>
        <div data-aos-duration={800} data-aos="zoom-in" data-aos-delay="300"
          className="table-wrapped rounded-2lg mb-10 text-sm">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
            <table
              className="w-full text-sm text-left rtl:text-right text-black dark:text-gray-400">
              <thead className="text-base uppercase">
                <tr className="table-heading">
                  <th scope="col" className=" text-white">VARIABLES</th>
                  <th scope="col" className=" text-center text-white">ARC</th>
                  <th scope="col" className=" text-center text-white">
                
                    <div className='input-main-data select-mui-vs dark:mui-dark'>
                      <Autocomplete
                        autoComplete={false}
                        options={platformOptions}
                        getOptionLabel={(option) => option.title}
                        value={platformOptions.find(opt => opt.title === selectedCompany) || null}
                        disableClearable
                        popupIcon={<DownIcon/>}
                        onChange={(e, newValue) => setSelectedCompany(newValue?.title || '')}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            placeholder="Select"
                            inputProps={{
                              ...params.inputProps,
                              readOnly: true, // <-- disables typing
                            }}
                            sx={{ minWidth: '130px',maxWidth:'160px' }}
                          />
                        )}
                      />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {whychoose.map((item, index) => (
                  <tr
                    key={index}
                    className="py-2 px-4 transition-shadow hover:shadow-lg "
                  >
                    <th  scope="row">
                      {item.name}
                    </th>
                    <td className="w-1/3  text-center min-w-36">
                      <div className="flex justify-center items-center">
                        {item.arc}
                      </div>
                    </td>
                    <td className="w-1/3  text-center min-w-30">
                      <div className="flex justify-center items-center">
                        {otherPlatforms[selectedCompany][index]}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
