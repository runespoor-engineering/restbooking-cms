# Contributing to Restbooking CMS

Thank you for taking an interest in contributing! We appreciate you! 🫶🏽

Below are the guidelines on how to help in the best possible way.

## Submitting an Issue

Before creating a new issue, please search through open issues using the
[GitHub issue search bar](https://docs.github.com/en/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests).
You might find the solution to your problem, or can verify that it is an already known issue.

We want a bug-free and best-performing project. That's why we take all reported issues to heart. But please be aware
that if we can't reproduce the problem, we won't have a way of locating and adequately fixing it.

Therefore, to solve the problem in the best possible way, please create a minimal repository that reproduces the
problem with the least possible code explaining and demonstrating the error.

Without enough information to reproduce the issue, we will close it because we can't recreate and solve it.

## Submitting a Pull Request (PR)

### Branch Organization

We adopt [trunk-based development](https://trunkbaseddevelopment.com/) therefore all Pull Requests are made against the
main branch because we do not use separate branches for development or for the versions we release.

### Good first issue

The issues marked with `~"good first issue"` label are a good starting point to familiarize yourself with the project.

Before solving the problem, please check with the maintainers that the issue is still relevant. Feel free to leave a
comment on the issue to show your intention to work on it and prevent other people from unintentionally duplicating
your effort.

### Sending a Pull Request

Before submitting a pull request, consider `MR checklist` is fully resolved. You could find it in the PR template. For
more information you could read the [CODE_REVIEW document](https://github.com/runespoor-engineering/runespoorstack/blob/main/apps/archive/docs/engineering-playbook/code-review/code-review-formalization.mdx).

Make sure the appropriate labels are added Read more information about [issue and pull request labels](https://github.com/runespoor-engineering/runespoorstack/blob/main/apps/archive/docs/engineering-playbook/source-control/labels.mdx)

## Local development

### Prerequisites

Clone repository:

```shell
git clone git@github.com:runespoor-engineering/restbooking-cms.git
```

Specify how to reconcile divergent branches.

```shell
git config pull.rebase false
```

Install dependencies

```shell
npm install
```

If you want to open a PRs you could fork the repository. For more information read the following docs:
[Fork a repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo),
[Contributing to projects](https://docs.github.com/en/get-started/quickstart/contributing-to-projects).

### Common commands

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

### ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.


## Conventional commits

We are using the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) in this repo. To automate this
process we have integrated the [commitlint](https://github.com/conventional-changelog/commitlint) to check if your
commit messages meet the conventional commit format.

Running the `commit` command would ask you a few questions to generate the commit message following the next rules of
`@commitlint/config-conventional`. [Read more.](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional).

## 📚 Learn more about Strapi

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Strapi Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.
