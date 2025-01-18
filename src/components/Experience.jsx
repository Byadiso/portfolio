const experiences = [
    
    {
      role: "Web Developer",
      company: "Ngana Tech",
      duration: "Jan 20218 - Dec 2025",
      description: "Built and maintained websites using WordPress, React and Node.js.",
    },
    {
        role: "Frontend Developer",
        company: "yoop.rw",
        duration: "Jan 2021 - Dec 2022",
        description: "Developed responsive websites and optimized performance.",
      },
  ];
  
  const Experience = () => {
    return (
      <section id="experience" className="py-16 bg-gray-200 dark:bg-darkBg">
        <h2 className="text-4xl font-bold text-center mb-8">Experience</h2>
        <div className="flex flex-col gap-6 items-center">
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