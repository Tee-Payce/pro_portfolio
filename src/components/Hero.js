import React from "react";
import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

// 🎨 Colors (rotate for each category)
const COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6", "#06B6D4"];

const categories = [
  {
    title: "Programming Languages",
    data: [
      { name: "Python", value: 20 },
      { name: "Java", value: 10 },
      { name: "JavaScript", value: 40 },
      { name: "TypeScript", value: 10 },
      { name: "C#", value: 5 },
    ],
  },
  {
    title: "Web Development",
    data: [
      { name: "React", value: 30 },
      { name: "Vue.js", value: 10 },
      { name: "Next.js", value: 20 },
      { name: "Tailwind", value: 20 },
      { name: "Angular", value: 20 },
    ],
  },
  {
    title: "Mobile App Development",
    data: [
      { name: "Expo", value: 50 },
      { name: "React Native", value: 30 },
      { name: "Flutter", value: 10 },
    ],
  },
  {
    title: "Backend",
    data: [
      { name: "Node.js", value: 40 },
      { name: "Express.js", value: 30 },
      { name: "Django", value: 20 },
      { name: "Flask", value: 10 },
    ],
  },
  {
    title: "Machine Learning",
    data: [
      { name: "TensorFlow", value: 20 },
      { name: "PyTorch", value: 10 },
      { name: "Scikit-Learn", value: 10 },
      { name: "OpenCV", value: 30 },
    ],
  },
];

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center text-center px-6 py-12">
      <motion.h2
        className="text-5xl font-extrabold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="text-blue-600 dark:text-blue-400">Patrick</span>
      </motion.h2>

      <motion.p
        className="text-lg mb-12 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        A passionate Software Engineer specializing in modern web & mobile
        development.
      </motion.p>

      {/* Circular Graphs */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-6xl">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold mb-4">{cat.title}</h3>
            <div className="h-64">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={cat.data}
                    cx="50%"
                    cy="50%"
                    outerRadius={90}
                    innerRadius={40}
                    dataKey="value"
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {cat.data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
