### GIT FILTER-REPO ###

## NÃO EXECUTE ESSE SCRIPT DIRETAMENTE
## Esse script foi feito para uso do
## script 'publisher.sh' fornecido 
## pela Trybe. 

[[ $# == 1 ]] && \
[[ $1 == "trybe-security-parameter" ]] && \
git filter-repo \
        --path .trybe \
        --path .github \
        --path trybe.yml \
        --path trybe-filter-repo.sh \
        --path cypress \
        --path imgs \
        --path cypress.config.js \
        --path reporter.json \
        --path README.md \
        --invert-paths --force
