 interface PhoneNumberDictionary {
    // "[phone: string]": 어떤 키값이 오던간에 string type이다
    [phone: string]: {
      num: number;
    };
  }
  
export  interface Contact {
    name: string;
    address: string;
    phones: PhoneNumberDictionary;
  }
  
export enum PhoneType {
    Home = "home",
    Office="office",
    Studio="studio"
  }