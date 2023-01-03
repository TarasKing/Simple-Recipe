import React from "react";
import Layout from "../components/Layout";

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              Hashtag meditation scenester hexagon tumblr post-ironic.
              Succulents butcher kombucha, tumblr four loko forage dreamcatcher
              chillwave kitsch cloud bread same.
            </p>
            <p>
              Aesthetic church-key activated charcoal portland tofu disrupt.
              PBR&B beard cornhole four loko taxidermy, sartorial jean shorts
              slow-carb af cold-pressed try-hard kinfolk.
            </p>
            <p>
              {" "}
              Kickstarter readymade locavore, snackwave 8-bit tilde godard.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message"></label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  );
};

export default Contact;
