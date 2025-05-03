
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model solWallet
 * 
 */
export type solWallet = $Result.DefaultSelection<Prisma.$solWalletPayload>
/**
 * Model InrWallet
 * 
 */
export type InrWallet = $Result.DefaultSelection<Prisma.$InrWalletPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.solWallet`: Exposes CRUD operations for the **solWallet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SolWallets
    * const solWallets = await prisma.solWallet.findMany()
    * ```
    */
  get solWallet(): Prisma.solWalletDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inrWallet`: Exposes CRUD operations for the **InrWallet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InrWallets
    * const inrWallets = await prisma.inrWallet.findMany()
    * ```
    */
  get inrWallet(): Prisma.InrWalletDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    solWallet: 'solWallet',
    InrWallet: 'InrWallet'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "solWallet" | "inrWallet"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      solWallet: {
        payload: Prisma.$solWalletPayload<ExtArgs>
        fields: Prisma.solWalletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.solWalletFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solWalletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.solWalletFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solWalletPayload>
          }
          findFirst: {
            args: Prisma.solWalletFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solWalletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.solWalletFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solWalletPayload>
          }
          findMany: {
            args: Prisma.solWalletFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solWalletPayload>[]
          }
          create: {
            args: Prisma.solWalletCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solWalletPayload>
          }
          createMany: {
            args: Prisma.solWalletCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.solWalletCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solWalletPayload>[]
          }
          delete: {
            args: Prisma.solWalletDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solWalletPayload>
          }
          update: {
            args: Prisma.solWalletUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solWalletPayload>
          }
          deleteMany: {
            args: Prisma.solWalletDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.solWalletUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.solWalletUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solWalletPayload>[]
          }
          upsert: {
            args: Prisma.solWalletUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solWalletPayload>
          }
          aggregate: {
            args: Prisma.SolWalletAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSolWallet>
          }
          groupBy: {
            args: Prisma.solWalletGroupByArgs<ExtArgs>
            result: $Utils.Optional<SolWalletGroupByOutputType>[]
          }
          count: {
            args: Prisma.solWalletCountArgs<ExtArgs>
            result: $Utils.Optional<SolWalletCountAggregateOutputType> | number
          }
        }
      }
      InrWallet: {
        payload: Prisma.$InrWalletPayload<ExtArgs>
        fields: Prisma.InrWalletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InrWalletFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InrWalletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InrWalletFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InrWalletPayload>
          }
          findFirst: {
            args: Prisma.InrWalletFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InrWalletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InrWalletFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InrWalletPayload>
          }
          findMany: {
            args: Prisma.InrWalletFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InrWalletPayload>[]
          }
          create: {
            args: Prisma.InrWalletCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InrWalletPayload>
          }
          createMany: {
            args: Prisma.InrWalletCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InrWalletCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InrWalletPayload>[]
          }
          delete: {
            args: Prisma.InrWalletDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InrWalletPayload>
          }
          update: {
            args: Prisma.InrWalletUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InrWalletPayload>
          }
          deleteMany: {
            args: Prisma.InrWalletDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InrWalletUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InrWalletUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InrWalletPayload>[]
          }
          upsert: {
            args: Prisma.InrWalletUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InrWalletPayload>
          }
          aggregate: {
            args: Prisma.InrWalletAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInrWallet>
          }
          groupBy: {
            args: Prisma.InrWalletGroupByArgs<ExtArgs>
            result: $Utils.Optional<InrWalletGroupByOutputType>[]
          }
          count: {
            args: Prisma.InrWalletCountArgs<ExtArgs>
            result: $Utils.Optional<InrWalletCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    solWallet?: solWalletOmit
    inrWallet?: InrWalletOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    wallet: number
    inrWallet: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | UserCountOutputTypeCountWalletArgs
    inrWallet?: boolean | UserCountOutputTypeCountInrWalletArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWalletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: solWalletWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInrWalletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InrWalletWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    wallet?: boolean | User$walletArgs<ExtArgs>
    inrWallet?: boolean | User$inrWalletArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | User$walletArgs<ExtArgs>
    inrWallet?: boolean | User$inrWalletArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      wallet: Prisma.$solWalletPayload<ExtArgs>[]
      inrWallet: Prisma.$InrWalletPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wallet<T extends User$walletArgs<ExtArgs> = {}>(args?: Subset<T, User$walletArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$solWalletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inrWallet<T extends User$inrWalletArgs<ExtArgs> = {}>(args?: Subset<T, User$inrWalletArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InrWalletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.wallet
   */
  export type User$walletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solWallet
     */
    select?: solWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solWallet
     */
    omit?: solWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solWalletInclude<ExtArgs> | null
    where?: solWalletWhereInput
    orderBy?: solWalletOrderByWithRelationInput | solWalletOrderByWithRelationInput[]
    cursor?: solWalletWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SolWalletScalarFieldEnum | SolWalletScalarFieldEnum[]
  }

  /**
   * User.inrWallet
   */
  export type User$inrWalletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InrWallet
     */
    select?: InrWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InrWallet
     */
    omit?: InrWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InrWalletInclude<ExtArgs> | null
    where?: InrWalletWhereInput
    orderBy?: InrWalletOrderByWithRelationInput | InrWalletOrderByWithRelationInput[]
    cursor?: InrWalletWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InrWalletScalarFieldEnum | InrWalletScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model solWallet
   */

  export type AggregateSolWallet = {
    _count: SolWalletCountAggregateOutputType | null
    _min: SolWalletMinAggregateOutputType | null
    _max: SolWalletMaxAggregateOutputType | null
  }

  export type SolWalletMinAggregateOutputType = {
    id: string | null
    publicKey: string | null
    privateKey: string | null
    userId: string | null
  }

  export type SolWalletMaxAggregateOutputType = {
    id: string | null
    publicKey: string | null
    privateKey: string | null
    userId: string | null
  }

  export type SolWalletCountAggregateOutputType = {
    id: number
    publicKey: number
    privateKey: number
    userId: number
    _all: number
  }


  export type SolWalletMinAggregateInputType = {
    id?: true
    publicKey?: true
    privateKey?: true
    userId?: true
  }

  export type SolWalletMaxAggregateInputType = {
    id?: true
    publicKey?: true
    privateKey?: true
    userId?: true
  }

  export type SolWalletCountAggregateInputType = {
    id?: true
    publicKey?: true
    privateKey?: true
    userId?: true
    _all?: true
  }

  export type SolWalletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which solWallet to aggregate.
     */
    where?: solWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of solWallets to fetch.
     */
    orderBy?: solWalletOrderByWithRelationInput | solWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: solWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` solWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` solWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned solWallets
    **/
    _count?: true | SolWalletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SolWalletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SolWalletMaxAggregateInputType
  }

  export type GetSolWalletAggregateType<T extends SolWalletAggregateArgs> = {
        [P in keyof T & keyof AggregateSolWallet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSolWallet[P]>
      : GetScalarType<T[P], AggregateSolWallet[P]>
  }




  export type solWalletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: solWalletWhereInput
    orderBy?: solWalletOrderByWithAggregationInput | solWalletOrderByWithAggregationInput[]
    by: SolWalletScalarFieldEnum[] | SolWalletScalarFieldEnum
    having?: solWalletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SolWalletCountAggregateInputType | true
    _min?: SolWalletMinAggregateInputType
    _max?: SolWalletMaxAggregateInputType
  }

  export type SolWalletGroupByOutputType = {
    id: string
    publicKey: string
    privateKey: string
    userId: string
    _count: SolWalletCountAggregateOutputType | null
    _min: SolWalletMinAggregateOutputType | null
    _max: SolWalletMaxAggregateOutputType | null
  }

  type GetSolWalletGroupByPayload<T extends solWalletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SolWalletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SolWalletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SolWalletGroupByOutputType[P]>
            : GetScalarType<T[P], SolWalletGroupByOutputType[P]>
        }
      >
    >


  export type solWalletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicKey?: boolean
    privateKey?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solWallet"]>

  export type solWalletSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicKey?: boolean
    privateKey?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solWallet"]>

  export type solWalletSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicKey?: boolean
    privateKey?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solWallet"]>

  export type solWalletSelectScalar = {
    id?: boolean
    publicKey?: boolean
    privateKey?: boolean
    userId?: boolean
  }

  export type solWalletOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "publicKey" | "privateKey" | "userId", ExtArgs["result"]["solWallet"]>
  export type solWalletInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type solWalletIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type solWalletIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $solWalletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "solWallet"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      publicKey: string
      privateKey: string
      userId: string
    }, ExtArgs["result"]["solWallet"]>
    composites: {}
  }

  type solWalletGetPayload<S extends boolean | null | undefined | solWalletDefaultArgs> = $Result.GetResult<Prisma.$solWalletPayload, S>

  type solWalletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<solWalletFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SolWalletCountAggregateInputType | true
    }

  export interface solWalletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['solWallet'], meta: { name: 'solWallet' } }
    /**
     * Find zero or one SolWallet that matches the filter.
     * @param {solWalletFindUniqueArgs} args - Arguments to find a SolWallet
     * @example
     * // Get one SolWallet
     * const solWallet = await prisma.solWallet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends solWalletFindUniqueArgs>(args: SelectSubset<T, solWalletFindUniqueArgs<ExtArgs>>): Prisma__solWalletClient<$Result.GetResult<Prisma.$solWalletPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SolWallet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {solWalletFindUniqueOrThrowArgs} args - Arguments to find a SolWallet
     * @example
     * // Get one SolWallet
     * const solWallet = await prisma.solWallet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends solWalletFindUniqueOrThrowArgs>(args: SelectSubset<T, solWalletFindUniqueOrThrowArgs<ExtArgs>>): Prisma__solWalletClient<$Result.GetResult<Prisma.$solWalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SolWallet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {solWalletFindFirstArgs} args - Arguments to find a SolWallet
     * @example
     * // Get one SolWallet
     * const solWallet = await prisma.solWallet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends solWalletFindFirstArgs>(args?: SelectSubset<T, solWalletFindFirstArgs<ExtArgs>>): Prisma__solWalletClient<$Result.GetResult<Prisma.$solWalletPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SolWallet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {solWalletFindFirstOrThrowArgs} args - Arguments to find a SolWallet
     * @example
     * // Get one SolWallet
     * const solWallet = await prisma.solWallet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends solWalletFindFirstOrThrowArgs>(args?: SelectSubset<T, solWalletFindFirstOrThrowArgs<ExtArgs>>): Prisma__solWalletClient<$Result.GetResult<Prisma.$solWalletPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SolWallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {solWalletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SolWallets
     * const solWallets = await prisma.solWallet.findMany()
     * 
     * // Get first 10 SolWallets
     * const solWallets = await prisma.solWallet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const solWalletWithIdOnly = await prisma.solWallet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends solWalletFindManyArgs>(args?: SelectSubset<T, solWalletFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$solWalletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SolWallet.
     * @param {solWalletCreateArgs} args - Arguments to create a SolWallet.
     * @example
     * // Create one SolWallet
     * const SolWallet = await prisma.solWallet.create({
     *   data: {
     *     // ... data to create a SolWallet
     *   }
     * })
     * 
     */
    create<T extends solWalletCreateArgs>(args: SelectSubset<T, solWalletCreateArgs<ExtArgs>>): Prisma__solWalletClient<$Result.GetResult<Prisma.$solWalletPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SolWallets.
     * @param {solWalletCreateManyArgs} args - Arguments to create many SolWallets.
     * @example
     * // Create many SolWallets
     * const solWallet = await prisma.solWallet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends solWalletCreateManyArgs>(args?: SelectSubset<T, solWalletCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SolWallets and returns the data saved in the database.
     * @param {solWalletCreateManyAndReturnArgs} args - Arguments to create many SolWallets.
     * @example
     * // Create many SolWallets
     * const solWallet = await prisma.solWallet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SolWallets and only return the `id`
     * const solWalletWithIdOnly = await prisma.solWallet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends solWalletCreateManyAndReturnArgs>(args?: SelectSubset<T, solWalletCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$solWalletPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SolWallet.
     * @param {solWalletDeleteArgs} args - Arguments to delete one SolWallet.
     * @example
     * // Delete one SolWallet
     * const SolWallet = await prisma.solWallet.delete({
     *   where: {
     *     // ... filter to delete one SolWallet
     *   }
     * })
     * 
     */
    delete<T extends solWalletDeleteArgs>(args: SelectSubset<T, solWalletDeleteArgs<ExtArgs>>): Prisma__solWalletClient<$Result.GetResult<Prisma.$solWalletPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SolWallet.
     * @param {solWalletUpdateArgs} args - Arguments to update one SolWallet.
     * @example
     * // Update one SolWallet
     * const solWallet = await prisma.solWallet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends solWalletUpdateArgs>(args: SelectSubset<T, solWalletUpdateArgs<ExtArgs>>): Prisma__solWalletClient<$Result.GetResult<Prisma.$solWalletPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SolWallets.
     * @param {solWalletDeleteManyArgs} args - Arguments to filter SolWallets to delete.
     * @example
     * // Delete a few SolWallets
     * const { count } = await prisma.solWallet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends solWalletDeleteManyArgs>(args?: SelectSubset<T, solWalletDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SolWallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {solWalletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SolWallets
     * const solWallet = await prisma.solWallet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends solWalletUpdateManyArgs>(args: SelectSubset<T, solWalletUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SolWallets and returns the data updated in the database.
     * @param {solWalletUpdateManyAndReturnArgs} args - Arguments to update many SolWallets.
     * @example
     * // Update many SolWallets
     * const solWallet = await prisma.solWallet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SolWallets and only return the `id`
     * const solWalletWithIdOnly = await prisma.solWallet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends solWalletUpdateManyAndReturnArgs>(args: SelectSubset<T, solWalletUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$solWalletPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SolWallet.
     * @param {solWalletUpsertArgs} args - Arguments to update or create a SolWallet.
     * @example
     * // Update or create a SolWallet
     * const solWallet = await prisma.solWallet.upsert({
     *   create: {
     *     // ... data to create a SolWallet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SolWallet we want to update
     *   }
     * })
     */
    upsert<T extends solWalletUpsertArgs>(args: SelectSubset<T, solWalletUpsertArgs<ExtArgs>>): Prisma__solWalletClient<$Result.GetResult<Prisma.$solWalletPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SolWallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {solWalletCountArgs} args - Arguments to filter SolWallets to count.
     * @example
     * // Count the number of SolWallets
     * const count = await prisma.solWallet.count({
     *   where: {
     *     // ... the filter for the SolWallets we want to count
     *   }
     * })
    **/
    count<T extends solWalletCountArgs>(
      args?: Subset<T, solWalletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SolWalletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SolWallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolWalletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SolWalletAggregateArgs>(args: Subset<T, SolWalletAggregateArgs>): Prisma.PrismaPromise<GetSolWalletAggregateType<T>>

    /**
     * Group by SolWallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {solWalletGroupByArgs} args - Group by arguments.
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
      T extends solWalletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: solWalletGroupByArgs['orderBy'] }
        : { orderBy?: solWalletGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, solWalletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSolWalletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the solWallet model
   */
  readonly fields: solWalletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for solWallet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__solWalletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the solWallet model
   */
  interface solWalletFieldRefs {
    readonly id: FieldRef<"solWallet", 'String'>
    readonly publicKey: FieldRef<"solWallet", 'String'>
    readonly privateKey: FieldRef<"solWallet", 'String'>
    readonly userId: FieldRef<"solWallet", 'String'>
  }
    

  // Custom InputTypes
  /**
   * solWallet findUnique
   */
  export type solWalletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solWallet
     */
    select?: solWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solWallet
     */
    omit?: solWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solWalletInclude<ExtArgs> | null
    /**
     * Filter, which solWallet to fetch.
     */
    where: solWalletWhereUniqueInput
  }

  /**
   * solWallet findUniqueOrThrow
   */
  export type solWalletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solWallet
     */
    select?: solWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solWallet
     */
    omit?: solWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solWalletInclude<ExtArgs> | null
    /**
     * Filter, which solWallet to fetch.
     */
    where: solWalletWhereUniqueInput
  }

  /**
   * solWallet findFirst
   */
  export type solWalletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solWallet
     */
    select?: solWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solWallet
     */
    omit?: solWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solWalletInclude<ExtArgs> | null
    /**
     * Filter, which solWallet to fetch.
     */
    where?: solWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of solWallets to fetch.
     */
    orderBy?: solWalletOrderByWithRelationInput | solWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for solWallets.
     */
    cursor?: solWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` solWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` solWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of solWallets.
     */
    distinct?: SolWalletScalarFieldEnum | SolWalletScalarFieldEnum[]
  }

  /**
   * solWallet findFirstOrThrow
   */
  export type solWalletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solWallet
     */
    select?: solWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solWallet
     */
    omit?: solWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solWalletInclude<ExtArgs> | null
    /**
     * Filter, which solWallet to fetch.
     */
    where?: solWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of solWallets to fetch.
     */
    orderBy?: solWalletOrderByWithRelationInput | solWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for solWallets.
     */
    cursor?: solWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` solWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` solWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of solWallets.
     */
    distinct?: SolWalletScalarFieldEnum | SolWalletScalarFieldEnum[]
  }

  /**
   * solWallet findMany
   */
  export type solWalletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solWallet
     */
    select?: solWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solWallet
     */
    omit?: solWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solWalletInclude<ExtArgs> | null
    /**
     * Filter, which solWallets to fetch.
     */
    where?: solWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of solWallets to fetch.
     */
    orderBy?: solWalletOrderByWithRelationInput | solWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing solWallets.
     */
    cursor?: solWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` solWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` solWallets.
     */
    skip?: number
    distinct?: SolWalletScalarFieldEnum | SolWalletScalarFieldEnum[]
  }

  /**
   * solWallet create
   */
  export type solWalletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solWallet
     */
    select?: solWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solWallet
     */
    omit?: solWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solWalletInclude<ExtArgs> | null
    /**
     * The data needed to create a solWallet.
     */
    data: XOR<solWalletCreateInput, solWalletUncheckedCreateInput>
  }

  /**
   * solWallet createMany
   */
  export type solWalletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many solWallets.
     */
    data: solWalletCreateManyInput | solWalletCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * solWallet createManyAndReturn
   */
  export type solWalletCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solWallet
     */
    select?: solWalletSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the solWallet
     */
    omit?: solWalletOmit<ExtArgs> | null
    /**
     * The data used to create many solWallets.
     */
    data: solWalletCreateManyInput | solWalletCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solWalletIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * solWallet update
   */
  export type solWalletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solWallet
     */
    select?: solWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solWallet
     */
    omit?: solWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solWalletInclude<ExtArgs> | null
    /**
     * The data needed to update a solWallet.
     */
    data: XOR<solWalletUpdateInput, solWalletUncheckedUpdateInput>
    /**
     * Choose, which solWallet to update.
     */
    where: solWalletWhereUniqueInput
  }

  /**
   * solWallet updateMany
   */
  export type solWalletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update solWallets.
     */
    data: XOR<solWalletUpdateManyMutationInput, solWalletUncheckedUpdateManyInput>
    /**
     * Filter which solWallets to update
     */
    where?: solWalletWhereInput
    /**
     * Limit how many solWallets to update.
     */
    limit?: number
  }

  /**
   * solWallet updateManyAndReturn
   */
  export type solWalletUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solWallet
     */
    select?: solWalletSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the solWallet
     */
    omit?: solWalletOmit<ExtArgs> | null
    /**
     * The data used to update solWallets.
     */
    data: XOR<solWalletUpdateManyMutationInput, solWalletUncheckedUpdateManyInput>
    /**
     * Filter which solWallets to update
     */
    where?: solWalletWhereInput
    /**
     * Limit how many solWallets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solWalletIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * solWallet upsert
   */
  export type solWalletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solWallet
     */
    select?: solWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solWallet
     */
    omit?: solWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solWalletInclude<ExtArgs> | null
    /**
     * The filter to search for the solWallet to update in case it exists.
     */
    where: solWalletWhereUniqueInput
    /**
     * In case the solWallet found by the `where` argument doesn't exist, create a new solWallet with this data.
     */
    create: XOR<solWalletCreateInput, solWalletUncheckedCreateInput>
    /**
     * In case the solWallet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<solWalletUpdateInput, solWalletUncheckedUpdateInput>
  }

  /**
   * solWallet delete
   */
  export type solWalletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solWallet
     */
    select?: solWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solWallet
     */
    omit?: solWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solWalletInclude<ExtArgs> | null
    /**
     * Filter which solWallet to delete.
     */
    where: solWalletWhereUniqueInput
  }

  /**
   * solWallet deleteMany
   */
  export type solWalletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which solWallets to delete
     */
    where?: solWalletWhereInput
    /**
     * Limit how many solWallets to delete.
     */
    limit?: number
  }

  /**
   * solWallet without action
   */
  export type solWalletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solWallet
     */
    select?: solWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solWallet
     */
    omit?: solWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: solWalletInclude<ExtArgs> | null
  }


  /**
   * Model InrWallet
   */

  export type AggregateInrWallet = {
    _count: InrWalletCountAggregateOutputType | null
    _avg: InrWalletAvgAggregateOutputType | null
    _sum: InrWalletSumAggregateOutputType | null
    _min: InrWalletMinAggregateOutputType | null
    _max: InrWalletMaxAggregateOutputType | null
  }

  export type InrWalletAvgAggregateOutputType = {
    balance: number | null
  }

  export type InrWalletSumAggregateOutputType = {
    balance: number | null
  }

  export type InrWalletMinAggregateOutputType = {
    id: string | null
    balance: number | null
    userId: string | null
  }

  export type InrWalletMaxAggregateOutputType = {
    id: string | null
    balance: number | null
    userId: string | null
  }

  export type InrWalletCountAggregateOutputType = {
    id: number
    balance: number
    userId: number
    _all: number
  }


  export type InrWalletAvgAggregateInputType = {
    balance?: true
  }

  export type InrWalletSumAggregateInputType = {
    balance?: true
  }

  export type InrWalletMinAggregateInputType = {
    id?: true
    balance?: true
    userId?: true
  }

  export type InrWalletMaxAggregateInputType = {
    id?: true
    balance?: true
    userId?: true
  }

  export type InrWalletCountAggregateInputType = {
    id?: true
    balance?: true
    userId?: true
    _all?: true
  }

  export type InrWalletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InrWallet to aggregate.
     */
    where?: InrWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InrWallets to fetch.
     */
    orderBy?: InrWalletOrderByWithRelationInput | InrWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InrWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InrWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InrWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InrWallets
    **/
    _count?: true | InrWalletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InrWalletAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InrWalletSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InrWalletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InrWalletMaxAggregateInputType
  }

  export type GetInrWalletAggregateType<T extends InrWalletAggregateArgs> = {
        [P in keyof T & keyof AggregateInrWallet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInrWallet[P]>
      : GetScalarType<T[P], AggregateInrWallet[P]>
  }




  export type InrWalletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InrWalletWhereInput
    orderBy?: InrWalletOrderByWithAggregationInput | InrWalletOrderByWithAggregationInput[]
    by: InrWalletScalarFieldEnum[] | InrWalletScalarFieldEnum
    having?: InrWalletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InrWalletCountAggregateInputType | true
    _avg?: InrWalletAvgAggregateInputType
    _sum?: InrWalletSumAggregateInputType
    _min?: InrWalletMinAggregateInputType
    _max?: InrWalletMaxAggregateInputType
  }

  export type InrWalletGroupByOutputType = {
    id: string
    balance: number
    userId: string
    _count: InrWalletCountAggregateOutputType | null
    _avg: InrWalletAvgAggregateOutputType | null
    _sum: InrWalletSumAggregateOutputType | null
    _min: InrWalletMinAggregateOutputType | null
    _max: InrWalletMaxAggregateOutputType | null
  }

  type GetInrWalletGroupByPayload<T extends InrWalletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InrWalletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InrWalletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InrWalletGroupByOutputType[P]>
            : GetScalarType<T[P], InrWalletGroupByOutputType[P]>
        }
      >
    >


  export type InrWalletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    balance?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inrWallet"]>

  export type InrWalletSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    balance?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inrWallet"]>

  export type InrWalletSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    balance?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inrWallet"]>

  export type InrWalletSelectScalar = {
    id?: boolean
    balance?: boolean
    userId?: boolean
  }

  export type InrWalletOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "balance" | "userId", ExtArgs["result"]["inrWallet"]>
  export type InrWalletInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InrWalletIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InrWalletIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InrWalletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InrWallet"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      balance: number
      userId: string
    }, ExtArgs["result"]["inrWallet"]>
    composites: {}
  }

  type InrWalletGetPayload<S extends boolean | null | undefined | InrWalletDefaultArgs> = $Result.GetResult<Prisma.$InrWalletPayload, S>

  type InrWalletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InrWalletFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InrWalletCountAggregateInputType | true
    }

  export interface InrWalletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InrWallet'], meta: { name: 'InrWallet' } }
    /**
     * Find zero or one InrWallet that matches the filter.
     * @param {InrWalletFindUniqueArgs} args - Arguments to find a InrWallet
     * @example
     * // Get one InrWallet
     * const inrWallet = await prisma.inrWallet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InrWalletFindUniqueArgs>(args: SelectSubset<T, InrWalletFindUniqueArgs<ExtArgs>>): Prisma__InrWalletClient<$Result.GetResult<Prisma.$InrWalletPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InrWallet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InrWalletFindUniqueOrThrowArgs} args - Arguments to find a InrWallet
     * @example
     * // Get one InrWallet
     * const inrWallet = await prisma.inrWallet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InrWalletFindUniqueOrThrowArgs>(args: SelectSubset<T, InrWalletFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InrWalletClient<$Result.GetResult<Prisma.$InrWalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InrWallet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InrWalletFindFirstArgs} args - Arguments to find a InrWallet
     * @example
     * // Get one InrWallet
     * const inrWallet = await prisma.inrWallet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InrWalletFindFirstArgs>(args?: SelectSubset<T, InrWalletFindFirstArgs<ExtArgs>>): Prisma__InrWalletClient<$Result.GetResult<Prisma.$InrWalletPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InrWallet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InrWalletFindFirstOrThrowArgs} args - Arguments to find a InrWallet
     * @example
     * // Get one InrWallet
     * const inrWallet = await prisma.inrWallet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InrWalletFindFirstOrThrowArgs>(args?: SelectSubset<T, InrWalletFindFirstOrThrowArgs<ExtArgs>>): Prisma__InrWalletClient<$Result.GetResult<Prisma.$InrWalletPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InrWallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InrWalletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InrWallets
     * const inrWallets = await prisma.inrWallet.findMany()
     * 
     * // Get first 10 InrWallets
     * const inrWallets = await prisma.inrWallet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inrWalletWithIdOnly = await prisma.inrWallet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InrWalletFindManyArgs>(args?: SelectSubset<T, InrWalletFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InrWalletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InrWallet.
     * @param {InrWalletCreateArgs} args - Arguments to create a InrWallet.
     * @example
     * // Create one InrWallet
     * const InrWallet = await prisma.inrWallet.create({
     *   data: {
     *     // ... data to create a InrWallet
     *   }
     * })
     * 
     */
    create<T extends InrWalletCreateArgs>(args: SelectSubset<T, InrWalletCreateArgs<ExtArgs>>): Prisma__InrWalletClient<$Result.GetResult<Prisma.$InrWalletPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InrWallets.
     * @param {InrWalletCreateManyArgs} args - Arguments to create many InrWallets.
     * @example
     * // Create many InrWallets
     * const inrWallet = await prisma.inrWallet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InrWalletCreateManyArgs>(args?: SelectSubset<T, InrWalletCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InrWallets and returns the data saved in the database.
     * @param {InrWalletCreateManyAndReturnArgs} args - Arguments to create many InrWallets.
     * @example
     * // Create many InrWallets
     * const inrWallet = await prisma.inrWallet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InrWallets and only return the `id`
     * const inrWalletWithIdOnly = await prisma.inrWallet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InrWalletCreateManyAndReturnArgs>(args?: SelectSubset<T, InrWalletCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InrWalletPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InrWallet.
     * @param {InrWalletDeleteArgs} args - Arguments to delete one InrWallet.
     * @example
     * // Delete one InrWallet
     * const InrWallet = await prisma.inrWallet.delete({
     *   where: {
     *     // ... filter to delete one InrWallet
     *   }
     * })
     * 
     */
    delete<T extends InrWalletDeleteArgs>(args: SelectSubset<T, InrWalletDeleteArgs<ExtArgs>>): Prisma__InrWalletClient<$Result.GetResult<Prisma.$InrWalletPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InrWallet.
     * @param {InrWalletUpdateArgs} args - Arguments to update one InrWallet.
     * @example
     * // Update one InrWallet
     * const inrWallet = await prisma.inrWallet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InrWalletUpdateArgs>(args: SelectSubset<T, InrWalletUpdateArgs<ExtArgs>>): Prisma__InrWalletClient<$Result.GetResult<Prisma.$InrWalletPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InrWallets.
     * @param {InrWalletDeleteManyArgs} args - Arguments to filter InrWallets to delete.
     * @example
     * // Delete a few InrWallets
     * const { count } = await prisma.inrWallet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InrWalletDeleteManyArgs>(args?: SelectSubset<T, InrWalletDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InrWallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InrWalletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InrWallets
     * const inrWallet = await prisma.inrWallet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InrWalletUpdateManyArgs>(args: SelectSubset<T, InrWalletUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InrWallets and returns the data updated in the database.
     * @param {InrWalletUpdateManyAndReturnArgs} args - Arguments to update many InrWallets.
     * @example
     * // Update many InrWallets
     * const inrWallet = await prisma.inrWallet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InrWallets and only return the `id`
     * const inrWalletWithIdOnly = await prisma.inrWallet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InrWalletUpdateManyAndReturnArgs>(args: SelectSubset<T, InrWalletUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InrWalletPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InrWallet.
     * @param {InrWalletUpsertArgs} args - Arguments to update or create a InrWallet.
     * @example
     * // Update or create a InrWallet
     * const inrWallet = await prisma.inrWallet.upsert({
     *   create: {
     *     // ... data to create a InrWallet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InrWallet we want to update
     *   }
     * })
     */
    upsert<T extends InrWalletUpsertArgs>(args: SelectSubset<T, InrWalletUpsertArgs<ExtArgs>>): Prisma__InrWalletClient<$Result.GetResult<Prisma.$InrWalletPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InrWallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InrWalletCountArgs} args - Arguments to filter InrWallets to count.
     * @example
     * // Count the number of InrWallets
     * const count = await prisma.inrWallet.count({
     *   where: {
     *     // ... the filter for the InrWallets we want to count
     *   }
     * })
    **/
    count<T extends InrWalletCountArgs>(
      args?: Subset<T, InrWalletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InrWalletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InrWallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InrWalletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InrWalletAggregateArgs>(args: Subset<T, InrWalletAggregateArgs>): Prisma.PrismaPromise<GetInrWalletAggregateType<T>>

    /**
     * Group by InrWallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InrWalletGroupByArgs} args - Group by arguments.
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
      T extends InrWalletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InrWalletGroupByArgs['orderBy'] }
        : { orderBy?: InrWalletGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InrWalletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInrWalletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InrWallet model
   */
  readonly fields: InrWalletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InrWallet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InrWalletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InrWallet model
   */
  interface InrWalletFieldRefs {
    readonly id: FieldRef<"InrWallet", 'String'>
    readonly balance: FieldRef<"InrWallet", 'Int'>
    readonly userId: FieldRef<"InrWallet", 'String'>
  }
    

  // Custom InputTypes
  /**
   * InrWallet findUnique
   */
  export type InrWalletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InrWallet
     */
    select?: InrWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InrWallet
     */
    omit?: InrWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InrWalletInclude<ExtArgs> | null
    /**
     * Filter, which InrWallet to fetch.
     */
    where: InrWalletWhereUniqueInput
  }

  /**
   * InrWallet findUniqueOrThrow
   */
  export type InrWalletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InrWallet
     */
    select?: InrWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InrWallet
     */
    omit?: InrWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InrWalletInclude<ExtArgs> | null
    /**
     * Filter, which InrWallet to fetch.
     */
    where: InrWalletWhereUniqueInput
  }

  /**
   * InrWallet findFirst
   */
  export type InrWalletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InrWallet
     */
    select?: InrWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InrWallet
     */
    omit?: InrWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InrWalletInclude<ExtArgs> | null
    /**
     * Filter, which InrWallet to fetch.
     */
    where?: InrWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InrWallets to fetch.
     */
    orderBy?: InrWalletOrderByWithRelationInput | InrWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InrWallets.
     */
    cursor?: InrWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InrWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InrWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InrWallets.
     */
    distinct?: InrWalletScalarFieldEnum | InrWalletScalarFieldEnum[]
  }

  /**
   * InrWallet findFirstOrThrow
   */
  export type InrWalletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InrWallet
     */
    select?: InrWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InrWallet
     */
    omit?: InrWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InrWalletInclude<ExtArgs> | null
    /**
     * Filter, which InrWallet to fetch.
     */
    where?: InrWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InrWallets to fetch.
     */
    orderBy?: InrWalletOrderByWithRelationInput | InrWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InrWallets.
     */
    cursor?: InrWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InrWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InrWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InrWallets.
     */
    distinct?: InrWalletScalarFieldEnum | InrWalletScalarFieldEnum[]
  }

  /**
   * InrWallet findMany
   */
  export type InrWalletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InrWallet
     */
    select?: InrWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InrWallet
     */
    omit?: InrWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InrWalletInclude<ExtArgs> | null
    /**
     * Filter, which InrWallets to fetch.
     */
    where?: InrWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InrWallets to fetch.
     */
    orderBy?: InrWalletOrderByWithRelationInput | InrWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InrWallets.
     */
    cursor?: InrWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InrWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InrWallets.
     */
    skip?: number
    distinct?: InrWalletScalarFieldEnum | InrWalletScalarFieldEnum[]
  }

  /**
   * InrWallet create
   */
  export type InrWalletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InrWallet
     */
    select?: InrWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InrWallet
     */
    omit?: InrWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InrWalletInclude<ExtArgs> | null
    /**
     * The data needed to create a InrWallet.
     */
    data: XOR<InrWalletCreateInput, InrWalletUncheckedCreateInput>
  }

  /**
   * InrWallet createMany
   */
  export type InrWalletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InrWallets.
     */
    data: InrWalletCreateManyInput | InrWalletCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InrWallet createManyAndReturn
   */
  export type InrWalletCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InrWallet
     */
    select?: InrWalletSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InrWallet
     */
    omit?: InrWalletOmit<ExtArgs> | null
    /**
     * The data used to create many InrWallets.
     */
    data: InrWalletCreateManyInput | InrWalletCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InrWalletIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InrWallet update
   */
  export type InrWalletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InrWallet
     */
    select?: InrWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InrWallet
     */
    omit?: InrWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InrWalletInclude<ExtArgs> | null
    /**
     * The data needed to update a InrWallet.
     */
    data: XOR<InrWalletUpdateInput, InrWalletUncheckedUpdateInput>
    /**
     * Choose, which InrWallet to update.
     */
    where: InrWalletWhereUniqueInput
  }

  /**
   * InrWallet updateMany
   */
  export type InrWalletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InrWallets.
     */
    data: XOR<InrWalletUpdateManyMutationInput, InrWalletUncheckedUpdateManyInput>
    /**
     * Filter which InrWallets to update
     */
    where?: InrWalletWhereInput
    /**
     * Limit how many InrWallets to update.
     */
    limit?: number
  }

  /**
   * InrWallet updateManyAndReturn
   */
  export type InrWalletUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InrWallet
     */
    select?: InrWalletSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InrWallet
     */
    omit?: InrWalletOmit<ExtArgs> | null
    /**
     * The data used to update InrWallets.
     */
    data: XOR<InrWalletUpdateManyMutationInput, InrWalletUncheckedUpdateManyInput>
    /**
     * Filter which InrWallets to update
     */
    where?: InrWalletWhereInput
    /**
     * Limit how many InrWallets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InrWalletIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InrWallet upsert
   */
  export type InrWalletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InrWallet
     */
    select?: InrWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InrWallet
     */
    omit?: InrWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InrWalletInclude<ExtArgs> | null
    /**
     * The filter to search for the InrWallet to update in case it exists.
     */
    where: InrWalletWhereUniqueInput
    /**
     * In case the InrWallet found by the `where` argument doesn't exist, create a new InrWallet with this data.
     */
    create: XOR<InrWalletCreateInput, InrWalletUncheckedCreateInput>
    /**
     * In case the InrWallet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InrWalletUpdateInput, InrWalletUncheckedUpdateInput>
  }

  /**
   * InrWallet delete
   */
  export type InrWalletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InrWallet
     */
    select?: InrWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InrWallet
     */
    omit?: InrWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InrWalletInclude<ExtArgs> | null
    /**
     * Filter which InrWallet to delete.
     */
    where: InrWalletWhereUniqueInput
  }

  /**
   * InrWallet deleteMany
   */
  export type InrWalletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InrWallets to delete
     */
    where?: InrWalletWhereInput
    /**
     * Limit how many InrWallets to delete.
     */
    limit?: number
  }

  /**
   * InrWallet without action
   */
  export type InrWalletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InrWallet
     */
    select?: InrWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InrWallet
     */
    omit?: InrWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InrWalletInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SolWalletScalarFieldEnum: {
    id: 'id',
    publicKey: 'publicKey',
    privateKey: 'privateKey',
    userId: 'userId'
  };

  export type SolWalletScalarFieldEnum = (typeof SolWalletScalarFieldEnum)[keyof typeof SolWalletScalarFieldEnum]


  export const InrWalletScalarFieldEnum: {
    id: 'id',
    balance: 'balance',
    userId: 'userId'
  };

  export type InrWalletScalarFieldEnum = (typeof InrWalletScalarFieldEnum)[keyof typeof InrWalletScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    wallet?: SolWalletListRelationFilter
    inrWallet?: InrWalletListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    wallet?: solWalletOrderByRelationAggregateInput
    inrWallet?: InrWalletOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    wallet?: SolWalletListRelationFilter
    inrWallet?: InrWalletListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
  }

  export type solWalletWhereInput = {
    AND?: solWalletWhereInput | solWalletWhereInput[]
    OR?: solWalletWhereInput[]
    NOT?: solWalletWhereInput | solWalletWhereInput[]
    id?: StringFilter<"solWallet"> | string
    publicKey?: StringFilter<"solWallet"> | string
    privateKey?: StringFilter<"solWallet"> | string
    userId?: StringFilter<"solWallet"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type solWalletOrderByWithRelationInput = {
    id?: SortOrder
    publicKey?: SortOrder
    privateKey?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type solWalletWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: solWalletWhereInput | solWalletWhereInput[]
    OR?: solWalletWhereInput[]
    NOT?: solWalletWhereInput | solWalletWhereInput[]
    publicKey?: StringFilter<"solWallet"> | string
    privateKey?: StringFilter<"solWallet"> | string
    userId?: StringFilter<"solWallet"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type solWalletOrderByWithAggregationInput = {
    id?: SortOrder
    publicKey?: SortOrder
    privateKey?: SortOrder
    userId?: SortOrder
    _count?: solWalletCountOrderByAggregateInput
    _max?: solWalletMaxOrderByAggregateInput
    _min?: solWalletMinOrderByAggregateInput
  }

  export type solWalletScalarWhereWithAggregatesInput = {
    AND?: solWalletScalarWhereWithAggregatesInput | solWalletScalarWhereWithAggregatesInput[]
    OR?: solWalletScalarWhereWithAggregatesInput[]
    NOT?: solWalletScalarWhereWithAggregatesInput | solWalletScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"solWallet"> | string
    publicKey?: StringWithAggregatesFilter<"solWallet"> | string
    privateKey?: StringWithAggregatesFilter<"solWallet"> | string
    userId?: StringWithAggregatesFilter<"solWallet"> | string
  }

  export type InrWalletWhereInput = {
    AND?: InrWalletWhereInput | InrWalletWhereInput[]
    OR?: InrWalletWhereInput[]
    NOT?: InrWalletWhereInput | InrWalletWhereInput[]
    id?: StringFilter<"InrWallet"> | string
    balance?: IntFilter<"InrWallet"> | number
    userId?: StringFilter<"InrWallet"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type InrWalletOrderByWithRelationInput = {
    id?: SortOrder
    balance?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type InrWalletWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InrWalletWhereInput | InrWalletWhereInput[]
    OR?: InrWalletWhereInput[]
    NOT?: InrWalletWhereInput | InrWalletWhereInput[]
    balance?: IntFilter<"InrWallet"> | number
    userId?: StringFilter<"InrWallet"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type InrWalletOrderByWithAggregationInput = {
    id?: SortOrder
    balance?: SortOrder
    userId?: SortOrder
    _count?: InrWalletCountOrderByAggregateInput
    _avg?: InrWalletAvgOrderByAggregateInput
    _max?: InrWalletMaxOrderByAggregateInput
    _min?: InrWalletMinOrderByAggregateInput
    _sum?: InrWalletSumOrderByAggregateInput
  }

  export type InrWalletScalarWhereWithAggregatesInput = {
    AND?: InrWalletScalarWhereWithAggregatesInput | InrWalletScalarWhereWithAggregatesInput[]
    OR?: InrWalletScalarWhereWithAggregatesInput[]
    NOT?: InrWalletScalarWhereWithAggregatesInput | InrWalletScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InrWallet"> | string
    balance?: IntWithAggregatesFilter<"InrWallet"> | number
    userId?: StringWithAggregatesFilter<"InrWallet"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    wallet?: solWalletCreateNestedManyWithoutUserInput
    inrWallet?: InrWalletCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    wallet?: solWalletUncheckedCreateNestedManyWithoutUserInput
    inrWallet?: InrWalletUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    wallet?: solWalletUpdateManyWithoutUserNestedInput
    inrWallet?: InrWalletUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    wallet?: solWalletUncheckedUpdateManyWithoutUserNestedInput
    inrWallet?: InrWalletUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type solWalletCreateInput = {
    id?: string
    publicKey: string
    privateKey: string
    user: UserCreateNestedOneWithoutWalletInput
  }

  export type solWalletUncheckedCreateInput = {
    id?: string
    publicKey: string
    privateKey: string
    userId: string
  }

  export type solWalletUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutWalletNestedInput
  }

  export type solWalletUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type solWalletCreateManyInput = {
    id?: string
    publicKey: string
    privateKey: string
    userId: string
  }

  export type solWalletUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
  }

  export type solWalletUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type InrWalletCreateInput = {
    id?: string
    balance: number
    user: UserCreateNestedOneWithoutInrWalletInput
  }

  export type InrWalletUncheckedCreateInput = {
    id?: string
    balance: number
    userId: string
  }

  export type InrWalletUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutInrWalletNestedInput
  }

  export type InrWalletUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type InrWalletCreateManyInput = {
    id?: string
    balance: number
    userId: string
  }

  export type InrWalletUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
  }

  export type InrWalletUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type SolWalletListRelationFilter = {
    every?: solWalletWhereInput
    some?: solWalletWhereInput
    none?: solWalletWhereInput
  }

  export type InrWalletListRelationFilter = {
    every?: InrWalletWhereInput
    some?: InrWalletWhereInput
    none?: InrWalletWhereInput
  }

  export type solWalletOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InrWalletOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type solWalletCountOrderByAggregateInput = {
    id?: SortOrder
    publicKey?: SortOrder
    privateKey?: SortOrder
    userId?: SortOrder
  }

  export type solWalletMaxOrderByAggregateInput = {
    id?: SortOrder
    publicKey?: SortOrder
    privateKey?: SortOrder
    userId?: SortOrder
  }

  export type solWalletMinOrderByAggregateInput = {
    id?: SortOrder
    publicKey?: SortOrder
    privateKey?: SortOrder
    userId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type InrWalletCountOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    userId?: SortOrder
  }

  export type InrWalletAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type InrWalletMaxOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    userId?: SortOrder
  }

  export type InrWalletMinOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    userId?: SortOrder
  }

  export type InrWalletSumOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type solWalletCreateNestedManyWithoutUserInput = {
    create?: XOR<solWalletCreateWithoutUserInput, solWalletUncheckedCreateWithoutUserInput> | solWalletCreateWithoutUserInput[] | solWalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: solWalletCreateOrConnectWithoutUserInput | solWalletCreateOrConnectWithoutUserInput[]
    createMany?: solWalletCreateManyUserInputEnvelope
    connect?: solWalletWhereUniqueInput | solWalletWhereUniqueInput[]
  }

  export type InrWalletCreateNestedManyWithoutUserInput = {
    create?: XOR<InrWalletCreateWithoutUserInput, InrWalletUncheckedCreateWithoutUserInput> | InrWalletCreateWithoutUserInput[] | InrWalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InrWalletCreateOrConnectWithoutUserInput | InrWalletCreateOrConnectWithoutUserInput[]
    createMany?: InrWalletCreateManyUserInputEnvelope
    connect?: InrWalletWhereUniqueInput | InrWalletWhereUniqueInput[]
  }

  export type solWalletUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<solWalletCreateWithoutUserInput, solWalletUncheckedCreateWithoutUserInput> | solWalletCreateWithoutUserInput[] | solWalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: solWalletCreateOrConnectWithoutUserInput | solWalletCreateOrConnectWithoutUserInput[]
    createMany?: solWalletCreateManyUserInputEnvelope
    connect?: solWalletWhereUniqueInput | solWalletWhereUniqueInput[]
  }

  export type InrWalletUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InrWalletCreateWithoutUserInput, InrWalletUncheckedCreateWithoutUserInput> | InrWalletCreateWithoutUserInput[] | InrWalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InrWalletCreateOrConnectWithoutUserInput | InrWalletCreateOrConnectWithoutUserInput[]
    createMany?: InrWalletCreateManyUserInputEnvelope
    connect?: InrWalletWhereUniqueInput | InrWalletWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type solWalletUpdateManyWithoutUserNestedInput = {
    create?: XOR<solWalletCreateWithoutUserInput, solWalletUncheckedCreateWithoutUserInput> | solWalletCreateWithoutUserInput[] | solWalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: solWalletCreateOrConnectWithoutUserInput | solWalletCreateOrConnectWithoutUserInput[]
    upsert?: solWalletUpsertWithWhereUniqueWithoutUserInput | solWalletUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: solWalletCreateManyUserInputEnvelope
    set?: solWalletWhereUniqueInput | solWalletWhereUniqueInput[]
    disconnect?: solWalletWhereUniqueInput | solWalletWhereUniqueInput[]
    delete?: solWalletWhereUniqueInput | solWalletWhereUniqueInput[]
    connect?: solWalletWhereUniqueInput | solWalletWhereUniqueInput[]
    update?: solWalletUpdateWithWhereUniqueWithoutUserInput | solWalletUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: solWalletUpdateManyWithWhereWithoutUserInput | solWalletUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: solWalletScalarWhereInput | solWalletScalarWhereInput[]
  }

  export type InrWalletUpdateManyWithoutUserNestedInput = {
    create?: XOR<InrWalletCreateWithoutUserInput, InrWalletUncheckedCreateWithoutUserInput> | InrWalletCreateWithoutUserInput[] | InrWalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InrWalletCreateOrConnectWithoutUserInput | InrWalletCreateOrConnectWithoutUserInput[]
    upsert?: InrWalletUpsertWithWhereUniqueWithoutUserInput | InrWalletUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InrWalletCreateManyUserInputEnvelope
    set?: InrWalletWhereUniqueInput | InrWalletWhereUniqueInput[]
    disconnect?: InrWalletWhereUniqueInput | InrWalletWhereUniqueInput[]
    delete?: InrWalletWhereUniqueInput | InrWalletWhereUniqueInput[]
    connect?: InrWalletWhereUniqueInput | InrWalletWhereUniqueInput[]
    update?: InrWalletUpdateWithWhereUniqueWithoutUserInput | InrWalletUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InrWalletUpdateManyWithWhereWithoutUserInput | InrWalletUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InrWalletScalarWhereInput | InrWalletScalarWhereInput[]
  }

  export type solWalletUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<solWalletCreateWithoutUserInput, solWalletUncheckedCreateWithoutUserInput> | solWalletCreateWithoutUserInput[] | solWalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: solWalletCreateOrConnectWithoutUserInput | solWalletCreateOrConnectWithoutUserInput[]
    upsert?: solWalletUpsertWithWhereUniqueWithoutUserInput | solWalletUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: solWalletCreateManyUserInputEnvelope
    set?: solWalletWhereUniqueInput | solWalletWhereUniqueInput[]
    disconnect?: solWalletWhereUniqueInput | solWalletWhereUniqueInput[]
    delete?: solWalletWhereUniqueInput | solWalletWhereUniqueInput[]
    connect?: solWalletWhereUniqueInput | solWalletWhereUniqueInput[]
    update?: solWalletUpdateWithWhereUniqueWithoutUserInput | solWalletUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: solWalletUpdateManyWithWhereWithoutUserInput | solWalletUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: solWalletScalarWhereInput | solWalletScalarWhereInput[]
  }

  export type InrWalletUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InrWalletCreateWithoutUserInput, InrWalletUncheckedCreateWithoutUserInput> | InrWalletCreateWithoutUserInput[] | InrWalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InrWalletCreateOrConnectWithoutUserInput | InrWalletCreateOrConnectWithoutUserInput[]
    upsert?: InrWalletUpsertWithWhereUniqueWithoutUserInput | InrWalletUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InrWalletCreateManyUserInputEnvelope
    set?: InrWalletWhereUniqueInput | InrWalletWhereUniqueInput[]
    disconnect?: InrWalletWhereUniqueInput | InrWalletWhereUniqueInput[]
    delete?: InrWalletWhereUniqueInput | InrWalletWhereUniqueInput[]
    connect?: InrWalletWhereUniqueInput | InrWalletWhereUniqueInput[]
    update?: InrWalletUpdateWithWhereUniqueWithoutUserInput | InrWalletUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InrWalletUpdateManyWithWhereWithoutUserInput | InrWalletUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InrWalletScalarWhereInput | InrWalletScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWalletInput = {
    create?: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
    connectOrCreate?: UserCreateOrConnectWithoutWalletInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWalletNestedInput = {
    create?: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
    connectOrCreate?: UserCreateOrConnectWithoutWalletInput
    upsert?: UserUpsertWithoutWalletInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWalletInput, UserUpdateWithoutWalletInput>, UserUncheckedUpdateWithoutWalletInput>
  }

  export type UserCreateNestedOneWithoutInrWalletInput = {
    create?: XOR<UserCreateWithoutInrWalletInput, UserUncheckedCreateWithoutInrWalletInput>
    connectOrCreate?: UserCreateOrConnectWithoutInrWalletInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutInrWalletNestedInput = {
    create?: XOR<UserCreateWithoutInrWalletInput, UserUncheckedCreateWithoutInrWalletInput>
    connectOrCreate?: UserCreateOrConnectWithoutInrWalletInput
    upsert?: UserUpsertWithoutInrWalletInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInrWalletInput, UserUpdateWithoutInrWalletInput>, UserUncheckedUpdateWithoutInrWalletInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type solWalletCreateWithoutUserInput = {
    id?: string
    publicKey: string
    privateKey: string
  }

  export type solWalletUncheckedCreateWithoutUserInput = {
    id?: string
    publicKey: string
    privateKey: string
  }

  export type solWalletCreateOrConnectWithoutUserInput = {
    where: solWalletWhereUniqueInput
    create: XOR<solWalletCreateWithoutUserInput, solWalletUncheckedCreateWithoutUserInput>
  }

  export type solWalletCreateManyUserInputEnvelope = {
    data: solWalletCreateManyUserInput | solWalletCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InrWalletCreateWithoutUserInput = {
    id?: string
    balance: number
  }

  export type InrWalletUncheckedCreateWithoutUserInput = {
    id?: string
    balance: number
  }

  export type InrWalletCreateOrConnectWithoutUserInput = {
    where: InrWalletWhereUniqueInput
    create: XOR<InrWalletCreateWithoutUserInput, InrWalletUncheckedCreateWithoutUserInput>
  }

  export type InrWalletCreateManyUserInputEnvelope = {
    data: InrWalletCreateManyUserInput | InrWalletCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type solWalletUpsertWithWhereUniqueWithoutUserInput = {
    where: solWalletWhereUniqueInput
    update: XOR<solWalletUpdateWithoutUserInput, solWalletUncheckedUpdateWithoutUserInput>
    create: XOR<solWalletCreateWithoutUserInput, solWalletUncheckedCreateWithoutUserInput>
  }

  export type solWalletUpdateWithWhereUniqueWithoutUserInput = {
    where: solWalletWhereUniqueInput
    data: XOR<solWalletUpdateWithoutUserInput, solWalletUncheckedUpdateWithoutUserInput>
  }

  export type solWalletUpdateManyWithWhereWithoutUserInput = {
    where: solWalletScalarWhereInput
    data: XOR<solWalletUpdateManyMutationInput, solWalletUncheckedUpdateManyWithoutUserInput>
  }

  export type solWalletScalarWhereInput = {
    AND?: solWalletScalarWhereInput | solWalletScalarWhereInput[]
    OR?: solWalletScalarWhereInput[]
    NOT?: solWalletScalarWhereInput | solWalletScalarWhereInput[]
    id?: StringFilter<"solWallet"> | string
    publicKey?: StringFilter<"solWallet"> | string
    privateKey?: StringFilter<"solWallet"> | string
    userId?: StringFilter<"solWallet"> | string
  }

  export type InrWalletUpsertWithWhereUniqueWithoutUserInput = {
    where: InrWalletWhereUniqueInput
    update: XOR<InrWalletUpdateWithoutUserInput, InrWalletUncheckedUpdateWithoutUserInput>
    create: XOR<InrWalletCreateWithoutUserInput, InrWalletUncheckedCreateWithoutUserInput>
  }

  export type InrWalletUpdateWithWhereUniqueWithoutUserInput = {
    where: InrWalletWhereUniqueInput
    data: XOR<InrWalletUpdateWithoutUserInput, InrWalletUncheckedUpdateWithoutUserInput>
  }

  export type InrWalletUpdateManyWithWhereWithoutUserInput = {
    where: InrWalletScalarWhereInput
    data: XOR<InrWalletUpdateManyMutationInput, InrWalletUncheckedUpdateManyWithoutUserInput>
  }

  export type InrWalletScalarWhereInput = {
    AND?: InrWalletScalarWhereInput | InrWalletScalarWhereInput[]
    OR?: InrWalletScalarWhereInput[]
    NOT?: InrWalletScalarWhereInput | InrWalletScalarWhereInput[]
    id?: StringFilter<"InrWallet"> | string
    balance?: IntFilter<"InrWallet"> | number
    userId?: StringFilter<"InrWallet"> | string
  }

  export type UserCreateWithoutWalletInput = {
    id?: string
    name: string
    email: string
    inrWallet?: InrWalletCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWalletInput = {
    id?: string
    name: string
    email: string
    inrWallet?: InrWalletUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWalletInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
  }

  export type UserUpsertWithoutWalletInput = {
    update: XOR<UserUpdateWithoutWalletInput, UserUncheckedUpdateWithoutWalletInput>
    create: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWalletInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWalletInput, UserUncheckedUpdateWithoutWalletInput>
  }

  export type UserUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    inrWallet?: InrWalletUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    inrWallet?: InrWalletUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutInrWalletInput = {
    id?: string
    name: string
    email: string
    wallet?: solWalletCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInrWalletInput = {
    id?: string
    name: string
    email: string
    wallet?: solWalletUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInrWalletInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInrWalletInput, UserUncheckedCreateWithoutInrWalletInput>
  }

  export type UserUpsertWithoutInrWalletInput = {
    update: XOR<UserUpdateWithoutInrWalletInput, UserUncheckedUpdateWithoutInrWalletInput>
    create: XOR<UserCreateWithoutInrWalletInput, UserUncheckedCreateWithoutInrWalletInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInrWalletInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInrWalletInput, UserUncheckedUpdateWithoutInrWalletInput>
  }

  export type UserUpdateWithoutInrWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    wallet?: solWalletUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInrWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    wallet?: solWalletUncheckedUpdateManyWithoutUserNestedInput
  }

  export type solWalletCreateManyUserInput = {
    id?: string
    publicKey: string
    privateKey: string
  }

  export type InrWalletCreateManyUserInput = {
    id?: string
    balance: number
  }

  export type solWalletUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
  }

  export type solWalletUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
  }

  export type solWalletUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
  }

  export type InrWalletUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
  }

  export type InrWalletUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
  }

  export type InrWalletUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
  }



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