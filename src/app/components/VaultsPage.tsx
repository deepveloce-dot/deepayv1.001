import { motion } from 'motion/react';
import { Vault, Target, TrendingUp, Calendar, Plus, Sparkles, PiggyBank, Home as HomeIcon, Plane, GraduationCap } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export function VaultsPage() {
  const { theme } = useTheme();
  const [selectedVault, setSelectedVault] = useState<string | null>(null);

  const vaults = [
    {
      id: 'emergency',
      name: 'Emergency Fund',
      icon: Vault,
      current: 8450,
      target: 10000,
      monthlyDeposit: 500,
      interestRate: 2.5,
      endDate: '2026-08-01'
    },
    {
      id: 'vacation',
      name: 'Summer Vacation',
      icon: Plane,
      current: 3200,
      target: 5000,
      monthlyDeposit: 300,
      interestRate: 1.8,
      endDate: '2026-07-01'
    },
    {
      id: 'house',
      name: 'House Down Payment',
      icon: HomeIcon,
      current: 25000,
      target: 50000,
      monthlyDeposit: 1200,
      interestRate: 3.2,
      endDate: '2027-12-31'
    },
    {
      id: 'education',
      name: 'Education Fund',
      icon: GraduationCap,
      current: 12000,
      target: 20000,
      monthlyDeposit: 400,
      interestRate: 2.8,
      endDate: '2027-09-01'
    }
  ];

  const totalSaved = vaults.reduce((sum, vault) => sum + vault.current, 0);
  const totalTarget = vaults.reduce((sum, vault) => sum + vault.target, 0);

  return (
    <div className="h-full overflow-y-auto px-5 pb-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-xl font-bold font-['Outfit']">Savings Vaults</h1>
          <motion.button
            whileHover={{ scale: 1.05, rotate: 90 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center active:bg-neutral-800 transition-colors"
          >
            <Plus className="w-5 h-5" />
          </motion.button>
        </div>
        <p className="text-muted-foreground text-sm">Save for your future goals</p>
      </motion.div>

      {/* Total Progress Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 mb-6 border border-neutral-100"
      >
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-5 h-5 text-foreground/60" />
          <span className="text-sm text-foreground/60">Total Savings Progress</span>
        </div>
        <div className="flex items-baseline gap-2 mb-4">
          <div className="text-3xl font-['Outfit'] font-bold text-foreground">
            €{totalSaved.toLocaleString()}
          </div>
          <span className="text-sm text-foreground/60">/ €{totalTarget.toLocaleString()}</span>
        </div>

        {/* Progress bar */}
        <div className="relative h-3 bg-neutral-100 rounded-full overflow-hidden mb-3">
          <motion.div
            className={`absolute inset-y-0 left-0 ${theme === 'purple' ? 'bg-purple-500' : 'bg-green-500'} rounded-full`}
            initial={{ width: 0 }}
            animate={{ width: `${(totalSaved / totalTarget) * 100}%` }}
            transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-foreground/60">{Math.round((totalSaved / totalTarget) * 100)}% Complete</span>
          <span className="text-foreground/60">€{(totalTarget - totalSaved).toLocaleString()} to go</span>
        </div>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {[
          { label: 'Monthly', value: `€${vaults.reduce((sum, v) => sum + v.monthlyDeposit, 0)}`, icon: Calendar },
          { label: 'Avg Rate', value: `${(vaults.reduce((sum, v) => sum + v.interestRate, 0) / vaults.length).toFixed(1)}%`, icon: TrendingUp },
          { label: 'Goals', value: vaults.length.toString(), icon: Target }
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.05 }}
            className="bg-white rounded-2xl p-4 border border-neutral-100 text-center"
          >
            <stat.icon className="w-5 h-5 mx-auto mb-2 text-foreground/60" strokeWidth={2} />
            <div className="text-lg font-semibold font-['Outfit']">{stat.value}</div>
            <div className="text-xs text-foreground/40">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Vaults List */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground/40 mb-3">Your Goals</h3>
        {vaults.map((vault, index) => {
          const progress = (vault.current / vault.target) * 100;
          const isSelected = selectedVault === vault.id;
          const monthsRemaining = Math.ceil((vault.target - vault.current) / vault.monthlyDeposit);

          return (
            <motion.div
              key={vault.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.05 }}
              onClick={() => setSelectedVault(isSelected ? null : vault.id)}
              className="bg-white rounded-2xl p-5 border border-neutral-100 transition-all cursor-pointer"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-neutral-100 flex items-center justify-center">
                      <vault.icon className="w-5 h-5" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">{vault.name}</h3>
                      <div className="text-xs text-foreground/40">
                        {vault.interestRate}% interest rate
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold font-['Outfit'] text-lg">
                      €{vault.current.toLocaleString()}
                    </div>
                    <div className="text-xs text-foreground/40">
                      of €{vault.target.toLocaleString()}
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative h-2 bg-neutral-100 rounded-full overflow-hidden mb-3">
                  <motion.div
                    className={`absolute inset-y-0 left-0 ${theme === 'purple' ? 'bg-purple-500' : 'bg-green-500'} rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ delay: 0.5 + index * 0.05, duration: 0.8, ease: 'easeOut' }}
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-foreground/60">{Math.round(progress)}% saved</span>
                  <span className="text-foreground/60">{monthsRemaining} months left</span>
                </div>

                {/* Expanded Details */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isSelected ? 'auto' : 0,
                    opacity: isSelected ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 pt-4 border-t border-neutral-100 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/60">Monthly Deposit</span>
                      <span className="font-semibold">€{vault.monthlyDeposit}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/60">Target Date</span>
                      <span className="font-semibold">{new Date(vault.endDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/60">Projected Earnings</span>
                      <span className={`font-semibold ${theme === 'purple' ? 'text-purple-500' : 'text-green-500'}`}>
                        +€{Math.round(vault.current * vault.interestRate * monthsRemaining / 1200)}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-black text-white rounded-xl py-2 text-sm font-medium active:bg-neutral-800 transition-colors"
                      >
                        Add Money
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-white text-foreground border border-neutral-100 rounded-xl py-2 text-sm font-medium hover:bg-neutral-50 active:bg-neutral-100 transition-colors"
                      >
                        Edit Goal
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Savings Tips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-6 bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-neutral-100"
      >
        <div className="flex items-start gap-4">
          <PiggyBank className={`w-6 h-6 ${theme === 'purple' ? 'text-purple-500' : 'text-green-500'} flex-shrink-0 mt-1`} strokeWidth={2} />
          <div>
            <h3 className="font-semibold mb-1 text-sm">Savings Tip</h3>
            <p className="text-sm text-foreground/60 leading-relaxed">
              You're on track to save €{vaults.reduce((sum, v) => sum + v.monthlyDeposit, 0).toLocaleString()} this month.
              Keep it up! Consider increasing your emergency fund contribution by 10% for better protection.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
