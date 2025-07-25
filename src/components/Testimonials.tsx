import React from 'react'
import { Card, CardContent } from './ui/card'
import { Star, Quote } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Product Manager',
      company: 'TechCorp',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face',
      rating: 5,
      text: 'Krisp has completely transformed our remote meetings. The noise cancellation is so good that my colleagues can\'t tell when I\'m working from a busy coffee shop.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Software Engineer',
      company: 'StartupXYZ',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face',
      rating: 5,
      text: 'As a developer who works from home with kids, Krisp is a lifesaver. I can take calls without worrying about background noise disrupting important meetings.'
    },
    {
      name: 'Emily Johnson',
      role: 'Marketing Director',
      company: 'GrowthCo',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face',
      rating: 5,
      text: 'The voice enhancement feature is incredible. My team says I sound more professional and clear than ever before. It\'s like having a professional studio setup.'
    },
    {
      name: 'David Kim',
      role: 'Sales Manager',
      company: 'SalesForce Pro',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face',
      rating: 5,
      text: 'Client calls are so much better now. The AI removes all the distracting sounds from my home office, and I can focus on closing deals instead of apologizing for noise.'
    },
    {
      name: 'Lisa Wang',
      role: 'UX Designer',
      company: 'DesignStudio',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=64&h=64&fit=crop&crop=face',
      rating: 5,
      text: 'The accent conversion feature helped me communicate more confidently with international clients. It\'s subtle but makes a real difference in professional settings.'
    },
    {
      name: 'James Thompson',
      role: 'CEO',
      company: 'InnovateTech',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face',
      rating: 5,
      text: 'We rolled out Krisp across our entire remote team. The improvement in meeting quality and productivity has been remarkable. Best investment we\'ve made this year.'
    }
  ]

  const companies = [
    { name: 'Microsoft', logo: 'https://logo.clearbit.com/microsoft.com' },
    { name: 'Google', logo: 'https://logo.clearbit.com/google.com' },
    { name: 'Slack', logo: 'https://logo.clearbit.com/slack.com' },
    { name: 'Zoom', logo: 'https://logo.clearbit.com/zoom.us' },
    { name: 'Spotify', logo: 'https://logo.clearbit.com/spotify.com' },
    { name: 'Airbnb', logo: 'https://logo.clearbit.com/airbnb.com' }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Trusted by
            <span className="gradient-text"> 10M+ Users</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join millions of professionals who rely on Krisp for crystal-clear communication
          </p>
        </div>

        {/* Company Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-16 opacity-60">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center space-x-2">
              <img 
                src={company.logo} 
                alt={company.name}
                className="h-8 w-8 grayscale hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
              <span className="text-gray-600 font-medium">{company.name}</span>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-lift border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-indigo-200 mb-4" />
                
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">10M+</div>
            <div className="text-gray-600">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">99.9%</div>
            <div className="text-gray-600">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">4.8/5</div>
            <div className="text-gray-600">User Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">50+</div>
            <div className="text-gray-600">Supported Apps</div>
          </div>
        </div>
      </div>
    </section>
  )
}