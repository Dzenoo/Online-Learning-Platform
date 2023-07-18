import {
  AfterHero,
  Categories,
  FeaturedCourses,
  Hero,
} from "@/components/landingpage";

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
