const posts = {
    1: {
      title: "Manali Blog",
      content: "A Manali vlog could focus on showcasing the natural beauty of the area, including the stunning landscapes, snow-capped mountains, and vibrant culture. It could also highlight popular attractions like the Hadimba Temple, Manu Temple, and Solang Valley. Furthermore, a vlog could document adventure activities such as paragliding, trekking, or white water rafting",
      image:"https://d1ewywlalwx2zv.cloudfront.net/location/1740561797.jpg"
    },
    2: {
      title: "Goa Blog",
      content: "A Goa vlog can explore various aspects of the state, including its beaches, nightlife, cuisine, and cultural experiences. Content can range from travel guides and budget tips to showcasing the local scene and personal experiences. Examples include virtual tours of popular areas, food recommendations, and details on budget-friendly travel",
      image:"https://yu-hotel.com/wp-content/uploads/2023/03/best-luxury-hotels-in-north-goa-YU-Hotel.jpg"
    }
  };
  
  const params = new URLSearchParams(window.location.search);
  const postId = params.get("id");
  
  if (postId && posts[postId]) {
    const post = posts[postId];
    const container = document.getElementById("post-content");
    container.innerHTML = `
      <h2>${post.title}</h2>
      <img src="${post.image}" alt="${post.title}" style="max-width:20%; height:30%; border-radius:10px; margin-bottom:15px;">
      <p>${post.content}</p>
    `;
  }
  