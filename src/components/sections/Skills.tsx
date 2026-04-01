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

const skillsRevealEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.62, ease: skillsRevealEase } },
}

export function Skills() {
  const getIcon = (iconKey: string) => {
    const icon = iconMap[iconKey]
    if (typeof icon === "string") {
      return <span className="text-base">{icon}</span>
    }
    const IconComponent = icon || Code
    return <IconComponent size={14} />
  }

  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          title="Skills & Technologies"
          subtitle="The tools and technologies I use to bring ideas to life"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.16 }}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"
        >
          {skillCategories.map(({ key, label, icon: CategoryIcon, color }) => (
            <motion.div
              key={key}
              variants={itemVariants}
              className="glass-panel interactive-lift group rounded-[1.6rem] border border-slate-200/75 p-5 dark:border-slate-700/70 md:p-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className={`rounded-xl bg-gradient-to-br ${color} p-2.5 shadow-lg shadow-slate-900/10`}>
                  <CategoryIcon size={18} className="text-white" />
                </div>
                <h3 className="font-heading text-sm font-semibold text-slate-900 dark:text-slate-100">{label}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {(skills[key as keyof typeof skills] as Array<{name: string, icon: string}>).map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.02, duration: 0.32, ease: skillsRevealEase }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.99 }}
                    className="flex cursor-default items-center gap-1.5 rounded-full border border-slate-200/75 bg-white/75 px-3 py-1.5 text-xs font-medium text-slate-700 transition-all hover:border-cyan-300/80 hover:bg-cyan-50 hover:text-cyan-800 dark:border-slate-600/70 dark:bg-slate-900/55 dark:text-slate-300 dark:hover:border-cyan-300/45 dark:hover:bg-cyan-400/10 dark:hover:text-cyan-200"
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