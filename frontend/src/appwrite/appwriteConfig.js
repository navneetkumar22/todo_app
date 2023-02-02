import { Client, Account, } from 'appwrite'

const client = new Client();

client
    .setEndpoint("http://localhost/v1")
    .setProject("63cfb3ce1c59403105af")

export const account = new Account(client);