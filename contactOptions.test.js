const ContactOptions = require('./contactOptions');

test('You got it right!', () => {
  const arr = [
    {
      name: 'John Doe',
      email: 'john@brdg.app',
      introsOffered: { free: 3, vip: 0 },
    },
    {
      name: 'Billy Ray Jenkins',
      email: 'billy.jenkins@gmail.com',
      introsOffered: { free: 5, vip: 0 },
    },
    {
      name: 'Jenny Baggins',
      email: 'jeni@x.com',
      introsOffered: { free: 5, vip: 1 },
    },
    {
      name: 'Lloyd Banks',
      email: 'lloyd@banks.com',
      introsOffered: { free: 0, vip: 0 },
    },
    {
      name: 'BA Lewis',
      email: 'ba.lewis@outlook.com',
      introsOffered: { free: 8, vip: 0 },
    },
    {
      name: 'John Johnson',
      email: 'jj@z.com',
      introsOffered: { free: 4, vip: 0 },
    },
    {
      name: 'Adam Johnson',
      email: 'aj@z.com',
      introsOffered: { free: 4, vip: 0 },
    },
    {
      name: 'Joey Simpson',
      email: 'joey@hotmail.com',
      introsOffered: { free: 9, vip: 1 },
    },
    {
      name: 'Penny Smith',
      email: 'penny@smith.com',
      introsOffered: { free: 2, vip: 0 },
    },
  ];

  const newArr = [
    {
      fName: 'Jenny',
      lName: 'Baggins',
      email: 'jeni@x.com',
      introsOffered: { free: 5, vip: 1 },
      ranking: 11,
      offered: 'free',
    },
    {
      fName: 'Lloyd',
      lName: 'Banks',
      email: 'lloyd@banks.com',
      introsOffered: { free: 0, vip: 0 },
      ranking: 5,
      offered: 'free',
    },
    {
      fName: 'John',
      lName: 'Doe',
      email: 'john@brdg.app',
      introsOffered: { free: 3, vip: 0 },
      ranking: 8,
      offered: 'free',
    },
    {
      fName: 'Billy Ray',
      lName: 'Jenkins',
      email: 'billy.jenkins@gmail.com',
      introsOffered: { free: 5, vip: 0 },
      ranking: 8,
      offered: 'free',
    },
    {
      fName: 'Adam',
      lName: 'Johnson',
      email: 'aj@z.com',
      introsOffered: { free: 4, vip: 0 },
      ranking: 9,
      offered: 'free',
    },
    {
      fName: 'John',
      lName: 'Johnson',
      email: 'jj@z.com',
      introsOffered: { free: 4, vip: 0 },
      ranking: 9,
      offered: 'free',
    },
    {
      fName: 'BA',
      lName: 'Lewis',
      email: 'ba.lewis@outlook.com',
      introsOffered: { free: 8, vip: 0 },
      ranking: 11,
      offered: 'vip',
    },
    {
      fName: 'Joey',
      lName: 'Simpson',
      email: 'joey@hotmail.com',
      introsOffered: { free: 9, vip: 1 },
      ranking: 13,
      offered: 'free',
    },
    {
      fName: 'Penny',
      lName: 'Smith',
      email: 'penny@smith.com',
      introsOffered: { free: 2, vip: 0 },
      ranking: 7,
      offered: 'free',
    },
  ];
  const arr1 = [
    {
      name: 'John X',
      email: 'john@brdg.app',
      introsOffered: { free: 3, vip: 0 },
    },
    {
      name: 'Lola Ni Dora Solomon',
      email: 'lola@gmail.com',
      introsOffered: { free: 5, vip: 1 },
    },
    {
      name: 'Joshua Loves',
      email: 'josh@x.com',
      introsOffered: { free: 10, vip: 1 },
    },
  ];

  const newArr1 = [
    {
      email: 'josh@x.com',
      introsOffered: { free: 10, vip: 1 },
      ranking: 16,
      offered: 'free',
      lName: 'Loves',
      fName: 'Joshua',
    },
    {
      email: 'lola@gmail.com',
      introsOffered: { free: 5, vip: 1 },
      ranking: 9,
      offered: 'free',
      lName: 'Solomon',
      fName: 'Lola Ni Dora',
    },
    {
      email: 'john@brdg.app',
      introsOffered: { free: 3, vip: 0 },
      ranking: 8,
      offered: 'vip',
      lName: 'X',
      fName: 'John',
    },
  ];
  const contactOptions = new ContactOptions(arr);
  expect(contactOptions.printArr()).toStrictEqual(newArr);
  const contactOptions1 = new ContactOptions(arr1);
  expect(contactOptions1.printArr()).toStrictEqual(newArr1);
});
