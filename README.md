<p align="center">
<img src="./src/assets/ollama.png" height="128" alt=""/>
</p>

<h1 align="center">Ollama Chatbot Front</h1>

<p align="center">Simple and clean chatbot interface for use an ollama API</p>

## Motivation
This project is part of a hobbyst attempt of build a full chatbot using Ollama. The idea is to build something similar to a mix between existing products like WhatsApp and ChatGPT. 

Also, it must be fully self-hosted. Both the interface and the backend must be freely available and manageable without needing any cloud service, in locale environments, so you can self-host them or choose a cloud environment of your preference.

That's the main reason because Ollama interface is choosen, since it simplifies the usage of models like Llama 3, that is open source and licensed for personal and commercial usage, and provides an unified interface to use these models, so changing from Llama 3 to other models it's much more simple and involves less changes.

## Download
Work in progress...

## Building
You can make your own build, or execute the project on your machine if you prefer it, the instructions for run this project on locale environment are provided next. 

To run it on other environments, you can execute the same commands changing the environment used. Examples to do this are provided too.

### npm
Inside the project folder, execute using a console:
```
npm i
```

To execute in locale environment using the Angular dev server:
```
npm run serve:locale
```

To build the project:
```
npm run build
```
It will output the build result inside the dist directory. That output result can be hosted using a HTTP server like Nginx or Apache. An Docker image can be generated too, the instructions to do that are provided next.

### Docker
Work in progress...

## Contributing

Currenly, this project is not seeking any contribution and has not an active maintainment. 

Any issue or contribution may take a while to be revised.

Some checklist rules before any pull request:

* **Always use a feature branch**, don't make changes in the main branch directly.

* **Rebase your code** and make sure that you are working over the most recent changes of the main branch.

## Licenses

Ollama Chatbot Front is published under the terms of the GNU General Public License v3.0 or later.

```
Copyright 2024 the Ollama Chatbot Front authors

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
```