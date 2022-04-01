const pool = require('../utils/pool');

module.exports = class User {
  id;
  username;
  email;
  avatar;

  constructor(row) {
    this.id = row.id;
    this.username = row.username;
    this.email = row.email;
    this.avatar = row.avatar;
  }

  static async insert({ username, email, avatar }) {
      if (!username) throw new Error('username is required');

      const { rows } = await.pool.query(
          `
          INSERT INTO users (username, email, avatar)
          VALUES ($1, $2, $3)
          RETURNING *
          `,
          [username, email, avatar]
      );

      return new User(rows[0]);
  }
};
