import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { 
  Mic, 
  Brain, 
  Globe, 
  Shield, 
  Zap, 
  Users,
  Headphones,
  MessageSquare,
  Settings
} from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: Brain,
      title: 'AI Meeting Assistant',
      description: 'Intelligent meeting transcription, summaries, and action items powered by advanced AI.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Mic,
      title: 'Real-time Noise Cancellation',
      description: 'Remove background noise instantly with our proprietary AI algorithms.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Globe,
      title: 'Accent Conversion',
      description: 'Speak with confidence using AI-powered accent modification technology.',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Headphones,
      title: 'Voice Enhancement',
      description: 'Boost voice clarity and reduce echo for professional-quality audio.',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'All processing happens locally on your device. Your conversations stay private.',
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      icon: Zap,
      title: 'Ultra-Low Latency',
      description: 'Process audio in real-time with minimal delay for natural conversations.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Share settings and preferences across your team for consistent audio quality.',
      color: 'text-pink-600',
      bgColor: 'bg-pink-100'
    },
    {
      icon: MessageSquare,
      title: 'Multi-Platform Support',
      description: 'Works seamlessly with Zoom, Teams, Slack, Discord, and 100+ other apps.',
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-100'
    },
    {
      icon: Settings,
      title: 'Custom Profiles',
      description: 'Create personalized audio profiles for different environments and use cases.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features for
            <span className="gradient-text block">Perfect Audio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your audio experience with cutting-edge AI technology designed 
            for professionals who demand crystal-clear communication.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card 
                key={index} 
                className="hover-lift border-0 shadow-lg bg-white/80 backdrop-blur-sm"
              >
                <CardHeader className="pb-4">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${feature.bgColor} mb-4`}>
                    <IconComponent className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-sm text-gray-600 mb-4">
            <span>✨ New features added every month</span>
          </div>
          <div className="space-x-4">
            <button className="text-indigo-600 hover:text-indigo-700 font-medium">
              View all features →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}