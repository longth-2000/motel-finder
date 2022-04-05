import cookie from "./cookie"

function authHeader() {
    let accessToken = cookie.getCookie("accessToken");
    if (accessToken) {
        return { Authorization: 'Bearer ' + accessToken };
    } else {
        return {};
    }
}

export default authHeader