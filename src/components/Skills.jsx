import { Grid, Chip } from "@mui/material";

const skills = [ "React", "Node.js", "JavaScript","Python", "CSS", "WordPress","Git", "Tailwind"];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-100 dark:bg-darkCard">
      <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
      <Grid container spacing={2} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item key={index}>
            <Chip
              label={skill}
              color="primary"
              variant="outlined"
              sx={{
                fontSize: "1rem",
                fontWeight: "bold",
                padding: "10px",
              }}
            />
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Skills;