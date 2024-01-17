import {
    makeObservable,
    observable,
    action,
} from "mobx";
import { logIn } from "../backend/auth";
import { getProfile } from "../backend/profile";

class ProfileStore {
    @observable id;
    @observable email;
    @observable nickName;
    @observable status;
    @observable authToken;
    @observable authError;

    constructor() {
        this.id = '';
        this.email = '';
        this.nickName = '';
        this.status = '';
        this.authToken = undefined;
        this.authError = undefined;
        makeObservable(this);
    }

    @action logIn(userData) {
        this.authError = undefined;
        if(!userData.email) {
            return;
        }

        try {
            this.authToken = logIn(userData.email, userData.password);
        } catch (exception) {
            this.authError = exception.message;
        }
    }

    @action setAuthToken(token) {
        this.authToken = token;
    }

    @action logOut() {
        this.email = null;
        this.nickName = '';
        this.status = null;
        this.authToken = undefined;
    }

    @action getUser() {
        this.authError = undefined;
        try {
            const user = getProfile(this.authToken);
            this.id = user.id;
            this.email = user.email;
            this.nickName = user.name;
            this.status = "online";
        } catch (exception) {
            this.authError = exception.error;
        }
    }

    @action resetAuthError() {
        this.authError = undefined;
    }
}

const profileStore = new ProfileStore();
export default profileStore;
