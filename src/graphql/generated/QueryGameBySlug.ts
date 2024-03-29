/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_GAME_RATING } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryGameBySlug
// ====================================================

export interface QueryGameBySlug_games_gallery {
  __typename: "UploadFile";
  url: string;
  label: string | null;
}

export interface QueryGameBySlug_games_cover {
  __typename: "UploadFile";
  url: string;
  alternativeText: string | null;
}

export interface QueryGameBySlug_games_categories {
  __typename: "Category";
  name: string;
}

export interface QueryGameBySlug_games_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryGameBySlug_games_publisher {
  __typename: "Publisher";
  name: string;
}

export interface QueryGameBySlug_games_platforms {
  __typename: "Platform";
  name: string;
}

export interface QueryGameBySlug_games {
  __typename: "Game";
  id: string;
  name: string;
  short_description: string;
  price: number;
  description: string;
  release_date: any | null;
  rating: ENUM_GAME_RATING;
  gallery: QueryGameBySlug_games_gallery[];
  cover: QueryGameBySlug_games_cover | null;
  categories: QueryGameBySlug_games_categories[];
  developers: QueryGameBySlug_games_developers[];
  publisher: QueryGameBySlug_games_publisher | null;
  platforms: QueryGameBySlug_games_platforms[];
}

export interface QueryGameBySlug {
  games: QueryGameBySlug_games[];
}

export interface QueryGameBySlugVariables {
  slug: string;
}
