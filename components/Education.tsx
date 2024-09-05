import React from 'react';

export default function Education() {
  const educationData = [
    {
      title: "University of Nigeria, Nsukka",
      degree: "Bachelor of Science - B.Sc, Political Science",
      period: "2017",
      description: "Completed a B.Sc in Political Science, building a solid foundation in social sciences, research, and critical thinking. This experience honed my analytical abilities and deepened my understanding of governance, policy, and societal structures.",
      statusColor: "bg-gray-700", // Dark
      iconColor: "bg-white", // White icon background
      textColor: "text-white",
    },
    {
      title: "Government Secondary School, Kuru, Nasarawa",
      degree: "Senior Secondary School Certificate Examination (SSCE)",
      period: "2012",
      description: "Achieved my SSCE at Government Secondary School, Kuru, Nasarawa, focusing on a well-rounded curriculum that prepared me for further studies in higher education.",
      statusColor: "bg-gray-700", // Dark
      iconColor: "bg-white", // White icon background
      textColor: "text-white",
    },
    {
      title: "L.E.A Primary School, Garki, Abuja",
      degree: "First School Leaving Certificate (FSLC)",
      period: "1999",
      description: "Earned my First School Leaving Certificate at L.E.A Primary School, Garki, Abuja, marking the beginning of my academic journey.",
      statusColor: "bg-gray-700", // Dark
      iconColor: "bg-white", // White icon background
      textColor: "text-white",
    },
  ];
  

  return (
    <div id='education'
      className="p-4 mt-4 bg-gradient-to-r from-[#04071d] to-[#0c0e23]" 
    >
      <h1 className="text-4xl text-center font-semibold mb-6 text-white">
        Education
      </h1>
      <p className="text-center mb-8 text-gray-300">
        My education has been a journey of self-discovery and growth. My
        educational details are as follows.
      </p>
      <div className="container">
        <div className="flex flex-col md:grid grid-cols-12 text-gray-50">
          {educationData.map((edu, index) => (
            <div className="flex md:contents" key={index}>
              <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div
                    className={`h-full w-1 ${edu.statusColor} pointer-events-none`}
                  ></div>
                </div>
                <div
                  className={`w-6 h-6 absolute top-1/2 -mt-3 rounded-full ${edu.iconColor} shadow text-center`}
                >
                  <i className="fas fa-check-circle text-gray-800"></i>
                </div>
              </div>
              <div
                className={`col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full ${edu.statusColor}`}
              >
                <h3 className={`font-semibold text-lg mb-1 ${edu.textColor}`}>
                  {edu.title}
                </h3>
                <p className={`mb-1 ${edu.textColor}`}>{edu.degree}</p>
                <p className={`mb-1 ${edu.textColor}`}>{edu.period}</p>
                {/* <p className={`mb-1 ${edu.textColor}`}>{edu.grade}</p> */}
                <p className={`leading-tight text-justify text-gray-300`}>
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
