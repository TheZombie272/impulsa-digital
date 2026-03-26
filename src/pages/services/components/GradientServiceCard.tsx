import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { DetailedService } from '../types';

type GradientServiceCardProps = {
  service: DetailedService;
  delayMs: number;
};

const GradientServiceCard = ({ service, delayMs }: GradientServiceCardProps) => {
  return (
    <Card
      className="animate-in fade-in slide-in-from-bottom-4 duration-700 transform-gpu overflow-hidden bg-white/5 border border-white/20 backdrop-blur-sm transition-all ease-out hover:shadow-xl md:hover:scale-[1.02] md:hover:-translate-y-1 active:scale-[0.99]"
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-white/10 text-white border border-white/20">{service.icon}</div>
          <CardTitle className="text-sm text-white">{service.category}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="space-y-2 mb-3">
          {service.options.map((option, idx) => (
            <li key={idx} className="flex justify-between items-center text-xs">
              <span className="text-white/80">{option.description}</span>
              <Badge className={`bg-gradient-to-r ${service.badgeGradient} text-white text-xs`}>{option.price}</Badge>
            </li>
          ))}
        </ul>
        {service.includes && <p className="text-xs text-white/70 pt-2 border-t border-white/10">{service.includes}</p>}
      </CardContent>
    </Card>
  );
};

export default GradientServiceCard;
