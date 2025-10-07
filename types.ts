
export interface Metric {
  label: string;
  value: string;
}

export interface Link {
  text: string;
  url: string;
}

export interface Action {
  title: string;
  description: string;
  metrics: Metric[];
  links?: Link[];
}

export interface Phase {
  id: number;
  title: string;
  duration: string;
  objective: string;
  actions: Action[];
  icon: React.ComponentType<{ className?: string }>;
}
