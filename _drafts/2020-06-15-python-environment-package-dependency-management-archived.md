---
title: Python Environment, Package and Dependency Management
tags:
  - python-project
---

In my experience of developing python applications for production
deployment with docker, I often find myself setting up many components
and configurations which may be repetitive and reusable. Along the way,
I have also done a lot of research on the python developer tools
available and best practices in setting them up.
In the next series of posts, I will be distilling my findings
and sharing what I think makes sense for me.
In this post, I will cover environment, package and dependency management.

Please take note that this is in the context single purpose
private applications such as machine learninig web API
for a particular business use case. It does not cover
developing python packages meant to be published and
distributed to a wider general audience.

Information discussed here are set up in the following repository.
Please star the repo if you find it useful.

- [https://github.com/yxtay/python-project-template][python-project-template]

The repository has been configured as a [project template][github-template]
which you may use to generate new python project repositories.

![Use this tempalte](/assets/images/use-this-template.png)

## Environment management

- [venv][venv]
  - standard library for environment management
  - suitable to use in docker image
- [**Conda**][conda]
  - full featured package, dependency and environment management
  - easy to install contained python environment in Windows, Mac and Linux
  - able to manage different python versions

For environment management, I use Conda.
Conda simplifies python installations in Windows, Mac and Linux.
The python environment is confined to a single directory and
isolated from the one in the operating system. This prevents me from
accidentally installing libraries into the python operating system
environment and messing it up.

Conda comes with an environment management system which I use to isolate
python environments for different projects.
It is able to create environments with different python versions,
a function which I have struggled to figure out how to achieve with venv.

I use the [Miniconda distribution][miniconda] to reduce the footprint.
I usually use the base conda environment to manage environments only and avoid
installing packages there directly. However, in the event that I make a mistake
I can easily delete the whole Conda directory and reinstall it.

However, when preparing python applications in docker images for production,
I use venv. Venv is a standard library without additional dependencies.
Python version is specified in the base docker image,
so there is no need to manage it with venv.
While some may argue that virtual environment is not necessary
in docker images, they are still useful,
especially if you are looking into using multi-stage docker builds
to reduce image sizes. I will cover this topic in another post.

## Package installation

- [**pip**][pip]
  - standard package installer
- [Conda][conda]
  - able to install non-python dependencies
  - package repository is not as complete as PyPI, hence using pip is often required
  - extensive Anaconda distribution useful for data scientists

For package installation, I use pip.
Pip is a standard library without additional dependencies.
This makes the usage experience similar when developing locally
as well as when preparing for production in a docker image.
With pip, dependencies are specified in a `requirements.txt` file,
which I can maintain myself or generate with another tool
(refer to next section).
The `requirements.txt` is quite standard, hence it is well supported by
dependency management tools in the python ecosystem.

With that said, Conda is a relevant package installer as
it is able to track and install non-python dependencies.
For example, it is able to install TensorFlow with CUDA drivers.
This makes it fuss free if I am only developing and using my project locally.
The [Anaconda package][anaconda] includes a bunch of python data science  
libraries that are useful for general data science projects.
For projects with production requirements, I will eventually have to
figure out the installation of the non-python dependencies separetely.

With Conda, dependencies are specified in a `environment.yml` file
that has its own package specification format and
is thus not compatible with other tools in the python ecosystem.
Moreover, the Conda package repository is not as complete as PyPI.
This means I often have to fallback to using pip.
The packages installed with pip can also be specified
in a section in `environment.yml`.

In the past, I have attempted to create docker images
with Conda as the package installer. However,
I realised that this generated images that quickly blew up in size.
It is not uncommon to see images in excess of 2GB.
I have since avoided using Conda in docker images and
stick to using pip with offical python base images instead.

### References

- [https://jakevdp.github.io/blog/2016/08/25/conda-myths-and-misconceptions][jakevdp]
- [https://www.anaconda.com/blog/tensorflow-in-anaconda][tensorflow-conda]

## Dependency management

- [**pip-tools**][pip-tools]
  - conceptually simple
  - generated `requirements.txt` can be used directly in docker image
- [Pipenv][pipenv]
  - dependency management hosted by PyPA
  - development was dead in 2019, but seems to be ressurected in 2020
- [Poetry][poetry]
  - promising all-in-one tool for environment and dependency management
  - includes features for building and publishing packages

Unfortunately, even in 2020, dependency management in the python ecosystem
is still a bit of a mess as it is not well handled by the standard libraries.
Using `pip freeze > requirements.txt` is most defintely a bad idea.
The ecosystem has developed a few options and there isn't yet a clear winner.

For dependency management, I use pip-tools mainly with influence
from the article by [Schlawack][hynek].
Pip-tools is used to generate requirement files with pinned dependency
versions and match virtual environment installations to those versions.
It is simple conceptually and works well with pip.
The generated requirement files can be used directly with pip in docker
images, hence there are no additional dependency required at that stage.

I also follow Schlawak's suggestion of placing requirement files
in a dedicated directory and use his Makefile targets for updating
the pinned versions. This reduces the number of files in my project
root directory.

```
requirements/
├── dev.in  # top level development dependencies
├── dev.txt  # generated complete development dependencies
├── main.in  # top level application dependencies
└── main.txt  # generated complete application dependencies
```

```make
# Makefile

.PHONY: deps-update
deps-update:
	pip install --upgrade pip pip-tools
	pip-compile --upgrade --output-file requirements/main.txt requirements/main.in
	pip-compile --upgrade --output-file requirements/dev.txt requirements/dev.in

.PHONY: deps-sync
deps-sync:
	pip-sync requirements/main.txt requirements/dev.txt

.PHONY: deps-update-sync
deps-update-sync: deps-update deps-sync

.PHONY: deps-install
deps-install:  ## install dependencies
	pip install --upgrade pip
	pip install -r requirements/main.txt -r requirements/dev.txt
```

This is not the cleanest approach as it requires 4 dependency files.
Moreover, I will have to track my primary depencies
and manually add them to the `main.in` and `dev.in` files.

There has been other approaches by Pipenv and Poetry to try to
include different sections within a single file for application
and development dependencies to bring the management more align with
other programming languages like npm and Yarn for javascript.
Pipenv and Poetry are not just dependency management tools.
They also include features to manage virtual environments and run
commands directly in them without having to activate them manually.

I have not looked into them in depth, but my impression is that
they are conceptually more complicated.
I don't think they will be as simple to use directly in docker images.
However, they are both able to export to `requirements.txt`.

With that said, the impression I get after reading articles by
other authors is that Poetry is a promising contender.
It also includes features to build and publish python packages.
Poetry has released version 1.0 in Dec 2019, so it should be
quite feature complete and stable going forward.
I may spend some effort exploring using Poetry properly in the future.

On the other hand, Pipenv has received quite a bit of bad reputation
until recently. The tool was slow and buggy and
there has been breaking changes between releases.
Development was almost dead in 2019, with no releases that year.
However, things has since improved with a few releases since May 2020.
I may monitor its development, but it is unlikely I will adopt it.

### References

- [https://hynek.me/articles/python-app-deps-2018][hynek]
- [https://jacobian.org/2019/nov/11/python-environment-2020][jacobian]
- [https://www.pluralsight.com/tech-blog/managing-python-environments][pluralsight]
- [https://hackersandslackers.com/python-poetry-package-manager][hackers-slackers]

## Conclusion

- environment management: Conda
- package installation: pip
- dependency management: pip-tools

I have covered the tools I use for environment, package and dependency
management for my python project. I may use different combinations of tools
for local development and production, however I try to stick to tools
that have a straightforward path to production deployment with docker.

There are still multiple contenders within the python ecosystem on this
issue with consistent development. I expect the situation to improve
going forward. Poetry looks like a promising tool that I may explore
in the future.

In my next few articles, I will cover other aspects of my project
template, such as application tools, development tools and docker deployment.

Hope you have found it useful! Please let me know what you think in the comments.

## Alternative structures and templates

While setting up my python project template, I has also found the following
information which I have heavily referenced from.

- [https://docs.python-guide.org/writing/structure][python-structure]
- [https://realpython.com/python-application-layouts][python-layout]
- [Jace's Python Template][jacebrowning]

[python-project-template]: https://github.com/yxtay/python-project-template
[github-template]: https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template
[venv]: https://docs.python.org/3/library/venv.html
[conda]: https://docs.conda.io/en/latest
[miniconda]: https://docs.conda.io/en/latest/miniconda.html
[anaconda]: https://docs.anaconda.com/anaconda
[pip]: https://pip.pypa.io/en/stable
[jakevdp]: https://jakevdp.github.io/blog/2016/08/25/conda-myths-and-misconceptions
[tensorflow-conda]: https://www.anaconda.com/blog/tensorflow-in-anaconda
[pip-tools]: https://github.com/jazzband/pip-tools
[pipenv]: https://github.com/pypa/pipenv
[poetry]: https://python-poetry.org
[hynek]: https://hynek.me/articles/python-app-deps-2018
[jacobian]: https://jacobian.org/2019/nov/11/python-environment-2020
[pluralsight]: https://www.pluralsight.com/tech-blog/managing-python-environments
[hackers-slackers]: https://hackersandslackers.com/python-poetry-package-manager
[python-structure]: https://docs.python-guide.org/writing/structure
[python-layout]: https://realpython.com/python-application-layouts
[jacebrowning]: https://github.com/jacebrowning/template-python
