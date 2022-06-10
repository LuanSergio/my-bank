# PicrossJs

<h1 align="center">
  <a href="https://my-bank-eta.vercel.app/">	
    <img alt="Picross Universe" title="Picross Universe" src="/docs/logo.png" />
  </a>
</h1>

<p align="center">
  <strong>
      A Frontend code exercise
  </strong>  
</p>
<br>

<p align="center">
  <a href="#star2-Requirements"><strong>Requirements</strong></a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#art-Layout"><strong>Layout</strong></a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#robot-Technologies-and-Tools"><strong>Technologies</strong></a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#man_technologist-Running-Locally"><strong>Running Locally</strong></a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-License"><strong>License</strong></a>
</p>

<a href="https://my-bank-eta.vercel.app/">	
  <img src="/docs/icon.png" align="right" />
</a>

## :star2: Requirements:

- <strong>Create a system to read and update bank customers data</strong>

- <strong>User can only see the data after authentication</strong>

- <strong>Show the customers data: </strong> data must include: name, date, document, bank, agency and account.

- <strong>Design the layout</strong>

- <strong>Responsive layout:</strong> The site must have a responsive layout.

<div align="center">
  <img  src="/docs/division.png" />
</div>

## :art: Layout:

I created the base layout using Figma.

<a href="https://www.figma.com/file/bgFxNN47lpezdBnIxyQPSK/Picross-Universe?node-id=332%3A10">	
  <img src="/docs/layout-figma.png" />
</a>

You can **[click here](https://www.figma.com/file/TpMBFAMC2RPt7DlvAn8OkP/My-bank?node-id=0%3A1)** to see the layout on Figma.
<br>
You can duplicate this layout to own Figma account and use it as you wish by **[clicking here](https://www.figma.com/file/TpMBFAMC2RPt7DlvAn8OkP/My-bank/duplicate)**. Just remember you must have a Figma account and be logged in.

<div align="center">
  <img  src="/docs/division.png" />
</div>

## :robot: Technologies and Tools

<p>Technologies:</p>

- [React](https://pt-br.reactjs.org/)
- [NextJs](https://nextjs.org/)
- [Npm](https://www.npmjs.com/)
- [Node.js](https://nodejs.org/en/)
- [Sass](https://sass-lang.com/)

<p>Libs: </p>

- [json-server](https://github.com/typicode/json-server/)
- [json-server-auth](https://github.com/jeremyben/json-server-auth)
- [Normalize](https://necolas.github.io/normalize.css/)
- [React-toastify](https://fkhadra.github.io/react-toastify/introduction)
- [axios](https://axios-http.com/docs/intro)
- [js-cookie](https://github.com/js-cookie/js-cookie)
- [prettier](https://prettier.io/)
- [eslint](https://eslint.org/)

<p>Tools: </p>

- [Figma](https://www.figma.com/)
- [Mockaroo](https://www.mockaroo.com/)
- [VS Code](https://code.visualstudio.com/)

<div align="center">
  <img  src="/docs/division.png" />
</div>

## :man_technologist: Running Locally

You must have npm installed.

On your favorite terminal, run the following commands:

```bash

# Install json-server globally if you dont have it:
npm install -g json-server

# Clone the repository
$ git clone git@github.com:LuanSergio/my-bank.git

# Navigate to the server folder
$ cd my-bank/server

# Install the server dependencies
$ npm install

# Run the application locally
$ npm run dev

# Open another terminal while the server is running, so we can run the frontend

# Navigate to the frontend folder
$ cd my-bank/frontend

# Copy the content from the .env.example to a new file name .env

# Install the frontend dependencies
$ npm install

# Run the application locally
$ npm run dev

# Open your browser on http://localhost:3000/

```

<div align="center">
  <img  src="/docs/division.png" />
</div>

## :memo: License

This project is under the MIT license.
**[Click here for more information](LICENSE)**.
