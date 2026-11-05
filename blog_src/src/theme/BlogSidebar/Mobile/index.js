import React from 'react';
import OriginalBlogSidebarMobile from '@theme-original/BlogSidebar/Mobile';
import {useVisibleBlogSidebarItems} from '@docusaurus/plugin-content-blog/client';

export default function BlogSidebarMobile(props) {
  const items = useVisibleBlogSidebarItems(props.sidebar.items);
  // An empty secondary menu otherwise hides the useful site navigation.
  return items.length ? <OriginalBlogSidebarMobile {...props} /> : null;
}
