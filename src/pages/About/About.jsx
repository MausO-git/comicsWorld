import "./About.scss";

const Presentation = () => {
    return (
        <div className="page presentation-page">
            <section className="intro-box">
                <h1>Qui sommes-nous ?</h1>
                <div className="presentation">
                    <h2>Le QG des Fans de Comics</h2>
                    <p>
                        <strong>ComicsWorld</strong> est un projet né d'une passion pure pour le 9ème art. 
                        Notre mission est simple : offrir aux lecteurs une interface moderne pour explorer 
                        l'immensité du multivers Marvel.
                    </p>
                    <p>
                        Ici, on code avec la même rigueur que Tony Stark et on lit avec la curiosité 
                        de Peter Parker.
                    </p>
                    <p>
                        Ici, on code avec la même rigueur que Tony Stark et on lit avec la curiosité 
                        de Peter Parker. Par les fans, pour les fans.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Presentation;