<script>
  import Post from './lib/Post.svelte';
  let name = 'world';
  let posts = [];
  let filteredPosts = [];
  let q = "";
  const url = 'https://dummyjson.com/posts/'
  async function getPosts(url) {
      const response = await fetch(url);
      return response.json();
  }
  async function init() {
      const data = await getPosts(url);
      posts = data.posts;
      filteredPosts = posts;
      console.log(data);
  }

  function searchHandler(e) {
    const query = e.target.value;
    if(query.length >= 3) {
      filteredPosts = filteredPosts.filter((post) => 
      post.title.includes(query) ||
      post.body.includes(query) ||
      post.tags.includes(query));
    }
  }
  
  
  init();
</script>



<main>
  <section>
    <label for="search">Search</label>
    <input type="text" id="search" bind:value={q} on:keyup=}>
  </section>
<h1>Hello!</h1>{q}
{filteredPosts as post}
  <Post post={post} />
{/each}
</main>


