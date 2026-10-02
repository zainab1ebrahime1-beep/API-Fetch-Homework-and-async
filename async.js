const posts = document.getElementById("posts");
const loading = document.getElementById("loading");
const error = document.getElementById("error");

async function getPosts() {
    try {
        const res = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );

        if (!res.ok) throw new Error("Error");

        const data = await res.json();
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

    } catch {
        loading.style.display = "none";
        error.textContent = "Error: اطلاعات دریافت نشد.";
    }
}

getPosts();
