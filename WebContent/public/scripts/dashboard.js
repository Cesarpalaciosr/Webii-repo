const logoutBtn = () => {
    const endpoint = "https://webii-repo.herokuapp.com/Logout";

    const data = {
        method: "POST",
        headers: new Headers()
    };

    fetch(endpoint, data)
        .then((res) => {
            if (res.status == 200) {
                window.location.href = "https://webii-repo.herokuapp.com/public/views/login.html";
            } else {
                window.alert("Can't logout");
            }
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
};