import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { SIDEBAR_ITEMS } from "../../../constants/sidebarConstants";
import { useSelector, useDispatch } from "react-redux";
import { selectIsOpen } from "../../../store/selectors";
import { toggle } from "../../../store/handlingOpenClose/hadleOpenClose";

export default function Sidebar() {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsOpen);

  return (
    <motion.div
      initial={{ width: 256 }}
      animate={{ width: isOpen ? 256 : 80 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="h-screen bg-[#09090b] border-r border-[#27272a] flex flex-col p-4 relative shrink-0 sticky top-0"
      style={{ position: "sticky" }}
    >
      <button
        onClick={() => dispatch(toggle())}
        className="absolute -right-3 top-6 bg-[#27272a] text-white p-1 rounded-full border border-[#3f3f46] hover:bg-[#3f3f46] transition-colors z-50"
      >
        {isOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
      </button>

      <div className="flex items-center gap-3 mb-8 px-1">
        <div className="min-w-[2rem] h-8 bg-white/10 rounded-lg flex items-center justify-center text-white">
          <LayoutDashboard size={20} />
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.h1
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="text-white text-lg font-semibold whitespace-nowrap overflow-hidden"
            >
              Dashboard
            </motion.h1>
          )}
        </AnimatePresence>
      </div>

      <nav className="flex flex-col gap-2">
        {SIDEBAR_ITEMS.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`relative flex items-center gap-4 px-3 py-2.5 rounded-lg transition-colors overflow-hidden whitespace-nowrap
                ${
                  isActive
                    ? "bg-[#27272a] text-white"
                    : "text-[#a1a1aa] hover:bg-[#27272a] hover:text-white"
                }
              `}
            >
              {/* Active Left Border */}
              {isActive && (
                <motion.div
                  layoutId="activeBorder"
                  className="absolute left-0 top-0 h-full w-1 bg-white rounded-r-lg"
                />
              )}

              <item.icon size={20} className="min-w-[20px]" />

              <AnimatePresence>
                {isOpen && (
                  <motion.span
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -5 }}
                    transition={{ delay: 0.05 }}
                  >
                    {item.name}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-4 border-t border-[#27272a]">
        <button className="w-full cursor-pointer flex items-center gap-4 px-3 py-2 text-[#EF4444] hover:bg-[#27272a] rounded-lg transition-colors overflow-hidden whitespace-nowrap">
          <LogOut size={20} className="min-w-[20px]" />
          <AnimatePresence>
            {isOpen && (
              <motion.span
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -5 }}
              >
                Logout
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </motion.div>
  );
}
