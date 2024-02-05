import React from "react";

const repoBaseUrl = "https://github.com/codatio/client-sdk-"
const repoProductTMP = "/tree/main/bank-feeds"

const languages = [
    {
        name: "typescript",
        namePretty: "TypeScript",
        icon: "/img/libraries/typescript.svg",
        includeVersionInfo: true,
        packageLocation: "https://www.npmjs.com/package/",
        shield: "npm",
        alt: "NPM version",
    },
    {
        name: "python",
        namePretty: "Python",
        icon: "/img/libraries/python.svg",
        includeVersionInfo: true,
        packageLocation: "https://pypi.python.org/pypi/",
        shield: "pypi",
        alt: "Python version",
    },
    {
        name: "csharp",
        namePretty: "C#",
        icon: "/img/libraries/csharp.svg",
        includeVersionInfo: true,
        packageLocation: "https://www.nuget.org/packages/",
        shield: "nuget",
        alt: "Nuget version",
    },
    {
        name: "go",
        namePretty: "Go",
        includeVersionInfo: false,
        icon: "/img/libraries/go.svg",
        packageLocation: "https://pkg.go.dev/github.com/codat/",
        // shield: "https://pkg.go.dev/badge/github.com/svix",
        alt: "Go version",
    },
    {
        name: "java",
        namePretty: "Java - Coming soon",
        includeVersionInfo: false,
        icon: "/img/libraries/java.svg",
        packageLocation: "https://search.maven.org/artifact/com.codat/",
        alt: "Java version",
    },
]

const capitalizeFirstCharacter = (name: string) => name.charAt(0).toUpperCase() + name.slice(1);

const getCSharpPackageName = (productName) => {
    let packageName = "Codat.";
    if(productName.startsWith("sync-for")){
        const name = productName.split("-").slice(-1)[0]
        packageName += "Sync." + capitalizeFirstCharacter(name)
    }
    else{
        packageName += productName.split("-").map(capitalizeFirstCharacter).join('')
    }
    return packageName;
}

const getPackageName = (productName, language) => {
    // Product name is bank-feeds, lending, sync-for-expenses
    switch(language){
        case "typescript":
            return "@codat/" + productName;
        case "python":
            return "codat-" + (productName !== "bank-feeds" ? productName : "bankfeeds");
        case "csharp":
            return getCSharpPackageName(productName)
        case "go":
            return "TBC"
        case "java":
            return "TBC"
        default:
            throw new Error('Unable to determine package name of ' + productName + 'in ' + language);
    }
}

const getShieldUrl = (productName, language) => {
    switch(language){
        case "go":
            throw new Error("No implemented for Go")
        case "java":
            return "https://img.shields.io/maven-central/v/com.codat/" + productName + "?label=maven-central%20(java)"
        default:
            return "https://img.shields.io/" + language.shield + "/v/" + getPackageName(productName, language.name)
    }
} 

const ClientLibraries = ({productName}) => {
    const productUrl = !productName ? "" : "/tree/main/" + productName;
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

                                    {productName !== undefined && language.includeVersionInfo ?
                                    <a href={language.packageLocation + getPackageName(productName, language.name)} target="_blank" >
                                        <img loading="lazy" src={getShieldUrl(productName, language)} alt={language.alt}/>
                                    </a>
                                    : null
                                    }
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