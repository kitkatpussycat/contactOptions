const arr = [
  {
    name: 'John Doe',
    email: 'john@brdg.app',
    introsOffered: { free: 3, vip: 0 }, //8
  },
  {
    name: 'Billy Ray Jenkins',
    email: 'billy.jenkins@gmail.com',
    introsOffered: { free: 5, vip: 0 }, //8
  },
  {
    name: 'Jenny Baggins',
    email: 'jeni@x.com',
    introsOffered: { free: 5, vip: 1 },
  },
  {
    name: 'Lloyd Banks',
    email: 'lloyd@banks.com',
    introsOffered: { free: 0, vip: 0 }, //5
  },
  {
    name: 'BA Lewis',
    email: 'ba.lewis@outlook.com',
    introsOffered: { free: 8, vip: 0 }, //11
  },
  {
    name: 'John Johnson',
    email: 'jj@z.com',
    introsOffered: { free: 4, vip: 0 }, //9
  },
  {
    name: 'Adam Johnson',
    email: 'aj@z.com',
    introsOffered: { free: 4, vip: 0 }, //9
  },
  {
    name: 'Joey Simpson',
    email: 'joey@hotmail.com',
    introsOffered: { free: 9, vip: 1 },
  },
  {
    name: 'Penny Smith',
    email: 'penny@smith.com',
    introsOffered: { free: 2, vip: 0 }, //7
  },
];

const arr1 = [
  {
    name: 'John X',
    email: 'john@brdg.app',
    introsOffered: { free: 3, vip: 1 },
  },
  {
    name: 'Lola Ni Dora Solomon',
    email: 'lola@gmail.com',
    introsOffered: { free: 5, vip: 0 },
  },
  {
    name: 'Joshua Loves',
    email: 'josh@x.com',
    introsOffered: { free: 10, vip: 1 },
  },
  {
    name: 'Keith Loves',
    email: 'kaith@loves.com',
    introsOffered: { free: 0, vip: 0 },
  },
];

class Contact {
  constructor(name, email, introsOffered) {
    this.fName;
    this.lName;
    this.email = email;
    this.introsOffered = introsOffered;
    this.ranking = 3;
    this.offered = 'free';

    let nameArr = name.split(' ');
    if (nameArr.length > 2) {
      this.lName = nameArr.pop();
      this.fName = nameArr.join(' ');
    } else if (nameArr.length == 2) {
      this.lName = nameArr[1];
      this.fName = nameArr[0];
    } else {
      this.lName = '';
      this.fName = nameArr[0];
    }
  }
  getData() {
    return {
      fName: this.fName,
      lName: this.lName,
      email: this.email,
      introsOffered: this.introsOffered,
      ranking: this.ranking,
      offered: this.offered,
    };
  }
}

class ContactOptions {
  constructor(arr) {
    this.arr = [];
    for (let i = 0; i < arr.length; i++) {
      let x = new Contact(arr[i].name, arr[i].email, arr[i].introsOffered);
      this.arr.push(x.getData());
    }
  }

  getRankingCalculation = () => {
    for (let i = 0; i < this.arr.length; i++) {
      this.arr[i].ranking +=
        this.arr[i].introsOffered.free + this.arr[i].introsOffered.vip;
      if (
        this.arr[i].email.includes('@gmail.com') ||
        this.arr[i].email.includes('@hotmail.com') ||
        this.arr[i].email.includes('@outlook.com')
      ) {
        this.arr[i].ranking;
      } else {
        this.arr[i].ranking += 2;
      }
    }
  };

  // getContactOptions = () => {
  //   let highest = this.arr[0];
  //   let index = 0;
  //   for (let i = 0; i < this.arr.length; i++) {
  //     if (highest.ranking < this.arr[i].ranking) {
  //       if (this.arr[i].introsOffered.vip === 0) {
  //         highest = this.arr[i];
  //         index = i;
  //       }
  //     }
  //   }

  //   this.arr[index].offered = 'vip';
  // };

  getContactOptions = () => {
    let vipIndex = [];

    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i].introsOffered.vip === 0) {
        vipIndex.push(i);
      }
    }

    //console.log(vipIndex.length);

    let highest = this.arr[vipIndex[0]];
    let index = vipIndex[0];

    for (let i = 0; i < vipIndex.length; i++) {
      // console.log('nagana ba?:', vipIndex[i]);
      // console.log(highest.ranking);
      // console.log(this.arr[vipIndex[i]].ranking);
      if (highest.ranking < this.arr[vipIndex[i]].ranking) {
        highest = this.arr[vipIndex[i]];
        index = vipIndex[i];
      }
    }
    //console.log(index);
    this.arr[index].offered = 'vip';
  };

  sortedLastName = () => {
    this.arr.sort((a, b) => {
      const result = a.lName.localeCompare(b.lName);
      return result !== 0 ? result : a.fName.localeCompare(b.fName);
    });
  };

  printArr = () => {
    this.getRankingCalculation();
    this.getContactOptions();
    this.sortedLastName();
    return this.arr;
  };
}

//let c = new Contact(arr[1].name, arr[1].email, arr[1].introsOffered);
//const contactOptions = new ContactOptions(arr);
// contactOptions.getRankingCalculation();
// contactOptions.getContactOptions();
// contactOptions.sortedLastName();
//console.log(contactOptions.printArr());

module.exports = ContactOptions;
