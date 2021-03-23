class User{
    users = [];
    constructor(url){
        _fetchData(url)
        .then((data) => {
            this.users = data.data;
            this.createUsers();
        }).catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setTimeout(()=>{
                document.querySelector('.users .users_cards').classList.remove('hide');
                document.querySelector('.users .fa-spin').remove();
            }, 500);    
        });
    }

    createUser(user){
        let users = this.createDivWithClass('users_card', 'div');
        users.innerHTML = `<div class="avatar">
                              <img src="${user.avatar}" alt="user avatar" class="users_avatar">
                           </div>
                           <div class="users_info">
                                <h3>${user.first_name} ${user.last_name}</h3>
                                <p>Lorem, ipsum.</p>
                                <div class="card_network">
                                    <i class="fab fa-linkedin-in"></i>
                                    <i class="fab fa-facebook"></i>
                                    <i class="fab fa-twitter"></i>
                                </div>
                           </div>`;
        return users;
    }

    createUsers(){
        let users = document.querySelector('.users_cards')
        this.users.forEach(user=> {
                users.appendChild(
                    this.createUser(user)
                );
        });
    }

    createDivWithClass(className){
        let div = document.createElement('div');
        div.className = className;
        return div;
    }
}

new User('https://reqres.in/api/users?page=1');