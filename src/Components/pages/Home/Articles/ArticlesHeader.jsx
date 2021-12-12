import React from "react";

const ArticlesHeader = () => {
  return (
    <div className='articles-header'>
      <ul>
        <li>
          <a href='/admin/create-article'>Authors</a>
        </li>
        <li>
          <a href='/admin/create-article'>Create New</a>
        </li>
        <li>
          <a href='/admin/create-article'>Tags</a>
        </li>
        <li>
          <a href='/admin/create-article'>More</a>
        </li>
      </ul>
    </div>
  );
};

export default ArticlesHeader;
