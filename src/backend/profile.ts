import profiles from "./db/profiles.json";

type ProfileType = {
    id: string,
    email: string,
    name: string,
    isOnline: boolean
}

export function getProfile(token: ProfileType["id"]): ProfileType {
    const profile = profiles.find<ProfileType>((profile) => profile.id === token);

    if (!profile) {
        throw new Error('Token is wrong!');
    }

    return {
        id: profile.id,
        email: profile.email,
        name: profile.name,
        isOnline: profile.isOnline,
    };
}
