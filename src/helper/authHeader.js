function authHeader() {
    let accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
        return { Authorization: 'Bearer ' + accessToken };
    } else {
        return {};
    }
}

export default authHeader