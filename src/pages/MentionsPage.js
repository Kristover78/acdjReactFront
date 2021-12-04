import React from "react";
import ACDJNavbar from "../components/ACDJNavbar";
import ACDJFooter from "../components/ACDJFooter";
import '../assets/css/MentionsStyle.css';

const MentionsPage = () => {
    return (
        <div>
            <header>
                <ACDJNavbar homepage={false}/>
            </header>
            <main style={{ marginTop: '5rem' }}>
                    <p>Mentions Légales et Charte de Protection des Donnés Personnelles...</p>
                        <section>
                            <div className="p-grid">
                                <div className="p-offset-2 p-col-8">
                                <div className="mentions-legales">
                                    <h1>MENTIONS LÉGALES</h1>
                                    <ul>
                                        <li>Association Au Confluent des Jeux</li>
                                        <li>association loi 1901</li>
                                        <li>N° RNA W783004489</li>
                                        <li>36 rue des Glaises, 78700 Conflans Sainte Honorine</li>
                                        <li>Président: Christophe Nigaud</li>
                                        <li>Secrétaire: Cédric Boety</li>
                                        <li>Trésorier: Stéphane Evrat</li>
                                    </ul>
                                    <p>Ce site est hébergé chez OVH.</p>
                                    <ul>
                                        <li>Siège social : 2 rue Kellermann - 59100 Roubaix - France</li>
                                        <li>RCS Lille Métropole 424 761 419 00045</li>
                                        <li>le serveur OVH est situé à Gravelines (os-gra6) - France</li>
                                    </ul>

                                    <h1>CHARTE DE PROTECTION DES DONNÉES PERSONNELLES</h1>
                                    (Conformément au règlement européen 2016/679 du 27 avril 2016 dit « règlement
                                    général sur la protection des données » ou RGPD)<br/><br/>

                                    <p>La présente charte de protection des données à caractère personnel (ci-dessous:
                                        la « Charte ») décrit l’engagement du site de l'association
                                        <strong>Au Confluent des Jeux - association loi 1901 - N° RNA W783004489 - 36 rue des Glaises, 78700 Conflans Sainte Honorine</strong>,
                                        édité par
                                        <strong>Monsieur Christophe Nigaud</strong> en tant que
                                        responsable de traitement eu égard au respect de la vie privée et à la
                                        protection des données à caractère personnel de ses utilisateurs.
                                    </p>
                                    <p>Cette Charte a été rédigée pour vous permettre de prendre connaissance des
                                        pratiques et des conditions dans lesquelles
                                        <strong>Au Confluent des Jeux</strong> recueille, utilise
                                        et conserve vos données à caractère personnel (ci-dessous: les « Données »).
                                        Le terme « Site » désigne seulement le site https:// au-confluent-des-jeux.fr.
                                    </p>

                                    <p>Compte tenu de l’évolution constante des lois et règlements en matière de
                                        technologie et de protection des données à caractère personnel, il est probable
                                        que la présente Charte soit mise à jour. Si vous êtes utilisateur du Site, vous
                                        serez informé de ses éventuelles modifications par mail. </p>
                                    <p>Si l'une quelconque des clauses de la présente Charte devait être déclarée nulle
                                        ou contraire à la réglementation, elle sera réputée non écrite mais n'entraînera
                                        pas la nullité des autres clauses de la présente Charte.</p>

                                    <p>La présente Charte s’applique pour les Données collectées :</p>
                                    <ul>
                                        <li>Via la simple navigation sur le Site</li>
                                        <li>Via les mails échangés entre Au Confluent des Jeux et vous, ou tout autre
                                            outil de messagerie électronique
                                        </li>
                                        <li>Lorsque vous créez un compte d’utilisateur sur le Site</li>
                                        <li>Lorsque vous organisez une partie via le Site</li>
                                        <li>Lorsque vous vous inscrivez à la Newsletter du Site (la « Newsletter »)</li>
                                    </ul>

                                    <p>Elle ne s'applique pas aux informations collectées par toutes tierces parties ou
                                        par le biais de sites gérés par ces dernières y compris via des applications ou
                                        contenus (y compris les publicités) redirigeant l'utilisateur vers le Site.
                                        Nous vous remercions de lire attentivement la Charte concernant le traitement de
                                        vos Données et nous vous informons que la navigation sur le Site entraîne
                                        nécessairement l’acceptation de la présente Charte. Si cette dernière n’obtient
                                        pas votre adhésion, nous vous invitons à quitter notre Site. Il vous appartient
                                        de contrôler que les Données communiquées à Au Confluent des Jeux sont
                                        conformes. Le cas échéant, vous avez la possibilité de les corriger et de les
                                        mettre à jour depuis votre espace "Mon profil"</p>

                                    <h2>I - DONNÉES COLLECTÉES PAR Au Confluent des Jeux</h2>
                                    <p>Selon la nature et la finalité de votre interaction avec Au Confluent des Jeux
                                        (création d’un compte d’utilisateur, gestion de la ludothèque, inscription à la
                                        Newsletter, renseignement des formulaires de contact) nous sommes susceptibles
                                        de collecter les Données suivantes :</p>
                                    <ul>
                                        <li>Votre adresse électronique vous sera nécessairement demandée si vous
                                            souhaitez créer un compte d’utilisateur, communiquer avec nous via les
                                            formulaires de contact et/ou recevoir notre Newsletter
                                        </li>
                                        <li>Les Données relatives à votre identité telles que votre nom, prénoms,
                                            adresse électronique, adresses postales, géolocalisation et numéros de
                                            téléphone portable pourront vous être demandées
                                        </li>
                                        <li>Les Données optionnelles relatives à vos choix d'activités telles
                                            qu'autorisation ou non des notifications, mode de contact (mail/sms),
                                            disponibilités (dates/horaires) pourront être gérées
                                        </li>
                                        <li>Les Données de gestion et d'organisation de la vie associative telles que
                                            votre statut d'adhérent et le suivi de vos cotisations
                                        </li>
                                        <li>Les Données relatives à la navigation : il s’agit des Données relatives à la
                                            manière dont vous utilisez le Site comprenant : l’adresse IP, le navigateur
                                            utilisé, la durée de navigation, l’historique des recherches, le système
                                            d’exploitation utilisé, la langue et les pages visualisées/données de trafic
                                        </li>
                                        <li>Les Données relatives à l’utilisation des réseaux sociaux lorsque vous en
                                            utilisez les fonctionnalités.
                                        </li>
                                    </ul>
                                    <p>Les informations revêtant un caractère obligatoire sont signalées par un
                                        astérisque.</p>
                                    <h2>II - COMMENT VOS DONNÉES SONT-ELLES COLLECTÉES ?</h2>

                                    <p>Les Données sont collectées de manière directe lorsque vous nous les transférez
                                        au moyen des formulaires de contact et de création de compte utilisateur, de
                                        gestion des disponibilités, de saisie d'article ou d’inscription à la Newsletter
                                        disponibles sur le Site et/ou communiquées lorsque vous remplissez un formulaire
                                        d'adhésion. Au confluent des Jeux collecte également de manière indirecte
                                        certaine Données au moyen de cookies/traceurs.</p>

                                    <h2>III - POURQUOI VOS DONNÉES SONT-ELLES COLLECTÉES ?</h2>

                                    <p>Si vous êtes simple utilisateur, nous collectons vos Données pour :</p>
                                    <ul>
                                        <li>Vous envoyer des notifications par mail des prochaines séances de jeu si
                                            vous y avez consenti
                                        </li>
                                        <li>Vous permettre de lire les articles exclusivement réservés aux personnes
                                            enregistrées
                                        </li>
                                        <li>Vous permettre de dialoguer avec les autres utilisateurs connectés via le
                                            mécanisme de chat situé sur la page d'accueil
                                        </li>
                                        <li>Vous permettre de dialoguer/créer une rubrique sur le forum et vous
                                            identifier comme l'auteur des textes
                                        </li>
                                        <li>Vous permettre de connaitre les joueurs proche de chez vous via
                                            géolocalisation
                                        </li>
                                        <li>Respecter les droits et obligations de l'association à toute fin légale</li>
                                    </ul>

                                    <p>Si vous êtes membre adhérent, nous collectons vos Données pour :</p>
                                    <ul>
                                        <li>Vous permettre d'effectuer toutes les actions listées ci-dessus en tant que
                                            simple utilisateur, mais aussi...
                                        </li>
                                        <li>Vous permettre de gérer votre ludothèque</li>
                                        <li>Vous permettre de connaitre la situation comptable de l'association</li>
                                        <li>Vous permettre de visualiser la liste des autres adhérents de
                                            l'association
                                        </li>
                                        <li>Vous permettre de lire les articles exclusivement réservés aux membres
                                            adhérents
                                        </li>
                                        <li>Vous permettre deffectuer des annonces publiques ou privés sur le site</li>
                                    </ul>

                                    <p>Nous pouvons utiliser également des cookies ou traceurs :</p>
                                    <ul>
                                        <li>Pour sécuriser votre navigation et permettre d’améliorer votre expérience
                                            d’utilisateur, notamment en reconnaissant le nom d’utilisateur et le mot de
                                            passe que vous avez déjà fournis afin que vous n’ayez pas à les renseigner
                                            sur chaque page du Site où ceux-ci sont requis. Le refus de ceux-ci
                                            empêchera toute action sur le Site (Identification impossible).
                                        </li>
                                        <li>analyser le trafic et les données sur le Site afin de mesurer le nombre
                                            d’utilisateurs du Site, de le rendre plus facile à utiliser et de s’assurer
                                            de sa capacité à répondre de manière rapide à vos demandes.
                                        </li>
                                    </ul>

                                    <p>Le refus de remplir correctement le ou les formulaires du Site peut bloquer
                                        l'accès à certaines pages, notamment celles concernant la gestion des
                                        services.</p>

                                    <h2>IV - QUI TRAITE VOS DONNÉES ?</h2>
                                    <p>Vos Données sont traitées par :</p>
                                    <ul>
                                        <li>Les membres du bureau associatif, soient le président, le secrétaire et le
                                            trésorier
                                        </li>
                                        <li>Facebook : Un module Facebook étant installé sur la page d’accueil du site,
                                            vous leur permettez de tracer vos visites.
                                        </li>
                                    </ul>
                                    <p>L’ensemble des sous-traitants, prestataires de services, Partenaires ou autre
                                        tierces parties susmentionnés sont contraints par des obligations contractuelles
                                        de respecter la confidentialité et la protection des Données et de les traiter
                                        uniquement pour les fins auxquelles nous leur transmettons.</p>
                                    <p>Le Site peut contenir des liens vers différentes sites et plateformes de réseaux
                                        sociaux gérées sur des serveurs tiers, par des personnes ou organisations sur
                                        lesquelles Au Confluent des Jeux n'a aucun contrôle.
                                        De ce fait, nous ne pouvons en aucun cas être tenus pour responsable de la façon
                                        dont vos Données seront stockées ou utilisées sur les serveurs de ces tiers.
                                        Nous vous conseillons de prendre connaissance de la charte applicable en matière
                                        de protection des données à caractère personnel de chaque site Internet tiers
                                        auquel vous accéderez via le Site
                                        afin d’apprécier la manière dont seront utilisées vos Données.</p>

                                    <h2>V - COMBIEN DE TEMPS VOS DONNÉES SONT-ELLES CONSERVÉES ?</h2>
                                    <p>Au Confluent des Jeux ne conserve vos Données que pour la durée nécessaire aux
                                        finalités exposées à l’Article 3. Cette durée de conservation n’est pas la même
                                        selon les Données en cause, la nature et la finalité de la collecte étant
                                        susceptible de faire varier cette durée. De même, certaines obligations légales
                                        imposent une durée de conservation spécifique.
                                        Lorsque vous êtes inscrit à la Newsletter, nous conservons votre adresse
                                        courriel jusqu’à votre désinscription.</p>
                                    Lorsque vous prenez contact avec Au Confluent des Jeux grâce au formulaire de
                                    contact ou que vous communiquez avec nous par mail, vos données peuvent être
                                    conservées:
                                    - jusqu’à un (1) an à compter de la dernière connexion sur le site si vous n'êtes
                                    pas adhérent(e).
                                    - jusqu’à trois (3) ans à compter de la dernière connexion sur le site si vous avez
                                    été adhérent(e).
                                    - jusqu’à dix (10) ans pour les documents financiers précisants les versements de
                                    cotisation des adhérents.
                                    - Dans tous les autres cas, la durée de conservation de ces Données échangées ne
                                    saurait excéder un (1) an.

                                    <p>Si vous effectuez une demande de suppression de Données personnelles, votre
                                        compte d’utilisateur du Site sera désactivé et anonymisé, puis totalement
                                        supprimé à l’issue des durées susmentionnées à compter du jour où vous en avez
                                        formulé la demande.</p>
                                    <p>Enfin, s’agissant des Données collectées au moyen des cookies ou traceurs, elles
                                        seront conservées jusqu’à six (6) mois pour les cookies ou traceurs mesurant
                                        l’audience et jusqu’à treize (13) mois pour les autres. Au-delà des durées de
                                        conservation susmentionnées, vos Données seront anonymisées pour être conservées
                                        à des fins exclusivement statistiques.</p>


                                    <h2>VI - COMMENT VOS DONNÉES SONT-ELLES PROTÉGÉES ?</h2>
                                    <p>Le Site Internet et les emails sont hébergés chez OVH.</p>
                                    <p>Vos Données sont conservées sur un serveur sécurisé et protégé par un pare-feu et
                                        antivirus. Ont été mis en place des mesures techniques et organisationnelles
                                        destinées à garantir la sécurité et la confidentialité de vos Données contre
                                        toute perte accidentelle et contre tout accès, utilisation, modification et
                                        divulgation non autorisé. Compte tenu des particularités inhérentes à Internet,
                                        il nous est toutefois impossible de garantir la sécurité optimale des échanges
                                        d’informations sur ce réseau. Nous nous efforçons de protéger vos Données, mais
                                        nous ne pouvons garantir la sécurité absolue des informations transmises au
                                        Site. Vous convenez que vous transmettez vos Données à vos propres risques. Nous
                                        ne pouvons être tenus responsables du non-respect des paramètres de
                                        confidentialité ou des mesures de sécurité en place sur le Site. A ce titre,
                                        vous convenez que la sécurité de vos informations est également de votre
                                        ressort. Par exemple, il vous incombe de garder secret le mot de passe vous
                                        permettant d’accéder à votre compte d’utilisateur. Ne le divulguez en aucun cas
                                        à des tiers. De même, soyez vigilant lorsque vous divulguez des informations
                                        dans les sections publiques du Site, ces dernières pouvant être consultées par
                                        n’importe quel utilisateur du Site. (Par exemple les avis sur les produits)</p>

                                    <h2>VII - QUELS SONT VOS DROITS ?</h2>
                                    <p>Vous pouvez choisir comment les Données que vous nous transmettez sont utilisées
                                        :</p>
                                    <ul>
                                        <li>Vous pouvez naviguer sur le Site sans fournir de Données. Le cas échéant,
                                            vous ne pourrez pas utiliser certaines fonctionnalités du Site et notamment,
                                            procéder à des achats (si vous êtes un simple utilisateur) et/ou à des
                                            téléchargements sur le Site.
                                        </li>
                                        <li>Vous pouvez refuser de communiquer vos coordonnées bancaires ou PayPal et/ou
                                            vos adresses postales. Dans ce cas, vous ne pourrez pas effectuer d’achat
                                            sur le Site
                                        </li>
                                        <li>Vous pouvez décider de ne plus recevoir la Newsletter ainsi que nos offres
                                            personnalisées : il vous suffit alors de vous connecter à votre compte
                                            d’utilisateur du Site ou de cliquer sur le lien présent dans le courriel qui
                                            vous est adressé.
                                        </li>
                                    </ul>

                                    <p>En tout état de cause, vous avez la possibilité d’accéder à votre compte
                                        d’utilisateur à tout moment pour consulter ou mettre à jour vos Données et vous
                                        désinscrire de notre Newsletter si vous y étiez inscrit. Conformément aux
                                        dispositions de la réglementation applicable en matière de protection des
                                        données à caractère personnel, en particulier le règlement européen 2016/679 sur
                                        la protection des Données (le « RGPD ») ainsi que la loi du 6 janvier 1978
                                        n°78-17 dite « Informatique et Libertés » et ses modifications, vous disposez
                                        d’un droit d’accès et d’un droit de rectification sur vos Données.</p>
                                    <p>De plus, sous réserve des conditions prévues par ladite réglementation pour
                                        l’exercice de ces droits, vous bénéficiez :</p>
                                    <ul>
                                        <li>D’un droit à l’effacement de vos Données (Hors données comptables dont la
                                            conservation de 10 ans est requise par le droit Français - article L123-22
                                            du code de commerce)
                                        </li>
                                        <li>D’un droit à la limitation du traitement de vos Données</li>
                                        <li>D’un droit d’opposition au traitement de vos Données pour des motifs
                                            légitimes, conformément à l’article 21 du RGPD
                                        </li>
                                        <li>D’un droit à la portabilité sur les Données que vous avez fournies (pour les
                                            traitements automatisés fondés sur le consentement ou l’exécution d’un
                                            contrat)
                                        </li>
                                        <li>Du droit au retrait du consentement, lorsque celui-ci vous avez été demandé.
                                            Lorsque le traitement de vos Données est effectué sur la base de votre
                                            consentement, vous pouvez retirer celui-ci à tout moment.
                                        </li>
                                    </ul>
                                    <p>Vous reconnaissez toutefois que les traitements effectués avant la révocation de
                                        votre consentement demeurent parfaitement valables. Vous disposez également d’un
                                        droit d’opposition sans motif à ce que Au Confluent des Jeux procède à une
                                        analyse de vos Données pour partager celles-ci à des fins de marketing.</p>
                                    <p>Toutefois, conformément à l’article 12.6 du RGPD, pour l’exercice de ces droits,
                                        Au Confluent des Jeux, en tant que responsable de ce traitement, se réserve le
                                        droit de vous demander de justifier votre identité. Nous vous informons que les
                                        données permettant de justifier votre identité seront supprimées une fois que
                                        nous aurons répondu à votre requête. Vous pouvez exercer ces droits en adressant
                                        un courriel en français a contact@au-confluent-des-jeux.fr ou à l’adresse
                                        suivante :</p>
                                    <h3>https://au-confluent-des-jeux.fr</h3>
                                    <p>Nous disposons d’un délai d’un mois pour répondre à toute demande relative à
                                        l’exercice de vos droits. Ce délai peut être prorogé de deux mois, en raison de
                                        la complexité ou du trop grand nombre de demandes.</p>

                                    <h2>VIII - STOCKAGE DES DONNÉES COLLECTÉES PAR Au Confluent des Jeux</h2>
                                    <p>Les Données collectées dans le cadre de l’utilisation du Site sont stockées
                                        exclusivement sur un serveur situé en Europe (France), hébergé par la société
                                        OVH - RCS Lille Métropole 424 761 419 00045 - Siège social : 2 rue Kellermann -
                                        59100 Roubaix – France - N° TVA : FR 22 424 761 419.</p>
                                    <p>Les Données collectées dans le cadre d'une inscription pour une saison de jeu
                                        sont collectées dans un fichier Excel situé sur le compte Dropbox partagé par le
                                        président, le secrétaire et le trésorier.</p>

                                </div>
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

export default MentionsPage;
