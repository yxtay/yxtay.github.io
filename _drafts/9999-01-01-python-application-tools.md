---
title: Post Ideas
date: 9999-01-01T00:00:00+08:00
last_modified_at: 9999-01-01T00:00:00+08:00
categories:
  - blog
tags:
  - idea
---

## Logging

- [**logging**][logging]
  - standard logging library
- [**python-json-logger**][python-json-logger]
  - logging formatter for structured json log

## Application configuration management

- [configparser][configparser]
  - standard configuration parser with value interpolation
- [**python-dotenv**][dotenv]
  - read envrionment variables in `.env` file with value interpolation
- [**pydantic**][pydantic]
  - settings management using python type annotations
  - interacts well with `.env` file and environment variables
  - no values interpolation

## Command line interface

- [argparse][argparse]
  - python standard argument parser suitable for simple use cases
- [Click][click]
- [**Typer**][typer]

## Web framework

- [Flask][flask]
  - feature rich python web framework
- [Falcon][falcon]
  - fast python web framework focused on REST API
  - minimal, hence require other packages to work well
- [**FastAPI**][fastapi]
  - full featured, high performance, easy to use python web framework
  - data validation and automatic documentation features

## Scripts management

- [**GNU Make**][make]

## Conclusion

- logging: logging and python-json-logger
- application configuration management: configparser, python-dotenv and pydantic
- command line interface: Typer
- web framework: FastAPI
- scripts management: GNU Make

### References

- [https://tech.davis-hansson.com/p/make][hansson]

[logging]: https://docs.python.org/3/library/logging.html
[python-json-logger]: https://github.com/madzak/python-json-logger
[configparser]: https://docs.python.org/3/library/configparser.html
[dotenv]: https://github.com/theskumar/python-dotenv
[pydantic]: https://pydantic-docs.helpmanual.io/usage/settings
[argparse]: https://docs.python.org/3/library/argparse.html
[click]: https://click.palletsprojects.com/en/7.x
[typer]: https://typer.tiangolo.com
[flask]: https://flask.palletsprojects.com/en/1.1.x
[falcon]: https://falconframework.org
[fastapi]: https://fastapi.tiangolo.com
[make]: https://www.gnu.org/software/make
[hansson]: https://tech.davis-hansson.com/p/make
