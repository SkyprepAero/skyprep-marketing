import { BsAirplaneEnginesFill } from 'react-icons/bs';
import { 
  FaPlane, 
  FaMoon, 
  FaGlobeAmericas,
  FaChartLine,
  FaEye
} from 'react-icons/fa';

export interface DGCARequirement {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const dgcaRequirements: DGCARequirement[] = [
  {
    id: "pic",
    title: "100 HOURS PILOT IN COMMAND (PIC)",
    icon: FaPlane
  },
  {
    id: "instrument",
    title: "40 HOURS INSTRUMENT FLYING",
    icon: FaEye
  },
  {
    id: "night-flying",
    title: "10 HOURS NIGHT FLYING",
    icon: FaMoon
  },
  {
    id: "solo-cross-country",
    title: "50 HOURS SOLO CROSS COUNTRY",
    icon: FaGlobeAmericas
  },
  {
    id: "multi-engine",
    title: "15 HOURS MULTI ENGINE",
    icon: BsAirplaneEnginesFill
  },
  {
    id: "total-flight-time",
    title: "200 HOURS TOTAL FLIGHT TIME",
    icon: FaChartLine
  }
];
