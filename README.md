# Personal Website

This project is an open source personal website which is built with Next.js and firebase.

## Getting Started

### Firebase Configuration

First, create a firebase project [here](https://console.firebase.google.com/).

Then, add new parameters (as json) in firebase remote configs tab with the following keys:

| key             | type                                                                          | example                                                              |
| --------------- | ----------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| experience      | [`Experience[]`](features/firebase/models/experience.model.ts)                | [experience.json](features/firebase/mocks/experience.json)           |
| highlights      | [`Highlight[]`](features/firebase/models/highlight.model.ts)                  | [highlights.json](features/firebase/mocks/highlights.json)           |
| portfolio       | [`PortfolioSection[]`](features/firebase/models/portfolio.model.ts)           | [portfolio.json](features/firebase/mocks/portfolio.json)             |
| profile         | [`ProfileResponse`](features/firebase/models/profile.model.ts)                | [profile.json](features/firebase/mocks/profile.json)                 |
| recommendations | [`RecommendationsResponse`](features/firebase/models/recommendation.model.ts) | [recommendations.json](features/firebase/mocks/recommendations.json) |

### Run Locally

Then, set the environment variables in `.env.local` file. You can use [.env.example](.env.example) as a template.

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production Build

```bash
yarn build
```

### Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for more details.
