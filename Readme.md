# PepeCoin Transaction Tracker Subgraph

This repository contains the code for a subgraph built with the Graph Protocol's Subgraph Studio that tracks PepeCoin transactions for a specific Ethereum wallet.

## Project Structure

- `schema.graphql`: This file defines the entities that the subgraph will track and index from the Ethereum blockchain.
- `subgraph.yaml`: The main configuration file for the subgraph. It specifies the smart contract to track on Ethereum, the events in the contract to track, and the mapping script to use.
- `src/pepe.ts`: The mapping script that transforms the event data from the blockchain into the format defined by the `schema.graphql` file.
- `abis/PEPE.json`: The ABI of the PepeCoin contract, uploaded directly to Subgraph Studio.

## Setup and Deployment with Subgraph Studio

### 1. Log in to Subgraph Studio

Go to [studio.thegraph.com](https://studio.thegraph.com/) and log in.

### 2. Create a New Subgraph

Click on the "Add Subgraph" button and enter a unique name for your subgraph.

### 3. Install Graph CLI

```
npm install -g @graphprotocol/graph-cli
```

### 4. Further Setup

```
graph init
```

✔ Protocol · ethereum
✔ Product for which to initialize · subgraph-studio
✔ Subgraph slug · pepecoin-subgraph
✔ Directory to create the subgraph in · pepecoin-subgraph
✔ Ethereum network · goerli
✔ Contract address · 0xdD69DB25F6D620A7baD3023c5d32761D353D3De9
✔ Start Block · 17046105
✔ Contract Name · PEPE
✔ Index contract events as entities (Y/n) · true

### 5. Set deploy key

```
graph auth --studio <deploy-key>
```

### 6. Edit the Manifest (`subgraph.yaml`), Schema (`schema.graphql`), and Mapping Script (`src/pepe.ts`)

You can edit these files suitably.

### 7. Build

Once everything is set up,

```
graph codegen && graph build
```

### 8. Deploy

```
graph deploy --studio pepecoin-subgraph
```
