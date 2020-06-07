# Boilerplate For Creating React Library

The project was build with [React](https://reactjs.org/) as perr-dependencies and [rollup](https://rollupjs.org/guide/en/).

## How to ?
---
First, clone this repository
```bash
git clone https://github.com/skinnyguy/react-lib-boilerplate.git ./to-my-awesome-project
```

After clonned, remove remote origin and add your own origin

```bash
cd to-my-awesome-project # change to root project directory

git remote remove origin # remove origin from project

git remote add origin git@github.com:your-username/your-repository.git # add your remote repository

```

Go to root folder and open the `package.json`. The file like below :
```json
{
  "name": "react-lib-boilerplate",
  "version": "1.0.0",
  "license": "MIT",
  "main": "dist/index.cjs.js",
  "module": "dist/index.esm.js",
  "author": {
    "name": "Adi Hermawan",
    "email": "adidot78@gmail.com"
  },
  "repository": {
    "url": "https://github.com/skinnyguy/react-lib-boilerplate",
    "type": "git"
  },
  ...
}
```

Change the `name`, `author` and `repository` with your own. After that, run `npm install`.

And then, let's make some component in folder `src/components`. Don't forget to import the component in `src/index.ts`

After you make some component, test with script `npm run start:dev`

When you finish, publish on npm. And done!

---

## Available Scripts

| Scripts | Description |
|---------|-------------|
| `npm run build` | Build library with rollup |
| `npm run build:watch` | Build library with rollup and watch |
| `npm run start:dev` | Start library with development environment |

Created by [Adi Hermawan](https://twitter.com/skinnyguy_) with ❤️ and 🔥
