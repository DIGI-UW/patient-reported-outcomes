# Patient Reported Outcomes (PRO)

Health outcomes directly reported by the patient who experienced them.

### Build the client

`cd client`

`docker build -t sgs/outcomes:v1.0.0 .`

### Build the NodeJs server proxy

`cd ../proxy`

`docker build -t sgs/proxy:v1.0.0 .`

# Optional (Local Development Setup)

## Run Client Locally

`cd client`

`npm start`

## Run Proxy Locally

`cd ../proxy`

Add the required environment variables;

`cp .env.example .env && vim .env`

```
PORT=5000
OPENMRS_USERNAME=''
OPENMRS_PASSWORD=''
POST_QUESTIONNAIRE_ENDPOINT='<DOMAIN_NAME>/openmrs/ws/rest/v1/outcomes/questionnaire'
```

`npm run start-dev-proxy`
