# pokemon-gql
gql server for pokemon using PokeAPI

### To run the server:
 - download code
 - run `npm i`
 - run `npm run start`

### To query from server
 - go to you local host `http://localhost:4000/`
 - run the following test query
 ```
 query Pokemon($pokemonName: String!) {
  pokemon(pokemonName: $pokemonName) {
    id
    name
  }
}

 ```
 
 The results of that query should look something like: 
 ```
 {
  "data": {
    "pokemon": {
      "id": "94",
      "name": "gengar"
    }
  }
}
 ```
