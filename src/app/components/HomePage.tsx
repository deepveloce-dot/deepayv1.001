import { motion } from 'motion/react';
import { Home, TrendingUp, Search, ArrowUpRight, ArrowDownLeft, Percent, Gift, Repeat, Palette } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface HomePageProps {
  onAddMoney: () => void;
  onTransfer: () => void;
  onOpenProfile: () => void;
}

export function HomePage({ onAddMoney, onTransfer, onOpenProfile }: HomePageProps) {
  const { theme, toggleTheme } = useTheme();
  const transactions = [
    {
      id: 1,
      date: '08 4月. 2026',
      title: '4% Yield',
      time: '02:13',
      amount: '+€0.01',
      icon: Percent,
      type: 'income'
    },
    {
      id: 2,
      date: '22 3月. 2026',
      title: 'EUR → SOL',
      subtitle: '0.63 SOL',
      time: '05:22',
      amount: '€49',
      icon: Repeat,
      type: 'exchange'
    },
    {
      id: 3,
      date: '21 3月. 2026',
      title: 'Transfer to John',
      time: '14:35',
      amount: '-€120',
      icon: ArrowUpRight,
      type: 'expense'
    }
  ];

  return (
    <div className="h-full overflow-y-auto px-5 pb-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-6"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpenProfile}
          className="w-11 h-11 rounded-full bg-neutral-200 flex items-center justify-center overflow-hidden hover:bg-neutral-300 active:bg-neutral-400 transition-colors"
        >
          <span className="text-foreground font-medium text-sm">U</span>
        </motion.button>
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className={`w-10 h-10 rounded-full flex items-center justify-center hover:bg-neutral-100 active:bg-neutral-200 transition-colors ${
              theme === 'purple' ? 'bg-purple-50' : 'bg-green-50'
            }`}
          >
            <Palette className={`w-5 h-5 ${theme === 'purple' ? 'text-purple-500' : 'text-green-500'}`} strokeWidth={2} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-neutral-100 active:bg-neutral-200 transition-colors"
          >
            <Search className="w-5 h-5 text-foreground/60" strokeWidth={2} />
          </motion.button>
        </div>
      </motion.div>

      {/* Balance Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6"
      >
        <div className="flex items-baseline justify-between mb-2">
          <div className="text-4xl font-['Outfit'] font-semibold tracking-tight text-foreground">
            €1.02
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-foreground/60">EUR</span>
            <svg width="12" height="12" viewBox="0 0 12 12" className="text-foreground/40">
              <path d="M3 6L6 9L9 3" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-foreground/50">
            <Home className="w-4 h-4" strokeWidth={2} />
            <span>FR89 17748 ... IT393163333 43</span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <ArrowUpRight className={`w-3.5 h-3.5 ${theme === 'purple' ? 'text-purple-500' : 'text-green-500'}`} strokeWidth={2.5} />
            <span className={`font-semibold ${theme === 'purple' ? 'text-purple-500' : 'text-green-500'}`}>4%</span>
          </div>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 gap-3 mb-6"
      >
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onAddMoney}
          className="bg-black text-white rounded-2xl py-3.5 px-5 flex items-center justify-center gap-2 font-medium active:bg-neutral-800 transition-colors"
        >
          <ArrowDownLeft className="w-5 h-5" strokeWidth={2} />
          <span>Add Money</span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onTransfer}
          className="bg-white border border-neutral-200 text-foreground rounded-2xl py-3.5 px-5 flex items-center justify-center gap-2 font-medium hover:bg-neutral-50 active:bg-neutral-100 transition-colors"
        >
          <ArrowUpRight className="w-5 h-5" strokeWidth={2} />
          <span>Transfer</span>
        </motion.button>
      </motion.div>

      {/* Referral Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 mb-6 border border-neutral-100"
      >
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-neutral-700 to-neutral-900 rounded-xl flex items-center justify-center flex-shrink-0">
              <Gift className="w-5 h-5 text-white" strokeWidth={2} />
            </div>
            <div>
              <h3 className="font-semibold text-sm mb-0.5">€100 per referral</h3>
              <p className="text-xs text-foreground/50 leading-relaxed">
                Receive €100 for each friend who signs up before 23 April.
              </p>
            </div>
          </div>
          <button className="text-foreground/30 hover:text-foreground/60 transition-colors text-lg leading-none">
            ✕
          </button>
        </div>
      </motion.div>

      {/* Transactions */}
      <div className="space-y-4">
        {transactions.map((transaction, index) => (
          <motion.div
            key={transaction.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.05 }}
          >
            <div className="text-xs font-medium mb-2 text-foreground/40">
              {transaction.date}
            </div>
            <motion.div
              whileHover={{ scale: 1.005 }}
              whileTap={{ scale: 0.995 }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-3.5 flex items-center justify-between border border-neutral-100 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                  transaction.type === 'income'
                    ? 'bg-black text-white'
                    : transaction.type === 'exchange'
                    ? 'bg-neutral-800 text-white'
                    : 'bg-neutral-100 text-foreground'
                }`}>
                  <transaction.icon className="w-5 h-5" strokeWidth={2} />
                </div>
                <div>
                  <div className="font-medium text-sm">{transaction.title}</div>
                  <div className="text-xs text-foreground/40">{transaction.time}</div>
                  {transaction.subtitle && (
                    <div className="text-xs text-foreground/40">{transaction.subtitle}</div>
                  )}
                </div>
              </div>
              <div className={`font-['Outfit'] font-semibold text-sm ${
                transaction.amount.startsWith('+')
                  ? 'text-foreground'
                  : transaction.amount.startsWith('-')
                  ? 'text-foreground/60'
                  : 'text-foreground'
              }`}>
                {transaction.amount}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
