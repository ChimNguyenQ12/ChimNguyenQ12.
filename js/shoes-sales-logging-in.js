// v lấy data list người dùng, đồng thời chạy function để login
async function getData(link) {
    let response = await fetch(link);
    let fetchedData = await response.json();
    loginForm(fetchedData)
};
// ^ lấy data list người dùng, đồng thời chạy function để login

// v tạo function để kiểm tra mật khẩu, không bị lặp hàm khi mật khẩu hay user bị sai
function loginForm(fetchedData) {
    let btnSubmit = document.getElementById("btn-submit")
    btnSubmit.addEventListener("click", (e) => {
        e.preventDefault();
        let username = document.getElementById("txtUser").value;
        let password = document.getElementById("txtPassword").value;

        for (i = 0; i < fetchedData.length; i++) {
            if ((username === fetchedData[i].username) && (password === fetchedData[i].password)) {
                alert("Redirecting");
                window.location.href = "../HTML/shoes-sales.html";
                return;
            }

        }
        alert("incorrect password or username. Redirecting to logging page");
        window.location.href = "../HTML/login-page.html"
    });
    // ^ tạo function để kiểm tra mật khẩu, không bị lặp hàm khi mật khẩu hay user bị sai
};
getData("https://5ed1024f4e6d7200163a045c.mockapi.io/api/c4e/users")