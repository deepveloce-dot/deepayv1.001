import { motion } from 'motion/react';
import { ArrowRight, Shield, Zap, Globe, Lock, Smartphone, TrendingUp, Users, CheckCircle, Download, Apple, PlayCircle, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { HomePage } from './HomePage';
import { CardsPage } from './CardsPage';
import { TransferPage } from './TransferPage';
import { VaultsPage } from './VaultsPage';
import { useState } from 'react';
import paymentVideo from '../../imports/[V9]_KRAK_CARD_-_Payment_Cutdown_compressed_-_1920x1080.mp4';
import objectsVideo from '../../imports/objects_low_res_(1).mp4';

interface LandingPageProps {
  onClose?: () => void;
}

export function LandingPage({ onClose }: LandingPageProps) {
  const { theme } = useTheme();

  const features = [
    {
      icon: Shield,
      title: 'Bank-grade Security',
      description: 'Your money is protected with enterprise-level encryption and multi-factor authentication.'
    },
    {
      icon: Zap,
      title: 'Instant Transfers',
      description: 'Send and receive money instantly with zero fees. Support for 150+ currencies.'
    },
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Use your account anywhere in the world. Multi-currency support and local payment methods.'
    },
    {
      icon: TrendingUp,
      title: 'Smart Savings',
      description: 'Automated savings goals with competitive interest rates. Watch your money grow.'
    },
    {
      icon: Lock,
      title: 'Privacy First',
      description: 'Your data is yours. We never sell your information to third parties.'
    },
    {
      icon: Users,
      title: 'Multi-user Support',
      description: 'Share accounts with family or team members. Set custom permissions and limits.'
    }
  ];

  const steps = [
    { number: '01', title: 'Download App', description: 'Get DeePay on iOS or Android in seconds' },
    { number: '02', title: 'Create Account', description: 'Sign up with your email in less than 2 minutes' },
    { number: '03', title: 'Add Money', description: 'Link your bank or card to fund your account' },
    { number: '04', title: 'Start Using', description: 'Send, receive, and manage your money instantly' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neutral-800 to-black flex items-center justify-center">
                <span className="text-white font-bold text-lg relative -top-0.5">D</span>
              </div>
              <span className="text-2xl font-bold font-['Outfit']">DeePay</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-foreground/60 hover:text-foreground transition-colors">Features</a>
              <a href="#how-it-works" className="text-foreground/60 hover:text-foreground transition-colors">How it Works</a>
              <a href="#security" className="text-foreground/60 hover:text-foreground transition-colors">Security</a>
              <a href="#download" className="text-foreground/60 hover:text-foreground transition-colors">Download</a>
            </div>
            <div className="flex items-center gap-3">
              {onClose && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-neutral-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              )}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-black text-white px-6 py-2.5 rounded-xl font-medium hover:bg-neutral-800 transition-colors"
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-6xl font-bold font-['Outfit'] mb-6 leading-tight">
                Banking for the
                <span className={`block ${theme === 'purple' ? 'text-purple-500' : 'text-green-500'}`}>
                  Digital Age
                </span>
              </h1>
              <p className="text-xl text-foreground/60 mb-8 leading-relaxed">
                Send, receive, and manage your money with zero fees.
                The smartest way to handle your finances globally.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-black text-white px-8 py-4 rounded-2xl font-medium flex items-center justify-center gap-2 hover:bg-neutral-800 transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Download Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white border-2 border-neutral-200 text-foreground px-8 py-4 rounded-2xl font-medium flex items-center justify-center gap-2 hover:bg-neutral-50 transition-colors"
                >
                  <PlayCircle className="w-5 h-5" />
                  Watch Demo
                </motion.button>
              </div>
              <div className="flex items-center gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className={`w-5 h-5 ${theme === 'purple' ? 'text-purple-500' : 'text-green-500'}`} />
                  <span className="text-sm text-foreground/60">No hidden fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className={`w-5 h-5 ${theme === 'purple' ? 'text-purple-500' : 'text-green-500'}`} />
                  <span className="text-sm text-foreground/60">Instant transfers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className={`w-5 h-5 ${theme === 'purple' ? 'text-purple-500' : 'text-green-500'}`} />
                  <span className="text-sm text-foreground/60">24/7 support</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-100 rounded-3xl blur-3xl opacity-50" />
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-neutral-100">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-sm text-foreground/60">Total Balance</span>
                    <div className={`w-2 h-2 rounded-full ${theme === 'purple' ? 'bg-purple-500' : 'bg-green-500'}`} />
                  </div>
                  <div className="mb-8">
                    <div className="text-5xl font-bold font-['Outfit'] mb-2">€12,548.32</div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className={`w-4 h-4 ${theme === 'purple' ? 'text-purple-500' : 'text-green-500'}`} />
                      <span className={`text-sm font-medium ${theme === 'purple' ? 'text-purple-500' : 'text-green-500'}`}>+12.5% this month</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {['Salary Received', 'Shopping', 'Investment'].map((label, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-neutral-50 rounded-xl">
                        <span className="text-sm font-medium">{label}</span>
                        <span className="text-sm font-bold">€{(Math.random() * 1000).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold font-['Outfit'] mb-4">Everything you need</h2>
            <p className="text-xl text-foreground/60">Powerful features to manage your money smarter</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl p-8 border border-neutral-100 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-xl ${theme === 'purple' ? 'bg-purple-100' : 'bg-green-100'} flex items-center justify-center mb-6`}>
                  <feature.icon className={`w-7 h-7 ${theme === 'purple' ? 'text-purple-500' : 'text-green-500'}`} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold font-['Outfit'] mb-4">See DeePay in action</h2>
            <p className="text-xl text-foreground/60">Experience seamless payments and card management</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="relative rounded-2xl overflow-hidden bg-neutral-900 shadow-2xl"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
                src={paymentVideo}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden bg-neutral-900 shadow-2xl"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
                src={objectsVideo}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="py-20 px-6 bg-neutral-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold font-['Outfit'] mb-4">See it in action</h2>
            <p className="text-xl text-foreground/60">Experience the power of DeePay</p>
          </motion.div>

          <div className="relative">
            <div className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
                className="flex-shrink-0 snap-center"
              >
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold mb-1">Home</h3>
                  <p className="text-sm text-foreground/60">Track your balance and transactions</p>
                </div>
                <div className="relative mx-auto" style={{ width: '320px', height: '650px' }}>
                  <div className="absolute inset-0 bg-neutral-900 rounded-[3rem] shadow-2xl p-3">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-neutral-900 rounded-b-2xl z-10" />
                    <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                      <div className="absolute inset-0 scale-[0.38] origin-top-left" style={{ width: '390px', height: '844px' }}>
                        <HomePage onAddMoney={() => {}} onTransfer={() => {}} onOpenProfile={() => {}} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex-shrink-0 snap-center"
              >
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold mb-1">Cards</h3>
                  <p className="text-sm text-foreground/60">Manage your cards effortlessly</p>
                </div>
                <div className="relative mx-auto" style={{ width: '320px', height: '650px' }}>
                  <div className="absolute inset-0 bg-neutral-900 rounded-[3rem] shadow-2xl p-3">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-neutral-900 rounded-b-2xl z-10" />
                    <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                      <div className="absolute inset-0 scale-[0.38] origin-top-left" style={{ width: '390px', height: '844px' }}>
                        <CardsPage />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex-shrink-0 snap-center"
              >
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold mb-1">Transfer</h3>
                  <p className="text-sm text-foreground/60">Send money instantly</p>
                </div>
                <div className="relative mx-auto" style={{ width: '320px', height: '650px' }}>
                  <div className="absolute inset-0 bg-neutral-900 rounded-[3rem] shadow-2xl p-3">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-neutral-900 rounded-b-2xl z-10" />
                    <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                      <div className="absolute inset-0 scale-[0.38] origin-top-left" style={{ width: '390px', height: '844px' }}>
                        <TransferPage onQuickTransfer={() => {}} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex-shrink-0 snap-center"
              >
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold mb-1">Vaults</h3>
                  <p className="text-sm text-foreground/60">Save for your goals</p>
                </div>
                <div className="relative mx-auto" style={{ width: '320px', height: '650px' }}>
                  <div className="absolute inset-0 bg-neutral-900 rounded-[3rem] shadow-2xl p-3">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-neutral-900 rounded-b-2xl z-10" />
                    <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                      <div className="absolute inset-0 scale-[0.38] origin-top-left" style={{ width: '390px', height: '844px' }}>
                        <VaultsPage />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold font-['Outfit'] mb-4">How it works</h2>
            <p className="text-xl text-foreground/60">Get started in minutes</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-center">
                  <div className={`text-6xl font-bold font-['Outfit'] mb-4 ${theme === 'purple' ? 'text-purple-500/20' : 'text-green-500/20'}`}>
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-foreground/60">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-6 w-6 h-6 text-foreground/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-6 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-neutral-900 to-black rounded-3xl p-12 text-white text-center"
          >
            <h2 className="text-4xl font-bold font-['Outfit'] mb-4">Ready to get started?</h2>
            <p className="text-xl text-white/80 mb-8">Join millions of users who trust DeePay with their money</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-black px-8 py-4 rounded-2xl font-medium flex items-center justify-center gap-3 hover:bg-neutral-100 transition-colors"
              >
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-base font-bold">App Store</div>
                </div>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-black px-8 py-4 rounded-2xl font-medium flex items-center justify-center gap-3 hover:bg-neutral-100 transition-colors"
              >
                <PlayCircle className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-base font-bold">Google Play</div>
                </div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-white border-t border-neutral-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neutral-800 to-black flex items-center justify-center">
                  <span className="text-white font-bold relative -top-0.5">D</span>
                </div>
                <span className="text-xl font-bold font-['Outfit']">DeePay</span>
              </div>
              <p className="text-sm text-foreground/60">Banking for the digital age</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-foreground/60 hover:text-foreground">Features</a>
                <a href="#" className="block text-sm text-foreground/60 hover:text-foreground">Security</a>
                <a href="#" className="block text-sm text-foreground/60 hover:text-foreground">Pricing</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-foreground/60 hover:text-foreground">About</a>
                <a href="#" className="block text-sm text-foreground/60 hover:text-foreground">Blog</a>
                <a href="#" className="block text-sm text-foreground/60 hover:text-foreground">Careers</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-foreground/60 hover:text-foreground">Privacy</a>
                <a href="#" className="block text-sm text-foreground/60 hover:text-foreground">Terms</a>
                <a href="#" className="block text-sm text-foreground/60 hover:text-foreground">Security</a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-neutral-100 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-foreground/40">© 2026 DeePay. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-foreground/40 hover:text-foreground transition-colors">Twitter</a>
              <a href="#" className="text-foreground/40 hover:text-foreground transition-colors">LinkedIn</a>
              <a href="#" className="text-foreground/40 hover:text-foreground transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
