import { Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { MarketingService } from '../types';

type MarketingOverviewCardProps = {
  service: MarketingService;
  index: number;
  onMoreInfo: (serviceTitle: string) => void;
};

const MarketingOverviewCard = ({ service, index, onMoreInfo }: MarketingOverviewCardProps) => {
  return (
    <Card
      className="group animate-in fade-in slide-in-from-bottom-4 duration-700 transform-gpu bg-white/5 border border-white/20 hover:border-primary/40 backdrop-blur-sm transition-all ease-out hover:shadow-elegant md:hover:scale-[1.02] md:hover:-translate-y-1 active:scale-[0.99]"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
            {service.icon}
          </div>
        </div>
        <Badge variant="secondary" className="w-fit mx-auto mb-2">
          {service.category}
        </Badge>
        <CardTitle className="text-xl font-bold text-white">{service.title}</CardTitle>
        <CardDescription className="text-white/80">{service.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          {service.features.map((feature, featureIndex) => (
            <div key={featureIndex} className="flex items-center text-sm text-white/80">
              <Target className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
              {feature}
            </div>
          ))}
        </div>
        <div className="pt-4 border-t border-white/10">
          <p className="text-lg font-semibold text-primary mb-4">{service.price}</p>
          <Button
            variant="outline"
            className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
            onClick={() => onMoreInfo(service.title)}
          >
            Mas Informacion
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketingOverviewCard;
