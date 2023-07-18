import {
  AfterHero,
  Categories,
  FeaturedCourses,
  Hero,
} from "@/components/landing";

export default function LandingPage() {
  return (
    <section>
      <Hero />
      <AfterHero />
      <Categories />
      <FeaturedCourses />
    </section>
  );
}
