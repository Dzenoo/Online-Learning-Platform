"use client";

import {
  AfterHero,
  Categories,
  FeaturedCourses,
  Hero,
} from "@/components/landing";
import { getAuthData } from "@/utility/helpers";

function LandingPage() {
  const authData = getAuthData();
  console.log(authData);

  return (
    <section>
      <Hero />
      <AfterHero />
      <Categories />
      <FeaturedCourses />
    </section>
  );
}
export default LandingPage;
