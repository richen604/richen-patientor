# richen-patientor

Visit a production view of the application here at [richen-patientor](https://richen-patientor.herokuapp.com/)

Work in healthcare? Organize your patients and list diagnosis with this web app! This application was built using [NodeJS](https://nodejs.org/en/), [ReactJS](https://reactjs.org/), [Typescript](https://www.typescriptlang.org/), [ExpressJS](https://expressjs.com/) and also includes the following frameworks:

- [React Router](https://reactrouter.com/web/guides/quick-start) for routing in React
- [eslint](https://www.npmjs.com/package/eslint) for Linting
- [semantic-ui-react](https://react.semantic-ui.com/) for boilerplate React components
- [formik](https://formik.org/docs/overview) for React Form Validation

## Motivation

Originally making this for the [fso2020](https://fullstackopen.com/en/) course, I've decided to maintain it and showcase it.

It shows knowledge of Typescript features such as Types, Enums, and Interfaces. This application also outlines Form Validation, proofing Express requests, state management and production pipelines.

## Local Development

- `git fork` or `git clone` this repository and save it locally
- run `npm install` to get dependencies
- for development run `npm run dev-server` and `npm run dev-client`
  - make sure all files in `src/constants.ts` point to the correct endpoints
- for production run `npm build` to build the ui and `npm run start` to start the server
  - make sure you change the endpoints in `src/constants.ts` !!!

## Contributing

Fork this repository. Using the above local development changes.

Make a new branch for your changes and add it to the forked repository you created. Name it related to your fix / refactor `eg. hotfix-patient-list`. Then, make a pull request with your changes and our team will review it.

## TODO

The majority of the older commits seem vague and I plan to add a changelog to accommodate. However, for now the exercises in the application can be viewed:

- [Part 9: Typescript](https://fullstackopen.com/en/part9)

Note the links are for Full Stack Open 2021, and this project is based of Full Stack Open 2020. Nothing much has changed in the curriculum from the looks of it.
