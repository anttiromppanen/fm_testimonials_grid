import danielImg from "../../assets/images/image-daniel.jpg";
import TestimonialItem from "./TestimonialItem"

function TestimonialsGrid() {
  return (
    <div className="grid w-full gap-8 lg:grid-cols-4">
      <TestimonialItem variant={TestimonialItem.variant.FIRST}>
        <div className="flex items-center gap-x-4">
          <img src={danielImg} alt="" className="w-8 h-8 rounded-full" />
          <div>
            <p>Daniel Clifford</p>
            <p className="-mt-1">Verified Graduate</p>
          </div>
        </div>
        <div>
          <h1 className="text-userWhite text-xl font-semibold">
            I received a job offer mid-course, and the subjects I learned were current, if not more so, 
            in the company I joined. I honestly feel I got every penny’s worth.
          </h1>
          <p>
            “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a 
            transition and have heard some people who had an amazing experience here. I signed up 
            for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
            The next 12 weeks was the best - and most grueling - time of my life. Since completing 
            the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”
          </p>
        </div>
      </TestimonialItem>
      <TestimonialItem variant={TestimonialItem.variant.SECOND}>
        <h1>test</h1>
      </TestimonialItem>
      <TestimonialItem variant={TestimonialItem.variant.THIRD}>
        <h1>test</h1>
      </TestimonialItem>
      <TestimonialItem variant={TestimonialItem.variant.FOURTH}>
        <h1>test</h1>
      </TestimonialItem>
      <TestimonialItem variant={TestimonialItem.variant.FIFTH}>
        <h1>test</h1>
      </TestimonialItem>
    </div>
  )
}

export default TestimonialsGrid;