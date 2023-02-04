export type Recommendation = {
  id: string;
  name: string;
  title: string;
  image: string;
  companyName: string;
  recommendation: string;
};
export type RecommendationsResponse = {
  title: string;
  description: string;
  recommendations: Recommendation[];
};
