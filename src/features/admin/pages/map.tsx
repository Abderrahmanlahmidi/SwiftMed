import { MapPin } from 'lucide-react';
import MapComponent from '../../../components/others/mapComponent';

export default function LocationMap() {

  const onSubmit = (data) => {
    console.log("create position:", data)
  }


  return (
    <div className="flex-1 p-8 bg-zinc-950 text-white min-h-screen">
      <h1 className="text-3xl font-extrabold mb-6 text-zinc-100 border-b border-zinc-800 pb-3 flex items-center gap-2">
        <MapPin size={32} className="text-blue-500" />
        Location Map
      </h1>

      

      {/* Map Container */}
      <div className="bg-zinc-800 rounded-lg border border-zinc-700 h-[80vh] relative overflow-hidden">
        <MapComponent/>
      </div>
    </div>
  );
} 