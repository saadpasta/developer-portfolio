/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Abdessamie Elmoubarki",
  title: "Hi all, I'm Abdessamie",
  subTitle: emoji(
    "A dedicated Chemical Engineering student specializing in Water and Energy Technologies ⚡, with knowledge in chemistry, electrochemistry, organic chemistry, and the fundamentals of chemical engineering. Passionate about leveraging AI and software development to solve environmental and industrial challenges. Experienced in Python, AI/ML, and full-stack development. Currently seeking a summer internship in the field of water and energy technologies."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Replace with an updated resume if needed
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Abdssamie",
  linkedin: "https://www.linkedin.com/in/abdessamie-elmoubarki-321b03338/",
  gmail: "abdessamie.elmoubarki0@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/abdssamie.elmobarki.7",
  medium: "https://medium.com/@abdssamie126",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle:
    "CHEMICAL ENGINEERING STUDENT APPLYING AI & SOFTWARE DEVELOPMENT TO INDUSTRIAL CHALLENGES",
  skills: [
    emoji(
      "⚡ Strong knowledge in chemistry, electrochemistry, organic chemistry, and fundamental chemical engineering concepts"
    ),
    emoji(
      "⚡ Specializing in water and energy technologies, focusing on sustainable and AI-driven solutions"
    ),
    emoji(
      "⚡ Process modeling and simulation using Aspen Plus, MATLAB, and Python-based tools"
    ),
    emoji(
      "⚡ Developing AI/ML models for industrial applications, data analysis, and process optimization"
    ),
    emoji(
      "⚡ Designing and optimizing water treatment and energy management systems"
    ),
    emoji(
      "⚡ Developing full-stack applications with Python, Flask/Django, and Flutter for web and mobile"
    ),
    emoji(
      "⚡ Working with cloud services such as Firebase, Google Cloud, and Docker for scalable applications"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // Chemical Engineering Skills
    {
      skillName: "Aspen Plus",
      fontAwesomeClassname: "fas fa-industry"
    },
    {
      skillName: "Process Simulation",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "Electrochemistry",
      fontAwesomeClassname: "fas fa-bolt"
    },
    {
      skillName: "Organic Chemistry",
      fontAwesomeClassname: "fas fa-flask"
    },

    {
      skillName: "Water Treatment",
      fontAwesomeClassname: "fas fa-water"
    },
    {
      skillName: "Energy Systems",
      fontAwesomeClassname: "fas fa-solar-panel"
    },

    // AI & Data Science
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Flask",
      fontAwesomeClassname: "fas fa-pepper-hot"
    },
    {
      skillName: "Django",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "SQL Databases",
      fontAwesomeClassname: "fas fa-database"
    },

    // Web & Mobile Development
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fas fa-mobile-alt"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },

    // DevOps & Cloud
    {
      skillName: "Google Cloud",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Lycée Moussa Ibn Noussair",
      logo: require("./assets/images/high_school.png"),
      subHeader: "Sciences expérimentales - Sciences physiques",
      duration: "September 2019 - Juin 2022",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ..."
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },
    {
      schoolName: "Ecole nationale supérieure de chimie",
      logo: require("./assets/images/ensck.png"),
      subHeader: "Diplome d'ingénieur en génie chimique",
      duration: "September 2022 - July 2027",
      desc: "Filière de technologies de l'eau et l'énergie"
      /*descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Chemical Engineering & Process Modeling",
      progressPercentage: "80%" // Applying knowledge to real-world problems
    },
    {
      Stack: "Backend Development",
      progressPercentage: "65%" // Solid experience with APIs and databases
    },
    {
      Stack: "AI & Machine Learning",
      progressPercentage: "60%" // Growing expertise in ML/DL
    },
    {
      Stack: "Programming & Software Development",
      progressPercentage: "70%" // Strong coding foundation across multiple projects
    },
    {
      Stack: "Cloud & DevOps",
      progressPercentage: "35%" // Learning and applying cloud services and deployment
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Certifications, Courses, and Recognitions that highlight my expertise in chemical engineering and AI/ML.",

  achievementsCards: [
    {
      title: "AIChE Process Safety Certifications",
      subtitle:
        "Earned multiple credentials from the American Institute of Chemical Engineers (AIChE) in process safety, covering risk assessment, hazard analysis, and safety best practices.",
      image: require("./assets/images/aiche_logo.png"),
      imageAlt: "AIChE Logo",
      footerLink: [
        {
          name: "View Certifications",
          url: "https://drive.google.com/drive/folders/1koaTrAcpL3ivznPT5PoYdY_BMT4ero4L?usp=sharing" // Add the actual link if available
        }
      ]
    },
    {
      title: "Machine Learning Specialization by Andrew Ng",
      subtitle:
        "Completed the renowned Machine Learning Specialization on Coursera, covering supervised/unsupervised learning, neural networks, and deep learning.",
      image: require("./assets/images/deep_learning.jpeg"),
      imageAlt: "Coursera Logo",
      footerLink: [
        {
          name: "View Supervised Machine Learning Certification",
          url: "https://coursera.org/share/151414324a3928f66804842b35ac5407" // Add the actual link if available
        },
        {
          name: "View Advanced Learning algorithms Certification",
          url: "https://coursera.org/share/1a1f875be393b1bc595c205eaed9991b" // Add the actual link if available
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+212-708231191",
  email_address: "abdessamie.elmoubarki@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
