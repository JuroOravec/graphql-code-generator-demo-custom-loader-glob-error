export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  File: any;
  Image: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type BelongsToFilterInput = {
  id?: InputMaybe<IdQueryOperatorInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  typeName?: InputMaybe<TypeNameQueryOperatorInput>;
};

export type DateQueryOperatorInput = {
  /** Filter by property between provided values. */
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  /** Filter by date property equal to provided date value. */
  dteq?: InputMaybe<Scalars['Date']>;
  /** Filter by property of (strict) equality. */
  eq?: InputMaybe<Scalars['Date']>;
  /** Filter nodes that contain the field, including nodes where the field value is null. */
  exists?: InputMaybe<Scalars['Boolean']>;
  /** Filter by property greater than provided value. */
  gt?: InputMaybe<Scalars['Date']>;
  /** Filter by property greater or equal to provided value. */
  gte?: InputMaybe<Scalars['Date']>;
  /** Filter by property matching any of the provided values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  /** Filter by property less than provided value. */
  lt?: InputMaybe<Scalars['Date']>;
  /** Filter by property less than or equal to provided value. */
  lte?: InputMaybe<Scalars['Date']>;
  /** Filter by property not equal to provided value. */
  ne?: InputMaybe<Scalars['Date']>;
  /** Filter by property not matching any of the provided values. */
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type IdQueryOperatorInput = {
  /** Filter by property of (strict) equality. */
  eq?: InputMaybe<Scalars['ID']>;
  /** Filter nodes that contain the field, including nodes where the field value is null. */
  exists?: InputMaybe<Scalars['Boolean']>;
  /** Filter by property matching any of the provided values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter by property not equal to provided value. */
  ne?: InputMaybe<Scalars['ID']>;
  /** Filter by property not matching any of the provided values. */
  nin?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export enum ImageFit {
  /** Embed within both provided dimensions. */
  Contain = 'contain',
  /** Crop to cover both provided dimensions. */
  Cover = 'cover',
  /** Ignore the aspect ratio of the input and stretch to both provided dimensions. */
  Fill = 'fill',
  /** Preserving aspect ratio, resize the image to be as large as possible while ensuring its dimensions are less than or equal to both those specified. */
  Inside = 'inside',
  /** Preserving aspect ratio, resize the image to be as small as possible while ensuring its dimensions are greater than or equal to both those specified. Some of these values are based on the object-fit CSS property. */
  Outside = 'outside'
}

export type ImageQueryOperatorInput = {
  /** Filter by property of (strict) equality. */
  eq?: InputMaybe<Scalars['Image']>;
  /** Filter nodes that contain the field, including nodes where the field value is null. */
  exists?: InputMaybe<Scalars['Boolean']>;
  /** Filter by property matching any of the provided values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['Image']>>>;
  /** Filter by property not equal to provided value. */
  ne?: InputMaybe<Scalars['Image']>;
  /** Filter by property not matching any of the provided values. */
  nin?: InputMaybe<Array<InputMaybe<Scalars['Image']>>>;
  /** Filter by property matching provided regular expression. */
  regex?: InputMaybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  /** Filter by property between provided values. */
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Filter by property of (strict) equality. */
  eq?: InputMaybe<Scalars['Int']>;
  /** Filter nodes that contain the field, including nodes where the field value is null. */
  exists?: InputMaybe<Scalars['Boolean']>;
  /** Filter by property greater than provided value. */
  gt?: InputMaybe<Scalars['Int']>;
  /** Filter by property greater or equal to provided value. */
  gte?: InputMaybe<Scalars['Int']>;
  /** Filter by property matching any of the provided values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Filter by property less than provided value. */
  lt?: InputMaybe<Scalars['Int']>;
  /** Filter by property less than or equal to provided value. */
  lte?: InputMaybe<Scalars['Int']>;
  /** Filter by property not equal to provided value. */
  ne?: InputMaybe<Scalars['Int']>;
  /** Filter by property not matching any of the provided values. */
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type JsonQueryOperatorInput = {
  /** Filter by property of (strict) equality. */
  eq?: InputMaybe<Scalars['JSON']>;
  /** Filter nodes that contain the field, including nodes where the field value is null. */
  exists?: InputMaybe<Scalars['Boolean']>;
  /** Filter by property matching any of the provided values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  /** Filter by property not equal to provided value. */
  ne?: InputMaybe<Scalars['JSON']>;
  /** Filter by property not matching any of the provided values. */
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  /** Filter by property matching provided regular expression. */
  regex?: InputMaybe<Scalars['String']>;
};

export type JournalPost = Node & Post & {
  __typename?: 'JournalPost';
  audios: Array<PostAudio>;
  authors: Array<PostPerson>;
  belongsTo?: Maybe<NodeBelongsTo>;
  canonicalUrl: Scalars['String'];
  content: Scalars['String'];
  contributors: Array<PostPerson>;
  dateExpired?: Maybe<Scalars['Date']>;
  dateModified?: Maybe<Scalars['Date']>;
  datePublished?: Maybe<Scalars['Date']>;
  description: Scalars['String'];
  fileInfo: RemarkFileInfo;
  headings?: Maybe<Array<Maybe<VueRemarkHeading>>>;
  id: Scalars['ID'];
  images: Array<PostImage>;
  mainVideo?: Maybe<OgVideo>;
  path: Scalars['String'];
  related: Array<JournalPost>;
  relatedProjects: Array<ProjectPost>;
  tags: Array<Scalars['String']>;
  timeToRead: ReadTime;
  title: Scalars['String'];
  videos: Array<PostVideo>;
};


export type JournalPostBelongsToArgs = {
  filter?: InputMaybe<BelongsToFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<SortOrder>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<SortArgument>>;
  sortBy?: InputMaybe<Scalars['String']>;
};


export type JournalPostDateExpiredArgs = {
  format?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type JournalPostDateModifiedArgs = {
  format?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type JournalPostDatePublishedArgs = {
  format?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type JournalPostHeadingsArgs = {
  depth?: InputMaybe<VueRemarkHeadingLevels>;
  stripTags?: InputMaybe<Scalars['Boolean']>;
};

export type JournalPostConnection = NodeConnection & {
  __typename?: 'JournalPostConnection';
  edges?: Maybe<Array<Maybe<JournalPostEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type JournalPostEdge = NodeConnectionEdge & {
  __typename?: 'JournalPostEdge';
  next?: Maybe<JournalPost>;
  node?: Maybe<JournalPost>;
  previous?: Maybe<JournalPost>;
};

export type JournalPostFilterInput = {
  audios?: InputMaybe<PostAudioFilterInput>;
  authors?: InputMaybe<PostPersonFilterInput>;
  canonicalUrl?: InputMaybe<StringQueryOperatorInput>;
  content?: InputMaybe<StringQueryOperatorInput>;
  contributors?: InputMaybe<PostPersonFilterInput>;
  dateExpired?: InputMaybe<DateQueryOperatorInput>;
  dateModified?: InputMaybe<DateQueryOperatorInput>;
  datePublished?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fileInfo?: InputMaybe<RemarkFileInfoFilterInput>;
  id?: InputMaybe<IdQueryOperatorInput>;
  images?: InputMaybe<PostImageFilterInput>;
  mainVideo?: InputMaybe<OgVideoFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  tags?: InputMaybe<StringListQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  videos?: InputMaybe<PostVideoFilterInput>;
};

export type Metadata = {
  __typename?: 'Metadata';
  icon?: Maybe<Metadata_Icon>;
  lang?: Maybe<Metadata_Lang>;
  pathPrefix?: Maybe<Scalars['String']>;
  siteAuthor?: Maybe<Metadata_SiteAuthor>;
  siteCopyright?: Maybe<Scalars['String']>;
  siteDescription?: Maybe<Scalars['String']>;
  siteImage?: Maybe<Metadata_SiteImage>;
  siteLastUpdated?: Maybe<Scalars['Date']>;
  siteName?: Maybe<Scalars['String']>;
  siteTags?: Maybe<Array<Maybe<Scalars['String']>>>;
  siteUrl?: Maybe<Scalars['String']>;
  social?: Maybe<Metadata_Social>;
};


export type MetadataSiteLastUpdatedArgs = {
  format?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Metadata_Icon = {
  __typename?: 'Metadata_Icon';
  favicon?: Maybe<Metadata_Icon_Favicon>;
  maskColor?: Maybe<Scalars['String']>;
  touchicon?: Maybe<Scalars['Image']>;
};


export type Metadata_IconTouchiconArgs = {
  background?: InputMaybe<Scalars['String']>;
  blur?: InputMaybe<Scalars['Int']>;
  fit?: InputMaybe<ImageFit>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type Metadata_Icon_Favicon = {
  __typename?: 'Metadata_Icon_Favicon';
  png?: Maybe<Scalars['Image']>;
  svg?: Maybe<Scalars['Image']>;
};


export type Metadata_Icon_FaviconPngArgs = {
  background?: InputMaybe<Scalars['String']>;
  blur?: InputMaybe<Scalars['Int']>;
  fit?: InputMaybe<ImageFit>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type Metadata_Icon_FaviconSvgArgs = {
  background?: InputMaybe<Scalars['String']>;
  blur?: InputMaybe<Scalars['Int']>;
  fit?: InputMaybe<ImageFit>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type Metadata_Lang = {
  __typename?: 'Metadata_Lang';
  lang?: Maybe<Scalars['String']>;
  localeIETF?: Maybe<Scalars['String']>;
  localeJava?: Maybe<Scalars['String']>;
};

export type Metadata_SiteAuthor = {
  __typename?: 'Metadata_SiteAuthor';
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Metadata_SiteImage = {
  __typename?: 'Metadata_SiteImage';
  alt?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['Image']>;
  url?: Maybe<Scalars['String']>;
};


export type Metadata_SiteImageImageArgs = {
  background?: InputMaybe<Scalars['String']>;
  blur?: InputMaybe<Scalars['Int']>;
  fit?: InputMaybe<ImageFit>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type Metadata_Social = {
  __typename?: 'Metadata_Social';
  orgTwitterHandle?: Maybe<Scalars['String']>;
  userTwitterHandle?: Maybe<Scalars['String']>;
};

export type Node = {
  id: Scalars['ID'];
};

export type NodeBelongsTo = NodeConnection & {
  __typename?: 'NodeBelongsTo';
  edges?: Maybe<Array<Maybe<NodeBelongsToEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type NodeBelongsToEdge = NodeConnectionEdge & {
  __typename?: 'NodeBelongsToEdge';
  next?: Maybe<Node>;
  node?: Maybe<Node>;
  previous?: Maybe<Node>;
};

export type NodeConnection = {
  edges?: Maybe<Array<Maybe<NodeConnectionEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type NodeConnectionEdge = {
  next?: Maybe<Node>;
  node?: Maybe<Node>;
  previous?: Maybe<Node>;
};

export enum OgGenderType {
  Female = 'female',
  Male = 'male'
}

/** Open Graph (og:profile) data */
export type OgProfile = {
  __typename?: 'OGProfile';
  firstName: Scalars['String'];
  gender: OgGenderType;
  lastName: Scalars['String'];
  username: Scalars['String'];
};

export type OgProfileRef = {
  __typename?: 'OGProfileRef';
  /** URL pointing to the person's Open Graph profile webpage */
  url: Scalars['String'];
};

export type OgProfileRefFilterInput = {
  url?: InputMaybe<StringQueryOperatorInput>;
};

/** Open Graph (og:video) data */
export type OgVideo = {
  __typename?: 'OGVideo';
  /** Actors in the movie */
  actors: Array<OgVideoActor>;
  /** Directors of the movie */
  directors: Array<OgProfileRef>;
  /** Duration in seconds */
  duration: Scalars['Int'];
  releaseDate?: Maybe<Scalars['Date']>;
  /** Video dimensions */
  size: PostResourceSize;
  /** Tag words associated with this movie */
  tags: Array<Scalars['String']>;
  /** Url of the webpage with the player */
  url: Scalars['String'];
  /** Writers of the movie */
  writers: Array<OgProfileRef>;
};


/** Open Graph (og:video) data */
export type OgVideoReleaseDateArgs = {
  format?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type OgVideoActor = {
  __typename?: 'OGVideoActor';
  /** The role they played */
  role?: Maybe<Scalars['String']>;
  /** URL pointing to the actor's Open Graph profile webpage */
  url: Scalars['String'];
};

export type OgVideoActorFilterInput = {
  role?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type OgVideoFilterInput = {
  actors?: InputMaybe<OgVideoActorFilterInput>;
  directors?: InputMaybe<OgProfileRefFilterInput>;
  duration?: InputMaybe<IntQueryOperatorInput>;
  releaseDate?: InputMaybe<DateQueryOperatorInput>;
  size?: InputMaybe<PostResourceSizeFilterInput>;
  tags?: InputMaybe<StringListQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  writers?: InputMaybe<OgProfileRefFilterInput>;
};

export type Page = {
  __typename?: 'Page';
  context: Scalars['JSON'];
  path: Scalars['String'];
};

export type PageFilterInput = {
  context?: InputMaybe<JsonQueryOperatorInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  isFirst: Scalars['Boolean'];
  isLast: Scalars['Boolean'];
  perPage: Scalars['Int'];
  totalItems: Scalars['Int'];
  totalPages: Scalars['Int'];
};

/** Base interface for a Post */
export type Post = {
  /** Audio sources that accompany the post. */
  audios: Array<PostAudio>;
  /** Post's authors */
  authors: Array<PostPerson>;
  /** The canonical post URL */
  canonicalUrl?: Maybe<Scalars['String']>;
  /** Textual content of the post */
  content: Scalars['String'];
  /** People who contributed to the post */
  contributors: Array<PostPerson>;
  /** The date after which this post will become outdated (optional) */
  dateExpired?: Maybe<Scalars['Date']>;
  /** Last time the post was modified, e.g. edited */
  dateModified?: Maybe<Scalars['Date']>;
  /** Date when the post was first published */
  datePublished?: Maybe<Scalars['Date']>;
  /** Post description. Should be up to 120 characters */
  description: Scalars['String'];
  /** Images associated with the post. First image is used for preview on social media */
  images: Array<PostImage>;
  /**
   * Main video associated with the post that describes a substantial amount of the content.
   * This video should be our own and should be give comparable or more content than the textual version.
   *
   * If present, the post is seen as a video from the Open Graph point of view,
   * e.g. this video is used for preview on social media.
   */
  mainVideo?: Maybe<OgVideo>;
  /** Canonical url path of the post */
  path: Scalars['String'];
  tags: Array<Scalars['String']>;
  /** Post title. Should be up to 120 characters */
  title: Scalars['String'];
  /** Other videos that accompany the post. */
  videos: Array<PostVideo>;
};

export type PostAudio = PostResource & {
  __typename?: 'PostAudio';
  mimeType: Scalars['String'];
  path: Scalars['String'];
};

export type PostAudioFilterInput = {
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
};

export type PostImage = PostResource & {
  __typename?: 'PostImage';
  alt: Scalars['String'];
  mimeType: Scalars['String'];
  path?: Maybe<Scalars['Image']>;
  size: PostResourceSize;
};


export type PostImagePathArgs = {
  background?: InputMaybe<Scalars['String']>;
  blur?: InputMaybe<Scalars['Int']>;
  fit?: InputMaybe<ImageFit>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type PostImageFilterInput = {
  alt?: InputMaybe<StringQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  path?: InputMaybe<ImageQueryOperatorInput>;
  size?: InputMaybe<PostResourceSizeFilterInput>;
};

export type PostPerson = {
  __typename?: 'PostPerson';
  email: Scalars['String'];
  firstName: Scalars['String'];
  fullName: Scalars['String'];
  lastName: Scalars['String'];
  url: Scalars['String'];
};

export type PostPersonFilterInput = {
  email?: InputMaybe<StringQueryOperatorInput>;
  firstName?: InputMaybe<StringQueryOperatorInput>;
  fullName?: InputMaybe<StringQueryOperatorInput>;
  lastName?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type PostResource = {
  /** Mime type of the resource */
  mimeType: Scalars['String'];
};

export type PostResourceSize = {
  __typename?: 'PostResourceSize';
  height: Scalars['Int'];
  width: Scalars['Int'];
};

export type PostResourceSizeFilterInput = {
  height?: InputMaybe<IntQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type PostVideo = PostResource & {
  __typename?: 'PostVideo';
  mimeType: Scalars['String'];
  path: Scalars['String'];
  size: PostResourceSize;
};

export type PostVideoFilterInput = {
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<PostResourceSizeFilterInput>;
};

export type ProjectPost = Node & Post & {
  __typename?: 'ProjectPost';
  audios: Array<PostAudio>;
  authors: Array<PostPerson>;
  belongsTo?: Maybe<NodeBelongsTo>;
  canonicalUrl: Scalars['String'];
  content: Scalars['String'];
  contributors: Array<PostPerson>;
  dateExpired?: Maybe<Scalars['Date']>;
  dateModified?: Maybe<Scalars['Date']>;
  datePublished?: Maybe<Scalars['Date']>;
  description: Scalars['String'];
  fileInfo: RemarkFileInfo;
  headings?: Maybe<Array<Maybe<VueRemarkHeading>>>;
  id: Scalars['ID'];
  images: Array<PostImage>;
  mainVideo?: Maybe<OgVideo>;
  path: Scalars['String'];
  relatedJournals: Array<JournalPost>;
  tags: Array<Scalars['String']>;
  timeToRead: ReadTime;
  title: Scalars['String'];
  videos: Array<PostVideo>;
};


export type ProjectPostBelongsToArgs = {
  filter?: InputMaybe<BelongsToFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<SortOrder>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<SortArgument>>;
  sortBy?: InputMaybe<Scalars['String']>;
};


export type ProjectPostDateExpiredArgs = {
  format?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ProjectPostDateModifiedArgs = {
  format?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ProjectPostDatePublishedArgs = {
  format?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ProjectPostHeadingsArgs = {
  depth?: InputMaybe<VueRemarkHeadingLevels>;
  stripTags?: InputMaybe<Scalars['Boolean']>;
};

export type ProjectPostConnection = NodeConnection & {
  __typename?: 'ProjectPostConnection';
  edges?: Maybe<Array<Maybe<ProjectPostEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ProjectPostEdge = NodeConnectionEdge & {
  __typename?: 'ProjectPostEdge';
  next?: Maybe<ProjectPost>;
  node?: Maybe<ProjectPost>;
  previous?: Maybe<ProjectPost>;
};

export type ProjectPostFilterInput = {
  audios?: InputMaybe<PostAudioFilterInput>;
  authors?: InputMaybe<PostPersonFilterInput>;
  canonicalUrl?: InputMaybe<StringQueryOperatorInput>;
  content?: InputMaybe<StringQueryOperatorInput>;
  contributors?: InputMaybe<PostPersonFilterInput>;
  dateExpired?: InputMaybe<DateQueryOperatorInput>;
  dateModified?: InputMaybe<DateQueryOperatorInput>;
  datePublished?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fileInfo?: InputMaybe<RemarkFileInfoFilterInput>;
  id?: InputMaybe<IdQueryOperatorInput>;
  images?: InputMaybe<PostImageFilterInput>;
  mainVideo?: InputMaybe<OgVideoFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  tags?: InputMaybe<StringListQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  videos?: InputMaybe<PostVideoFilterInput>;
};

export type Query = {
  __typename?: 'Query';
  allJournalPost?: Maybe<JournalPostConnection>;
  allPage?: Maybe<Array<Maybe<Page>>>;
  allProjectPost?: Maybe<ProjectPostConnection>;
  journalPost?: Maybe<JournalPost>;
  /** @deprecated Use Query.metadata instead. */
  metaData?: Maybe<Metadata>;
  metadata?: Maybe<Metadata>;
  page?: Maybe<Page>;
  projectPost?: Maybe<ProjectPost>;
};


export type QueryAllJournalPostArgs = {
  filter?: InputMaybe<JournalPostFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<SortOrder>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<SortArgument>>>;
  sortBy?: InputMaybe<Scalars['String']>;
};


export type QueryAllPageArgs = {
  filter?: InputMaybe<PageFilterInput>;
};


export type QueryAllProjectPostArgs = {
  filter?: InputMaybe<ProjectPostFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<SortOrder>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<SortArgument>>>;
  sortBy?: InputMaybe<Scalars['String']>;
};


export type QueryJournalPostArgs = {
  id?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
};


export type QueryPageArgs = {
  path: Scalars['String'];
};


export type QueryProjectPostArgs = {
  id?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
};

export type ReadTime = {
  __typename?: 'ReadTime';
  minutes: Scalars['Float'];
  text: Scalars['String'];
  time: Scalars['Float'];
  words: Scalars['Int'];
};

/** File info added by remark after parsing an .md file */
export type RemarkFileInfo = {
  __typename?: 'RemarkFileInfo';
  /** Directory of the parsed file, relative to the base path, or '' if at root of base path */
  directory: Scalars['String'];
  /** Extension of the parsed file, e.g. '.md' */
  extension: Scalars['String'];
  /** Name of the parsed file, without extension, e.g. 'my-markdown-file' */
  name: Scalars['String'];
  /** Path of the parsed file, relative to the base path, e.g. 'path/to/dir' */
  path: Scalars['String'];
};

export type RemarkFileInfoFilterInput = {
  directory?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
};

export type SortArgument = {
  by?: Scalars['String'];
  order?: InputMaybe<SortOrder>;
};

export enum SortOrder {
  /** Sort ascending */
  Asc = 'ASC',
  /** Sort descending */
  Desc = 'DESC'
}

export type StringListQueryOperatorInput = {
  /** Filter by property containing the provided value. */
  contains?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter by property containing any of the provided values. */
  containsAny?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter by property containing none of the provided values. */
  containsNone?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter which have an array property of specified size. */
  size?: InputMaybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  /** Filter by property of (strict) equality. */
  eq?: InputMaybe<Scalars['String']>;
  /** Filter nodes that contain the field, including nodes where the field value is null. */
  exists?: InputMaybe<Scalars['Boolean']>;
  /** Filter by property matching any of the provided values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter by property not equal to provided value. */
  ne?: InputMaybe<Scalars['String']>;
  /** Filter by property not matching any of the provided values. */
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter by property matching provided regular expression. */
  regex?: InputMaybe<Scalars['String']>;
};

export enum TypeName {
  JournalPost = 'JournalPost',
  ProjectPost = 'ProjectPost'
}

export type TypeNameQueryOperatorInput = {
  /** Filter by property of (strict) equality. */
  eq?: InputMaybe<TypeName>;
  /** Filter nodes that contain the field, including nodes where the field value is null. */
  exists?: InputMaybe<Scalars['Boolean']>;
  /** Filter by property matching any of the provided values. */
  in?: InputMaybe<Array<InputMaybe<TypeName>>>;
  /** Filter by property not equal to provided value. */
  ne?: InputMaybe<TypeName>;
  /** Filter by property not matching any of the provided values. */
  nin?: InputMaybe<Array<InputMaybe<TypeName>>>;
};

export type VueRemarkHeading = {
  __typename?: 'VueRemarkHeading';
  anchor?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

export enum VueRemarkHeadingLevels {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6'
}

export type AppMetadataQueryVariables = Exact<{ [key: string]: never; }>;


export type AppMetadataQuery = { __typename?: 'Query', metadata?: { __typename?: 'Metadata', siteName?: string | null, siteDescription?: string | null } | null };
