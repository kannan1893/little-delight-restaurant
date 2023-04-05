export default function About() {
    return (
        <article className="about-us">
            <section className="hero-text">
                <h1>Little Delight</h1>
                <h2>Chennai</h2>
                <p className="about-subtext">Little Delight opened in 2015 by two brothers, Kannan and Balaji. 
                Despite the city's diversity, the two brothers recognized the lack of international cuisine in Chennai, 
                and were inspired to bring the flavors to the people of Chennai. The two brothers 
                continue to oversee the Little Delight restaurant, nearly seven years later.</p>
            </section>

            <section className="double-image">
                <img className="about-1" src={require('../../../assets/food/food3.jpeg')} alt="Little Delight restaurant cuisine 1"></img>
                <img className="about-2" src={require('../../../assets/food/food2.jpeg')} alt="Little Delight restaurant cuisine 2"></img>
            </section>
    </article>
    );
}