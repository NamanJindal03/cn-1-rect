export const isLoggedIn = () => {
    const isUser = localStorage.getItem('isLoggedIn');
    console.log(isUser)
    return isUser ? true : false
}