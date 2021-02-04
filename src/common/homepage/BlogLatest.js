import React from "react";
import { Post } from "../../templates/post";
import { TitleWithAnchor } from "../TitleWithAnchor";

export default function ({title, posts}) {
  return <div className="blog-latest">
    <TitleWithAnchor className="common-title-container" headerClassName="common-title" children={title} />
    <div className="blog-posts">
      {posts.map(({node: post}) => <Post key={post.id} post={post} />)}
    </div>
  </div>
};
