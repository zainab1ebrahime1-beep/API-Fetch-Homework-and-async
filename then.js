const posts = document.getElementById("posts");
const loading = document.getElementById("loading");
const error = document.getElementById("error");

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => {
        if (!res.ok) throw new Error("Error");
        return res.json();
    })
    .then(data => {
        loading.style.display = "none";

        data.forEach(post => {
            posts.innerHTML += `
                <div class="card">
                    <h3>ID: ${post.id}</h3>
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>
            `;
        });
    })
    .catch(() => {
        loading.style.display = "none";
        error.textContent = "Error: اطلاعات دریافت نشد.";
    });
