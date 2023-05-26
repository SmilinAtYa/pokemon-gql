import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AbilityPokemon = {
  __typename?: 'AbilityPokemon';
  isHiddenAbility?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** The slot this ability occupies in this Pokémon species */
  slot?: Maybe<Scalars['Int']['output']>;
};

export type Pokemon = {
  __typename?: 'Pokemon';
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type PokemonAbility = {
  __typename?: 'PokemonAbility';
  /** The ability the Pokémon may have */
  ability?: Maybe<Scalars['String']['output']>;
  /** pokemons with this ability */
  pokemons?: Maybe<Array<Maybe<AbilityPokemon>>>;
};

export type Query = {
  __typename?: 'Query';
  ability?: Maybe<PokemonAbility>;
  pokemon?: Maybe<Pokemon>;
};


export type QueryAbilityArgs = {
  abilityName: Scalars['String']['input'];
};


export type QueryPokemonArgs = {
  pokemonName: Scalars['String']['input'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs>;

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
  AbilityPokemon: ResolverTypeWrapper<AbilityPokemon>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Pokemon: ResolverTypeWrapper<Pokemon>;
  PokemonAbility: ResolverTypeWrapper<PokemonAbility>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AbilityPokemon: AbilityPokemon;
  Boolean: Scalars['Boolean']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Pokemon: Pokemon;
  PokemonAbility: PokemonAbility;
  Query: {};
  String: Scalars['String']['output'];
}>;

export type AbilityPokemonResolvers<ContextType = any, ParentType extends ResolversParentTypes['AbilityPokemon'] = ResolversParentTypes['AbilityPokemon']> = ResolversObject<{
  isHiddenAbility?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slot?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PokemonResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pokemon'] = ResolversParentTypes['Pokemon']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PokemonAbilityResolvers<ContextType = any, ParentType extends ResolversParentTypes['PokemonAbility'] = ResolversParentTypes['PokemonAbility']> = ResolversObject<{
  ability?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pokemons?: Resolver<Maybe<Array<Maybe<ResolversTypes['AbilityPokemon']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  ability?: Resolver<Maybe<ResolversTypes['PokemonAbility']>, ParentType, ContextType, RequireFields<QueryAbilityArgs, 'abilityName'>>;
  pokemon?: Resolver<Maybe<ResolversTypes['Pokemon']>, ParentType, ContextType, RequireFields<QueryPokemonArgs, 'pokemonName'>>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  AbilityPokemon?: AbilityPokemonResolvers<ContextType>;
  Pokemon?: PokemonResolvers<ContextType>;
  PokemonAbility?: PokemonAbilityResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
}>;

