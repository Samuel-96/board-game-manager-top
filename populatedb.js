#! /usr/bin/env node

console.log(
    "script que llena la BBDD, comando: node populatedb <your MongoDB url>"
  );
  
  // Obtenemos los argumentos pasados en el comando
  const userArgs = process.argv.slice(2);
  
  const Boardgame = require("./models/boardGame");
  const Publisher = require("./models/publisher");
  const Category = require("./models/category");
  
  const categories = [];
  const publishers = [];
  const boardgames = [];
  
  const mongoose = require("mongoose");
  mongoose.set("strictQuery", false);
  
  const mongoDB = userArgs[0]; // la url de nuestra bd
  
  main().catch((err) => console.log(err)); // si algo falla mostramos el error
  
  async function main() {
    console.log("Debug: Conectándose...");
    await mongoose.connect(mongoDB);
    console.log("Debug: Deberiamos estar conectados");
    await createCategories();
    await createPublishers();
    await createBoardgames();
    console.log("Debug: Cerrando mongoose");
    mongoose.connection.close();
  }
  
  // CREACIONES INDIVIDUALES, DEFINIMOS CÓMO ES LA CREACIÓN DE UNA ENTIDAD AQUI
  async function categoryCreate(index, name, summary) {
    const category = new Category(
        { 
          name: name, 
          summary: summary
        }
    );
    await category.save();
    categories[index] = category;
    console.log(`Añadida categoria: ${name}`);
  }
  
  async function publisherCreate(index, name) {
    const publisher = new Publisher({name: name});
  
    await publisher.save();
    publishers[index] = publisher;
    console.log(`Añadido publisher: ${name}`);
  }
  
  async function boardgameCreate(index, name, summary, release_year, designers, artists, rating, publisher, category) {
    const boardgame = new Boardgame({
        name: name,
        summary: summary,
        release_year: release_year,
        designers: designers,
        artists: artists,
        rating: rating,
        publisher: publisher,
        category: category
    });
    await boardgame.save();
    boardgames[index] = boardgame;
    console.log(`Añadido juego de mesa: ${name}`);
  }

  // FUNCIONES QUE LLAMAN A LA CREACION DE ENTIDADES

  async function createCategories() {
    console.log("Añadiendo categorias");
    await Promise.all([
      categoryCreate(0, "Adventure"),
      categoryCreate(1, "Card Game"),
      categoryCreate(2, "City building"),
      /*
      categoryCreate(3, "Dice"),
      categoryCreate(4, "Exploration"),
      categoryCreate(5, "Fantasy"),
      categoryCreate(6, "Murder/Mystery"),
      categoryCreate(7, "Party Game"),
      categoryCreate(8, "Science Fiction"),
      categoryCreate(9, "War"),
      categoryCreate(10, "Animals"),
      categoryCreate(11, "Farming"),
      */
    ]);
  }
  
  async function createPublishers() {
    console.log("Añadiendo publishers");
    await Promise.all([
        publisherCreate(0, "Space Cowboys"),
        publisherCreate(1, "Devir"),
        publisherCreate(2, "Fantasy Flight Games"),
    ]);
  }
  
  async function createBoardgames() {
    console.log("Añadiendo juegos de mesa");
    await Promise.all([
      boardgameCreate(0,
        "Mansions of Madness",
        "Unravel mysteries in Arkham with your investigative team in this app-guided game.",
        "2016",
        "Nikki Valens",
        "Cristi Balanescu, Yoann Boissonnet, Anders Finér, Tony Foti, Corey Konieczka, Jacob Murray, Magali Villeneuve",
        8.0,
        publishers[2],
        [categories[0]]
      ),

      boardgameCreate(1,
        "T.I.M.E Stories",
        "Protect the world from paradoxes with your team of time-traveling agents.",
        "2015",
        "Peggy Chassenet, Manuel Rozoy",
        "Ben Carre, David Lecossu, Pascal Quidault",
        7.4,
        publishers[2],
        [categories[0]]
      ),

      boardgameCreate(2,
        "Paleo",
        "Your Stone Age tribe must work together to eat, survive, and develop new tech.",
        "2020",
        "Peter Rustemeyer",
        "Dominik Mayer, Ingram Schell, Franz-Georg Stämmele",
        7.7,
        publishers[0],
        [categories[0]]
      ),
    ]);
  }