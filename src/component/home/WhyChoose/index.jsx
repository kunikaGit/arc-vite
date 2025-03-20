

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
    return(
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"/></svg>
    )
  }
  const whychoose = [
    {
      name: "Profit Share from Challenge Phase",
      arc: "15%",
      fund: "0%",
    },
    {
      name: "Account Profit Share",
      arc: "80% | 95% with Add-on",
      fund: "80%",
    },
    {
      name: "Profit Target",
      arc: "8%/5%",
      fund: "10%/5%",
    },
    {
      name: "Account Reset Option",
      arc: <Right />,
      fund: <Cross />,
    },
    {
      name: "One Step Challenge",
      arc: <Right />,
      fund: <Cross />,
    },
    {
      name: "Free Competitions",
      arc: <Right />,
      fund: <Cross />,
    },
    {
      name: "Global Meetup",
      arc: "5 Countries",
      fund: "0",
    },
  
  ];
  export default function WhyChoose() {
  
    return (
      <section className="relative py-24" style={{ background: "linear-gradient(to right, #f8e1e7, #e3effd, #f5f9f6)" }}>
        <div className="container">
          <div className="mx-auto mb-16 max-w-xl text-center" data-aos-duration={600} data-aos="fade-down" >
            <h2 className="mb-2 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-jacarta-700">
              Why Choose ARC</h2>
            <p className="animate-gradient text-lg font-bold">
              Compare Markets
            </p>
          </div>
          <div data-aos-duration={800} data-aos="zoom-in"    data-aos-delay="300"
          className="rounded-2lg border border-jacarta-100 bg-white text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table 
              className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-jacarta-100 border-t">
                <thead className="text-base uppercase">
                  <tr className="border-t border-jacarta-100 py-2 px-4 transition-shadow hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-900">
                    <th scope="col" className="px-6 py-3 ">VARIABLES</th>
                    <th scope="col" className="px-6 py-3 text-center">ARC</th>
                    <th scope="col" className="px-6 py-3 text-center">Fund</th>
                  </tr>
                </thead>
                <tbody>
                  {whychoose.map((item, index) => (
                    <tr
                      key={index}
                      className="border-t border-jacarta-100 py-2 px-4 transition-shadow hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-900"
                    >
                      <th
                        scope="row"
                        className="w-1/3 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-base"
                      >
                        {item.name}
                      </th>
                      <td className="w-1/3 px-6 py-4 text-center">
                        <div className="flex justify-center items-center">
                          {item.arc}
                        </div>
                      </td>
                      <td className="w-1/3 px-6 py-4 text-center">
                        <div className="flex justify-center items-center">
                          {item.fund}
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
  