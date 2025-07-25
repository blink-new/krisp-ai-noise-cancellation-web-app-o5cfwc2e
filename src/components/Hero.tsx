import React from 'react'
import { Button } from './ui/button'
import { Play, Star, Users, Award } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">4.8/5</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>Trusted by 10M+ users</span>
              </div>
              <div className="flex items-center space-x-1">
                <Award className="h-4 w-4" />
                <span>Award winning</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                AI-Powered
                <span className="gradient-text block">
                  Noise Cancellation
                </span>
                for Crystal Clear Calls
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Remove background noise, enhance your voice, and sound professional 
                in every meeting with our advanced AI technology.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-bg text-white hover:opacity-90 px-8 py-4 text-lg">
                Start Free Trial
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-indigo-200 hover:bg-indigo-50 px-8 py-4 text-lg"
              >
                <Play className="h-5 w-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
              <div className="flex items-center space-x-3">
                <div className="h-2 w-2 rounded-full bg-indigo-500" />
                <span className="text-gray-700">Real-time noise removal</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-2 w-2 rounded-full bg-indigo-500" />
                <span className="text-gray-700">Voice enhancement</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-2 w-2 rounded-full bg-indigo-500" />
                <span className="text-gray-700">Works with any app</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-2 w-2 rounded-full bg-indigo-500" />
                <span className="text-gray-700">No installation required</span>
              </div>
            </div>
          </div>

          {/* Right Content - Demo Visual */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 hover-lift">
              {/* Mock Audio Interface */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Live Audio Processing</h3>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm text-green-600">Active</span>
                  </div>
                </div>

                {/* Audio Waveform Visualization */}
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Input (with noise)</span>
                      <span className="text-sm text-red-500">-12 dB</span>
                    </div>
                    <div className="flex items-center space-x-1 h-12 bg-gray-100 rounded-lg p-2">
                      {Array.from({ length: 40 }).map((_, i) => (
                        <div
                          key={i}
                          className="bg-red-400 rounded-full animate-pulse"
                          style={{
                            width: '2px',
                            height: `${Math.random() * 100}%`,
                            animationDelay: `${i * 50}ms`
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Output (clean)</span>
                      <span className="text-sm text-green-500">-6 dB</span>
                    </div>
                    <div className="flex items-center space-x-1 h-12 bg-gray-100 rounded-lg p-2">
                      {Array.from({ length: 40 }).map((_, i) => (
                        <div
                          key={i}
                          className="bg-green-400 rounded-full animate-pulse"
                          style={{
                            width: '2px',
                            height: `${Math.random() * 60 + 20}%`,
                            animationDelay: `${i * 50}ms`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center space-x-4">
                    <Button size="sm" className="gradient-bg text-white">
                      Noise Cancellation: ON
                    </Button>
                    <Button size="sm" variant="outline">
                      Voice Enhancement: ON
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 glass-effect">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <span className="text-sm font-medium">99% Noise Reduced</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 glass-effect">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-blue-500" />
                <span className="text-sm font-medium">Voice Clarity +85%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}