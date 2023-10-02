import TextSection from "./TextSection";
import AuthorBar from "./AuthorBar";
import danielImg from "../../assets/images/image-daniel.jpg";
import jonathanImg from "../../assets/images/image-jonathan.jpg";
import jeanetteImg from "../../assets/images/image-jeanette.jpg";
import patrickImg from "../../assets/images/image-patrick.jpg";
import kiraImg from "../../assets/images/image-kira.jpg";
import TestimonialItem from "./TestimonialItem";

function TestimonialsGrid() {
  return (
    <div className="mt-16 grid w-full gap-8 lg:grid-cols-4">
      <TestimonialItem variant={TestimonialItem.variant.FIRST}>
        <AuthorBar
          authorImg={danielImg}
          author="Daniel Clifford"
          verified="Verified Graduate"
        />
        <TextSection
          heading="
            I received a job offer mid-course, and the subjects I learned were
            current, if not more so, in the company I joined. I honestly feel I
            got every penny’s worth."
          text="
            “ I was an EMT for many years before I joined the bootcamp. I’ve been
            looking to make a transition and have heard some people who had an
            amazing experience here. I signed up for the free intro course and found
            it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was
            the best - and most grueling - time of my life. Since completing the
            course, I’ve successfully switched careers, working as a Software
            Engineer at a VR startup. ”"
        />
      </TestimonialItem>
      <TestimonialItem variant={TestimonialItem.variant.SECOND}>
        <AuthorBar
          authorImg={jonathanImg}
          author="Jonathan Walters"
          verified="Verified Graduate"
        />
        <TextSection
          heading="The team was very supportive and kept me motivated"
          text="
            “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
            for a big company. This was one of the best investments I’ve made in myself. ”"
        />
      </TestimonialItem>
      <TestimonialItem variant={TestimonialItem.variant.THIRD}>
        <AuthorBar
          authorImg={jeanetteImg}
          author="Jeanette Harman"
          verified="Verified Graduate"
        />
        <TextSection
          heading="An overall wonderful and rewarding experience"
          text="
            “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living 
            while doing something I love. ” "
        />
      </TestimonialItem>
      <TestimonialItem variant={TestimonialItem.variant.FOURTH}>
        <AuthorBar
          authorImg={patrickImg}
          author="Patrick Abrams"
          verified="Verified Graduate"
        />
        <TextSection
          heading="
          Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance 
          from them and learning from their experiences was easy."
          text="
          “ The staff seem genuinely concerned about my progress which I find really refreshing. The program 
            gave me the confidence necessary to be able to go out in the world and present myself as a capable 
            junior developer. The standard is above the rest. You will get the personal attention you need from 
            an incredible community of smart and amazing people. ”"
        />
      </TestimonialItem>
      <TestimonialItem variant={TestimonialItem.variant.FIFTH}>
        <AuthorBar
          authorImg={kiraImg}
          author="Kira Whittle"
          verified="Verified Graduate"
        />
        <TextSection
          heading="Such a life-changing experience. Highly recommended!"
          text="
            “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from 
              professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
              student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
              did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
              project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
              could ever have. In fact, I’ve often referred to it during interviews as an example of my developent 
              experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
              100% recommend! ”"
        />
      </TestimonialItem>
    </div>
  );
}

export default TestimonialsGrid;
