
export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SuccessStory {
  name: string;
  title: string;
  profit: string;
  description: string;
  image: string;
}
