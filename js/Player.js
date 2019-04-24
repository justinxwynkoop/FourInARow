class Player {
  constructor(name, id, color, active = false) {
    this.name = name;
    this.id = id;
    this.color = color;
    this.active = active;
    this.token = this.createTokens(21);
  }

  /**
   * Creates token objects for player
   * @param {integer} num - Number of token objects to be created 
   */
  createToken(num) {
    const tokens = [];

    for (let i = 0; i < num; i++) {
      let token = new Token(i, this)
      tokens.push(token);
    }
    return tokens;
  }

}