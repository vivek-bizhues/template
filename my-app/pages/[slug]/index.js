// pages/[slug].js

import React from 'react';

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const res = await fetch(`https://llama.bizhueslabs.com/wp-json/wp/v2/posts?slug=${slug}`);
  const data = await res.json();
  console.log(data,"data")

  return {
    props: {
      post: data.length > 0 ? data[0] : null, // Assuming the API returns an array
    },
  };
}

const SlugPage = ({ post }) => {
    console.log(post,"post")
  if (!post) {
    return <div>No post found</div>;
  }

  return (
    <div>
      <h1>{post.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
};

export default SlugPage;
