function register(resgistering, users){

    const nameReceived = resgistering.querySelector("#name").value
    const emailReceived = resgistering.querySelector("#login").value
    const passwordReceived = resgistering.querySelector("#password").value

    arrUsers = JSON.parse(users)

    arrUsers.forEach(element => {
        if (element.email === emailReceived) {
            console.log("This email is already in use")
            alert("Este email já está sendo utilizado")
            return
        }
    });

    const newRegiter = {
        name: nameReceived,
        email: emailReceived,
        password: passwordReceived
    }

    
    arrUsers.push(newRegiter)

    console.log(arrUsers)
    
    users = JSON.stringify(arrUsers)
    console.log(users)

    window.localStorage.setItem("userdata", users)

    alert("Seu registro foi realizado com sucesso! Acesse a página de login.")
}