const experiences = [
    
    {
      role: "Web Developer",
      company: "Ngana Tech",
      duration: "Jan 20218 - Dec 2024",
      description: "Designed and developed the Ngana Tech Website using WordPress, React, and Node.js, focusing on responsive design, performance optimization, and user experience. Implemented custom features and enhanced functionality for improved engagement and scalability.",
    },
    {
      role: "UX/UI Designer ",
      company: "Ballet Icyeza",
      duration: "March 2023 - Dec 2023",
      description: "As a UX/UI Designer for the Ballet Icyeza Website, I created a visually engaging, responsive, and user-friendly design. I developed wireframes and high-fidelity prototypes, optimizing navigation and user experience to reflect the elegance of ballet Icyeza.",
    },
    {
        role: "Frontend Developer",
        company: "yoop.rw",
        duration: "Jan 2021 - Dec 2022",
        description: "Developed a responsive and high-performance website for Yoop.rw, ensuring seamless user experience across all devices. Optimized site speed, enhanced functionality, and implemented best practices for improved engagement and accessibility.",
      },
    
  ];
  
  const Experience = () => {
    return (
      <section id="experience" className="py-16 bg-gray-200 dark:bg-darkBg">
        <h2 className="text-4xl font-bold text-center mb-8">Experience</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white dark:bg-darkCard p-6 rounded-lg shadow-md w-80">
              <h3 className="text-2xl font-bold">{exp.role}</h3>
              <h4 className="text-xl text-gray-500 dark:text-darkText/70">{exp.company}</h4>
              <p className="text-sm mt-2">{exp.duration}</p>
              <p className="mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Experience;