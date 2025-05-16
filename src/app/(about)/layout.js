import InsightRoll from "@/src/components/About/InsightRoll";


const insights = [
  "Graduated with a Bachelor's in Computer Science (2025) 🎓",
  "Completed 5+ academic and personal projects using React, Node.js, and Python 💻",
  "Actively participated in coding platform (150+ problems in Leetcode)",
  "Completed online certifications in Web Development and Data Structures from Coursera & Udemy 📚",
  "Contributed to open-source: 2 pull requests merged in beginner-friendly repos on GitHub 🤝",
  "Team lead in final year project — developed a full-stack web app with 3 teammates 👥",
];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
