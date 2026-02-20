const testimonials = [
    {
        name: "Priya S.",
        photoUrl: "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "This product has made my daily work much easier. The quality is excellent and I would definitely recommend it to others.",
    },
    {
        name: "Ananya P.",
        photoUrl: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I was impressed by how smooth and user-friendly the experience was. It saved me a lot of time and improved my productivity.",
    },
    {
        name: "Kunal M.",
        photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I honestly didn't expect such great results. After using this, my routine became more organized and stress-free.",
    },
    {
        name: "Sneha R.",
        photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Fast, reliable, and very easy to use. This is exactly what I was looking for. I'm really happy with the results.",
    }
];

const img = document.querySelector("img");
const texts = document.querySelector(".text");
const user = document.querySelector(".username");

let idx = 0;

function updateTestimonials() {
    const { name, photoUrl, text } = testimonials[idx];
    img.src = photoUrl;
    texts.innerText = text;
    user.innerText = name;
    idx++;
    if(idx === testimonials.length) {
        idx = 0;
    }
    setTimeout(() => {
        updateTestimonials();
    }, 2000);
}

updateTestimonials();