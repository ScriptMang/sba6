export async function fetchAllProducts(){
    try{
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        console.log(jsonData);
    } catch(err) {
        console.error("Fetch error: ", err);
    }
} 

