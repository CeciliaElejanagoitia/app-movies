export type User = {
    id: string;
    name: string;
    lastname: string;
    email: string;
    password: string;
    birthdate: Date;
    token?: string | null;
}
export type Movie = {
    id?:  string;
    title?: string;
    poster_path?: string;
    overview?: string;
    items: [] | any;
}

export type LoginForm = {
    email: string,
    pass: string
}

// export type SignUpForm = {
//     email: string,
//     pass: string
// }

export type SignUpForm = Omit<User, 'id' | 'birthdate'> & { birthdate: Date }
export type SignUpPayload = SignUpForm
