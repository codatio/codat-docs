import React from "react";

const repoBaseUrl = "https://github.com/codatio/client-sdk-"
const repoProductTMP = "/tree/main/bank-feeds"

const languages = [
    {
        name: "typescript",
        namePretty: "TypeScript",
        icon: "/img/libraries/typescript.svg",
    },
    {
        name: "python",
        namePretty: "Python",
        icon: "/img/libraries/python.svg",
    },
    {
        name: "csharp",
        namePretty: "C#",
        icon: "/img/libraries/csharp.svg",
    },
    {
        name: "go",
        namePretty: "Go",
        icon: "/img/libraries/go.svg",
    },
    {
        name: "java",
        namePretty: "Java - Coming soon",
        icon: "/img/libraries/java.svg",
    },
]

const ClientLibraries = ({productName}) => {
    const productUrl = !productName ? "" : "/tree/main/" + productName;
    console.log("help: productName")
    return (
        <ul className="card-container mini">
            {
                languages.map((language, i) => {
                    return (
                        <li key={i} className="card mini">
                            <div className="card-row">
                                <div className="header">
                                    <a href={repoBaseUrl + language.name + productUrl} target="_blank">
                                    <img
                                        src={language.icon}
                                        className="icon usecase"
                                    />
                                    </a>
                                </div>
                                
                                <div className="content">
                                    <h4>{language.namePretty}</h4>
                                    <p>
                                    <a href={repoBaseUrl + language.name + productUrl} target="_blank">Start using →</a>
                                    </p>    
                                </div>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default ClientLibraries