import React from "react";

const ACDJFooter = () => {
    return (
        <div className="layout-footer">
            <div className="p-d-flex p-jc-between">
                <div className="p-mr-2 p-as-center white-text">
                    <div className="p-ml-3">au Confluent des <span style={{color: 'orange'}}>J</span>eux, depuis <strong>2013</strong></div>
                </div>
                <div className="p-mr-2 p-as-center">
                    <ul className="p-menubar-root-list">
                        <li><a href="/mentions"><i className="fas fa-balance-scale white-text" /></a></li>
                        <li><a href="https://discord.gg/EkxMDpy" target="_blank" rel="noopener noreferrer"><i className="fab fa-discord white-text"/></a></li>
                        <li><a href="https://www.facebook.com/groups/1409286095952547/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f white-text"/></a></li>
                        <li><a href="https://twitter.com/SuperJoueur" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter white-text"/></a></li>
                        <li><a href="/release"><i className="fas fa-code-branch white-text"/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ACDJFooter;
