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
                    <div className="p-offset-2 p-col-8">
                        <h2 className="p-mb-3">Forum</h2>
                        <section>
                            <div className="p-grid">
                                <div className="p-col-6">
                                        <p>Nous avons au moins un moyen performant pour communiquer ensemble grâce à <b>Discord</b>.</p>
                                        <p>Rien de mieux qu'un outil adapté à cet effet. Toute le monde n'apprécie pas forcément Facebook donc nous avons pris le parti
                                            d'utiliser cet outil qui reste neutre et complet.</p>
                                </div>
                                <div className="p-col-6">
                                        <iframe src="https://discordapp.com/widget?id=540809716042039298&theme=dark" width="350"
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
