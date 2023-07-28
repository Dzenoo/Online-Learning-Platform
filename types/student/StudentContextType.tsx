import { CartItemProps } from "../cart/CartTypes";
import { CourseCardProps } from "../courses/CourseInfoTypes";

export interface StudentContextType {
  studentData: {
    _id: string;
    cart: {
      items: CartItemProps[];
      totalAmount: number;
    };
    favorites: CourseCardProps[];
    courses: CourseCardProps[];
    first_name: string;
    last_name: string;
  };
  //   toggleCart: () => void;
  //   addToFavorites: () => void;
}
