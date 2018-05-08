import { Customers } from './customers';
export class EventService  {
    getCustDetails() {
        return customers;
    }
}
export const customers: Customers [] = [
    {
        name: 'Pavan',
        email: 'k.pavankumaar@gmail.com',
        number: 6666666666,
        address: {
            street: 'street no11',
            city: 'Hyderabad',
            state: 'Telanaga'
        }
    },
    {
        name: 'Ramesh',
        email: 'ramesh@gmail.com',
        number: 7777777777,
        address: {
            street: 'street no11',
            city: 'Hyderabad',
            state: 'Telanaga'
        },
    },
    {
        name: 'Srinath',
        email: 'srikanth@gmail.com',
        number: 9999999999,
        address: {
            street: 'street no11',
            city: 'Hyderabad',
            state: 'Telanaga'
        }
    }
];
