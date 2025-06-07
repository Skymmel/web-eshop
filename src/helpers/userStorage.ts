export type User = {
    email: string;
    password: string;
    name: string;
    address: string;
    phone: string;
};

export function getUsers(): User[] {
    if (typeof window === "undefined") return [];
    return JSON.parse(localStorage.getItem("users") || "[]");
}


export function saveUser(user: User) {
    const users = getUsers();
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
}

export function findUser(email: string, password: string): User | null {
    const users = getUsers();
    return users.find(u => u.email === email && u.password === password) || null;
}

export function saveLoggedInUser(user: User) {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
}

export function getLoggedInUser(): User | null {
    return JSON.parse(localStorage.getItem("loggedInUser") || "null");
}

export function logoutUser() {
    localStorage.removeItem("loggedInUser");
}