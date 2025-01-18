const projects = [
    {
      title: "Bugedet  Tracker",
      description: "A bugdet tracker .",
      link: "https://bugdeto.netlify.app/",
    },
    {
      title: "LearnByWriting",
      description: "A project to help language learners enthousist improve by writing daily.",
      link: "https://learnbywrittingv2.netlify.app/",
    },
    {
        title: "Ikimina Voting",
        description: "A beaufiful voting app which generate a random number and assign to members by default it 10 members and 10 places to allocate randomly.",
        link: "https://ikiminavoting.netlify.app/",
      },
      {
        title: "Crypto Tracker",
        description: "A Web3 app for tracking crypto prices in real time.",
        link: "https://cryptotracker.com",
      },
      {
        title: "NFT Gallery",
        description: "A beautiful gallery to showcase NFTs using Web3.js.",
        link: "https://nftgallery.com",
      },
      {
          title: "Ikimina Voting",
          description: "A beaufiful voting app which generate a random number and assign to members by default it 10 members and 10 places to allocate randomly.",
          link: "https://ikiminavoting.netlify.app/",
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