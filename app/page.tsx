"use client";

import {
  AfterHero,
  Categories,
  FeaturedCourses,
  Hero,
} from "@/components/landing";
import useSwr from "swr";
import { getAuthData } from "@/utility/helpers";

function LandingPage() {
  const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json());
  const { data: coursesData } = useSwr("/api/courses", fetcher);

  return (
    <section>
      <Hero />
      <AfterHero />
      <Categories />
      <FeaturedCourses courses={coursesData} />
    </section>
  );
}
export default LandingPage;
