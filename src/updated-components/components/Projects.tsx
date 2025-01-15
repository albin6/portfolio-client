'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack MERN application with user authentication, product management, and order processing.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
    color: 'from-blue-500 to-purple-500',
  },
  {
    title: 'Task Management App',
    description: 'A responsive web application for managing tasks and projects with real-time updates.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    color: 'from-green-500 to-teal-500',
  },
  {
    title: 'Blog Platform',
    description: 'A blogging platform with markdown support, user profiles, and comment system.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'GraphQL'],
    color: 'from-yellow-500 to-red-500',
  },
]

export default function Projects() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <CardHeader className={`bg-gradient-to-r ${project.color}`}>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 flex-grow">
                  <CardDescription>{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map(tech => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">View Project</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

