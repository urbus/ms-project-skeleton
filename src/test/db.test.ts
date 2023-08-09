const { Sequelize } = require('sequelize');

// Create a new Sequelize instance
const sequelize = new Sequelize('exa_test', 'root', 'w3bpag3r00t1030', {
  host: 'mysql-service',
  dialect: 'mysql',port:3306
});

describe('Database connection', () => {

  beforeAll(async () => {
    await sequelize.sync({ force: false }); 
  });

  afterAll(async () => {
    await sequelize.close(); 
  });


  it('should connect to the database and return a row', async () => {
    try {
      await sequelize.authenticate();
      const [rows] = await sequelize.query('SELECT 1');
      const result = rows[0]['1'];
      expect(result).toBe(1);
    } catch (error) {
      // handle error
      console.error(error);
    }
  });

  it('should create a user in the database', async () => {
    const User = sequelize.define('User', {
      firstName: {
        type: Sequelize.STRING,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
    });

    await sequelize.sync({ force: true });

    await User.create({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
    });

    const user = await User.findOne({ where: { firstName: 'John' } });

    expect(user.firstName).toBe('John');
    expect(user.lastName).toBe('Doe');
    expect(user.email).toBe('john.doe@example.com');
  });
});
