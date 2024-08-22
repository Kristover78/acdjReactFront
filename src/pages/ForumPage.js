import React from "react";
import ACDJNavbar from "../components/acdjNavbar";
import ACDJFooter from "../components/acdjFooter";

const ForumPage = () => {
    return (
        <div>
            <header>
                <ACDJNavbar homepage={false}/>
            </header>
            <main style={{ marginTop: '4rem' }}>
                <div className="p-grid">
                    <div className="p-col-12 p-sm-offset-1 p-sm-10 p-md-offset-2 p-md-8 p-lg-offset-3 p-lg-6">
                        <h2 className="text-center p-mb-3">Forum</h2>
                        <section>
                            <div className="p-grid">
                                <div className="p-col-12 p-md-6">
                                    <p>Nous avons au moins un moyen performant pour communiquer ensemble grâce
                                        à <b>Discord</b>.</p>
                                    <p>Rien de mieux qu'un outil adapté à cet effet. Toute le monde n'apprécie pas
                                        forcément Facebook donc nous avons pris le parti
                                        d'utiliser cet outil qui reste neutre et complet.</p>
                                    <p>Pour nous rejoindre, il suffit de cliquer sur l'icone <i
                                        className="fab fa-discord"/> en bas de page et te laisser guider...
                                    </p>
                                    <p>A bientôt dans le salon 'Bar' ou 'chez-moi' par exemple ! :-)
                                    </p>
                                </div>
                                <div className="p-col-12 p-md-6">
                                    <iframe src="https://discordapp.com/widget?id=540809716042039298&theme=dark"
                                            width="350"
                                            height="380" allowTransparency="true" frameBorder="0" title={"Discord"} />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <footer>
                <ACDJFooter/>
            </footer>
        </div>
    );
}

export default ForumPage;
