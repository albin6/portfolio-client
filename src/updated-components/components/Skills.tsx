'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
// import { Progress } from '@/components/ui/progress'

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'React', level: 95 },
  { name: 'Next.js', level: 85 },
  { name: 'Node.js', level: 88 },
  { name: 'Express', level: 92 },
  { name: 'RESTful APIs', level: 80 },
  { name: 'GraphQL', level: 80 },
  { name: 'MongoDB', level: 87 },
  { name: 'PostgreSQL', level: 80 },
  { name: 'Socket.io', level: 80 },
  { name: 'Docker', level: 80 },
  { name: 'Data Structures and Algorithms', level: 85 },
]

export default function Skills() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{skill.name}</span>
                    {/* <span className="text-sm text-muted-foreground">{skill.level}%</span> */}
                  </div>
                  {/* <Progress value={skill.level} className="h-2" /> */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

