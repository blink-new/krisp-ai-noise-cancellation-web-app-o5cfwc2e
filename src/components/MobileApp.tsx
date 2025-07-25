import React from 'react'
import { Button } from './ui/button'
import { Smartphone, Download, Star, Shield } from 'lucide-react'

export function MobileApp() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Take Krisp
                <span className="gradient-text block">
                  Everywhere You Go
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Download our mobile app and enjoy crystal-clear calls on any device, 
                anywhere. Perfect for remote work, travel, and on-the-go meetings.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="h-2 w-2 rounded-full bg-indigo-500" />
                <span className="text-gray-700">Works with all calling apps</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-2 w-2 rounded-full bg-indigo-500" />
                <span className="text-gray-700">Battery optimized for all-day use</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-2 w-2 rounded-full bg-indigo-500" />
                <span className="text-gray-700">Sync settings across all devices</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-2 w-2 rounded-full bg-indigo-500" />
                <span className="text-gray-700">Offline processing for privacy</span>
              </div>
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-lg flex items-center space-x-3"
              >
                <div className="flex items-center space-x-2">
                  <Download className="h-5 w-5" />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </div>
              </Button>
              
              <Button 
                size="lg" 
                className="bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-lg flex items-center space-x-3"
              >
                <div className="flex items-center space-x-2">
                  <Download className="h-5 w-5" />
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </div>
              </Button>
            </div>

            {/* App Stats */}
            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">4.8</span>
                <span className="text-gray-600">App Store</span>
              </div>
              <div className="flex items-center space-x-2">
                <Download className="h-5 w-5 text-green-600" />
                <span className="font-semibold">5M+</span>
                <span className="text-gray-600">Downloads</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-blue-600" />
                <span className="font-semibold">100%</span>
                <span className="text-gray-600">Secure</span>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden w-80 h-[640px]">
                  {/* Status Bar */}
                  <div className="bg-gray-50 px-6 py-3 flex items-center justify-between text-sm">
                    <span className="font-medium">9:41</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-2 bg-green-500 rounded-sm" />
                      <div className="w-6 h-3 border border-gray-400 rounded-sm">
                        <div className="w-4 h-full bg-green-500 rounded-sm" />
                      </div>
                    </div>
                  </div>

                  {/* App Interface */}
                  <div className="p-6 space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                          <span className="text-white font-bold">K</span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">Krisp</div>
                          <div className="text-sm text-green-600">Active</div>
                        </div>
                      </div>
                      <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                        <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                      </div>
                    </div>

                    {/* Controls */}
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-900">Noise Cancellation</span>
                          <div className="w-12 h-6 bg-indigo-500 rounded-full relative">
                            <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                          </div>
                        </div>
                        <div className="text-sm text-gray-600">99% background noise removed</div>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-900">Voice Enhancement</span>
                          <div className="w-12 h-6 bg-indigo-500 rounded-full relative">
                            <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                          </div>
                        </div>
                        <div className="text-sm text-gray-600">Voice clarity improved by 85%</div>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-900">Accent Conversion</span>
                          <div className="w-12 h-6 bg-gray-300 rounded-full relative">
                            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full" />
                          </div>
                        </div>
                        <div className="text-sm text-gray-600">Tap to enable</div>
                      </div>
                    </div>

                    {/* Audio Visualization */}
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4">
                      <div className="text-center mb-4">
                        <div className="text-lg font-semibold text-gray-900">Live Audio</div>
                        <div className="text-sm text-gray-600">Processing in real-time</div>
                      </div>
                      <div className="flex items-center justify-center space-x-1 h-16">
                        {Array.from({ length: 20 }).map((_, i) => (
                          <div
                            key={i}
                            className="bg-indigo-400 rounded-full animate-pulse"
                            style={{
                              width: '3px',
                              height: `${Math.random() * 40 + 10}px`,
                              animationDelay: `${i * 100}ms`
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-3">
                      <button className="bg-indigo-500 text-white rounded-xl p-3 text-sm font-medium">
                        <Smartphone className="h-4 w-4 mx-auto mb-1" />
                        Quick Setup
                      </button>
                      <button className="bg-gray-100 text-gray-700 rounded-xl p-3 text-sm font-medium">
                        Settings
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 glass-effect">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <span className="text-sm font-medium">Live Processing</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 glass-effect">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-blue-500" />
                  <span className="text-sm font-medium">Battery Optimized</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}