import { ReactNode } from 'react';

export type RenderCallback = {
  render: (data: any) => ReactNode;
}

export type Entry = {
  getIn: (datas: string[]) => string;
}

export type WidgetFor = (arg0: string) => string;

export type PageContext = {
  tag: string,
  category: string,
  currentPage: number,
  prevPagePath: string,
  nextPagePath: string,
  hasPrevPage: boolean,
  hasNextPage: boolean
};

export type Node = {
  fields: {
    slug?: string,
    categorySlug?: string,
    tagSlugs?: string[]
  },
  frontmatter: {
    date: string,
    description?: string,
    category?: string,
    tags?: string[],
    title: string,
    socialImage?: string
  },
  html?: string,
  id?: string
};

export type Edge = {
  node: Node
};

export type Edges = Edge[];

export type AllMarkdownRemarkData = {
  allMarkdownRemark: {
    edges: Edges,
  },
  group: {
    fieldValue: string,
    totalCount: number
  }[]
};

export type MarkdownRemark = Node;
