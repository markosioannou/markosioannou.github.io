import React from 'react';
import {HtmlClassNameProvider} from '@docusaurus/theme-common';
import {DocProvider} from '@docusaurus/plugin-content-docs/client';
import DocItemMetadata from '@theme/DocItem/Metadata';
import DocItemLayout from '@theme/DocItem/Layout';

import GiscusComments from '@site/src/components/GiscusComments';

export default function DocItem(props) {
  const docHtmlClassName = `docs-doc-id-${props.content.metadata.id}`;
  const MDXComponent = props.content;

  const frontMatter = props.content.metadata.frontMatter;
  const commentsEnabled = Boolean(frontMatter?.comments);

  return (
    <DocProvider content={props.content}>
      <HtmlClassNameProvider className={docHtmlClassName}>
        <DocItemMetadata />
        <DocItemLayout>
          <MDXComponent />
          {commentsEnabled ? <GiscusComments /> : null}
        </DocItemLayout>
      </HtmlClassNameProvider>
    </DocProvider>
  );
}