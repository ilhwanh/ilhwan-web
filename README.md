# Ilhwan-web
---

## Introduction

This repository is the source of the [website](https://ilhwan.com).

The website is static and coded with ReactJS and built with NextJS.

## Prerequisites

* `node` and `npm`: to install and run ReactJS, NextJS.
* `Python 3.*`: to run deploy script.
* `AWS cli`: to deploy the built website on AWS.

## Deploy

```bash
$ npm run build
$ npm run export
$ python utils/deploy.py
```