//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

import React from 'react';

type Post = {
  title: string;
  author?: string;
  authorAvatar?: string;
  authorTitle?: string;
  publishDate?: string;
  content: string;
  video_url?: string;
  articleUrl: string;
  azureOssPost?: boolean;
  // azure-oss-post?: boolean;
};

const POSTS: Post[] = [
];

export default function OpenSourceBlog() {
  return (
    <div className="wrapper pt-6 pb-6 mt-6 mb-6" >
      <div className="text-center mb-6" data-animate-in="up" data-animate-in-delay="400">
          <h2 className="h3">Microsoft Open Source Updates</h2>
      </div>
      <div className="blog-list">
        {POSTS.map((post, index) => (
          <a
            key={post?.articleUrl || index}
            className="blog-preview" href={post.articleUrl}
            target="_blank"
            rel="noopener"
            data-animate-in="up"
            data-animate-in-delay="200"
          >
            <div>
              <h3 className="h5 text-brand font-weight-600 mb-2">
                {post.title}
              </h3>
              {post?.author && (
                <span className="blog-preview__meta mb-2">
                  {post?.authorAvatar ? (
                    <img
                      alt={`Photo or avatar image of ${post.author}`}
                      style={
                        {
                          borderRadius: '50%',
                          maxWidth: '32px',
                          display: 'inline-block',
                        }
                      }
                      src={`/images/posts/${post.authorAvatar}`}
                    />
                  ) : (
                    <div
                      style={{ display: 'inline-block', marginLeft: '6px' }}
                    >
                      {post.author}
                      { post.authorTitle && (
                        <>
                          <br />
                          {post.authorTitle}
                        </>
                      )}
                    </div>
                  )}
                </span>
                )}

                {/*                
                  if post.video_url
                  <div className="blog-preview__video">
                      <iframe loading="lazy"  src="https://docs.microsoft.com/_themes/docs.theme/master/en-us/_themes/global/video-embed.html?id=ec3d794c-eb61-42fe-a0ae-016cfa1663a4" allowFullScreen title="{{video.title}}" tabindex="0" allow="autoplay"></iframe>
                  </div>
                */}

                {post.content}

            </div>

            {post?.azureOssPost === true ? (
              <div className="link-arrow-external mt-4">Learn more about open source on Azure</div>
            ) : (
              <div className="link-arrow-external mt-4">Read post</div>
            )}
          </a>          
        ))}
      </div>
    </div>
  );
}
