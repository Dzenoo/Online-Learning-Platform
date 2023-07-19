export interface CartItemProps {
  id: string;
  image: string;
  title: string;
  instructor: string;
  language: string;
  price: number;
  duration: string;
  lectures: number;
  skillLevel: string;
}

export interface CartListProps {
  cartCourses: CartItemProps[];
}
