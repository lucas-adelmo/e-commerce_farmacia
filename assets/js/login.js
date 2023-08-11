function checkLogin(accessReq, users){

    users = localStorage.userdata

    const emailReceived = accessReq.querySelector("#login").value
    const passwordReceived = accessReq.querySelector("#password").value


    arrUsers = JSON.parse(users)

    let accessGranted = false;

    arrUsers.forEach(element => {
        console.log(element)
        if (element.email === emailReceived && element.password == passwordReceived) {
            accessGranted = true;
            const userdata = {
                email: element.email,
                password: element.password
            }

            window.localStorage.setItem("userdata", JSON.stringify(userdata))
            
            window.location.href = "index.html";
        }
    });

    if (accessGranted) {
        console.log("Acesso permitido.")
    } else {
        console.log("Acesso negado. Verifique os dados fornecidos.");
    }
}