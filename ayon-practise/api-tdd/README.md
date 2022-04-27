# Hatchways backend api

### setup

First go to the correct folder and run the following command:

```bash
npm install
or
yarn install
```

then run the following command:

```bash
npm start
or
yarn start
```

To check all the test cases, run the following command:

```bash
npm run test
or
yarn test
```

### Api endpoints

- port 3000 is used so the root url is http://localhost:3000

#### route 1

`api/ping` - Get

#### route 2

`api/api/posts?tags=tech,history&sortBy=likes&direction=desc` - Get

responds with json

```json
{
  "success": true
}
```

- Query parameters:

  - tags: string - required - example: tech,history,culture
  - sortBy: string - not required - default: 'id' - example: likes, reads
  - direction: string - not required - default: 'asc' - example: desc,asc

### Code Explanation
