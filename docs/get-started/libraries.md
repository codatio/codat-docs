---
title: "Libraries"
description: "Easily build with Codat's APIs with our libraries and SDKs"
---

All client library SDKs for Codat are listed below. If you've built your own SDK that you'd be willing to share with the Codat community, please let us know and we'll link to it here!

## Client libraries

Codat offers official SDK client libraries for different programming languages, which are regularly updated for breaking and non-breaking API changes. These client libraries are generated from our [OpenAPI specification](https://github.com/codatio/oas).

<ul className="card-container mini">
  <li className="card mini">
    <div className="card-row">
      <div className="header">
        <a href="https://github.com/codatio/client-sdk-csharp">
          <img
            src="/img/libraries/csharp.svg"
            className="icon usecase"
          />
        </a>
      </div>
      
      <div className="content">
        <h4>C#</h4>
        <p>
          <a href="https://github.com/codatio/client-sdk-csharp">Start using →</a>
        </p>    
      </div>
    </div>
  </li>
  <li className="card mini">
    <div className="card-row">
      <div className="header">
        <a href="https://github.com/codatio/client-sdk-typescript">
          <img
            src="/img/libraries/typescript.svg"
            className="icon usecase"
          />
        </a>
      </div>
      
      <div className="content">
        <h4>TypeScript</h4>
        <p>
          <a href="https://github.com/codatio/client-sdk-typescript">Start using →</a>
        </p>    
      </div>
    </div>
  </li>
  <li className="card mini">
    <div className="card-row">
      <div className="header">
        <a href="https://github.com/codatio/client-sdk-python">
          <img
            src="/img/libraries/python.svg"
            className="icon usecase"
          />
        </a>
      </div>
      
      <div className="content">
        <h4>Python</h4>
        <p>
          <a href="https://github.com/codatio/client-sdk-python">Start using →</a>
        </p>    
      </div>
    </div>
  </li>
  <li className="card mini">
    <div className="card-row">
      <div className="header">
        <a href="https://github.com/codatio/client-sdk-go">
          <img
            src="/img/libraries/go.svg"
            className="icon usecase"
          />
        </a>
      </div>
      
      <div className="content">
        <h4>Go</h4>
        <p>
          <a href="https://github.com/codatio/client-sdk-go">Start using →</a>
        </p>    
      </div>
    </div>
  </li>
</ul>
<br/>
Looking for a language that's not here? [Request support for a new language](https://forms.gle/jEWjV1EDhiB5KEGP9).

### Library versions

Codat's client library version policy uses [semantic versioning](https://semver.org/spec/v2.0.0.html). For example, a library version 4.2.0 defines the _major_ version as 4, _minor_ as 2, and the _patch_ as 0. 

Every new library release will increment one of the version components depending on the type of update:

- **Major** component is incremented when the release contains a breaking change that is incompatible with the latest version. This includes a change to a property, type, method or parameter (for example, adding a value to an existing `enum`). 
- **Minor** component is incremented when the release contains a new feature that is backwards-compatible with the latest version. This includes a new property, type, method or parameter (for example, adding an optional parameter).
- **Patch** component is incremented when the release contains backwards-compatible bug fixes. This includes internal code changes to the library that do not change any properties, types, methods or parameters.

## Community libraries

Codat's awesome community has self-published a number of libraries themselves!

**Community libraries are not officially supported by Codat.** Codat cannot provide assistance with using these SDKs or guarantee that they will be kept up-to-date with the latest changes, feature additions, and deprecations.

If you built your own SDK, please reach out to our [developer experience team](mailto:developer-experience@codat.io) to add it to this list! The best way to create your own library is by using the Codat [OpenAPI specification](https://github.com/codatio/oas).

- [PHP](https://packagist.org/packages/thelogicstudio/codat-php)
- [Ruby](https://github.com/rikas/codat)
