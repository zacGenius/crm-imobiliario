import { useQuery } from '@tanstack/react-query';
import api from '../lib/api';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Home, DollarSign } from 'lucide-react';

export function Dashboard() {
  const { data: stats, isLoading } = useQuery({
    queryKey: ['stats'],
    queryFn: async () => {
      const { data } = await api.get('/deals/stats');
      return data;
    },
  });

  const cards = [
    { label: 'Total de Leads', value: stats?.leadsCount || 0, icon: Users, color: 'text-blue-400' },
    { label: 'Negócios Abertos', value: stats?.totalDeals || 0, icon: Home, color: 'text-green-400' },
    { label: 'VGV Total', value: `R$ ${(stats?.totalValue || 0).toLocaleString()}`, icon: TrendingUp, color: 'text-accent' },
    { label: 'Comissões', value: `R$ ${(stats?.totalCommission || 0).toLocaleString()}`, icon: DollarSign, color: 'text-primary-light' },
  ];

  if (isLoading) return <div className="animate-pulse text-accent">Carregando métricas...</div>;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-white">Dashboard</h2>
        <p className="text-gray-400">Visão geral da sua imobiliária</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-surface p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-colors group"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-lg bg-background border border-primary/5 group-hover:border-accent/20 transition-colors`}>
                <card.icon size={24} className={card.color} />
              </div>
            </div>
            <div className="text-sm text-gray-400 mb-1">{card.label}</div>
            <div className="text-2xl font-bold text-white">{card.value}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-surface p-6 rounded-xl border border-primary/10">
          <h3 className="text-xl font-bold text-white mb-4">Atividade Recente</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <div className="flex-1">
                  <p className="text-sm text-white font-medium">Novo lead qualificado</p>
                  <p className="text-xs text-gray-500">Há 2 horas por Corretor Silva</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-surface p-6 rounded-xl border border-primary/10">
          <h3 className="text-xl font-bold text-white mb-4">Metas do Mês</h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Vendas</span>
                <span className="text-accent">75%</span>
              </div>
              <div className="h-2 bg-background rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '75%' }}
                  className="h-full bg-accent"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Novos Leads</span>
                <span className="text-primary-light">90%</span>
              </div>
              <div className="h-2 bg-background rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '90%' }}
                  className="h-full bg-primary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
