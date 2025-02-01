const projects = [

  {
    title: "Ngana Tech Website",
    description: "Ngana Tech Website – A professional and innovative website for Ngana Tech, showcasing its technology solutions, services, and mission. Designed for clarity and engagement, it highlights the company's expertise and vision.",
    link: "https://www.nganatech.com/",
  },
  {
      title: "Yoop.rw website ",
      description: "Yoop.rw Website – A dynamic and user-friendly website for Yoop.rw, offering seamless access to its services and features. Designed for efficiency and engagement, it enhances user experience with intuitive navigation and a modern interface.",
      link: "https://yoop.rw/",
    },
    {
      title: "Bugedet  Tracker",
      description: "A simple and intuitive budget tracker to help users manage expenses, track income, and stay on top of their finances. It provides clear insights for better financial planning and control.",
      link: "https://bugdeto.netlify.app/",
    },
    {
      title: "LearnByWriting",
      description: "A writing app designed for language learners to practice daily and improve their skills consistently. It encourages regular writing to enhance fluency and confidence.",
      link: "https://learnbywritingv3.netlify.app/",
    },
    {
        title: "Ikimina Voting",
        description: "A sleek voting app that randomly assigns numbers to members, with a default of 10 members and 10 places. It ensures fair and dynamic allocation for an engaging experience.",
        link: "https://ikiminavoting.netlify.app/",
      },
      {
        title: "Ballet icyeza website",
        description: "Ballet Icyeza Website – A beautifully designed website showcasing Ballet Icyeza, highlighting its performances, classes, and mission. It provides an elegant platform for dancers, enthusiasts, and supporters to engage with the art of ballet.",
        link: "https://balleticyeza.com/",
      },
      
  ];
  
  const Projects = () => {
    return (
      <section id="projects" className="py-16 bg-gradient-to-b from-gray-900 to-black dark:from-darkBg dark:to-black text-white">
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass w-80 p-6 text-center"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
              }}
            >
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="mt-2 text-gray-300">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-accent hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;