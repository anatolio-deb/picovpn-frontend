import axios from "axios"

interface UserData {
    password: string | null,
    password_confirmation: string | null,
}

class ApiService {
    private axiosInstance;
    private initData: string | null = null;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: "https://picovpn.ru/api",
            timeout: 10000,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }

    setInitData(initData: string) {
        this.initData = initData;
    }

    private getAuthHeader() {
        return this.initData
            ? { Authorization: `X-Telegram-Data ${this.initData}` }
            : {};
    }

    postUser(data: UserData) {
        return this.axiosInstance.post("/users", data, {
            headers: this.getAuthHeader()
        });
    }

    telegramAuth() {
        return this.axiosInstance.post("/auth", null, {
            headers: this.getAuthHeader()
        });
    }

    getUser() {
        return this.axiosInstance.get(`/users/`, {
            headers: this.getAuthHeader()
        });
    }

    isAuthenticated(): boolean {
        return !!this.initData;
    }

    passwordReset(data: UserData) {
        return this.axiosInstance.post("/password-reset", data, {
            headers: this.getAuthHeader()
        });
    }

    getPlan(){
         return this.axiosInstance.get(`/plans/`, {
            headers: this.getAuthHeader()
        });
    }
}

const apiService = new ApiService();
export default apiService;