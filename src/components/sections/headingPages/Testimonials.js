import Carousel from './TestimonialCarousel'
import TestimonialCard from './CardInfo/TestimonialCard';
export default function Testimonials() {
    return (
        <section className="testimonials">
            <article className="testimonials-topbar">
                    <h1>Testimonials</h1>
            </article>


            <section className="testimonials-cards">
            <TestimonialCard name="Parthasarathy" description="This is the best Mediterranean food that I've ever had!"/>
            <TestimonialCard name="Manikandan" description="Really loved the cozy vibes and 
                delicious food here."/>
            <TestimonialCard name="Ridwan" description="I've had some great Mediterranean food before, but none of them beats
             Little Delight in flavor and texture."/>
            <TestimonialCard name="Utkarsh" description="Great food, welcoming staff, cozy atmosphere. A great place to 
                treat your kids to."/>
            <TestimonialCard name="Raj Kannan" description="The food here really refreshed me after a late night shift
                at the local supply depot."/>
            <TestimonialCard name="Karthick" description="I came to Little Delight after a 5 hour flight from the East Coast.
                 The food here tasted so delicious after the trip here."/>
            <TestimonialCard name="Idris" description="The food here was fire!! Everyone should try this place
                 out at least once if they live in Chennai."/>
            <TestimonialCard name="Kamal" description="This restaurant served as a perfect dinner for me after a 
                long night of studying. I would definitely order from here again!"/>
            </section>

            <section className="testimonials-carousel">
                <Carousel />
            </section>
        </section>
    );
}