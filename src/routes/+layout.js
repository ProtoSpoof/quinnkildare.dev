export async function load({ fetch }) {
    try {
        let response = await fetch("https://gitconnected.com/v1/portfolio/protospoof", );
        return await response.json();
    } catch (error) {
        console.log(error);
        return {};
    }
};