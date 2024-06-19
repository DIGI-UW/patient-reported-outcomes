# Patient Reported Outcomes (PRO)

Health outcomes directly reported by the patient who experienced them.

### Build the client

`cd client`

`docker build -t sgs/outcomes:v1.0.0 .`

### Build the NodeJs server proxy

`cd ../proxy`

`docker build -t sgs/proproxy:v1.0.0 .`

# Optional (Local Development Setup)

## Run Client Locally

`cd client`

`npm start`

## Run Proxy Locally

`cd ../proxy`

`npm run start-dev-proxy`
