import React from "react";
import { Button } from "./Button";
import './Footer.css'

function Footer(){
    return(
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscriptio-heading">
                    join our adventure newsletter to receive our best vaction
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            className="footer-input"
                        />
                        <Button
                            buttonStyle="btn--outline">Subcribe
                        </Button>
                    </form>
                </div>
            </section>
        </div>
    )
}
export default Footer;