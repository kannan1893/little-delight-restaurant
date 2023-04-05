import {Link} from 'react-router-dom';
export default function Heading() {
    return (
        <header>
            <article className="call-to-action">
                <section className="hero-text">
                    <h1>Little Delight</h1>
                    <h2>Chennai</h2>
                    <p className="subsection">We are a family owned international restaurant, located on  XXX Street in Chennai, Tamilnadu. We focus
                    on traditional recipes served with a modern twist.</p>
                    <br></br>
                    <Link className="action-button" to="/reservations">Reserve a table</Link>
                </section>

                <section className="hero-image">
                    <img src={require('../../../assets/food/food1.png')} alt="Little Delight restaurant cuisine"></img>
                </section>
            </article>
      </header>
    );
}