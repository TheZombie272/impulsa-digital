import { Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { WebService } from '../types';

type WebServiceCardProps = {
  service: WebService;
  delayMs: number;
};

const WebServiceCard = ({ service, delayMs }: WebServiceCardProps) => {
  return (
    <Card
      className="animate-in fade-in slide-in-from-bottom-4 duration-700 transform-gpu overflow-hidden bg-white/5 border border-white/20 backdrop-blur-sm transition-all ease-out hover:shadow-xl md:hover:scale-[1.02] md:hover:-translate-y-1 active:scale-[0.99]"
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <CardHeader className="pb-3">
        <div className="flex flex-wrap items-center gap-2 justify-between">
          <CardTitle className="text-base text-white">{service.name}</CardTitle>
          <Badge className={`bg-gradient-to-r ${service.badgeGradient} text-white text-xs`}>{service.price}</Badge>
        </div>
        <CardDescription className="text-xs">{service.priceNote}</CardDescription>
        {service.maintenance && <p className="text-xs text-amber-300 mt-1">{service.maintenance}</p>}
      </CardHeader>
      <CardContent className="pt-0 space-y-3">
        <div>
          <p className="text-xs font-semibold text-white mb-2">Incluye:</p>
          <ul className="space-y-1">
            {service.includes.map((item, itemIndex) => (
              <li key={itemIndex} className="text-xs text-white/80 flex items-start">
                <Check className="w-3.5 h-3.5 text-white mr-2 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-2 border-t border-white/10">
          <p className="text-xs font-semibold text-white mb-2">No incluye:</p>
          <ul className="space-y-1">
            {service.notIncludes.map((item, itemIndex) => (
              <li key={itemIndex} className="text-xs text-white/75 flex items-start">
                <span className="mr-2 mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-2 border-t border-white/10">
          <p className="text-xs font-semibold text-white mb-1">Ideal para:</p>
          <p className="text-xs text-white/80">{service.idealFor}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default WebServiceCard;
