# Podcaster

## Description

Podcaster is a frontend application developed in React. It is a podcast application that has three views:

1. **General**: Displays all the available podcasts.
2. **Podcast Details**: Shows the corresponding episodes for the selected podcast.
3. **Episode Details**: Allows playback of the selected episode with an integrated player.

The application has been created using the **Create React App** boilerplate.

### Used Packages

The following packages have been used in this application:

- **Axios**: For making API requests.
- **React Router Dom**: For routing within the application.
- **PropTypes**: For defining component property types.
- **Sass**: For styles and CSS organization.
- **React Linkify** For React component to parse links (urls, emails, etc.) in text into clickable links.

## Installation

1. Download the project.
2. Open the command terminal and run:

```bash
npm install
```

```bash
yarn install
```

3. In the project root, you will find a `.env.example` file that contains environment variables for API URLs. Copy these variables into a new `.env` file.

## Development Mode

To run the application in development mode, use the command:

```bash
npm run start
```

```bash
yarn start
```

## Production Mode

To run the application in production mode, first generate a build with the command:

```bash
npm run build
```

```bash
yarn run build
```

Then, to execute the application in production mode, use the command:

```bash
npx serve -s build
```

Thank you for visiting my project! I hope you enjoy using Podcaster.

Greetings 👋

Mats 😊
