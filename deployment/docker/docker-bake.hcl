variable VERSION {
    default = "dev"
}

variable DOCKER_REGISTRY {
    default = "codatintgregistry.azurecr.io/"
}

# Build-time site config; bake reads these from the pipeline step's env
# (values come from the codat-docs-build variable group).
variable ZENDESK_KEY {
    default = ""
}

variable AMPLITUDE_API_KEY {
    default = ""
}

variable GTM_ID {
    default = ""
}

group "default" {
    targets = [
        "build",
        "app"
    ]
}

target "build" {
    context    = "./"
    dockerfile = "deployment/docker/build.dockerfile"
    args       = {
        DOCKER_REGISTRY   = "${DOCKER_REGISTRY}"
        ZENDESK_KEY       = "${ZENDESK_KEY}"
        AMPLITUDE_API_KEY = "${AMPLITUDE_API_KEY}"
        GTM_ID            = "${GTM_ID}"
    }
    tags       = [ "codat.docs.build:${VERSION}" ]
}

target "app" {
    contexts   = { "build" = "target:build" }
    dockerfile = "Dockerfile"
    tags       = [ "codat.docs.ui:${VERSION}" ]
}
