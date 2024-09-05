import React from "react";
import { Card, CardTitle } from "@/components/Card";
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaJsSquare } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiMongodb, SiPhp, SiMysql, SiFirebase, SiAndroidstudio, SiGithub, SiNetlify, SiVisualstudiocode, SiPostman, SiFigma, SiMui } from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React JS", icon: <FaReact className="text-blue-400" /> },
        { name: "Redux Toolkit", icon: <SiRedux className="text-purple-600" /> },
        { name: "Material UI", icon: <SiMui className="text-blue-500" /> },
        { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
        { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
        { name: "Bootstrap", icon: <SiTailwindcss className="text-teal-400" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node JS", icon: <FaNodeJs className="text-green-600" /> },
        { name: "Express JS", icon: <SiTailwindcss className="text-teal-400" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "PHP", icon: <SiPhp className="text-blue-600" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
      ],
    },
    {
      category: "Mobile",
      items: [
        { name: "React Native", icon: <FaReact className="text-blue-400" /> },
        { name: "Android Studio", icon: <SiAndroidstudio className="text-green-600" /> },
      ],
    },
    {
      category: "Others",
      items: [
        { name: "GitHub", icon: <SiGithub className="text-gray-400" /> },
        { name: "Netlify", icon: <SiNetlify className="text-gray-600" /> },
        { name: "VS Code", icon: <SiVisualstudiocode className="text-blue-500" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
        { name: "Figma", icon: <SiFigma className="text-purple-600" /> },
      ],
    },
  ];

  return (
    <section id="skills"
      className="skills-section py-8 text-white w-full"
      style={{
        background: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Skills</h2>
        <p className="text-lg mb-8">Here are some of my skills on which I have been working on for the past 3 years.</p>
      </div>
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {skills.map((category) => (
            <Card key={category.category} className="p-6 bg-gray-800 border border-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.items.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gray-700 border border-gray-600 rounded-lg p-4 flex items-center space-x-4 hover:border-gray-400 transition duration-300"
                  >
                    <div className="text-3xl text-white">{skill.icon}</div>
                    <div>
                      <CardTitle>{skill.name}</CardTitle>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
