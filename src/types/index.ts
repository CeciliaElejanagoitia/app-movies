export type User = {
    id: string
    name: string
    lastname: string
    email: string
    password: string
    birthdate: Date
}
export type Movie = {
    id: string
    title: string
    poster_path: string 
    // adult: boolean
    overview: string
    // releaseDate: string
}

export type SignUpForm = Omit<User, 'id' | 'birthdate'> & { birthdate: Date }
export type SignUpPayload = SignUpForm
