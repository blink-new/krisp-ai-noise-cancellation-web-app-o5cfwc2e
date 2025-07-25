import React, { useState } from 'react'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { Play, Pause, Volume2, VolumeX, RotateCcw } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'

export function Demo() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeDemo, setActiveDemo] = useState('noise-cancellation')

  const demos = [
    {
      id: 'noise-cancellation',
      title: 'Noise Cancellation',
      description: 'Experience the difference our AI makes in removing background noise',
      beforeLabel: 'With Background Noise',
      afterLabel: 'Krisp AI Processed'
    },
    {
      id: 'voice-enhancement',
      title: 'Voice Enhancement',
      description: 'Hear how we enhance voice clarity and reduce echo',
      beforeLabel: 'Original Audio',
      afterLabel: 'Enhanced Voice'
    },
    {
      id: 'accent-conversion',
      title: 'Accent Conversion',
      description: 'Listen to our accent modification technology in action',
      beforeLabel: 'Original Accent',
      afterLabel: 'Converted Accent'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Hear the
            <span className="gradient-text"> Difference</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the power of our AI technology with interactive audio demos. 
            Listen to real before-and-after examples.
          </p>
        </div>

        {/* Demo Tabs */}
        <div className="max-w-4xl mx-auto">
          <Tabs value={activeDemo} onValueChange={setActiveDemo} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {demos.map((demo) => (
                <TabsTrigger 
                  key={demo.id} 
                  value={demo.id}
                  className="text-sm font-medium"
                >
                  {demo.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {demos.map((demo) => (
              <TabsContent key={demo.id} value={demo.id}>
                <Card className="border-0 shadow-2xl bg-gradient-to-br from-gray-50 to-white">
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {demo.title} Demo
                      </h3>
                      <p className="text-gray-600">
                        {demo.description}
                      </p>
                    </div>

                    {/* Audio Comparison */}
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Before */}
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-900 text-center">
                          {demo.beforeLabel}
                        </h4>
                        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                          {/* Waveform Visualization */}
                          <div className="flex items-center justify-center h-24 mb-4">
                            <div className="flex items-end space-x-1">
                              {Array.from({ length: 30 }).map((_, i) => (
                                <div
                                  key={i}
                                  className="bg-red-400 rounded-full animate-pulse"
                                  style={{
                                    width: '3px',
                                    height: `${Math.random() * 60 + 10}px`,
                                    animationDelay: `${i * 100}ms`
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                          <div className="flex items-center justify-center space-x-4">
                            <Button 
                              size="sm" 
                              variant="outline"
                              className="border-red-300 text-red-700 hover:bg-red-50"
                            >
                              <Play className="h-4 w-4 mr-2" />
                              Play Original
                            </Button>
                            <div className="flex items-center space-x-2 text-sm text-red-600">
                              <VolumeX className="h-4 w-4" />
                              <span>Noisy</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* After */}
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-900 text-center">
                          {demo.afterLabel}
                        </h4>
                        <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                          {/* Waveform Visualization */}
                          <div className="flex items-center justify-center h-24 mb-4">
                            <div className="flex items-end space-x-1">
                              {Array.from({ length: 30 }).map((_, i) => (
                                <div
                                  key={i}
                                  className="bg-green-400 rounded-full animate-pulse"
                                  style={{
                                    width: '3px',
                                    height: `${Math.random() * 40 + 20}px`,
                                    animationDelay: `${i * 100}ms`
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                          <div className="flex items-center justify-center space-x-4">
                            <Button 
                              size="sm"
                              className="gradient-bg text-white"
                            >
                              <Play className="h-4 w-4 mr-2" />
                              Play Enhanced
                            </Button>
                            <div className="flex items-center space-x-2 text-sm text-green-600">
                              <Volume2 className="h-4 w-4" />
                              <span>Crystal Clear</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Demo Controls */}
                    <div className="flex items-center justify-center space-x-4 mt-8 pt-8 border-t">
                      <Button 
                        size="lg"
                        className="gradient-bg text-white px-8"
                        onClick={() => setIsPlaying(!isPlaying)}
                      >
                        {isPlaying ? (
                          <>
                            <Pause className="h-5 w-5 mr-2" />
                            Pause Demo
                          </>
                        ) : (
                          <>
                            <Play className="h-5 w-5 mr-2" />
                            Play Comparison
                          </>
                        )}
                      </Button>
                      <Button variant="outline" size="lg">
                        <RotateCcw className="h-5 w-5 mr-2" />
                        Replay
                      </Button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t">
                      <div className="text-center">
                        <div className="text-2xl font-bold gradient-text">99%</div>
                        <div className="text-sm text-gray-600">Noise Reduced</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold gradient-text">85%</div>
                        <div className="text-sm text-gray-600">Clarity Improved</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold gradient-text">20ms</div>
                        <div className="text-sm text-gray-600">Processing Time</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button size="lg" className="gradient-bg text-white px-8 py-4 text-lg">
            Try It Yourself - Free
          </Button>
          <p className="text-sm text-gray-600 mt-4">
            No credit card required • Works in your browser
          </p>
        </div>
      </div>
    </section>
  )
}