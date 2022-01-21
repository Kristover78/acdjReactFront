import React from "react";
import ACDJNavbar from "../components/acdjNavbar";
import ACDJFooter from "../components/acdjFooter";

const ReleasePage = () => {
    return (
        <div>
            <header>
                <ACDJNavbar homepage={false}/>
            </header>
            <main style={{ marginTop: '5rem' }}>
                    <section>
                            <div className="p-grid">
                                <div className="p-offset-2 p-col-8">
                                <h1>VERSIONS ET ROADMAP DU SITE</h1>
                                <h2>Roadmap :</h2>
                                <ol>
                                    <li>Technique: Migration du site JSF -&gt; React.js (<strike>MDB</strike> => PrimeReact) <span style={{color: "red"}}>(60%)</span></li>
                                    <li>Technique: Migration en microservice (Rest+Thorntail+Microprofile)</li>
                                        <ul>

                                            <li>UserService (profile) <span style={{color: "red"}}>(50%)</span></li>
                                            <li>ContentService (informations) <span style={{color: "red"}}>(30%)</span></li>
                                        </ul>
                                    <li>Technique: Authentification avec Auth0</li>
                                    <li>Envoi de SMS</li>
                                    <li>Gestionnaire de Tournoi (arbre horizontale + poules)</li>
                                    <li>Gestionnaire de Ligue (ladder)</li>
                                    <li>Organisateur de soirée avec disponibilité des gens (Doodle like)</li>
                                    <li>Architecture CQRS / Event sourcing <span style={{color: "red"}}>(100%)</span></li>
                                    <li>Technique: Déploiement par conteneurisation (Docker) <span style={{color: "red"}}>(100%)</span></li>
                                    <li>Technique: Migration jdk 8 -&gt; jdk 14 <span style={{color: "red"}}>(100%)</span></li>
                                    <li><span style={{textDecoration: "line-through"}}>Technique: Upgrade Wildfly (10.1.0 -&gt; 15.0.1)</span></li>
                                    <li><span style={{textDecoration: "line-through"}}>Technique: Upgrade JSF (2.2 -&gt; 2.3)</span></li>
                                </ol>
                                <h2>Suivi des versions :</h2>
                                <h4>v3.1.0 - 11/12/2021</h4>
                                    <ul>
                                        <li>Ajout de la page Ludothèque. Actuellement le site est statique. Tous les articles sont hardcodés en attendant la finalisation des microservices.</li>
                                    </ul>
                                <h4>v3.0.0 - 21/03/2021</h4>
                                <ul>
                                    <li>Réinitialisation du site en React js (<strike>MDB</strike> => PrimeReact) suite à un incendie survenue le 11/03/2021 chez OVH</li>
                                </ul>
                                <h4>v2.9.1 - 12/11/2019</h4>
                                <ul>
                                    <li>Fix: Diverses corrections d&apos;affichage sur Smartphone</li>
                                </ul>
                                <h4>v2.9.0 - 12/08/2019</h4>
                                <ul>
                                    <li>Fix: modification du clientId paiement Paypal.</li>
                                </ul>
                                <h4>v2.8.2 - 22/04/2019</h4>
                                <ul>
                                    <li>Fix: Correction sur la création impossible de jeu dans la Ludothèque.</li>
                                    <li>Fix: Correction sur divers icones (font awesome).</li>
                                    <li>Fix: Correction sur la gestion de la ludothèque.</li>
                                    <li>New!: Ajout des commentaires sur l&apos;onglet Seance.</li>
                                </ul>
                                <h4>v2.8.1 - 06/02/2019</h4>
                                <ul>
                                    <li>Fix: Adhésion - Finalisation des moyens de paiements (Paypal, Carte Bancaire, Chèque)</li>
                                    <li>Update: Page Keyforge, ajout de la gestion du numéro de saison.</li>
                                    <li>New!: Footer, ajout icone Discord + lien.</li>
                                    <li>Fix: Stabilitsation de la fonction de Notification.</li>
                                </ul>
                                <h4>v2.8.0 - 31/01/2019</h4>
                                <ul>
                                    <li>Fix: Correction d&apos;un problème d'inscription sur la page Keyforge (Compétition)</li>
                                    <li>Update: Divers améliorations cosmétiques</li>
                                </ul>
                                <h4>v2.7.3 - 29/01/2019</h4>
                                <ul>
                                    <li>Update: changement image background</li>
                                    <li>Update: Désactivation de l&apos;animation d'hivers (flocons)</li>
                                    <li>Technique: Versionning Git de toute l'infrastructure</li>
                                </ul>
                                <h4>v2.7.2 - 01/12/2018</h4>
                                <ul>
                                    <li>New!: Page Compétition : Ajout de la Ligue Keyforge</li>
                                    <li>Fix: Notifications Chrome</li>
                                    <li>Fix: Page Profil : Stabilisation paiement Paypal</li>
                                </ul>
                                <h4>v2.7.1 - 20/11/2018</h4>
                                <ul>
                                    <li>New!: Notifications Chrome</li>
                                    <li>New!: Page Profil : Adhésion à la saison via paiement Paypal</li>
                                    <li>Update: Activation de l'animation d'hivers (flocons)</li>
                                    <li>Fix: Correction de la page de gestion Ludothèque</li>
                                </ul>
                                <h4>v2.7.0 - 11/11/2018</h4>
                                <ul>
                                    <li>New!: Ajout d'une page publique Ludothèque</li>
                                    <li>New!: Ajout de commentaires temporaires pour les jeux plannifiés pour la prochaine séance (adhérents)</li>
                                    <li>New!: Page Profil : Ajout d'un fonctionnalité d'adhésion à la saison (chèques)</li>
                                    <li>Fix!: La gestion de ludothèque ne permettait pas de créer automatiquement une rubrique dédiée au jeu édité. Corrigé.</li>
                                    <li>Fix!: Correction d'affichage du tableau de planning.</li>
                                </ul>
                                <h4>v2.6.1 - 17/10/2018</h4>
                                <ul>
                                    <li>New!: Page Profil : Ajout d'un bouton d'adhésion pour cette année</li>
                                    <li>Update!: Page Forum : Finalisation de la recherche</li>
                                    <li>New!: Page Forum : Nouveau bouton d'ajout d'une rubrique dans le forum (administrateur uniquement)</li>
                                </ul>
                                <h4>v2.6.0 - 25/09/2018</h4>
                                <ul>
                                    <li>Fix: Amélioration de la sécurité (des robots ont réussi à insérer des rubriques dans le forum en juillet !)</li>
                                    <li>New!: Ajout des notifications par mail lors d'une réponse dans une rubrique du Forum</li>
                                    <li>New!: Page Profil : Séparation dans un onglet à part des options personnalisées (notifications, nickname,...)</li>
                                    <li>New!: Ajout d'une fonctionnalité de validation par les administrateurs des messages postés sur le forum + notification de rappel par batch</li>
                                    <li>New!: Gestion de la video. Possibilité d'ajouter une vidéo à une news (url externe).</li>
                                    <li>Fix: En période charnière (été) la page News affiche très peu d'article suite à la bascule automatique sur la nouvelle saison. Ajout de la saison précédente dans la liste des saisons par défaut.</li>
                                    <li>New!: Démarrage d'un chantier de recherche textuelle sur le forum.</li>
                                    <li>New!: Page profil, ajout d'une fonction d'adhésion à l'associaiton</li>
                                </ul>
                                <h4>v2.5.4 - 09/06/2018</h4>
                                <ul>
                                    <li>Fix: Réactivation du Forum</li>
                                </ul>
                                <h4>v2.5.3 - 28/05/2018</h4>
                                <ul>
                                    <li>New!: Mise en place de la RGPD</li>
                                </ul>
                                <h4>v2.5.2 - 01/05/2018</h4>
                                <ul>
                                    <li>Fix: Corrections mineures (ordre d'affichage, envoi de mails...)</li>
                                </ul>
                                <h4>v2.5.1 - 02/04/2018</h4>
                                <ul>
                                    <li>Fix: Corrections mineures (bug suite connexion, ludotheque, page profil, géolocalisation, ...)</li>
                                </ul>
                                <h4>v2.5.0 - 31/12/2017</h4>
                                <ul>
                                    <li>New!: Nouvelle année 2018, alors new look :-)</li>
                                    <li>Tech: passage d'un repository Subversion à Git</li>
                                    <li>New!: Gestion des adhésions par saison</li>
                                    <li>New!: Pour les adhérents: Possibilité de rédiger une publication</li>
                                    <li>New!: Gestion des évènements récurrents (+batch)</li>
                                    <li>New!: Processus de connexion revu via une nouvelle page</li>
                                    <li>New!: Connexion Facebook</li>
                                    <li>New!: Processus de modification du mot de passe revu.</li>
                                    <li>New!: Pour les adhérents: ajout des Comptes associatifs (pdf)</li>
                                    <li>New!: Possibilité d'uploader aussi des png (image de jeu, photos, logos)</li>
                                    <li>New!: Mise en place de notifications optionnelles par mail (invitation nouvelle séance)</li>
                                    <li>New!: Mise en place des markers Google Map de localisation</li>
                                    <li>New!: Export possible du planning des séances (PDF/Excel)</li>
                                    <li>Fix: Stabilisattion des principales fonctionnalités (commentaires page index, upload d'un logo de profil, popup questionnaire cookies,...)</li>
                                </ul>

                                <h4>v2.4.2 - 12/06/2017</h4>
                                <ul>
                                    <li>New!: Nouvelle fonctionnalité de tchat circulaire (20 derniers messages toujours affichés). La déconnexion sauvage n'est pas encore traitée = fermeture onglet.</li>
                                    <li>Fix: Réactivation des envois SMTP qui avaient été désactivés à tort (envoi de mails)</li>
                                </ul>
                                <h4>v2.4.1 - 23/05/2017</h4>
                                <ul>
                                    <li>New!: Bascule en https pour amélioration de l'indexation Google</li>
                                    <li>New!: Ajout d'une page Liste des Adhérents uniquement accessible pour les adhérents.</li>
                                    <li>Fix: Divers améliorations cosmétiques pour faciliter la navigation sur smartphone (boutons de connexion)</li>
                                </ul>
                                <h4>v2.4.0 - 07/02/2017</h4>
                                <ul>
                                    <li> Fix: Page index. Correction popup d'affichage des photos</li>
                                    <li> Fix: Page d'enregistrement. Correction du processus d'inscription.</li>
                                    <li> Fix: Page Profil. L'enregistrement était impossible. Corrigé.</li>
                                    <li> New! Petits changements cosmétiques</li>
                                </ul>
                                <h4>v2.3.2 - 01/01/2017</h4>
                                <ul>
                                    <li> New! Onglet Ludotheque - Ajout d'un filtre de recherche</li>
                                    <li> New! Ajout d'une fonctionnalité de rappel automatique par email (batch) des adhérents se proposant de ramener des jeux. Rappel avant une séance.</li>
                                    <li> New! Ajout d'un résumé des 3 derniers messages du Forum. Changements Cosmétiques.</li>
                                    <li> Fix: Page gestion Evenements - Corrections diverses</li>
                                </ul>
                                <h4>v2.3.1 - 10/12/2016</h4>
                                <ul>
                                    <li> Fix: Page gestion Ludothèque - Correction sur la sauvegarde de l'option "Jeu dans l'armoire"</li>
                                    <li> Fix: Page Profil - Suppression de la gestion individualisée du stockage des jeux dans l'armoire.</li>
                                    <li> Fix: Onglet Ludotheque - Désormais tous les jeux sont affichés. Révision de l'iconographie. Ajout d'un icone Aucun propriétaire du jeu.</li>
                                </ul>
                                <h4>v2.3.0 - 08/12/2016</h4>
                                <ul>
                                    <li> New! Mise en place d'une fonction Forum (mode basique).</li>
                                    <li> New! Onglet Ludothèque - Re-design de l'onglet.</li>
                                    <li> Fix: Onglet Contact - La google Map ne s'affichait pas. Corrigé.</li>
                                    <li> Fix: Page gestion Ludothèque - Ajout d'un paramètre url externe Règle de jeu</li>
                                    <li> Fix: Page gestion Ludothèque - Ajout d'un paramètre jeu stocké dans l'armoire de l'association</li>
                                    <li> Fix: Page Profil - Rien ne se passait en cliquant sur le bouton 'Je m'enregistre'. Corrigé</li>
                                    <li> Fix: Page Profil - Réactivation de la fonction Logo (+découpage d'image).</li>
                                </ul>
                                <h4>v2.2.2 - 07/09/2016</h4>
                                <ul>
                                    <li> Fix: Désactivation temporaire de la fonction crop (logo du joueur)</li>
                                </ul>

                                <h4>v2.2.1 - 01/09/2016</h4>
                                <ul>
                                    <li> Fix: Stabilisation de la version (page d'enregistrement, page release, ...)</li>
                                </ul>

                                <h4>v2.2.0 - 18/08/2016</h4>
                                <ul>
                                    <li> New! Nouvelle saison 2016-2017</li>
                                    <li> New! Réactivation de la liste de discussion</li>
                                    <li> New! Ajout de l'upload des règles de jeux en PDF+affichage dans l'onglet Ludothèque</li>
                                    <li> New! Affichage d'une armoire dans l'onglet Ludothèque pour les jeux stockés.</li>
                                    <li> Fix: La fonction de découpe d'image (Logo) réduisait en hauteur. Corrigé.</li>
                                    <li> New! Démarrage de l'implémentation d'un onglet forum - EN COURS</li>
                                    <li> New! Démarrage de l'implémentation d'une fonctionnalité de planification d'une table/partie - EN COURS</li>
                                    <li> Tech: Gestion des onglets de la page Index en mode dynamique.</li>
                                </ul>

                                <h4>v2.1.0 - 07/06/2016</h4>
                                <ul>
                                    <li> New! Nouvelle fonctionnalité basique de commentaires sur l'onglet Evènements</li>
                                    <li> New! Nouvelle fonctionnalité de logo utilisateur sur la page Profil, avec rognage (crop)</li>
                                    <li> New! Nouvelle fonctionnalité 'Armoire' ; Marquage des jeux possédés et déposé dans l'armoire associative</li>
                                    <li> New! Nouvelle page traçant les corrections</li>
                                    <li> Fix: Correction de comportement responsive sur la page Index (tout se bloque)</li>
                                    <li> Fix: Correction pb sauvegarde adresse (suppression table user_spot)</li>
                                    <li> Fix: Correction sur l'impossibilité qu'un administrateur définisse comme ADMIN un autre utilisateur.</li>
                                </ul>
                                <h4>v2.0.2 - 15/03/2016</h4>
                                <ul>
                                    <li> Fix: Correction workflow de validation</li>
                                </ul>
                                <h4>v2.0.0 - 10/12/2015</h4>
                                <ul>
                                    <li> New! Réécriture complète du site</li>
                                </ul>
                                </div>
                            </div>
                    </section>
            </main>
            <footer>
                <ACDJFooter/>
            </footer>
        </div>
    );
}

export default ReleasePage;
