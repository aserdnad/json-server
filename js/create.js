// javascript for create.html

const form = document.querySelector('form');

const createPost = async (e) => {
  e.preventDefault();

  const doc = {
    title: form.title.value,
    body: form.body.value,
    likes: 0,
  }

  await fetch('http://localhost:3000/post', {
    method: 'POST',
    body: JSON.stringify(doc),
    headers: { 'Content-Type': 'application/json' }
  })

  window.location.replace('/json-server-tutorial/')
}

form.addEventListener('submit', createPost);

