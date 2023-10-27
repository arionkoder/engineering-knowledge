# Angular Template

The purpose of this template is to provide a set of guidelines and initial configurations for all projects built with Angular.


## Files and Folders structure

In Angular there are several ways to structure an application. For this template we used an organization of files and folders that allows to be scalable and flexible.

It is divided into the following sections:

* Core: Functionalities and interfaces that are instantiated only once in the application. In this folder there should be no visual components or business logic.
* Features: Business logic is located here. It contains modules, components, services and other code blocks for the construction of a particular business Feature. Each module is loaded in a lazy way in the main routing.
* Shared: This folder should contain all the reusable components of the app. Each component should not be tied to a business logic and instead be as abstract as possible.

### Core
The Core folder is where you place the singleton services, injection tokens, Constants, application configurations, Pipes, Http Intercepts, Guards, authentication service, utilities, etc. that will be used throughout the application. If there is something that is specific to the application itself, the deployment, CI/CD, API, and developer - it likely belongs in the core.

### Features

The business features are located in this folder where each module is in its subfolder.
Each feature module can in turn contain components, directives, pipes, services, interfaces, enums, utilities, etc. The idea is to keep things close together. Therefore, a Pipe, which is only used in a single module should not be defined in the global scope or within Core. The same goes for any other Angular building blocks required only by this module.

### Shared

Consider the Shared module as a library of UI components. These should not be specific to a single business function but should be dumb components in order to be able to take all the components, drop them into another Angular project, and expect them to work (given that the dependencies are met). 

## Conventional Commits

This template is configured with `@commitlint/cli` and `@commitlint/config-conventional` for handling Conventional Commits.

### What is Conventional Commit?

The [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) specification is a convention for GIT commit messages. It provides a simple set of rules for creating an explicit commit history, which makes it easy to write automated tools on top of it (e.g., maintain a CHANGELOG each time a release is made). This convention dovetails with [SemVer](https://semver.org/) (Semantic Versioning), by describing features, fixes and breaking changes made in commit messages. 

## Best practices

As far as possible it is always recommended to keep Angular versions up to date. This allows not only bug fixes and framework security but also framework optimizations.

On the other hand, following good practices in terms of writing the code allows it to be maintainable, performant and scalable.
For this we recommend reading the following article: [https://www.tatvasoft.com/blog/angular-optimization-and-best-practices](https://www.tatvasoft.com/blog/angular-optimization-and-best-practices)
