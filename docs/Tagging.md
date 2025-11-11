# Tagging Strategy

Automated builds are setup for `uat` and `main` branches.

Main version tags are pushed on `main` or default branch. `uat` is meant for release candidates and stabilizing changes before they are pushed to `main`.

`uat` tags aren't supposed to follow semver system, but tags on `main` **must** follow semver.

Examples for uat tags: `1.0-rc.1` `1.0-rc.2` `1.0.1-rc.1` are some of the valid tags for these releases

Always tag commits on `main` and `uat` independently. Try to avoid conflicts
