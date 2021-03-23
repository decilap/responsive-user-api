class User{
    constructor(url){
        this.users = [];
        _fetchData(url)
        .then((data) => {
            this.users = data.data;
            this.createUsers();
        }).catch((error) => {
            console.log(error)
        })
        .finally(() => {
            setTimeout(()=>{
                document.querySelector('.users_cards').classList.remove('hide');
                document.querySelector('.fa-spin').remove();
            }, 1000);    
        });
    }


    createUser(user){
        console.log(user.avatar)
        let users = this.createDivElement('users_card', 'div');
        let html = `<div class="avatar">
                        <img src="${user.avatar}" alt="user avatar" class="users_avatar">
                    </div>
                    <div class="users_info">
                        <h3>${user.first_name ? user.first_name + '' : ''}${user.last_name ? user.last_name : ''}</h3>
                        <p>Lorem, ipsum.</p>
                        <div class="card_network">
                            <i class="fab fa-linkedin-in"></i>
                            <i class="fab fa-facebook"></i>
                            <i class="fab fa-twitter"></i>
                        </div>
                    </div>`;
        users.innerHTML = html;
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

    createDivElement(className){
        let div = document.createElement('div');
        div.className = className;
        return div;
    }
}

new User('https://reqres.in/api/users?page=1');