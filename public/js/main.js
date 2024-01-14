// /*const route = "http://localhost:3001";
// document.getElementById('shortenBtn').addEventListener('click', async () => {
//     const originalUrl = document.getElementById('originalUrl').value;
//     if (!originalUrl || !isValidUrl(originalUrl)) {
//     alert('Please enter a valid URL');
//     return;
// }

//     try {
//         const response = await fetch(route, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ originalUrl })
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
     
//         const data = await response.json();
//         document.getElementById('result').textContent = `Shortened URL : ${window.location.href}${data.shortUrl}`;
//         document.getElementById('trackresult').textContent = `Shortened URL : ${window.location.href}${data.clicks}`;
       
//     } catch (err) {
//         console.error('Error shortening the URL : ', err);
//         alert('Error shortening the URL , PLEASE TRY AGAIN');
//     }

// });
// function isValidUrl(string) {
//     try {
//         new URL(string);
//         return true;
//     } catch (_) {
//         return false;
//     }
// }*/


// const route = "http://localhost:3001";

// document.getElementById('shortenBtn').addEventListener('click', async () => {
//     const originalUrl = document.getElementById('originalUrl').value;

//     if (!originalUrl || !isValidUrl(originalUrl)) {
//         alert('Please enter a valid URL');
//         return;
//     }

//     try {
//         // Send originalUrl in POST request
//         const response = await fetch(`${route}/api/shorten`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ originalUrl }),
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
        
//         // Display the shortened URL
//         const shortenedUrl = `${window.location.href}${data.shortUrl}`;
//         document.getElementById('result').textContent = `Shortened URL: ${shortenedUrl}`;

//         // Fetch clicks for the shortened URL using a GET request
//         const clicksResponse = await fetch(`${route}/${data.shortUrl}`);
        
//         if (!clicksResponse.ok) {
//             throw new Error(`HTTP error! Status: ${clicksResponse.status}`);
//         }

//         const clicksData = await clicksResponse.json();
        
//         // Display the clicks
//         document.getElementById('trackresult').textContent = `Clicks: ${clicksData.clicks}`;

//     } catch (err) {
//         console.error('Error handling the URL:', err);
//         alert('Error handling the URL, PLEASE TRY AGAIN');
//     }
// });

// function isValidUrl(string) {
//     try {
//         new URL(string);
//         return true;
//     } catch (_) {
//         return false;
//     }
// }
