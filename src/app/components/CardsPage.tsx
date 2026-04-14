import { motion, useMotionValue, useTransform, PanInfo } from 'motion/react';
import { CreditCard, Lock, Unlock, Eye, EyeOff, Smartphone, Shield, Zap, Plus, Snowflake, DollarSign, Settings } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export function CardsPage() {
  const { theme } = useTheme();
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [revealedCards, setRevealedCards] = useState<Set<string>>(new Set());
  const [frozenCards, setFrozenCards] = useState<Set<string>>(new Set());
  const dragX = useMotionValue(0);

  const cards = [
    {
      id: 'main',
      type: 'Virtual Card',
      name: 'Primary Card',
      number: '4532 **** **** 8901',
      fullNumber: '4532 1234 5678 8901',
      cvv: '***',
      fullCvv: '123',
      expiry: '12/28',
      balance: '€1,245.00',
      gradient: 'from-black via-neutral-800 to-neutral-900',
      limit: '€5,000',
      brand: 'VISA'
    },
    {
      id: 'premium',
      type: 'Premium Card',
      name: 'Travel Card',
      number: '5412 **** **** 3456',
      fullNumber: '5412 7890 1234 3456',
      cvv: '***',
      fullCvv: '456',
      expiry: '09/27',
      balance: '€3,890.50',
      gradient: 'from-neutral-900 via-neutral-800 to-black',
      limit: '€10,000',
      brand: 'Mastercard'
    },
    {
      id: 'virtual',
      type: 'Disposable',
      name: 'Online Shopping',
      number: '6011 **** **** 7890',
      fullNumber: '6011 2345 6789 7890',
      cvv: '***',
      fullCvv: '789',
      expiry: '06/26',
      balance: '€500.00',
      gradient: 'from-neutral-700 via-neutral-800 to-neutral-900',
      limit: '€1,000',
      brand: 'Discover'
    }
  ];

  const handleDragEnd = (event: any, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold && currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    } else if (info.offset.x < -swipeThreshold && currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  const currentCard = cards[currentCardIndex];

  const toggleReveal = (cardId: string) => {
    setRevealedCards(prev => {
      const next = new Set(prev);
      if (next.has(cardId)) {
        next.delete(cardId);
      } else {
        next.add(cardId);
      }
      return next;
    });
  };

  const toggleFreeze = (cardId: string) => {
    setFrozenCards(prev => {
      const next = new Set(prev);
      if (next.has(cardId)) {
        next.delete(cardId);
      } else {
        next.add(cardId);
      }
      return next;
    });
  };

  const isRevealed = revealedCards.has(currentCard.id);
  const isFrozen = frozenCards.has(currentCard.id);

  return (
    <div className="h-full overflow-hidden flex flex-col">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-5 pt-4 pb-6"
      >
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-xl font-bold font-['Outfit']">卡片</h1>
          <motion.button
            whileHover={{ scale: 1.05, rotate: 90 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center active:bg-neutral-800 transition-colors"
          >
            <Plus className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>

      {/* Card Carousel */}
      <div className="px-5 mb-6 relative" style={{ perspective: 1000 }}>
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          style={{ x: dragX }}
          className="relative"
        >
          <SwipeableCard
            card={currentCard}
            isRevealed={isRevealed}
            isFrozen={isFrozen}
            onToggleReveal={() => toggleReveal(currentCard.id)}
          />
        </motion.div>

        {/* Card indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {cards.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentCardIndex(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === currentCardIndex ? 'bg-black w-6' : 'bg-neutral-200 w-1.5'
              }`}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>

      {/* Card Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="px-5 mb-6"
      >
        <div className="grid grid-cols-4 gap-3">
          {[
            { label: '查看', icon: Eye, action: () => toggleReveal(currentCard.id) },
            { label: '冻结', icon: isFrozen ? Unlock : Snowflake, action: () => toggleFreeze(currentCard.id) },
            { label: '限额', icon: DollarSign },
            { label: '设置', icon: Settings }
          ].map((action, i) => (
            <motion.button
              key={action.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={action.action}
              className="flex flex-col items-center gap-2 p-3 bg-white rounded-2xl border border-neutral-100 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-neutral-100 flex items-center justify-center">
                <action.icon className="w-5 h-5" strokeWidth={2} />
              </div>
              <span className="text-xs font-medium">{action.label}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Add to Wallet */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="px-5 mb-6"
      >
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-black text-white rounded-3xl py-4 px-5 flex items-center justify-center gap-3 font-medium shadow-lg active:bg-neutral-800 transition-colors"
        >
          <Smartphone className="w-5 h-5" />
          <span>添加到电子钱包</span>
        </motion.button>
      </motion.div>

      {/* Transactions */}
      <div className="flex-1 overflow-y-auto px-5 pb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-sm font-semibold text-foreground/40 mb-3">交易记录</h3>
          <div className="space-y-3">
            {[
              { name: 'Amazon', amount: '-€45.99', date: '今天 14:23', icon: '🛒' },
              { name: 'Starbucks', amount: '-€5.80', date: '今天 09:15', icon: '☕' },
              { name: 'Salary', amount: '+€2,500.00', date: '昨天', icon: '💰' },
              { name: 'Netflix', amount: '-€12.99', date: '3天前', icon: '📺' }
            ].map((tx, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.05 }}
                whileHover={{ scale: 1.005 }}
                whileTap={{ scale: 0.995 }}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-3.5 flex items-center justify-between border border-neutral-100 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-neutral-100 flex items-center justify-center text-lg">
                    {tx.icon}
                  </div>
                  <div>
                    <div className="font-medium text-sm">{tx.name}</div>
                    <div className="text-xs text-foreground/40">{tx.date}</div>
                  </div>
                </div>
                <div className={`font-['Outfit'] font-semibold text-sm ${
                  tx.amount.startsWith('+')
                    ? (theme === 'purple' ? 'text-purple-500' : 'text-green-500')
                    : 'text-foreground/60'
                }`}>
                  {tx.amount}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function SwipeableCard({
  card,
  isRevealed,
  isFrozen,
  onToggleReveal
}: {
  card: any;
  isRevealed: boolean;
  isFrozen: boolean;
  onToggleReveal: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="relative"
    >
      <div
        className={`bg-gradient-to-br ${card.gradient} text-white rounded-3xl p-6 shadow-lg relative overflow-hidden aspect-[1.6/1] ${
          isFrozen ? 'opacity-60' : ''
        }`}
      >
        {/* Frozen overlay */}
        {isFrozen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-20"
          >
            <div className="text-center">
              <Lock className="w-8 h-8 mx-auto mb-2" />
              <span className="text-sm font-semibold">卡片已冻结</span>
            </div>
          </motion.div>
        )}

        {/* Logo top left */}
        <div className="absolute top-6 left-6">
          <div className="text-lg font-bold">DeePay</div>
        </div>

        {/* Brand logo top right */}
        <div className="absolute top-6 right-6">
          <div className="text-2xl font-bold opacity-80">{card.brand}</div>
        </div>

        {/* Card Number */}
        <div className="absolute bottom-20 left-6 right-6">
          <div className="font-['Outfit'] text-xl tracking-wider font-semibold">
            {isRevealed ? card.fullNumber : card.number}
          </div>
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
          <div>
            <div className="text-xs opacity-70 mb-1">{card.type}</div>
            <div className="text-sm font-semibold">{card.name}</div>
          </div>
          <div className="text-right">
            <div className="text-xs opacity-70 mb-1">到期</div>
            <div className="text-sm font-semibold">{card.expiry}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
