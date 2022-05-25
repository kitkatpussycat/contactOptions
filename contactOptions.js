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

  getContactOptions = () => {
    let highest = this.arr[0];
    let index = 0;
    for (let i = 0; i < this.arr.length; i++) {
      if (
        highest.ranking < this.arr[i].ranking &&
        this.arr[i].introsOffered.vip === 0
      ) {
        highest = this.arr[i];
        index = i;
      }
    }
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
