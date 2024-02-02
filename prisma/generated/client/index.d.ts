
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model comments
 * 
 */
export type comments = $Result.DefaultSelection<Prisma.$commentsPayload>
/**
 * Model image
 * 
 */
export type image = $Result.DefaultSelection<Prisma.$imagePayload>
/**
 * Model saved_imaged
 * 
 */
export type saved_imaged = $Result.DefaultSelection<Prisma.$saved_imagedPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Comments
 * const comments = await prisma.comments.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Comments
   * const comments = await prisma.comments.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.comments`: Exposes CRUD operations for the **comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comments.findMany()
    * ```
    */
  get comments(): Prisma.commentsDelegate<ExtArgs>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.imageDelegate<ExtArgs>;

  /**
   * `prisma.saved_imaged`: Exposes CRUD operations for the **saved_imaged** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Saved_imageds
    * const saved_imageds = await prisma.saved_imaged.findMany()
    * ```
    */
  get saved_imaged(): Prisma.saved_imagedDelegate<ExtArgs>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.8.0
   * Query Engine version: 0a83d8541752d7582de2ebc1ece46519ce72a848
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    comments: 'comments',
    image: 'image',
    saved_imaged: 'saved_imaged',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'comments' | 'image' | 'saved_imaged' | 'users'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      comments: {
        payload: Prisma.$commentsPayload<ExtArgs>
        fields: Prisma.commentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.commentsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$commentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.commentsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          findFirst: {
            args: Prisma.commentsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$commentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.commentsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          findMany: {
            args: Prisma.commentsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          create: {
            args: Prisma.commentsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          createMany: {
            args: Prisma.commentsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.commentsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          update: {
            args: Prisma.commentsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          deleteMany: {
            args: Prisma.commentsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.commentsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.commentsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          aggregate: {
            args: Prisma.CommentsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateComments>
          }
          groupBy: {
            args: Prisma.commentsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.commentsCountArgs<ExtArgs>,
            result: $Utils.Optional<CommentsCountAggregateOutputType> | number
          }
        }
      }
      image: {
        payload: Prisma.$imagePayload<ExtArgs>
        fields: Prisma.imageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.imageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$imagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.imageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$imagePayload>
          }
          findFirst: {
            args: Prisma.imageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$imagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.imageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$imagePayload>
          }
          findMany: {
            args: Prisma.imageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$imagePayload>[]
          }
          create: {
            args: Prisma.imageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$imagePayload>
          }
          createMany: {
            args: Prisma.imageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.imageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$imagePayload>
          }
          update: {
            args: Prisma.imageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$imagePayload>
          }
          deleteMany: {
            args: Prisma.imageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.imageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.imageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$imagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.imageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.imageCountArgs<ExtArgs>,
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      saved_imaged: {
        payload: Prisma.$saved_imagedPayload<ExtArgs>
        fields: Prisma.saved_imagedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.saved_imagedFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$saved_imagedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.saved_imagedFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$saved_imagedPayload>
          }
          findFirst: {
            args: Prisma.saved_imagedFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$saved_imagedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.saved_imagedFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$saved_imagedPayload>
          }
          findMany: {
            args: Prisma.saved_imagedFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$saved_imagedPayload>[]
          }
          create: {
            args: Prisma.saved_imagedCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$saved_imagedPayload>
          }
          createMany: {
            args: Prisma.saved_imagedCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.saved_imagedDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$saved_imagedPayload>
          }
          update: {
            args: Prisma.saved_imagedUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$saved_imagedPayload>
          }
          deleteMany: {
            args: Prisma.saved_imagedDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.saved_imagedUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.saved_imagedUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$saved_imagedPayload>
          }
          aggregate: {
            args: Prisma.Saved_imagedAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSaved_imaged>
          }
          groupBy: {
            args: Prisma.saved_imagedGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Saved_imagedGroupByOutputType>[]
          }
          count: {
            args: Prisma.saved_imagedCountArgs<ExtArgs>,
            result: $Utils.Optional<Saved_imagedCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ImageCountOutputType
   */

  export type ImageCountOutputType = {
    comments: number
    saved_imaged: number
  }

  export type ImageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | ImageCountOutputTypeCountCommentsArgs
    saved_imaged?: boolean | ImageCountOutputTypeCountSaved_imagedArgs
  }

  // Custom InputTypes

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageCountOutputType
     */
    select?: ImageCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
  }


  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeCountSaved_imagedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: saved_imagedWhereInput
  }



  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    comments: number
    image: number
    saved_imaged: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | UsersCountOutputTypeCountCommentsArgs
    image?: boolean | UsersCountOutputTypeCountImageArgs
    saved_imaged?: boolean | UsersCountOutputTypeCountSaved_imagedArgs
  }

  // Custom InputTypes

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: imageWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSaved_imagedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: saved_imagedWhereInput
  }



  /**
   * Models
   */

  /**
   * Model comments
   */

  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    img_id: number | null
  }

  export type CommentsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    img_id: number | null
  }

  export type CommentsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    img_id: number | null
    comment_day: Date | null
    content: string | null
  }

  export type CommentsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    img_id: number | null
    comment_day: Date | null
    content: string | null
  }

  export type CommentsCountAggregateOutputType = {
    id: number
    user_id: number
    img_id: number
    comment_day: number
    content: number
    _all: number
  }


  export type CommentsAvgAggregateInputType = {
    id?: true
    user_id?: true
    img_id?: true
  }

  export type CommentsSumAggregateInputType = {
    id?: true
    user_id?: true
    img_id?: true
  }

  export type CommentsMinAggregateInputType = {
    id?: true
    user_id?: true
    img_id?: true
    comment_day?: true
    content?: true
  }

  export type CommentsMaxAggregateInputType = {
    id?: true
    user_id?: true
    img_id?: true
    comment_day?: true
    content?: true
  }

  export type CommentsCountAggregateInputType = {
    id?: true
    user_id?: true
    img_id?: true
    comment_day?: true
    content?: true
    _all?: true
  }

  export type CommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to aggregate.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned comments
    **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }




  export type commentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithAggregationInput | commentsOrderByWithAggregationInput[]
    by: CommentsScalarFieldEnum[] | CommentsScalarFieldEnum
    having?: commentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _avg?: CommentsAvgAggregateInputType
    _sum?: CommentsSumAggregateInputType
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }

  export type CommentsGroupByOutputType = {
    id: number
    user_id: number | null
    img_id: number | null
    comment_day: Date | null
    content: string | null
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends commentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      >
    >


  export type commentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    img_id?: boolean
    comment_day?: boolean
    content?: boolean
    image?: boolean | comments$imageArgs<ExtArgs>
    users?: boolean | comments$usersArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectScalar = {
    id?: boolean
    user_id?: boolean
    img_id?: boolean
    comment_day?: boolean
    content?: boolean
  }

  export type commentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image?: boolean | comments$imageArgs<ExtArgs>
    users?: boolean | comments$usersArgs<ExtArgs>
  }


  export type $commentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "comments"
    objects: {
      image: Prisma.$imagePayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      img_id: number | null
      comment_day: Date | null
      content: string | null
    }, ExtArgs["result"]["comments"]>
    composites: {}
  }


  type commentsGetPayload<S extends boolean | null | undefined | commentsDefaultArgs> = $Result.GetResult<Prisma.$commentsPayload, S>

  type commentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<commentsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CommentsCountAggregateInputType | true
    }

  export interface commentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['comments'], meta: { name: 'comments' } }
    /**
     * Find zero or one Comments that matches the filter.
     * @param {commentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends commentsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, commentsFindUniqueArgs<ExtArgs>>
    ): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Comments that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {commentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends commentsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, commentsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends commentsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, commentsFindFirstArgs<ExtArgs>>
    ): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends commentsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, commentsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentsWithIdOnly = await prisma.comments.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends commentsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, commentsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Comments.
     * @param {commentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     * 
    **/
    create<T extends commentsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, commentsCreateArgs<ExtArgs>>
    ): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Comments.
     *     @param {commentsCreateManyArgs} args - Arguments to create many Comments.
     *     @example
     *     // Create many Comments
     *     const comments = await prisma.comments.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends commentsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, commentsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comments.
     * @param {commentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     * 
    **/
    delete<T extends commentsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, commentsDeleteArgs<ExtArgs>>
    ): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Comments.
     * @param {commentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends commentsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, commentsUpdateArgs<ExtArgs>>
    ): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Comments.
     * @param {commentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends commentsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, commentsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends commentsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, commentsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comments.
     * @param {commentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
    **/
    upsert<T extends commentsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, commentsUpsertArgs<ExtArgs>>
    ): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends commentsCountArgs>(
      args?: Subset<T, commentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentsAggregateArgs>(args: Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends commentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: commentsGroupByArgs['orderBy'] }
        : { orderBy?: commentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, commentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the comments model
   */
  readonly fields: commentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__commentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    image<T extends comments$imageArgs<ExtArgs> = {}>(args?: Subset<T, comments$imageArgs<ExtArgs>>): Prisma__imageClient<$Result.GetResult<Prisma.$imagePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    users<T extends comments$usersArgs<ExtArgs> = {}>(args?: Subset<T, comments$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the comments model
   */ 
  interface commentsFieldRefs {
    readonly id: FieldRef<"comments", 'Int'>
    readonly user_id: FieldRef<"comments", 'Int'>
    readonly img_id: FieldRef<"comments", 'Int'>
    readonly comment_day: FieldRef<"comments", 'DateTime'>
    readonly content: FieldRef<"comments", 'String'>
  }
    

  // Custom InputTypes

  /**
   * comments findUnique
   */
  export type commentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where: commentsWhereUniqueInput
  }


  /**
   * comments findUniqueOrThrow
   */
  export type commentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where: commentsWhereUniqueInput
  }


  /**
   * comments findFirst
   */
  export type commentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }


  /**
   * comments findFirstOrThrow
   */
  export type commentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }


  /**
   * comments findMany
   */
  export type commentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }


  /**
   * comments create
   */
  export type commentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The data needed to create a comments.
     */
    data?: XOR<commentsCreateInput, commentsUncheckedCreateInput>
  }


  /**
   * comments createMany
   */
  export type commentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many comments.
     */
    data: commentsCreateManyInput | commentsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * comments update
   */
  export type commentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The data needed to update a comments.
     */
    data: XOR<commentsUpdateInput, commentsUncheckedUpdateInput>
    /**
     * Choose, which comments to update.
     */
    where: commentsWhereUniqueInput
  }


  /**
   * comments updateMany
   */
  export type commentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update comments.
     */
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyInput>
    /**
     * Filter which comments to update
     */
    where?: commentsWhereInput
  }


  /**
   * comments upsert
   */
  export type commentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The filter to search for the comments to update in case it exists.
     */
    where: commentsWhereUniqueInput
    /**
     * In case the comments found by the `where` argument doesn't exist, create a new comments with this data.
     */
    create: XOR<commentsCreateInput, commentsUncheckedCreateInput>
    /**
     * In case the comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<commentsUpdateInput, commentsUncheckedUpdateInput>
  }


  /**
   * comments delete
   */
  export type commentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter which comments to delete.
     */
    where: commentsWhereUniqueInput
  }


  /**
   * comments deleteMany
   */
  export type commentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to delete
     */
    where?: commentsWhereInput
  }


  /**
   * comments.image
   */
  export type comments$imageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: imageInclude<ExtArgs> | null
    where?: imageWhereInput
  }


  /**
   * comments.users
   */
  export type comments$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }


  /**
   * comments without action
   */
  export type commentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commentsInclude<ExtArgs> | null
  }



  /**
   * Model image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type ImageSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type ImageMinAggregateOutputType = {
    id: number | null
    img_name: string | null
    img_url: string | null
    img_decs: string | null
    user_id: number | null
  }

  export type ImageMaxAggregateOutputType = {
    id: number | null
    img_name: string | null
    img_url: string | null
    img_decs: string | null
    user_id: number | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    img_name: number
    img_url: number
    img_decs: number
    user_id: number
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type ImageSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type ImageMinAggregateInputType = {
    id?: true
    img_name?: true
    img_url?: true
    img_decs?: true
    user_id?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    img_name?: true
    img_url?: true
    img_decs?: true
    user_id?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    img_name?: true
    img_url?: true
    img_decs?: true
    user_id?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which image to aggregate.
     */
    where?: imageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images to fetch.
     */
    orderBy?: imageOrderByWithRelationInput | imageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: imageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type imageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: imageWhereInput
    orderBy?: imageOrderByWithAggregationInput | imageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: imageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _avg?: ImageAvgAggregateInputType
    _sum?: ImageSumAggregateInputType
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: number
    img_name: string | null
    img_url: string | null
    img_decs: string | null
    user_id: number | null
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends imageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type imageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    img_name?: boolean
    img_url?: boolean
    img_decs?: boolean
    user_id?: boolean
    comments?: boolean | image$commentsArgs<ExtArgs>
    users?: boolean | image$usersArgs<ExtArgs>
    saved_imaged?: boolean | image$saved_imagedArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type imageSelectScalar = {
    id?: boolean
    img_name?: boolean
    img_url?: boolean
    img_decs?: boolean
    user_id?: boolean
  }

  export type imageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | image$commentsArgs<ExtArgs>
    users?: boolean | image$usersArgs<ExtArgs>
    saved_imaged?: boolean | image$saved_imagedArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $imagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "image"
    objects: {
      comments: Prisma.$commentsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs> | null
      saved_imaged: Prisma.$saved_imagedPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      img_name: string | null
      img_url: string | null
      img_decs: string | null
      user_id: number | null
    }, ExtArgs["result"]["image"]>
    composites: {}
  }


  type imageGetPayload<S extends boolean | null | undefined | imageDefaultArgs> = $Result.GetResult<Prisma.$imagePayload, S>

  type imageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<imageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface imageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['image'], meta: { name: 'image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {imageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends imageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, imageFindUniqueArgs<ExtArgs>>
    ): Prisma__imageClient<$Result.GetResult<Prisma.$imagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Image that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {imageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends imageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, imageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__imageClient<$Result.GetResult<Prisma.$imagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends imageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, imageFindFirstArgs<ExtArgs>>
    ): Prisma__imageClient<$Result.GetResult<Prisma.$imagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends imageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, imageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__imageClient<$Result.GetResult<Prisma.$imagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends imageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, imageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$imagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Image.
     * @param {imageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
    **/
    create<T extends imageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, imageCreateArgs<ExtArgs>>
    ): Prisma__imageClient<$Result.GetResult<Prisma.$imagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Images.
     *     @param {imageCreateManyArgs} args - Arguments to create many Images.
     *     @example
     *     // Create many Images
     *     const image = await prisma.image.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends imageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, imageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Image.
     * @param {imageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
    **/
    delete<T extends imageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, imageDeleteArgs<ExtArgs>>
    ): Prisma__imageClient<$Result.GetResult<Prisma.$imagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Image.
     * @param {imageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends imageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, imageUpdateArgs<ExtArgs>>
    ): Prisma__imageClient<$Result.GetResult<Prisma.$imagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Images.
     * @param {imageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends imageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, imageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends imageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, imageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Image.
     * @param {imageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
    **/
    upsert<T extends imageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, imageUpsertArgs<ExtArgs>>
    ): Prisma__imageClient<$Result.GetResult<Prisma.$imagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends imageCountArgs>(
      args?: Subset<T, imageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends imageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: imageGroupByArgs['orderBy'] }
        : { orderBy?: imageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, imageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the image model
   */
  readonly fields: imageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__imageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    comments<T extends image$commentsArgs<ExtArgs> = {}>(args?: Subset<T, image$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, 'findMany'> | Null>;

    users<T extends image$usersArgs<ExtArgs> = {}>(args?: Subset<T, image$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    saved_imaged<T extends image$saved_imagedArgs<ExtArgs> = {}>(args?: Subset<T, image$saved_imagedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$saved_imagedPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the image model
   */ 
  interface imageFieldRefs {
    readonly id: FieldRef<"image", 'Int'>
    readonly img_name: FieldRef<"image", 'String'>
    readonly img_url: FieldRef<"image", 'String'>
    readonly img_decs: FieldRef<"image", 'String'>
    readonly user_id: FieldRef<"image", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * image findUnique
   */
  export type imageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: imageInclude<ExtArgs> | null
    /**
     * Filter, which image to fetch.
     */
    where: imageWhereUniqueInput
  }


  /**
   * image findUniqueOrThrow
   */
  export type imageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: imageInclude<ExtArgs> | null
    /**
     * Filter, which image to fetch.
     */
    where: imageWhereUniqueInput
  }


  /**
   * image findFirst
   */
  export type imageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: imageInclude<ExtArgs> | null
    /**
     * Filter, which image to fetch.
     */
    where?: imageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images to fetch.
     */
    orderBy?: imageOrderByWithRelationInput | imageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for images.
     */
    cursor?: imageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }


  /**
   * image findFirstOrThrow
   */
  export type imageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: imageInclude<ExtArgs> | null
    /**
     * Filter, which image to fetch.
     */
    where?: imageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images to fetch.
     */
    orderBy?: imageOrderByWithRelationInput | imageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for images.
     */
    cursor?: imageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }


  /**
   * image findMany
   */
  export type imageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: imageInclude<ExtArgs> | null
    /**
     * Filter, which images to fetch.
     */
    where?: imageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images to fetch.
     */
    orderBy?: imageOrderByWithRelationInput | imageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing images.
     */
    cursor?: imageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }


  /**
   * image create
   */
  export type imageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: imageInclude<ExtArgs> | null
    /**
     * The data needed to create a image.
     */
    data?: XOR<imageCreateInput, imageUncheckedCreateInput>
  }


  /**
   * image createMany
   */
  export type imageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many images.
     */
    data: imageCreateManyInput | imageCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * image update
   */
  export type imageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: imageInclude<ExtArgs> | null
    /**
     * The data needed to update a image.
     */
    data: XOR<imageUpdateInput, imageUncheckedUpdateInput>
    /**
     * Choose, which image to update.
     */
    where: imageWhereUniqueInput
  }


  /**
   * image updateMany
   */
  export type imageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update images.
     */
    data: XOR<imageUpdateManyMutationInput, imageUncheckedUpdateManyInput>
    /**
     * Filter which images to update
     */
    where?: imageWhereInput
  }


  /**
   * image upsert
   */
  export type imageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: imageInclude<ExtArgs> | null
    /**
     * The filter to search for the image to update in case it exists.
     */
    where: imageWhereUniqueInput
    /**
     * In case the image found by the `where` argument doesn't exist, create a new image with this data.
     */
    create: XOR<imageCreateInput, imageUncheckedCreateInput>
    /**
     * In case the image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<imageUpdateInput, imageUncheckedUpdateInput>
  }


  /**
   * image delete
   */
  export type imageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: imageInclude<ExtArgs> | null
    /**
     * Filter which image to delete.
     */
    where: imageWhereUniqueInput
  }


  /**
   * image deleteMany
   */
  export type imageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which images to delete
     */
    where?: imageWhereInput
  }


  /**
   * image.comments
   */
  export type image$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    cursor?: commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }


  /**
   * image.users
   */
  export type image$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }


  /**
   * image.saved_imaged
   */
  export type image$saved_imagedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_imaged
     */
    select?: saved_imagedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: saved_imagedInclude<ExtArgs> | null
    where?: saved_imagedWhereInput
    orderBy?: saved_imagedOrderByWithRelationInput | saved_imagedOrderByWithRelationInput[]
    cursor?: saved_imagedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Saved_imagedScalarFieldEnum | Saved_imagedScalarFieldEnum[]
  }


  /**
   * image without action
   */
  export type imageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: imageInclude<ExtArgs> | null
  }



  /**
   * Model saved_imaged
   */

  export type AggregateSaved_imaged = {
    _count: Saved_imagedCountAggregateOutputType | null
    _avg: Saved_imagedAvgAggregateOutputType | null
    _sum: Saved_imagedSumAggregateOutputType | null
    _min: Saved_imagedMinAggregateOutputType | null
    _max: Saved_imagedMaxAggregateOutputType | null
  }

  export type Saved_imagedAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    img_id: number | null
  }

  export type Saved_imagedSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    img_id: number | null
  }

  export type Saved_imagedMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    img_id: number | null
    storage_day: Date | null
  }

  export type Saved_imagedMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    img_id: number | null
    storage_day: Date | null
  }

  export type Saved_imagedCountAggregateOutputType = {
    id: number
    user_id: number
    img_id: number
    storage_day: number
    _all: number
  }


  export type Saved_imagedAvgAggregateInputType = {
    id?: true
    user_id?: true
    img_id?: true
  }

  export type Saved_imagedSumAggregateInputType = {
    id?: true
    user_id?: true
    img_id?: true
  }

  export type Saved_imagedMinAggregateInputType = {
    id?: true
    user_id?: true
    img_id?: true
    storage_day?: true
  }

  export type Saved_imagedMaxAggregateInputType = {
    id?: true
    user_id?: true
    img_id?: true
    storage_day?: true
  }

  export type Saved_imagedCountAggregateInputType = {
    id?: true
    user_id?: true
    img_id?: true
    storage_day?: true
    _all?: true
  }

  export type Saved_imagedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which saved_imaged to aggregate.
     */
    where?: saved_imagedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saved_imageds to fetch.
     */
    orderBy?: saved_imagedOrderByWithRelationInput | saved_imagedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: saved_imagedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saved_imageds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saved_imageds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned saved_imageds
    **/
    _count?: true | Saved_imagedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Saved_imagedAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Saved_imagedSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Saved_imagedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Saved_imagedMaxAggregateInputType
  }

  export type GetSaved_imagedAggregateType<T extends Saved_imagedAggregateArgs> = {
        [P in keyof T & keyof AggregateSaved_imaged]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSaved_imaged[P]>
      : GetScalarType<T[P], AggregateSaved_imaged[P]>
  }




  export type saved_imagedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: saved_imagedWhereInput
    orderBy?: saved_imagedOrderByWithAggregationInput | saved_imagedOrderByWithAggregationInput[]
    by: Saved_imagedScalarFieldEnum[] | Saved_imagedScalarFieldEnum
    having?: saved_imagedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Saved_imagedCountAggregateInputType | true
    _avg?: Saved_imagedAvgAggregateInputType
    _sum?: Saved_imagedSumAggregateInputType
    _min?: Saved_imagedMinAggregateInputType
    _max?: Saved_imagedMaxAggregateInputType
  }

  export type Saved_imagedGroupByOutputType = {
    id: number
    user_id: number | null
    img_id: number | null
    storage_day: Date | null
    _count: Saved_imagedCountAggregateOutputType | null
    _avg: Saved_imagedAvgAggregateOutputType | null
    _sum: Saved_imagedSumAggregateOutputType | null
    _min: Saved_imagedMinAggregateOutputType | null
    _max: Saved_imagedMaxAggregateOutputType | null
  }

  type GetSaved_imagedGroupByPayload<T extends saved_imagedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Saved_imagedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Saved_imagedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Saved_imagedGroupByOutputType[P]>
            : GetScalarType<T[P], Saved_imagedGroupByOutputType[P]>
        }
      >
    >


  export type saved_imagedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    img_id?: boolean
    storage_day?: boolean
    image?: boolean | saved_imaged$imageArgs<ExtArgs>
    users?: boolean | saved_imaged$usersArgs<ExtArgs>
  }, ExtArgs["result"]["saved_imaged"]>

  export type saved_imagedSelectScalar = {
    id?: boolean
    user_id?: boolean
    img_id?: boolean
    storage_day?: boolean
  }

  export type saved_imagedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image?: boolean | saved_imaged$imageArgs<ExtArgs>
    users?: boolean | saved_imaged$usersArgs<ExtArgs>
  }


  export type $saved_imagedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "saved_imaged"
    objects: {
      image: Prisma.$imagePayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      img_id: number | null
      storage_day: Date | null
    }, ExtArgs["result"]["saved_imaged"]>
    composites: {}
  }


  type saved_imagedGetPayload<S extends boolean | null | undefined | saved_imagedDefaultArgs> = $Result.GetResult<Prisma.$saved_imagedPayload, S>

  type saved_imagedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<saved_imagedFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Saved_imagedCountAggregateInputType | true
    }

  export interface saved_imagedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['saved_imaged'], meta: { name: 'saved_imaged' } }
    /**
     * Find zero or one Saved_imaged that matches the filter.
     * @param {saved_imagedFindUniqueArgs} args - Arguments to find a Saved_imaged
     * @example
     * // Get one Saved_imaged
     * const saved_imaged = await prisma.saved_imaged.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends saved_imagedFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, saved_imagedFindUniqueArgs<ExtArgs>>
    ): Prisma__saved_imagedClient<$Result.GetResult<Prisma.$saved_imagedPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Saved_imaged that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {saved_imagedFindUniqueOrThrowArgs} args - Arguments to find a Saved_imaged
     * @example
     * // Get one Saved_imaged
     * const saved_imaged = await prisma.saved_imaged.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends saved_imagedFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, saved_imagedFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__saved_imagedClient<$Result.GetResult<Prisma.$saved_imagedPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Saved_imaged that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_imagedFindFirstArgs} args - Arguments to find a Saved_imaged
     * @example
     * // Get one Saved_imaged
     * const saved_imaged = await prisma.saved_imaged.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends saved_imagedFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, saved_imagedFindFirstArgs<ExtArgs>>
    ): Prisma__saved_imagedClient<$Result.GetResult<Prisma.$saved_imagedPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Saved_imaged that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_imagedFindFirstOrThrowArgs} args - Arguments to find a Saved_imaged
     * @example
     * // Get one Saved_imaged
     * const saved_imaged = await prisma.saved_imaged.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends saved_imagedFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, saved_imagedFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__saved_imagedClient<$Result.GetResult<Prisma.$saved_imagedPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Saved_imageds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_imagedFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Saved_imageds
     * const saved_imageds = await prisma.saved_imaged.findMany()
     * 
     * // Get first 10 Saved_imageds
     * const saved_imageds = await prisma.saved_imaged.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saved_imagedWithIdOnly = await prisma.saved_imaged.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends saved_imagedFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, saved_imagedFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$saved_imagedPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Saved_imaged.
     * @param {saved_imagedCreateArgs} args - Arguments to create a Saved_imaged.
     * @example
     * // Create one Saved_imaged
     * const Saved_imaged = await prisma.saved_imaged.create({
     *   data: {
     *     // ... data to create a Saved_imaged
     *   }
     * })
     * 
    **/
    create<T extends saved_imagedCreateArgs<ExtArgs>>(
      args: SelectSubset<T, saved_imagedCreateArgs<ExtArgs>>
    ): Prisma__saved_imagedClient<$Result.GetResult<Prisma.$saved_imagedPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Saved_imageds.
     *     @param {saved_imagedCreateManyArgs} args - Arguments to create many Saved_imageds.
     *     @example
     *     // Create many Saved_imageds
     *     const saved_imaged = await prisma.saved_imaged.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends saved_imagedCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, saved_imagedCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Saved_imaged.
     * @param {saved_imagedDeleteArgs} args - Arguments to delete one Saved_imaged.
     * @example
     * // Delete one Saved_imaged
     * const Saved_imaged = await prisma.saved_imaged.delete({
     *   where: {
     *     // ... filter to delete one Saved_imaged
     *   }
     * })
     * 
    **/
    delete<T extends saved_imagedDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, saved_imagedDeleteArgs<ExtArgs>>
    ): Prisma__saved_imagedClient<$Result.GetResult<Prisma.$saved_imagedPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Saved_imaged.
     * @param {saved_imagedUpdateArgs} args - Arguments to update one Saved_imaged.
     * @example
     * // Update one Saved_imaged
     * const saved_imaged = await prisma.saved_imaged.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends saved_imagedUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, saved_imagedUpdateArgs<ExtArgs>>
    ): Prisma__saved_imagedClient<$Result.GetResult<Prisma.$saved_imagedPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Saved_imageds.
     * @param {saved_imagedDeleteManyArgs} args - Arguments to filter Saved_imageds to delete.
     * @example
     * // Delete a few Saved_imageds
     * const { count } = await prisma.saved_imaged.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends saved_imagedDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, saved_imagedDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Saved_imageds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_imagedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Saved_imageds
     * const saved_imaged = await prisma.saved_imaged.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends saved_imagedUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, saved_imagedUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Saved_imaged.
     * @param {saved_imagedUpsertArgs} args - Arguments to update or create a Saved_imaged.
     * @example
     * // Update or create a Saved_imaged
     * const saved_imaged = await prisma.saved_imaged.upsert({
     *   create: {
     *     // ... data to create a Saved_imaged
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Saved_imaged we want to update
     *   }
     * })
    **/
    upsert<T extends saved_imagedUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, saved_imagedUpsertArgs<ExtArgs>>
    ): Prisma__saved_imagedClient<$Result.GetResult<Prisma.$saved_imagedPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Saved_imageds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_imagedCountArgs} args - Arguments to filter Saved_imageds to count.
     * @example
     * // Count the number of Saved_imageds
     * const count = await prisma.saved_imaged.count({
     *   where: {
     *     // ... the filter for the Saved_imageds we want to count
     *   }
     * })
    **/
    count<T extends saved_imagedCountArgs>(
      args?: Subset<T, saved_imagedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Saved_imagedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Saved_imaged.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Saved_imagedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Saved_imagedAggregateArgs>(args: Subset<T, Saved_imagedAggregateArgs>): Prisma.PrismaPromise<GetSaved_imagedAggregateType<T>>

    /**
     * Group by Saved_imaged.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_imagedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends saved_imagedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: saved_imagedGroupByArgs['orderBy'] }
        : { orderBy?: saved_imagedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, saved_imagedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaved_imagedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the saved_imaged model
   */
  readonly fields: saved_imagedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for saved_imaged.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__saved_imagedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    image<T extends saved_imaged$imageArgs<ExtArgs> = {}>(args?: Subset<T, saved_imaged$imageArgs<ExtArgs>>): Prisma__imageClient<$Result.GetResult<Prisma.$imagePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    users<T extends saved_imaged$usersArgs<ExtArgs> = {}>(args?: Subset<T, saved_imaged$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the saved_imaged model
   */ 
  interface saved_imagedFieldRefs {
    readonly id: FieldRef<"saved_imaged", 'Int'>
    readonly user_id: FieldRef<"saved_imaged", 'Int'>
    readonly img_id: FieldRef<"saved_imaged", 'Int'>
    readonly storage_day: FieldRef<"saved_imaged", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * saved_imaged findUnique
   */
  export type saved_imagedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_imaged
     */
    select?: saved_imagedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: saved_imagedInclude<ExtArgs> | null
    /**
     * Filter, which saved_imaged to fetch.
     */
    where: saved_imagedWhereUniqueInput
  }


  /**
   * saved_imaged findUniqueOrThrow
   */
  export type saved_imagedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_imaged
     */
    select?: saved_imagedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: saved_imagedInclude<ExtArgs> | null
    /**
     * Filter, which saved_imaged to fetch.
     */
    where: saved_imagedWhereUniqueInput
  }


  /**
   * saved_imaged findFirst
   */
  export type saved_imagedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_imaged
     */
    select?: saved_imagedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: saved_imagedInclude<ExtArgs> | null
    /**
     * Filter, which saved_imaged to fetch.
     */
    where?: saved_imagedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saved_imageds to fetch.
     */
    orderBy?: saved_imagedOrderByWithRelationInput | saved_imagedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for saved_imageds.
     */
    cursor?: saved_imagedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saved_imageds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saved_imageds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of saved_imageds.
     */
    distinct?: Saved_imagedScalarFieldEnum | Saved_imagedScalarFieldEnum[]
  }


  /**
   * saved_imaged findFirstOrThrow
   */
  export type saved_imagedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_imaged
     */
    select?: saved_imagedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: saved_imagedInclude<ExtArgs> | null
    /**
     * Filter, which saved_imaged to fetch.
     */
    where?: saved_imagedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saved_imageds to fetch.
     */
    orderBy?: saved_imagedOrderByWithRelationInput | saved_imagedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for saved_imageds.
     */
    cursor?: saved_imagedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saved_imageds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saved_imageds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of saved_imageds.
     */
    distinct?: Saved_imagedScalarFieldEnum | Saved_imagedScalarFieldEnum[]
  }


  /**
   * saved_imaged findMany
   */
  export type saved_imagedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_imaged
     */
    select?: saved_imagedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: saved_imagedInclude<ExtArgs> | null
    /**
     * Filter, which saved_imageds to fetch.
     */
    where?: saved_imagedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saved_imageds to fetch.
     */
    orderBy?: saved_imagedOrderByWithRelationInput | saved_imagedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing saved_imageds.
     */
    cursor?: saved_imagedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saved_imageds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saved_imageds.
     */
    skip?: number
    distinct?: Saved_imagedScalarFieldEnum | Saved_imagedScalarFieldEnum[]
  }


  /**
   * saved_imaged create
   */
  export type saved_imagedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_imaged
     */
    select?: saved_imagedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: saved_imagedInclude<ExtArgs> | null
    /**
     * The data needed to create a saved_imaged.
     */
    data?: XOR<saved_imagedCreateInput, saved_imagedUncheckedCreateInput>
  }


  /**
   * saved_imaged createMany
   */
  export type saved_imagedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many saved_imageds.
     */
    data: saved_imagedCreateManyInput | saved_imagedCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * saved_imaged update
   */
  export type saved_imagedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_imaged
     */
    select?: saved_imagedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: saved_imagedInclude<ExtArgs> | null
    /**
     * The data needed to update a saved_imaged.
     */
    data: XOR<saved_imagedUpdateInput, saved_imagedUncheckedUpdateInput>
    /**
     * Choose, which saved_imaged to update.
     */
    where: saved_imagedWhereUniqueInput
  }


  /**
   * saved_imaged updateMany
   */
  export type saved_imagedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update saved_imageds.
     */
    data: XOR<saved_imagedUpdateManyMutationInput, saved_imagedUncheckedUpdateManyInput>
    /**
     * Filter which saved_imageds to update
     */
    where?: saved_imagedWhereInput
  }


  /**
   * saved_imaged upsert
   */
  export type saved_imagedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_imaged
     */
    select?: saved_imagedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: saved_imagedInclude<ExtArgs> | null
    /**
     * The filter to search for the saved_imaged to update in case it exists.
     */
    where: saved_imagedWhereUniqueInput
    /**
     * In case the saved_imaged found by the `where` argument doesn't exist, create a new saved_imaged with this data.
     */
    create: XOR<saved_imagedCreateInput, saved_imagedUncheckedCreateInput>
    /**
     * In case the saved_imaged was found with the provided `where` argument, update it with this data.
     */
    update: XOR<saved_imagedUpdateInput, saved_imagedUncheckedUpdateInput>
  }


  /**
   * saved_imaged delete
   */
  export type saved_imagedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_imaged
     */
    select?: saved_imagedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: saved_imagedInclude<ExtArgs> | null
    /**
     * Filter which saved_imaged to delete.
     */
    where: saved_imagedWhereUniqueInput
  }


  /**
   * saved_imaged deleteMany
   */
  export type saved_imagedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which saved_imageds to delete
     */
    where?: saved_imagedWhereInput
  }


  /**
   * saved_imaged.image
   */
  export type saved_imaged$imageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: imageInclude<ExtArgs> | null
    where?: imageWhereInput
  }


  /**
   * saved_imaged.users
   */
  export type saved_imaged$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }


  /**
   * saved_imaged without action
   */
  export type saved_imagedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_imaged
     */
    select?: saved_imagedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: saved_imagedInclude<ExtArgs> | null
  }



  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    age: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    age: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    age: number | null
    avatar: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    age: number | null
    avatar: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    age: number
    avatar: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    age?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    age?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    age?: true
    avatar?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    age?: true
    avatar?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    age?: true
    avatar?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    email: string | null
    password: string | null
    name: string | null
    age: number | null
    avatar: string | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    age?: boolean
    avatar?: boolean
    comments?: boolean | users$commentsArgs<ExtArgs>
    image?: boolean | users$imageArgs<ExtArgs>
    saved_imaged?: boolean | users$saved_imagedArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    age?: boolean
    avatar?: boolean
  }

  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | users$commentsArgs<ExtArgs>
    image?: boolean | users$imageArgs<ExtArgs>
    saved_imaged?: boolean | users$saved_imagedArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      comments: Prisma.$commentsPayload<ExtArgs>[]
      image: Prisma.$imagePayload<ExtArgs>[]
      saved_imaged: Prisma.$saved_imagedPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string | null
      password: string | null
      name: string | null
      age: number | null
      avatar: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }


  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends usersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends usersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, usersCreateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {usersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends usersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, usersDeleteArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends usersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpsertArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    comments<T extends users$commentsArgs<ExtArgs> = {}>(args?: Subset<T, users$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, 'findMany'> | Null>;

    image<T extends users$imageArgs<ExtArgs> = {}>(args?: Subset<T, users$imageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$imagePayload<ExtArgs>, T, 'findMany'> | Null>;

    saved_imaged<T extends users$saved_imagedArgs<ExtArgs> = {}>(args?: Subset<T, users$saved_imagedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$saved_imagedPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly age: FieldRef<"users", 'Int'>
    readonly avatar: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes

  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data?: XOR<usersCreateInput, usersUncheckedCreateInput>
  }


  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }


  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }


  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }


  /**
   * users.comments
   */
  export type users$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    cursor?: commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }


  /**
   * users.image
   */
  export type users$imageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: imageInclude<ExtArgs> | null
    where?: imageWhereInput
    orderBy?: imageOrderByWithRelationInput | imageOrderByWithRelationInput[]
    cursor?: imageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }


  /**
   * users.saved_imaged
   */
  export type users$saved_imagedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_imaged
     */
    select?: saved_imagedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: saved_imagedInclude<ExtArgs> | null
    where?: saved_imagedWhereInput
    orderBy?: saved_imagedOrderByWithRelationInput | saved_imagedOrderByWithRelationInput[]
    cursor?: saved_imagedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Saved_imagedScalarFieldEnum | Saved_imagedScalarFieldEnum[]
  }


  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CommentsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    img_id: 'img_id',
    comment_day: 'comment_day',
    content: 'content'
  };

  export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    img_name: 'img_name',
    img_url: 'img_url',
    img_decs: 'img_decs',
    user_id: 'user_id'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const Saved_imagedScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    img_id: 'img_id',
    storage_day: 'storage_day'
  };

  export type Saved_imagedScalarFieldEnum = (typeof Saved_imagedScalarFieldEnum)[keyof typeof Saved_imagedScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    age: 'age',
    avatar: 'avatar'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type commentsWhereInput = {
    AND?: commentsWhereInput | commentsWhereInput[]
    OR?: commentsWhereInput[]
    NOT?: commentsWhereInput | commentsWhereInput[]
    id?: IntFilter<"comments"> | number
    user_id?: IntNullableFilter<"comments"> | number | null
    img_id?: IntNullableFilter<"comments"> | number | null
    comment_day?: DateTimeNullableFilter<"comments"> | Date | string | null
    content?: StringNullableFilter<"comments"> | string | null
    image?: XOR<ImageNullableRelationFilter, imageWhereInput> | null
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }

  export type commentsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    img_id?: SortOrderInput | SortOrder
    comment_day?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    image?: imageOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type commentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: commentsWhereInput | commentsWhereInput[]
    OR?: commentsWhereInput[]
    NOT?: commentsWhereInput | commentsWhereInput[]
    user_id?: IntNullableFilter<"comments"> | number | null
    img_id?: IntNullableFilter<"comments"> | number | null
    comment_day?: DateTimeNullableFilter<"comments"> | Date | string | null
    content?: StringNullableFilter<"comments"> | string | null
    image?: XOR<ImageNullableRelationFilter, imageWhereInput> | null
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }, "id">

  export type commentsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    img_id?: SortOrderInput | SortOrder
    comment_day?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    _count?: commentsCountOrderByAggregateInput
    _avg?: commentsAvgOrderByAggregateInput
    _max?: commentsMaxOrderByAggregateInput
    _min?: commentsMinOrderByAggregateInput
    _sum?: commentsSumOrderByAggregateInput
  }

  export type commentsScalarWhereWithAggregatesInput = {
    AND?: commentsScalarWhereWithAggregatesInput | commentsScalarWhereWithAggregatesInput[]
    OR?: commentsScalarWhereWithAggregatesInput[]
    NOT?: commentsScalarWhereWithAggregatesInput | commentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"comments"> | number
    user_id?: IntNullableWithAggregatesFilter<"comments"> | number | null
    img_id?: IntNullableWithAggregatesFilter<"comments"> | number | null
    comment_day?: DateTimeNullableWithAggregatesFilter<"comments"> | Date | string | null
    content?: StringNullableWithAggregatesFilter<"comments"> | string | null
  }

  export type imageWhereInput = {
    AND?: imageWhereInput | imageWhereInput[]
    OR?: imageWhereInput[]
    NOT?: imageWhereInput | imageWhereInput[]
    id?: IntFilter<"image"> | number
    img_name?: StringNullableFilter<"image"> | string | null
    img_url?: StringNullableFilter<"image"> | string | null
    img_decs?: StringNullableFilter<"image"> | string | null
    user_id?: IntNullableFilter<"image"> | number | null
    comments?: CommentsListRelationFilter
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
    saved_imaged?: Saved_imagedListRelationFilter
  }

  export type imageOrderByWithRelationInput = {
    id?: SortOrder
    img_name?: SortOrderInput | SortOrder
    img_url?: SortOrderInput | SortOrder
    img_decs?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    comments?: commentsOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
    saved_imaged?: saved_imagedOrderByRelationAggregateInput
  }

  export type imageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: imageWhereInput | imageWhereInput[]
    OR?: imageWhereInput[]
    NOT?: imageWhereInput | imageWhereInput[]
    img_name?: StringNullableFilter<"image"> | string | null
    img_url?: StringNullableFilter<"image"> | string | null
    img_decs?: StringNullableFilter<"image"> | string | null
    user_id?: IntNullableFilter<"image"> | number | null
    comments?: CommentsListRelationFilter
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
    saved_imaged?: Saved_imagedListRelationFilter
  }, "id">

  export type imageOrderByWithAggregationInput = {
    id?: SortOrder
    img_name?: SortOrderInput | SortOrder
    img_url?: SortOrderInput | SortOrder
    img_decs?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    _count?: imageCountOrderByAggregateInput
    _avg?: imageAvgOrderByAggregateInput
    _max?: imageMaxOrderByAggregateInput
    _min?: imageMinOrderByAggregateInput
    _sum?: imageSumOrderByAggregateInput
  }

  export type imageScalarWhereWithAggregatesInput = {
    AND?: imageScalarWhereWithAggregatesInput | imageScalarWhereWithAggregatesInput[]
    OR?: imageScalarWhereWithAggregatesInput[]
    NOT?: imageScalarWhereWithAggregatesInput | imageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"image"> | number
    img_name?: StringNullableWithAggregatesFilter<"image"> | string | null
    img_url?: StringNullableWithAggregatesFilter<"image"> | string | null
    img_decs?: StringNullableWithAggregatesFilter<"image"> | string | null
    user_id?: IntNullableWithAggregatesFilter<"image"> | number | null
  }

  export type saved_imagedWhereInput = {
    AND?: saved_imagedWhereInput | saved_imagedWhereInput[]
    OR?: saved_imagedWhereInput[]
    NOT?: saved_imagedWhereInput | saved_imagedWhereInput[]
    id?: IntFilter<"saved_imaged"> | number
    user_id?: IntNullableFilter<"saved_imaged"> | number | null
    img_id?: IntNullableFilter<"saved_imaged"> | number | null
    storage_day?: DateTimeNullableFilter<"saved_imaged"> | Date | string | null
    image?: XOR<ImageNullableRelationFilter, imageWhereInput> | null
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }

  export type saved_imagedOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    img_id?: SortOrderInput | SortOrder
    storage_day?: SortOrderInput | SortOrder
    image?: imageOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type saved_imagedWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: saved_imagedWhereInput | saved_imagedWhereInput[]
    OR?: saved_imagedWhereInput[]
    NOT?: saved_imagedWhereInput | saved_imagedWhereInput[]
    user_id?: IntNullableFilter<"saved_imaged"> | number | null
    img_id?: IntNullableFilter<"saved_imaged"> | number | null
    storage_day?: DateTimeNullableFilter<"saved_imaged"> | Date | string | null
    image?: XOR<ImageNullableRelationFilter, imageWhereInput> | null
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }, "id">

  export type saved_imagedOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    img_id?: SortOrderInput | SortOrder
    storage_day?: SortOrderInput | SortOrder
    _count?: saved_imagedCountOrderByAggregateInput
    _avg?: saved_imagedAvgOrderByAggregateInput
    _max?: saved_imagedMaxOrderByAggregateInput
    _min?: saved_imagedMinOrderByAggregateInput
    _sum?: saved_imagedSumOrderByAggregateInput
  }

  export type saved_imagedScalarWhereWithAggregatesInput = {
    AND?: saved_imagedScalarWhereWithAggregatesInput | saved_imagedScalarWhereWithAggregatesInput[]
    OR?: saved_imagedScalarWhereWithAggregatesInput[]
    NOT?: saved_imagedScalarWhereWithAggregatesInput | saved_imagedScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"saved_imaged"> | number
    user_id?: IntNullableWithAggregatesFilter<"saved_imaged"> | number | null
    img_id?: IntNullableWithAggregatesFilter<"saved_imaged"> | number | null
    storage_day?: DateTimeNullableWithAggregatesFilter<"saved_imaged"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    email?: StringNullableFilter<"users"> | string | null
    password?: StringNullableFilter<"users"> | string | null
    name?: StringNullableFilter<"users"> | string | null
    age?: IntNullableFilter<"users"> | number | null
    avatar?: StringNullableFilter<"users"> | string | null
    comments?: CommentsListRelationFilter
    image?: ImageListRelationFilter
    saved_imaged?: Saved_imagedListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    comments?: commentsOrderByRelationAggregateInput
    image?: imageOrderByRelationAggregateInput
    saved_imaged?: saved_imagedOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    email?: StringNullableFilter<"users"> | string | null
    password?: StringNullableFilter<"users"> | string | null
    name?: StringNullableFilter<"users"> | string | null
    age?: IntNullableFilter<"users"> | number | null
    avatar?: StringNullableFilter<"users"> | string | null
    comments?: CommentsListRelationFilter
    image?: ImageListRelationFilter
    saved_imaged?: Saved_imagedListRelationFilter
  }, "id">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    email?: StringNullableWithAggregatesFilter<"users"> | string | null
    password?: StringNullableWithAggregatesFilter<"users"> | string | null
    name?: StringNullableWithAggregatesFilter<"users"> | string | null
    age?: IntNullableWithAggregatesFilter<"users"> | number | null
    avatar?: StringNullableWithAggregatesFilter<"users"> | string | null
  }

  export type commentsCreateInput = {
    comment_day?: Date | string | null
    content?: string | null
    image?: imageCreateNestedOneWithoutCommentsInput
    users?: usersCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    img_id?: number | null
    comment_day?: Date | string | null
    content?: string | null
  }

  export type commentsUpdateInput = {
    comment_day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    image?: imageUpdateOneWithoutCommentsNestedInput
    users?: usersUpdateOneWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    img_id?: NullableIntFieldUpdateOperationsInput | number | null
    comment_day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type commentsCreateManyInput = {
    id?: number
    user_id?: number | null
    img_id?: number | null
    comment_day?: Date | string | null
    content?: string | null
  }

  export type commentsUpdateManyMutationInput = {
    comment_day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type commentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    img_id?: NullableIntFieldUpdateOperationsInput | number | null
    comment_day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type imageCreateInput = {
    img_name?: string | null
    img_url?: string | null
    img_decs?: string | null
    comments?: commentsCreateNestedManyWithoutImageInput
    users?: usersCreateNestedOneWithoutImageInput
    saved_imaged?: saved_imagedCreateNestedManyWithoutImageInput
  }

  export type imageUncheckedCreateInput = {
    id?: number
    img_name?: string | null
    img_url?: string | null
    img_decs?: string | null
    user_id?: number | null
    comments?: commentsUncheckedCreateNestedManyWithoutImageInput
    saved_imaged?: saved_imagedUncheckedCreateNestedManyWithoutImageInput
  }

  export type imageUpdateInput = {
    img_name?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: NullableStringFieldUpdateOperationsInput | string | null
    img_decs?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: commentsUpdateManyWithoutImageNestedInput
    users?: usersUpdateOneWithoutImageNestedInput
    saved_imaged?: saved_imagedUpdateManyWithoutImageNestedInput
  }

  export type imageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    img_name?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: NullableStringFieldUpdateOperationsInput | string | null
    img_decs?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: commentsUncheckedUpdateManyWithoutImageNestedInput
    saved_imaged?: saved_imagedUncheckedUpdateManyWithoutImageNestedInput
  }

  export type imageCreateManyInput = {
    id?: number
    img_name?: string | null
    img_url?: string | null
    img_decs?: string | null
    user_id?: number | null
  }

  export type imageUpdateManyMutationInput = {
    img_name?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: NullableStringFieldUpdateOperationsInput | string | null
    img_decs?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type imageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    img_name?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: NullableStringFieldUpdateOperationsInput | string | null
    img_decs?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type saved_imagedCreateInput = {
    storage_day?: Date | string | null
    image?: imageCreateNestedOneWithoutSaved_imagedInput
    users?: usersCreateNestedOneWithoutSaved_imagedInput
  }

  export type saved_imagedUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    img_id?: number | null
    storage_day?: Date | string | null
  }

  export type saved_imagedUpdateInput = {
    storage_day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: imageUpdateOneWithoutSaved_imagedNestedInput
    users?: usersUpdateOneWithoutSaved_imagedNestedInput
  }

  export type saved_imagedUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    img_id?: NullableIntFieldUpdateOperationsInput | number | null
    storage_day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type saved_imagedCreateManyInput = {
    id?: number
    user_id?: number | null
    img_id?: number | null
    storage_day?: Date | string | null
  }

  export type saved_imagedUpdateManyMutationInput = {
    storage_day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type saved_imagedUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    img_id?: NullableIntFieldUpdateOperationsInput | number | null
    storage_day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    email?: string | null
    password?: string | null
    name?: string | null
    age?: number | null
    avatar?: string | null
    comments?: commentsCreateNestedManyWithoutUsersInput
    image?: imageCreateNestedManyWithoutUsersInput
    saved_imaged?: saved_imagedCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    email?: string | null
    password?: string | null
    name?: string | null
    age?: number | null
    avatar?: string | null
    comments?: commentsUncheckedCreateNestedManyWithoutUsersInput
    image?: imageUncheckedCreateNestedManyWithoutUsersInput
    saved_imaged?: saved_imagedUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: commentsUpdateManyWithoutUsersNestedInput
    image?: imageUpdateManyWithoutUsersNestedInput
    saved_imaged?: saved_imagedUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: commentsUncheckedUpdateManyWithoutUsersNestedInput
    image?: imageUncheckedUpdateManyWithoutUsersNestedInput
    saved_imaged?: saved_imagedUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    email?: string | null
    password?: string | null
    name?: string | null
    age?: number | null
    avatar?: string | null
  }

  export type usersUpdateManyMutationInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ImageNullableRelationFilter = {
    is?: imageWhereInput | null
    isNot?: imageWhereInput | null
  }

  export type UsersNullableRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type commentsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    img_id?: SortOrder
    comment_day?: SortOrder
    content?: SortOrder
  }

  export type commentsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    img_id?: SortOrder
  }

  export type commentsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    img_id?: SortOrder
    comment_day?: SortOrder
    content?: SortOrder
  }

  export type commentsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    img_id?: SortOrder
    comment_day?: SortOrder
    content?: SortOrder
  }

  export type commentsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    img_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CommentsListRelationFilter = {
    every?: commentsWhereInput
    some?: commentsWhereInput
    none?: commentsWhereInput
  }

  export type Saved_imagedListRelationFilter = {
    every?: saved_imagedWhereInput
    some?: saved_imagedWhereInput
    none?: saved_imagedWhereInput
  }

  export type commentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type saved_imagedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type imageCountOrderByAggregateInput = {
    id?: SortOrder
    img_name?: SortOrder
    img_url?: SortOrder
    img_decs?: SortOrder
    user_id?: SortOrder
  }

  export type imageAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type imageMaxOrderByAggregateInput = {
    id?: SortOrder
    img_name?: SortOrder
    img_url?: SortOrder
    img_decs?: SortOrder
    user_id?: SortOrder
  }

  export type imageMinOrderByAggregateInput = {
    id?: SortOrder
    img_name?: SortOrder
    img_url?: SortOrder
    img_decs?: SortOrder
    user_id?: SortOrder
  }

  export type imageSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type saved_imagedCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    img_id?: SortOrder
    storage_day?: SortOrder
  }

  export type saved_imagedAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    img_id?: SortOrder
  }

  export type saved_imagedMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    img_id?: SortOrder
    storage_day?: SortOrder
  }

  export type saved_imagedMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    img_id?: SortOrder
    storage_day?: SortOrder
  }

  export type saved_imagedSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    img_id?: SortOrder
  }

  export type ImageListRelationFilter = {
    every?: imageWhereInput
    some?: imageWhereInput
    none?: imageWhereInput
  }

  export type imageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    age?: SortOrder
    avatar?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    age?: SortOrder
    avatar?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    age?: SortOrder
    avatar?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
  }

  export type imageCreateNestedOneWithoutCommentsInput = {
    create?: XOR<imageCreateWithoutCommentsInput, imageUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: imageCreateOrConnectWithoutCommentsInput
    connect?: imageWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutCommentsInput = {
    create?: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCommentsInput
    connect?: usersWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type imageUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<imageCreateWithoutCommentsInput, imageUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: imageCreateOrConnectWithoutCommentsInput
    upsert?: imageUpsertWithoutCommentsInput
    disconnect?: imageWhereInput | boolean
    delete?: imageWhereInput | boolean
    connect?: imageWhereUniqueInput
    update?: XOR<XOR<imageUpdateToOneWithWhereWithoutCommentsInput, imageUpdateWithoutCommentsInput>, imageUncheckedUpdateWithoutCommentsInput>
  }

  export type usersUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCommentsInput
    upsert?: usersUpsertWithoutCommentsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCommentsInput, usersUpdateWithoutCommentsInput>, usersUncheckedUpdateWithoutCommentsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type commentsCreateNestedManyWithoutImageInput = {
    create?: XOR<commentsCreateWithoutImageInput, commentsUncheckedCreateWithoutImageInput> | commentsCreateWithoutImageInput[] | commentsUncheckedCreateWithoutImageInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutImageInput | commentsCreateOrConnectWithoutImageInput[]
    createMany?: commentsCreateManyImageInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutImageInput = {
    create?: XOR<usersCreateWithoutImageInput, usersUncheckedCreateWithoutImageInput>
    connectOrCreate?: usersCreateOrConnectWithoutImageInput
    connect?: usersWhereUniqueInput
  }

  export type saved_imagedCreateNestedManyWithoutImageInput = {
    create?: XOR<saved_imagedCreateWithoutImageInput, saved_imagedUncheckedCreateWithoutImageInput> | saved_imagedCreateWithoutImageInput[] | saved_imagedUncheckedCreateWithoutImageInput[]
    connectOrCreate?: saved_imagedCreateOrConnectWithoutImageInput | saved_imagedCreateOrConnectWithoutImageInput[]
    createMany?: saved_imagedCreateManyImageInputEnvelope
    connect?: saved_imagedWhereUniqueInput | saved_imagedWhereUniqueInput[]
  }

  export type commentsUncheckedCreateNestedManyWithoutImageInput = {
    create?: XOR<commentsCreateWithoutImageInput, commentsUncheckedCreateWithoutImageInput> | commentsCreateWithoutImageInput[] | commentsUncheckedCreateWithoutImageInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutImageInput | commentsCreateOrConnectWithoutImageInput[]
    createMany?: commentsCreateManyImageInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type saved_imagedUncheckedCreateNestedManyWithoutImageInput = {
    create?: XOR<saved_imagedCreateWithoutImageInput, saved_imagedUncheckedCreateWithoutImageInput> | saved_imagedCreateWithoutImageInput[] | saved_imagedUncheckedCreateWithoutImageInput[]
    connectOrCreate?: saved_imagedCreateOrConnectWithoutImageInput | saved_imagedCreateOrConnectWithoutImageInput[]
    createMany?: saved_imagedCreateManyImageInputEnvelope
    connect?: saved_imagedWhereUniqueInput | saved_imagedWhereUniqueInput[]
  }

  export type commentsUpdateManyWithoutImageNestedInput = {
    create?: XOR<commentsCreateWithoutImageInput, commentsUncheckedCreateWithoutImageInput> | commentsCreateWithoutImageInput[] | commentsUncheckedCreateWithoutImageInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutImageInput | commentsCreateOrConnectWithoutImageInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutImageInput | commentsUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: commentsCreateManyImageInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutImageInput | commentsUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutImageInput | commentsUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type usersUpdateOneWithoutImageNestedInput = {
    create?: XOR<usersCreateWithoutImageInput, usersUncheckedCreateWithoutImageInput>
    connectOrCreate?: usersCreateOrConnectWithoutImageInput
    upsert?: usersUpsertWithoutImageInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutImageInput, usersUpdateWithoutImageInput>, usersUncheckedUpdateWithoutImageInput>
  }

  export type saved_imagedUpdateManyWithoutImageNestedInput = {
    create?: XOR<saved_imagedCreateWithoutImageInput, saved_imagedUncheckedCreateWithoutImageInput> | saved_imagedCreateWithoutImageInput[] | saved_imagedUncheckedCreateWithoutImageInput[]
    connectOrCreate?: saved_imagedCreateOrConnectWithoutImageInput | saved_imagedCreateOrConnectWithoutImageInput[]
    upsert?: saved_imagedUpsertWithWhereUniqueWithoutImageInput | saved_imagedUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: saved_imagedCreateManyImageInputEnvelope
    set?: saved_imagedWhereUniqueInput | saved_imagedWhereUniqueInput[]
    disconnect?: saved_imagedWhereUniqueInput | saved_imagedWhereUniqueInput[]
    delete?: saved_imagedWhereUniqueInput | saved_imagedWhereUniqueInput[]
    connect?: saved_imagedWhereUniqueInput | saved_imagedWhereUniqueInput[]
    update?: saved_imagedUpdateWithWhereUniqueWithoutImageInput | saved_imagedUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: saved_imagedUpdateManyWithWhereWithoutImageInput | saved_imagedUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: saved_imagedScalarWhereInput | saved_imagedScalarWhereInput[]
  }

  export type commentsUncheckedUpdateManyWithoutImageNestedInput = {
    create?: XOR<commentsCreateWithoutImageInput, commentsUncheckedCreateWithoutImageInput> | commentsCreateWithoutImageInput[] | commentsUncheckedCreateWithoutImageInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutImageInput | commentsCreateOrConnectWithoutImageInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutImageInput | commentsUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: commentsCreateManyImageInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutImageInput | commentsUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutImageInput | commentsUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type saved_imagedUncheckedUpdateManyWithoutImageNestedInput = {
    create?: XOR<saved_imagedCreateWithoutImageInput, saved_imagedUncheckedCreateWithoutImageInput> | saved_imagedCreateWithoutImageInput[] | saved_imagedUncheckedCreateWithoutImageInput[]
    connectOrCreate?: saved_imagedCreateOrConnectWithoutImageInput | saved_imagedCreateOrConnectWithoutImageInput[]
    upsert?: saved_imagedUpsertWithWhereUniqueWithoutImageInput | saved_imagedUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: saved_imagedCreateManyImageInputEnvelope
    set?: saved_imagedWhereUniqueInput | saved_imagedWhereUniqueInput[]
    disconnect?: saved_imagedWhereUniqueInput | saved_imagedWhereUniqueInput[]
    delete?: saved_imagedWhereUniqueInput | saved_imagedWhereUniqueInput[]
    connect?: saved_imagedWhereUniqueInput | saved_imagedWhereUniqueInput[]
    update?: saved_imagedUpdateWithWhereUniqueWithoutImageInput | saved_imagedUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: saved_imagedUpdateManyWithWhereWithoutImageInput | saved_imagedUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: saved_imagedScalarWhereInput | saved_imagedScalarWhereInput[]
  }

  export type imageCreateNestedOneWithoutSaved_imagedInput = {
    create?: XOR<imageCreateWithoutSaved_imagedInput, imageUncheckedCreateWithoutSaved_imagedInput>
    connectOrCreate?: imageCreateOrConnectWithoutSaved_imagedInput
    connect?: imageWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutSaved_imagedInput = {
    create?: XOR<usersCreateWithoutSaved_imagedInput, usersUncheckedCreateWithoutSaved_imagedInput>
    connectOrCreate?: usersCreateOrConnectWithoutSaved_imagedInput
    connect?: usersWhereUniqueInput
  }

  export type imageUpdateOneWithoutSaved_imagedNestedInput = {
    create?: XOR<imageCreateWithoutSaved_imagedInput, imageUncheckedCreateWithoutSaved_imagedInput>
    connectOrCreate?: imageCreateOrConnectWithoutSaved_imagedInput
    upsert?: imageUpsertWithoutSaved_imagedInput
    disconnect?: imageWhereInput | boolean
    delete?: imageWhereInput | boolean
    connect?: imageWhereUniqueInput
    update?: XOR<XOR<imageUpdateToOneWithWhereWithoutSaved_imagedInput, imageUpdateWithoutSaved_imagedInput>, imageUncheckedUpdateWithoutSaved_imagedInput>
  }

  export type usersUpdateOneWithoutSaved_imagedNestedInput = {
    create?: XOR<usersCreateWithoutSaved_imagedInput, usersUncheckedCreateWithoutSaved_imagedInput>
    connectOrCreate?: usersCreateOrConnectWithoutSaved_imagedInput
    upsert?: usersUpsertWithoutSaved_imagedInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutSaved_imagedInput, usersUpdateWithoutSaved_imagedInput>, usersUncheckedUpdateWithoutSaved_imagedInput>
  }

  export type commentsCreateNestedManyWithoutUsersInput = {
    create?: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput> | commentsCreateWithoutUsersInput[] | commentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUsersInput | commentsCreateOrConnectWithoutUsersInput[]
    createMany?: commentsCreateManyUsersInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type imageCreateNestedManyWithoutUsersInput = {
    create?: XOR<imageCreateWithoutUsersInput, imageUncheckedCreateWithoutUsersInput> | imageCreateWithoutUsersInput[] | imageUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: imageCreateOrConnectWithoutUsersInput | imageCreateOrConnectWithoutUsersInput[]
    createMany?: imageCreateManyUsersInputEnvelope
    connect?: imageWhereUniqueInput | imageWhereUniqueInput[]
  }

  export type saved_imagedCreateNestedManyWithoutUsersInput = {
    create?: XOR<saved_imagedCreateWithoutUsersInput, saved_imagedUncheckedCreateWithoutUsersInput> | saved_imagedCreateWithoutUsersInput[] | saved_imagedUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: saved_imagedCreateOrConnectWithoutUsersInput | saved_imagedCreateOrConnectWithoutUsersInput[]
    createMany?: saved_imagedCreateManyUsersInputEnvelope
    connect?: saved_imagedWhereUniqueInput | saved_imagedWhereUniqueInput[]
  }

  export type commentsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput> | commentsCreateWithoutUsersInput[] | commentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUsersInput | commentsCreateOrConnectWithoutUsersInput[]
    createMany?: commentsCreateManyUsersInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type imageUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<imageCreateWithoutUsersInput, imageUncheckedCreateWithoutUsersInput> | imageCreateWithoutUsersInput[] | imageUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: imageCreateOrConnectWithoutUsersInput | imageCreateOrConnectWithoutUsersInput[]
    createMany?: imageCreateManyUsersInputEnvelope
    connect?: imageWhereUniqueInput | imageWhereUniqueInput[]
  }

  export type saved_imagedUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<saved_imagedCreateWithoutUsersInput, saved_imagedUncheckedCreateWithoutUsersInput> | saved_imagedCreateWithoutUsersInput[] | saved_imagedUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: saved_imagedCreateOrConnectWithoutUsersInput | saved_imagedCreateOrConnectWithoutUsersInput[]
    createMany?: saved_imagedCreateManyUsersInputEnvelope
    connect?: saved_imagedWhereUniqueInput | saved_imagedWhereUniqueInput[]
  }

  export type commentsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput> | commentsCreateWithoutUsersInput[] | commentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUsersInput | commentsCreateOrConnectWithoutUsersInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutUsersInput | commentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: commentsCreateManyUsersInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutUsersInput | commentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutUsersInput | commentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type imageUpdateManyWithoutUsersNestedInput = {
    create?: XOR<imageCreateWithoutUsersInput, imageUncheckedCreateWithoutUsersInput> | imageCreateWithoutUsersInput[] | imageUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: imageCreateOrConnectWithoutUsersInput | imageCreateOrConnectWithoutUsersInput[]
    upsert?: imageUpsertWithWhereUniqueWithoutUsersInput | imageUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: imageCreateManyUsersInputEnvelope
    set?: imageWhereUniqueInput | imageWhereUniqueInput[]
    disconnect?: imageWhereUniqueInput | imageWhereUniqueInput[]
    delete?: imageWhereUniqueInput | imageWhereUniqueInput[]
    connect?: imageWhereUniqueInput | imageWhereUniqueInput[]
    update?: imageUpdateWithWhereUniqueWithoutUsersInput | imageUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: imageUpdateManyWithWhereWithoutUsersInput | imageUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: imageScalarWhereInput | imageScalarWhereInput[]
  }

  export type saved_imagedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<saved_imagedCreateWithoutUsersInput, saved_imagedUncheckedCreateWithoutUsersInput> | saved_imagedCreateWithoutUsersInput[] | saved_imagedUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: saved_imagedCreateOrConnectWithoutUsersInput | saved_imagedCreateOrConnectWithoutUsersInput[]
    upsert?: saved_imagedUpsertWithWhereUniqueWithoutUsersInput | saved_imagedUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: saved_imagedCreateManyUsersInputEnvelope
    set?: saved_imagedWhereUniqueInput | saved_imagedWhereUniqueInput[]
    disconnect?: saved_imagedWhereUniqueInput | saved_imagedWhereUniqueInput[]
    delete?: saved_imagedWhereUniqueInput | saved_imagedWhereUniqueInput[]
    connect?: saved_imagedWhereUniqueInput | saved_imagedWhereUniqueInput[]
    update?: saved_imagedUpdateWithWhereUniqueWithoutUsersInput | saved_imagedUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: saved_imagedUpdateManyWithWhereWithoutUsersInput | saved_imagedUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: saved_imagedScalarWhereInput | saved_imagedScalarWhereInput[]
  }

  export type commentsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput> | commentsCreateWithoutUsersInput[] | commentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUsersInput | commentsCreateOrConnectWithoutUsersInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutUsersInput | commentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: commentsCreateManyUsersInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutUsersInput | commentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutUsersInput | commentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type imageUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<imageCreateWithoutUsersInput, imageUncheckedCreateWithoutUsersInput> | imageCreateWithoutUsersInput[] | imageUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: imageCreateOrConnectWithoutUsersInput | imageCreateOrConnectWithoutUsersInput[]
    upsert?: imageUpsertWithWhereUniqueWithoutUsersInput | imageUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: imageCreateManyUsersInputEnvelope
    set?: imageWhereUniqueInput | imageWhereUniqueInput[]
    disconnect?: imageWhereUniqueInput | imageWhereUniqueInput[]
    delete?: imageWhereUniqueInput | imageWhereUniqueInput[]
    connect?: imageWhereUniqueInput | imageWhereUniqueInput[]
    update?: imageUpdateWithWhereUniqueWithoutUsersInput | imageUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: imageUpdateManyWithWhereWithoutUsersInput | imageUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: imageScalarWhereInput | imageScalarWhereInput[]
  }

  export type saved_imagedUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<saved_imagedCreateWithoutUsersInput, saved_imagedUncheckedCreateWithoutUsersInput> | saved_imagedCreateWithoutUsersInput[] | saved_imagedUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: saved_imagedCreateOrConnectWithoutUsersInput | saved_imagedCreateOrConnectWithoutUsersInput[]
    upsert?: saved_imagedUpsertWithWhereUniqueWithoutUsersInput | saved_imagedUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: saved_imagedCreateManyUsersInputEnvelope
    set?: saved_imagedWhereUniqueInput | saved_imagedWhereUniqueInput[]
    disconnect?: saved_imagedWhereUniqueInput | saved_imagedWhereUniqueInput[]
    delete?: saved_imagedWhereUniqueInput | saved_imagedWhereUniqueInput[]
    connect?: saved_imagedWhereUniqueInput | saved_imagedWhereUniqueInput[]
    update?: saved_imagedUpdateWithWhereUniqueWithoutUsersInput | saved_imagedUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: saved_imagedUpdateManyWithWhereWithoutUsersInput | saved_imagedUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: saved_imagedScalarWhereInput | saved_imagedScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type imageCreateWithoutCommentsInput = {
    img_name?: string | null
    img_url?: string | null
    img_decs?: string | null
    users?: usersCreateNestedOneWithoutImageInput
    saved_imaged?: saved_imagedCreateNestedManyWithoutImageInput
  }

  export type imageUncheckedCreateWithoutCommentsInput = {
    id?: number
    img_name?: string | null
    img_url?: string | null
    img_decs?: string | null
    user_id?: number | null
    saved_imaged?: saved_imagedUncheckedCreateNestedManyWithoutImageInput
  }

  export type imageCreateOrConnectWithoutCommentsInput = {
    where: imageWhereUniqueInput
    create: XOR<imageCreateWithoutCommentsInput, imageUncheckedCreateWithoutCommentsInput>
  }

  export type usersCreateWithoutCommentsInput = {
    email?: string | null
    password?: string | null
    name?: string | null
    age?: number | null
    avatar?: string | null
    image?: imageCreateNestedManyWithoutUsersInput
    saved_imaged?: saved_imagedCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutCommentsInput = {
    id?: number
    email?: string | null
    password?: string | null
    name?: string | null
    age?: number | null
    avatar?: string | null
    image?: imageUncheckedCreateNestedManyWithoutUsersInput
    saved_imaged?: saved_imagedUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutCommentsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
  }

  export type imageUpsertWithoutCommentsInput = {
    update: XOR<imageUpdateWithoutCommentsInput, imageUncheckedUpdateWithoutCommentsInput>
    create: XOR<imageCreateWithoutCommentsInput, imageUncheckedCreateWithoutCommentsInput>
    where?: imageWhereInput
  }

  export type imageUpdateToOneWithWhereWithoutCommentsInput = {
    where?: imageWhereInput
    data: XOR<imageUpdateWithoutCommentsInput, imageUncheckedUpdateWithoutCommentsInput>
  }

  export type imageUpdateWithoutCommentsInput = {
    img_name?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: NullableStringFieldUpdateOperationsInput | string | null
    img_decs?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneWithoutImageNestedInput
    saved_imaged?: saved_imagedUpdateManyWithoutImageNestedInput
  }

  export type imageUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    img_name?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: NullableStringFieldUpdateOperationsInput | string | null
    img_decs?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    saved_imaged?: saved_imagedUncheckedUpdateManyWithoutImageNestedInput
  }

  export type usersUpsertWithoutCommentsInput = {
    update: XOR<usersUpdateWithoutCommentsInput, usersUncheckedUpdateWithoutCommentsInput>
    create: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCommentsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCommentsInput, usersUncheckedUpdateWithoutCommentsInput>
  }

  export type usersUpdateWithoutCommentsInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    image?: imageUpdateManyWithoutUsersNestedInput
    saved_imaged?: saved_imagedUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    image?: imageUncheckedUpdateManyWithoutUsersNestedInput
    saved_imaged?: saved_imagedUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type commentsCreateWithoutImageInput = {
    comment_day?: Date | string | null
    content?: string | null
    users?: usersCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateWithoutImageInput = {
    id?: number
    user_id?: number | null
    comment_day?: Date | string | null
    content?: string | null
  }

  export type commentsCreateOrConnectWithoutImageInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutImageInput, commentsUncheckedCreateWithoutImageInput>
  }

  export type commentsCreateManyImageInputEnvelope = {
    data: commentsCreateManyImageInput | commentsCreateManyImageInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutImageInput = {
    email?: string | null
    password?: string | null
    name?: string | null
    age?: number | null
    avatar?: string | null
    comments?: commentsCreateNestedManyWithoutUsersInput
    saved_imaged?: saved_imagedCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutImageInput = {
    id?: number
    email?: string | null
    password?: string | null
    name?: string | null
    age?: number | null
    avatar?: string | null
    comments?: commentsUncheckedCreateNestedManyWithoutUsersInput
    saved_imaged?: saved_imagedUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutImageInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutImageInput, usersUncheckedCreateWithoutImageInput>
  }

  export type saved_imagedCreateWithoutImageInput = {
    storage_day?: Date | string | null
    users?: usersCreateNestedOneWithoutSaved_imagedInput
  }

  export type saved_imagedUncheckedCreateWithoutImageInput = {
    id?: number
    user_id?: number | null
    storage_day?: Date | string | null
  }

  export type saved_imagedCreateOrConnectWithoutImageInput = {
    where: saved_imagedWhereUniqueInput
    create: XOR<saved_imagedCreateWithoutImageInput, saved_imagedUncheckedCreateWithoutImageInput>
  }

  export type saved_imagedCreateManyImageInputEnvelope = {
    data: saved_imagedCreateManyImageInput | saved_imagedCreateManyImageInput[]
    skipDuplicates?: boolean
  }

  export type commentsUpsertWithWhereUniqueWithoutImageInput = {
    where: commentsWhereUniqueInput
    update: XOR<commentsUpdateWithoutImageInput, commentsUncheckedUpdateWithoutImageInput>
    create: XOR<commentsCreateWithoutImageInput, commentsUncheckedCreateWithoutImageInput>
  }

  export type commentsUpdateWithWhereUniqueWithoutImageInput = {
    where: commentsWhereUniqueInput
    data: XOR<commentsUpdateWithoutImageInput, commentsUncheckedUpdateWithoutImageInput>
  }

  export type commentsUpdateManyWithWhereWithoutImageInput = {
    where: commentsScalarWhereInput
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyWithoutImageInput>
  }

  export type commentsScalarWhereInput = {
    AND?: commentsScalarWhereInput | commentsScalarWhereInput[]
    OR?: commentsScalarWhereInput[]
    NOT?: commentsScalarWhereInput | commentsScalarWhereInput[]
    id?: IntFilter<"comments"> | number
    user_id?: IntNullableFilter<"comments"> | number | null
    img_id?: IntNullableFilter<"comments"> | number | null
    comment_day?: DateTimeNullableFilter<"comments"> | Date | string | null
    content?: StringNullableFilter<"comments"> | string | null
  }

  export type usersUpsertWithoutImageInput = {
    update: XOR<usersUpdateWithoutImageInput, usersUncheckedUpdateWithoutImageInput>
    create: XOR<usersCreateWithoutImageInput, usersUncheckedCreateWithoutImageInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutImageInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutImageInput, usersUncheckedUpdateWithoutImageInput>
  }

  export type usersUpdateWithoutImageInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: commentsUpdateManyWithoutUsersNestedInput
    saved_imaged?: saved_imagedUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: commentsUncheckedUpdateManyWithoutUsersNestedInput
    saved_imaged?: saved_imagedUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type saved_imagedUpsertWithWhereUniqueWithoutImageInput = {
    where: saved_imagedWhereUniqueInput
    update: XOR<saved_imagedUpdateWithoutImageInput, saved_imagedUncheckedUpdateWithoutImageInput>
    create: XOR<saved_imagedCreateWithoutImageInput, saved_imagedUncheckedCreateWithoutImageInput>
  }

  export type saved_imagedUpdateWithWhereUniqueWithoutImageInput = {
    where: saved_imagedWhereUniqueInput
    data: XOR<saved_imagedUpdateWithoutImageInput, saved_imagedUncheckedUpdateWithoutImageInput>
  }

  export type saved_imagedUpdateManyWithWhereWithoutImageInput = {
    where: saved_imagedScalarWhereInput
    data: XOR<saved_imagedUpdateManyMutationInput, saved_imagedUncheckedUpdateManyWithoutImageInput>
  }

  export type saved_imagedScalarWhereInput = {
    AND?: saved_imagedScalarWhereInput | saved_imagedScalarWhereInput[]
    OR?: saved_imagedScalarWhereInput[]
    NOT?: saved_imagedScalarWhereInput | saved_imagedScalarWhereInput[]
    id?: IntFilter<"saved_imaged"> | number
    user_id?: IntNullableFilter<"saved_imaged"> | number | null
    img_id?: IntNullableFilter<"saved_imaged"> | number | null
    storage_day?: DateTimeNullableFilter<"saved_imaged"> | Date | string | null
  }

  export type imageCreateWithoutSaved_imagedInput = {
    img_name?: string | null
    img_url?: string | null
    img_decs?: string | null
    comments?: commentsCreateNestedManyWithoutImageInput
    users?: usersCreateNestedOneWithoutImageInput
  }

  export type imageUncheckedCreateWithoutSaved_imagedInput = {
    id?: number
    img_name?: string | null
    img_url?: string | null
    img_decs?: string | null
    user_id?: number | null
    comments?: commentsUncheckedCreateNestedManyWithoutImageInput
  }

  export type imageCreateOrConnectWithoutSaved_imagedInput = {
    where: imageWhereUniqueInput
    create: XOR<imageCreateWithoutSaved_imagedInput, imageUncheckedCreateWithoutSaved_imagedInput>
  }

  export type usersCreateWithoutSaved_imagedInput = {
    email?: string | null
    password?: string | null
    name?: string | null
    age?: number | null
    avatar?: string | null
    comments?: commentsCreateNestedManyWithoutUsersInput
    image?: imageCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutSaved_imagedInput = {
    id?: number
    email?: string | null
    password?: string | null
    name?: string | null
    age?: number | null
    avatar?: string | null
    comments?: commentsUncheckedCreateNestedManyWithoutUsersInput
    image?: imageUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutSaved_imagedInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSaved_imagedInput, usersUncheckedCreateWithoutSaved_imagedInput>
  }

  export type imageUpsertWithoutSaved_imagedInput = {
    update: XOR<imageUpdateWithoutSaved_imagedInput, imageUncheckedUpdateWithoutSaved_imagedInput>
    create: XOR<imageCreateWithoutSaved_imagedInput, imageUncheckedCreateWithoutSaved_imagedInput>
    where?: imageWhereInput
  }

  export type imageUpdateToOneWithWhereWithoutSaved_imagedInput = {
    where?: imageWhereInput
    data: XOR<imageUpdateWithoutSaved_imagedInput, imageUncheckedUpdateWithoutSaved_imagedInput>
  }

  export type imageUpdateWithoutSaved_imagedInput = {
    img_name?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: NullableStringFieldUpdateOperationsInput | string | null
    img_decs?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: commentsUpdateManyWithoutImageNestedInput
    users?: usersUpdateOneWithoutImageNestedInput
  }

  export type imageUncheckedUpdateWithoutSaved_imagedInput = {
    id?: IntFieldUpdateOperationsInput | number
    img_name?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: NullableStringFieldUpdateOperationsInput | string | null
    img_decs?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: commentsUncheckedUpdateManyWithoutImageNestedInput
  }

  export type usersUpsertWithoutSaved_imagedInput = {
    update: XOR<usersUpdateWithoutSaved_imagedInput, usersUncheckedUpdateWithoutSaved_imagedInput>
    create: XOR<usersCreateWithoutSaved_imagedInput, usersUncheckedCreateWithoutSaved_imagedInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutSaved_imagedInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutSaved_imagedInput, usersUncheckedUpdateWithoutSaved_imagedInput>
  }

  export type usersUpdateWithoutSaved_imagedInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: commentsUpdateManyWithoutUsersNestedInput
    image?: imageUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutSaved_imagedInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: commentsUncheckedUpdateManyWithoutUsersNestedInput
    image?: imageUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type commentsCreateWithoutUsersInput = {
    comment_day?: Date | string | null
    content?: string | null
    image?: imageCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateWithoutUsersInput = {
    id?: number
    img_id?: number | null
    comment_day?: Date | string | null
    content?: string | null
  }

  export type commentsCreateOrConnectWithoutUsersInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput>
  }

  export type commentsCreateManyUsersInputEnvelope = {
    data: commentsCreateManyUsersInput | commentsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type imageCreateWithoutUsersInput = {
    img_name?: string | null
    img_url?: string | null
    img_decs?: string | null
    comments?: commentsCreateNestedManyWithoutImageInput
    saved_imaged?: saved_imagedCreateNestedManyWithoutImageInput
  }

  export type imageUncheckedCreateWithoutUsersInput = {
    id?: number
    img_name?: string | null
    img_url?: string | null
    img_decs?: string | null
    comments?: commentsUncheckedCreateNestedManyWithoutImageInput
    saved_imaged?: saved_imagedUncheckedCreateNestedManyWithoutImageInput
  }

  export type imageCreateOrConnectWithoutUsersInput = {
    where: imageWhereUniqueInput
    create: XOR<imageCreateWithoutUsersInput, imageUncheckedCreateWithoutUsersInput>
  }

  export type imageCreateManyUsersInputEnvelope = {
    data: imageCreateManyUsersInput | imageCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type saved_imagedCreateWithoutUsersInput = {
    storage_day?: Date | string | null
    image?: imageCreateNestedOneWithoutSaved_imagedInput
  }

  export type saved_imagedUncheckedCreateWithoutUsersInput = {
    id?: number
    img_id?: number | null
    storage_day?: Date | string | null
  }

  export type saved_imagedCreateOrConnectWithoutUsersInput = {
    where: saved_imagedWhereUniqueInput
    create: XOR<saved_imagedCreateWithoutUsersInput, saved_imagedUncheckedCreateWithoutUsersInput>
  }

  export type saved_imagedCreateManyUsersInputEnvelope = {
    data: saved_imagedCreateManyUsersInput | saved_imagedCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type commentsUpsertWithWhereUniqueWithoutUsersInput = {
    where: commentsWhereUniqueInput
    update: XOR<commentsUpdateWithoutUsersInput, commentsUncheckedUpdateWithoutUsersInput>
    create: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput>
  }

  export type commentsUpdateWithWhereUniqueWithoutUsersInput = {
    where: commentsWhereUniqueInput
    data: XOR<commentsUpdateWithoutUsersInput, commentsUncheckedUpdateWithoutUsersInput>
  }

  export type commentsUpdateManyWithWhereWithoutUsersInput = {
    where: commentsScalarWhereInput
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyWithoutUsersInput>
  }

  export type imageUpsertWithWhereUniqueWithoutUsersInput = {
    where: imageWhereUniqueInput
    update: XOR<imageUpdateWithoutUsersInput, imageUncheckedUpdateWithoutUsersInput>
    create: XOR<imageCreateWithoutUsersInput, imageUncheckedCreateWithoutUsersInput>
  }

  export type imageUpdateWithWhereUniqueWithoutUsersInput = {
    where: imageWhereUniqueInput
    data: XOR<imageUpdateWithoutUsersInput, imageUncheckedUpdateWithoutUsersInput>
  }

  export type imageUpdateManyWithWhereWithoutUsersInput = {
    where: imageScalarWhereInput
    data: XOR<imageUpdateManyMutationInput, imageUncheckedUpdateManyWithoutUsersInput>
  }

  export type imageScalarWhereInput = {
    AND?: imageScalarWhereInput | imageScalarWhereInput[]
    OR?: imageScalarWhereInput[]
    NOT?: imageScalarWhereInput | imageScalarWhereInput[]
    id?: IntFilter<"image"> | number
    img_name?: StringNullableFilter<"image"> | string | null
    img_url?: StringNullableFilter<"image"> | string | null
    img_decs?: StringNullableFilter<"image"> | string | null
    user_id?: IntNullableFilter<"image"> | number | null
  }

  export type saved_imagedUpsertWithWhereUniqueWithoutUsersInput = {
    where: saved_imagedWhereUniqueInput
    update: XOR<saved_imagedUpdateWithoutUsersInput, saved_imagedUncheckedUpdateWithoutUsersInput>
    create: XOR<saved_imagedCreateWithoutUsersInput, saved_imagedUncheckedCreateWithoutUsersInput>
  }

  export type saved_imagedUpdateWithWhereUniqueWithoutUsersInput = {
    where: saved_imagedWhereUniqueInput
    data: XOR<saved_imagedUpdateWithoutUsersInput, saved_imagedUncheckedUpdateWithoutUsersInput>
  }

  export type saved_imagedUpdateManyWithWhereWithoutUsersInput = {
    where: saved_imagedScalarWhereInput
    data: XOR<saved_imagedUpdateManyMutationInput, saved_imagedUncheckedUpdateManyWithoutUsersInput>
  }

  export type commentsCreateManyImageInput = {
    id?: number
    user_id?: number | null
    comment_day?: Date | string | null
    content?: string | null
  }

  export type saved_imagedCreateManyImageInput = {
    id?: number
    user_id?: number | null
    storage_day?: Date | string | null
  }

  export type commentsUpdateWithoutImageInput = {
    comment_day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    comment_day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type commentsUncheckedUpdateManyWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    comment_day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type saved_imagedUpdateWithoutImageInput = {
    storage_day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutSaved_imagedNestedInput
  }

  export type saved_imagedUncheckedUpdateWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    storage_day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type saved_imagedUncheckedUpdateManyWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    storage_day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsCreateManyUsersInput = {
    id?: number
    img_id?: number | null
    comment_day?: Date | string | null
    content?: string | null
  }

  export type imageCreateManyUsersInput = {
    id?: number
    img_name?: string | null
    img_url?: string | null
    img_decs?: string | null
  }

  export type saved_imagedCreateManyUsersInput = {
    id?: number
    img_id?: number | null
    storage_day?: Date | string | null
  }

  export type commentsUpdateWithoutUsersInput = {
    comment_day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    image?: imageUpdateOneWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    img_id?: NullableIntFieldUpdateOperationsInput | number | null
    comment_day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type commentsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    img_id?: NullableIntFieldUpdateOperationsInput | number | null
    comment_day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type imageUpdateWithoutUsersInput = {
    img_name?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: NullableStringFieldUpdateOperationsInput | string | null
    img_decs?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: commentsUpdateManyWithoutImageNestedInput
    saved_imaged?: saved_imagedUpdateManyWithoutImageNestedInput
  }

  export type imageUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    img_name?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: NullableStringFieldUpdateOperationsInput | string | null
    img_decs?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: commentsUncheckedUpdateManyWithoutImageNestedInput
    saved_imaged?: saved_imagedUncheckedUpdateManyWithoutImageNestedInput
  }

  export type imageUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    img_name?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: NullableStringFieldUpdateOperationsInput | string | null
    img_decs?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type saved_imagedUpdateWithoutUsersInput = {
    storage_day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: imageUpdateOneWithoutSaved_imagedNestedInput
  }

  export type saved_imagedUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    img_id?: NullableIntFieldUpdateOperationsInput | number | null
    storage_day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type saved_imagedUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    img_id?: NullableIntFieldUpdateOperationsInput | number | null
    storage_day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ImageCountOutputTypeDefaultArgs instead
     */
    export type ImageCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ImageCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use commentsDefaultArgs instead
     */
    export type commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = commentsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use imageDefaultArgs instead
     */
    export type imageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = imageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use saved_imagedDefaultArgs instead
     */
    export type saved_imagedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = saved_imagedDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usersDefaultArgs instead
     */
    export type usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usersDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}