"use client"

import { motion } from "framer-motion"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { skills } from "@/data/portfolio"
import { 
  Code, Database, Brain, BarChart3, Cloud, Server, 
  Cpu, GitBranch, Box, Workflow, LineChart, Search,
  Layers, Zap, Terminal, Globe, MessageSquare, Settings,
  TrendingUp, FlaskConical, Users, Bot, BarChart
} from "lucide-react"

// Icon mapping for skills
const iconMap: { [key: string]: any } = {
  python: "🐍",
  r: "📊",
  cplusplus: "⚡",
  javascript: "🟨",
  html5: "🌐",
  css3: "🎨",
  database: Database,
  mysql: "🐬",
  postgresql: "🐘",
  mongodb: "🍃",
  snowflake: "❄️",
  google: Globe,
  aws: Cloud,
  redis: "🔴",
  apache: Zap,
  hadoop: "🐘",
  dbt: Terminal,
  databricks: "🧱",
  airflow: Workflow,
  workflow: Workflow,
  diagram: Layers,
  scikitlearn: "🔬",
  tensorflow: "🧠",
  pytorch: "🔥",
  keras: "🔷",
  chain: "🔗",
  graph: GitBranch,
  brain: Brain,
  robot: Bot,
  tune: Settings,
  huggingface: "🤗",
  users: Users,
  bot: Bot,
  azure: Cloud,
  docker: Box,
  kubernetes: "☸️",
  jenkins: "🔧",
  mlops: Cpu,
  cicd: GitBranch,
  flask: FlaskConical,
  fastapi: Zap,
  api: Globe,
  graphql: "◈",
  streamlit: "🎈",
  mlflow: LineChart,
  numpy: "🔢",
  pandas: "🐼",
  matplotlib: "📈",
  chart: BarChart3,
  plotly: BarChart,
  powerbi: "📊",
  tableau: "📉",
  excel: "📗",
  search: Search,
  split: "⚖️",
  cog: Settings,
  trendingup: TrendingUp,
  message: MessageSquare,
}

const skillCategories = [
  { key: "languages", label: "Programming Languages", icon: Code, color: "from-blue-500 to-cyan-500" },
  { key: "databases", label: "Databases & Data Warehousing", icon: Database, color: "from-green-500 to-emerald-500" },
  { key: "dataEngineering", label: "Data Engineering", icon: Server, color: "from-orange-500 to-amber-500" },
  { key: "mlGenAI", label: "ML & GenAI", icon: Brain, color: "from-purple-500 to-pink-500" },
  { key: "cloudDevops", label: "Cloud & DevOps", icon: Cloud, color: "from-sky-500 to-blue-500" },
  { key: "frameworks", label: "Frameworks & Tools", icon: Box, color: "from-red-500 to-rose-500" },
  { key: "analytics", label: "Analytics & Visualization", icon: BarChart3, color: "from-indigo-500 to-violet-500" },
  { key: "analyticalSkills", label: "Analytical Skills", icon: TrendingUp, color: "from-teal-500 to-cyan-500" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function Skills() {
  const getIcon = (iconKey: string) => {
    const icon = iconMap[iconKey]
    if (typeof icon === "string") {
      return <span className="text-lg">{icon}</span>
    }
    const IconComponent = icon || Code
    return <IconComponent size={16} />
  }

  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Skills & Technologies"
          subtitle="The tools and technologies I use to bring ideas to life"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map(({ key, label, icon: CategoryIcon, color }) => (
            <motion.div
              key={key}
              variants={itemVariants}
              className="bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${color}`}>
                  <CategoryIcon size={20} className="text-white" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{label}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {(skills[key as keyof typeof skills] as Array<{name: string, icon: string}>).map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-500/20 hover:border-purple-300 dark:hover:border-purple-500/30 hover:text-purple-700 dark:hover:text-purple-300 transition-all cursor-default"
                  >
                    {getIcon(skill.icon)}
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}