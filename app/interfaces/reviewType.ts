export interface ReviewType {
  id: number;
  first_name: string;
  last_name: string;
  text: string;
  rating: number;
  restaurant_id: number;
  user_id: number;
  created_at: Date;
  updated_at: Date;
}
