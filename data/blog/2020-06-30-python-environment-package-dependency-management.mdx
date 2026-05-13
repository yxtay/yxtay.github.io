---
title: Python Environment, Package and Dependency Management
date: '2020-06-30'
tags:
  - python
  - environment-management
  - devops
summary: My python project setup for environment management in 2020 after considering many options.
---

In my experience of developing python applications for production
deployment with docker, I often find myself setting up many components
and configurations which may be repetitive and reusable. Along the way,
I have also done a lot of research on the python developer tools
available and best practices in setting them up.
In the next series of posts, I will be distilling my findings
and sharing what I think makes sense for me.
In this post, I will cover environment, package and dependency management.

Information discussed here are set up in the following repository.
Please star the repo if you find it useful.

- [https://github.com/yxtay/python-project-template][python-project-template]

The repository has been configured as a [project template][github-template]
which you may use to generate new python project repositories.

![Use this tempalte](/static/images/use-this-template.png)

## Motivation

Environment, package and dependency management is important if you have
to handle multiple python projects are different stages of development.
Environment management is required to prevent dependency conflict between
different projects. Package and dependency management is necessary to
create reproducible environments for development and production.

Unfortunately, even in 2020, this is still a bit of a mess as
it is not well handled by the standard libraries.
The ecosystem has developed a few options and there isn't yet a clear winner.

My use cases are generally private applications such as
machine learninig web API for a particular business use case.
It does not cover developing python packages meant to be published
and distributed to a wider general audience.

## pip

- standard package installer
- unable to uninstall packages cleanly
- used for production in docker image

pip is the standard package installer.
With pip, dependencies are specified in `requirements.txt` file.
At the minimum, the top level project required packages should be specified,
with versions appropriately pinned. For reproducible builds,
it is recommended to include all dependencies in `requirements.txt`.
This will be rather tedious to do manually. As `requirements.txt`
is a standard package specification format, other tools can be used
to generate the complete project dependencies, as I will cover later.

pip is able to resolve the dependency graph on installation.
However, as dependencies are not tracked by pip,
packages are not uninstalled cleanly. This results in an environment
which can potentially be polluted by previously installed dependencies
that are no longer being required. This is also the reason why using
`pip freeze > requirements.txt` for dependency management is a bad idea.

I use pip for production package management in docker,
as it is a standard library without additional dependency.
Since dependency management should be properly done in the development
environment, only package installation is required in preparing
the prooduction environment, which pip performs without issue.

## venv

- standard virtual environment manager
- unable to create environments with different python versions
- used for production in docker image

venv is the standard virtual environment manager.
venv creates lightweight environments with the python version
matching the python version used to create the environment.
It is unable to create environments with different python versions.

I use venv for production environment management in docker.
Since the python version is specified in the docker base image,
I do not need to manage python versions with venv.
While it may be argued that virtual environment is not necessary
in docker images, they are still useful,
especially for using multi-stage builds to reduce docker image sizes.
I will cover this topic in another post.

## Conda

- easy to install contained python environment in Windows, Mac and Linux
- able to install different python versions and non-python dependencies
- extensive Anaconda distribution useful for data scientists
- package repository is not as complete as PyPI, hence using pip is often required
- use for development environment management

Conda is the full featured package, dependency and environment management
tool. It simplifies python installation in Windows, Mac and Linux.
The installed python environment is contained in a single directory and
isolated from the one in the operating system. This prevents me from
accidentally installing libraries into the python operating system
environment and messing it up.

I use Conda to manage my development environments.
It is able to create environments with different python version.
To reduce footprint, I use the [Miniconda distribution][miniconda].
I usually use the base Conda environment to manage environments only and avoid
installing packages there directly. However, in the event that I make a mistake,
it is easy to delete the whole Conda directory and reinstall.

Conda contains a package installer that is able install non-python dependencies.
For example, it is able to install TensorFlow with CUDA drivers.
This makes it fuss free if I am only developing and using my project locally.
The [Anaconda package][anaconda] includes a bunch of python data science
libraries that are useful for general data science projects.
However, for projects with production requirements, I will eventually have to
figure out the installation of the non-python dependencies without Conda.

With Conda, dependencies are specified in a `environment.yml` file
that has its own package specification format and
is thus not compatible with other tools in the python ecosystem.
Moreover, the Conda package repository is not as complete as PyPI.
This means I often have to fallback to using pip.
The packages installed with pip can also be specified
in a section in `environment.yml`.

In the past, I have attempted to create docker images for production
with Conda as the package installer. However,
I realised that this created docker images that quickly blew up in size.
It is not uncommon to see images in excess of 2GB.
I have since avoided using Conda in docker images and
stick to using pip with python base images instead.

## Poetry

- tool for dependency management and packaging in Python
- packages can be uninstalled cleanly as dependencies are tracked
- able to generate `requirements.txt` that is compatible with pip
- use for development package and dependency management in development

Poetry is a relatively new tool for dependency management and packaging.
It has recently (Dec 2019) reached version 1.0.
Poetry tracks the complete dependency graph and, hence, is able to
install and uninstall packages cleanly. Both project and development
dependencies are specified in `pyproject.toml`. When packages are
installed with Poetry, they are automatically added to `pyproject.toml`
with dependencies and versions pinned in `poetry.lock`.
It is able to generate `requirements.txt` that is compatible with pip.
I have recently adopted Poetry for package and dependecy management
in my development environment.

Poetry is also able to create and activate environments automatically.
With Poetry, I am able to run commands in the right environment
without having to manually activate it. However, as I use Conda
to manage my environments, I need to modify my usage for them
to work well together. I will cover how I do this in another post.

Poetry also includes features for build and publishing packages.

## Other notable tools

### pip-tools

- generates `requirements.txt` that is compatible with pip
- multiple requirement files to handle

pip-tools is a package and dependency management tool.
Before I adopted Poetry, I used pip-tools, mainly with influence
from the article by [Schlawack][hynek].
pip-tools generates requirement files with pinned dependency versions
and matches the virtual environment installations to those versions.
The generated requirement files are compatible with pip.
pip-tools works well with environments created by another tool.

However, to use pip-tools, I need to manually add packages to the
source requirement files based on which pip-tools generates.
This is not a major problem as I am used to doing that.
Using pip-tools also results in 2 requirements files for every set
of dependencies: source and generated. With project and development
dependencies, this results in 4 requirement files.
I had to create a requirements directory so that my project root is
not cluttered.

### Pipenv

- environment and dependency management tool hosted by PyPA
- development was dead in 2019, but seems to be ressurected in 2020

Pipenv is an environment and dependency management tool hosted by PyPA.
Conceptually, it is very similar to Poetry and has similar features,
including package building and publishing.

However, Pipenv has received quite a bit of bad reputation
until recently. The tool was slow and buggy and
there has been breaking changes between releases.
Development was almost dead in 2019, with no releases that year.
Things has since improved with a few releases since May 2020.

### pyenv

- python version management

pyenv is a tool for python version management.
It is able to install and manage multiple versions of Python.
If I am not using Conda, pyenv will be the tool I use to
manage python versions.

## Conclusion

- Production
  - environment management: venv
  - package installer: pip
  - dependency management: NA
- Development
  - environment management: Conda
  - package installer: Poetry, Conda
  - dependency management: Poetry

I use different tools for production and development environments.
With production, I mainly use standard libraries as they do not
have additional dependencies and are available in the python base images.
With that, the tools I use for development need to be compatible with
those I use for production. As long as I do proper dependency management
in development, I will be able to create reproducible environments
for production.

There are still multiple contenders within the python ecosystem on this
issue with consistent development. I expect the situation for
managing python environments and dependencies to improve going forward.

In my next few articles, I will cover other aspects of my project
template, such as application tools, development tools and docker deployment.

Hope you have found it useful! Please let me know what you think in the comments.

## References

- Tools
  - [pip][pip]
  - [venv][venv]
  - [Conda][conda]
  - [Poetry][poetry]
  - [pip-tools][pip-tools]
  - [pyenv][pyenv]
  - [Pipenv][pipenv]
- Conda
  - [Conda: Myths and Misconceptions][jakevdp] by Jake VanderPlas
  - [TensorFlow in Anaconda][tensorflow-conda] on Anaconda: benefits of using Conda to install packages with non-python dependencies
- Tools comparison
  - [Python Application Dependency Management in 2018][hynek] by Hynek Schlawack: comparing Pipenv, Poetry and pip-tools
  - [My Python Development Environment, 2020 Edition][jacobian] by Jacob Kaplan-Moss: using pyenv, pipx and Poetry
  - [Managing Python Environments][pluralsight] by John Walk: comparing venv, virtualenv, pyenv, Pipenv, Conda and docker
- Python project structure
  - [Structuring Your Project][python-structure] on The Hitchhiker's Guide to Python
  - [Python Application Layouts: A Reference][python-layout] on Real Python
  - [Jace's Python Template][jacebrowning]

[python-project-template]: https://github.com/yxtay/python-project-template
[github-template]: https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template
[pip]: https://pip.pypa.io/en/stable
[venv]: https://docs.python.org/3/library/venv.html
[conda]: https://docs.conda.io/en/latest
[miniconda]: https://docs.conda.io/en/latest/miniconda.html
[anaconda]: https://docs.anaconda.com/anaconda
[poetry]: https://python-poetry.org
[pip-tools]: https://github.com/jazzband/pip-tools
[pyenv]: https://github.com/pyenv/pyenv
[pipenv]: https://github.com/pypa/pipenv
[jakevdp]: https://jakevdp.github.io/blog/2016/08/25/conda-myths-and-misconceptions
[tensorflow-conda]: https://www.anaconda.com/blog/tensorflow-in-anaconda
[hynek]: https://hynek.me/articles/python-app-deps-2018
[jacobian]: https://jacobian.org/2019/nov/11/python-environment-2020
[pluralsight]: https://www.pluralsight.com/tech-blog/managing-python-environments
[python-structure]: https://docs.python-guide.org/writing/structure
[python-layout]: https://realpython.com/python-application-layouts
[jacebrowning]: https://github.com/jacebrowning/template-python
