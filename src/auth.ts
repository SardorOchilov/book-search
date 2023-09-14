export async function auth(username:string) {
    if(/^[a-zA-Z]{16}$/.test(username)){
        await new Promise(res => setTimeout(() => {
            res('')
        }, 3000))
        console.log(username)
        return username
    }
    throw new Error('username is incorrect');
}