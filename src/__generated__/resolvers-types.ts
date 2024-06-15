import { GraphQLResolveInfo } from 'graphql';
// import { MyContext } from '../index';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};
interface MyContext {
  dataSources: {}
}

export type Address = {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']['output']>;
  geo?: Maybe<Geo>;
  street?: Maybe<Scalars['String']['output']>;
  suite?: Maybe<Scalars['String']['output']>;
  zipcode?: Maybe<Scalars['String']['output']>;
};

export type AddressInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  geo?: InputMaybe<GeoInput>;
  street?: InputMaybe<Scalars['String']['input']>;
  suite?: InputMaybe<Scalars['String']['input']>;
  zipcode?: InputMaybe<Scalars['String']['input']>;
};

export type Album = {
  __typename?: 'Album';
  id?: Maybe<Scalars['ID']['output']>;
  photos?: Maybe<PhotosPage>;
  title?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};


export type AlbumPhotosArgs = {
  options?: InputMaybe<PageQueryOptions>;
};

export type AlbumsPage = {
  __typename?: 'AlbumsPage';
  data?: Maybe<Array<Maybe<Album>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
};

export type Comment = {
  __typename?: 'Comment';
  body?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  post?: Maybe<Post>;
};

export type CommentsPage = {
  __typename?: 'CommentsPage';
  data?: Maybe<Array<Maybe<Comment>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
};

export type Company = {
  __typename?: 'Company';
  bs?: Maybe<Scalars['String']['output']>;
  catchPhrase?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type CompanyInput = {
  bs?: InputMaybe<Scalars['String']['input']>;
  catchPhrase?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAlbumInput = {
  title: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type CreateCommentInput = {
  body: Scalars['String']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreatePhotoInput = {
  thumbnailUrl: Scalars['String']['input'];
  title: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type CreatePostInput = {
  body: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateTodoInput = {
  completed: Scalars['Boolean']['input'];
  title: Scalars['String']['input'];
};

export type CreateUserInput = {
  address?: InputMaybe<AddressInput>;
  company?: InputMaybe<CompanyInput>;
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
  website?: InputMaybe<Scalars['String']['input']>;
};

export type Geo = {
  __typename?: 'Geo';
  lat?: Maybe<Scalars['Float']['output']>;
  lng?: Maybe<Scalars['Float']['output']>;
};

export type GeoInput = {
  lat?: InputMaybe<Scalars['Float']['input']>;
  lng?: InputMaybe<Scalars['Float']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['Int']['output']>;
  createAlbum?: Maybe<Album>;
  createComment?: Maybe<Comment>;
  createPhoto?: Maybe<Photo>;
  createPost?: Maybe<Post>;
  createTodo?: Maybe<Todo>;
  createUser?: Maybe<User>;
  deleteAlbum?: Maybe<Scalars['Boolean']['output']>;
  deleteComment?: Maybe<Scalars['Boolean']['output']>;
  deletePhoto?: Maybe<Scalars['Boolean']['output']>;
  deletePost?: Maybe<Scalars['Boolean']['output']>;
  deleteTodo?: Maybe<Scalars['Boolean']['output']>;
  deleteUser?: Maybe<Scalars['Boolean']['output']>;
  updateAlbum?: Maybe<Album>;
  updateComment?: Maybe<Comment>;
  updatePhoto?: Maybe<Photo>;
  updatePost?: Maybe<Post>;
  updateTodo?: Maybe<Todo>;
  updateUser?: Maybe<User>;
};


export type MutationCreateAlbumArgs = {
  input: CreateAlbumInput;
};


export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};


export type MutationCreatePhotoArgs = {
  input: CreatePhotoInput;
};


export type MutationCreatePostArgs = {
  input: CreatePostInput;
};


export type MutationCreateTodoArgs = {
  input: CreateTodoInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteAlbumArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCommentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePhotoArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePostArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTodoArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateAlbumArgs = {
  id: Scalars['ID']['input'];
  input: UpdateAlbumInput;
};


export type MutationUpdateCommentArgs = {
  id: Scalars['ID']['input'];
  input: UpdateCommentInput;
};


export type MutationUpdatePhotoArgs = {
  id: Scalars['ID']['input'];
  input: UpdatePhotoInput;
};


export type MutationUpdatePostArgs = {
  id: Scalars['ID']['input'];
  input: UpdatePostInput;
};


export type MutationUpdateTodoArgs = {
  id: Scalars['ID']['input'];
  input: UpdateTodoInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID']['input'];
  input: UpdateUserInput;
};

export enum OperatorKindEnum {
  Gte = 'GTE',
  Like = 'LIKE',
  Lte = 'LTE',
  Ne = 'NE'
}

export type OperatorOptions = {
  field?: InputMaybe<Scalars['String']['input']>;
  kind?: InputMaybe<OperatorKindEnum>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type PageLimitPair = {
  __typename?: 'PageLimitPair';
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
};

export type PageMetadata = {
  __typename?: 'PageMetadata';
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PageQueryOptions = {
  operators?: InputMaybe<Array<InputMaybe<OperatorOptions>>>;
  paginate?: InputMaybe<PaginateOptions>;
  search?: InputMaybe<SearchOptions>;
  slice?: InputMaybe<SliceOptions>;
  sort?: InputMaybe<Array<InputMaybe<SortOptions>>>;
};

export type PaginateOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type PaginationLinks = {
  __typename?: 'PaginationLinks';
  first?: Maybe<PageLimitPair>;
  last?: Maybe<PageLimitPair>;
  next?: Maybe<PageLimitPair>;
  prev?: Maybe<PageLimitPair>;
};

export type Photo = {
  __typename?: 'Photo';
  album?: Maybe<Album>;
  id?: Maybe<Scalars['ID']['output']>;
  thumbnailUrl?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type PhotosPage = {
  __typename?: 'PhotosPage';
  data?: Maybe<Array<Maybe<Photo>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
};

export type Post = {
  __typename?: 'Post';
  body?: Maybe<Scalars['String']['output']>;
  comments?: Maybe<CommentsPage>;
  id?: Maybe<Scalars['ID']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};


export type PostCommentsArgs = {
  options?: InputMaybe<PageQueryOptions>;
};

export type PostsPage = {
  __typename?: 'PostsPage';
  data?: Maybe<Array<Maybe<Post>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
};

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['Int']['output']>;
  album?: Maybe<Album>;
  albums?: Maybe<AlbumsPage>;
  comment?: Maybe<Comment>;
  comments?: Maybe<CommentsPage>;
  photo?: Maybe<Photo>;
  photos?: Maybe<PhotosPage>;
  post?: Maybe<Post>;
  posts?: Maybe<PostsPage>;
  todo?: Maybe<Todo>;
  todos?: Maybe<TodosPage>;
  user?: Maybe<User>;
  users?: Maybe<UsersPage>;
};


export type QueryAlbumArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAlbumsArgs = {
  options?: InputMaybe<PageQueryOptions>;
};


export type QueryCommentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCommentsArgs = {
  options?: InputMaybe<PageQueryOptions>;
};


export type QueryPhotoArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPhotosArgs = {
  options?: InputMaybe<PageQueryOptions>;
};


export type QueryPostArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPostsArgs = {
  options?: InputMaybe<PageQueryOptions>;
};


export type QueryTodoArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTodosArgs = {
  options?: InputMaybe<PageQueryOptions>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUsersArgs = {
  options?: InputMaybe<PageQueryOptions>;
};

export type SearchOptions = {
  q?: InputMaybe<Scalars['String']['input']>;
};

export type SliceOptions = {
  end?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type SortOptions = {
  field?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<SortOrderEnum>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Todo = {
  __typename?: 'Todo';
  completed?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type TodosPage = {
  __typename?: 'TodosPage';
  data?: Maybe<Array<Maybe<Todo>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
};

export type UpdateAlbumInput = {
  title?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateCommentInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePhotoInput = {
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePostInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTodoInput = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  address?: InputMaybe<AddressInput>;
  company?: InputMaybe<CompanyInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  address?: Maybe<Address>;
  albums?: Maybe<AlbumsPage>;
  company?: Maybe<Company>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  posts?: Maybe<PostsPage>;
  todos?: Maybe<TodosPage>;
  username?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};


export type UserAlbumsArgs = {
  options?: InputMaybe<PageQueryOptions>;
};


export type UserPostsArgs = {
  options?: InputMaybe<PageQueryOptions>;
};


export type UserTodosArgs = {
  options?: InputMaybe<PageQueryOptions>;
};

export type UsersPage = {
  __typename?: 'UsersPage';
  data?: Maybe<Array<Maybe<User>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Address: ResolverTypeWrapper<Address>;
  AddressInput: AddressInput;
  Album: ResolverTypeWrapper<Album>;
  AlbumsPage: ResolverTypeWrapper<AlbumsPage>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Comment: ResolverTypeWrapper<Comment>;
  CommentsPage: ResolverTypeWrapper<CommentsPage>;
  Company: ResolverTypeWrapper<Company>;
  CompanyInput: CompanyInput;
  CreateAlbumInput: CreateAlbumInput;
  CreateCommentInput: CreateCommentInput;
  CreatePhotoInput: CreatePhotoInput;
  CreatePostInput: CreatePostInput;
  CreateTodoInput: CreateTodoInput;
  CreateUserInput: CreateUserInput;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Geo: ResolverTypeWrapper<Geo>;
  GeoInput: GeoInput;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  OperatorKindEnum: OperatorKindEnum;
  OperatorOptions: OperatorOptions;
  PageLimitPair: ResolverTypeWrapper<PageLimitPair>;
  PageMetadata: ResolverTypeWrapper<PageMetadata>;
  PageQueryOptions: PageQueryOptions;
  PaginateOptions: PaginateOptions;
  PaginationLinks: ResolverTypeWrapper<PaginationLinks>;
  Photo: ResolverTypeWrapper<Photo>;
  PhotosPage: ResolverTypeWrapper<PhotosPage>;
  Post: ResolverTypeWrapper<Post>;
  PostsPage: ResolverTypeWrapper<PostsPage>;
  Query: ResolverTypeWrapper<{}>;
  SearchOptions: SearchOptions;
  SliceOptions: SliceOptions;
  SortOptions: SortOptions;
  SortOrderEnum: SortOrderEnum;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Todo: ResolverTypeWrapper<Todo>;
  TodosPage: ResolverTypeWrapper<TodosPage>;
  UpdateAlbumInput: UpdateAlbumInput;
  UpdateCommentInput: UpdateCommentInput;
  UpdatePhotoInput: UpdatePhotoInput;
  UpdatePostInput: UpdatePostInput;
  UpdateTodoInput: UpdateTodoInput;
  UpdateUserInput: UpdateUserInput;
  User: ResolverTypeWrapper<User>;
  UsersPage: ResolverTypeWrapper<UsersPage>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Address: Address;
  AddressInput: AddressInput;
  Album: Album;
  AlbumsPage: AlbumsPage;
  Boolean: Scalars['Boolean']['output'];
  Comment: Comment;
  CommentsPage: CommentsPage;
  Company: Company;
  CompanyInput: CompanyInput;
  CreateAlbumInput: CreateAlbumInput;
  CreateCommentInput: CreateCommentInput;
  CreatePhotoInput: CreatePhotoInput;
  CreatePostInput: CreatePostInput;
  CreateTodoInput: CreateTodoInput;
  CreateUserInput: CreateUserInput;
  Float: Scalars['Float']['output'];
  Geo: Geo;
  GeoInput: GeoInput;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  OperatorOptions: OperatorOptions;
  PageLimitPair: PageLimitPair;
  PageMetadata: PageMetadata;
  PageQueryOptions: PageQueryOptions;
  PaginateOptions: PaginateOptions;
  PaginationLinks: PaginationLinks;
  Photo: Photo;
  PhotosPage: PhotosPage;
  Post: Post;
  PostsPage: PostsPage;
  Query: {};
  SearchOptions: SearchOptions;
  SliceOptions: SliceOptions;
  SortOptions: SortOptions;
  String: Scalars['String']['output'];
  Todo: Todo;
  TodosPage: TodosPage;
  UpdateAlbumInput: UpdateAlbumInput;
  UpdateCommentInput: UpdateCommentInput;
  UpdatePhotoInput: UpdatePhotoInput;
  UpdatePostInput: UpdatePostInput;
  UpdateTodoInput: UpdateTodoInput;
  UpdateUserInput: UpdateUserInput;
  User: User;
  UsersPage: UsersPage;
}>;

export type AddressResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> = ResolversObject<{
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  geo?: Resolver<Maybe<ResolversTypes['Geo']>, ParentType, ContextType>;
  street?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  suite?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zipcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AlbumResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Album'] = ResolversParentTypes['Album']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  photos?: Resolver<Maybe<ResolversTypes['PhotosPage']>, ParentType, ContextType, Partial<AlbumPhotosArgs>>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AlbumsPageResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['AlbumsPage'] = ResolversParentTypes['AlbumsPage']> = ResolversObject<{
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Album']>>>, ParentType, ContextType>;
  links?: Resolver<Maybe<ResolversTypes['PaginationLinks']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['PageMetadata']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CommentResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = ResolversObject<{
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CommentsPageResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['CommentsPage'] = ResolversParentTypes['CommentsPage']> = ResolversObject<{
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Comment']>>>, ParentType, ContextType>;
  links?: Resolver<Maybe<ResolversTypes['PaginationLinks']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['PageMetadata']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CompanyResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Company'] = ResolversParentTypes['Company']> = ResolversObject<{
  bs?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  catchPhrase?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GeoResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Geo'] = ResolversParentTypes['Geo']> = ResolversObject<{
  lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lng?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  _?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createAlbum?: Resolver<Maybe<ResolversTypes['Album']>, ParentType, ContextType, RequireFields<MutationCreateAlbumArgs, 'input'>>;
  createComment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<MutationCreateCommentArgs, 'input'>>;
  createPhoto?: Resolver<Maybe<ResolversTypes['Photo']>, ParentType, ContextType, RequireFields<MutationCreatePhotoArgs, 'input'>>;
  createPost?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<MutationCreatePostArgs, 'input'>>;
  createTodo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<MutationCreateTodoArgs, 'input'>>;
  createUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
  deleteAlbum?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteAlbumArgs, 'id'>>;
  deleteComment?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteCommentArgs, 'id'>>;
  deletePhoto?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeletePhotoArgs, 'id'>>;
  deletePost?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeletePostArgs, 'id'>>;
  deleteTodo?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteTodoArgs, 'id'>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
  updateAlbum?: Resolver<Maybe<ResolversTypes['Album']>, ParentType, ContextType, RequireFields<MutationUpdateAlbumArgs, 'id' | 'input'>>;
  updateComment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<MutationUpdateCommentArgs, 'id' | 'input'>>;
  updatePhoto?: Resolver<Maybe<ResolversTypes['Photo']>, ParentType, ContextType, RequireFields<MutationUpdatePhotoArgs, 'id' | 'input'>>;
  updatePost?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<MutationUpdatePostArgs, 'id' | 'input'>>;
  updateTodo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<MutationUpdateTodoArgs, 'id' | 'input'>>;
  updateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'id' | 'input'>>;
}>;

export type PageLimitPairResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['PageLimitPair'] = ResolversParentTypes['PageLimitPair']> = ResolversObject<{
  limit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PageMetadataResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['PageMetadata'] = ResolversParentTypes['PageMetadata']> = ResolversObject<{
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PaginationLinksResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['PaginationLinks'] = ResolversParentTypes['PaginationLinks']> = ResolversObject<{
  first?: Resolver<Maybe<ResolversTypes['PageLimitPair']>, ParentType, ContextType>;
  last?: Resolver<Maybe<ResolversTypes['PageLimitPair']>, ParentType, ContextType>;
  next?: Resolver<Maybe<ResolversTypes['PageLimitPair']>, ParentType, ContextType>;
  prev?: Resolver<Maybe<ResolversTypes['PageLimitPair']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PhotoResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Photo'] = ResolversParentTypes['Photo']> = ResolversObject<{
  album?: Resolver<Maybe<ResolversTypes['Album']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  thumbnailUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PhotosPageResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['PhotosPage'] = ResolversParentTypes['PhotosPage']> = ResolversObject<{
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Photo']>>>, ParentType, ContextType>;
  links?: Resolver<Maybe<ResolversTypes['PaginationLinks']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['PageMetadata']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PostResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = ResolversObject<{
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  comments?: Resolver<Maybe<ResolversTypes['CommentsPage']>, ParentType, ContextType, Partial<PostCommentsArgs>>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PostsPageResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['PostsPage'] = ResolversParentTypes['PostsPage']> = ResolversObject<{
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Post']>>>, ParentType, ContextType>;
  links?: Resolver<Maybe<ResolversTypes['PaginationLinks']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['PageMetadata']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  _?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  album?: Resolver<Maybe<ResolversTypes['Album']>, ParentType, ContextType, RequireFields<QueryAlbumArgs, 'id'>>;
  albums?: Resolver<Maybe<ResolversTypes['AlbumsPage']>, ParentType, ContextType, Partial<QueryAlbumsArgs>>;
  comment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<QueryCommentArgs, 'id'>>;
  comments?: Resolver<Maybe<ResolversTypes['CommentsPage']>, ParentType, ContextType, Partial<QueryCommentsArgs>>;
  photo?: Resolver<Maybe<ResolversTypes['Photo']>, ParentType, ContextType, RequireFields<QueryPhotoArgs, 'id'>>;
  photos?: Resolver<Maybe<ResolversTypes['PhotosPage']>, ParentType, ContextType, Partial<QueryPhotosArgs>>;
  post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QueryPostArgs, 'id'>>;
  posts?: Resolver<Maybe<ResolversTypes['PostsPage']>, ParentType, ContextType, Partial<QueryPostsArgs>>;
  todo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<QueryTodoArgs, 'id'>>;
  todos?: Resolver<Maybe<ResolversTypes['TodosPage']>, ParentType, ContextType, Partial<QueryTodosArgs>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  users?: Resolver<Maybe<ResolversTypes['UsersPage']>, ParentType, ContextType, Partial<QueryUsersArgs>>;
}>;

export type TodoResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Todo'] = ResolversParentTypes['Todo']> = ResolversObject<{
  completed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TodosPageResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['TodosPage'] = ResolversParentTypes['TodosPage']> = ResolversObject<{
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Todo']>>>, ParentType, ContextType>;
  links?: Resolver<Maybe<ResolversTypes['PaginationLinks']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['PageMetadata']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  address?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  albums?: Resolver<Maybe<ResolversTypes['AlbumsPage']>, ParentType, ContextType, Partial<UserAlbumsArgs>>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  posts?: Resolver<Maybe<ResolversTypes['PostsPage']>, ParentType, ContextType, Partial<UserPostsArgs>>;
  todos?: Resolver<Maybe<ResolversTypes['TodosPage']>, ParentType, ContextType, Partial<UserTodosArgs>>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersPageResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['UsersPage'] = ResolversParentTypes['UsersPage']> = ResolversObject<{
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  links?: Resolver<Maybe<ResolversTypes['PaginationLinks']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['PageMetadata']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MyContext> = ResolversObject<{
  Address?: AddressResolvers<ContextType>;
  Album?: AlbumResolvers<ContextType>;
  AlbumsPage?: AlbumsPageResolvers<ContextType>;
  Comment?: CommentResolvers<ContextType>;
  CommentsPage?: CommentsPageResolvers<ContextType>;
  Company?: CompanyResolvers<ContextType>;
  Geo?: GeoResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PageLimitPair?: PageLimitPairResolvers<ContextType>;
  PageMetadata?: PageMetadataResolvers<ContextType>;
  PaginationLinks?: PaginationLinksResolvers<ContextType>;
  Photo?: PhotoResolvers<ContextType>;
  PhotosPage?: PhotosPageResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  PostsPage?: PostsPageResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Todo?: TodoResolvers<ContextType>;
  TodosPage?: TodosPageResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UsersPage?: UsersPageResolvers<ContextType>;
}>;

