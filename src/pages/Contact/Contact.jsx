import "./Contact.scss";

const Contact = () => {
    return ( 
        <>
            <div className="page">
                <h1>Des questions ?</h1>
                <div className="contact-link">
                    <h2>Contactez-nous aux adresses suivantes !</h2>
                    <div className="contact-items">
                        <div className="contact-item">
                            <span>Téléphone: </span> 
                            <a href="tel:0476445134">
                                0476 44 51 34
                            </a>
                        </div>
                        <div className="contact-item">
                            <span>Email: </span> 
                            <a href="mailto:contact@comicsworld.com">
                                contact@comicsworld.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Contact;