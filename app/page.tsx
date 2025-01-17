import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code2, Cloud, Palette, BrainCircuit, Globe, Layout } from 'lucide-react'
import ProjectSection from './components/project-section'

const projects = [
  { name: "Thino Photography", url: "https://thinophotography.com", description: "Professional photography portfolio website" },
  { name: "Yob Headshot", url: "https://yobheadshot.com", description: "Headshot photography services" },
  { name: "Lake Rock Studio", url: "https://lakerockstudio.com", description: "Music recording and production studio" },
]

const solutions = [
  {
    icon: <Code2 className="w-8 h-8 mb-4" />,
    title: "Drupal Expertise",
    description: "Expert Drupal development and consulting services for robust content management solutions"
  },
  {
    icon: <Layout className="w-8 h-8 mb-4" />,
    title: "Web App Development",
    description: "Custom web application development using cutting-edge technologies and frameworks"
  },
  {
    icon: <Globe className="w-8 h-8 mb-4" />,
    title: "Website Development",
    description: "Professional website development with focus on performance and user experience"
  },
  {
    icon: <Cloud className="w-8 h-8 mb-4" />,
    title: "AWS Solutions",
    description: "AWS infrastructure setup, optimization, and management services"
  },
  {
    icon: <BrainCircuit className="w-8 h-8 mb-4" />,
    title: "AI Integration Consulting",
    description: "Strategic consulting for integrating AI solutions into your business processes"
  },
  {
    icon: <Palette className="w-8 h-8 mb-4" />,
    title: "Branding Consulting",
    description: "Comprehensive branding strategy and identity development services"
  },
]

export default function Home() {
  return (
    <>
      <ProjectSection className="min-h-screen bg-[#1f1f1f]" darkMode>
        <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen text-[#ffffff]">
          <h1 className="text-5xl font-bold mb-6">Welcome to VAVQO</h1>
          <p className="text-xl mb-8 text-center max-w-2xl">
            Innovative solutions with a human touch. We develop cutting-edge solutions for organizations, businesses, and governments.
          </p>
          <Button asChild variant="outline" className="border-white text-[#1f1f1f] hover:bg-white hover:text-[#1f1f1f]">
            <a href="#about">Discover Our Solutions</a>
          </Button>
        </div>
      </ProjectSection>

      <ProjectSection className="py-20 bg-[#edeff3]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center">Our Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {solutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col items-center text-center">
                    {solution.icon}
                    <CardTitle className="mb-2">{solution.title}</CardTitle>
                    <CardDescription>{solution.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-4">
                At VAVQO, we believe in the power of human-centered design and problem-solving. Our approach combines cutting-edge technology with a deep understanding of human needs and behaviors.
              </p>
              <p className="text-lg mb-4">
                We help organizations, businesses, and governments resolve their complex challenges through innovative solutions that put people first. Our team of experts is dedicated to creating meaningful impact and driving positive change.
              </p>
              <p className="text-lg">
                By focusing on the human element in every project, we ensure that our solutions are not only technologically advanced but also intuitive, accessible, and truly beneficial to end-users.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <h2 className="text-6xl font-bold">VAVQO</h2>
            </div>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection className="py-20 bg-[#ffffff]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Visit Website
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </ProjectSection>

      <ProjectSection className="py-20 bg-[#1f1f1f]" darkMode>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center text-white">Get in Touch</h2>
          <div className="max-w-md mx-auto text-white">
            <p className="text-center mb-6">
              We'd love to hear from you. Reach out to us for any inquiries or to discuss your project ideas.
            </p>
            <div className="space-y-4">
              <p className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                sawadogovalentin53@gmail.com
              </p>
              <p className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="https://wa.me/15016972162" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  WhatsApp: +1 501 697 2162
                </a>
              </p>
            </div>
          </div>
        </div>
      </ProjectSection>
    </>
  )
}

