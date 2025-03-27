import toast from "react-hot-toast";

export function signup(data, navigate) {
    localStorage.setItem("register-user", JSON.stringify(data));
    localStorage.setItem("login-user", JSON.stringify(data));
    toast.success("SignUp successful");
    navigate("/profile");
}

export function login(data, navigate) {
    const user = JSON.parse(localStorage.getItem("register-user"));
    if (user !== null) {
        if (data?.email === user?.email && data?.password === user?.password) {
            localStorage.setItem("login-user", JSON.stringify(data));
            toast.success("SignUp successful");
            navigate("/profile");
        } else {
            toast.error("Wrong email or password !");
        }
    } else {
        toast.error("Accuount not found, please signup !");
    }
}

export function logout(navigate) {
    localStorage.removeItem("login-user");
    toast.success("Logout successful");
    navigate("/");
}