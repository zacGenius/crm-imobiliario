import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export function Layout() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-x-hidden">
        <header className="h-16 border-b border-primary/10 bg-surface/50 backdrop-blur-md sticky top-0 z-10 px-8 flex items-center justify-between">
          <div className="text-sm text-gray-400">
            Bem-vindo ao seu painel de controle
          </div>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/50 flex items-center justify-center text-accent text-xs font-bold">
              AD
            </div>
          </div>
        </header>
        
        <div className="p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
