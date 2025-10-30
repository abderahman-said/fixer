import { LogoCircle } from "./LogoCircle";
import { TestimonialContent } from "./TestimonialContent";
import { AuthorInfo } from "./AuthorInfo";

export function TestimonialCard({ testimonial }) {
  return (
    <>
      <LogoCircle logo={testimonial.logo} icon={testimonial.icon} />

      <TestimonialContent quote={testimonial.quote} />

      <AuthorInfo author={testimonial.author} position={testimonial.position} />
    </>
  );
}
