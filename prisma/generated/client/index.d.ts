
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Wisata
 * 
 */
export type Wisata = $Result.DefaultSelection<Prisma.$WisataPayload>
/**
 * Model KategoriWisata
 * 
 */
export type KategoriWisata = $Result.DefaultSelection<Prisma.$KategoriWisataPayload>
/**
 * Model Daerah
 * 
 */
export type Daerah = $Result.DefaultSelection<Prisma.$DaerahPayload>
/**
 * Model Rekomendasi
 * 
 */
export type Rekomendasi = $Result.DefaultSelection<Prisma.$RekomendasiPayload>
/**
 * Model Ulasan
 * 
 */
export type Ulasan = $Result.DefaultSelection<Prisma.$UlasanPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  admin: 'admin',
  user: 'user'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs>;

  /**
   * `prisma.wisata`: Exposes CRUD operations for the **Wisata** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wisatas
    * const wisatas = await prisma.wisata.findMany()
    * ```
    */
  get wisata(): Prisma.WisataDelegate<ExtArgs>;

  /**
   * `prisma.kategoriWisata`: Exposes CRUD operations for the **KategoriWisata** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KategoriWisatas
    * const kategoriWisatas = await prisma.kategoriWisata.findMany()
    * ```
    */
  get kategoriWisata(): Prisma.KategoriWisataDelegate<ExtArgs>;

  /**
   * `prisma.daerah`: Exposes CRUD operations for the **Daerah** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Daerahs
    * const daerahs = await prisma.daerah.findMany()
    * ```
    */
  get daerah(): Prisma.DaerahDelegate<ExtArgs>;

  /**
   * `prisma.rekomendasi`: Exposes CRUD operations for the **Rekomendasi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rekomendasis
    * const rekomendasis = await prisma.rekomendasi.findMany()
    * ```
    */
  get rekomendasi(): Prisma.RekomendasiDelegate<ExtArgs>;

  /**
   * `prisma.ulasan`: Exposes CRUD operations for the **Ulasan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ulasans
    * const ulasans = await prisma.ulasan.findMany()
    * ```
    */
  get ulasan(): Prisma.UlasanDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.6.0
   * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
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
    User: 'User',
    Profile: 'Profile',
    Wisata: 'Wisata',
    KategoriWisata: 'KategoriWisata',
    Daerah: 'Daerah',
    Rekomendasi: 'Rekomendasi',
    Ulasan: 'Ulasan'
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
      modelProps: 'user' | 'profile' | 'wisata' | 'kategoriWisata' | 'daerah' | 'rekomendasi' | 'ulasan'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>,
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Wisata: {
        payload: Prisma.$WisataPayload<ExtArgs>
        fields: Prisma.WisataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WisataFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WisataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WisataFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WisataPayload>
          }
          findFirst: {
            args: Prisma.WisataFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WisataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WisataFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WisataPayload>
          }
          findMany: {
            args: Prisma.WisataFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WisataPayload>[]
          }
          create: {
            args: Prisma.WisataCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WisataPayload>
          }
          createMany: {
            args: Prisma.WisataCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.WisataDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WisataPayload>
          }
          update: {
            args: Prisma.WisataUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WisataPayload>
          }
          deleteMany: {
            args: Prisma.WisataDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.WisataUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.WisataUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WisataPayload>
          }
          aggregate: {
            args: Prisma.WisataAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWisata>
          }
          groupBy: {
            args: Prisma.WisataGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WisataGroupByOutputType>[]
          }
          count: {
            args: Prisma.WisataCountArgs<ExtArgs>,
            result: $Utils.Optional<WisataCountAggregateOutputType> | number
          }
        }
      }
      KategoriWisata: {
        payload: Prisma.$KategoriWisataPayload<ExtArgs>
        fields: Prisma.KategoriWisataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KategoriWisataFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KategoriWisataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KategoriWisataFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KategoriWisataPayload>
          }
          findFirst: {
            args: Prisma.KategoriWisataFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KategoriWisataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KategoriWisataFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KategoriWisataPayload>
          }
          findMany: {
            args: Prisma.KategoriWisataFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KategoriWisataPayload>[]
          }
          create: {
            args: Prisma.KategoriWisataCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KategoriWisataPayload>
          }
          createMany: {
            args: Prisma.KategoriWisataCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.KategoriWisataDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KategoriWisataPayload>
          }
          update: {
            args: Prisma.KategoriWisataUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KategoriWisataPayload>
          }
          deleteMany: {
            args: Prisma.KategoriWisataDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.KategoriWisataUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.KategoriWisataUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KategoriWisataPayload>
          }
          aggregate: {
            args: Prisma.KategoriWisataAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateKategoriWisata>
          }
          groupBy: {
            args: Prisma.KategoriWisataGroupByArgs<ExtArgs>,
            result: $Utils.Optional<KategoriWisataGroupByOutputType>[]
          }
          count: {
            args: Prisma.KategoriWisataCountArgs<ExtArgs>,
            result: $Utils.Optional<KategoriWisataCountAggregateOutputType> | number
          }
        }
      }
      Daerah: {
        payload: Prisma.$DaerahPayload<ExtArgs>
        fields: Prisma.DaerahFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DaerahFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DaerahPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DaerahFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DaerahPayload>
          }
          findFirst: {
            args: Prisma.DaerahFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DaerahPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DaerahFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DaerahPayload>
          }
          findMany: {
            args: Prisma.DaerahFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DaerahPayload>[]
          }
          create: {
            args: Prisma.DaerahCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DaerahPayload>
          }
          createMany: {
            args: Prisma.DaerahCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DaerahDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DaerahPayload>
          }
          update: {
            args: Prisma.DaerahUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DaerahPayload>
          }
          deleteMany: {
            args: Prisma.DaerahDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DaerahUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DaerahUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DaerahPayload>
          }
          aggregate: {
            args: Prisma.DaerahAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDaerah>
          }
          groupBy: {
            args: Prisma.DaerahGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DaerahGroupByOutputType>[]
          }
          count: {
            args: Prisma.DaerahCountArgs<ExtArgs>,
            result: $Utils.Optional<DaerahCountAggregateOutputType> | number
          }
        }
      }
      Rekomendasi: {
        payload: Prisma.$RekomendasiPayload<ExtArgs>
        fields: Prisma.RekomendasiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RekomendasiFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RekomendasiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RekomendasiFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RekomendasiPayload>
          }
          findFirst: {
            args: Prisma.RekomendasiFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RekomendasiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RekomendasiFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RekomendasiPayload>
          }
          findMany: {
            args: Prisma.RekomendasiFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RekomendasiPayload>[]
          }
          create: {
            args: Prisma.RekomendasiCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RekomendasiPayload>
          }
          createMany: {
            args: Prisma.RekomendasiCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RekomendasiDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RekomendasiPayload>
          }
          update: {
            args: Prisma.RekomendasiUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RekomendasiPayload>
          }
          deleteMany: {
            args: Prisma.RekomendasiDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RekomendasiUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RekomendasiUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RekomendasiPayload>
          }
          aggregate: {
            args: Prisma.RekomendasiAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRekomendasi>
          }
          groupBy: {
            args: Prisma.RekomendasiGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RekomendasiGroupByOutputType>[]
          }
          count: {
            args: Prisma.RekomendasiCountArgs<ExtArgs>,
            result: $Utils.Optional<RekomendasiCountAggregateOutputType> | number
          }
        }
      }
      Ulasan: {
        payload: Prisma.$UlasanPayload<ExtArgs>
        fields: Prisma.UlasanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UlasanFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UlasanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UlasanFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UlasanPayload>
          }
          findFirst: {
            args: Prisma.UlasanFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UlasanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UlasanFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UlasanPayload>
          }
          findMany: {
            args: Prisma.UlasanFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UlasanPayload>[]
          }
          create: {
            args: Prisma.UlasanCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UlasanPayload>
          }
          createMany: {
            args: Prisma.UlasanCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UlasanDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UlasanPayload>
          }
          update: {
            args: Prisma.UlasanUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UlasanPayload>
          }
          deleteMany: {
            args: Prisma.UlasanDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UlasanUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UlasanUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UlasanPayload>
          }
          aggregate: {
            args: Prisma.UlasanAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUlasan>
          }
          groupBy: {
            args: Prisma.UlasanGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UlasanGroupByOutputType>[]
          }
          count: {
            args: Prisma.UlasanCountArgs<ExtArgs>,
            result: $Utils.Optional<UlasanCountAggregateOutputType> | number
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    wisata: number
    rekomendasi: number
    ulasan: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wisata?: boolean | UserCountOutputTypeCountWisataArgs
    rekomendasi?: boolean | UserCountOutputTypeCountRekomendasiArgs
    ulasan?: boolean | UserCountOutputTypeCountUlasanArgs
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
  export type UserCountOutputTypeCountWisataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WisataWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRekomendasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RekomendasiWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUlasanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UlasanWhereInput
  }



  /**
   * Count Type WisataCountOutputType
   */

  export type WisataCountOutputType = {
    rekomendasi: number
    ulasan: number
  }

  export type WisataCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rekomendasi?: boolean | WisataCountOutputTypeCountRekomendasiArgs
    ulasan?: boolean | WisataCountOutputTypeCountUlasanArgs
  }

  // Custom InputTypes

  /**
   * WisataCountOutputType without action
   */
  export type WisataCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WisataCountOutputType
     */
    select?: WisataCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * WisataCountOutputType without action
   */
  export type WisataCountOutputTypeCountRekomendasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RekomendasiWhereInput
  }


  /**
   * WisataCountOutputType without action
   */
  export type WisataCountOutputTypeCountUlasanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UlasanWhereInput
  }



  /**
   * Count Type KategoriWisataCountOutputType
   */

  export type KategoriWisataCountOutputType = {
    Wisata: number
  }

  export type KategoriWisataCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Wisata?: boolean | KategoriWisataCountOutputTypeCountWisataArgs
  }

  // Custom InputTypes

  /**
   * KategoriWisataCountOutputType without action
   */
  export type KategoriWisataCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriWisataCountOutputType
     */
    select?: KategoriWisataCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * KategoriWisataCountOutputType without action
   */
  export type KategoriWisataCountOutputTypeCountWisataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WisataWhereInput
  }



  /**
   * Count Type DaerahCountOutputType
   */

  export type DaerahCountOutputType = {
    Wisata: number
  }

  export type DaerahCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Wisata?: boolean | DaerahCountOutputTypeCountWisataArgs
  }

  // Custom InputTypes

  /**
   * DaerahCountOutputType without action
   */
  export type DaerahCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DaerahCountOutputType
     */
    select?: DaerahCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DaerahCountOutputType without action
   */
  export type DaerahCountOutputTypeCountWisataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WisataWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    googleid: string | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    googleid: string | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    googleid: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    googleid?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    googleid?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    googleid?: true
    role?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string | null
    googleid: string | null
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    email?: boolean
    password?: boolean
    googleid?: boolean
    role?: boolean
    profile?: boolean | User$profileArgs<ExtArgs>
    wisata?: boolean | User$wisataArgs<ExtArgs>
    rekomendasi?: boolean | User$rekomendasiArgs<ExtArgs>
    ulasan?: boolean | User$ulasanArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    googleid?: boolean
    role?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | User$profileArgs<ExtArgs>
    wisata?: boolean | User$wisataArgs<ExtArgs>
    rekomendasi?: boolean | User$rekomendasiArgs<ExtArgs>
    ulasan?: boolean | User$ulasanArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs> | null
      wisata: Prisma.$WisataPayload<ExtArgs>[]
      rekomendasi: Prisma.$RekomendasiPayload<ExtArgs>[]
      ulasan: Prisma.$UlasanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string | null
      googleid: string | null
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    wisata<T extends User$wisataArgs<ExtArgs> = {}>(args?: Subset<T, User$wisataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WisataPayload<ExtArgs>, T, 'findMany'> | Null>;

    rekomendasi<T extends User$rekomendasiArgs<ExtArgs> = {}>(args?: Subset<T, User$rekomendasiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RekomendasiPayload<ExtArgs>, T, 'findMany'> | Null>;

    ulasan<T extends User$ulasanArgs<ExtArgs> = {}>(args?: Subset<T, User$ulasanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UlasanPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly googleid: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
  }


  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }


  /**
   * User.wisata
   */
  export type User$wisataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wisata
     */
    select?: WisataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WisataInclude<ExtArgs> | null
    where?: WisataWhereInput
    orderBy?: WisataOrderByWithRelationInput | WisataOrderByWithRelationInput[]
    cursor?: WisataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WisataScalarFieldEnum | WisataScalarFieldEnum[]
  }


  /**
   * User.rekomendasi
   */
  export type User$rekomendasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rekomendasi
     */
    select?: RekomendasiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RekomendasiInclude<ExtArgs> | null
    where?: RekomendasiWhereInput
    orderBy?: RekomendasiOrderByWithRelationInput | RekomendasiOrderByWithRelationInput[]
    cursor?: RekomendasiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RekomendasiScalarFieldEnum | RekomendasiScalarFieldEnum[]
  }


  /**
   * User.ulasan
   */
  export type User$ulasanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ulasan
     */
    select?: UlasanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UlasanInclude<ExtArgs> | null
    where?: UlasanWhereInput
    orderBy?: UlasanOrderByWithRelationInput | UlasanOrderByWithRelationInput[]
    cursor?: UlasanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UlasanScalarFieldEnum | UlasanScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: number | null
    userId: number | null
    nama: string | null
    jenis_kelamin: string | null
    alamat: string | null
    foto_profile: string | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    nama: string | null
    jenis_kelamin: string | null
    alamat: string | null
    foto_profile: string | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    userId: number
    nama: number
    jenis_kelamin: number
    alamat: number
    foto_profile: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfileSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    userId?: true
    nama?: true
    jenis_kelamin?: true
    alamat?: true
    foto_profile?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    nama?: true
    jenis_kelamin?: true
    alamat?: true
    foto_profile?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    userId?: true
    nama?: true
    jenis_kelamin?: true
    alamat?: true
    foto_profile?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: number
    userId: number
    nama: string | null
    jenis_kelamin: string | null
    alamat: string | null
    foto_profile: string | null
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    nama?: boolean
    jenis_kelamin?: boolean
    alamat?: boolean
    foto_profile?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    nama?: boolean
    jenis_kelamin?: boolean
    alamat?: boolean
    foto_profile?: boolean
  }

  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      nama: string | null
      jenis_kelamin: string | null
      alamat: string | null
      foto_profile: string | null
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }


  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProfileFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Profile that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProfileFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProfileFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
    **/
    create<T extends ProfileCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Profiles.
     *     @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     *     @example
     *     // Create many Profiles
     *     const profile = await prisma.profile.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProfileCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
    **/
    delete<T extends ProfileDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProfileUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProfileDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProfileUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
    **/
    upsert<T extends ProfileUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
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
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the Profile model
   */ 
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'Int'>
    readonly userId: FieldRef<"Profile", 'Int'>
    readonly nama: FieldRef<"Profile", 'String'>
    readonly jenis_kelamin: FieldRef<"Profile", 'String'>
    readonly alamat: FieldRef<"Profile", 'String'>
    readonly foto_profile: FieldRef<"Profile", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }


  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }


  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }


  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }


  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }


  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }


  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }


  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
  }


  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }


  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }


  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
  }


  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
  }



  /**
   * Model Wisata
   */

  export type AggregateWisata = {
    _count: WisataCountAggregateOutputType | null
    _avg: WisataAvgAggregateOutputType | null
    _sum: WisataSumAggregateOutputType | null
    _min: WisataMinAggregateOutputType | null
    _max: WisataMaxAggregateOutputType | null
  }

  export type WisataAvgAggregateOutputType = {
    id: number | null
    kategoriId: number | null
    daerahId: number | null
    userId: number | null
  }

  export type WisataSumAggregateOutputType = {
    id: number | null
    kategoriId: number | null
    daerahId: number | null
    userId: number | null
  }

  export type WisataMinAggregateOutputType = {
    id: number | null
    nama_wisata: string | null
    kategoriId: number | null
    daerahId: number | null
    alamat: string | null
    deskripsi: string | null
    jam_operasi: string | null
    harga_tiket: string | null
    tanggal: Date | null
    userId: number | null
    foto_wisata: string | null
  }

  export type WisataMaxAggregateOutputType = {
    id: number | null
    nama_wisata: string | null
    kategoriId: number | null
    daerahId: number | null
    alamat: string | null
    deskripsi: string | null
    jam_operasi: string | null
    harga_tiket: string | null
    tanggal: Date | null
    userId: number | null
    foto_wisata: string | null
  }

  export type WisataCountAggregateOutputType = {
    id: number
    nama_wisata: number
    kategoriId: number
    daerahId: number
    alamat: number
    deskripsi: number
    jam_operasi: number
    harga_tiket: number
    tanggal: number
    userId: number
    foto_wisata: number
    _all: number
  }


  export type WisataAvgAggregateInputType = {
    id?: true
    kategoriId?: true
    daerahId?: true
    userId?: true
  }

  export type WisataSumAggregateInputType = {
    id?: true
    kategoriId?: true
    daerahId?: true
    userId?: true
  }

  export type WisataMinAggregateInputType = {
    id?: true
    nama_wisata?: true
    kategoriId?: true
    daerahId?: true
    alamat?: true
    deskripsi?: true
    jam_operasi?: true
    harga_tiket?: true
    tanggal?: true
    userId?: true
    foto_wisata?: true
  }

  export type WisataMaxAggregateInputType = {
    id?: true
    nama_wisata?: true
    kategoriId?: true
    daerahId?: true
    alamat?: true
    deskripsi?: true
    jam_operasi?: true
    harga_tiket?: true
    tanggal?: true
    userId?: true
    foto_wisata?: true
  }

  export type WisataCountAggregateInputType = {
    id?: true
    nama_wisata?: true
    kategoriId?: true
    daerahId?: true
    alamat?: true
    deskripsi?: true
    jam_operasi?: true
    harga_tiket?: true
    tanggal?: true
    userId?: true
    foto_wisata?: true
    _all?: true
  }

  export type WisataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wisata to aggregate.
     */
    where?: WisataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wisatas to fetch.
     */
    orderBy?: WisataOrderByWithRelationInput | WisataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WisataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wisatas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wisatas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wisatas
    **/
    _count?: true | WisataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WisataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WisataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WisataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WisataMaxAggregateInputType
  }

  export type GetWisataAggregateType<T extends WisataAggregateArgs> = {
        [P in keyof T & keyof AggregateWisata]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWisata[P]>
      : GetScalarType<T[P], AggregateWisata[P]>
  }




  export type WisataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WisataWhereInput
    orderBy?: WisataOrderByWithAggregationInput | WisataOrderByWithAggregationInput[]
    by: WisataScalarFieldEnum[] | WisataScalarFieldEnum
    having?: WisataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WisataCountAggregateInputType | true
    _avg?: WisataAvgAggregateInputType
    _sum?: WisataSumAggregateInputType
    _min?: WisataMinAggregateInputType
    _max?: WisataMaxAggregateInputType
  }

  export type WisataGroupByOutputType = {
    id: number
    nama_wisata: string
    kategoriId: number
    daerahId: number
    alamat: string
    deskripsi: string
    jam_operasi: string
    harga_tiket: string
    tanggal: Date
    userId: number
    foto_wisata: string | null
    _count: WisataCountAggregateOutputType | null
    _avg: WisataAvgAggregateOutputType | null
    _sum: WisataSumAggregateOutputType | null
    _min: WisataMinAggregateOutputType | null
    _max: WisataMaxAggregateOutputType | null
  }

  type GetWisataGroupByPayload<T extends WisataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WisataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WisataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WisataGroupByOutputType[P]>
            : GetScalarType<T[P], WisataGroupByOutputType[P]>
        }
      >
    >


  export type WisataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama_wisata?: boolean
    kategoriId?: boolean
    daerahId?: boolean
    alamat?: boolean
    deskripsi?: boolean
    jam_operasi?: boolean
    harga_tiket?: boolean
    tanggal?: boolean
    userId?: boolean
    foto_wisata?: boolean
    rekomendasi?: boolean | Wisata$rekomendasiArgs<ExtArgs>
    ulasan?: boolean | Wisata$ulasanArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    kategori?: boolean | KategoriWisataDefaultArgs<ExtArgs>
    daerah?: boolean | DaerahDefaultArgs<ExtArgs>
    _count?: boolean | WisataCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wisata"]>

  export type WisataSelectScalar = {
    id?: boolean
    nama_wisata?: boolean
    kategoriId?: boolean
    daerahId?: boolean
    alamat?: boolean
    deskripsi?: boolean
    jam_operasi?: boolean
    harga_tiket?: boolean
    tanggal?: boolean
    userId?: boolean
    foto_wisata?: boolean
  }

  export type WisataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rekomendasi?: boolean | Wisata$rekomendasiArgs<ExtArgs>
    ulasan?: boolean | Wisata$ulasanArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    kategori?: boolean | KategoriWisataDefaultArgs<ExtArgs>
    daerah?: boolean | DaerahDefaultArgs<ExtArgs>
    _count?: boolean | WisataCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $WisataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Wisata"
    objects: {
      rekomendasi: Prisma.$RekomendasiPayload<ExtArgs>[]
      ulasan: Prisma.$UlasanPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
      kategori: Prisma.$KategoriWisataPayload<ExtArgs>
      daerah: Prisma.$DaerahPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama_wisata: string
      kategoriId: number
      daerahId: number
      alamat: string
      deskripsi: string
      jam_operasi: string
      harga_tiket: string
      tanggal: Date
      userId: number
      foto_wisata: string | null
    }, ExtArgs["result"]["wisata"]>
    composites: {}
  }


  type WisataGetPayload<S extends boolean | null | undefined | WisataDefaultArgs> = $Result.GetResult<Prisma.$WisataPayload, S>

  type WisataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WisataFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: WisataCountAggregateInputType | true
    }

  export interface WisataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Wisata'], meta: { name: 'Wisata' } }
    /**
     * Find zero or one Wisata that matches the filter.
     * @param {WisataFindUniqueArgs} args - Arguments to find a Wisata
     * @example
     * // Get one Wisata
     * const wisata = await prisma.wisata.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WisataFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, WisataFindUniqueArgs<ExtArgs>>
    ): Prisma__WisataClient<$Result.GetResult<Prisma.$WisataPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Wisata that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WisataFindUniqueOrThrowArgs} args - Arguments to find a Wisata
     * @example
     * // Get one Wisata
     * const wisata = await prisma.wisata.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WisataFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WisataFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WisataClient<$Result.GetResult<Prisma.$WisataPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Wisata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WisataFindFirstArgs} args - Arguments to find a Wisata
     * @example
     * // Get one Wisata
     * const wisata = await prisma.wisata.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WisataFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, WisataFindFirstArgs<ExtArgs>>
    ): Prisma__WisataClient<$Result.GetResult<Prisma.$WisataPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Wisata that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WisataFindFirstOrThrowArgs} args - Arguments to find a Wisata
     * @example
     * // Get one Wisata
     * const wisata = await prisma.wisata.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WisataFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WisataFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WisataClient<$Result.GetResult<Prisma.$WisataPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Wisatas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WisataFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wisatas
     * const wisatas = await prisma.wisata.findMany()
     * 
     * // Get first 10 Wisatas
     * const wisatas = await prisma.wisata.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wisataWithIdOnly = await prisma.wisata.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WisataFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WisataFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WisataPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Wisata.
     * @param {WisataCreateArgs} args - Arguments to create a Wisata.
     * @example
     * // Create one Wisata
     * const Wisata = await prisma.wisata.create({
     *   data: {
     *     // ... data to create a Wisata
     *   }
     * })
     * 
    **/
    create<T extends WisataCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WisataCreateArgs<ExtArgs>>
    ): Prisma__WisataClient<$Result.GetResult<Prisma.$WisataPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Wisatas.
     *     @param {WisataCreateManyArgs} args - Arguments to create many Wisatas.
     *     @example
     *     // Create many Wisatas
     *     const wisata = await prisma.wisata.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WisataCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WisataCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Wisata.
     * @param {WisataDeleteArgs} args - Arguments to delete one Wisata.
     * @example
     * // Delete one Wisata
     * const Wisata = await prisma.wisata.delete({
     *   where: {
     *     // ... filter to delete one Wisata
     *   }
     * })
     * 
    **/
    delete<T extends WisataDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WisataDeleteArgs<ExtArgs>>
    ): Prisma__WisataClient<$Result.GetResult<Prisma.$WisataPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Wisata.
     * @param {WisataUpdateArgs} args - Arguments to update one Wisata.
     * @example
     * // Update one Wisata
     * const wisata = await prisma.wisata.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WisataUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WisataUpdateArgs<ExtArgs>>
    ): Prisma__WisataClient<$Result.GetResult<Prisma.$WisataPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Wisatas.
     * @param {WisataDeleteManyArgs} args - Arguments to filter Wisatas to delete.
     * @example
     * // Delete a few Wisatas
     * const { count } = await prisma.wisata.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WisataDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WisataDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wisatas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WisataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wisatas
     * const wisata = await prisma.wisata.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WisataUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WisataUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Wisata.
     * @param {WisataUpsertArgs} args - Arguments to update or create a Wisata.
     * @example
     * // Update or create a Wisata
     * const wisata = await prisma.wisata.upsert({
     *   create: {
     *     // ... data to create a Wisata
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wisata we want to update
     *   }
     * })
    **/
    upsert<T extends WisataUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WisataUpsertArgs<ExtArgs>>
    ): Prisma__WisataClient<$Result.GetResult<Prisma.$WisataPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Wisatas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WisataCountArgs} args - Arguments to filter Wisatas to count.
     * @example
     * // Count the number of Wisatas
     * const count = await prisma.wisata.count({
     *   where: {
     *     // ... the filter for the Wisatas we want to count
     *   }
     * })
    **/
    count<T extends WisataCountArgs>(
      args?: Subset<T, WisataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WisataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wisata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WisataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WisataAggregateArgs>(args: Subset<T, WisataAggregateArgs>): Prisma.PrismaPromise<GetWisataAggregateType<T>>

    /**
     * Group by Wisata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WisataGroupByArgs} args - Group by arguments.
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
      T extends WisataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WisataGroupByArgs['orderBy'] }
        : { orderBy?: WisataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WisataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWisataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Wisata model
   */
  readonly fields: WisataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wisata.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WisataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    rekomendasi<T extends Wisata$rekomendasiArgs<ExtArgs> = {}>(args?: Subset<T, Wisata$rekomendasiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RekomendasiPayload<ExtArgs>, T, 'findMany'> | Null>;

    ulasan<T extends Wisata$ulasanArgs<ExtArgs> = {}>(args?: Subset<T, Wisata$ulasanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UlasanPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    kategori<T extends KategoriWisataDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KategoriWisataDefaultArgs<ExtArgs>>): Prisma__KategoriWisataClient<$Result.GetResult<Prisma.$KategoriWisataPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    daerah<T extends DaerahDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DaerahDefaultArgs<ExtArgs>>): Prisma__DaerahClient<$Result.GetResult<Prisma.$DaerahPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the Wisata model
   */ 
  interface WisataFieldRefs {
    readonly id: FieldRef<"Wisata", 'Int'>
    readonly nama_wisata: FieldRef<"Wisata", 'String'>
    readonly kategoriId: FieldRef<"Wisata", 'Int'>
    readonly daerahId: FieldRef<"Wisata", 'Int'>
    readonly alamat: FieldRef<"Wisata", 'String'>
    readonly deskripsi: FieldRef<"Wisata", 'String'>
    readonly jam_operasi: FieldRef<"Wisata", 'String'>
    readonly harga_tiket: FieldRef<"Wisata", 'String'>
    readonly tanggal: FieldRef<"Wisata", 'DateTime'>
    readonly userId: FieldRef<"Wisata", 'Int'>
    readonly foto_wisata: FieldRef<"Wisata", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Wisata findUnique
   */
  export type WisataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wisata
     */
    select?: WisataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WisataInclude<ExtArgs> | null
    /**
     * Filter, which Wisata to fetch.
     */
    where: WisataWhereUniqueInput
  }


  /**
   * Wisata findUniqueOrThrow
   */
  export type WisataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wisata
     */
    select?: WisataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WisataInclude<ExtArgs> | null
    /**
     * Filter, which Wisata to fetch.
     */
    where: WisataWhereUniqueInput
  }


  /**
   * Wisata findFirst
   */
  export type WisataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wisata
     */
    select?: WisataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WisataInclude<ExtArgs> | null
    /**
     * Filter, which Wisata to fetch.
     */
    where?: WisataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wisatas to fetch.
     */
    orderBy?: WisataOrderByWithRelationInput | WisataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wisatas.
     */
    cursor?: WisataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wisatas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wisatas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wisatas.
     */
    distinct?: WisataScalarFieldEnum | WisataScalarFieldEnum[]
  }


  /**
   * Wisata findFirstOrThrow
   */
  export type WisataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wisata
     */
    select?: WisataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WisataInclude<ExtArgs> | null
    /**
     * Filter, which Wisata to fetch.
     */
    where?: WisataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wisatas to fetch.
     */
    orderBy?: WisataOrderByWithRelationInput | WisataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wisatas.
     */
    cursor?: WisataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wisatas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wisatas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wisatas.
     */
    distinct?: WisataScalarFieldEnum | WisataScalarFieldEnum[]
  }


  /**
   * Wisata findMany
   */
  export type WisataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wisata
     */
    select?: WisataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WisataInclude<ExtArgs> | null
    /**
     * Filter, which Wisatas to fetch.
     */
    where?: WisataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wisatas to fetch.
     */
    orderBy?: WisataOrderByWithRelationInput | WisataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wisatas.
     */
    cursor?: WisataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wisatas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wisatas.
     */
    skip?: number
    distinct?: WisataScalarFieldEnum | WisataScalarFieldEnum[]
  }


  /**
   * Wisata create
   */
  export type WisataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wisata
     */
    select?: WisataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WisataInclude<ExtArgs> | null
    /**
     * The data needed to create a Wisata.
     */
    data: XOR<WisataCreateInput, WisataUncheckedCreateInput>
  }


  /**
   * Wisata createMany
   */
  export type WisataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Wisatas.
     */
    data: WisataCreateManyInput | WisataCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Wisata update
   */
  export type WisataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wisata
     */
    select?: WisataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WisataInclude<ExtArgs> | null
    /**
     * The data needed to update a Wisata.
     */
    data: XOR<WisataUpdateInput, WisataUncheckedUpdateInput>
    /**
     * Choose, which Wisata to update.
     */
    where: WisataWhereUniqueInput
  }


  /**
   * Wisata updateMany
   */
  export type WisataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Wisatas.
     */
    data: XOR<WisataUpdateManyMutationInput, WisataUncheckedUpdateManyInput>
    /**
     * Filter which Wisatas to update
     */
    where?: WisataWhereInput
  }


  /**
   * Wisata upsert
   */
  export type WisataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wisata
     */
    select?: WisataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WisataInclude<ExtArgs> | null
    /**
     * The filter to search for the Wisata to update in case it exists.
     */
    where: WisataWhereUniqueInput
    /**
     * In case the Wisata found by the `where` argument doesn't exist, create a new Wisata with this data.
     */
    create: XOR<WisataCreateInput, WisataUncheckedCreateInput>
    /**
     * In case the Wisata was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WisataUpdateInput, WisataUncheckedUpdateInput>
  }


  /**
   * Wisata delete
   */
  export type WisataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wisata
     */
    select?: WisataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WisataInclude<ExtArgs> | null
    /**
     * Filter which Wisata to delete.
     */
    where: WisataWhereUniqueInput
  }


  /**
   * Wisata deleteMany
   */
  export type WisataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wisatas to delete
     */
    where?: WisataWhereInput
  }


  /**
   * Wisata.rekomendasi
   */
  export type Wisata$rekomendasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rekomendasi
     */
    select?: RekomendasiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RekomendasiInclude<ExtArgs> | null
    where?: RekomendasiWhereInput
    orderBy?: RekomendasiOrderByWithRelationInput | RekomendasiOrderByWithRelationInput[]
    cursor?: RekomendasiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RekomendasiScalarFieldEnum | RekomendasiScalarFieldEnum[]
  }


  /**
   * Wisata.ulasan
   */
  export type Wisata$ulasanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ulasan
     */
    select?: UlasanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UlasanInclude<ExtArgs> | null
    where?: UlasanWhereInput
    orderBy?: UlasanOrderByWithRelationInput | UlasanOrderByWithRelationInput[]
    cursor?: UlasanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UlasanScalarFieldEnum | UlasanScalarFieldEnum[]
  }


  /**
   * Wisata without action
   */
  export type WisataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wisata
     */
    select?: WisataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WisataInclude<ExtArgs> | null
  }



  /**
   * Model KategoriWisata
   */

  export type AggregateKategoriWisata = {
    _count: KategoriWisataCountAggregateOutputType | null
    _avg: KategoriWisataAvgAggregateOutputType | null
    _sum: KategoriWisataSumAggregateOutputType | null
    _min: KategoriWisataMinAggregateOutputType | null
    _max: KategoriWisataMaxAggregateOutputType | null
  }

  export type KategoriWisataAvgAggregateOutputType = {
    id: number | null
  }

  export type KategoriWisataSumAggregateOutputType = {
    id: number | null
  }

  export type KategoriWisataMinAggregateOutputType = {
    id: number | null
    nama_kategori: string | null
  }

  export type KategoriWisataMaxAggregateOutputType = {
    id: number | null
    nama_kategori: string | null
  }

  export type KategoriWisataCountAggregateOutputType = {
    id: number
    nama_kategori: number
    _all: number
  }


  export type KategoriWisataAvgAggregateInputType = {
    id?: true
  }

  export type KategoriWisataSumAggregateInputType = {
    id?: true
  }

  export type KategoriWisataMinAggregateInputType = {
    id?: true
    nama_kategori?: true
  }

  export type KategoriWisataMaxAggregateInputType = {
    id?: true
    nama_kategori?: true
  }

  export type KategoriWisataCountAggregateInputType = {
    id?: true
    nama_kategori?: true
    _all?: true
  }

  export type KategoriWisataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KategoriWisata to aggregate.
     */
    where?: KategoriWisataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KategoriWisatas to fetch.
     */
    orderBy?: KategoriWisataOrderByWithRelationInput | KategoriWisataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KategoriWisataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KategoriWisatas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KategoriWisatas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KategoriWisatas
    **/
    _count?: true | KategoriWisataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KategoriWisataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KategoriWisataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KategoriWisataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KategoriWisataMaxAggregateInputType
  }

  export type GetKategoriWisataAggregateType<T extends KategoriWisataAggregateArgs> = {
        [P in keyof T & keyof AggregateKategoriWisata]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKategoriWisata[P]>
      : GetScalarType<T[P], AggregateKategoriWisata[P]>
  }




  export type KategoriWisataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KategoriWisataWhereInput
    orderBy?: KategoriWisataOrderByWithAggregationInput | KategoriWisataOrderByWithAggregationInput[]
    by: KategoriWisataScalarFieldEnum[] | KategoriWisataScalarFieldEnum
    having?: KategoriWisataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KategoriWisataCountAggregateInputType | true
    _avg?: KategoriWisataAvgAggregateInputType
    _sum?: KategoriWisataSumAggregateInputType
    _min?: KategoriWisataMinAggregateInputType
    _max?: KategoriWisataMaxAggregateInputType
  }

  export type KategoriWisataGroupByOutputType = {
    id: number
    nama_kategori: string
    _count: KategoriWisataCountAggregateOutputType | null
    _avg: KategoriWisataAvgAggregateOutputType | null
    _sum: KategoriWisataSumAggregateOutputType | null
    _min: KategoriWisataMinAggregateOutputType | null
    _max: KategoriWisataMaxAggregateOutputType | null
  }

  type GetKategoriWisataGroupByPayload<T extends KategoriWisataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KategoriWisataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KategoriWisataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KategoriWisataGroupByOutputType[P]>
            : GetScalarType<T[P], KategoriWisataGroupByOutputType[P]>
        }
      >
    >


  export type KategoriWisataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama_kategori?: boolean
    Wisata?: boolean | KategoriWisata$WisataArgs<ExtArgs>
    _count?: boolean | KategoriWisataCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kategoriWisata"]>

  export type KategoriWisataSelectScalar = {
    id?: boolean
    nama_kategori?: boolean
  }

  export type KategoriWisataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Wisata?: boolean | KategoriWisata$WisataArgs<ExtArgs>
    _count?: boolean | KategoriWisataCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $KategoriWisataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KategoriWisata"
    objects: {
      Wisata: Prisma.$WisataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama_kategori: string
    }, ExtArgs["result"]["kategoriWisata"]>
    composites: {}
  }


  type KategoriWisataGetPayload<S extends boolean | null | undefined | KategoriWisataDefaultArgs> = $Result.GetResult<Prisma.$KategoriWisataPayload, S>

  type KategoriWisataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<KategoriWisataFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: KategoriWisataCountAggregateInputType | true
    }

  export interface KategoriWisataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KategoriWisata'], meta: { name: 'KategoriWisata' } }
    /**
     * Find zero or one KategoriWisata that matches the filter.
     * @param {KategoriWisataFindUniqueArgs} args - Arguments to find a KategoriWisata
     * @example
     * // Get one KategoriWisata
     * const kategoriWisata = await prisma.kategoriWisata.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends KategoriWisataFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, KategoriWisataFindUniqueArgs<ExtArgs>>
    ): Prisma__KategoriWisataClient<$Result.GetResult<Prisma.$KategoriWisataPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one KategoriWisata that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {KategoriWisataFindUniqueOrThrowArgs} args - Arguments to find a KategoriWisata
     * @example
     * // Get one KategoriWisata
     * const kategoriWisata = await prisma.kategoriWisata.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends KategoriWisataFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, KategoriWisataFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__KategoriWisataClient<$Result.GetResult<Prisma.$KategoriWisataPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first KategoriWisata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriWisataFindFirstArgs} args - Arguments to find a KategoriWisata
     * @example
     * // Get one KategoriWisata
     * const kategoriWisata = await prisma.kategoriWisata.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends KategoriWisataFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, KategoriWisataFindFirstArgs<ExtArgs>>
    ): Prisma__KategoriWisataClient<$Result.GetResult<Prisma.$KategoriWisataPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first KategoriWisata that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriWisataFindFirstOrThrowArgs} args - Arguments to find a KategoriWisata
     * @example
     * // Get one KategoriWisata
     * const kategoriWisata = await prisma.kategoriWisata.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends KategoriWisataFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, KategoriWisataFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__KategoriWisataClient<$Result.GetResult<Prisma.$KategoriWisataPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more KategoriWisatas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriWisataFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KategoriWisatas
     * const kategoriWisatas = await prisma.kategoriWisata.findMany()
     * 
     * // Get first 10 KategoriWisatas
     * const kategoriWisatas = await prisma.kategoriWisata.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kategoriWisataWithIdOnly = await prisma.kategoriWisata.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends KategoriWisataFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, KategoriWisataFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KategoriWisataPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a KategoriWisata.
     * @param {KategoriWisataCreateArgs} args - Arguments to create a KategoriWisata.
     * @example
     * // Create one KategoriWisata
     * const KategoriWisata = await prisma.kategoriWisata.create({
     *   data: {
     *     // ... data to create a KategoriWisata
     *   }
     * })
     * 
    **/
    create<T extends KategoriWisataCreateArgs<ExtArgs>>(
      args: SelectSubset<T, KategoriWisataCreateArgs<ExtArgs>>
    ): Prisma__KategoriWisataClient<$Result.GetResult<Prisma.$KategoriWisataPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many KategoriWisatas.
     *     @param {KategoriWisataCreateManyArgs} args - Arguments to create many KategoriWisatas.
     *     @example
     *     // Create many KategoriWisatas
     *     const kategoriWisata = await prisma.kategoriWisata.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends KategoriWisataCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, KategoriWisataCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a KategoriWisata.
     * @param {KategoriWisataDeleteArgs} args - Arguments to delete one KategoriWisata.
     * @example
     * // Delete one KategoriWisata
     * const KategoriWisata = await prisma.kategoriWisata.delete({
     *   where: {
     *     // ... filter to delete one KategoriWisata
     *   }
     * })
     * 
    **/
    delete<T extends KategoriWisataDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, KategoriWisataDeleteArgs<ExtArgs>>
    ): Prisma__KategoriWisataClient<$Result.GetResult<Prisma.$KategoriWisataPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one KategoriWisata.
     * @param {KategoriWisataUpdateArgs} args - Arguments to update one KategoriWisata.
     * @example
     * // Update one KategoriWisata
     * const kategoriWisata = await prisma.kategoriWisata.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends KategoriWisataUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, KategoriWisataUpdateArgs<ExtArgs>>
    ): Prisma__KategoriWisataClient<$Result.GetResult<Prisma.$KategoriWisataPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more KategoriWisatas.
     * @param {KategoriWisataDeleteManyArgs} args - Arguments to filter KategoriWisatas to delete.
     * @example
     * // Delete a few KategoriWisatas
     * const { count } = await prisma.kategoriWisata.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends KategoriWisataDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, KategoriWisataDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KategoriWisatas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriWisataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KategoriWisatas
     * const kategoriWisata = await prisma.kategoriWisata.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends KategoriWisataUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, KategoriWisataUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one KategoriWisata.
     * @param {KategoriWisataUpsertArgs} args - Arguments to update or create a KategoriWisata.
     * @example
     * // Update or create a KategoriWisata
     * const kategoriWisata = await prisma.kategoriWisata.upsert({
     *   create: {
     *     // ... data to create a KategoriWisata
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KategoriWisata we want to update
     *   }
     * })
    **/
    upsert<T extends KategoriWisataUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, KategoriWisataUpsertArgs<ExtArgs>>
    ): Prisma__KategoriWisataClient<$Result.GetResult<Prisma.$KategoriWisataPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of KategoriWisatas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriWisataCountArgs} args - Arguments to filter KategoriWisatas to count.
     * @example
     * // Count the number of KategoriWisatas
     * const count = await prisma.kategoriWisata.count({
     *   where: {
     *     // ... the filter for the KategoriWisatas we want to count
     *   }
     * })
    **/
    count<T extends KategoriWisataCountArgs>(
      args?: Subset<T, KategoriWisataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KategoriWisataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KategoriWisata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriWisataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KategoriWisataAggregateArgs>(args: Subset<T, KategoriWisataAggregateArgs>): Prisma.PrismaPromise<GetKategoriWisataAggregateType<T>>

    /**
     * Group by KategoriWisata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriWisataGroupByArgs} args - Group by arguments.
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
      T extends KategoriWisataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KategoriWisataGroupByArgs['orderBy'] }
        : { orderBy?: KategoriWisataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KategoriWisataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKategoriWisataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KategoriWisata model
   */
  readonly fields: KategoriWisataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KategoriWisata.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KategoriWisataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Wisata<T extends KategoriWisata$WisataArgs<ExtArgs> = {}>(args?: Subset<T, KategoriWisata$WisataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WisataPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the KategoriWisata model
   */ 
  interface KategoriWisataFieldRefs {
    readonly id: FieldRef<"KategoriWisata", 'Int'>
    readonly nama_kategori: FieldRef<"KategoriWisata", 'String'>
  }
    

  // Custom InputTypes

  /**
   * KategoriWisata findUnique
   */
  export type KategoriWisataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriWisata
     */
    select?: KategoriWisataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KategoriWisataInclude<ExtArgs> | null
    /**
     * Filter, which KategoriWisata to fetch.
     */
    where: KategoriWisataWhereUniqueInput
  }


  /**
   * KategoriWisata findUniqueOrThrow
   */
  export type KategoriWisataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriWisata
     */
    select?: KategoriWisataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KategoriWisataInclude<ExtArgs> | null
    /**
     * Filter, which KategoriWisata to fetch.
     */
    where: KategoriWisataWhereUniqueInput
  }


  /**
   * KategoriWisata findFirst
   */
  export type KategoriWisataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriWisata
     */
    select?: KategoriWisataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KategoriWisataInclude<ExtArgs> | null
    /**
     * Filter, which KategoriWisata to fetch.
     */
    where?: KategoriWisataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KategoriWisatas to fetch.
     */
    orderBy?: KategoriWisataOrderByWithRelationInput | KategoriWisataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KategoriWisatas.
     */
    cursor?: KategoriWisataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KategoriWisatas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KategoriWisatas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KategoriWisatas.
     */
    distinct?: KategoriWisataScalarFieldEnum | KategoriWisataScalarFieldEnum[]
  }


  /**
   * KategoriWisata findFirstOrThrow
   */
  export type KategoriWisataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriWisata
     */
    select?: KategoriWisataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KategoriWisataInclude<ExtArgs> | null
    /**
     * Filter, which KategoriWisata to fetch.
     */
    where?: KategoriWisataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KategoriWisatas to fetch.
     */
    orderBy?: KategoriWisataOrderByWithRelationInput | KategoriWisataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KategoriWisatas.
     */
    cursor?: KategoriWisataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KategoriWisatas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KategoriWisatas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KategoriWisatas.
     */
    distinct?: KategoriWisataScalarFieldEnum | KategoriWisataScalarFieldEnum[]
  }


  /**
   * KategoriWisata findMany
   */
  export type KategoriWisataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriWisata
     */
    select?: KategoriWisataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KategoriWisataInclude<ExtArgs> | null
    /**
     * Filter, which KategoriWisatas to fetch.
     */
    where?: KategoriWisataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KategoriWisatas to fetch.
     */
    orderBy?: KategoriWisataOrderByWithRelationInput | KategoriWisataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KategoriWisatas.
     */
    cursor?: KategoriWisataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KategoriWisatas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KategoriWisatas.
     */
    skip?: number
    distinct?: KategoriWisataScalarFieldEnum | KategoriWisataScalarFieldEnum[]
  }


  /**
   * KategoriWisata create
   */
  export type KategoriWisataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriWisata
     */
    select?: KategoriWisataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KategoriWisataInclude<ExtArgs> | null
    /**
     * The data needed to create a KategoriWisata.
     */
    data: XOR<KategoriWisataCreateInput, KategoriWisataUncheckedCreateInput>
  }


  /**
   * KategoriWisata createMany
   */
  export type KategoriWisataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KategoriWisatas.
     */
    data: KategoriWisataCreateManyInput | KategoriWisataCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * KategoriWisata update
   */
  export type KategoriWisataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriWisata
     */
    select?: KategoriWisataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KategoriWisataInclude<ExtArgs> | null
    /**
     * The data needed to update a KategoriWisata.
     */
    data: XOR<KategoriWisataUpdateInput, KategoriWisataUncheckedUpdateInput>
    /**
     * Choose, which KategoriWisata to update.
     */
    where: KategoriWisataWhereUniqueInput
  }


  /**
   * KategoriWisata updateMany
   */
  export type KategoriWisataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KategoriWisatas.
     */
    data: XOR<KategoriWisataUpdateManyMutationInput, KategoriWisataUncheckedUpdateManyInput>
    /**
     * Filter which KategoriWisatas to update
     */
    where?: KategoriWisataWhereInput
  }


  /**
   * KategoriWisata upsert
   */
  export type KategoriWisataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriWisata
     */
    select?: KategoriWisataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KategoriWisataInclude<ExtArgs> | null
    /**
     * The filter to search for the KategoriWisata to update in case it exists.
     */
    where: KategoriWisataWhereUniqueInput
    /**
     * In case the KategoriWisata found by the `where` argument doesn't exist, create a new KategoriWisata with this data.
     */
    create: XOR<KategoriWisataCreateInput, KategoriWisataUncheckedCreateInput>
    /**
     * In case the KategoriWisata was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KategoriWisataUpdateInput, KategoriWisataUncheckedUpdateInput>
  }


  /**
   * KategoriWisata delete
   */
  export type KategoriWisataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriWisata
     */
    select?: KategoriWisataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KategoriWisataInclude<ExtArgs> | null
    /**
     * Filter which KategoriWisata to delete.
     */
    where: KategoriWisataWhereUniqueInput
  }


  /**
   * KategoriWisata deleteMany
   */
  export type KategoriWisataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KategoriWisatas to delete
     */
    where?: KategoriWisataWhereInput
  }


  /**
   * KategoriWisata.Wisata
   */
  export type KategoriWisata$WisataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wisata
     */
    select?: WisataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WisataInclude<ExtArgs> | null
    where?: WisataWhereInput
    orderBy?: WisataOrderByWithRelationInput | WisataOrderByWithRelationInput[]
    cursor?: WisataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WisataScalarFieldEnum | WisataScalarFieldEnum[]
  }


  /**
   * KategoriWisata without action
   */
  export type KategoriWisataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriWisata
     */
    select?: KategoriWisataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KategoriWisataInclude<ExtArgs> | null
  }



  /**
   * Model Daerah
   */

  export type AggregateDaerah = {
    _count: DaerahCountAggregateOutputType | null
    _avg: DaerahAvgAggregateOutputType | null
    _sum: DaerahSumAggregateOutputType | null
    _min: DaerahMinAggregateOutputType | null
    _max: DaerahMaxAggregateOutputType | null
  }

  export type DaerahAvgAggregateOutputType = {
    id: number | null
  }

  export type DaerahSumAggregateOutputType = {
    id: number | null
  }

  export type DaerahMinAggregateOutputType = {
    id: number | null
    nama_daerah: string | null
  }

  export type DaerahMaxAggregateOutputType = {
    id: number | null
    nama_daerah: string | null
  }

  export type DaerahCountAggregateOutputType = {
    id: number
    nama_daerah: number
    _all: number
  }


  export type DaerahAvgAggregateInputType = {
    id?: true
  }

  export type DaerahSumAggregateInputType = {
    id?: true
  }

  export type DaerahMinAggregateInputType = {
    id?: true
    nama_daerah?: true
  }

  export type DaerahMaxAggregateInputType = {
    id?: true
    nama_daerah?: true
  }

  export type DaerahCountAggregateInputType = {
    id?: true
    nama_daerah?: true
    _all?: true
  }

  export type DaerahAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Daerah to aggregate.
     */
    where?: DaerahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Daerahs to fetch.
     */
    orderBy?: DaerahOrderByWithRelationInput | DaerahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DaerahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Daerahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Daerahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Daerahs
    **/
    _count?: true | DaerahCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DaerahAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DaerahSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DaerahMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DaerahMaxAggregateInputType
  }

  export type GetDaerahAggregateType<T extends DaerahAggregateArgs> = {
        [P in keyof T & keyof AggregateDaerah]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDaerah[P]>
      : GetScalarType<T[P], AggregateDaerah[P]>
  }




  export type DaerahGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DaerahWhereInput
    orderBy?: DaerahOrderByWithAggregationInput | DaerahOrderByWithAggregationInput[]
    by: DaerahScalarFieldEnum[] | DaerahScalarFieldEnum
    having?: DaerahScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DaerahCountAggregateInputType | true
    _avg?: DaerahAvgAggregateInputType
    _sum?: DaerahSumAggregateInputType
    _min?: DaerahMinAggregateInputType
    _max?: DaerahMaxAggregateInputType
  }

  export type DaerahGroupByOutputType = {
    id: number
    nama_daerah: string
    _count: DaerahCountAggregateOutputType | null
    _avg: DaerahAvgAggregateOutputType | null
    _sum: DaerahSumAggregateOutputType | null
    _min: DaerahMinAggregateOutputType | null
    _max: DaerahMaxAggregateOutputType | null
  }

  type GetDaerahGroupByPayload<T extends DaerahGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DaerahGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DaerahGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DaerahGroupByOutputType[P]>
            : GetScalarType<T[P], DaerahGroupByOutputType[P]>
        }
      >
    >


  export type DaerahSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama_daerah?: boolean
    Wisata?: boolean | Daerah$WisataArgs<ExtArgs>
    _count?: boolean | DaerahCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["daerah"]>

  export type DaerahSelectScalar = {
    id?: boolean
    nama_daerah?: boolean
  }

  export type DaerahInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Wisata?: boolean | Daerah$WisataArgs<ExtArgs>
    _count?: boolean | DaerahCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $DaerahPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Daerah"
    objects: {
      Wisata: Prisma.$WisataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama_daerah: string
    }, ExtArgs["result"]["daerah"]>
    composites: {}
  }


  type DaerahGetPayload<S extends boolean | null | undefined | DaerahDefaultArgs> = $Result.GetResult<Prisma.$DaerahPayload, S>

  type DaerahCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DaerahFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: DaerahCountAggregateInputType | true
    }

  export interface DaerahDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Daerah'], meta: { name: 'Daerah' } }
    /**
     * Find zero or one Daerah that matches the filter.
     * @param {DaerahFindUniqueArgs} args - Arguments to find a Daerah
     * @example
     * // Get one Daerah
     * const daerah = await prisma.daerah.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DaerahFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DaerahFindUniqueArgs<ExtArgs>>
    ): Prisma__DaerahClient<$Result.GetResult<Prisma.$DaerahPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Daerah that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DaerahFindUniqueOrThrowArgs} args - Arguments to find a Daerah
     * @example
     * // Get one Daerah
     * const daerah = await prisma.daerah.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DaerahFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DaerahFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DaerahClient<$Result.GetResult<Prisma.$DaerahPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Daerah that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaerahFindFirstArgs} args - Arguments to find a Daerah
     * @example
     * // Get one Daerah
     * const daerah = await prisma.daerah.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DaerahFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DaerahFindFirstArgs<ExtArgs>>
    ): Prisma__DaerahClient<$Result.GetResult<Prisma.$DaerahPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Daerah that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaerahFindFirstOrThrowArgs} args - Arguments to find a Daerah
     * @example
     * // Get one Daerah
     * const daerah = await prisma.daerah.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DaerahFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DaerahFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DaerahClient<$Result.GetResult<Prisma.$DaerahPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Daerahs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaerahFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Daerahs
     * const daerahs = await prisma.daerah.findMany()
     * 
     * // Get first 10 Daerahs
     * const daerahs = await prisma.daerah.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const daerahWithIdOnly = await prisma.daerah.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DaerahFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DaerahFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DaerahPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Daerah.
     * @param {DaerahCreateArgs} args - Arguments to create a Daerah.
     * @example
     * // Create one Daerah
     * const Daerah = await prisma.daerah.create({
     *   data: {
     *     // ... data to create a Daerah
     *   }
     * })
     * 
    **/
    create<T extends DaerahCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DaerahCreateArgs<ExtArgs>>
    ): Prisma__DaerahClient<$Result.GetResult<Prisma.$DaerahPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Daerahs.
     *     @param {DaerahCreateManyArgs} args - Arguments to create many Daerahs.
     *     @example
     *     // Create many Daerahs
     *     const daerah = await prisma.daerah.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DaerahCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DaerahCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Daerah.
     * @param {DaerahDeleteArgs} args - Arguments to delete one Daerah.
     * @example
     * // Delete one Daerah
     * const Daerah = await prisma.daerah.delete({
     *   where: {
     *     // ... filter to delete one Daerah
     *   }
     * })
     * 
    **/
    delete<T extends DaerahDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DaerahDeleteArgs<ExtArgs>>
    ): Prisma__DaerahClient<$Result.GetResult<Prisma.$DaerahPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Daerah.
     * @param {DaerahUpdateArgs} args - Arguments to update one Daerah.
     * @example
     * // Update one Daerah
     * const daerah = await prisma.daerah.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DaerahUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DaerahUpdateArgs<ExtArgs>>
    ): Prisma__DaerahClient<$Result.GetResult<Prisma.$DaerahPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Daerahs.
     * @param {DaerahDeleteManyArgs} args - Arguments to filter Daerahs to delete.
     * @example
     * // Delete a few Daerahs
     * const { count } = await prisma.daerah.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DaerahDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DaerahDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Daerahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaerahUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Daerahs
     * const daerah = await prisma.daerah.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DaerahUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DaerahUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Daerah.
     * @param {DaerahUpsertArgs} args - Arguments to update or create a Daerah.
     * @example
     * // Update or create a Daerah
     * const daerah = await prisma.daerah.upsert({
     *   create: {
     *     // ... data to create a Daerah
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Daerah we want to update
     *   }
     * })
    **/
    upsert<T extends DaerahUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DaerahUpsertArgs<ExtArgs>>
    ): Prisma__DaerahClient<$Result.GetResult<Prisma.$DaerahPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Daerahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaerahCountArgs} args - Arguments to filter Daerahs to count.
     * @example
     * // Count the number of Daerahs
     * const count = await prisma.daerah.count({
     *   where: {
     *     // ... the filter for the Daerahs we want to count
     *   }
     * })
    **/
    count<T extends DaerahCountArgs>(
      args?: Subset<T, DaerahCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DaerahCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Daerah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaerahAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DaerahAggregateArgs>(args: Subset<T, DaerahAggregateArgs>): Prisma.PrismaPromise<GetDaerahAggregateType<T>>

    /**
     * Group by Daerah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaerahGroupByArgs} args - Group by arguments.
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
      T extends DaerahGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DaerahGroupByArgs['orderBy'] }
        : { orderBy?: DaerahGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DaerahGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDaerahGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Daerah model
   */
  readonly fields: DaerahFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Daerah.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DaerahClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Wisata<T extends Daerah$WisataArgs<ExtArgs> = {}>(args?: Subset<T, Daerah$WisataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WisataPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Daerah model
   */ 
  interface DaerahFieldRefs {
    readonly id: FieldRef<"Daerah", 'Int'>
    readonly nama_daerah: FieldRef<"Daerah", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Daerah findUnique
   */
  export type DaerahFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Daerah
     */
    select?: DaerahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaerahInclude<ExtArgs> | null
    /**
     * Filter, which Daerah to fetch.
     */
    where: DaerahWhereUniqueInput
  }


  /**
   * Daerah findUniqueOrThrow
   */
  export type DaerahFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Daerah
     */
    select?: DaerahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaerahInclude<ExtArgs> | null
    /**
     * Filter, which Daerah to fetch.
     */
    where: DaerahWhereUniqueInput
  }


  /**
   * Daerah findFirst
   */
  export type DaerahFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Daerah
     */
    select?: DaerahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaerahInclude<ExtArgs> | null
    /**
     * Filter, which Daerah to fetch.
     */
    where?: DaerahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Daerahs to fetch.
     */
    orderBy?: DaerahOrderByWithRelationInput | DaerahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Daerahs.
     */
    cursor?: DaerahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Daerahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Daerahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Daerahs.
     */
    distinct?: DaerahScalarFieldEnum | DaerahScalarFieldEnum[]
  }


  /**
   * Daerah findFirstOrThrow
   */
  export type DaerahFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Daerah
     */
    select?: DaerahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaerahInclude<ExtArgs> | null
    /**
     * Filter, which Daerah to fetch.
     */
    where?: DaerahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Daerahs to fetch.
     */
    orderBy?: DaerahOrderByWithRelationInput | DaerahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Daerahs.
     */
    cursor?: DaerahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Daerahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Daerahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Daerahs.
     */
    distinct?: DaerahScalarFieldEnum | DaerahScalarFieldEnum[]
  }


  /**
   * Daerah findMany
   */
  export type DaerahFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Daerah
     */
    select?: DaerahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaerahInclude<ExtArgs> | null
    /**
     * Filter, which Daerahs to fetch.
     */
    where?: DaerahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Daerahs to fetch.
     */
    orderBy?: DaerahOrderByWithRelationInput | DaerahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Daerahs.
     */
    cursor?: DaerahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Daerahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Daerahs.
     */
    skip?: number
    distinct?: DaerahScalarFieldEnum | DaerahScalarFieldEnum[]
  }


  /**
   * Daerah create
   */
  export type DaerahCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Daerah
     */
    select?: DaerahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaerahInclude<ExtArgs> | null
    /**
     * The data needed to create a Daerah.
     */
    data: XOR<DaerahCreateInput, DaerahUncheckedCreateInput>
  }


  /**
   * Daerah createMany
   */
  export type DaerahCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Daerahs.
     */
    data: DaerahCreateManyInput | DaerahCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Daerah update
   */
  export type DaerahUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Daerah
     */
    select?: DaerahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaerahInclude<ExtArgs> | null
    /**
     * The data needed to update a Daerah.
     */
    data: XOR<DaerahUpdateInput, DaerahUncheckedUpdateInput>
    /**
     * Choose, which Daerah to update.
     */
    where: DaerahWhereUniqueInput
  }


  /**
   * Daerah updateMany
   */
  export type DaerahUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Daerahs.
     */
    data: XOR<DaerahUpdateManyMutationInput, DaerahUncheckedUpdateManyInput>
    /**
     * Filter which Daerahs to update
     */
    where?: DaerahWhereInput
  }


  /**
   * Daerah upsert
   */
  export type DaerahUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Daerah
     */
    select?: DaerahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaerahInclude<ExtArgs> | null
    /**
     * The filter to search for the Daerah to update in case it exists.
     */
    where: DaerahWhereUniqueInput
    /**
     * In case the Daerah found by the `where` argument doesn't exist, create a new Daerah with this data.
     */
    create: XOR<DaerahCreateInput, DaerahUncheckedCreateInput>
    /**
     * In case the Daerah was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DaerahUpdateInput, DaerahUncheckedUpdateInput>
  }


  /**
   * Daerah delete
   */
  export type DaerahDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Daerah
     */
    select?: DaerahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaerahInclude<ExtArgs> | null
    /**
     * Filter which Daerah to delete.
     */
    where: DaerahWhereUniqueInput
  }


  /**
   * Daerah deleteMany
   */
  export type DaerahDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Daerahs to delete
     */
    where?: DaerahWhereInput
  }


  /**
   * Daerah.Wisata
   */
  export type Daerah$WisataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wisata
     */
    select?: WisataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WisataInclude<ExtArgs> | null
    where?: WisataWhereInput
    orderBy?: WisataOrderByWithRelationInput | WisataOrderByWithRelationInput[]
    cursor?: WisataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WisataScalarFieldEnum | WisataScalarFieldEnum[]
  }


  /**
   * Daerah without action
   */
  export type DaerahDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Daerah
     */
    select?: DaerahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaerahInclude<ExtArgs> | null
  }



  /**
   * Model Rekomendasi
   */

  export type AggregateRekomendasi = {
    _count: RekomendasiCountAggregateOutputType | null
    _avg: RekomendasiAvgAggregateOutputType | null
    _sum: RekomendasiSumAggregateOutputType | null
    _min: RekomendasiMinAggregateOutputType | null
    _max: RekomendasiMaxAggregateOutputType | null
  }

  export type RekomendasiAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    wisataId: number | null
  }

  export type RekomendasiSumAggregateOutputType = {
    id: number | null
    userId: number | null
    wisataId: number | null
  }

  export type RekomendasiMinAggregateOutputType = {
    id: number | null
    tanggal_vote: Date | null
    userId: number | null
    wisataId: number | null
  }

  export type RekomendasiMaxAggregateOutputType = {
    id: number | null
    tanggal_vote: Date | null
    userId: number | null
    wisataId: number | null
  }

  export type RekomendasiCountAggregateOutputType = {
    id: number
    tanggal_vote: number
    userId: number
    wisataId: number
    _all: number
  }


  export type RekomendasiAvgAggregateInputType = {
    id?: true
    userId?: true
    wisataId?: true
  }

  export type RekomendasiSumAggregateInputType = {
    id?: true
    userId?: true
    wisataId?: true
  }

  export type RekomendasiMinAggregateInputType = {
    id?: true
    tanggal_vote?: true
    userId?: true
    wisataId?: true
  }

  export type RekomendasiMaxAggregateInputType = {
    id?: true
    tanggal_vote?: true
    userId?: true
    wisataId?: true
  }

  export type RekomendasiCountAggregateInputType = {
    id?: true
    tanggal_vote?: true
    userId?: true
    wisataId?: true
    _all?: true
  }

  export type RekomendasiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rekomendasi to aggregate.
     */
    where?: RekomendasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rekomendasis to fetch.
     */
    orderBy?: RekomendasiOrderByWithRelationInput | RekomendasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RekomendasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rekomendasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rekomendasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rekomendasis
    **/
    _count?: true | RekomendasiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RekomendasiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RekomendasiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RekomendasiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RekomendasiMaxAggregateInputType
  }

  export type GetRekomendasiAggregateType<T extends RekomendasiAggregateArgs> = {
        [P in keyof T & keyof AggregateRekomendasi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRekomendasi[P]>
      : GetScalarType<T[P], AggregateRekomendasi[P]>
  }




  export type RekomendasiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RekomendasiWhereInput
    orderBy?: RekomendasiOrderByWithAggregationInput | RekomendasiOrderByWithAggregationInput[]
    by: RekomendasiScalarFieldEnum[] | RekomendasiScalarFieldEnum
    having?: RekomendasiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RekomendasiCountAggregateInputType | true
    _avg?: RekomendasiAvgAggregateInputType
    _sum?: RekomendasiSumAggregateInputType
    _min?: RekomendasiMinAggregateInputType
    _max?: RekomendasiMaxAggregateInputType
  }

  export type RekomendasiGroupByOutputType = {
    id: number
    tanggal_vote: Date
    userId: number
    wisataId: number
    _count: RekomendasiCountAggregateOutputType | null
    _avg: RekomendasiAvgAggregateOutputType | null
    _sum: RekomendasiSumAggregateOutputType | null
    _min: RekomendasiMinAggregateOutputType | null
    _max: RekomendasiMaxAggregateOutputType | null
  }

  type GetRekomendasiGroupByPayload<T extends RekomendasiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RekomendasiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RekomendasiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RekomendasiGroupByOutputType[P]>
            : GetScalarType<T[P], RekomendasiGroupByOutputType[P]>
        }
      >
    >


  export type RekomendasiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal_vote?: boolean
    userId?: boolean
    wisataId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    wisata?: boolean | WisataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rekomendasi"]>

  export type RekomendasiSelectScalar = {
    id?: boolean
    tanggal_vote?: boolean
    userId?: boolean
    wisataId?: boolean
  }

  export type RekomendasiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    wisata?: boolean | WisataDefaultArgs<ExtArgs>
  }


  export type $RekomendasiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rekomendasi"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      wisata: Prisma.$WisataPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tanggal_vote: Date
      userId: number
      wisataId: number
    }, ExtArgs["result"]["rekomendasi"]>
    composites: {}
  }


  type RekomendasiGetPayload<S extends boolean | null | undefined | RekomendasiDefaultArgs> = $Result.GetResult<Prisma.$RekomendasiPayload, S>

  type RekomendasiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RekomendasiFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: RekomendasiCountAggregateInputType | true
    }

  export interface RekomendasiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rekomendasi'], meta: { name: 'Rekomendasi' } }
    /**
     * Find zero or one Rekomendasi that matches the filter.
     * @param {RekomendasiFindUniqueArgs} args - Arguments to find a Rekomendasi
     * @example
     * // Get one Rekomendasi
     * const rekomendasi = await prisma.rekomendasi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RekomendasiFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RekomendasiFindUniqueArgs<ExtArgs>>
    ): Prisma__RekomendasiClient<$Result.GetResult<Prisma.$RekomendasiPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Rekomendasi that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RekomendasiFindUniqueOrThrowArgs} args - Arguments to find a Rekomendasi
     * @example
     * // Get one Rekomendasi
     * const rekomendasi = await prisma.rekomendasi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RekomendasiFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RekomendasiFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RekomendasiClient<$Result.GetResult<Prisma.$RekomendasiPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Rekomendasi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RekomendasiFindFirstArgs} args - Arguments to find a Rekomendasi
     * @example
     * // Get one Rekomendasi
     * const rekomendasi = await prisma.rekomendasi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RekomendasiFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RekomendasiFindFirstArgs<ExtArgs>>
    ): Prisma__RekomendasiClient<$Result.GetResult<Prisma.$RekomendasiPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Rekomendasi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RekomendasiFindFirstOrThrowArgs} args - Arguments to find a Rekomendasi
     * @example
     * // Get one Rekomendasi
     * const rekomendasi = await prisma.rekomendasi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RekomendasiFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RekomendasiFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RekomendasiClient<$Result.GetResult<Prisma.$RekomendasiPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Rekomendasis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RekomendasiFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rekomendasis
     * const rekomendasis = await prisma.rekomendasi.findMany()
     * 
     * // Get first 10 Rekomendasis
     * const rekomendasis = await prisma.rekomendasi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rekomendasiWithIdOnly = await prisma.rekomendasi.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RekomendasiFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RekomendasiFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RekomendasiPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Rekomendasi.
     * @param {RekomendasiCreateArgs} args - Arguments to create a Rekomendasi.
     * @example
     * // Create one Rekomendasi
     * const Rekomendasi = await prisma.rekomendasi.create({
     *   data: {
     *     // ... data to create a Rekomendasi
     *   }
     * })
     * 
    **/
    create<T extends RekomendasiCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RekomendasiCreateArgs<ExtArgs>>
    ): Prisma__RekomendasiClient<$Result.GetResult<Prisma.$RekomendasiPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Rekomendasis.
     *     @param {RekomendasiCreateManyArgs} args - Arguments to create many Rekomendasis.
     *     @example
     *     // Create many Rekomendasis
     *     const rekomendasi = await prisma.rekomendasi.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RekomendasiCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RekomendasiCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rekomendasi.
     * @param {RekomendasiDeleteArgs} args - Arguments to delete one Rekomendasi.
     * @example
     * // Delete one Rekomendasi
     * const Rekomendasi = await prisma.rekomendasi.delete({
     *   where: {
     *     // ... filter to delete one Rekomendasi
     *   }
     * })
     * 
    **/
    delete<T extends RekomendasiDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RekomendasiDeleteArgs<ExtArgs>>
    ): Prisma__RekomendasiClient<$Result.GetResult<Prisma.$RekomendasiPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Rekomendasi.
     * @param {RekomendasiUpdateArgs} args - Arguments to update one Rekomendasi.
     * @example
     * // Update one Rekomendasi
     * const rekomendasi = await prisma.rekomendasi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RekomendasiUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RekomendasiUpdateArgs<ExtArgs>>
    ): Prisma__RekomendasiClient<$Result.GetResult<Prisma.$RekomendasiPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Rekomendasis.
     * @param {RekomendasiDeleteManyArgs} args - Arguments to filter Rekomendasis to delete.
     * @example
     * // Delete a few Rekomendasis
     * const { count } = await prisma.rekomendasi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RekomendasiDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RekomendasiDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rekomendasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RekomendasiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rekomendasis
     * const rekomendasi = await prisma.rekomendasi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RekomendasiUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RekomendasiUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rekomendasi.
     * @param {RekomendasiUpsertArgs} args - Arguments to update or create a Rekomendasi.
     * @example
     * // Update or create a Rekomendasi
     * const rekomendasi = await prisma.rekomendasi.upsert({
     *   create: {
     *     // ... data to create a Rekomendasi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rekomendasi we want to update
     *   }
     * })
    **/
    upsert<T extends RekomendasiUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RekomendasiUpsertArgs<ExtArgs>>
    ): Prisma__RekomendasiClient<$Result.GetResult<Prisma.$RekomendasiPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Rekomendasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RekomendasiCountArgs} args - Arguments to filter Rekomendasis to count.
     * @example
     * // Count the number of Rekomendasis
     * const count = await prisma.rekomendasi.count({
     *   where: {
     *     // ... the filter for the Rekomendasis we want to count
     *   }
     * })
    **/
    count<T extends RekomendasiCountArgs>(
      args?: Subset<T, RekomendasiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RekomendasiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rekomendasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RekomendasiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RekomendasiAggregateArgs>(args: Subset<T, RekomendasiAggregateArgs>): Prisma.PrismaPromise<GetRekomendasiAggregateType<T>>

    /**
     * Group by Rekomendasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RekomendasiGroupByArgs} args - Group by arguments.
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
      T extends RekomendasiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RekomendasiGroupByArgs['orderBy'] }
        : { orderBy?: RekomendasiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RekomendasiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRekomendasiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rekomendasi model
   */
  readonly fields: RekomendasiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rekomendasi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RekomendasiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    wisata<T extends WisataDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WisataDefaultArgs<ExtArgs>>): Prisma__WisataClient<$Result.GetResult<Prisma.$WisataPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the Rekomendasi model
   */ 
  interface RekomendasiFieldRefs {
    readonly id: FieldRef<"Rekomendasi", 'Int'>
    readonly tanggal_vote: FieldRef<"Rekomendasi", 'DateTime'>
    readonly userId: FieldRef<"Rekomendasi", 'Int'>
    readonly wisataId: FieldRef<"Rekomendasi", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Rekomendasi findUnique
   */
  export type RekomendasiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rekomendasi
     */
    select?: RekomendasiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RekomendasiInclude<ExtArgs> | null
    /**
     * Filter, which Rekomendasi to fetch.
     */
    where: RekomendasiWhereUniqueInput
  }


  /**
   * Rekomendasi findUniqueOrThrow
   */
  export type RekomendasiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rekomendasi
     */
    select?: RekomendasiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RekomendasiInclude<ExtArgs> | null
    /**
     * Filter, which Rekomendasi to fetch.
     */
    where: RekomendasiWhereUniqueInput
  }


  /**
   * Rekomendasi findFirst
   */
  export type RekomendasiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rekomendasi
     */
    select?: RekomendasiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RekomendasiInclude<ExtArgs> | null
    /**
     * Filter, which Rekomendasi to fetch.
     */
    where?: RekomendasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rekomendasis to fetch.
     */
    orderBy?: RekomendasiOrderByWithRelationInput | RekomendasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rekomendasis.
     */
    cursor?: RekomendasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rekomendasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rekomendasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rekomendasis.
     */
    distinct?: RekomendasiScalarFieldEnum | RekomendasiScalarFieldEnum[]
  }


  /**
   * Rekomendasi findFirstOrThrow
   */
  export type RekomendasiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rekomendasi
     */
    select?: RekomendasiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RekomendasiInclude<ExtArgs> | null
    /**
     * Filter, which Rekomendasi to fetch.
     */
    where?: RekomendasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rekomendasis to fetch.
     */
    orderBy?: RekomendasiOrderByWithRelationInput | RekomendasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rekomendasis.
     */
    cursor?: RekomendasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rekomendasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rekomendasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rekomendasis.
     */
    distinct?: RekomendasiScalarFieldEnum | RekomendasiScalarFieldEnum[]
  }


  /**
   * Rekomendasi findMany
   */
  export type RekomendasiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rekomendasi
     */
    select?: RekomendasiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RekomendasiInclude<ExtArgs> | null
    /**
     * Filter, which Rekomendasis to fetch.
     */
    where?: RekomendasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rekomendasis to fetch.
     */
    orderBy?: RekomendasiOrderByWithRelationInput | RekomendasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rekomendasis.
     */
    cursor?: RekomendasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rekomendasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rekomendasis.
     */
    skip?: number
    distinct?: RekomendasiScalarFieldEnum | RekomendasiScalarFieldEnum[]
  }


  /**
   * Rekomendasi create
   */
  export type RekomendasiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rekomendasi
     */
    select?: RekomendasiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RekomendasiInclude<ExtArgs> | null
    /**
     * The data needed to create a Rekomendasi.
     */
    data: XOR<RekomendasiCreateInput, RekomendasiUncheckedCreateInput>
  }


  /**
   * Rekomendasi createMany
   */
  export type RekomendasiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rekomendasis.
     */
    data: RekomendasiCreateManyInput | RekomendasiCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Rekomendasi update
   */
  export type RekomendasiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rekomendasi
     */
    select?: RekomendasiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RekomendasiInclude<ExtArgs> | null
    /**
     * The data needed to update a Rekomendasi.
     */
    data: XOR<RekomendasiUpdateInput, RekomendasiUncheckedUpdateInput>
    /**
     * Choose, which Rekomendasi to update.
     */
    where: RekomendasiWhereUniqueInput
  }


  /**
   * Rekomendasi updateMany
   */
  export type RekomendasiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rekomendasis.
     */
    data: XOR<RekomendasiUpdateManyMutationInput, RekomendasiUncheckedUpdateManyInput>
    /**
     * Filter which Rekomendasis to update
     */
    where?: RekomendasiWhereInput
  }


  /**
   * Rekomendasi upsert
   */
  export type RekomendasiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rekomendasi
     */
    select?: RekomendasiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RekomendasiInclude<ExtArgs> | null
    /**
     * The filter to search for the Rekomendasi to update in case it exists.
     */
    where: RekomendasiWhereUniqueInput
    /**
     * In case the Rekomendasi found by the `where` argument doesn't exist, create a new Rekomendasi with this data.
     */
    create: XOR<RekomendasiCreateInput, RekomendasiUncheckedCreateInput>
    /**
     * In case the Rekomendasi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RekomendasiUpdateInput, RekomendasiUncheckedUpdateInput>
  }


  /**
   * Rekomendasi delete
   */
  export type RekomendasiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rekomendasi
     */
    select?: RekomendasiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RekomendasiInclude<ExtArgs> | null
    /**
     * Filter which Rekomendasi to delete.
     */
    where: RekomendasiWhereUniqueInput
  }


  /**
   * Rekomendasi deleteMany
   */
  export type RekomendasiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rekomendasis to delete
     */
    where?: RekomendasiWhereInput
  }


  /**
   * Rekomendasi without action
   */
  export type RekomendasiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rekomendasi
     */
    select?: RekomendasiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RekomendasiInclude<ExtArgs> | null
  }



  /**
   * Model Ulasan
   */

  export type AggregateUlasan = {
    _count: UlasanCountAggregateOutputType | null
    _avg: UlasanAvgAggregateOutputType | null
    _sum: UlasanSumAggregateOutputType | null
    _min: UlasanMinAggregateOutputType | null
    _max: UlasanMaxAggregateOutputType | null
  }

  export type UlasanAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    wisataId: number | null
  }

  export type UlasanSumAggregateOutputType = {
    id: number | null
    userId: number | null
    wisataId: number | null
  }

  export type UlasanMinAggregateOutputType = {
    id: number | null
    userId: number | null
    wisataId: number | null
    tanggal_ulasan: Date | null
    judul: string | null
    isi_ulasan: string | null
    foto_ulasan: string | null
  }

  export type UlasanMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    wisataId: number | null
    tanggal_ulasan: Date | null
    judul: string | null
    isi_ulasan: string | null
    foto_ulasan: string | null
  }

  export type UlasanCountAggregateOutputType = {
    id: number
    userId: number
    wisataId: number
    tanggal_ulasan: number
    judul: number
    isi_ulasan: number
    foto_ulasan: number
    _all: number
  }


  export type UlasanAvgAggregateInputType = {
    id?: true
    userId?: true
    wisataId?: true
  }

  export type UlasanSumAggregateInputType = {
    id?: true
    userId?: true
    wisataId?: true
  }

  export type UlasanMinAggregateInputType = {
    id?: true
    userId?: true
    wisataId?: true
    tanggal_ulasan?: true
    judul?: true
    isi_ulasan?: true
    foto_ulasan?: true
  }

  export type UlasanMaxAggregateInputType = {
    id?: true
    userId?: true
    wisataId?: true
    tanggal_ulasan?: true
    judul?: true
    isi_ulasan?: true
    foto_ulasan?: true
  }

  export type UlasanCountAggregateInputType = {
    id?: true
    userId?: true
    wisataId?: true
    tanggal_ulasan?: true
    judul?: true
    isi_ulasan?: true
    foto_ulasan?: true
    _all?: true
  }

  export type UlasanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ulasan to aggregate.
     */
    where?: UlasanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ulasans to fetch.
     */
    orderBy?: UlasanOrderByWithRelationInput | UlasanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UlasanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ulasans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ulasans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ulasans
    **/
    _count?: true | UlasanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UlasanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UlasanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UlasanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UlasanMaxAggregateInputType
  }

  export type GetUlasanAggregateType<T extends UlasanAggregateArgs> = {
        [P in keyof T & keyof AggregateUlasan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUlasan[P]>
      : GetScalarType<T[P], AggregateUlasan[P]>
  }




  export type UlasanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UlasanWhereInput
    orderBy?: UlasanOrderByWithAggregationInput | UlasanOrderByWithAggregationInput[]
    by: UlasanScalarFieldEnum[] | UlasanScalarFieldEnum
    having?: UlasanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UlasanCountAggregateInputType | true
    _avg?: UlasanAvgAggregateInputType
    _sum?: UlasanSumAggregateInputType
    _min?: UlasanMinAggregateInputType
    _max?: UlasanMaxAggregateInputType
  }

  export type UlasanGroupByOutputType = {
    id: number
    userId: number
    wisataId: number
    tanggal_ulasan: Date
    judul: string
    isi_ulasan: string
    foto_ulasan: string
    _count: UlasanCountAggregateOutputType | null
    _avg: UlasanAvgAggregateOutputType | null
    _sum: UlasanSumAggregateOutputType | null
    _min: UlasanMinAggregateOutputType | null
    _max: UlasanMaxAggregateOutputType | null
  }

  type GetUlasanGroupByPayload<T extends UlasanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UlasanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UlasanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UlasanGroupByOutputType[P]>
            : GetScalarType<T[P], UlasanGroupByOutputType[P]>
        }
      >
    >


  export type UlasanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    wisataId?: boolean
    tanggal_ulasan?: boolean
    judul?: boolean
    isi_ulasan?: boolean
    foto_ulasan?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    wisata?: boolean | WisataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ulasan"]>

  export type UlasanSelectScalar = {
    id?: boolean
    userId?: boolean
    wisataId?: boolean
    tanggal_ulasan?: boolean
    judul?: boolean
    isi_ulasan?: boolean
    foto_ulasan?: boolean
  }

  export type UlasanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    wisata?: boolean | WisataDefaultArgs<ExtArgs>
  }


  export type $UlasanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ulasan"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      wisata: Prisma.$WisataPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      wisataId: number
      tanggal_ulasan: Date
      judul: string
      isi_ulasan: string
      foto_ulasan: string
    }, ExtArgs["result"]["ulasan"]>
    composites: {}
  }


  type UlasanGetPayload<S extends boolean | null | undefined | UlasanDefaultArgs> = $Result.GetResult<Prisma.$UlasanPayload, S>

  type UlasanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UlasanFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UlasanCountAggregateInputType | true
    }

  export interface UlasanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ulasan'], meta: { name: 'Ulasan' } }
    /**
     * Find zero or one Ulasan that matches the filter.
     * @param {UlasanFindUniqueArgs} args - Arguments to find a Ulasan
     * @example
     * // Get one Ulasan
     * const ulasan = await prisma.ulasan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UlasanFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UlasanFindUniqueArgs<ExtArgs>>
    ): Prisma__UlasanClient<$Result.GetResult<Prisma.$UlasanPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Ulasan that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UlasanFindUniqueOrThrowArgs} args - Arguments to find a Ulasan
     * @example
     * // Get one Ulasan
     * const ulasan = await prisma.ulasan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UlasanFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UlasanFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UlasanClient<$Result.GetResult<Prisma.$UlasanPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Ulasan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UlasanFindFirstArgs} args - Arguments to find a Ulasan
     * @example
     * // Get one Ulasan
     * const ulasan = await prisma.ulasan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UlasanFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UlasanFindFirstArgs<ExtArgs>>
    ): Prisma__UlasanClient<$Result.GetResult<Prisma.$UlasanPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Ulasan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UlasanFindFirstOrThrowArgs} args - Arguments to find a Ulasan
     * @example
     * // Get one Ulasan
     * const ulasan = await prisma.ulasan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UlasanFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UlasanFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UlasanClient<$Result.GetResult<Prisma.$UlasanPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Ulasans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UlasanFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ulasans
     * const ulasans = await prisma.ulasan.findMany()
     * 
     * // Get first 10 Ulasans
     * const ulasans = await prisma.ulasan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ulasanWithIdOnly = await prisma.ulasan.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UlasanFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UlasanFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UlasanPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Ulasan.
     * @param {UlasanCreateArgs} args - Arguments to create a Ulasan.
     * @example
     * // Create one Ulasan
     * const Ulasan = await prisma.ulasan.create({
     *   data: {
     *     // ... data to create a Ulasan
     *   }
     * })
     * 
    **/
    create<T extends UlasanCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UlasanCreateArgs<ExtArgs>>
    ): Prisma__UlasanClient<$Result.GetResult<Prisma.$UlasanPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Ulasans.
     *     @param {UlasanCreateManyArgs} args - Arguments to create many Ulasans.
     *     @example
     *     // Create many Ulasans
     *     const ulasan = await prisma.ulasan.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UlasanCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UlasanCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ulasan.
     * @param {UlasanDeleteArgs} args - Arguments to delete one Ulasan.
     * @example
     * // Delete one Ulasan
     * const Ulasan = await prisma.ulasan.delete({
     *   where: {
     *     // ... filter to delete one Ulasan
     *   }
     * })
     * 
    **/
    delete<T extends UlasanDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UlasanDeleteArgs<ExtArgs>>
    ): Prisma__UlasanClient<$Result.GetResult<Prisma.$UlasanPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Ulasan.
     * @param {UlasanUpdateArgs} args - Arguments to update one Ulasan.
     * @example
     * // Update one Ulasan
     * const ulasan = await prisma.ulasan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UlasanUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UlasanUpdateArgs<ExtArgs>>
    ): Prisma__UlasanClient<$Result.GetResult<Prisma.$UlasanPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Ulasans.
     * @param {UlasanDeleteManyArgs} args - Arguments to filter Ulasans to delete.
     * @example
     * // Delete a few Ulasans
     * const { count } = await prisma.ulasan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UlasanDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UlasanDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ulasans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UlasanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ulasans
     * const ulasan = await prisma.ulasan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UlasanUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UlasanUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ulasan.
     * @param {UlasanUpsertArgs} args - Arguments to update or create a Ulasan.
     * @example
     * // Update or create a Ulasan
     * const ulasan = await prisma.ulasan.upsert({
     *   create: {
     *     // ... data to create a Ulasan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ulasan we want to update
     *   }
     * })
    **/
    upsert<T extends UlasanUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UlasanUpsertArgs<ExtArgs>>
    ): Prisma__UlasanClient<$Result.GetResult<Prisma.$UlasanPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Ulasans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UlasanCountArgs} args - Arguments to filter Ulasans to count.
     * @example
     * // Count the number of Ulasans
     * const count = await prisma.ulasan.count({
     *   where: {
     *     // ... the filter for the Ulasans we want to count
     *   }
     * })
    **/
    count<T extends UlasanCountArgs>(
      args?: Subset<T, UlasanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UlasanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ulasan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UlasanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UlasanAggregateArgs>(args: Subset<T, UlasanAggregateArgs>): Prisma.PrismaPromise<GetUlasanAggregateType<T>>

    /**
     * Group by Ulasan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UlasanGroupByArgs} args - Group by arguments.
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
      T extends UlasanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UlasanGroupByArgs['orderBy'] }
        : { orderBy?: UlasanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UlasanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUlasanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ulasan model
   */
  readonly fields: UlasanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ulasan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UlasanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    wisata<T extends WisataDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WisataDefaultArgs<ExtArgs>>): Prisma__WisataClient<$Result.GetResult<Prisma.$WisataPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the Ulasan model
   */ 
  interface UlasanFieldRefs {
    readonly id: FieldRef<"Ulasan", 'Int'>
    readonly userId: FieldRef<"Ulasan", 'Int'>
    readonly wisataId: FieldRef<"Ulasan", 'Int'>
    readonly tanggal_ulasan: FieldRef<"Ulasan", 'DateTime'>
    readonly judul: FieldRef<"Ulasan", 'String'>
    readonly isi_ulasan: FieldRef<"Ulasan", 'String'>
    readonly foto_ulasan: FieldRef<"Ulasan", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Ulasan findUnique
   */
  export type UlasanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ulasan
     */
    select?: UlasanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UlasanInclude<ExtArgs> | null
    /**
     * Filter, which Ulasan to fetch.
     */
    where: UlasanWhereUniqueInput
  }


  /**
   * Ulasan findUniqueOrThrow
   */
  export type UlasanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ulasan
     */
    select?: UlasanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UlasanInclude<ExtArgs> | null
    /**
     * Filter, which Ulasan to fetch.
     */
    where: UlasanWhereUniqueInput
  }


  /**
   * Ulasan findFirst
   */
  export type UlasanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ulasan
     */
    select?: UlasanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UlasanInclude<ExtArgs> | null
    /**
     * Filter, which Ulasan to fetch.
     */
    where?: UlasanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ulasans to fetch.
     */
    orderBy?: UlasanOrderByWithRelationInput | UlasanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ulasans.
     */
    cursor?: UlasanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ulasans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ulasans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ulasans.
     */
    distinct?: UlasanScalarFieldEnum | UlasanScalarFieldEnum[]
  }


  /**
   * Ulasan findFirstOrThrow
   */
  export type UlasanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ulasan
     */
    select?: UlasanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UlasanInclude<ExtArgs> | null
    /**
     * Filter, which Ulasan to fetch.
     */
    where?: UlasanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ulasans to fetch.
     */
    orderBy?: UlasanOrderByWithRelationInput | UlasanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ulasans.
     */
    cursor?: UlasanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ulasans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ulasans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ulasans.
     */
    distinct?: UlasanScalarFieldEnum | UlasanScalarFieldEnum[]
  }


  /**
   * Ulasan findMany
   */
  export type UlasanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ulasan
     */
    select?: UlasanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UlasanInclude<ExtArgs> | null
    /**
     * Filter, which Ulasans to fetch.
     */
    where?: UlasanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ulasans to fetch.
     */
    orderBy?: UlasanOrderByWithRelationInput | UlasanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ulasans.
     */
    cursor?: UlasanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ulasans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ulasans.
     */
    skip?: number
    distinct?: UlasanScalarFieldEnum | UlasanScalarFieldEnum[]
  }


  /**
   * Ulasan create
   */
  export type UlasanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ulasan
     */
    select?: UlasanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UlasanInclude<ExtArgs> | null
    /**
     * The data needed to create a Ulasan.
     */
    data: XOR<UlasanCreateInput, UlasanUncheckedCreateInput>
  }


  /**
   * Ulasan createMany
   */
  export type UlasanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ulasans.
     */
    data: UlasanCreateManyInput | UlasanCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Ulasan update
   */
  export type UlasanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ulasan
     */
    select?: UlasanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UlasanInclude<ExtArgs> | null
    /**
     * The data needed to update a Ulasan.
     */
    data: XOR<UlasanUpdateInput, UlasanUncheckedUpdateInput>
    /**
     * Choose, which Ulasan to update.
     */
    where: UlasanWhereUniqueInput
  }


  /**
   * Ulasan updateMany
   */
  export type UlasanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ulasans.
     */
    data: XOR<UlasanUpdateManyMutationInput, UlasanUncheckedUpdateManyInput>
    /**
     * Filter which Ulasans to update
     */
    where?: UlasanWhereInput
  }


  /**
   * Ulasan upsert
   */
  export type UlasanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ulasan
     */
    select?: UlasanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UlasanInclude<ExtArgs> | null
    /**
     * The filter to search for the Ulasan to update in case it exists.
     */
    where: UlasanWhereUniqueInput
    /**
     * In case the Ulasan found by the `where` argument doesn't exist, create a new Ulasan with this data.
     */
    create: XOR<UlasanCreateInput, UlasanUncheckedCreateInput>
    /**
     * In case the Ulasan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UlasanUpdateInput, UlasanUncheckedUpdateInput>
  }


  /**
   * Ulasan delete
   */
  export type UlasanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ulasan
     */
    select?: UlasanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UlasanInclude<ExtArgs> | null
    /**
     * Filter which Ulasan to delete.
     */
    where: UlasanWhereUniqueInput
  }


  /**
   * Ulasan deleteMany
   */
  export type UlasanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ulasans to delete
     */
    where?: UlasanWhereInput
  }


  /**
   * Ulasan without action
   */
  export type UlasanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ulasan
     */
    select?: UlasanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UlasanInclude<ExtArgs> | null
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
    email: 'email',
    password: 'password',
    googleid: 'googleid',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    nama: 'nama',
    jenis_kelamin: 'jenis_kelamin',
    alamat: 'alamat',
    foto_profile: 'foto_profile'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const WisataScalarFieldEnum: {
    id: 'id',
    nama_wisata: 'nama_wisata',
    kategoriId: 'kategoriId',
    daerahId: 'daerahId',
    alamat: 'alamat',
    deskripsi: 'deskripsi',
    jam_operasi: 'jam_operasi',
    harga_tiket: 'harga_tiket',
    tanggal: 'tanggal',
    userId: 'userId',
    foto_wisata: 'foto_wisata'
  };

  export type WisataScalarFieldEnum = (typeof WisataScalarFieldEnum)[keyof typeof WisataScalarFieldEnum]


  export const KategoriWisataScalarFieldEnum: {
    id: 'id',
    nama_kategori: 'nama_kategori'
  };

  export type KategoriWisataScalarFieldEnum = (typeof KategoriWisataScalarFieldEnum)[keyof typeof KategoriWisataScalarFieldEnum]


  export const DaerahScalarFieldEnum: {
    id: 'id',
    nama_daerah: 'nama_daerah'
  };

  export type DaerahScalarFieldEnum = (typeof DaerahScalarFieldEnum)[keyof typeof DaerahScalarFieldEnum]


  export const RekomendasiScalarFieldEnum: {
    id: 'id',
    tanggal_vote: 'tanggal_vote',
    userId: 'userId',
    wisataId: 'wisataId'
  };

  export type RekomendasiScalarFieldEnum = (typeof RekomendasiScalarFieldEnum)[keyof typeof RekomendasiScalarFieldEnum]


  export const UlasanScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    wisataId: 'wisataId',
    tanggal_ulasan: 'tanggal_ulasan',
    judul: 'judul',
    isi_ulasan: 'isi_ulasan',
    foto_ulasan: 'foto_ulasan'
  };

  export type UlasanScalarFieldEnum = (typeof UlasanScalarFieldEnum)[keyof typeof UlasanScalarFieldEnum]


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
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    googleid?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    profile?: XOR<ProfileNullableRelationFilter, ProfileWhereInput> | null
    wisata?: WisataListRelationFilter
    rekomendasi?: RekomendasiListRelationFilter
    ulasan?: UlasanListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    googleid?: SortOrderInput | SortOrder
    role?: SortOrder
    profile?: ProfileOrderByWithRelationInput
    wisata?: WisataOrderByRelationAggregateInput
    rekomendasi?: RekomendasiOrderByRelationAggregateInput
    ulasan?: UlasanOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringNullableFilter<"User"> | string | null
    googleid?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    profile?: XOR<ProfileNullableRelationFilter, ProfileWhereInput> | null
    wisata?: WisataListRelationFilter
    rekomendasi?: RekomendasiListRelationFilter
    ulasan?: UlasanListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    googleid?: SortOrderInput | SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    googleid?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: IntFilter<"Profile"> | number
    userId?: IntFilter<"Profile"> | number
    nama?: StringNullableFilter<"Profile"> | string | null
    jenis_kelamin?: StringNullableFilter<"Profile"> | string | null
    alamat?: StringNullableFilter<"Profile"> | string | null
    foto_profile?: StringNullableFilter<"Profile"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    nama?: SortOrderInput | SortOrder
    jenis_kelamin?: SortOrderInput | SortOrder
    alamat?: SortOrderInput | SortOrder
    foto_profile?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    nama?: StringNullableFilter<"Profile"> | string | null
    jenis_kelamin?: StringNullableFilter<"Profile"> | string | null
    alamat?: StringNullableFilter<"Profile"> | string | null
    foto_profile?: StringNullableFilter<"Profile"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    nama?: SortOrderInput | SortOrder
    jenis_kelamin?: SortOrderInput | SortOrder
    alamat?: SortOrderInput | SortOrder
    foto_profile?: SortOrderInput | SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Profile"> | number
    userId?: IntWithAggregatesFilter<"Profile"> | number
    nama?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    jenis_kelamin?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    alamat?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    foto_profile?: StringNullableWithAggregatesFilter<"Profile"> | string | null
  }

  export type WisataWhereInput = {
    AND?: WisataWhereInput | WisataWhereInput[]
    OR?: WisataWhereInput[]
    NOT?: WisataWhereInput | WisataWhereInput[]
    id?: IntFilter<"Wisata"> | number
    nama_wisata?: StringFilter<"Wisata"> | string
    kategoriId?: IntFilter<"Wisata"> | number
    daerahId?: IntFilter<"Wisata"> | number
    alamat?: StringFilter<"Wisata"> | string
    deskripsi?: StringFilter<"Wisata"> | string
    jam_operasi?: StringFilter<"Wisata"> | string
    harga_tiket?: StringFilter<"Wisata"> | string
    tanggal?: DateTimeFilter<"Wisata"> | Date | string
    userId?: IntFilter<"Wisata"> | number
    foto_wisata?: StringNullableFilter<"Wisata"> | string | null
    rekomendasi?: RekomendasiListRelationFilter
    ulasan?: UlasanListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
    kategori?: XOR<KategoriWisataRelationFilter, KategoriWisataWhereInput>
    daerah?: XOR<DaerahRelationFilter, DaerahWhereInput>
  }

  export type WisataOrderByWithRelationInput = {
    id?: SortOrder
    nama_wisata?: SortOrder
    kategoriId?: SortOrder
    daerahId?: SortOrder
    alamat?: SortOrder
    deskripsi?: SortOrder
    jam_operasi?: SortOrder
    harga_tiket?: SortOrder
    tanggal?: SortOrder
    userId?: SortOrder
    foto_wisata?: SortOrderInput | SortOrder
    rekomendasi?: RekomendasiOrderByRelationAggregateInput
    ulasan?: UlasanOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    kategori?: KategoriWisataOrderByWithRelationInput
    daerah?: DaerahOrderByWithRelationInput
  }

  export type WisataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WisataWhereInput | WisataWhereInput[]
    OR?: WisataWhereInput[]
    NOT?: WisataWhereInput | WisataWhereInput[]
    nama_wisata?: StringFilter<"Wisata"> | string
    kategoriId?: IntFilter<"Wisata"> | number
    daerahId?: IntFilter<"Wisata"> | number
    alamat?: StringFilter<"Wisata"> | string
    deskripsi?: StringFilter<"Wisata"> | string
    jam_operasi?: StringFilter<"Wisata"> | string
    harga_tiket?: StringFilter<"Wisata"> | string
    tanggal?: DateTimeFilter<"Wisata"> | Date | string
    userId?: IntFilter<"Wisata"> | number
    foto_wisata?: StringNullableFilter<"Wisata"> | string | null
    rekomendasi?: RekomendasiListRelationFilter
    ulasan?: UlasanListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
    kategori?: XOR<KategoriWisataRelationFilter, KategoriWisataWhereInput>
    daerah?: XOR<DaerahRelationFilter, DaerahWhereInput>
  }, "id">

  export type WisataOrderByWithAggregationInput = {
    id?: SortOrder
    nama_wisata?: SortOrder
    kategoriId?: SortOrder
    daerahId?: SortOrder
    alamat?: SortOrder
    deskripsi?: SortOrder
    jam_operasi?: SortOrder
    harga_tiket?: SortOrder
    tanggal?: SortOrder
    userId?: SortOrder
    foto_wisata?: SortOrderInput | SortOrder
    _count?: WisataCountOrderByAggregateInput
    _avg?: WisataAvgOrderByAggregateInput
    _max?: WisataMaxOrderByAggregateInput
    _min?: WisataMinOrderByAggregateInput
    _sum?: WisataSumOrderByAggregateInput
  }

  export type WisataScalarWhereWithAggregatesInput = {
    AND?: WisataScalarWhereWithAggregatesInput | WisataScalarWhereWithAggregatesInput[]
    OR?: WisataScalarWhereWithAggregatesInput[]
    NOT?: WisataScalarWhereWithAggregatesInput | WisataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Wisata"> | number
    nama_wisata?: StringWithAggregatesFilter<"Wisata"> | string
    kategoriId?: IntWithAggregatesFilter<"Wisata"> | number
    daerahId?: IntWithAggregatesFilter<"Wisata"> | number
    alamat?: StringWithAggregatesFilter<"Wisata"> | string
    deskripsi?: StringWithAggregatesFilter<"Wisata"> | string
    jam_operasi?: StringWithAggregatesFilter<"Wisata"> | string
    harga_tiket?: StringWithAggregatesFilter<"Wisata"> | string
    tanggal?: DateTimeWithAggregatesFilter<"Wisata"> | Date | string
    userId?: IntWithAggregatesFilter<"Wisata"> | number
    foto_wisata?: StringNullableWithAggregatesFilter<"Wisata"> | string | null
  }

  export type KategoriWisataWhereInput = {
    AND?: KategoriWisataWhereInput | KategoriWisataWhereInput[]
    OR?: KategoriWisataWhereInput[]
    NOT?: KategoriWisataWhereInput | KategoriWisataWhereInput[]
    id?: IntFilter<"KategoriWisata"> | number
    nama_kategori?: StringFilter<"KategoriWisata"> | string
    Wisata?: WisataListRelationFilter
  }

  export type KategoriWisataOrderByWithRelationInput = {
    id?: SortOrder
    nama_kategori?: SortOrder
    Wisata?: WisataOrderByRelationAggregateInput
  }

  export type KategoriWisataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: KategoriWisataWhereInput | KategoriWisataWhereInput[]
    OR?: KategoriWisataWhereInput[]
    NOT?: KategoriWisataWhereInput | KategoriWisataWhereInput[]
    nama_kategori?: StringFilter<"KategoriWisata"> | string
    Wisata?: WisataListRelationFilter
  }, "id">

  export type KategoriWisataOrderByWithAggregationInput = {
    id?: SortOrder
    nama_kategori?: SortOrder
    _count?: KategoriWisataCountOrderByAggregateInput
    _avg?: KategoriWisataAvgOrderByAggregateInput
    _max?: KategoriWisataMaxOrderByAggregateInput
    _min?: KategoriWisataMinOrderByAggregateInput
    _sum?: KategoriWisataSumOrderByAggregateInput
  }

  export type KategoriWisataScalarWhereWithAggregatesInput = {
    AND?: KategoriWisataScalarWhereWithAggregatesInput | KategoriWisataScalarWhereWithAggregatesInput[]
    OR?: KategoriWisataScalarWhereWithAggregatesInput[]
    NOT?: KategoriWisataScalarWhereWithAggregatesInput | KategoriWisataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"KategoriWisata"> | number
    nama_kategori?: StringWithAggregatesFilter<"KategoriWisata"> | string
  }

  export type DaerahWhereInput = {
    AND?: DaerahWhereInput | DaerahWhereInput[]
    OR?: DaerahWhereInput[]
    NOT?: DaerahWhereInput | DaerahWhereInput[]
    id?: IntFilter<"Daerah"> | number
    nama_daerah?: StringFilter<"Daerah"> | string
    Wisata?: WisataListRelationFilter
  }

  export type DaerahOrderByWithRelationInput = {
    id?: SortOrder
    nama_daerah?: SortOrder
    Wisata?: WisataOrderByRelationAggregateInput
  }

  export type DaerahWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DaerahWhereInput | DaerahWhereInput[]
    OR?: DaerahWhereInput[]
    NOT?: DaerahWhereInput | DaerahWhereInput[]
    nama_daerah?: StringFilter<"Daerah"> | string
    Wisata?: WisataListRelationFilter
  }, "id">

  export type DaerahOrderByWithAggregationInput = {
    id?: SortOrder
    nama_daerah?: SortOrder
    _count?: DaerahCountOrderByAggregateInput
    _avg?: DaerahAvgOrderByAggregateInput
    _max?: DaerahMaxOrderByAggregateInput
    _min?: DaerahMinOrderByAggregateInput
    _sum?: DaerahSumOrderByAggregateInput
  }

  export type DaerahScalarWhereWithAggregatesInput = {
    AND?: DaerahScalarWhereWithAggregatesInput | DaerahScalarWhereWithAggregatesInput[]
    OR?: DaerahScalarWhereWithAggregatesInput[]
    NOT?: DaerahScalarWhereWithAggregatesInput | DaerahScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Daerah"> | number
    nama_daerah?: StringWithAggregatesFilter<"Daerah"> | string
  }

  export type RekomendasiWhereInput = {
    AND?: RekomendasiWhereInput | RekomendasiWhereInput[]
    OR?: RekomendasiWhereInput[]
    NOT?: RekomendasiWhereInput | RekomendasiWhereInput[]
    id?: IntFilter<"Rekomendasi"> | number
    tanggal_vote?: DateTimeFilter<"Rekomendasi"> | Date | string
    userId?: IntFilter<"Rekomendasi"> | number
    wisataId?: IntFilter<"Rekomendasi"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    wisata?: XOR<WisataRelationFilter, WisataWhereInput>
  }

  export type RekomendasiOrderByWithRelationInput = {
    id?: SortOrder
    tanggal_vote?: SortOrder
    userId?: SortOrder
    wisataId?: SortOrder
    user?: UserOrderByWithRelationInput
    wisata?: WisataOrderByWithRelationInput
  }

  export type RekomendasiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: RekomendasiWhereInput | RekomendasiWhereInput[]
    OR?: RekomendasiWhereInput[]
    NOT?: RekomendasiWhereInput | RekomendasiWhereInput[]
    tanggal_vote?: DateTimeFilter<"Rekomendasi"> | Date | string
    wisataId?: IntFilter<"Rekomendasi"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    wisata?: XOR<WisataRelationFilter, WisataWhereInput>
  }, "id" | "userId">

  export type RekomendasiOrderByWithAggregationInput = {
    id?: SortOrder
    tanggal_vote?: SortOrder
    userId?: SortOrder
    wisataId?: SortOrder
    _count?: RekomendasiCountOrderByAggregateInput
    _avg?: RekomendasiAvgOrderByAggregateInput
    _max?: RekomendasiMaxOrderByAggregateInput
    _min?: RekomendasiMinOrderByAggregateInput
    _sum?: RekomendasiSumOrderByAggregateInput
  }

  export type RekomendasiScalarWhereWithAggregatesInput = {
    AND?: RekomendasiScalarWhereWithAggregatesInput | RekomendasiScalarWhereWithAggregatesInput[]
    OR?: RekomendasiScalarWhereWithAggregatesInput[]
    NOT?: RekomendasiScalarWhereWithAggregatesInput | RekomendasiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rekomendasi"> | number
    tanggal_vote?: DateTimeWithAggregatesFilter<"Rekomendasi"> | Date | string
    userId?: IntWithAggregatesFilter<"Rekomendasi"> | number
    wisataId?: IntWithAggregatesFilter<"Rekomendasi"> | number
  }

  export type UlasanWhereInput = {
    AND?: UlasanWhereInput | UlasanWhereInput[]
    OR?: UlasanWhereInput[]
    NOT?: UlasanWhereInput | UlasanWhereInput[]
    id?: IntFilter<"Ulasan"> | number
    userId?: IntFilter<"Ulasan"> | number
    wisataId?: IntFilter<"Ulasan"> | number
    tanggal_ulasan?: DateTimeFilter<"Ulasan"> | Date | string
    judul?: StringFilter<"Ulasan"> | string
    isi_ulasan?: StringFilter<"Ulasan"> | string
    foto_ulasan?: StringFilter<"Ulasan"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    wisata?: XOR<WisataRelationFilter, WisataWhereInput>
  }

  export type UlasanOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    wisataId?: SortOrder
    tanggal_ulasan?: SortOrder
    judul?: SortOrder
    isi_ulasan?: SortOrder
    foto_ulasan?: SortOrder
    user?: UserOrderByWithRelationInput
    wisata?: WisataOrderByWithRelationInput
  }

  export type UlasanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UlasanWhereInput | UlasanWhereInput[]
    OR?: UlasanWhereInput[]
    NOT?: UlasanWhereInput | UlasanWhereInput[]
    userId?: IntFilter<"Ulasan"> | number
    wisataId?: IntFilter<"Ulasan"> | number
    tanggal_ulasan?: DateTimeFilter<"Ulasan"> | Date | string
    judul?: StringFilter<"Ulasan"> | string
    isi_ulasan?: StringFilter<"Ulasan"> | string
    foto_ulasan?: StringFilter<"Ulasan"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    wisata?: XOR<WisataRelationFilter, WisataWhereInput>
  }, "id">

  export type UlasanOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    wisataId?: SortOrder
    tanggal_ulasan?: SortOrder
    judul?: SortOrder
    isi_ulasan?: SortOrder
    foto_ulasan?: SortOrder
    _count?: UlasanCountOrderByAggregateInput
    _avg?: UlasanAvgOrderByAggregateInput
    _max?: UlasanMaxOrderByAggregateInput
    _min?: UlasanMinOrderByAggregateInput
    _sum?: UlasanSumOrderByAggregateInput
  }

  export type UlasanScalarWhereWithAggregatesInput = {
    AND?: UlasanScalarWhereWithAggregatesInput | UlasanScalarWhereWithAggregatesInput[]
    OR?: UlasanScalarWhereWithAggregatesInput[]
    NOT?: UlasanScalarWhereWithAggregatesInput | UlasanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ulasan"> | number
    userId?: IntWithAggregatesFilter<"Ulasan"> | number
    wisataId?: IntWithAggregatesFilter<"Ulasan"> | number
    tanggal_ulasan?: DateTimeWithAggregatesFilter<"Ulasan"> | Date | string
    judul?: StringWithAggregatesFilter<"Ulasan"> | string
    isi_ulasan?: StringWithAggregatesFilter<"Ulasan"> | string
    foto_ulasan?: StringWithAggregatesFilter<"Ulasan"> | string
  }

  export type UserCreateInput = {
    email: string
    password?: string | null
    googleid?: string | null
    role: $Enums.Role
    profile?: ProfileCreateNestedOneWithoutUserInput
    wisata?: WisataCreateNestedManyWithoutUserInput
    rekomendasi?: RekomendasiCreateNestedManyWithoutUserInput
    ulasan?: UlasanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password?: string | null
    googleid?: string | null
    role: $Enums.Role
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    wisata?: WisataUncheckedCreateNestedManyWithoutUserInput
    rekomendasi?: RekomendasiUncheckedCreateNestedManyWithoutUserInput
    ulasan?: UlasanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleid?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: ProfileUpdateOneWithoutUserNestedInput
    wisata?: WisataUpdateManyWithoutUserNestedInput
    rekomendasi?: RekomendasiUpdateManyWithoutUserNestedInput
    ulasan?: UlasanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleid?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    wisata?: WisataUncheckedUpdateManyWithoutUserNestedInput
    rekomendasi?: RekomendasiUncheckedUpdateManyWithoutUserNestedInput
    ulasan?: UlasanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password?: string | null
    googleid?: string | null
    role: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleid?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleid?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type ProfileCreateInput = {
    nama?: string | null
    jenis_kelamin?: string | null
    alamat?: string | null
    foto_profile?: string | null
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: number
    userId: number
    nama?: string | null
    jenis_kelamin?: string | null
    alamat?: string | null
    foto_profile?: string | null
  }

  export type ProfileUpdateInput = {
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    jenis_kelamin?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    foto_profile?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    jenis_kelamin?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    foto_profile?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileCreateManyInput = {
    id?: number
    userId: number
    nama?: string | null
    jenis_kelamin?: string | null
    alamat?: string | null
    foto_profile?: string | null
  }

  export type ProfileUpdateManyMutationInput = {
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    jenis_kelamin?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    foto_profile?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    jenis_kelamin?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    foto_profile?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WisataCreateInput = {
    nama_wisata: string
    alamat: string
    deskripsi: string
    jam_operasi: string
    harga_tiket: string
    tanggal: Date | string
    foto_wisata?: string | null
    rekomendasi?: RekomendasiCreateNestedManyWithoutWisataInput
    ulasan?: UlasanCreateNestedManyWithoutWisataInput
    user: UserCreateNestedOneWithoutWisataInput
    kategori: KategoriWisataCreateNestedOneWithoutWisataInput
    daerah: DaerahCreateNestedOneWithoutWisataInput
  }

  export type WisataUncheckedCreateInput = {
    id?: number
    nama_wisata: string
    kategoriId: number
    daerahId: number
    alamat: string
    deskripsi: string
    jam_operasi: string
    harga_tiket: string
    tanggal: Date | string
    userId: number
    foto_wisata?: string | null
    rekomendasi?: RekomendasiUncheckedCreateNestedManyWithoutWisataInput
    ulasan?: UlasanUncheckedCreateNestedManyWithoutWisataInput
  }

  export type WisataUpdateInput = {
    nama_wisata?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    jam_operasi?: StringFieldUpdateOperationsInput | string
    harga_tiket?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    foto_wisata?: NullableStringFieldUpdateOperationsInput | string | null
    rekomendasi?: RekomendasiUpdateManyWithoutWisataNestedInput
    ulasan?: UlasanUpdateManyWithoutWisataNestedInput
    user?: UserUpdateOneRequiredWithoutWisataNestedInput
    kategori?: KategoriWisataUpdateOneRequiredWithoutWisataNestedInput
    daerah?: DaerahUpdateOneRequiredWithoutWisataNestedInput
  }

  export type WisataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_wisata?: StringFieldUpdateOperationsInput | string
    kategoriId?: IntFieldUpdateOperationsInput | number
    daerahId?: IntFieldUpdateOperationsInput | number
    alamat?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    jam_operasi?: StringFieldUpdateOperationsInput | string
    harga_tiket?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    foto_wisata?: NullableStringFieldUpdateOperationsInput | string | null
    rekomendasi?: RekomendasiUncheckedUpdateManyWithoutWisataNestedInput
    ulasan?: UlasanUncheckedUpdateManyWithoutWisataNestedInput
  }

  export type WisataCreateManyInput = {
    id?: number
    nama_wisata: string
    kategoriId: number
    daerahId: number
    alamat: string
    deskripsi: string
    jam_operasi: string
    harga_tiket: string
    tanggal: Date | string
    userId: number
    foto_wisata?: string | null
  }

  export type WisataUpdateManyMutationInput = {
    nama_wisata?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    jam_operasi?: StringFieldUpdateOperationsInput | string
    harga_tiket?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    foto_wisata?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WisataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_wisata?: StringFieldUpdateOperationsInput | string
    kategoriId?: IntFieldUpdateOperationsInput | number
    daerahId?: IntFieldUpdateOperationsInput | number
    alamat?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    jam_operasi?: StringFieldUpdateOperationsInput | string
    harga_tiket?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    foto_wisata?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KategoriWisataCreateInput = {
    nama_kategori: string
    Wisata?: WisataCreateNestedManyWithoutKategoriInput
  }

  export type KategoriWisataUncheckedCreateInput = {
    id?: number
    nama_kategori: string
    Wisata?: WisataUncheckedCreateNestedManyWithoutKategoriInput
  }

  export type KategoriWisataUpdateInput = {
    nama_kategori?: StringFieldUpdateOperationsInput | string
    Wisata?: WisataUpdateManyWithoutKategoriNestedInput
  }

  export type KategoriWisataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_kategori?: StringFieldUpdateOperationsInput | string
    Wisata?: WisataUncheckedUpdateManyWithoutKategoriNestedInput
  }

  export type KategoriWisataCreateManyInput = {
    id?: number
    nama_kategori: string
  }

  export type KategoriWisataUpdateManyMutationInput = {
    nama_kategori?: StringFieldUpdateOperationsInput | string
  }

  export type KategoriWisataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_kategori?: StringFieldUpdateOperationsInput | string
  }

  export type DaerahCreateInput = {
    nama_daerah: string
    Wisata?: WisataCreateNestedManyWithoutDaerahInput
  }

  export type DaerahUncheckedCreateInput = {
    id?: number
    nama_daerah: string
    Wisata?: WisataUncheckedCreateNestedManyWithoutDaerahInput
  }

  export type DaerahUpdateInput = {
    nama_daerah?: StringFieldUpdateOperationsInput | string
    Wisata?: WisataUpdateManyWithoutDaerahNestedInput
  }

  export type DaerahUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_daerah?: StringFieldUpdateOperationsInput | string
    Wisata?: WisataUncheckedUpdateManyWithoutDaerahNestedInput
  }

  export type DaerahCreateManyInput = {
    id?: number
    nama_daerah: string
  }

  export type DaerahUpdateManyMutationInput = {
    nama_daerah?: StringFieldUpdateOperationsInput | string
  }

  export type DaerahUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_daerah?: StringFieldUpdateOperationsInput | string
  }

  export type RekomendasiCreateInput = {
    tanggal_vote: Date | string
    user: UserCreateNestedOneWithoutRekomendasiInput
    wisata: WisataCreateNestedOneWithoutRekomendasiInput
  }

  export type RekomendasiUncheckedCreateInput = {
    id?: number
    tanggal_vote: Date | string
    userId: number
    wisataId: number
  }

  export type RekomendasiUpdateInput = {
    tanggal_vote?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRekomendasiNestedInput
    wisata?: WisataUpdateOneRequiredWithoutRekomendasiNestedInput
  }

  export type RekomendasiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal_vote?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    wisataId?: IntFieldUpdateOperationsInput | number
  }

  export type RekomendasiCreateManyInput = {
    id?: number
    tanggal_vote: Date | string
    userId: number
    wisataId: number
  }

  export type RekomendasiUpdateManyMutationInput = {
    tanggal_vote?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RekomendasiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal_vote?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    wisataId?: IntFieldUpdateOperationsInput | number
  }

  export type UlasanCreateInput = {
    tanggal_ulasan: Date | string
    judul: string
    isi_ulasan: string
    foto_ulasan: string
    user: UserCreateNestedOneWithoutUlasanInput
    wisata: WisataCreateNestedOneWithoutUlasanInput
  }

  export type UlasanUncheckedCreateInput = {
    id?: number
    userId: number
    wisataId: number
    tanggal_ulasan: Date | string
    judul: string
    isi_ulasan: string
    foto_ulasan: string
  }

  export type UlasanUpdateInput = {
    tanggal_ulasan?: DateTimeFieldUpdateOperationsInput | Date | string
    judul?: StringFieldUpdateOperationsInput | string
    isi_ulasan?: StringFieldUpdateOperationsInput | string
    foto_ulasan?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutUlasanNestedInput
    wisata?: WisataUpdateOneRequiredWithoutUlasanNestedInput
  }

  export type UlasanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    wisataId?: IntFieldUpdateOperationsInput | number
    tanggal_ulasan?: DateTimeFieldUpdateOperationsInput | Date | string
    judul?: StringFieldUpdateOperationsInput | string
    isi_ulasan?: StringFieldUpdateOperationsInput | string
    foto_ulasan?: StringFieldUpdateOperationsInput | string
  }

  export type UlasanCreateManyInput = {
    id?: number
    userId: number
    wisataId: number
    tanggal_ulasan: Date | string
    judul: string
    isi_ulasan: string
    foto_ulasan: string
  }

  export type UlasanUpdateManyMutationInput = {
    tanggal_ulasan?: DateTimeFieldUpdateOperationsInput | Date | string
    judul?: StringFieldUpdateOperationsInput | string
    isi_ulasan?: StringFieldUpdateOperationsInput | string
    foto_ulasan?: StringFieldUpdateOperationsInput | string
  }

  export type UlasanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    wisataId?: IntFieldUpdateOperationsInput | number
    tanggal_ulasan?: DateTimeFieldUpdateOperationsInput | Date | string
    judul?: StringFieldUpdateOperationsInput | string
    isi_ulasan?: StringFieldUpdateOperationsInput | string
    foto_ulasan?: StringFieldUpdateOperationsInput | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type ProfileNullableRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type WisataListRelationFilter = {
    every?: WisataWhereInput
    some?: WisataWhereInput
    none?: WisataWhereInput
  }

  export type RekomendasiListRelationFilter = {
    every?: RekomendasiWhereInput
    some?: RekomendasiWhereInput
    none?: RekomendasiWhereInput
  }

  export type UlasanListRelationFilter = {
    every?: UlasanWhereInput
    some?: UlasanWhereInput
    none?: UlasanWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WisataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RekomendasiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UlasanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    googleid?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    googleid?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    googleid?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nama?: SortOrder
    jenis_kelamin?: SortOrder
    alamat?: SortOrder
    foto_profile?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nama?: SortOrder
    jenis_kelamin?: SortOrder
    alamat?: SortOrder
    foto_profile?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nama?: SortOrder
    jenis_kelamin?: SortOrder
    alamat?: SortOrder
    foto_profile?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type KategoriWisataRelationFilter = {
    is?: KategoriWisataWhereInput
    isNot?: KategoriWisataWhereInput
  }

  export type DaerahRelationFilter = {
    is?: DaerahWhereInput
    isNot?: DaerahWhereInput
  }

  export type WisataCountOrderByAggregateInput = {
    id?: SortOrder
    nama_wisata?: SortOrder
    kategoriId?: SortOrder
    daerahId?: SortOrder
    alamat?: SortOrder
    deskripsi?: SortOrder
    jam_operasi?: SortOrder
    harga_tiket?: SortOrder
    tanggal?: SortOrder
    userId?: SortOrder
    foto_wisata?: SortOrder
  }

  export type WisataAvgOrderByAggregateInput = {
    id?: SortOrder
    kategoriId?: SortOrder
    daerahId?: SortOrder
    userId?: SortOrder
  }

  export type WisataMaxOrderByAggregateInput = {
    id?: SortOrder
    nama_wisata?: SortOrder
    kategoriId?: SortOrder
    daerahId?: SortOrder
    alamat?: SortOrder
    deskripsi?: SortOrder
    jam_operasi?: SortOrder
    harga_tiket?: SortOrder
    tanggal?: SortOrder
    userId?: SortOrder
    foto_wisata?: SortOrder
  }

  export type WisataMinOrderByAggregateInput = {
    id?: SortOrder
    nama_wisata?: SortOrder
    kategoriId?: SortOrder
    daerahId?: SortOrder
    alamat?: SortOrder
    deskripsi?: SortOrder
    jam_operasi?: SortOrder
    harga_tiket?: SortOrder
    tanggal?: SortOrder
    userId?: SortOrder
    foto_wisata?: SortOrder
  }

  export type WisataSumOrderByAggregateInput = {
    id?: SortOrder
    kategoriId?: SortOrder
    daerahId?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type KategoriWisataCountOrderByAggregateInput = {
    id?: SortOrder
    nama_kategori?: SortOrder
  }

  export type KategoriWisataAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type KategoriWisataMaxOrderByAggregateInput = {
    id?: SortOrder
    nama_kategori?: SortOrder
  }

  export type KategoriWisataMinOrderByAggregateInput = {
    id?: SortOrder
    nama_kategori?: SortOrder
  }

  export type KategoriWisataSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DaerahCountOrderByAggregateInput = {
    id?: SortOrder
    nama_daerah?: SortOrder
  }

  export type DaerahAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DaerahMaxOrderByAggregateInput = {
    id?: SortOrder
    nama_daerah?: SortOrder
  }

  export type DaerahMinOrderByAggregateInput = {
    id?: SortOrder
    nama_daerah?: SortOrder
  }

  export type DaerahSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WisataRelationFilter = {
    is?: WisataWhereInput
    isNot?: WisataWhereInput
  }

  export type RekomendasiCountOrderByAggregateInput = {
    id?: SortOrder
    tanggal_vote?: SortOrder
    userId?: SortOrder
    wisataId?: SortOrder
  }

  export type RekomendasiAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    wisataId?: SortOrder
  }

  export type RekomendasiMaxOrderByAggregateInput = {
    id?: SortOrder
    tanggal_vote?: SortOrder
    userId?: SortOrder
    wisataId?: SortOrder
  }

  export type RekomendasiMinOrderByAggregateInput = {
    id?: SortOrder
    tanggal_vote?: SortOrder
    userId?: SortOrder
    wisataId?: SortOrder
  }

  export type RekomendasiSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    wisataId?: SortOrder
  }

  export type UlasanCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    wisataId?: SortOrder
    tanggal_ulasan?: SortOrder
    judul?: SortOrder
    isi_ulasan?: SortOrder
    foto_ulasan?: SortOrder
  }

  export type UlasanAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    wisataId?: SortOrder
  }

  export type UlasanMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    wisataId?: SortOrder
    tanggal_ulasan?: SortOrder
    judul?: SortOrder
    isi_ulasan?: SortOrder
    foto_ulasan?: SortOrder
  }

  export type UlasanMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    wisataId?: SortOrder
    tanggal_ulasan?: SortOrder
    judul?: SortOrder
    isi_ulasan?: SortOrder
    foto_ulasan?: SortOrder
  }

  export type UlasanSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    wisataId?: SortOrder
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type WisataCreateNestedManyWithoutUserInput = {
    create?: XOR<WisataCreateWithoutUserInput, WisataUncheckedCreateWithoutUserInput> | WisataCreateWithoutUserInput[] | WisataUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WisataCreateOrConnectWithoutUserInput | WisataCreateOrConnectWithoutUserInput[]
    createMany?: WisataCreateManyUserInputEnvelope
    connect?: WisataWhereUniqueInput | WisataWhereUniqueInput[]
  }

  export type RekomendasiCreateNestedManyWithoutUserInput = {
    create?: XOR<RekomendasiCreateWithoutUserInput, RekomendasiUncheckedCreateWithoutUserInput> | RekomendasiCreateWithoutUserInput[] | RekomendasiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RekomendasiCreateOrConnectWithoutUserInput | RekomendasiCreateOrConnectWithoutUserInput[]
    createMany?: RekomendasiCreateManyUserInputEnvelope
    connect?: RekomendasiWhereUniqueInput | RekomendasiWhereUniqueInput[]
  }

  export type UlasanCreateNestedManyWithoutUserInput = {
    create?: XOR<UlasanCreateWithoutUserInput, UlasanUncheckedCreateWithoutUserInput> | UlasanCreateWithoutUserInput[] | UlasanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UlasanCreateOrConnectWithoutUserInput | UlasanCreateOrConnectWithoutUserInput[]
    createMany?: UlasanCreateManyUserInputEnvelope
    connect?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
  }

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type WisataUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WisataCreateWithoutUserInput, WisataUncheckedCreateWithoutUserInput> | WisataCreateWithoutUserInput[] | WisataUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WisataCreateOrConnectWithoutUserInput | WisataCreateOrConnectWithoutUserInput[]
    createMany?: WisataCreateManyUserInputEnvelope
    connect?: WisataWhereUniqueInput | WisataWhereUniqueInput[]
  }

  export type RekomendasiUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RekomendasiCreateWithoutUserInput, RekomendasiUncheckedCreateWithoutUserInput> | RekomendasiCreateWithoutUserInput[] | RekomendasiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RekomendasiCreateOrConnectWithoutUserInput | RekomendasiCreateOrConnectWithoutUserInput[]
    createMany?: RekomendasiCreateManyUserInputEnvelope
    connect?: RekomendasiWhereUniqueInput | RekomendasiWhereUniqueInput[]
  }

  export type UlasanUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UlasanCreateWithoutUserInput, UlasanUncheckedCreateWithoutUserInput> | UlasanCreateWithoutUserInput[] | UlasanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UlasanCreateOrConnectWithoutUserInput | UlasanCreateOrConnectWithoutUserInput[]
    createMany?: UlasanCreateManyUserInputEnvelope
    connect?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type WisataUpdateManyWithoutUserNestedInput = {
    create?: XOR<WisataCreateWithoutUserInput, WisataUncheckedCreateWithoutUserInput> | WisataCreateWithoutUserInput[] | WisataUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WisataCreateOrConnectWithoutUserInput | WisataCreateOrConnectWithoutUserInput[]
    upsert?: WisataUpsertWithWhereUniqueWithoutUserInput | WisataUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WisataCreateManyUserInputEnvelope
    set?: WisataWhereUniqueInput | WisataWhereUniqueInput[]
    disconnect?: WisataWhereUniqueInput | WisataWhereUniqueInput[]
    delete?: WisataWhereUniqueInput | WisataWhereUniqueInput[]
    connect?: WisataWhereUniqueInput | WisataWhereUniqueInput[]
    update?: WisataUpdateWithWhereUniqueWithoutUserInput | WisataUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WisataUpdateManyWithWhereWithoutUserInput | WisataUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WisataScalarWhereInput | WisataScalarWhereInput[]
  }

  export type RekomendasiUpdateManyWithoutUserNestedInput = {
    create?: XOR<RekomendasiCreateWithoutUserInput, RekomendasiUncheckedCreateWithoutUserInput> | RekomendasiCreateWithoutUserInput[] | RekomendasiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RekomendasiCreateOrConnectWithoutUserInput | RekomendasiCreateOrConnectWithoutUserInput[]
    upsert?: RekomendasiUpsertWithWhereUniqueWithoutUserInput | RekomendasiUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RekomendasiCreateManyUserInputEnvelope
    set?: RekomendasiWhereUniqueInput | RekomendasiWhereUniqueInput[]
    disconnect?: RekomendasiWhereUniqueInput | RekomendasiWhereUniqueInput[]
    delete?: RekomendasiWhereUniqueInput | RekomendasiWhereUniqueInput[]
    connect?: RekomendasiWhereUniqueInput | RekomendasiWhereUniqueInput[]
    update?: RekomendasiUpdateWithWhereUniqueWithoutUserInput | RekomendasiUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RekomendasiUpdateManyWithWhereWithoutUserInput | RekomendasiUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RekomendasiScalarWhereInput | RekomendasiScalarWhereInput[]
  }

  export type UlasanUpdateManyWithoutUserNestedInput = {
    create?: XOR<UlasanCreateWithoutUserInput, UlasanUncheckedCreateWithoutUserInput> | UlasanCreateWithoutUserInput[] | UlasanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UlasanCreateOrConnectWithoutUserInput | UlasanCreateOrConnectWithoutUserInput[]
    upsert?: UlasanUpsertWithWhereUniqueWithoutUserInput | UlasanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UlasanCreateManyUserInputEnvelope
    set?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    disconnect?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    delete?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    connect?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    update?: UlasanUpdateWithWhereUniqueWithoutUserInput | UlasanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UlasanUpdateManyWithWhereWithoutUserInput | UlasanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UlasanScalarWhereInput | UlasanScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type WisataUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WisataCreateWithoutUserInput, WisataUncheckedCreateWithoutUserInput> | WisataCreateWithoutUserInput[] | WisataUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WisataCreateOrConnectWithoutUserInput | WisataCreateOrConnectWithoutUserInput[]
    upsert?: WisataUpsertWithWhereUniqueWithoutUserInput | WisataUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WisataCreateManyUserInputEnvelope
    set?: WisataWhereUniqueInput | WisataWhereUniqueInput[]
    disconnect?: WisataWhereUniqueInput | WisataWhereUniqueInput[]
    delete?: WisataWhereUniqueInput | WisataWhereUniqueInput[]
    connect?: WisataWhereUniqueInput | WisataWhereUniqueInput[]
    update?: WisataUpdateWithWhereUniqueWithoutUserInput | WisataUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WisataUpdateManyWithWhereWithoutUserInput | WisataUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WisataScalarWhereInput | WisataScalarWhereInput[]
  }

  export type RekomendasiUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RekomendasiCreateWithoutUserInput, RekomendasiUncheckedCreateWithoutUserInput> | RekomendasiCreateWithoutUserInput[] | RekomendasiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RekomendasiCreateOrConnectWithoutUserInput | RekomendasiCreateOrConnectWithoutUserInput[]
    upsert?: RekomendasiUpsertWithWhereUniqueWithoutUserInput | RekomendasiUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RekomendasiCreateManyUserInputEnvelope
    set?: RekomendasiWhereUniqueInput | RekomendasiWhereUniqueInput[]
    disconnect?: RekomendasiWhereUniqueInput | RekomendasiWhereUniqueInput[]
    delete?: RekomendasiWhereUniqueInput | RekomendasiWhereUniqueInput[]
    connect?: RekomendasiWhereUniqueInput | RekomendasiWhereUniqueInput[]
    update?: RekomendasiUpdateWithWhereUniqueWithoutUserInput | RekomendasiUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RekomendasiUpdateManyWithWhereWithoutUserInput | RekomendasiUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RekomendasiScalarWhereInput | RekomendasiScalarWhereInput[]
  }

  export type UlasanUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UlasanCreateWithoutUserInput, UlasanUncheckedCreateWithoutUserInput> | UlasanCreateWithoutUserInput[] | UlasanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UlasanCreateOrConnectWithoutUserInput | UlasanCreateOrConnectWithoutUserInput[]
    upsert?: UlasanUpsertWithWhereUniqueWithoutUserInput | UlasanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UlasanCreateManyUserInputEnvelope
    set?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    disconnect?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    delete?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    connect?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    update?: UlasanUpdateWithWhereUniqueWithoutUserInput | UlasanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UlasanUpdateManyWithWhereWithoutUserInput | UlasanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UlasanScalarWhereInput | UlasanScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type RekomendasiCreateNestedManyWithoutWisataInput = {
    create?: XOR<RekomendasiCreateWithoutWisataInput, RekomendasiUncheckedCreateWithoutWisataInput> | RekomendasiCreateWithoutWisataInput[] | RekomendasiUncheckedCreateWithoutWisataInput[]
    connectOrCreate?: RekomendasiCreateOrConnectWithoutWisataInput | RekomendasiCreateOrConnectWithoutWisataInput[]
    createMany?: RekomendasiCreateManyWisataInputEnvelope
    connect?: RekomendasiWhereUniqueInput | RekomendasiWhereUniqueInput[]
  }

  export type UlasanCreateNestedManyWithoutWisataInput = {
    create?: XOR<UlasanCreateWithoutWisataInput, UlasanUncheckedCreateWithoutWisataInput> | UlasanCreateWithoutWisataInput[] | UlasanUncheckedCreateWithoutWisataInput[]
    connectOrCreate?: UlasanCreateOrConnectWithoutWisataInput | UlasanCreateOrConnectWithoutWisataInput[]
    createMany?: UlasanCreateManyWisataInputEnvelope
    connect?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutWisataInput = {
    create?: XOR<UserCreateWithoutWisataInput, UserUncheckedCreateWithoutWisataInput>
    connectOrCreate?: UserCreateOrConnectWithoutWisataInput
    connect?: UserWhereUniqueInput
  }

  export type KategoriWisataCreateNestedOneWithoutWisataInput = {
    create?: XOR<KategoriWisataCreateWithoutWisataInput, KategoriWisataUncheckedCreateWithoutWisataInput>
    connectOrCreate?: KategoriWisataCreateOrConnectWithoutWisataInput
    connect?: KategoriWisataWhereUniqueInput
  }

  export type DaerahCreateNestedOneWithoutWisataInput = {
    create?: XOR<DaerahCreateWithoutWisataInput, DaerahUncheckedCreateWithoutWisataInput>
    connectOrCreate?: DaerahCreateOrConnectWithoutWisataInput
    connect?: DaerahWhereUniqueInput
  }

  export type RekomendasiUncheckedCreateNestedManyWithoutWisataInput = {
    create?: XOR<RekomendasiCreateWithoutWisataInput, RekomendasiUncheckedCreateWithoutWisataInput> | RekomendasiCreateWithoutWisataInput[] | RekomendasiUncheckedCreateWithoutWisataInput[]
    connectOrCreate?: RekomendasiCreateOrConnectWithoutWisataInput | RekomendasiCreateOrConnectWithoutWisataInput[]
    createMany?: RekomendasiCreateManyWisataInputEnvelope
    connect?: RekomendasiWhereUniqueInput | RekomendasiWhereUniqueInput[]
  }

  export type UlasanUncheckedCreateNestedManyWithoutWisataInput = {
    create?: XOR<UlasanCreateWithoutWisataInput, UlasanUncheckedCreateWithoutWisataInput> | UlasanCreateWithoutWisataInput[] | UlasanUncheckedCreateWithoutWisataInput[]
    connectOrCreate?: UlasanCreateOrConnectWithoutWisataInput | UlasanCreateOrConnectWithoutWisataInput[]
    createMany?: UlasanCreateManyWisataInputEnvelope
    connect?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RekomendasiUpdateManyWithoutWisataNestedInput = {
    create?: XOR<RekomendasiCreateWithoutWisataInput, RekomendasiUncheckedCreateWithoutWisataInput> | RekomendasiCreateWithoutWisataInput[] | RekomendasiUncheckedCreateWithoutWisataInput[]
    connectOrCreate?: RekomendasiCreateOrConnectWithoutWisataInput | RekomendasiCreateOrConnectWithoutWisataInput[]
    upsert?: RekomendasiUpsertWithWhereUniqueWithoutWisataInput | RekomendasiUpsertWithWhereUniqueWithoutWisataInput[]
    createMany?: RekomendasiCreateManyWisataInputEnvelope
    set?: RekomendasiWhereUniqueInput | RekomendasiWhereUniqueInput[]
    disconnect?: RekomendasiWhereUniqueInput | RekomendasiWhereUniqueInput[]
    delete?: RekomendasiWhereUniqueInput | RekomendasiWhereUniqueInput[]
    connect?: RekomendasiWhereUniqueInput | RekomendasiWhereUniqueInput[]
    update?: RekomendasiUpdateWithWhereUniqueWithoutWisataInput | RekomendasiUpdateWithWhereUniqueWithoutWisataInput[]
    updateMany?: RekomendasiUpdateManyWithWhereWithoutWisataInput | RekomendasiUpdateManyWithWhereWithoutWisataInput[]
    deleteMany?: RekomendasiScalarWhereInput | RekomendasiScalarWhereInput[]
  }

  export type UlasanUpdateManyWithoutWisataNestedInput = {
    create?: XOR<UlasanCreateWithoutWisataInput, UlasanUncheckedCreateWithoutWisataInput> | UlasanCreateWithoutWisataInput[] | UlasanUncheckedCreateWithoutWisataInput[]
    connectOrCreate?: UlasanCreateOrConnectWithoutWisataInput | UlasanCreateOrConnectWithoutWisataInput[]
    upsert?: UlasanUpsertWithWhereUniqueWithoutWisataInput | UlasanUpsertWithWhereUniqueWithoutWisataInput[]
    createMany?: UlasanCreateManyWisataInputEnvelope
    set?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    disconnect?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    delete?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    connect?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    update?: UlasanUpdateWithWhereUniqueWithoutWisataInput | UlasanUpdateWithWhereUniqueWithoutWisataInput[]
    updateMany?: UlasanUpdateManyWithWhereWithoutWisataInput | UlasanUpdateManyWithWhereWithoutWisataInput[]
    deleteMany?: UlasanScalarWhereInput | UlasanScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutWisataNestedInput = {
    create?: XOR<UserCreateWithoutWisataInput, UserUncheckedCreateWithoutWisataInput>
    connectOrCreate?: UserCreateOrConnectWithoutWisataInput
    upsert?: UserUpsertWithoutWisataInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWisataInput, UserUpdateWithoutWisataInput>, UserUncheckedUpdateWithoutWisataInput>
  }

  export type KategoriWisataUpdateOneRequiredWithoutWisataNestedInput = {
    create?: XOR<KategoriWisataCreateWithoutWisataInput, KategoriWisataUncheckedCreateWithoutWisataInput>
    connectOrCreate?: KategoriWisataCreateOrConnectWithoutWisataInput
    upsert?: KategoriWisataUpsertWithoutWisataInput
    connect?: KategoriWisataWhereUniqueInput
    update?: XOR<XOR<KategoriWisataUpdateToOneWithWhereWithoutWisataInput, KategoriWisataUpdateWithoutWisataInput>, KategoriWisataUncheckedUpdateWithoutWisataInput>
  }

  export type DaerahUpdateOneRequiredWithoutWisataNestedInput = {
    create?: XOR<DaerahCreateWithoutWisataInput, DaerahUncheckedCreateWithoutWisataInput>
    connectOrCreate?: DaerahCreateOrConnectWithoutWisataInput
    upsert?: DaerahUpsertWithoutWisataInput
    connect?: DaerahWhereUniqueInput
    update?: XOR<XOR<DaerahUpdateToOneWithWhereWithoutWisataInput, DaerahUpdateWithoutWisataInput>, DaerahUncheckedUpdateWithoutWisataInput>
  }

  export type RekomendasiUncheckedUpdateManyWithoutWisataNestedInput = {
    create?: XOR<RekomendasiCreateWithoutWisataInput, RekomendasiUncheckedCreateWithoutWisataInput> | RekomendasiCreateWithoutWisataInput[] | RekomendasiUncheckedCreateWithoutWisataInput[]
    connectOrCreate?: RekomendasiCreateOrConnectWithoutWisataInput | RekomendasiCreateOrConnectWithoutWisataInput[]
    upsert?: RekomendasiUpsertWithWhereUniqueWithoutWisataInput | RekomendasiUpsertWithWhereUniqueWithoutWisataInput[]
    createMany?: RekomendasiCreateManyWisataInputEnvelope
    set?: RekomendasiWhereUniqueInput | RekomendasiWhereUniqueInput[]
    disconnect?: RekomendasiWhereUniqueInput | RekomendasiWhereUniqueInput[]
    delete?: RekomendasiWhereUniqueInput | RekomendasiWhereUniqueInput[]
    connect?: RekomendasiWhereUniqueInput | RekomendasiWhereUniqueInput[]
    update?: RekomendasiUpdateWithWhereUniqueWithoutWisataInput | RekomendasiUpdateWithWhereUniqueWithoutWisataInput[]
    updateMany?: RekomendasiUpdateManyWithWhereWithoutWisataInput | RekomendasiUpdateManyWithWhereWithoutWisataInput[]
    deleteMany?: RekomendasiScalarWhereInput | RekomendasiScalarWhereInput[]
  }

  export type UlasanUncheckedUpdateManyWithoutWisataNestedInput = {
    create?: XOR<UlasanCreateWithoutWisataInput, UlasanUncheckedCreateWithoutWisataInput> | UlasanCreateWithoutWisataInput[] | UlasanUncheckedCreateWithoutWisataInput[]
    connectOrCreate?: UlasanCreateOrConnectWithoutWisataInput | UlasanCreateOrConnectWithoutWisataInput[]
    upsert?: UlasanUpsertWithWhereUniqueWithoutWisataInput | UlasanUpsertWithWhereUniqueWithoutWisataInput[]
    createMany?: UlasanCreateManyWisataInputEnvelope
    set?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    disconnect?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    delete?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    connect?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    update?: UlasanUpdateWithWhereUniqueWithoutWisataInput | UlasanUpdateWithWhereUniqueWithoutWisataInput[]
    updateMany?: UlasanUpdateManyWithWhereWithoutWisataInput | UlasanUpdateManyWithWhereWithoutWisataInput[]
    deleteMany?: UlasanScalarWhereInput | UlasanScalarWhereInput[]
  }

  export type WisataCreateNestedManyWithoutKategoriInput = {
    create?: XOR<WisataCreateWithoutKategoriInput, WisataUncheckedCreateWithoutKategoriInput> | WisataCreateWithoutKategoriInput[] | WisataUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: WisataCreateOrConnectWithoutKategoriInput | WisataCreateOrConnectWithoutKategoriInput[]
    createMany?: WisataCreateManyKategoriInputEnvelope
    connect?: WisataWhereUniqueInput | WisataWhereUniqueInput[]
  }

  export type WisataUncheckedCreateNestedManyWithoutKategoriInput = {
    create?: XOR<WisataCreateWithoutKategoriInput, WisataUncheckedCreateWithoutKategoriInput> | WisataCreateWithoutKategoriInput[] | WisataUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: WisataCreateOrConnectWithoutKategoriInput | WisataCreateOrConnectWithoutKategoriInput[]
    createMany?: WisataCreateManyKategoriInputEnvelope
    connect?: WisataWhereUniqueInput | WisataWhereUniqueInput[]
  }

  export type WisataUpdateManyWithoutKategoriNestedInput = {
    create?: XOR<WisataCreateWithoutKategoriInput, WisataUncheckedCreateWithoutKategoriInput> | WisataCreateWithoutKategoriInput[] | WisataUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: WisataCreateOrConnectWithoutKategoriInput | WisataCreateOrConnectWithoutKategoriInput[]
    upsert?: WisataUpsertWithWhereUniqueWithoutKategoriInput | WisataUpsertWithWhereUniqueWithoutKategoriInput[]
    createMany?: WisataCreateManyKategoriInputEnvelope
    set?: WisataWhereUniqueInput | WisataWhereUniqueInput[]
    disconnect?: WisataWhereUniqueInput | WisataWhereUniqueInput[]
    delete?: WisataWhereUniqueInput | WisataWhereUniqueInput[]
    connect?: WisataWhereUniqueInput | WisataWhereUniqueInput[]
    update?: WisataUpdateWithWhereUniqueWithoutKategoriInput | WisataUpdateWithWhereUniqueWithoutKategoriInput[]
    updateMany?: WisataUpdateManyWithWhereWithoutKategoriInput | WisataUpdateManyWithWhereWithoutKategoriInput[]
    deleteMany?: WisataScalarWhereInput | WisataScalarWhereInput[]
  }

  export type WisataUncheckedUpdateManyWithoutKategoriNestedInput = {
    create?: XOR<WisataCreateWithoutKategoriInput, WisataUncheckedCreateWithoutKategoriInput> | WisataCreateWithoutKategoriInput[] | WisataUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: WisataCreateOrConnectWithoutKategoriInput | WisataCreateOrConnectWithoutKategoriInput[]
    upsert?: WisataUpsertWithWhereUniqueWithoutKategoriInput | WisataUpsertWithWhereUniqueWithoutKategoriInput[]
    createMany?: WisataCreateManyKategoriInputEnvelope
    set?: WisataWhereUniqueInput | WisataWhereUniqueInput[]
    disconnect?: WisataWhereUniqueInput | WisataWhereUniqueInput[]
    delete?: WisataWhereUniqueInput | WisataWhereUniqueInput[]
    connect?: WisataWhereUniqueInput | WisataWhereUniqueInput[]
    update?: WisataUpdateWithWhereUniqueWithoutKategoriInput | WisataUpdateWithWhereUniqueWithoutKategoriInput[]
    updateMany?: WisataUpdateManyWithWhereWithoutKategoriInput | WisataUpdateManyWithWhereWithoutKategoriInput[]
    deleteMany?: WisataScalarWhereInput | WisataScalarWhereInput[]
  }

  export type WisataCreateNestedManyWithoutDaerahInput = {
    create?: XOR<WisataCreateWithoutDaerahInput, WisataUncheckedCreateWithoutDaerahInput> | WisataCreateWithoutDaerahInput[] | WisataUncheckedCreateWithoutDaerahInput[]
    connectOrCreate?: WisataCreateOrConnectWithoutDaerahInput | WisataCreateOrConnectWithoutDaerahInput[]
    createMany?: WisataCreateManyDaerahInputEnvelope
    connect?: WisataWhereUniqueInput | WisataWhereUniqueInput[]
  }

  export type WisataUncheckedCreateNestedManyWithoutDaerahInput = {
    create?: XOR<WisataCreateWithoutDaerahInput, WisataUncheckedCreateWithoutDaerahInput> | WisataCreateWithoutDaerahInput[] | WisataUncheckedCreateWithoutDaerahInput[]
    connectOrCreate?: WisataCreateOrConnectWithoutDaerahInput | WisataCreateOrConnectWithoutDaerahInput[]
    createMany?: WisataCreateManyDaerahInputEnvelope
    connect?: WisataWhereUniqueInput | WisataWhereUniqueInput[]
  }

  export type WisataUpdateManyWithoutDaerahNestedInput = {
    create?: XOR<WisataCreateWithoutDaerahInput, WisataUncheckedCreateWithoutDaerahInput> | WisataCreateWithoutDaerahInput[] | WisataUncheckedCreateWithoutDaerahInput[]
    connectOrCreate?: WisataCreateOrConnectWithoutDaerahInput | WisataCreateOrConnectWithoutDaerahInput[]
    upsert?: WisataUpsertWithWhereUniqueWithoutDaerahInput | WisataUpsertWithWhereUniqueWithoutDaerahInput[]
    createMany?: WisataCreateManyDaerahInputEnvelope
    set?: WisataWhereUniqueInput | WisataWhereUniqueInput[]
    disconnect?: WisataWhereUniqueInput | WisataWhereUniqueInput[]
    delete?: WisataWhereUniqueInput | WisataWhereUniqueInput[]
    connect?: WisataWhereUniqueInput | WisataWhereUniqueInput[]
    update?: WisataUpdateWithWhereUniqueWithoutDaerahInput | WisataUpdateWithWhereUniqueWithoutDaerahInput[]
    updateMany?: WisataUpdateManyWithWhereWithoutDaerahInput | WisataUpdateManyWithWhereWithoutDaerahInput[]
    deleteMany?: WisataScalarWhereInput | WisataScalarWhereInput[]
  }

  export type WisataUncheckedUpdateManyWithoutDaerahNestedInput = {
    create?: XOR<WisataCreateWithoutDaerahInput, WisataUncheckedCreateWithoutDaerahInput> | WisataCreateWithoutDaerahInput[] | WisataUncheckedCreateWithoutDaerahInput[]
    connectOrCreate?: WisataCreateOrConnectWithoutDaerahInput | WisataCreateOrConnectWithoutDaerahInput[]
    upsert?: WisataUpsertWithWhereUniqueWithoutDaerahInput | WisataUpsertWithWhereUniqueWithoutDaerahInput[]
    createMany?: WisataCreateManyDaerahInputEnvelope
    set?: WisataWhereUniqueInput | WisataWhereUniqueInput[]
    disconnect?: WisataWhereUniqueInput | WisataWhereUniqueInput[]
    delete?: WisataWhereUniqueInput | WisataWhereUniqueInput[]
    connect?: WisataWhereUniqueInput | WisataWhereUniqueInput[]
    update?: WisataUpdateWithWhereUniqueWithoutDaerahInput | WisataUpdateWithWhereUniqueWithoutDaerahInput[]
    updateMany?: WisataUpdateManyWithWhereWithoutDaerahInput | WisataUpdateManyWithWhereWithoutDaerahInput[]
    deleteMany?: WisataScalarWhereInput | WisataScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRekomendasiInput = {
    create?: XOR<UserCreateWithoutRekomendasiInput, UserUncheckedCreateWithoutRekomendasiInput>
    connectOrCreate?: UserCreateOrConnectWithoutRekomendasiInput
    connect?: UserWhereUniqueInput
  }

  export type WisataCreateNestedOneWithoutRekomendasiInput = {
    create?: XOR<WisataCreateWithoutRekomendasiInput, WisataUncheckedCreateWithoutRekomendasiInput>
    connectOrCreate?: WisataCreateOrConnectWithoutRekomendasiInput
    connect?: WisataWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRekomendasiNestedInput = {
    create?: XOR<UserCreateWithoutRekomendasiInput, UserUncheckedCreateWithoutRekomendasiInput>
    connectOrCreate?: UserCreateOrConnectWithoutRekomendasiInput
    upsert?: UserUpsertWithoutRekomendasiInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRekomendasiInput, UserUpdateWithoutRekomendasiInput>, UserUncheckedUpdateWithoutRekomendasiInput>
  }

  export type WisataUpdateOneRequiredWithoutRekomendasiNestedInput = {
    create?: XOR<WisataCreateWithoutRekomendasiInput, WisataUncheckedCreateWithoutRekomendasiInput>
    connectOrCreate?: WisataCreateOrConnectWithoutRekomendasiInput
    upsert?: WisataUpsertWithoutRekomendasiInput
    connect?: WisataWhereUniqueInput
    update?: XOR<XOR<WisataUpdateToOneWithWhereWithoutRekomendasiInput, WisataUpdateWithoutRekomendasiInput>, WisataUncheckedUpdateWithoutRekomendasiInput>
  }

  export type UserCreateNestedOneWithoutUlasanInput = {
    create?: XOR<UserCreateWithoutUlasanInput, UserUncheckedCreateWithoutUlasanInput>
    connectOrCreate?: UserCreateOrConnectWithoutUlasanInput
    connect?: UserWhereUniqueInput
  }

  export type WisataCreateNestedOneWithoutUlasanInput = {
    create?: XOR<WisataCreateWithoutUlasanInput, WisataUncheckedCreateWithoutUlasanInput>
    connectOrCreate?: WisataCreateOrConnectWithoutUlasanInput
    connect?: WisataWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUlasanNestedInput = {
    create?: XOR<UserCreateWithoutUlasanInput, UserUncheckedCreateWithoutUlasanInput>
    connectOrCreate?: UserCreateOrConnectWithoutUlasanInput
    upsert?: UserUpsertWithoutUlasanInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUlasanInput, UserUpdateWithoutUlasanInput>, UserUncheckedUpdateWithoutUlasanInput>
  }

  export type WisataUpdateOneRequiredWithoutUlasanNestedInput = {
    create?: XOR<WisataCreateWithoutUlasanInput, WisataUncheckedCreateWithoutUlasanInput>
    connectOrCreate?: WisataCreateOrConnectWithoutUlasanInput
    upsert?: WisataUpsertWithoutUlasanInput
    connect?: WisataWhereUniqueInput
    update?: XOR<XOR<WisataUpdateToOneWithWhereWithoutUlasanInput, WisataUpdateWithoutUlasanInput>, WisataUncheckedUpdateWithoutUlasanInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ProfileCreateWithoutUserInput = {
    nama?: string | null
    jenis_kelamin?: string | null
    alamat?: string | null
    foto_profile?: string | null
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: number
    nama?: string | null
    jenis_kelamin?: string | null
    alamat?: string | null
    foto_profile?: string | null
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type WisataCreateWithoutUserInput = {
    nama_wisata: string
    alamat: string
    deskripsi: string
    jam_operasi: string
    harga_tiket: string
    tanggal: Date | string
    foto_wisata?: string | null
    rekomendasi?: RekomendasiCreateNestedManyWithoutWisataInput
    ulasan?: UlasanCreateNestedManyWithoutWisataInput
    kategori: KategoriWisataCreateNestedOneWithoutWisataInput
    daerah: DaerahCreateNestedOneWithoutWisataInput
  }

  export type WisataUncheckedCreateWithoutUserInput = {
    id?: number
    nama_wisata: string
    kategoriId: number
    daerahId: number
    alamat: string
    deskripsi: string
    jam_operasi: string
    harga_tiket: string
    tanggal: Date | string
    foto_wisata?: string | null
    rekomendasi?: RekomendasiUncheckedCreateNestedManyWithoutWisataInput
    ulasan?: UlasanUncheckedCreateNestedManyWithoutWisataInput
  }

  export type WisataCreateOrConnectWithoutUserInput = {
    where: WisataWhereUniqueInput
    create: XOR<WisataCreateWithoutUserInput, WisataUncheckedCreateWithoutUserInput>
  }

  export type WisataCreateManyUserInputEnvelope = {
    data: WisataCreateManyUserInput | WisataCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RekomendasiCreateWithoutUserInput = {
    tanggal_vote: Date | string
    wisata: WisataCreateNestedOneWithoutRekomendasiInput
  }

  export type RekomendasiUncheckedCreateWithoutUserInput = {
    id?: number
    tanggal_vote: Date | string
    wisataId: number
  }

  export type RekomendasiCreateOrConnectWithoutUserInput = {
    where: RekomendasiWhereUniqueInput
    create: XOR<RekomendasiCreateWithoutUserInput, RekomendasiUncheckedCreateWithoutUserInput>
  }

  export type RekomendasiCreateManyUserInputEnvelope = {
    data: RekomendasiCreateManyUserInput | RekomendasiCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UlasanCreateWithoutUserInput = {
    tanggal_ulasan: Date | string
    judul: string
    isi_ulasan: string
    foto_ulasan: string
    wisata: WisataCreateNestedOneWithoutUlasanInput
  }

  export type UlasanUncheckedCreateWithoutUserInput = {
    id?: number
    wisataId: number
    tanggal_ulasan: Date | string
    judul: string
    isi_ulasan: string
    foto_ulasan: string
  }

  export type UlasanCreateOrConnectWithoutUserInput = {
    where: UlasanWhereUniqueInput
    create: XOR<UlasanCreateWithoutUserInput, UlasanUncheckedCreateWithoutUserInput>
  }

  export type UlasanCreateManyUserInputEnvelope = {
    data: UlasanCreateManyUserInput | UlasanCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    jenis_kelamin?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    foto_profile?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    jenis_kelamin?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    foto_profile?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WisataUpsertWithWhereUniqueWithoutUserInput = {
    where: WisataWhereUniqueInput
    update: XOR<WisataUpdateWithoutUserInput, WisataUncheckedUpdateWithoutUserInput>
    create: XOR<WisataCreateWithoutUserInput, WisataUncheckedCreateWithoutUserInput>
  }

  export type WisataUpdateWithWhereUniqueWithoutUserInput = {
    where: WisataWhereUniqueInput
    data: XOR<WisataUpdateWithoutUserInput, WisataUncheckedUpdateWithoutUserInput>
  }

  export type WisataUpdateManyWithWhereWithoutUserInput = {
    where: WisataScalarWhereInput
    data: XOR<WisataUpdateManyMutationInput, WisataUncheckedUpdateManyWithoutUserInput>
  }

  export type WisataScalarWhereInput = {
    AND?: WisataScalarWhereInput | WisataScalarWhereInput[]
    OR?: WisataScalarWhereInput[]
    NOT?: WisataScalarWhereInput | WisataScalarWhereInput[]
    id?: IntFilter<"Wisata"> | number
    nama_wisata?: StringFilter<"Wisata"> | string
    kategoriId?: IntFilter<"Wisata"> | number
    daerahId?: IntFilter<"Wisata"> | number
    alamat?: StringFilter<"Wisata"> | string
    deskripsi?: StringFilter<"Wisata"> | string
    jam_operasi?: StringFilter<"Wisata"> | string
    harga_tiket?: StringFilter<"Wisata"> | string
    tanggal?: DateTimeFilter<"Wisata"> | Date | string
    userId?: IntFilter<"Wisata"> | number
    foto_wisata?: StringNullableFilter<"Wisata"> | string | null
  }

  export type RekomendasiUpsertWithWhereUniqueWithoutUserInput = {
    where: RekomendasiWhereUniqueInput
    update: XOR<RekomendasiUpdateWithoutUserInput, RekomendasiUncheckedUpdateWithoutUserInput>
    create: XOR<RekomendasiCreateWithoutUserInput, RekomendasiUncheckedCreateWithoutUserInput>
  }

  export type RekomendasiUpdateWithWhereUniqueWithoutUserInput = {
    where: RekomendasiWhereUniqueInput
    data: XOR<RekomendasiUpdateWithoutUserInput, RekomendasiUncheckedUpdateWithoutUserInput>
  }

  export type RekomendasiUpdateManyWithWhereWithoutUserInput = {
    where: RekomendasiScalarWhereInput
    data: XOR<RekomendasiUpdateManyMutationInput, RekomendasiUncheckedUpdateManyWithoutUserInput>
  }

  export type RekomendasiScalarWhereInput = {
    AND?: RekomendasiScalarWhereInput | RekomendasiScalarWhereInput[]
    OR?: RekomendasiScalarWhereInput[]
    NOT?: RekomendasiScalarWhereInput | RekomendasiScalarWhereInput[]
    id?: IntFilter<"Rekomendasi"> | number
    tanggal_vote?: DateTimeFilter<"Rekomendasi"> | Date | string
    userId?: IntFilter<"Rekomendasi"> | number
    wisataId?: IntFilter<"Rekomendasi"> | number
  }

  export type UlasanUpsertWithWhereUniqueWithoutUserInput = {
    where: UlasanWhereUniqueInput
    update: XOR<UlasanUpdateWithoutUserInput, UlasanUncheckedUpdateWithoutUserInput>
    create: XOR<UlasanCreateWithoutUserInput, UlasanUncheckedCreateWithoutUserInput>
  }

  export type UlasanUpdateWithWhereUniqueWithoutUserInput = {
    where: UlasanWhereUniqueInput
    data: XOR<UlasanUpdateWithoutUserInput, UlasanUncheckedUpdateWithoutUserInput>
  }

  export type UlasanUpdateManyWithWhereWithoutUserInput = {
    where: UlasanScalarWhereInput
    data: XOR<UlasanUpdateManyMutationInput, UlasanUncheckedUpdateManyWithoutUserInput>
  }

  export type UlasanScalarWhereInput = {
    AND?: UlasanScalarWhereInput | UlasanScalarWhereInput[]
    OR?: UlasanScalarWhereInput[]
    NOT?: UlasanScalarWhereInput | UlasanScalarWhereInput[]
    id?: IntFilter<"Ulasan"> | number
    userId?: IntFilter<"Ulasan"> | number
    wisataId?: IntFilter<"Ulasan"> | number
    tanggal_ulasan?: DateTimeFilter<"Ulasan"> | Date | string
    judul?: StringFilter<"Ulasan"> | string
    isi_ulasan?: StringFilter<"Ulasan"> | string
    foto_ulasan?: StringFilter<"Ulasan"> | string
  }

  export type UserCreateWithoutProfileInput = {
    email: string
    password?: string | null
    googleid?: string | null
    role: $Enums.Role
    wisata?: WisataCreateNestedManyWithoutUserInput
    rekomendasi?: RekomendasiCreateNestedManyWithoutUserInput
    ulasan?: UlasanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: number
    email: string
    password?: string | null
    googleid?: string | null
    role: $Enums.Role
    wisata?: WisataUncheckedCreateNestedManyWithoutUserInput
    rekomendasi?: RekomendasiUncheckedCreateNestedManyWithoutUserInput
    ulasan?: UlasanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleid?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    wisata?: WisataUpdateManyWithoutUserNestedInput
    rekomendasi?: RekomendasiUpdateManyWithoutUserNestedInput
    ulasan?: UlasanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleid?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    wisata?: WisataUncheckedUpdateManyWithoutUserNestedInput
    rekomendasi?: RekomendasiUncheckedUpdateManyWithoutUserNestedInput
    ulasan?: UlasanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RekomendasiCreateWithoutWisataInput = {
    tanggal_vote: Date | string
    user: UserCreateNestedOneWithoutRekomendasiInput
  }

  export type RekomendasiUncheckedCreateWithoutWisataInput = {
    id?: number
    tanggal_vote: Date | string
    userId: number
  }

  export type RekomendasiCreateOrConnectWithoutWisataInput = {
    where: RekomendasiWhereUniqueInput
    create: XOR<RekomendasiCreateWithoutWisataInput, RekomendasiUncheckedCreateWithoutWisataInput>
  }

  export type RekomendasiCreateManyWisataInputEnvelope = {
    data: RekomendasiCreateManyWisataInput | RekomendasiCreateManyWisataInput[]
    skipDuplicates?: boolean
  }

  export type UlasanCreateWithoutWisataInput = {
    tanggal_ulasan: Date | string
    judul: string
    isi_ulasan: string
    foto_ulasan: string
    user: UserCreateNestedOneWithoutUlasanInput
  }

  export type UlasanUncheckedCreateWithoutWisataInput = {
    id?: number
    userId: number
    tanggal_ulasan: Date | string
    judul: string
    isi_ulasan: string
    foto_ulasan: string
  }

  export type UlasanCreateOrConnectWithoutWisataInput = {
    where: UlasanWhereUniqueInput
    create: XOR<UlasanCreateWithoutWisataInput, UlasanUncheckedCreateWithoutWisataInput>
  }

  export type UlasanCreateManyWisataInputEnvelope = {
    data: UlasanCreateManyWisataInput | UlasanCreateManyWisataInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutWisataInput = {
    email: string
    password?: string | null
    googleid?: string | null
    role: $Enums.Role
    profile?: ProfileCreateNestedOneWithoutUserInput
    rekomendasi?: RekomendasiCreateNestedManyWithoutUserInput
    ulasan?: UlasanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWisataInput = {
    id?: number
    email: string
    password?: string | null
    googleid?: string | null
    role: $Enums.Role
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    rekomendasi?: RekomendasiUncheckedCreateNestedManyWithoutUserInput
    ulasan?: UlasanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWisataInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWisataInput, UserUncheckedCreateWithoutWisataInput>
  }

  export type KategoriWisataCreateWithoutWisataInput = {
    nama_kategori: string
  }

  export type KategoriWisataUncheckedCreateWithoutWisataInput = {
    id?: number
    nama_kategori: string
  }

  export type KategoriWisataCreateOrConnectWithoutWisataInput = {
    where: KategoriWisataWhereUniqueInput
    create: XOR<KategoriWisataCreateWithoutWisataInput, KategoriWisataUncheckedCreateWithoutWisataInput>
  }

  export type DaerahCreateWithoutWisataInput = {
    nama_daerah: string
  }

  export type DaerahUncheckedCreateWithoutWisataInput = {
    id?: number
    nama_daerah: string
  }

  export type DaerahCreateOrConnectWithoutWisataInput = {
    where: DaerahWhereUniqueInput
    create: XOR<DaerahCreateWithoutWisataInput, DaerahUncheckedCreateWithoutWisataInput>
  }

  export type RekomendasiUpsertWithWhereUniqueWithoutWisataInput = {
    where: RekomendasiWhereUniqueInput
    update: XOR<RekomendasiUpdateWithoutWisataInput, RekomendasiUncheckedUpdateWithoutWisataInput>
    create: XOR<RekomendasiCreateWithoutWisataInput, RekomendasiUncheckedCreateWithoutWisataInput>
  }

  export type RekomendasiUpdateWithWhereUniqueWithoutWisataInput = {
    where: RekomendasiWhereUniqueInput
    data: XOR<RekomendasiUpdateWithoutWisataInput, RekomendasiUncheckedUpdateWithoutWisataInput>
  }

  export type RekomendasiUpdateManyWithWhereWithoutWisataInput = {
    where: RekomendasiScalarWhereInput
    data: XOR<RekomendasiUpdateManyMutationInput, RekomendasiUncheckedUpdateManyWithoutWisataInput>
  }

  export type UlasanUpsertWithWhereUniqueWithoutWisataInput = {
    where: UlasanWhereUniqueInput
    update: XOR<UlasanUpdateWithoutWisataInput, UlasanUncheckedUpdateWithoutWisataInput>
    create: XOR<UlasanCreateWithoutWisataInput, UlasanUncheckedCreateWithoutWisataInput>
  }

  export type UlasanUpdateWithWhereUniqueWithoutWisataInput = {
    where: UlasanWhereUniqueInput
    data: XOR<UlasanUpdateWithoutWisataInput, UlasanUncheckedUpdateWithoutWisataInput>
  }

  export type UlasanUpdateManyWithWhereWithoutWisataInput = {
    where: UlasanScalarWhereInput
    data: XOR<UlasanUpdateManyMutationInput, UlasanUncheckedUpdateManyWithoutWisataInput>
  }

  export type UserUpsertWithoutWisataInput = {
    update: XOR<UserUpdateWithoutWisataInput, UserUncheckedUpdateWithoutWisataInput>
    create: XOR<UserCreateWithoutWisataInput, UserUncheckedCreateWithoutWisataInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWisataInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWisataInput, UserUncheckedUpdateWithoutWisataInput>
  }

  export type UserUpdateWithoutWisataInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleid?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: ProfileUpdateOneWithoutUserNestedInput
    rekomendasi?: RekomendasiUpdateManyWithoutUserNestedInput
    ulasan?: UlasanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWisataInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleid?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    rekomendasi?: RekomendasiUncheckedUpdateManyWithoutUserNestedInput
    ulasan?: UlasanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type KategoriWisataUpsertWithoutWisataInput = {
    update: XOR<KategoriWisataUpdateWithoutWisataInput, KategoriWisataUncheckedUpdateWithoutWisataInput>
    create: XOR<KategoriWisataCreateWithoutWisataInput, KategoriWisataUncheckedCreateWithoutWisataInput>
    where?: KategoriWisataWhereInput
  }

  export type KategoriWisataUpdateToOneWithWhereWithoutWisataInput = {
    where?: KategoriWisataWhereInput
    data: XOR<KategoriWisataUpdateWithoutWisataInput, KategoriWisataUncheckedUpdateWithoutWisataInput>
  }

  export type KategoriWisataUpdateWithoutWisataInput = {
    nama_kategori?: StringFieldUpdateOperationsInput | string
  }

  export type KategoriWisataUncheckedUpdateWithoutWisataInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_kategori?: StringFieldUpdateOperationsInput | string
  }

  export type DaerahUpsertWithoutWisataInput = {
    update: XOR<DaerahUpdateWithoutWisataInput, DaerahUncheckedUpdateWithoutWisataInput>
    create: XOR<DaerahCreateWithoutWisataInput, DaerahUncheckedCreateWithoutWisataInput>
    where?: DaerahWhereInput
  }

  export type DaerahUpdateToOneWithWhereWithoutWisataInput = {
    where?: DaerahWhereInput
    data: XOR<DaerahUpdateWithoutWisataInput, DaerahUncheckedUpdateWithoutWisataInput>
  }

  export type DaerahUpdateWithoutWisataInput = {
    nama_daerah?: StringFieldUpdateOperationsInput | string
  }

  export type DaerahUncheckedUpdateWithoutWisataInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_daerah?: StringFieldUpdateOperationsInput | string
  }

  export type WisataCreateWithoutKategoriInput = {
    nama_wisata: string
    alamat: string
    deskripsi: string
    jam_operasi: string
    harga_tiket: string
    tanggal: Date | string
    foto_wisata?: string | null
    rekomendasi?: RekomendasiCreateNestedManyWithoutWisataInput
    ulasan?: UlasanCreateNestedManyWithoutWisataInput
    user: UserCreateNestedOneWithoutWisataInput
    daerah: DaerahCreateNestedOneWithoutWisataInput
  }

  export type WisataUncheckedCreateWithoutKategoriInput = {
    id?: number
    nama_wisata: string
    daerahId: number
    alamat: string
    deskripsi: string
    jam_operasi: string
    harga_tiket: string
    tanggal: Date | string
    userId: number
    foto_wisata?: string | null
    rekomendasi?: RekomendasiUncheckedCreateNestedManyWithoutWisataInput
    ulasan?: UlasanUncheckedCreateNestedManyWithoutWisataInput
  }

  export type WisataCreateOrConnectWithoutKategoriInput = {
    where: WisataWhereUniqueInput
    create: XOR<WisataCreateWithoutKategoriInput, WisataUncheckedCreateWithoutKategoriInput>
  }

  export type WisataCreateManyKategoriInputEnvelope = {
    data: WisataCreateManyKategoriInput | WisataCreateManyKategoriInput[]
    skipDuplicates?: boolean
  }

  export type WisataUpsertWithWhereUniqueWithoutKategoriInput = {
    where: WisataWhereUniqueInput
    update: XOR<WisataUpdateWithoutKategoriInput, WisataUncheckedUpdateWithoutKategoriInput>
    create: XOR<WisataCreateWithoutKategoriInput, WisataUncheckedCreateWithoutKategoriInput>
  }

  export type WisataUpdateWithWhereUniqueWithoutKategoriInput = {
    where: WisataWhereUniqueInput
    data: XOR<WisataUpdateWithoutKategoriInput, WisataUncheckedUpdateWithoutKategoriInput>
  }

  export type WisataUpdateManyWithWhereWithoutKategoriInput = {
    where: WisataScalarWhereInput
    data: XOR<WisataUpdateManyMutationInput, WisataUncheckedUpdateManyWithoutKategoriInput>
  }

  export type WisataCreateWithoutDaerahInput = {
    nama_wisata: string
    alamat: string
    deskripsi: string
    jam_operasi: string
    harga_tiket: string
    tanggal: Date | string
    foto_wisata?: string | null
    rekomendasi?: RekomendasiCreateNestedManyWithoutWisataInput
    ulasan?: UlasanCreateNestedManyWithoutWisataInput
    user: UserCreateNestedOneWithoutWisataInput
    kategori: KategoriWisataCreateNestedOneWithoutWisataInput
  }

  export type WisataUncheckedCreateWithoutDaerahInput = {
    id?: number
    nama_wisata: string
    kategoriId: number
    alamat: string
    deskripsi: string
    jam_operasi: string
    harga_tiket: string
    tanggal: Date | string
    userId: number
    foto_wisata?: string | null
    rekomendasi?: RekomendasiUncheckedCreateNestedManyWithoutWisataInput
    ulasan?: UlasanUncheckedCreateNestedManyWithoutWisataInput
  }

  export type WisataCreateOrConnectWithoutDaerahInput = {
    where: WisataWhereUniqueInput
    create: XOR<WisataCreateWithoutDaerahInput, WisataUncheckedCreateWithoutDaerahInput>
  }

  export type WisataCreateManyDaerahInputEnvelope = {
    data: WisataCreateManyDaerahInput | WisataCreateManyDaerahInput[]
    skipDuplicates?: boolean
  }

  export type WisataUpsertWithWhereUniqueWithoutDaerahInput = {
    where: WisataWhereUniqueInput
    update: XOR<WisataUpdateWithoutDaerahInput, WisataUncheckedUpdateWithoutDaerahInput>
    create: XOR<WisataCreateWithoutDaerahInput, WisataUncheckedCreateWithoutDaerahInput>
  }

  export type WisataUpdateWithWhereUniqueWithoutDaerahInput = {
    where: WisataWhereUniqueInput
    data: XOR<WisataUpdateWithoutDaerahInput, WisataUncheckedUpdateWithoutDaerahInput>
  }

  export type WisataUpdateManyWithWhereWithoutDaerahInput = {
    where: WisataScalarWhereInput
    data: XOR<WisataUpdateManyMutationInput, WisataUncheckedUpdateManyWithoutDaerahInput>
  }

  export type UserCreateWithoutRekomendasiInput = {
    email: string
    password?: string | null
    googleid?: string | null
    role: $Enums.Role
    profile?: ProfileCreateNestedOneWithoutUserInput
    wisata?: WisataCreateNestedManyWithoutUserInput
    ulasan?: UlasanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRekomendasiInput = {
    id?: number
    email: string
    password?: string | null
    googleid?: string | null
    role: $Enums.Role
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    wisata?: WisataUncheckedCreateNestedManyWithoutUserInput
    ulasan?: UlasanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRekomendasiInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRekomendasiInput, UserUncheckedCreateWithoutRekomendasiInput>
  }

  export type WisataCreateWithoutRekomendasiInput = {
    nama_wisata: string
    alamat: string
    deskripsi: string
    jam_operasi: string
    harga_tiket: string
    tanggal: Date | string
    foto_wisata?: string | null
    ulasan?: UlasanCreateNestedManyWithoutWisataInput
    user: UserCreateNestedOneWithoutWisataInput
    kategori: KategoriWisataCreateNestedOneWithoutWisataInput
    daerah: DaerahCreateNestedOneWithoutWisataInput
  }

  export type WisataUncheckedCreateWithoutRekomendasiInput = {
    id?: number
    nama_wisata: string
    kategoriId: number
    daerahId: number
    alamat: string
    deskripsi: string
    jam_operasi: string
    harga_tiket: string
    tanggal: Date | string
    userId: number
    foto_wisata?: string | null
    ulasan?: UlasanUncheckedCreateNestedManyWithoutWisataInput
  }

  export type WisataCreateOrConnectWithoutRekomendasiInput = {
    where: WisataWhereUniqueInput
    create: XOR<WisataCreateWithoutRekomendasiInput, WisataUncheckedCreateWithoutRekomendasiInput>
  }

  export type UserUpsertWithoutRekomendasiInput = {
    update: XOR<UserUpdateWithoutRekomendasiInput, UserUncheckedUpdateWithoutRekomendasiInput>
    create: XOR<UserCreateWithoutRekomendasiInput, UserUncheckedCreateWithoutRekomendasiInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRekomendasiInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRekomendasiInput, UserUncheckedUpdateWithoutRekomendasiInput>
  }

  export type UserUpdateWithoutRekomendasiInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleid?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: ProfileUpdateOneWithoutUserNestedInput
    wisata?: WisataUpdateManyWithoutUserNestedInput
    ulasan?: UlasanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRekomendasiInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleid?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    wisata?: WisataUncheckedUpdateManyWithoutUserNestedInput
    ulasan?: UlasanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WisataUpsertWithoutRekomendasiInput = {
    update: XOR<WisataUpdateWithoutRekomendasiInput, WisataUncheckedUpdateWithoutRekomendasiInput>
    create: XOR<WisataCreateWithoutRekomendasiInput, WisataUncheckedCreateWithoutRekomendasiInput>
    where?: WisataWhereInput
  }

  export type WisataUpdateToOneWithWhereWithoutRekomendasiInput = {
    where?: WisataWhereInput
    data: XOR<WisataUpdateWithoutRekomendasiInput, WisataUncheckedUpdateWithoutRekomendasiInput>
  }

  export type WisataUpdateWithoutRekomendasiInput = {
    nama_wisata?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    jam_operasi?: StringFieldUpdateOperationsInput | string
    harga_tiket?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    foto_wisata?: NullableStringFieldUpdateOperationsInput | string | null
    ulasan?: UlasanUpdateManyWithoutWisataNestedInput
    user?: UserUpdateOneRequiredWithoutWisataNestedInput
    kategori?: KategoriWisataUpdateOneRequiredWithoutWisataNestedInput
    daerah?: DaerahUpdateOneRequiredWithoutWisataNestedInput
  }

  export type WisataUncheckedUpdateWithoutRekomendasiInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_wisata?: StringFieldUpdateOperationsInput | string
    kategoriId?: IntFieldUpdateOperationsInput | number
    daerahId?: IntFieldUpdateOperationsInput | number
    alamat?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    jam_operasi?: StringFieldUpdateOperationsInput | string
    harga_tiket?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    foto_wisata?: NullableStringFieldUpdateOperationsInput | string | null
    ulasan?: UlasanUncheckedUpdateManyWithoutWisataNestedInput
  }

  export type UserCreateWithoutUlasanInput = {
    email: string
    password?: string | null
    googleid?: string | null
    role: $Enums.Role
    profile?: ProfileCreateNestedOneWithoutUserInput
    wisata?: WisataCreateNestedManyWithoutUserInput
    rekomendasi?: RekomendasiCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUlasanInput = {
    id?: number
    email: string
    password?: string | null
    googleid?: string | null
    role: $Enums.Role
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    wisata?: WisataUncheckedCreateNestedManyWithoutUserInput
    rekomendasi?: RekomendasiUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUlasanInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUlasanInput, UserUncheckedCreateWithoutUlasanInput>
  }

  export type WisataCreateWithoutUlasanInput = {
    nama_wisata: string
    alamat: string
    deskripsi: string
    jam_operasi: string
    harga_tiket: string
    tanggal: Date | string
    foto_wisata?: string | null
    rekomendasi?: RekomendasiCreateNestedManyWithoutWisataInput
    user: UserCreateNestedOneWithoutWisataInput
    kategori: KategoriWisataCreateNestedOneWithoutWisataInput
    daerah: DaerahCreateNestedOneWithoutWisataInput
  }

  export type WisataUncheckedCreateWithoutUlasanInput = {
    id?: number
    nama_wisata: string
    kategoriId: number
    daerahId: number
    alamat: string
    deskripsi: string
    jam_operasi: string
    harga_tiket: string
    tanggal: Date | string
    userId: number
    foto_wisata?: string | null
    rekomendasi?: RekomendasiUncheckedCreateNestedManyWithoutWisataInput
  }

  export type WisataCreateOrConnectWithoutUlasanInput = {
    where: WisataWhereUniqueInput
    create: XOR<WisataCreateWithoutUlasanInput, WisataUncheckedCreateWithoutUlasanInput>
  }

  export type UserUpsertWithoutUlasanInput = {
    update: XOR<UserUpdateWithoutUlasanInput, UserUncheckedUpdateWithoutUlasanInput>
    create: XOR<UserCreateWithoutUlasanInput, UserUncheckedCreateWithoutUlasanInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUlasanInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUlasanInput, UserUncheckedUpdateWithoutUlasanInput>
  }

  export type UserUpdateWithoutUlasanInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleid?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: ProfileUpdateOneWithoutUserNestedInput
    wisata?: WisataUpdateManyWithoutUserNestedInput
    rekomendasi?: RekomendasiUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUlasanInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleid?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    wisata?: WisataUncheckedUpdateManyWithoutUserNestedInput
    rekomendasi?: RekomendasiUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WisataUpsertWithoutUlasanInput = {
    update: XOR<WisataUpdateWithoutUlasanInput, WisataUncheckedUpdateWithoutUlasanInput>
    create: XOR<WisataCreateWithoutUlasanInput, WisataUncheckedCreateWithoutUlasanInput>
    where?: WisataWhereInput
  }

  export type WisataUpdateToOneWithWhereWithoutUlasanInput = {
    where?: WisataWhereInput
    data: XOR<WisataUpdateWithoutUlasanInput, WisataUncheckedUpdateWithoutUlasanInput>
  }

  export type WisataUpdateWithoutUlasanInput = {
    nama_wisata?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    jam_operasi?: StringFieldUpdateOperationsInput | string
    harga_tiket?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    foto_wisata?: NullableStringFieldUpdateOperationsInput | string | null
    rekomendasi?: RekomendasiUpdateManyWithoutWisataNestedInput
    user?: UserUpdateOneRequiredWithoutWisataNestedInput
    kategori?: KategoriWisataUpdateOneRequiredWithoutWisataNestedInput
    daerah?: DaerahUpdateOneRequiredWithoutWisataNestedInput
  }

  export type WisataUncheckedUpdateWithoutUlasanInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_wisata?: StringFieldUpdateOperationsInput | string
    kategoriId?: IntFieldUpdateOperationsInput | number
    daerahId?: IntFieldUpdateOperationsInput | number
    alamat?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    jam_operasi?: StringFieldUpdateOperationsInput | string
    harga_tiket?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    foto_wisata?: NullableStringFieldUpdateOperationsInput | string | null
    rekomendasi?: RekomendasiUncheckedUpdateManyWithoutWisataNestedInput
  }

  export type WisataCreateManyUserInput = {
    id?: number
    nama_wisata: string
    kategoriId: number
    daerahId: number
    alamat: string
    deskripsi: string
    jam_operasi: string
    harga_tiket: string
    tanggal: Date | string
    foto_wisata?: string | null
  }

  export type RekomendasiCreateManyUserInput = {
    id?: number
    tanggal_vote: Date | string
    wisataId: number
  }

  export type UlasanCreateManyUserInput = {
    id?: number
    wisataId: number
    tanggal_ulasan: Date | string
    judul: string
    isi_ulasan: string
    foto_ulasan: string
  }

  export type WisataUpdateWithoutUserInput = {
    nama_wisata?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    jam_operasi?: StringFieldUpdateOperationsInput | string
    harga_tiket?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    foto_wisata?: NullableStringFieldUpdateOperationsInput | string | null
    rekomendasi?: RekomendasiUpdateManyWithoutWisataNestedInput
    ulasan?: UlasanUpdateManyWithoutWisataNestedInput
    kategori?: KategoriWisataUpdateOneRequiredWithoutWisataNestedInput
    daerah?: DaerahUpdateOneRequiredWithoutWisataNestedInput
  }

  export type WisataUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_wisata?: StringFieldUpdateOperationsInput | string
    kategoriId?: IntFieldUpdateOperationsInput | number
    daerahId?: IntFieldUpdateOperationsInput | number
    alamat?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    jam_operasi?: StringFieldUpdateOperationsInput | string
    harga_tiket?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    foto_wisata?: NullableStringFieldUpdateOperationsInput | string | null
    rekomendasi?: RekomendasiUncheckedUpdateManyWithoutWisataNestedInput
    ulasan?: UlasanUncheckedUpdateManyWithoutWisataNestedInput
  }

  export type WisataUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_wisata?: StringFieldUpdateOperationsInput | string
    kategoriId?: IntFieldUpdateOperationsInput | number
    daerahId?: IntFieldUpdateOperationsInput | number
    alamat?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    jam_operasi?: StringFieldUpdateOperationsInput | string
    harga_tiket?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    foto_wisata?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RekomendasiUpdateWithoutUserInput = {
    tanggal_vote?: DateTimeFieldUpdateOperationsInput | Date | string
    wisata?: WisataUpdateOneRequiredWithoutRekomendasiNestedInput
  }

  export type RekomendasiUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal_vote?: DateTimeFieldUpdateOperationsInput | Date | string
    wisataId?: IntFieldUpdateOperationsInput | number
  }

  export type RekomendasiUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal_vote?: DateTimeFieldUpdateOperationsInput | Date | string
    wisataId?: IntFieldUpdateOperationsInput | number
  }

  export type UlasanUpdateWithoutUserInput = {
    tanggal_ulasan?: DateTimeFieldUpdateOperationsInput | Date | string
    judul?: StringFieldUpdateOperationsInput | string
    isi_ulasan?: StringFieldUpdateOperationsInput | string
    foto_ulasan?: StringFieldUpdateOperationsInput | string
    wisata?: WisataUpdateOneRequiredWithoutUlasanNestedInput
  }

  export type UlasanUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    wisataId?: IntFieldUpdateOperationsInput | number
    tanggal_ulasan?: DateTimeFieldUpdateOperationsInput | Date | string
    judul?: StringFieldUpdateOperationsInput | string
    isi_ulasan?: StringFieldUpdateOperationsInput | string
    foto_ulasan?: StringFieldUpdateOperationsInput | string
  }

  export type UlasanUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    wisataId?: IntFieldUpdateOperationsInput | number
    tanggal_ulasan?: DateTimeFieldUpdateOperationsInput | Date | string
    judul?: StringFieldUpdateOperationsInput | string
    isi_ulasan?: StringFieldUpdateOperationsInput | string
    foto_ulasan?: StringFieldUpdateOperationsInput | string
  }

  export type RekomendasiCreateManyWisataInput = {
    id?: number
    tanggal_vote: Date | string
    userId: number
  }

  export type UlasanCreateManyWisataInput = {
    id?: number
    userId: number
    tanggal_ulasan: Date | string
    judul: string
    isi_ulasan: string
    foto_ulasan: string
  }

  export type RekomendasiUpdateWithoutWisataInput = {
    tanggal_vote?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRekomendasiNestedInput
  }

  export type RekomendasiUncheckedUpdateWithoutWisataInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal_vote?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type RekomendasiUncheckedUpdateManyWithoutWisataInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal_vote?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UlasanUpdateWithoutWisataInput = {
    tanggal_ulasan?: DateTimeFieldUpdateOperationsInput | Date | string
    judul?: StringFieldUpdateOperationsInput | string
    isi_ulasan?: StringFieldUpdateOperationsInput | string
    foto_ulasan?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutUlasanNestedInput
  }

  export type UlasanUncheckedUpdateWithoutWisataInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    tanggal_ulasan?: DateTimeFieldUpdateOperationsInput | Date | string
    judul?: StringFieldUpdateOperationsInput | string
    isi_ulasan?: StringFieldUpdateOperationsInput | string
    foto_ulasan?: StringFieldUpdateOperationsInput | string
  }

  export type UlasanUncheckedUpdateManyWithoutWisataInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    tanggal_ulasan?: DateTimeFieldUpdateOperationsInput | Date | string
    judul?: StringFieldUpdateOperationsInput | string
    isi_ulasan?: StringFieldUpdateOperationsInput | string
    foto_ulasan?: StringFieldUpdateOperationsInput | string
  }

  export type WisataCreateManyKategoriInput = {
    id?: number
    nama_wisata: string
    daerahId: number
    alamat: string
    deskripsi: string
    jam_operasi: string
    harga_tiket: string
    tanggal: Date | string
    userId: number
    foto_wisata?: string | null
  }

  export type WisataUpdateWithoutKategoriInput = {
    nama_wisata?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    jam_operasi?: StringFieldUpdateOperationsInput | string
    harga_tiket?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    foto_wisata?: NullableStringFieldUpdateOperationsInput | string | null
    rekomendasi?: RekomendasiUpdateManyWithoutWisataNestedInput
    ulasan?: UlasanUpdateManyWithoutWisataNestedInput
    user?: UserUpdateOneRequiredWithoutWisataNestedInput
    daerah?: DaerahUpdateOneRequiredWithoutWisataNestedInput
  }

  export type WisataUncheckedUpdateWithoutKategoriInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_wisata?: StringFieldUpdateOperationsInput | string
    daerahId?: IntFieldUpdateOperationsInput | number
    alamat?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    jam_operasi?: StringFieldUpdateOperationsInput | string
    harga_tiket?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    foto_wisata?: NullableStringFieldUpdateOperationsInput | string | null
    rekomendasi?: RekomendasiUncheckedUpdateManyWithoutWisataNestedInput
    ulasan?: UlasanUncheckedUpdateManyWithoutWisataNestedInput
  }

  export type WisataUncheckedUpdateManyWithoutKategoriInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_wisata?: StringFieldUpdateOperationsInput | string
    daerahId?: IntFieldUpdateOperationsInput | number
    alamat?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    jam_operasi?: StringFieldUpdateOperationsInput | string
    harga_tiket?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    foto_wisata?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WisataCreateManyDaerahInput = {
    id?: number
    nama_wisata: string
    kategoriId: number
    alamat: string
    deskripsi: string
    jam_operasi: string
    harga_tiket: string
    tanggal: Date | string
    userId: number
    foto_wisata?: string | null
  }

  export type WisataUpdateWithoutDaerahInput = {
    nama_wisata?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    jam_operasi?: StringFieldUpdateOperationsInput | string
    harga_tiket?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    foto_wisata?: NullableStringFieldUpdateOperationsInput | string | null
    rekomendasi?: RekomendasiUpdateManyWithoutWisataNestedInput
    ulasan?: UlasanUpdateManyWithoutWisataNestedInput
    user?: UserUpdateOneRequiredWithoutWisataNestedInput
    kategori?: KategoriWisataUpdateOneRequiredWithoutWisataNestedInput
  }

  export type WisataUncheckedUpdateWithoutDaerahInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_wisata?: StringFieldUpdateOperationsInput | string
    kategoriId?: IntFieldUpdateOperationsInput | number
    alamat?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    jam_operasi?: StringFieldUpdateOperationsInput | string
    harga_tiket?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    foto_wisata?: NullableStringFieldUpdateOperationsInput | string | null
    rekomendasi?: RekomendasiUncheckedUpdateManyWithoutWisataNestedInput
    ulasan?: UlasanUncheckedUpdateManyWithoutWisataNestedInput
  }

  export type WisataUncheckedUpdateManyWithoutDaerahInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_wisata?: StringFieldUpdateOperationsInput | string
    kategoriId?: IntFieldUpdateOperationsInput | number
    alamat?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    jam_operasi?: StringFieldUpdateOperationsInput | string
    harga_tiket?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    foto_wisata?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WisataCountOutputTypeDefaultArgs instead
     */
    export type WisataCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WisataCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use KategoriWisataCountOutputTypeDefaultArgs instead
     */
    export type KategoriWisataCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = KategoriWisataCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DaerahCountOutputTypeDefaultArgs instead
     */
    export type DaerahCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DaerahCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProfileDefaultArgs instead
     */
    export type ProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WisataDefaultArgs instead
     */
    export type WisataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WisataDefaultArgs<ExtArgs>
    /**
     * @deprecated Use KategoriWisataDefaultArgs instead
     */
    export type KategoriWisataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = KategoriWisataDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DaerahDefaultArgs instead
     */
    export type DaerahArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DaerahDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RekomendasiDefaultArgs instead
     */
    export type RekomendasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RekomendasiDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UlasanDefaultArgs instead
     */
    export type UlasanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UlasanDefaultArgs<ExtArgs>

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