import React from "react";
import {
    MDBCol, MDBContainer,
    MDBRow,
} from 'mdbreact';
import ACDJNavbar from "../components/ACDJNavbar";
import ACDJFooter from "../components/ACDJFooter";

const ForumPage = () => {
    return (
        <div>
            <header>
                <ACDJNavbar homepage={false}/>
            </header>
            <main style={{ marginTop: '5rem' }}>
                <MDBContainer>
                    <h2 className="text-center mb-3">Forum</h2>
                    <section className="mt-5 wow fadeIn">
                        <MDBRow>
                            <MDBCol md="6" className="mb-4">
                                <p>Nous avons au moins un moyen performant pour communiquer ensemble grâce à <b>Discord</b>.</p>
                                <p>Rien de mieux qu'un outil adapté à cet effet. Toute le monde n'apprécie pas forcément Facebook donc nous avons pris le parti
                                    d'utiliser cet outil qui reste neutre et complet.</p>
                            </MDBCol>
                            <MDBCol md="6" className="mb-4">
                                <iframe src="https://discordapp.com/widget?id=540809716042039298&theme=dark" width="350"
                                        height="380" allowTransparency="true" frameBorder="0" title={"Discord"} />
                            </MDBCol>
                        </MDBRow>
                    </section>
                </MDBContainer>
            </main>
            <footer>
                <ACDJFooter/>
            </footer>
        </div>
    );
}

export default ForumPage;
