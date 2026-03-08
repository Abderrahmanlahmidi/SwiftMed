import { Loader2 } from 'lucide-react';

type Props = {}

const PageLoader = ({}: Props) => {
  return (
    <div className="min-h-screen bg-[#09090b] flex items-center justify-center">
      <div className="relative">
        <Loader2 
          size={48} 
          className="text-white animate-spin" 
        />
        <div className="absolute inset-0 border-2 border-[#27272a] rounded-full animate-ping opacity-20"></div>
      </div>
    </div>
  )
}

export default PageLoader;