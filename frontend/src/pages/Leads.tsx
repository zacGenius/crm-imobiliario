import { useQuery } from '@tanstack/react-query';
import api from '../lib/api';
import { motion } from 'framer-motion';
import { Plus, Search, Filter, MoreVertical } from 'lucide-react';

const columns = [
  { id: 'NEW', label: 'Novos' },
  { id: 'CONTACTED', label: 'Em Contato' },
  { id: 'QUALIFIED', label: 'Qualificados' },
  { id: 'NEGOTIATION', label: 'Negociação' },
];

export function Leads() {
  const { data: leads, isLoading } = useQuery({
    queryKey: ['leads'],
    queryFn: async () => {
      const { data } = await api.get('/leads');
      return data;
    },
  });

  if (isLoading) return <div className="text-accent">Carregando leads...</div>;

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-white">Gestão de Leads</h2>
          <p className="text-gray-400">Acompanhe seu funil de vendas</p>
        </div>
        <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-lg shadow-primary/20">
          <Plus size={20} />
          Novo Lead
        </button>
      </div>

      <div className="flex gap-4 bg-surface p-4 rounded-xl border border-primary/10">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          <input 
            type="text" 
            placeholder="Buscar leads..." 
            className="w-full bg-background border border-primary/10 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-accent/50 transition-colors"
          />
        </div>
        <button className="px-4 py-2 border border-primary/10 rounded-lg text-sm text-gray-400 hover:bg-primary/5 transition-colors flex items-center gap-2">
          <Filter size={18} />
          Filtros
        </button>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-4 min-h-[600px]">
        {columns.map((column) => (
          <div key={column.id} className="flex-shrink-0 w-80">
            <div className="flex items-center justify-between mb-4 px-2">
              <h3 className="font-bold text-white flex items-center gap-2">
                {column.label}
                <span className="text-xs bg-primary/20 text-primary-light px-2 py-0.5 rounded-full">
                  {leads?.filter((l: any) => l.status === column.id).length || 0}
                </span>
              </h3>
            </div>
            
            <div className="space-y-4">
              {leads?.filter((l: any) => l.status === column.id).map((lead: any) => (
                <motion.div
                  key={lead.id}
                  layoutId={lead.id}
                  whileHover={{ scale: 1.02 }}
                  className="bg-surface p-4 rounded-xl border border-primary/10 hover:border-accent/30 transition-colors cursor-pointer group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      lead.temperature === 'HOT' ? 'bg-red-500/10 text-red-400' :
                      lead.temperature === 'WARM' ? 'bg-orange-500/10 text-orange-400' :
                      'bg-blue-500/10 text-blue-400'
                    }`}>
                      {lead.temperature}
                    </span>
                    <button className="text-gray-600 hover:text-white transition-colors">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                  <h4 className="text-white font-medium mb-1">{lead.name}</h4>
                  <p className="text-xs text-gray-500 mb-3">{lead.source}</p>
                  <div className="flex justify-between items-center pt-3 border-t border-primary/5">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-[10px] text-accent font-bold">
                        {lead.broker?.name?.substring(0, 2).toUpperCase() || '??'}
                      </div>
                      <span className="text-[10px] text-gray-400">{lead.broker?.name || 'Sem corretor'}</span>
                    </div>
                    <div className="text-[10px] font-bold text-accent">
                      Score: {lead.score}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
