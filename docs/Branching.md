# Branching Strategy

This repository uses a structured three-stage workflow to ensure quality and stability across environments.

---

## Main Branches

| Branch | Purpose | Protection Level |
|--------|----------|------------------|
| **dev** | Active development branch. All new features and fixes are merged here first. | Protected — PRs only |
| **uat** | User Acceptance Testing (UAT) branch. Used for pre-production testing and stakeholder validation. | Protected — PRs only |
| **main** | Production-ready branch. Represents the live codebase. | Strictly protected — PRs only from `uat` |

---

## Supporting Branches

| Type | Naming Convention | Purpose |
|------|--------------------|----------|
| **Feature** | `feature/<feature-name>` | New features or enhancements (branched from `dev`) |
| **Fix** | `fix/<issue-name>` | Non-urgent bug fixes (branched from `dev`) |
| **Hotfix** | `hotfix/<issue-name>` | Urgent production fixes (branched from `main`) |
| **Release (optional)** | `release/<version>` | Used to prepare a versioned release (optional between `uat` and `main`) |

---

## Code Flow

```text
feature/* or fix/* ─┐
                    ├──> dev ───> uat ───> main
hotfix/* ───────────┘             ↑
                                  │
                         (manual promotion after acceptance)
