import React from "react";

const repoBaseUrl = "https://github.com/codatio/client-sdk-"
const repoProductTMP = "/tree/main/bank-feeds"

const languages = [
    {
        name: "typescript",
        namePretty: "TypeScript",
        icon: "/img/libraries/typescript.svg",
        packageLocation: "https://www.npmjs.com/package/",
        shield: "npm",
        alt: "NPM version",
    },
    {
        name: "python",
        namePretty: "Python",
        icon: "/img/libraries/python.svg",
        packageLocation: "https://pypi.python.org/pypi/",
        shield: "pypi",
        alt: "Python version",
    },
    {
        name: "csharp",
        namePretty: "C#",
        icon: "/img/libraries/csharp.svg",
        packageLocation: "https://www.nuget.org/packages/",
        shield: "nuget",
        alt: "Nuget version",
    },
    {
        name: "go",
        namePretty: "Go",
        icon: "/img/libraries/go.svg",
        packageLocation: "https://pkg.go.dev/github.com/codatio/client-sdk-go/",
        alt: "Go version",
    },
    {
        name: "java",
        namePretty: "Java - Coming soon",
        icon: "/img/libraries/java.svg",
        packageLocation: "https://central.sonatype.com/artifact/io.codat/",
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
            return productName
        case "java":
            return productName
        default:
            throw new Error('Unable to determine package name of ' + productName + 'in ' + language);
    }
}

const getShieldUrl = (productName, language) => {
    switch(language.name){
        case "go":
            return "https://pkg.go.dev/badge/github.com/codatio/client-sdk-go/" + productName
        case "java":
            return "https://img.shields.io/maven-central/v/io.codat/" + productName + "?label=maven-central%20(java)"
        default:
            return "https://img.shields.io/" + language.shield + "/v/" + getPackageName(productName, language.name)
    }
} 

<img loading="lazy" src="https://img.shields.io/maven-central/v/io.codat/lending?label=maven-central%20(java)" alt="Maven Central (Java)" class="img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module"></img>

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

                                    {productName !== undefined ?
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