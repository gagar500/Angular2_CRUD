

export class Address {
     street: string;
     suite: string;
     city: string;
     zipcode: string;
}

export class User {
    id:string;
    name: string;
    phone: string;
    email: string;
    address: Address = new Address;

}