export interface IMain {
    name: string,
    occupation: string,
    description: string,
    contact_message: string,
    contact_email_message: string,
    email: string,
    city: string,
    address: Address,
    social: Network[]
}

export type Address = {
    district: string,
    city: string,
    zip: number
}

export type Network = {
    name: string,
    className: string,
    url: string
}
