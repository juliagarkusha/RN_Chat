import profiles from "./db/profiles.json";

export function logIn (email: string, password: string): string {
    const profile = profiles.find((profile) => profile.email === email);

    if (!profile || profile.password !== password) {
        throw new Error('Email or password is wrong!');
    }

    return profile.id;
}
