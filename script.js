//definição da classe Character (personagem)
class Character {
    constructor(name, health, strength) {
      this.name = name;
      this.health = health;
      this.strength = strength;
    }
  
    //método para atacar outro personagem
    attack(target) {
      console.log(`${this.name} ataca ${target.name}!`);
      const damage = Math.floor(Math.random() * this.strength) + 1;
      target.takeDamage(damage);
    }
  
    //método para receber dano
    takeDamage(damage) {
      console.log(`${this.name} sofre ${damage} de dano!`);
      this.health -= damage;
      if (this.health <= 0) {
        console.log(`${this.name} foi derrotado!`);
      }
    }
  }
  
  //mefinição da classe Player (jogador), que herda de Character
  class Player extends Character {
    constructor(name, health, strength) {
      super(name, health, strength);
      this.inventory = [];
    }
  
    //método para adicionar um item ao inventário do jogador
    addItem(item) {
      this.inventory.push(item);
      console.log(`${this.name} obteve o item ${item}!`);
    }
  
    //método para listar os itens do inventário
    listItems() {
      console.log(`${this.name} possui os seguintes itens:`);
      this.inventory.forEach(item => {
        console.log(item);
      });
    }
  }
  
  //definição da classe Enemy (inimigo), que herda de Character
  class Enemy extends Character {
    constructor(name, health, strength, loot) {
      super(name, health, strength);
      this.loot = loot;
    }
  
    //método para derrotar o inimigo e obter seu saque
    defeat() {
      console.log(`${this.name} foi derrotado!`);
      return this.loot;
    }
  }
  
  // função para simular uma batalha entre o jogador e um inimigo
  function battle(player, enemy) {
    console.log(`Uma batalha começou! ${player.name} vs ${enemy.name}`);
  
    while (player.health > 0 && enemy.health > 0) {
      // Player ataca primeiro
      player.attack(enemy);
      if (enemy.health <= 0) {
        // Inimigo derrotado
        const loot = enemy.defeat();
        player.addItem(loot);
        break;
      }
  
      // Inimigo contra-ataca
      enemy.attack(player);
      if (player.health <= 0) {
        // Jogador derrotado
        console.log(`${player.name} foi derrotado!`);
        break;
      }
    }
  }
  
  //criando instâncias de jogador e inimigo
  const player1 = new Player("Hero", 100, 20);
  const enemy1 = new Enemy("Goblin", 50, 10, "Potion");
  
  // iniciando a batalha
  battle(player1, enemy1);
  
  // exibindo itens do jogador
  player1.listItems();

//Esse código está aberto para novas ideias, quem quiser pode adicionar mais funções ao
//script, e inclusive criar a parte visual com html e css
  
