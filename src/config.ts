export const siteConfig = {
  name: "Yakoot Shaker",
  title: "Intelligent Systems Student",
  description: "Portfolio website of Yakoot Shaker",
  accentColor: "#1d4ed8",
  social: {
    email: "yakoot537@gmail.com",
    linkedin: "www.linkedin.com/in/yakoot-shaker-a64ba6296",
    twitter: "https://x.com",
    github: "https://github.com/YakootShaker",
  },
  aboutMe:
    "I am Yakoot Shaker, a Computer Science student at Alexandria National University, expected to graduate in 2026. My academic focus is on intelligent systems, with hands-on experience in machine learning, neural networks, and data mining. Beyond coursework, I enjoy building practical projects such as recommender systems, data-driven applications, and user-friendly web platforms. I am passionate about turning complex problems into innovative, real-world solutions. Currently, I am sharpening my programming skills and expanding my knowledge in artificial intelligence",
  skills: ["Javascript", "Sql", "Git", "Python", "Java", "R"],
  projects: [
    {
      name: "Knowledge-Based Restaurant Recommender System",
      description:
        "A smart recommender system built using the Zomato Restaurants Dataset. Designed to suggest restaurants based on user preferences, leveraging knowledge-based filtering and an interactive Streamlit interface.",
      link: "https://github.com/omar-El-Baz/Knowledge-Based-Restaurant-Recommender-System",
      skills: ["Python", "Streamlit", "Machine Learning", "Data Mining"],
    },
    {
      name: "Folium-Country-Visualizer",
      description:
        "This project showcases a data visualization pipeline using Python. It involves fetching a world dataset, performing extensive data cleaning and preprocessing with Pandas, and creating an interactive map with Folium. Users can select a country from a dropdown to see its borders highlighted and its capital marked.",
      link: "https://github.com/YakootShaker/Folium-Country-Visualizer",
      skills: ["Python", "Folium", "Pandas"],
    },
    {
      name: "Fake_News_Classification-ML",
      description:
        "A machine learning project that classifies news articles as real or fake based on their content (title, body text, author, source, etc.). This project demonstrates the full pipeline of a binary text classification task using various NLP techniques and ML algorithms.",
      link: "https://github.com/YasserELDALY/Fake_News_Classification-ML-",
      skills: ["Python", "ML", "Pandas", "sklearn"],
    },
  ],
  experience: [
    {
      company: "Digital Egypt Pioneers Initiative (DEPI)",
      title: "Data Engineering Trainee",
      dateRange: "2024 - Present",
      bullets: [
        "Completed hands-on training in Data Engineering with a focus on ETL pipelines, data modeling, and cloud-based architectures.",
        "Worked with SQL, Python, and big data tools to design and optimize data workflows.",
        "Built scalable data pipelines to collect, process, and transform datasets for analytics and machine learning applications.",
        "Collaborated in team projects simulating real-world data engineering scenarios.",
      ],
    },
    {
      company: "Startup Inc",
      title: "Full Stack Developer",
      dateRange: "Jun 2020 - Dec 2021",
      bullets: [
        "Built and launched MVP product from scratch using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
      ],
    },
    {
      company: "NTI (National Telecommunication Institute)",
      title: "Machine Learning Trainee",
      dateRange: "Aug 2025 - Sep 2025",
      bullets: [
        "Completed intensive Machine Learning course covering supervised and unsupervised learning, model evaluation, and feature engineering",
        "Implemented hands-on projects using Python, Scikit-learn, and Pandas",
        "Strengthened foundation in algorithms, data preprocessing, and evaluation metrics",
      ],
    },
  ],
  education: [
    {
      school: "Alexandria National University",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2022 - 2026 (expected)",
      achievements: [
        "Focused on Intelligent Systems, Machine Learning, and Data Mining",
        "Active member in tech-related projects and collaborative research",
        "Maintaining strong academic performance in core CS subjects",
      ],
    },
  ],
};
