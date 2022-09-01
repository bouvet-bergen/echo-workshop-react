export async function fetchData(){
    return await fetch('https://api.kanye.rest/')
        .then(res => res.json());
}