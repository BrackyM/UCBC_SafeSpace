const searchHandler = async (event) => {
    event.preventDefault();
    
    const user = document.querySelector('#user-input').value.trim()
    console.log(user)
    const response = await fetch('/user/'+ user, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},

    });

    if (response.ok){
        document.location.replace(`/user/${user}`)
      } else {
        alert('Failed to find user.')
      }
    };

  const btn = document.querySelector('.search')

  btn.addEventListener('submit', searchHandler);