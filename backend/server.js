const app = require("./src/app.js");
const conectDB = require("./src/config/db.js");
const main = require("./src/services/ai.service.js");

conectDB();
main.generateInterviewReport({
  resume: "Experienced software engineer with a strong background in full-stack development, specializing in JavaScript, React, and Node.js. Proven track record of delivering high-quality web applications and collaborating effectively in agile teams.",
  selfDescription: "I am a passionate software engineer with over 5 years of experience in building scalable web applications. I enjoy solving complex problems and continuously learning new technologies to improve my skills.",
  jobDescription: "We are looking for a skilled software engineer with expertise in JavaScript, React, and Node.js to join our dynamic team. The ideal candidate should have experience in developing high-quality web applications and a strong understanding of agile methodologies.",
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
