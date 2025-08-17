
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
 * Model Recruiter
 * 
 */
export type Recruiter = $Result.DefaultSelection<Prisma.$RecruiterPayload>
/**
 * Model JobPosting
 * 
 */
export type JobPosting = $Result.DefaultSelection<Prisma.$JobPostingPayload>
/**
 * Model Candidate
 * 
 */
export type Candidate = $Result.DefaultSelection<Prisma.$CandidatePayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model Interview
 * 
 */
export type Interview = $Result.DefaultSelection<Prisma.$InterviewPayload>
/**
 * Model InterviewResponse
 * 
 */
export type InterviewResponse = $Result.DefaultSelection<Prisma.$InterviewResponsePayload>
/**
 * Model CallLog
 * 
 */
export type CallLog = $Result.DefaultSelection<Prisma.$CallLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CandidateStatus: {
  APPLIED: 'APPLIED',
  SCREENING: 'SCREENING',
  INTERVIEW_SCHEDULED: 'INTERVIEW_SCHEDULED',
  INTERVIEW_COMPLETED: 'INTERVIEW_COMPLETED',
  SELECTED: 'SELECTED',
  REJECTED: 'REJECTED',
  ON_HOLD: 'ON_HOLD',
  WITHDRAWN: 'WITHDRAWN'
};

export type CandidateStatus = (typeof CandidateStatus)[keyof typeof CandidateStatus]


export const InterviewStatus: {
  SCHEDULED: 'SCHEDULED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
  FAILED: 'FAILED',
  NO_SHOW: 'NO_SHOW'
};

export type InterviewStatus = (typeof InterviewStatus)[keyof typeof InterviewStatus]


export const Difficulty: {
  EASY: 'EASY',
  MEDIUM: 'MEDIUM',
  HARD: 'HARD'
};

export type Difficulty = (typeof Difficulty)[keyof typeof Difficulty]


export const Rating: {
  EXCELLENT: 'EXCELLENT',
  GOOD: 'GOOD',
  AVERAGE: 'AVERAGE',
  BELOW_AVERAGE: 'BELOW_AVERAGE',
  POOR: 'POOR'
};

export type Rating = (typeof Rating)[keyof typeof Rating]


export const CallStatus: {
  INITIATED: 'INITIATED',
  RINGING: 'RINGING',
  ANSWERED: 'ANSWERED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  BUSY: 'BUSY',
  NO_ANSWER: 'NO_ANSWER',
  CANCELLED: 'CANCELLED'
};

export type CallStatus = (typeof CallStatus)[keyof typeof CallStatus]

}

export type CandidateStatus = $Enums.CandidateStatus

export const CandidateStatus: typeof $Enums.CandidateStatus

export type InterviewStatus = $Enums.InterviewStatus

export const InterviewStatus: typeof $Enums.InterviewStatus

export type Difficulty = $Enums.Difficulty

export const Difficulty: typeof $Enums.Difficulty

export type Rating = $Enums.Rating

export const Rating: typeof $Enums.Rating

export type CallStatus = $Enums.CallStatus

export const CallStatus: typeof $Enums.CallStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Recruiters
 * const recruiters = await prisma.recruiter.findMany()
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
   * // Fetch zero or more Recruiters
   * const recruiters = await prisma.recruiter.findMany()
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
   * `prisma.recruiter`: Exposes CRUD operations for the **Recruiter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recruiters
    * const recruiters = await prisma.recruiter.findMany()
    * ```
    */
  get recruiter(): Prisma.RecruiterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobPosting`: Exposes CRUD operations for the **JobPosting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobPostings
    * const jobPostings = await prisma.jobPosting.findMany()
    * ```
    */
  get jobPosting(): Prisma.JobPostingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.candidate`: Exposes CRUD operations for the **Candidate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Candidates
    * const candidates = await prisma.candidate.findMany()
    * ```
    */
  get candidate(): Prisma.CandidateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.interview`: Exposes CRUD operations for the **Interview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Interviews
    * const interviews = await prisma.interview.findMany()
    * ```
    */
  get interview(): Prisma.InterviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.interviewResponse`: Exposes CRUD operations for the **InterviewResponse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InterviewResponses
    * const interviewResponses = await prisma.interviewResponse.findMany()
    * ```
    */
  get interviewResponse(): Prisma.InterviewResponseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.callLog`: Exposes CRUD operations for the **CallLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CallLogs
    * const callLogs = await prisma.callLog.findMany()
    * ```
    */
  get callLog(): Prisma.CallLogDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
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
    Recruiter: 'Recruiter',
    JobPosting: 'JobPosting',
    Candidate: 'Candidate',
    Question: 'Question',
    Interview: 'Interview',
    InterviewResponse: 'InterviewResponse',
    CallLog: 'CallLog'
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
      modelProps: "recruiter" | "jobPosting" | "candidate" | "question" | "interview" | "interviewResponse" | "callLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Recruiter: {
        payload: Prisma.$RecruiterPayload<ExtArgs>
        fields: Prisma.RecruiterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecruiterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecruiterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecruiterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecruiterPayload>
          }
          findFirst: {
            args: Prisma.RecruiterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecruiterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecruiterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecruiterPayload>
          }
          findMany: {
            args: Prisma.RecruiterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecruiterPayload>[]
          }
          create: {
            args: Prisma.RecruiterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecruiterPayload>
          }
          createMany: {
            args: Prisma.RecruiterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecruiterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecruiterPayload>[]
          }
          delete: {
            args: Prisma.RecruiterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecruiterPayload>
          }
          update: {
            args: Prisma.RecruiterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecruiterPayload>
          }
          deleteMany: {
            args: Prisma.RecruiterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecruiterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecruiterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecruiterPayload>[]
          }
          upsert: {
            args: Prisma.RecruiterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecruiterPayload>
          }
          aggregate: {
            args: Prisma.RecruiterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecruiter>
          }
          groupBy: {
            args: Prisma.RecruiterGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecruiterGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecruiterCountArgs<ExtArgs>
            result: $Utils.Optional<RecruiterCountAggregateOutputType> | number
          }
        }
      }
      JobPosting: {
        payload: Prisma.$JobPostingPayload<ExtArgs>
        fields: Prisma.JobPostingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobPostingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobPostingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>
          }
          findFirst: {
            args: Prisma.JobPostingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobPostingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>
          }
          findMany: {
            args: Prisma.JobPostingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>[]
          }
          create: {
            args: Prisma.JobPostingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>
          }
          createMany: {
            args: Prisma.JobPostingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobPostingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>[]
          }
          delete: {
            args: Prisma.JobPostingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>
          }
          update: {
            args: Prisma.JobPostingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>
          }
          deleteMany: {
            args: Prisma.JobPostingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobPostingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobPostingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>[]
          }
          upsert: {
            args: Prisma.JobPostingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>
          }
          aggregate: {
            args: Prisma.JobPostingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobPosting>
          }
          groupBy: {
            args: Prisma.JobPostingGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobPostingGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobPostingCountArgs<ExtArgs>
            result: $Utils.Optional<JobPostingCountAggregateOutputType> | number
          }
        }
      }
      Candidate: {
        payload: Prisma.$CandidatePayload<ExtArgs>
        fields: Prisma.CandidateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CandidateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CandidateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          findFirst: {
            args: Prisma.CandidateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CandidateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          findMany: {
            args: Prisma.CandidateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>[]
          }
          create: {
            args: Prisma.CandidateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          createMany: {
            args: Prisma.CandidateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CandidateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>[]
          }
          delete: {
            args: Prisma.CandidateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          update: {
            args: Prisma.CandidateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          deleteMany: {
            args: Prisma.CandidateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CandidateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CandidateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>[]
          }
          upsert: {
            args: Prisma.CandidateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          aggregate: {
            args: Prisma.CandidateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCandidate>
          }
          groupBy: {
            args: Prisma.CandidateGroupByArgs<ExtArgs>
            result: $Utils.Optional<CandidateGroupByOutputType>[]
          }
          count: {
            args: Prisma.CandidateCountArgs<ExtArgs>
            result: $Utils.Optional<CandidateCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      Interview: {
        payload: Prisma.$InterviewPayload<ExtArgs>
        fields: Prisma.InterviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InterviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InterviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>
          }
          findFirst: {
            args: Prisma.InterviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InterviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>
          }
          findMany: {
            args: Prisma.InterviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>[]
          }
          create: {
            args: Prisma.InterviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>
          }
          createMany: {
            args: Prisma.InterviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InterviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>[]
          }
          delete: {
            args: Prisma.InterviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>
          }
          update: {
            args: Prisma.InterviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>
          }
          deleteMany: {
            args: Prisma.InterviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InterviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InterviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>[]
          }
          upsert: {
            args: Prisma.InterviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>
          }
          aggregate: {
            args: Prisma.InterviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInterview>
          }
          groupBy: {
            args: Prisma.InterviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<InterviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.InterviewCountArgs<ExtArgs>
            result: $Utils.Optional<InterviewCountAggregateOutputType> | number
          }
        }
      }
      InterviewResponse: {
        payload: Prisma.$InterviewResponsePayload<ExtArgs>
        fields: Prisma.InterviewResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InterviewResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InterviewResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewResponsePayload>
          }
          findFirst: {
            args: Prisma.InterviewResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InterviewResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewResponsePayload>
          }
          findMany: {
            args: Prisma.InterviewResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewResponsePayload>[]
          }
          create: {
            args: Prisma.InterviewResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewResponsePayload>
          }
          createMany: {
            args: Prisma.InterviewResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InterviewResponseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewResponsePayload>[]
          }
          delete: {
            args: Prisma.InterviewResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewResponsePayload>
          }
          update: {
            args: Prisma.InterviewResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewResponsePayload>
          }
          deleteMany: {
            args: Prisma.InterviewResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InterviewResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InterviewResponseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewResponsePayload>[]
          }
          upsert: {
            args: Prisma.InterviewResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewResponsePayload>
          }
          aggregate: {
            args: Prisma.InterviewResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInterviewResponse>
          }
          groupBy: {
            args: Prisma.InterviewResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<InterviewResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.InterviewResponseCountArgs<ExtArgs>
            result: $Utils.Optional<InterviewResponseCountAggregateOutputType> | number
          }
        }
      }
      CallLog: {
        payload: Prisma.$CallLogPayload<ExtArgs>
        fields: Prisma.CallLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CallLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CallLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallLogPayload>
          }
          findFirst: {
            args: Prisma.CallLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CallLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallLogPayload>
          }
          findMany: {
            args: Prisma.CallLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallLogPayload>[]
          }
          create: {
            args: Prisma.CallLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallLogPayload>
          }
          createMany: {
            args: Prisma.CallLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CallLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallLogPayload>[]
          }
          delete: {
            args: Prisma.CallLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallLogPayload>
          }
          update: {
            args: Prisma.CallLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallLogPayload>
          }
          deleteMany: {
            args: Prisma.CallLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CallLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CallLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallLogPayload>[]
          }
          upsert: {
            args: Prisma.CallLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallLogPayload>
          }
          aggregate: {
            args: Prisma.CallLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCallLog>
          }
          groupBy: {
            args: Prisma.CallLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<CallLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.CallLogCountArgs<ExtArgs>
            result: $Utils.Optional<CallLogCountAggregateOutputType> | number
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
    recruiter?: RecruiterOmit
    jobPosting?: JobPostingOmit
    candidate?: CandidateOmit
    question?: QuestionOmit
    interview?: InterviewOmit
    interviewResponse?: InterviewResponseOmit
    callLog?: CallLogOmit
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
   * Count Type RecruiterCountOutputType
   */

  export type RecruiterCountOutputType = {
    jobPostings: number
  }

  export type RecruiterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobPostings?: boolean | RecruiterCountOutputTypeCountJobPostingsArgs
  }

  // Custom InputTypes
  /**
   * RecruiterCountOutputType without action
   */
  export type RecruiterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruiterCountOutputType
     */
    select?: RecruiterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecruiterCountOutputType without action
   */
  export type RecruiterCountOutputTypeCountJobPostingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobPostingWhereInput
  }


  /**
   * Count Type JobPostingCountOutputType
   */

  export type JobPostingCountOutputType = {
    candidates: number
    questions: number
    interviews: number
  }

  export type JobPostingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidates?: boolean | JobPostingCountOutputTypeCountCandidatesArgs
    questions?: boolean | JobPostingCountOutputTypeCountQuestionsArgs
    interviews?: boolean | JobPostingCountOutputTypeCountInterviewsArgs
  }

  // Custom InputTypes
  /**
   * JobPostingCountOutputType without action
   */
  export type JobPostingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPostingCountOutputType
     */
    select?: JobPostingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobPostingCountOutputType without action
   */
  export type JobPostingCountOutputTypeCountCandidatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateWhereInput
  }

  /**
   * JobPostingCountOutputType without action
   */
  export type JobPostingCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * JobPostingCountOutputType without action
   */
  export type JobPostingCountOutputTypeCountInterviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewWhereInput
  }


  /**
   * Count Type CandidateCountOutputType
   */

  export type CandidateCountOutputType = {
    interviews: number
  }

  export type CandidateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interviews?: boolean | CandidateCountOutputTypeCountInterviewsArgs
  }

  // Custom InputTypes
  /**
   * CandidateCountOutputType without action
   */
  export type CandidateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateCountOutputType
     */
    select?: CandidateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CandidateCountOutputType without action
   */
  export type CandidateCountOutputTypeCountInterviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    responses: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responses?: boolean | QuestionCountOutputTypeCountResponsesArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewResponseWhereInput
  }


  /**
   * Count Type InterviewCountOutputType
   */

  export type InterviewCountOutputType = {
    responses: number
  }

  export type InterviewCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responses?: boolean | InterviewCountOutputTypeCountResponsesArgs
  }

  // Custom InputTypes
  /**
   * InterviewCountOutputType without action
   */
  export type InterviewCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewCountOutputType
     */
    select?: InterviewCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InterviewCountOutputType without action
   */
  export type InterviewCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewResponseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Recruiter
   */

  export type AggregateRecruiter = {
    _count: RecruiterCountAggregateOutputType | null
    _min: RecruiterMinAggregateOutputType | null
    _max: RecruiterMaxAggregateOutputType | null
  }

  export type RecruiterMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    avatar: string | null
    password: string | null
    company: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RecruiterMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    avatar: string | null
    password: string | null
    company: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RecruiterCountAggregateOutputType = {
    id: number
    name: number
    email: number
    avatar: number
    password: number
    company: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RecruiterMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    avatar?: true
    password?: true
    company?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RecruiterMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    avatar?: true
    password?: true
    company?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RecruiterCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    avatar?: true
    password?: true
    company?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RecruiterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recruiter to aggregate.
     */
    where?: RecruiterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recruiters to fetch.
     */
    orderBy?: RecruiterOrderByWithRelationInput | RecruiterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecruiterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recruiters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recruiters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recruiters
    **/
    _count?: true | RecruiterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecruiterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecruiterMaxAggregateInputType
  }

  export type GetRecruiterAggregateType<T extends RecruiterAggregateArgs> = {
        [P in keyof T & keyof AggregateRecruiter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecruiter[P]>
      : GetScalarType<T[P], AggregateRecruiter[P]>
  }




  export type RecruiterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecruiterWhereInput
    orderBy?: RecruiterOrderByWithAggregationInput | RecruiterOrderByWithAggregationInput[]
    by: RecruiterScalarFieldEnum[] | RecruiterScalarFieldEnum
    having?: RecruiterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecruiterCountAggregateInputType | true
    _min?: RecruiterMinAggregateInputType
    _max?: RecruiterMaxAggregateInputType
  }

  export type RecruiterGroupByOutputType = {
    id: string
    name: string
    email: string
    avatar: string | null
    password: string
    company: string | null
    createdAt: Date
    updatedAt: Date
    _count: RecruiterCountAggregateOutputType | null
    _min: RecruiterMinAggregateOutputType | null
    _max: RecruiterMaxAggregateOutputType | null
  }

  type GetRecruiterGroupByPayload<T extends RecruiterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecruiterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecruiterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecruiterGroupByOutputType[P]>
            : GetScalarType<T[P], RecruiterGroupByOutputType[P]>
        }
      >
    >


  export type RecruiterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    avatar?: boolean
    password?: boolean
    company?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobPostings?: boolean | Recruiter$jobPostingsArgs<ExtArgs>
    _count?: boolean | RecruiterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recruiter"]>

  export type RecruiterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    avatar?: boolean
    password?: boolean
    company?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["recruiter"]>

  export type RecruiterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    avatar?: boolean
    password?: boolean
    company?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["recruiter"]>

  export type RecruiterSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    avatar?: boolean
    password?: boolean
    company?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RecruiterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "avatar" | "password" | "company" | "createdAt" | "updatedAt", ExtArgs["result"]["recruiter"]>
  export type RecruiterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobPostings?: boolean | Recruiter$jobPostingsArgs<ExtArgs>
    _count?: boolean | RecruiterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RecruiterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RecruiterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RecruiterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recruiter"
    objects: {
      jobPostings: Prisma.$JobPostingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      avatar: string | null
      password: string
      company: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["recruiter"]>
    composites: {}
  }

  type RecruiterGetPayload<S extends boolean | null | undefined | RecruiterDefaultArgs> = $Result.GetResult<Prisma.$RecruiterPayload, S>

  type RecruiterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecruiterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecruiterCountAggregateInputType | true
    }

  export interface RecruiterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recruiter'], meta: { name: 'Recruiter' } }
    /**
     * Find zero or one Recruiter that matches the filter.
     * @param {RecruiterFindUniqueArgs} args - Arguments to find a Recruiter
     * @example
     * // Get one Recruiter
     * const recruiter = await prisma.recruiter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecruiterFindUniqueArgs>(args: SelectSubset<T, RecruiterFindUniqueArgs<ExtArgs>>): Prisma__RecruiterClient<$Result.GetResult<Prisma.$RecruiterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recruiter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecruiterFindUniqueOrThrowArgs} args - Arguments to find a Recruiter
     * @example
     * // Get one Recruiter
     * const recruiter = await prisma.recruiter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecruiterFindUniqueOrThrowArgs>(args: SelectSubset<T, RecruiterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecruiterClient<$Result.GetResult<Prisma.$RecruiterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recruiter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruiterFindFirstArgs} args - Arguments to find a Recruiter
     * @example
     * // Get one Recruiter
     * const recruiter = await prisma.recruiter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecruiterFindFirstArgs>(args?: SelectSubset<T, RecruiterFindFirstArgs<ExtArgs>>): Prisma__RecruiterClient<$Result.GetResult<Prisma.$RecruiterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recruiter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruiterFindFirstOrThrowArgs} args - Arguments to find a Recruiter
     * @example
     * // Get one Recruiter
     * const recruiter = await prisma.recruiter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecruiterFindFirstOrThrowArgs>(args?: SelectSubset<T, RecruiterFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecruiterClient<$Result.GetResult<Prisma.$RecruiterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recruiters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruiterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recruiters
     * const recruiters = await prisma.recruiter.findMany()
     * 
     * // Get first 10 Recruiters
     * const recruiters = await prisma.recruiter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recruiterWithIdOnly = await prisma.recruiter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecruiterFindManyArgs>(args?: SelectSubset<T, RecruiterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecruiterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recruiter.
     * @param {RecruiterCreateArgs} args - Arguments to create a Recruiter.
     * @example
     * // Create one Recruiter
     * const Recruiter = await prisma.recruiter.create({
     *   data: {
     *     // ... data to create a Recruiter
     *   }
     * })
     * 
     */
    create<T extends RecruiterCreateArgs>(args: SelectSubset<T, RecruiterCreateArgs<ExtArgs>>): Prisma__RecruiterClient<$Result.GetResult<Prisma.$RecruiterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recruiters.
     * @param {RecruiterCreateManyArgs} args - Arguments to create many Recruiters.
     * @example
     * // Create many Recruiters
     * const recruiter = await prisma.recruiter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecruiterCreateManyArgs>(args?: SelectSubset<T, RecruiterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recruiters and returns the data saved in the database.
     * @param {RecruiterCreateManyAndReturnArgs} args - Arguments to create many Recruiters.
     * @example
     * // Create many Recruiters
     * const recruiter = await prisma.recruiter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recruiters and only return the `id`
     * const recruiterWithIdOnly = await prisma.recruiter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecruiterCreateManyAndReturnArgs>(args?: SelectSubset<T, RecruiterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecruiterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recruiter.
     * @param {RecruiterDeleteArgs} args - Arguments to delete one Recruiter.
     * @example
     * // Delete one Recruiter
     * const Recruiter = await prisma.recruiter.delete({
     *   where: {
     *     // ... filter to delete one Recruiter
     *   }
     * })
     * 
     */
    delete<T extends RecruiterDeleteArgs>(args: SelectSubset<T, RecruiterDeleteArgs<ExtArgs>>): Prisma__RecruiterClient<$Result.GetResult<Prisma.$RecruiterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recruiter.
     * @param {RecruiterUpdateArgs} args - Arguments to update one Recruiter.
     * @example
     * // Update one Recruiter
     * const recruiter = await prisma.recruiter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecruiterUpdateArgs>(args: SelectSubset<T, RecruiterUpdateArgs<ExtArgs>>): Prisma__RecruiterClient<$Result.GetResult<Prisma.$RecruiterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recruiters.
     * @param {RecruiterDeleteManyArgs} args - Arguments to filter Recruiters to delete.
     * @example
     * // Delete a few Recruiters
     * const { count } = await prisma.recruiter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecruiterDeleteManyArgs>(args?: SelectSubset<T, RecruiterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recruiters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruiterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recruiters
     * const recruiter = await prisma.recruiter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecruiterUpdateManyArgs>(args: SelectSubset<T, RecruiterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recruiters and returns the data updated in the database.
     * @param {RecruiterUpdateManyAndReturnArgs} args - Arguments to update many Recruiters.
     * @example
     * // Update many Recruiters
     * const recruiter = await prisma.recruiter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recruiters and only return the `id`
     * const recruiterWithIdOnly = await prisma.recruiter.updateManyAndReturn({
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
    updateManyAndReturn<T extends RecruiterUpdateManyAndReturnArgs>(args: SelectSubset<T, RecruiterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecruiterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recruiter.
     * @param {RecruiterUpsertArgs} args - Arguments to update or create a Recruiter.
     * @example
     * // Update or create a Recruiter
     * const recruiter = await prisma.recruiter.upsert({
     *   create: {
     *     // ... data to create a Recruiter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recruiter we want to update
     *   }
     * })
     */
    upsert<T extends RecruiterUpsertArgs>(args: SelectSubset<T, RecruiterUpsertArgs<ExtArgs>>): Prisma__RecruiterClient<$Result.GetResult<Prisma.$RecruiterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recruiters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruiterCountArgs} args - Arguments to filter Recruiters to count.
     * @example
     * // Count the number of Recruiters
     * const count = await prisma.recruiter.count({
     *   where: {
     *     // ... the filter for the Recruiters we want to count
     *   }
     * })
    **/
    count<T extends RecruiterCountArgs>(
      args?: Subset<T, RecruiterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecruiterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recruiter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruiterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecruiterAggregateArgs>(args: Subset<T, RecruiterAggregateArgs>): Prisma.PrismaPromise<GetRecruiterAggregateType<T>>

    /**
     * Group by Recruiter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruiterGroupByArgs} args - Group by arguments.
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
      T extends RecruiterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecruiterGroupByArgs['orderBy'] }
        : { orderBy?: RecruiterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecruiterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecruiterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recruiter model
   */
  readonly fields: RecruiterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recruiter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecruiterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobPostings<T extends Recruiter$jobPostingsArgs<ExtArgs> = {}>(args?: Subset<T, Recruiter$jobPostingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Recruiter model
   */
  interface RecruiterFieldRefs {
    readonly id: FieldRef<"Recruiter", 'String'>
    readonly name: FieldRef<"Recruiter", 'String'>
    readonly email: FieldRef<"Recruiter", 'String'>
    readonly avatar: FieldRef<"Recruiter", 'String'>
    readonly password: FieldRef<"Recruiter", 'String'>
    readonly company: FieldRef<"Recruiter", 'String'>
    readonly createdAt: FieldRef<"Recruiter", 'DateTime'>
    readonly updatedAt: FieldRef<"Recruiter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Recruiter findUnique
   */
  export type RecruiterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recruiter
     */
    select?: RecruiterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recruiter
     */
    omit?: RecruiterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruiterInclude<ExtArgs> | null
    /**
     * Filter, which Recruiter to fetch.
     */
    where: RecruiterWhereUniqueInput
  }

  /**
   * Recruiter findUniqueOrThrow
   */
  export type RecruiterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recruiter
     */
    select?: RecruiterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recruiter
     */
    omit?: RecruiterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruiterInclude<ExtArgs> | null
    /**
     * Filter, which Recruiter to fetch.
     */
    where: RecruiterWhereUniqueInput
  }

  /**
   * Recruiter findFirst
   */
  export type RecruiterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recruiter
     */
    select?: RecruiterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recruiter
     */
    omit?: RecruiterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruiterInclude<ExtArgs> | null
    /**
     * Filter, which Recruiter to fetch.
     */
    where?: RecruiterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recruiters to fetch.
     */
    orderBy?: RecruiterOrderByWithRelationInput | RecruiterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recruiters.
     */
    cursor?: RecruiterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recruiters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recruiters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recruiters.
     */
    distinct?: RecruiterScalarFieldEnum | RecruiterScalarFieldEnum[]
  }

  /**
   * Recruiter findFirstOrThrow
   */
  export type RecruiterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recruiter
     */
    select?: RecruiterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recruiter
     */
    omit?: RecruiterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruiterInclude<ExtArgs> | null
    /**
     * Filter, which Recruiter to fetch.
     */
    where?: RecruiterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recruiters to fetch.
     */
    orderBy?: RecruiterOrderByWithRelationInput | RecruiterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recruiters.
     */
    cursor?: RecruiterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recruiters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recruiters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recruiters.
     */
    distinct?: RecruiterScalarFieldEnum | RecruiterScalarFieldEnum[]
  }

  /**
   * Recruiter findMany
   */
  export type RecruiterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recruiter
     */
    select?: RecruiterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recruiter
     */
    omit?: RecruiterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruiterInclude<ExtArgs> | null
    /**
     * Filter, which Recruiters to fetch.
     */
    where?: RecruiterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recruiters to fetch.
     */
    orderBy?: RecruiterOrderByWithRelationInput | RecruiterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recruiters.
     */
    cursor?: RecruiterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recruiters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recruiters.
     */
    skip?: number
    distinct?: RecruiterScalarFieldEnum | RecruiterScalarFieldEnum[]
  }

  /**
   * Recruiter create
   */
  export type RecruiterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recruiter
     */
    select?: RecruiterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recruiter
     */
    omit?: RecruiterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruiterInclude<ExtArgs> | null
    /**
     * The data needed to create a Recruiter.
     */
    data: XOR<RecruiterCreateInput, RecruiterUncheckedCreateInput>
  }

  /**
   * Recruiter createMany
   */
  export type RecruiterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recruiters.
     */
    data: RecruiterCreateManyInput | RecruiterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recruiter createManyAndReturn
   */
  export type RecruiterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recruiter
     */
    select?: RecruiterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recruiter
     */
    omit?: RecruiterOmit<ExtArgs> | null
    /**
     * The data used to create many Recruiters.
     */
    data: RecruiterCreateManyInput | RecruiterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recruiter update
   */
  export type RecruiterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recruiter
     */
    select?: RecruiterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recruiter
     */
    omit?: RecruiterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruiterInclude<ExtArgs> | null
    /**
     * The data needed to update a Recruiter.
     */
    data: XOR<RecruiterUpdateInput, RecruiterUncheckedUpdateInput>
    /**
     * Choose, which Recruiter to update.
     */
    where: RecruiterWhereUniqueInput
  }

  /**
   * Recruiter updateMany
   */
  export type RecruiterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recruiters.
     */
    data: XOR<RecruiterUpdateManyMutationInput, RecruiterUncheckedUpdateManyInput>
    /**
     * Filter which Recruiters to update
     */
    where?: RecruiterWhereInput
    /**
     * Limit how many Recruiters to update.
     */
    limit?: number
  }

  /**
   * Recruiter updateManyAndReturn
   */
  export type RecruiterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recruiter
     */
    select?: RecruiterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recruiter
     */
    omit?: RecruiterOmit<ExtArgs> | null
    /**
     * The data used to update Recruiters.
     */
    data: XOR<RecruiterUpdateManyMutationInput, RecruiterUncheckedUpdateManyInput>
    /**
     * Filter which Recruiters to update
     */
    where?: RecruiterWhereInput
    /**
     * Limit how many Recruiters to update.
     */
    limit?: number
  }

  /**
   * Recruiter upsert
   */
  export type RecruiterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recruiter
     */
    select?: RecruiterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recruiter
     */
    omit?: RecruiterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruiterInclude<ExtArgs> | null
    /**
     * The filter to search for the Recruiter to update in case it exists.
     */
    where: RecruiterWhereUniqueInput
    /**
     * In case the Recruiter found by the `where` argument doesn't exist, create a new Recruiter with this data.
     */
    create: XOR<RecruiterCreateInput, RecruiterUncheckedCreateInput>
    /**
     * In case the Recruiter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecruiterUpdateInput, RecruiterUncheckedUpdateInput>
  }

  /**
   * Recruiter delete
   */
  export type RecruiterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recruiter
     */
    select?: RecruiterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recruiter
     */
    omit?: RecruiterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruiterInclude<ExtArgs> | null
    /**
     * Filter which Recruiter to delete.
     */
    where: RecruiterWhereUniqueInput
  }

  /**
   * Recruiter deleteMany
   */
  export type RecruiterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recruiters to delete
     */
    where?: RecruiterWhereInput
    /**
     * Limit how many Recruiters to delete.
     */
    limit?: number
  }

  /**
   * Recruiter.jobPostings
   */
  export type Recruiter$jobPostingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingInclude<ExtArgs> | null
    where?: JobPostingWhereInput
    orderBy?: JobPostingOrderByWithRelationInput | JobPostingOrderByWithRelationInput[]
    cursor?: JobPostingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobPostingScalarFieldEnum | JobPostingScalarFieldEnum[]
  }

  /**
   * Recruiter without action
   */
  export type RecruiterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recruiter
     */
    select?: RecruiterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recruiter
     */
    omit?: RecruiterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruiterInclude<ExtArgs> | null
  }


  /**
   * Model JobPosting
   */

  export type AggregateJobPosting = {
    _count: JobPostingCountAggregateOutputType | null
    _min: JobPostingMinAggregateOutputType | null
    _max: JobPostingMaxAggregateOutputType | null
  }

  export type JobPostingMinAggregateOutputType = {
    id: string | null
    title: string | null
    descripiton: string | null
    requirements: string | null
    location: string | null
    salaryRange: string | null
    experienceLevel: string | null
    department: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    recruiterId: string | null
  }

  export type JobPostingMaxAggregateOutputType = {
    id: string | null
    title: string | null
    descripiton: string | null
    requirements: string | null
    location: string | null
    salaryRange: string | null
    experienceLevel: string | null
    department: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    recruiterId: string | null
  }

  export type JobPostingCountAggregateOutputType = {
    id: number
    title: number
    descripiton: number
    requirements: number
    location: number
    salaryRange: number
    experienceLevel: number
    department: number
    isActive: number
    createdAt: number
    updatedAt: number
    recruiterId: number
    _all: number
  }


  export type JobPostingMinAggregateInputType = {
    id?: true
    title?: true
    descripiton?: true
    requirements?: true
    location?: true
    salaryRange?: true
    experienceLevel?: true
    department?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    recruiterId?: true
  }

  export type JobPostingMaxAggregateInputType = {
    id?: true
    title?: true
    descripiton?: true
    requirements?: true
    location?: true
    salaryRange?: true
    experienceLevel?: true
    department?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    recruiterId?: true
  }

  export type JobPostingCountAggregateInputType = {
    id?: true
    title?: true
    descripiton?: true
    requirements?: true
    location?: true
    salaryRange?: true
    experienceLevel?: true
    department?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    recruiterId?: true
    _all?: true
  }

  export type JobPostingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobPosting to aggregate.
     */
    where?: JobPostingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobPostings to fetch.
     */
    orderBy?: JobPostingOrderByWithRelationInput | JobPostingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobPostingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobPostings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobPostings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobPostings
    **/
    _count?: true | JobPostingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobPostingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobPostingMaxAggregateInputType
  }

  export type GetJobPostingAggregateType<T extends JobPostingAggregateArgs> = {
        [P in keyof T & keyof AggregateJobPosting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobPosting[P]>
      : GetScalarType<T[P], AggregateJobPosting[P]>
  }




  export type JobPostingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobPostingWhereInput
    orderBy?: JobPostingOrderByWithAggregationInput | JobPostingOrderByWithAggregationInput[]
    by: JobPostingScalarFieldEnum[] | JobPostingScalarFieldEnum
    having?: JobPostingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobPostingCountAggregateInputType | true
    _min?: JobPostingMinAggregateInputType
    _max?: JobPostingMaxAggregateInputType
  }

  export type JobPostingGroupByOutputType = {
    id: string
    title: string
    descripiton: string
    requirements: string | null
    location: string | null
    salaryRange: string | null
    experienceLevel: string | null
    department: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    recruiterId: string
    _count: JobPostingCountAggregateOutputType | null
    _min: JobPostingMinAggregateOutputType | null
    _max: JobPostingMaxAggregateOutputType | null
  }

  type GetJobPostingGroupByPayload<T extends JobPostingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobPostingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobPostingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobPostingGroupByOutputType[P]>
            : GetScalarType<T[P], JobPostingGroupByOutputType[P]>
        }
      >
    >


  export type JobPostingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    descripiton?: boolean
    requirements?: boolean
    location?: boolean
    salaryRange?: boolean
    experienceLevel?: boolean
    department?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    recruiterId?: boolean
    recruiter?: boolean | RecruiterDefaultArgs<ExtArgs>
    candidates?: boolean | JobPosting$candidatesArgs<ExtArgs>
    questions?: boolean | JobPosting$questionsArgs<ExtArgs>
    interviews?: boolean | JobPosting$interviewsArgs<ExtArgs>
    _count?: boolean | JobPostingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobPosting"]>

  export type JobPostingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    descripiton?: boolean
    requirements?: boolean
    location?: boolean
    salaryRange?: boolean
    experienceLevel?: boolean
    department?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    recruiterId?: boolean
    recruiter?: boolean | RecruiterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobPosting"]>

  export type JobPostingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    descripiton?: boolean
    requirements?: boolean
    location?: boolean
    salaryRange?: boolean
    experienceLevel?: boolean
    department?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    recruiterId?: boolean
    recruiter?: boolean | RecruiterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobPosting"]>

  export type JobPostingSelectScalar = {
    id?: boolean
    title?: boolean
    descripiton?: boolean
    requirements?: boolean
    location?: boolean
    salaryRange?: boolean
    experienceLevel?: boolean
    department?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    recruiterId?: boolean
  }

  export type JobPostingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "descripiton" | "requirements" | "location" | "salaryRange" | "experienceLevel" | "department" | "isActive" | "createdAt" | "updatedAt" | "recruiterId", ExtArgs["result"]["jobPosting"]>
  export type JobPostingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recruiter?: boolean | RecruiterDefaultArgs<ExtArgs>
    candidates?: boolean | JobPosting$candidatesArgs<ExtArgs>
    questions?: boolean | JobPosting$questionsArgs<ExtArgs>
    interviews?: boolean | JobPosting$interviewsArgs<ExtArgs>
    _count?: boolean | JobPostingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JobPostingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recruiter?: boolean | RecruiterDefaultArgs<ExtArgs>
  }
  export type JobPostingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recruiter?: boolean | RecruiterDefaultArgs<ExtArgs>
  }

  export type $JobPostingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobPosting"
    objects: {
      recruiter: Prisma.$RecruiterPayload<ExtArgs>
      candidates: Prisma.$CandidatePayload<ExtArgs>[]
      questions: Prisma.$QuestionPayload<ExtArgs>[]
      interviews: Prisma.$InterviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      descripiton: string
      requirements: string | null
      location: string | null
      salaryRange: string | null
      experienceLevel: string | null
      department: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      recruiterId: string
    }, ExtArgs["result"]["jobPosting"]>
    composites: {}
  }

  type JobPostingGetPayload<S extends boolean | null | undefined | JobPostingDefaultArgs> = $Result.GetResult<Prisma.$JobPostingPayload, S>

  type JobPostingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobPostingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobPostingCountAggregateInputType | true
    }

  export interface JobPostingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobPosting'], meta: { name: 'JobPosting' } }
    /**
     * Find zero or one JobPosting that matches the filter.
     * @param {JobPostingFindUniqueArgs} args - Arguments to find a JobPosting
     * @example
     * // Get one JobPosting
     * const jobPosting = await prisma.jobPosting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobPostingFindUniqueArgs>(args: SelectSubset<T, JobPostingFindUniqueArgs<ExtArgs>>): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobPosting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobPostingFindUniqueOrThrowArgs} args - Arguments to find a JobPosting
     * @example
     * // Get one JobPosting
     * const jobPosting = await prisma.jobPosting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobPostingFindUniqueOrThrowArgs>(args: SelectSubset<T, JobPostingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobPosting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingFindFirstArgs} args - Arguments to find a JobPosting
     * @example
     * // Get one JobPosting
     * const jobPosting = await prisma.jobPosting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobPostingFindFirstArgs>(args?: SelectSubset<T, JobPostingFindFirstArgs<ExtArgs>>): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobPosting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingFindFirstOrThrowArgs} args - Arguments to find a JobPosting
     * @example
     * // Get one JobPosting
     * const jobPosting = await prisma.jobPosting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobPostingFindFirstOrThrowArgs>(args?: SelectSubset<T, JobPostingFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobPostings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobPostings
     * const jobPostings = await prisma.jobPosting.findMany()
     * 
     * // Get first 10 JobPostings
     * const jobPostings = await prisma.jobPosting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobPostingWithIdOnly = await prisma.jobPosting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobPostingFindManyArgs>(args?: SelectSubset<T, JobPostingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobPosting.
     * @param {JobPostingCreateArgs} args - Arguments to create a JobPosting.
     * @example
     * // Create one JobPosting
     * const JobPosting = await prisma.jobPosting.create({
     *   data: {
     *     // ... data to create a JobPosting
     *   }
     * })
     * 
     */
    create<T extends JobPostingCreateArgs>(args: SelectSubset<T, JobPostingCreateArgs<ExtArgs>>): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobPostings.
     * @param {JobPostingCreateManyArgs} args - Arguments to create many JobPostings.
     * @example
     * // Create many JobPostings
     * const jobPosting = await prisma.jobPosting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobPostingCreateManyArgs>(args?: SelectSubset<T, JobPostingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobPostings and returns the data saved in the database.
     * @param {JobPostingCreateManyAndReturnArgs} args - Arguments to create many JobPostings.
     * @example
     * // Create many JobPostings
     * const jobPosting = await prisma.jobPosting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobPostings and only return the `id`
     * const jobPostingWithIdOnly = await prisma.jobPosting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobPostingCreateManyAndReturnArgs>(args?: SelectSubset<T, JobPostingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobPosting.
     * @param {JobPostingDeleteArgs} args - Arguments to delete one JobPosting.
     * @example
     * // Delete one JobPosting
     * const JobPosting = await prisma.jobPosting.delete({
     *   where: {
     *     // ... filter to delete one JobPosting
     *   }
     * })
     * 
     */
    delete<T extends JobPostingDeleteArgs>(args: SelectSubset<T, JobPostingDeleteArgs<ExtArgs>>): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobPosting.
     * @param {JobPostingUpdateArgs} args - Arguments to update one JobPosting.
     * @example
     * // Update one JobPosting
     * const jobPosting = await prisma.jobPosting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobPostingUpdateArgs>(args: SelectSubset<T, JobPostingUpdateArgs<ExtArgs>>): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobPostings.
     * @param {JobPostingDeleteManyArgs} args - Arguments to filter JobPostings to delete.
     * @example
     * // Delete a few JobPostings
     * const { count } = await prisma.jobPosting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobPostingDeleteManyArgs>(args?: SelectSubset<T, JobPostingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobPostings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobPostings
     * const jobPosting = await prisma.jobPosting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobPostingUpdateManyArgs>(args: SelectSubset<T, JobPostingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobPostings and returns the data updated in the database.
     * @param {JobPostingUpdateManyAndReturnArgs} args - Arguments to update many JobPostings.
     * @example
     * // Update many JobPostings
     * const jobPosting = await prisma.jobPosting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobPostings and only return the `id`
     * const jobPostingWithIdOnly = await prisma.jobPosting.updateManyAndReturn({
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
    updateManyAndReturn<T extends JobPostingUpdateManyAndReturnArgs>(args: SelectSubset<T, JobPostingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobPosting.
     * @param {JobPostingUpsertArgs} args - Arguments to update or create a JobPosting.
     * @example
     * // Update or create a JobPosting
     * const jobPosting = await prisma.jobPosting.upsert({
     *   create: {
     *     // ... data to create a JobPosting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobPosting we want to update
     *   }
     * })
     */
    upsert<T extends JobPostingUpsertArgs>(args: SelectSubset<T, JobPostingUpsertArgs<ExtArgs>>): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobPostings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingCountArgs} args - Arguments to filter JobPostings to count.
     * @example
     * // Count the number of JobPostings
     * const count = await prisma.jobPosting.count({
     *   where: {
     *     // ... the filter for the JobPostings we want to count
     *   }
     * })
    **/
    count<T extends JobPostingCountArgs>(
      args?: Subset<T, JobPostingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobPostingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobPosting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobPostingAggregateArgs>(args: Subset<T, JobPostingAggregateArgs>): Prisma.PrismaPromise<GetJobPostingAggregateType<T>>

    /**
     * Group by JobPosting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingGroupByArgs} args - Group by arguments.
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
      T extends JobPostingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobPostingGroupByArgs['orderBy'] }
        : { orderBy?: JobPostingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JobPostingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobPostingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobPosting model
   */
  readonly fields: JobPostingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobPosting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobPostingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recruiter<T extends RecruiterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecruiterDefaultArgs<ExtArgs>>): Prisma__RecruiterClient<$Result.GetResult<Prisma.$RecruiterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    candidates<T extends JobPosting$candidatesArgs<ExtArgs> = {}>(args?: Subset<T, JobPosting$candidatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    questions<T extends JobPosting$questionsArgs<ExtArgs> = {}>(args?: Subset<T, JobPosting$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    interviews<T extends JobPosting$interviewsArgs<ExtArgs> = {}>(args?: Subset<T, JobPosting$interviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the JobPosting model
   */
  interface JobPostingFieldRefs {
    readonly id: FieldRef<"JobPosting", 'String'>
    readonly title: FieldRef<"JobPosting", 'String'>
    readonly descripiton: FieldRef<"JobPosting", 'String'>
    readonly requirements: FieldRef<"JobPosting", 'String'>
    readonly location: FieldRef<"JobPosting", 'String'>
    readonly salaryRange: FieldRef<"JobPosting", 'String'>
    readonly experienceLevel: FieldRef<"JobPosting", 'String'>
    readonly department: FieldRef<"JobPosting", 'String'>
    readonly isActive: FieldRef<"JobPosting", 'Boolean'>
    readonly createdAt: FieldRef<"JobPosting", 'DateTime'>
    readonly updatedAt: FieldRef<"JobPosting", 'DateTime'>
    readonly recruiterId: FieldRef<"JobPosting", 'String'>
  }
    

  // Custom InputTypes
  /**
   * JobPosting findUnique
   */
  export type JobPostingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingInclude<ExtArgs> | null
    /**
     * Filter, which JobPosting to fetch.
     */
    where: JobPostingWhereUniqueInput
  }

  /**
   * JobPosting findUniqueOrThrow
   */
  export type JobPostingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingInclude<ExtArgs> | null
    /**
     * Filter, which JobPosting to fetch.
     */
    where: JobPostingWhereUniqueInput
  }

  /**
   * JobPosting findFirst
   */
  export type JobPostingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingInclude<ExtArgs> | null
    /**
     * Filter, which JobPosting to fetch.
     */
    where?: JobPostingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobPostings to fetch.
     */
    orderBy?: JobPostingOrderByWithRelationInput | JobPostingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobPostings.
     */
    cursor?: JobPostingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobPostings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobPostings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobPostings.
     */
    distinct?: JobPostingScalarFieldEnum | JobPostingScalarFieldEnum[]
  }

  /**
   * JobPosting findFirstOrThrow
   */
  export type JobPostingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingInclude<ExtArgs> | null
    /**
     * Filter, which JobPosting to fetch.
     */
    where?: JobPostingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobPostings to fetch.
     */
    orderBy?: JobPostingOrderByWithRelationInput | JobPostingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobPostings.
     */
    cursor?: JobPostingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobPostings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobPostings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobPostings.
     */
    distinct?: JobPostingScalarFieldEnum | JobPostingScalarFieldEnum[]
  }

  /**
   * JobPosting findMany
   */
  export type JobPostingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingInclude<ExtArgs> | null
    /**
     * Filter, which JobPostings to fetch.
     */
    where?: JobPostingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobPostings to fetch.
     */
    orderBy?: JobPostingOrderByWithRelationInput | JobPostingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobPostings.
     */
    cursor?: JobPostingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobPostings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobPostings.
     */
    skip?: number
    distinct?: JobPostingScalarFieldEnum | JobPostingScalarFieldEnum[]
  }

  /**
   * JobPosting create
   */
  export type JobPostingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingInclude<ExtArgs> | null
    /**
     * The data needed to create a JobPosting.
     */
    data: XOR<JobPostingCreateInput, JobPostingUncheckedCreateInput>
  }

  /**
   * JobPosting createMany
   */
  export type JobPostingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobPostings.
     */
    data: JobPostingCreateManyInput | JobPostingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobPosting createManyAndReturn
   */
  export type JobPostingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * The data used to create many JobPostings.
     */
    data: JobPostingCreateManyInput | JobPostingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobPosting update
   */
  export type JobPostingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingInclude<ExtArgs> | null
    /**
     * The data needed to update a JobPosting.
     */
    data: XOR<JobPostingUpdateInput, JobPostingUncheckedUpdateInput>
    /**
     * Choose, which JobPosting to update.
     */
    where: JobPostingWhereUniqueInput
  }

  /**
   * JobPosting updateMany
   */
  export type JobPostingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobPostings.
     */
    data: XOR<JobPostingUpdateManyMutationInput, JobPostingUncheckedUpdateManyInput>
    /**
     * Filter which JobPostings to update
     */
    where?: JobPostingWhereInput
    /**
     * Limit how many JobPostings to update.
     */
    limit?: number
  }

  /**
   * JobPosting updateManyAndReturn
   */
  export type JobPostingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * The data used to update JobPostings.
     */
    data: XOR<JobPostingUpdateManyMutationInput, JobPostingUncheckedUpdateManyInput>
    /**
     * Filter which JobPostings to update
     */
    where?: JobPostingWhereInput
    /**
     * Limit how many JobPostings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobPosting upsert
   */
  export type JobPostingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingInclude<ExtArgs> | null
    /**
     * The filter to search for the JobPosting to update in case it exists.
     */
    where: JobPostingWhereUniqueInput
    /**
     * In case the JobPosting found by the `where` argument doesn't exist, create a new JobPosting with this data.
     */
    create: XOR<JobPostingCreateInput, JobPostingUncheckedCreateInput>
    /**
     * In case the JobPosting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobPostingUpdateInput, JobPostingUncheckedUpdateInput>
  }

  /**
   * JobPosting delete
   */
  export type JobPostingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingInclude<ExtArgs> | null
    /**
     * Filter which JobPosting to delete.
     */
    where: JobPostingWhereUniqueInput
  }

  /**
   * JobPosting deleteMany
   */
  export type JobPostingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobPostings to delete
     */
    where?: JobPostingWhereInput
    /**
     * Limit how many JobPostings to delete.
     */
    limit?: number
  }

  /**
   * JobPosting.candidates
   */
  export type JobPosting$candidatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    where?: CandidateWhereInput
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    cursor?: CandidateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * JobPosting.questions
   */
  export type JobPosting$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * JobPosting.interviews
   */
  export type JobPosting$interviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    where?: InterviewWhereInput
    orderBy?: InterviewOrderByWithRelationInput | InterviewOrderByWithRelationInput[]
    cursor?: InterviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InterviewScalarFieldEnum | InterviewScalarFieldEnum[]
  }

  /**
   * JobPosting without action
   */
  export type JobPostingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingInclude<ExtArgs> | null
  }


  /**
   * Model Candidate
   */

  export type AggregateCandidate = {
    _count: CandidateCountAggregateOutputType | null
    _min: CandidateMinAggregateOutputType | null
    _max: CandidateMaxAggregateOutputType | null
  }

  export type CandidateMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phoneNo: string | null
    resume: string | null
    experience: string | null
    currentCompany: string | null
    currentRole: string | null
    expectedSalary: string | null
    noticePeriod: string | null
    location: string | null
    status: $Enums.CandidateStatus | null
    appliedAt: Date | null
    updatedAt: Date | null
    jobPostingId: string | null
  }

  export type CandidateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phoneNo: string | null
    resume: string | null
    experience: string | null
    currentCompany: string | null
    currentRole: string | null
    expectedSalary: string | null
    noticePeriod: string | null
    location: string | null
    status: $Enums.CandidateStatus | null
    appliedAt: Date | null
    updatedAt: Date | null
    jobPostingId: string | null
  }

  export type CandidateCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phoneNo: number
    resume: number
    experience: number
    skills: number
    currentCompany: number
    currentRole: number
    expectedSalary: number
    noticePeriod: number
    location: number
    status: number
    appliedAt: number
    updatedAt: number
    jobPostingId: number
    _all: number
  }


  export type CandidateMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phoneNo?: true
    resume?: true
    experience?: true
    currentCompany?: true
    currentRole?: true
    expectedSalary?: true
    noticePeriod?: true
    location?: true
    status?: true
    appliedAt?: true
    updatedAt?: true
    jobPostingId?: true
  }

  export type CandidateMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phoneNo?: true
    resume?: true
    experience?: true
    currentCompany?: true
    currentRole?: true
    expectedSalary?: true
    noticePeriod?: true
    location?: true
    status?: true
    appliedAt?: true
    updatedAt?: true
    jobPostingId?: true
  }

  export type CandidateCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phoneNo?: true
    resume?: true
    experience?: true
    skills?: true
    currentCompany?: true
    currentRole?: true
    expectedSalary?: true
    noticePeriod?: true
    location?: true
    status?: true
    appliedAt?: true
    updatedAt?: true
    jobPostingId?: true
    _all?: true
  }

  export type CandidateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Candidate to aggregate.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Candidates
    **/
    _count?: true | CandidateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CandidateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CandidateMaxAggregateInputType
  }

  export type GetCandidateAggregateType<T extends CandidateAggregateArgs> = {
        [P in keyof T & keyof AggregateCandidate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCandidate[P]>
      : GetScalarType<T[P], AggregateCandidate[P]>
  }




  export type CandidateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateWhereInput
    orderBy?: CandidateOrderByWithAggregationInput | CandidateOrderByWithAggregationInput[]
    by: CandidateScalarFieldEnum[] | CandidateScalarFieldEnum
    having?: CandidateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CandidateCountAggregateInputType | true
    _min?: CandidateMinAggregateInputType
    _max?: CandidateMaxAggregateInputType
  }

  export type CandidateGroupByOutputType = {
    id: string
    name: string
    email: string
    phoneNo: string
    resume: string | null
    experience: string | null
    skills: string[]
    currentCompany: string | null
    currentRole: string | null
    expectedSalary: string | null
    noticePeriod: string | null
    location: string | null
    status: $Enums.CandidateStatus
    appliedAt: Date
    updatedAt: Date
    jobPostingId: string
    _count: CandidateCountAggregateOutputType | null
    _min: CandidateMinAggregateOutputType | null
    _max: CandidateMaxAggregateOutputType | null
  }

  type GetCandidateGroupByPayload<T extends CandidateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CandidateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CandidateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CandidateGroupByOutputType[P]>
            : GetScalarType<T[P], CandidateGroupByOutputType[P]>
        }
      >
    >


  export type CandidateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phoneNo?: boolean
    resume?: boolean
    experience?: boolean
    skills?: boolean
    currentCompany?: boolean
    currentRole?: boolean
    expectedSalary?: boolean
    noticePeriod?: boolean
    location?: boolean
    status?: boolean
    appliedAt?: boolean
    updatedAt?: boolean
    jobPostingId?: boolean
    jobPosting?: boolean | JobPostingDefaultArgs<ExtArgs>
    interviews?: boolean | Candidate$interviewsArgs<ExtArgs>
    _count?: boolean | CandidateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidate"]>

  export type CandidateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phoneNo?: boolean
    resume?: boolean
    experience?: boolean
    skills?: boolean
    currentCompany?: boolean
    currentRole?: boolean
    expectedSalary?: boolean
    noticePeriod?: boolean
    location?: boolean
    status?: boolean
    appliedAt?: boolean
    updatedAt?: boolean
    jobPostingId?: boolean
    jobPosting?: boolean | JobPostingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidate"]>

  export type CandidateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phoneNo?: boolean
    resume?: boolean
    experience?: boolean
    skills?: boolean
    currentCompany?: boolean
    currentRole?: boolean
    expectedSalary?: boolean
    noticePeriod?: boolean
    location?: boolean
    status?: boolean
    appliedAt?: boolean
    updatedAt?: boolean
    jobPostingId?: boolean
    jobPosting?: boolean | JobPostingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidate"]>

  export type CandidateSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phoneNo?: boolean
    resume?: boolean
    experience?: boolean
    skills?: boolean
    currentCompany?: boolean
    currentRole?: boolean
    expectedSalary?: boolean
    noticePeriod?: boolean
    location?: boolean
    status?: boolean
    appliedAt?: boolean
    updatedAt?: boolean
    jobPostingId?: boolean
  }

  export type CandidateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phoneNo" | "resume" | "experience" | "skills" | "currentCompany" | "currentRole" | "expectedSalary" | "noticePeriod" | "location" | "status" | "appliedAt" | "updatedAt" | "jobPostingId", ExtArgs["result"]["candidate"]>
  export type CandidateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobPosting?: boolean | JobPostingDefaultArgs<ExtArgs>
    interviews?: boolean | Candidate$interviewsArgs<ExtArgs>
    _count?: boolean | CandidateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CandidateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobPosting?: boolean | JobPostingDefaultArgs<ExtArgs>
  }
  export type CandidateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobPosting?: boolean | JobPostingDefaultArgs<ExtArgs>
  }

  export type $CandidatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Candidate"
    objects: {
      jobPosting: Prisma.$JobPostingPayload<ExtArgs>
      interviews: Prisma.$InterviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phoneNo: string
      resume: string | null
      experience: string | null
      skills: string[]
      currentCompany: string | null
      currentRole: string | null
      expectedSalary: string | null
      noticePeriod: string | null
      location: string | null
      status: $Enums.CandidateStatus
      appliedAt: Date
      updatedAt: Date
      jobPostingId: string
    }, ExtArgs["result"]["candidate"]>
    composites: {}
  }

  type CandidateGetPayload<S extends boolean | null | undefined | CandidateDefaultArgs> = $Result.GetResult<Prisma.$CandidatePayload, S>

  type CandidateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CandidateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CandidateCountAggregateInputType | true
    }

  export interface CandidateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Candidate'], meta: { name: 'Candidate' } }
    /**
     * Find zero or one Candidate that matches the filter.
     * @param {CandidateFindUniqueArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CandidateFindUniqueArgs>(args: SelectSubset<T, CandidateFindUniqueArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Candidate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CandidateFindUniqueOrThrowArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CandidateFindUniqueOrThrowArgs>(args: SelectSubset<T, CandidateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateFindFirstArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CandidateFindFirstArgs>(args?: SelectSubset<T, CandidateFindFirstArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateFindFirstOrThrowArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CandidateFindFirstOrThrowArgs>(args?: SelectSubset<T, CandidateFindFirstOrThrowArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Candidates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Candidates
     * const candidates = await prisma.candidate.findMany()
     * 
     * // Get first 10 Candidates
     * const candidates = await prisma.candidate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const candidateWithIdOnly = await prisma.candidate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CandidateFindManyArgs>(args?: SelectSubset<T, CandidateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Candidate.
     * @param {CandidateCreateArgs} args - Arguments to create a Candidate.
     * @example
     * // Create one Candidate
     * const Candidate = await prisma.candidate.create({
     *   data: {
     *     // ... data to create a Candidate
     *   }
     * })
     * 
     */
    create<T extends CandidateCreateArgs>(args: SelectSubset<T, CandidateCreateArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Candidates.
     * @param {CandidateCreateManyArgs} args - Arguments to create many Candidates.
     * @example
     * // Create many Candidates
     * const candidate = await prisma.candidate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CandidateCreateManyArgs>(args?: SelectSubset<T, CandidateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Candidates and returns the data saved in the database.
     * @param {CandidateCreateManyAndReturnArgs} args - Arguments to create many Candidates.
     * @example
     * // Create many Candidates
     * const candidate = await prisma.candidate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Candidates and only return the `id`
     * const candidateWithIdOnly = await prisma.candidate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CandidateCreateManyAndReturnArgs>(args?: SelectSubset<T, CandidateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Candidate.
     * @param {CandidateDeleteArgs} args - Arguments to delete one Candidate.
     * @example
     * // Delete one Candidate
     * const Candidate = await prisma.candidate.delete({
     *   where: {
     *     // ... filter to delete one Candidate
     *   }
     * })
     * 
     */
    delete<T extends CandidateDeleteArgs>(args: SelectSubset<T, CandidateDeleteArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Candidate.
     * @param {CandidateUpdateArgs} args - Arguments to update one Candidate.
     * @example
     * // Update one Candidate
     * const candidate = await prisma.candidate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CandidateUpdateArgs>(args: SelectSubset<T, CandidateUpdateArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Candidates.
     * @param {CandidateDeleteManyArgs} args - Arguments to filter Candidates to delete.
     * @example
     * // Delete a few Candidates
     * const { count } = await prisma.candidate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CandidateDeleteManyArgs>(args?: SelectSubset<T, CandidateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Candidates
     * const candidate = await prisma.candidate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CandidateUpdateManyArgs>(args: SelectSubset<T, CandidateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidates and returns the data updated in the database.
     * @param {CandidateUpdateManyAndReturnArgs} args - Arguments to update many Candidates.
     * @example
     * // Update many Candidates
     * const candidate = await prisma.candidate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Candidates and only return the `id`
     * const candidateWithIdOnly = await prisma.candidate.updateManyAndReturn({
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
    updateManyAndReturn<T extends CandidateUpdateManyAndReturnArgs>(args: SelectSubset<T, CandidateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Candidate.
     * @param {CandidateUpsertArgs} args - Arguments to update or create a Candidate.
     * @example
     * // Update or create a Candidate
     * const candidate = await prisma.candidate.upsert({
     *   create: {
     *     // ... data to create a Candidate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Candidate we want to update
     *   }
     * })
     */
    upsert<T extends CandidateUpsertArgs>(args: SelectSubset<T, CandidateUpsertArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Candidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateCountArgs} args - Arguments to filter Candidates to count.
     * @example
     * // Count the number of Candidates
     * const count = await prisma.candidate.count({
     *   where: {
     *     // ... the filter for the Candidates we want to count
     *   }
     * })
    **/
    count<T extends CandidateCountArgs>(
      args?: Subset<T, CandidateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CandidateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Candidate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CandidateAggregateArgs>(args: Subset<T, CandidateAggregateArgs>): Prisma.PrismaPromise<GetCandidateAggregateType<T>>

    /**
     * Group by Candidate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateGroupByArgs} args - Group by arguments.
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
      T extends CandidateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CandidateGroupByArgs['orderBy'] }
        : { orderBy?: CandidateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CandidateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCandidateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Candidate model
   */
  readonly fields: CandidateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Candidate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CandidateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobPosting<T extends JobPostingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobPostingDefaultArgs<ExtArgs>>): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    interviews<T extends Candidate$interviewsArgs<ExtArgs> = {}>(args?: Subset<T, Candidate$interviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Candidate model
   */
  interface CandidateFieldRefs {
    readonly id: FieldRef<"Candidate", 'String'>
    readonly name: FieldRef<"Candidate", 'String'>
    readonly email: FieldRef<"Candidate", 'String'>
    readonly phoneNo: FieldRef<"Candidate", 'String'>
    readonly resume: FieldRef<"Candidate", 'String'>
    readonly experience: FieldRef<"Candidate", 'String'>
    readonly skills: FieldRef<"Candidate", 'String[]'>
    readonly currentCompany: FieldRef<"Candidate", 'String'>
    readonly currentRole: FieldRef<"Candidate", 'String'>
    readonly expectedSalary: FieldRef<"Candidate", 'String'>
    readonly noticePeriod: FieldRef<"Candidate", 'String'>
    readonly location: FieldRef<"Candidate", 'String'>
    readonly status: FieldRef<"Candidate", 'CandidateStatus'>
    readonly appliedAt: FieldRef<"Candidate", 'DateTime'>
    readonly updatedAt: FieldRef<"Candidate", 'DateTime'>
    readonly jobPostingId: FieldRef<"Candidate", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Candidate findUnique
   */
  export type CandidateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate findUniqueOrThrow
   */
  export type CandidateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate findFirst
   */
  export type CandidateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Candidates.
     */
    cursor?: CandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Candidates.
     */
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * Candidate findFirstOrThrow
   */
  export type CandidateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Candidates.
     */
    cursor?: CandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Candidates.
     */
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * Candidate findMany
   */
  export type CandidateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidates to fetch.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Candidates.
     */
    cursor?: CandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * Candidate create
   */
  export type CandidateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * The data needed to create a Candidate.
     */
    data: XOR<CandidateCreateInput, CandidateUncheckedCreateInput>
  }

  /**
   * Candidate createMany
   */
  export type CandidateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Candidates.
     */
    data: CandidateCreateManyInput | CandidateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Candidate createManyAndReturn
   */
  export type CandidateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * The data used to create many Candidates.
     */
    data: CandidateCreateManyInput | CandidateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Candidate update
   */
  export type CandidateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * The data needed to update a Candidate.
     */
    data: XOR<CandidateUpdateInput, CandidateUncheckedUpdateInput>
    /**
     * Choose, which Candidate to update.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate updateMany
   */
  export type CandidateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Candidates.
     */
    data: XOR<CandidateUpdateManyMutationInput, CandidateUncheckedUpdateManyInput>
    /**
     * Filter which Candidates to update
     */
    where?: CandidateWhereInput
    /**
     * Limit how many Candidates to update.
     */
    limit?: number
  }

  /**
   * Candidate updateManyAndReturn
   */
  export type CandidateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * The data used to update Candidates.
     */
    data: XOR<CandidateUpdateManyMutationInput, CandidateUncheckedUpdateManyInput>
    /**
     * Filter which Candidates to update
     */
    where?: CandidateWhereInput
    /**
     * Limit how many Candidates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Candidate upsert
   */
  export type CandidateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * The filter to search for the Candidate to update in case it exists.
     */
    where: CandidateWhereUniqueInput
    /**
     * In case the Candidate found by the `where` argument doesn't exist, create a new Candidate with this data.
     */
    create: XOR<CandidateCreateInput, CandidateUncheckedCreateInput>
    /**
     * In case the Candidate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CandidateUpdateInput, CandidateUncheckedUpdateInput>
  }

  /**
   * Candidate delete
   */
  export type CandidateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter which Candidate to delete.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate deleteMany
   */
  export type CandidateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Candidates to delete
     */
    where?: CandidateWhereInput
    /**
     * Limit how many Candidates to delete.
     */
    limit?: number
  }

  /**
   * Candidate.interviews
   */
  export type Candidate$interviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    where?: InterviewWhereInput
    orderBy?: InterviewOrderByWithRelationInput | InterviewOrderByWithRelationInput[]
    cursor?: InterviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InterviewScalarFieldEnum | InterviewScalarFieldEnum[]
  }

  /**
   * Candidate without action
   */
  export type CandidateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    maxDuration: number | null
    order: number | null
  }

  export type QuestionSumAggregateOutputType = {
    maxDuration: number | null
    order: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    questionText: string | null
    category: string | null
    difficulty: $Enums.Difficulty | null
    expectedAnswer: string | null
    maxDuration: number | null
    order: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    jobPostingId: string | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    questionText: string | null
    category: string | null
    difficulty: $Enums.Difficulty | null
    expectedAnswer: string | null
    maxDuration: number | null
    order: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    jobPostingId: string | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    questionText: number
    category: number
    difficulty: number
    expectedAnswer: number
    keywords: number
    maxDuration: number
    order: number
    isActive: number
    createdAt: number
    updatedAt: number
    jobPostingId: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    maxDuration?: true
    order?: true
  }

  export type QuestionSumAggregateInputType = {
    maxDuration?: true
    order?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    questionText?: true
    category?: true
    difficulty?: true
    expectedAnswer?: true
    maxDuration?: true
    order?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    jobPostingId?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    questionText?: true
    category?: true
    difficulty?: true
    expectedAnswer?: true
    maxDuration?: true
    order?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    jobPostingId?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    questionText?: true
    category?: true
    difficulty?: true
    expectedAnswer?: true
    keywords?: true
    maxDuration?: true
    order?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    jobPostingId?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    questionText: string
    category: string | null
    difficulty: $Enums.Difficulty
    expectedAnswer: string | null
    keywords: string[]
    maxDuration: number | null
    order: number | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    jobPostingId: string
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionText?: boolean
    category?: boolean
    difficulty?: boolean
    expectedAnswer?: boolean
    keywords?: boolean
    maxDuration?: boolean
    order?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobPostingId?: boolean
    jobPosting?: boolean | JobPostingDefaultArgs<ExtArgs>
    responses?: boolean | Question$responsesArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionText?: boolean
    category?: boolean
    difficulty?: boolean
    expectedAnswer?: boolean
    keywords?: boolean
    maxDuration?: boolean
    order?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobPostingId?: boolean
    jobPosting?: boolean | JobPostingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionText?: boolean
    category?: boolean
    difficulty?: boolean
    expectedAnswer?: boolean
    keywords?: boolean
    maxDuration?: boolean
    order?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobPostingId?: boolean
    jobPosting?: boolean | JobPostingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    questionText?: boolean
    category?: boolean
    difficulty?: boolean
    expectedAnswer?: boolean
    keywords?: boolean
    maxDuration?: boolean
    order?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobPostingId?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "questionText" | "category" | "difficulty" | "expectedAnswer" | "keywords" | "maxDuration" | "order" | "isActive" | "createdAt" | "updatedAt" | "jobPostingId", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobPosting?: boolean | JobPostingDefaultArgs<ExtArgs>
    responses?: boolean | Question$responsesArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobPosting?: boolean | JobPostingDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobPosting?: boolean | JobPostingDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      jobPosting: Prisma.$JobPostingPayload<ExtArgs>
      responses: Prisma.$InterviewResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      questionText: string
      category: string | null
      difficulty: $Enums.Difficulty
      expectedAnswer: string | null
      keywords: string[]
      maxDuration: number | null
      order: number | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      jobPostingId: string
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
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
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobPosting<T extends JobPostingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobPostingDefaultArgs<ExtArgs>>): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    responses<T extends Question$responsesArgs<ExtArgs> = {}>(args?: Subset<T, Question$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly questionText: FieldRef<"Question", 'String'>
    readonly category: FieldRef<"Question", 'String'>
    readonly difficulty: FieldRef<"Question", 'Difficulty'>
    readonly expectedAnswer: FieldRef<"Question", 'String'>
    readonly keywords: FieldRef<"Question", 'String[]'>
    readonly maxDuration: FieldRef<"Question", 'Int'>
    readonly order: FieldRef<"Question", 'Int'>
    readonly isActive: FieldRef<"Question", 'Boolean'>
    readonly createdAt: FieldRef<"Question", 'DateTime'>
    readonly updatedAt: FieldRef<"Question", 'DateTime'>
    readonly jobPostingId: FieldRef<"Question", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question updateManyAndReturn
   */
  export type QuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question.responses
   */
  export type Question$responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewResponse
     */
    select?: InterviewResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewResponse
     */
    omit?: InterviewResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewResponseInclude<ExtArgs> | null
    where?: InterviewResponseWhereInput
    orderBy?: InterviewResponseOrderByWithRelationInput | InterviewResponseOrderByWithRelationInput[]
    cursor?: InterviewResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InterviewResponseScalarFieldEnum | InterviewResponseScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model Interview
   */

  export type AggregateInterview = {
    _count: InterviewCountAggregateOutputType | null
    _avg: InterviewAvgAggregateOutputType | null
    _sum: InterviewSumAggregateOutputType | null
    _min: InterviewMinAggregateOutputType | null
    _max: InterviewMaxAggregateOutputType | null
  }

  export type InterviewAvgAggregateOutputType = {
    duration: number | null
    overallScore: number | null
  }

  export type InterviewSumAggregateOutputType = {
    duration: number | null
    overallScore: number | null
  }

  export type InterviewMinAggregateOutputType = {
    id: string | null
    status: $Enums.InterviewStatus | null
    scheduedAt: Date | null
    startedAt: Date | null
    completedAt: Date | null
    duration: number | null
    overallScore: number | null
    overallRating: $Enums.Rating | null
    notes: string | null
    calRecordingUrl: string | null
    transscript: string | null
    feedback: string | null
    createdAt: Date | null
    updatedAt: Date | null
    candidateId: string | null
    jobPostingId: string | null
  }

  export type InterviewMaxAggregateOutputType = {
    id: string | null
    status: $Enums.InterviewStatus | null
    scheduedAt: Date | null
    startedAt: Date | null
    completedAt: Date | null
    duration: number | null
    overallScore: number | null
    overallRating: $Enums.Rating | null
    notes: string | null
    calRecordingUrl: string | null
    transscript: string | null
    feedback: string | null
    createdAt: Date | null
    updatedAt: Date | null
    candidateId: string | null
    jobPostingId: string | null
  }

  export type InterviewCountAggregateOutputType = {
    id: number
    status: number
    scheduedAt: number
    startedAt: number
    completedAt: number
    duration: number
    overallScore: number
    overallRating: number
    notes: number
    calRecordingUrl: number
    transscript: number
    feedback: number
    createdAt: number
    updatedAt: number
    candidateId: number
    jobPostingId: number
    _all: number
  }


  export type InterviewAvgAggregateInputType = {
    duration?: true
    overallScore?: true
  }

  export type InterviewSumAggregateInputType = {
    duration?: true
    overallScore?: true
  }

  export type InterviewMinAggregateInputType = {
    id?: true
    status?: true
    scheduedAt?: true
    startedAt?: true
    completedAt?: true
    duration?: true
    overallScore?: true
    overallRating?: true
    notes?: true
    calRecordingUrl?: true
    transscript?: true
    feedback?: true
    createdAt?: true
    updatedAt?: true
    candidateId?: true
    jobPostingId?: true
  }

  export type InterviewMaxAggregateInputType = {
    id?: true
    status?: true
    scheduedAt?: true
    startedAt?: true
    completedAt?: true
    duration?: true
    overallScore?: true
    overallRating?: true
    notes?: true
    calRecordingUrl?: true
    transscript?: true
    feedback?: true
    createdAt?: true
    updatedAt?: true
    candidateId?: true
    jobPostingId?: true
  }

  export type InterviewCountAggregateInputType = {
    id?: true
    status?: true
    scheduedAt?: true
    startedAt?: true
    completedAt?: true
    duration?: true
    overallScore?: true
    overallRating?: true
    notes?: true
    calRecordingUrl?: true
    transscript?: true
    feedback?: true
    createdAt?: true
    updatedAt?: true
    candidateId?: true
    jobPostingId?: true
    _all?: true
  }

  export type InterviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Interview to aggregate.
     */
    where?: InterviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interviews to fetch.
     */
    orderBy?: InterviewOrderByWithRelationInput | InterviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InterviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Interviews
    **/
    _count?: true | InterviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InterviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InterviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InterviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InterviewMaxAggregateInputType
  }

  export type GetInterviewAggregateType<T extends InterviewAggregateArgs> = {
        [P in keyof T & keyof AggregateInterview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInterview[P]>
      : GetScalarType<T[P], AggregateInterview[P]>
  }




  export type InterviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewWhereInput
    orderBy?: InterviewOrderByWithAggregationInput | InterviewOrderByWithAggregationInput[]
    by: InterviewScalarFieldEnum[] | InterviewScalarFieldEnum
    having?: InterviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InterviewCountAggregateInputType | true
    _avg?: InterviewAvgAggregateInputType
    _sum?: InterviewSumAggregateInputType
    _min?: InterviewMinAggregateInputType
    _max?: InterviewMaxAggregateInputType
  }

  export type InterviewGroupByOutputType = {
    id: string
    status: $Enums.InterviewStatus
    scheduedAt: Date | null
    startedAt: Date | null
    completedAt: Date | null
    duration: number | null
    overallScore: number | null
    overallRating: $Enums.Rating | null
    notes: string | null
    calRecordingUrl: string | null
    transscript: string | null
    feedback: string | null
    createdAt: Date
    updatedAt: Date
    candidateId: string
    jobPostingId: string
    _count: InterviewCountAggregateOutputType | null
    _avg: InterviewAvgAggregateOutputType | null
    _sum: InterviewSumAggregateOutputType | null
    _min: InterviewMinAggregateOutputType | null
    _max: InterviewMaxAggregateOutputType | null
  }

  type GetInterviewGroupByPayload<T extends InterviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InterviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InterviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InterviewGroupByOutputType[P]>
            : GetScalarType<T[P], InterviewGroupByOutputType[P]>
        }
      >
    >


  export type InterviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    scheduedAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
    duration?: boolean
    overallScore?: boolean
    overallRating?: boolean
    notes?: boolean
    calRecordingUrl?: boolean
    transscript?: boolean
    feedback?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    candidateId?: boolean
    jobPostingId?: boolean
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
    jobPosting?: boolean | JobPostingDefaultArgs<ExtArgs>
    responses?: boolean | Interview$responsesArgs<ExtArgs>
    _count?: boolean | InterviewCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interview"]>

  export type InterviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    scheduedAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
    duration?: boolean
    overallScore?: boolean
    overallRating?: boolean
    notes?: boolean
    calRecordingUrl?: boolean
    transscript?: boolean
    feedback?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    candidateId?: boolean
    jobPostingId?: boolean
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
    jobPosting?: boolean | JobPostingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interview"]>

  export type InterviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    scheduedAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
    duration?: boolean
    overallScore?: boolean
    overallRating?: boolean
    notes?: boolean
    calRecordingUrl?: boolean
    transscript?: boolean
    feedback?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    candidateId?: boolean
    jobPostingId?: boolean
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
    jobPosting?: boolean | JobPostingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interview"]>

  export type InterviewSelectScalar = {
    id?: boolean
    status?: boolean
    scheduedAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
    duration?: boolean
    overallScore?: boolean
    overallRating?: boolean
    notes?: boolean
    calRecordingUrl?: boolean
    transscript?: boolean
    feedback?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    candidateId?: boolean
    jobPostingId?: boolean
  }

  export type InterviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "scheduedAt" | "startedAt" | "completedAt" | "duration" | "overallScore" | "overallRating" | "notes" | "calRecordingUrl" | "transscript" | "feedback" | "createdAt" | "updatedAt" | "candidateId" | "jobPostingId", ExtArgs["result"]["interview"]>
  export type InterviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
    jobPosting?: boolean | JobPostingDefaultArgs<ExtArgs>
    responses?: boolean | Interview$responsesArgs<ExtArgs>
    _count?: boolean | InterviewCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InterviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
    jobPosting?: boolean | JobPostingDefaultArgs<ExtArgs>
  }
  export type InterviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
    jobPosting?: boolean | JobPostingDefaultArgs<ExtArgs>
  }

  export type $InterviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Interview"
    objects: {
      candidate: Prisma.$CandidatePayload<ExtArgs>
      jobPosting: Prisma.$JobPostingPayload<ExtArgs>
      responses: Prisma.$InterviewResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: $Enums.InterviewStatus
      scheduedAt: Date | null
      startedAt: Date | null
      completedAt: Date | null
      duration: number | null
      overallScore: number | null
      overallRating: $Enums.Rating | null
      notes: string | null
      calRecordingUrl: string | null
      transscript: string | null
      feedback: string | null
      createdAt: Date
      updatedAt: Date
      candidateId: string
      jobPostingId: string
    }, ExtArgs["result"]["interview"]>
    composites: {}
  }

  type InterviewGetPayload<S extends boolean | null | undefined | InterviewDefaultArgs> = $Result.GetResult<Prisma.$InterviewPayload, S>

  type InterviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InterviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InterviewCountAggregateInputType | true
    }

  export interface InterviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Interview'], meta: { name: 'Interview' } }
    /**
     * Find zero or one Interview that matches the filter.
     * @param {InterviewFindUniqueArgs} args - Arguments to find a Interview
     * @example
     * // Get one Interview
     * const interview = await prisma.interview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InterviewFindUniqueArgs>(args: SelectSubset<T, InterviewFindUniqueArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Interview that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InterviewFindUniqueOrThrowArgs} args - Arguments to find a Interview
     * @example
     * // Get one Interview
     * const interview = await prisma.interview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InterviewFindUniqueOrThrowArgs>(args: SelectSubset<T, InterviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Interview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewFindFirstArgs} args - Arguments to find a Interview
     * @example
     * // Get one Interview
     * const interview = await prisma.interview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InterviewFindFirstArgs>(args?: SelectSubset<T, InterviewFindFirstArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Interview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewFindFirstOrThrowArgs} args - Arguments to find a Interview
     * @example
     * // Get one Interview
     * const interview = await prisma.interview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InterviewFindFirstOrThrowArgs>(args?: SelectSubset<T, InterviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Interviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Interviews
     * const interviews = await prisma.interview.findMany()
     * 
     * // Get first 10 Interviews
     * const interviews = await prisma.interview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interviewWithIdOnly = await prisma.interview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InterviewFindManyArgs>(args?: SelectSubset<T, InterviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Interview.
     * @param {InterviewCreateArgs} args - Arguments to create a Interview.
     * @example
     * // Create one Interview
     * const Interview = await prisma.interview.create({
     *   data: {
     *     // ... data to create a Interview
     *   }
     * })
     * 
     */
    create<T extends InterviewCreateArgs>(args: SelectSubset<T, InterviewCreateArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Interviews.
     * @param {InterviewCreateManyArgs} args - Arguments to create many Interviews.
     * @example
     * // Create many Interviews
     * const interview = await prisma.interview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InterviewCreateManyArgs>(args?: SelectSubset<T, InterviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Interviews and returns the data saved in the database.
     * @param {InterviewCreateManyAndReturnArgs} args - Arguments to create many Interviews.
     * @example
     * // Create many Interviews
     * const interview = await prisma.interview.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Interviews and only return the `id`
     * const interviewWithIdOnly = await prisma.interview.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InterviewCreateManyAndReturnArgs>(args?: SelectSubset<T, InterviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Interview.
     * @param {InterviewDeleteArgs} args - Arguments to delete one Interview.
     * @example
     * // Delete one Interview
     * const Interview = await prisma.interview.delete({
     *   where: {
     *     // ... filter to delete one Interview
     *   }
     * })
     * 
     */
    delete<T extends InterviewDeleteArgs>(args: SelectSubset<T, InterviewDeleteArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Interview.
     * @param {InterviewUpdateArgs} args - Arguments to update one Interview.
     * @example
     * // Update one Interview
     * const interview = await prisma.interview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InterviewUpdateArgs>(args: SelectSubset<T, InterviewUpdateArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Interviews.
     * @param {InterviewDeleteManyArgs} args - Arguments to filter Interviews to delete.
     * @example
     * // Delete a few Interviews
     * const { count } = await prisma.interview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InterviewDeleteManyArgs>(args?: SelectSubset<T, InterviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Interviews
     * const interview = await prisma.interview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InterviewUpdateManyArgs>(args: SelectSubset<T, InterviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interviews and returns the data updated in the database.
     * @param {InterviewUpdateManyAndReturnArgs} args - Arguments to update many Interviews.
     * @example
     * // Update many Interviews
     * const interview = await prisma.interview.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Interviews and only return the `id`
     * const interviewWithIdOnly = await prisma.interview.updateManyAndReturn({
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
    updateManyAndReturn<T extends InterviewUpdateManyAndReturnArgs>(args: SelectSubset<T, InterviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Interview.
     * @param {InterviewUpsertArgs} args - Arguments to update or create a Interview.
     * @example
     * // Update or create a Interview
     * const interview = await prisma.interview.upsert({
     *   create: {
     *     // ... data to create a Interview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Interview we want to update
     *   }
     * })
     */
    upsert<T extends InterviewUpsertArgs>(args: SelectSubset<T, InterviewUpsertArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Interviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewCountArgs} args - Arguments to filter Interviews to count.
     * @example
     * // Count the number of Interviews
     * const count = await prisma.interview.count({
     *   where: {
     *     // ... the filter for the Interviews we want to count
     *   }
     * })
    **/
    count<T extends InterviewCountArgs>(
      args?: Subset<T, InterviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InterviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Interview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InterviewAggregateArgs>(args: Subset<T, InterviewAggregateArgs>): Prisma.PrismaPromise<GetInterviewAggregateType<T>>

    /**
     * Group by Interview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewGroupByArgs} args - Group by arguments.
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
      T extends InterviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InterviewGroupByArgs['orderBy'] }
        : { orderBy?: InterviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InterviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Interview model
   */
  readonly fields: InterviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Interview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InterviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidate<T extends CandidateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CandidateDefaultArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    jobPosting<T extends JobPostingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobPostingDefaultArgs<ExtArgs>>): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    responses<T extends Interview$responsesArgs<ExtArgs> = {}>(args?: Subset<T, Interview$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Interview model
   */
  interface InterviewFieldRefs {
    readonly id: FieldRef<"Interview", 'String'>
    readonly status: FieldRef<"Interview", 'InterviewStatus'>
    readonly scheduedAt: FieldRef<"Interview", 'DateTime'>
    readonly startedAt: FieldRef<"Interview", 'DateTime'>
    readonly completedAt: FieldRef<"Interview", 'DateTime'>
    readonly duration: FieldRef<"Interview", 'Int'>
    readonly overallScore: FieldRef<"Interview", 'Float'>
    readonly overallRating: FieldRef<"Interview", 'Rating'>
    readonly notes: FieldRef<"Interview", 'String'>
    readonly calRecordingUrl: FieldRef<"Interview", 'String'>
    readonly transscript: FieldRef<"Interview", 'String'>
    readonly feedback: FieldRef<"Interview", 'String'>
    readonly createdAt: FieldRef<"Interview", 'DateTime'>
    readonly updatedAt: FieldRef<"Interview", 'DateTime'>
    readonly candidateId: FieldRef<"Interview", 'String'>
    readonly jobPostingId: FieldRef<"Interview", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Interview findUnique
   */
  export type InterviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * Filter, which Interview to fetch.
     */
    where: InterviewWhereUniqueInput
  }

  /**
   * Interview findUniqueOrThrow
   */
  export type InterviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * Filter, which Interview to fetch.
     */
    where: InterviewWhereUniqueInput
  }

  /**
   * Interview findFirst
   */
  export type InterviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * Filter, which Interview to fetch.
     */
    where?: InterviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interviews to fetch.
     */
    orderBy?: InterviewOrderByWithRelationInput | InterviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interviews.
     */
    cursor?: InterviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interviews.
     */
    distinct?: InterviewScalarFieldEnum | InterviewScalarFieldEnum[]
  }

  /**
   * Interview findFirstOrThrow
   */
  export type InterviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * Filter, which Interview to fetch.
     */
    where?: InterviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interviews to fetch.
     */
    orderBy?: InterviewOrderByWithRelationInput | InterviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interviews.
     */
    cursor?: InterviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interviews.
     */
    distinct?: InterviewScalarFieldEnum | InterviewScalarFieldEnum[]
  }

  /**
   * Interview findMany
   */
  export type InterviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * Filter, which Interviews to fetch.
     */
    where?: InterviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interviews to fetch.
     */
    orderBy?: InterviewOrderByWithRelationInput | InterviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Interviews.
     */
    cursor?: InterviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interviews.
     */
    skip?: number
    distinct?: InterviewScalarFieldEnum | InterviewScalarFieldEnum[]
  }

  /**
   * Interview create
   */
  export type InterviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Interview.
     */
    data: XOR<InterviewCreateInput, InterviewUncheckedCreateInput>
  }

  /**
   * Interview createMany
   */
  export type InterviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Interviews.
     */
    data: InterviewCreateManyInput | InterviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Interview createManyAndReturn
   */
  export type InterviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * The data used to create many Interviews.
     */
    data: InterviewCreateManyInput | InterviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Interview update
   */
  export type InterviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Interview.
     */
    data: XOR<InterviewUpdateInput, InterviewUncheckedUpdateInput>
    /**
     * Choose, which Interview to update.
     */
    where: InterviewWhereUniqueInput
  }

  /**
   * Interview updateMany
   */
  export type InterviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Interviews.
     */
    data: XOR<InterviewUpdateManyMutationInput, InterviewUncheckedUpdateManyInput>
    /**
     * Filter which Interviews to update
     */
    where?: InterviewWhereInput
    /**
     * Limit how many Interviews to update.
     */
    limit?: number
  }

  /**
   * Interview updateManyAndReturn
   */
  export type InterviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * The data used to update Interviews.
     */
    data: XOR<InterviewUpdateManyMutationInput, InterviewUncheckedUpdateManyInput>
    /**
     * Filter which Interviews to update
     */
    where?: InterviewWhereInput
    /**
     * Limit how many Interviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Interview upsert
   */
  export type InterviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Interview to update in case it exists.
     */
    where: InterviewWhereUniqueInput
    /**
     * In case the Interview found by the `where` argument doesn't exist, create a new Interview with this data.
     */
    create: XOR<InterviewCreateInput, InterviewUncheckedCreateInput>
    /**
     * In case the Interview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InterviewUpdateInput, InterviewUncheckedUpdateInput>
  }

  /**
   * Interview delete
   */
  export type InterviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * Filter which Interview to delete.
     */
    where: InterviewWhereUniqueInput
  }

  /**
   * Interview deleteMany
   */
  export type InterviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Interviews to delete
     */
    where?: InterviewWhereInput
    /**
     * Limit how many Interviews to delete.
     */
    limit?: number
  }

  /**
   * Interview.responses
   */
  export type Interview$responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewResponse
     */
    select?: InterviewResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewResponse
     */
    omit?: InterviewResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewResponseInclude<ExtArgs> | null
    where?: InterviewResponseWhereInput
    orderBy?: InterviewResponseOrderByWithRelationInput | InterviewResponseOrderByWithRelationInput[]
    cursor?: InterviewResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InterviewResponseScalarFieldEnum | InterviewResponseScalarFieldEnum[]
  }

  /**
   * Interview without action
   */
  export type InterviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
  }


  /**
   * Model InterviewResponse
   */

  export type AggregateInterviewResponse = {
    _count: InterviewResponseCountAggregateOutputType | null
    _avg: InterviewResponseAvgAggregateOutputType | null
    _sum: InterviewResponseSumAggregateOutputType | null
    _min: InterviewResponseMinAggregateOutputType | null
    _max: InterviewResponseMaxAggregateOutputType | null
  }

  export type InterviewResponseAvgAggregateOutputType = {
    duration: number | null
    score: number | null
    confidence: number | null
  }

  export type InterviewResponseSumAggregateOutputType = {
    duration: number | null
    score: number | null
    confidence: number | null
  }

  export type InterviewResponseMinAggregateOutputType = {
    id: string | null
    answer: string | null
    duration: number | null
    score: number | null
    overallRating: $Enums.Rating | null
    feedback: string | null
    sentiment: string | null
    confidence: number | null
    createdAt: Date | null
    updatedAt: Date | null
    interviewId: string | null
    questionId: string | null
  }

  export type InterviewResponseMaxAggregateOutputType = {
    id: string | null
    answer: string | null
    duration: number | null
    score: number | null
    overallRating: $Enums.Rating | null
    feedback: string | null
    sentiment: string | null
    confidence: number | null
    createdAt: Date | null
    updatedAt: Date | null
    interviewId: string | null
    questionId: string | null
  }

  export type InterviewResponseCountAggregateOutputType = {
    id: number
    answer: number
    duration: number
    score: number
    overallRating: number
    feedback: number
    keywords: number
    sentiment: number
    confidence: number
    createdAt: number
    updatedAt: number
    interviewId: number
    questionId: number
    _all: number
  }


  export type InterviewResponseAvgAggregateInputType = {
    duration?: true
    score?: true
    confidence?: true
  }

  export type InterviewResponseSumAggregateInputType = {
    duration?: true
    score?: true
    confidence?: true
  }

  export type InterviewResponseMinAggregateInputType = {
    id?: true
    answer?: true
    duration?: true
    score?: true
    overallRating?: true
    feedback?: true
    sentiment?: true
    confidence?: true
    createdAt?: true
    updatedAt?: true
    interviewId?: true
    questionId?: true
  }

  export type InterviewResponseMaxAggregateInputType = {
    id?: true
    answer?: true
    duration?: true
    score?: true
    overallRating?: true
    feedback?: true
    sentiment?: true
    confidence?: true
    createdAt?: true
    updatedAt?: true
    interviewId?: true
    questionId?: true
  }

  export type InterviewResponseCountAggregateInputType = {
    id?: true
    answer?: true
    duration?: true
    score?: true
    overallRating?: true
    feedback?: true
    keywords?: true
    sentiment?: true
    confidence?: true
    createdAt?: true
    updatedAt?: true
    interviewId?: true
    questionId?: true
    _all?: true
  }

  export type InterviewResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InterviewResponse to aggregate.
     */
    where?: InterviewResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewResponses to fetch.
     */
    orderBy?: InterviewResponseOrderByWithRelationInput | InterviewResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InterviewResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InterviewResponses
    **/
    _count?: true | InterviewResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InterviewResponseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InterviewResponseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InterviewResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InterviewResponseMaxAggregateInputType
  }

  export type GetInterviewResponseAggregateType<T extends InterviewResponseAggregateArgs> = {
        [P in keyof T & keyof AggregateInterviewResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInterviewResponse[P]>
      : GetScalarType<T[P], AggregateInterviewResponse[P]>
  }




  export type InterviewResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewResponseWhereInput
    orderBy?: InterviewResponseOrderByWithAggregationInput | InterviewResponseOrderByWithAggregationInput[]
    by: InterviewResponseScalarFieldEnum[] | InterviewResponseScalarFieldEnum
    having?: InterviewResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InterviewResponseCountAggregateInputType | true
    _avg?: InterviewResponseAvgAggregateInputType
    _sum?: InterviewResponseSumAggregateInputType
    _min?: InterviewResponseMinAggregateInputType
    _max?: InterviewResponseMaxAggregateInputType
  }

  export type InterviewResponseGroupByOutputType = {
    id: string
    answer: string
    duration: number | null
    score: number | null
    overallRating: $Enums.Rating | null
    feedback: string | null
    keywords: string[]
    sentiment: string | null
    confidence: number | null
    createdAt: Date
    updatedAt: Date
    interviewId: string
    questionId: string
    _count: InterviewResponseCountAggregateOutputType | null
    _avg: InterviewResponseAvgAggregateOutputType | null
    _sum: InterviewResponseSumAggregateOutputType | null
    _min: InterviewResponseMinAggregateOutputType | null
    _max: InterviewResponseMaxAggregateOutputType | null
  }

  type GetInterviewResponseGroupByPayload<T extends InterviewResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InterviewResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InterviewResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InterviewResponseGroupByOutputType[P]>
            : GetScalarType<T[P], InterviewResponseGroupByOutputType[P]>
        }
      >
    >


  export type InterviewResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    answer?: boolean
    duration?: boolean
    score?: boolean
    overallRating?: boolean
    feedback?: boolean
    keywords?: boolean
    sentiment?: boolean
    confidence?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    interviewId?: boolean
    questionId?: boolean
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interviewResponse"]>

  export type InterviewResponseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    answer?: boolean
    duration?: boolean
    score?: boolean
    overallRating?: boolean
    feedback?: boolean
    keywords?: boolean
    sentiment?: boolean
    confidence?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    interviewId?: boolean
    questionId?: boolean
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interviewResponse"]>

  export type InterviewResponseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    answer?: boolean
    duration?: boolean
    score?: boolean
    overallRating?: boolean
    feedback?: boolean
    keywords?: boolean
    sentiment?: boolean
    confidence?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    interviewId?: boolean
    questionId?: boolean
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interviewResponse"]>

  export type InterviewResponseSelectScalar = {
    id?: boolean
    answer?: boolean
    duration?: boolean
    score?: boolean
    overallRating?: boolean
    feedback?: boolean
    keywords?: boolean
    sentiment?: boolean
    confidence?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    interviewId?: boolean
    questionId?: boolean
  }

  export type InterviewResponseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "answer" | "duration" | "score" | "overallRating" | "feedback" | "keywords" | "sentiment" | "confidence" | "createdAt" | "updatedAt" | "interviewId" | "questionId", ExtArgs["result"]["interviewResponse"]>
  export type InterviewResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type InterviewResponseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type InterviewResponseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $InterviewResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InterviewResponse"
    objects: {
      interview: Prisma.$InterviewPayload<ExtArgs>
      question: Prisma.$QuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      answer: string
      duration: number | null
      score: number | null
      overallRating: $Enums.Rating | null
      feedback: string | null
      keywords: string[]
      sentiment: string | null
      confidence: number | null
      createdAt: Date
      updatedAt: Date
      interviewId: string
      questionId: string
    }, ExtArgs["result"]["interviewResponse"]>
    composites: {}
  }

  type InterviewResponseGetPayload<S extends boolean | null | undefined | InterviewResponseDefaultArgs> = $Result.GetResult<Prisma.$InterviewResponsePayload, S>

  type InterviewResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InterviewResponseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InterviewResponseCountAggregateInputType | true
    }

  export interface InterviewResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InterviewResponse'], meta: { name: 'InterviewResponse' } }
    /**
     * Find zero or one InterviewResponse that matches the filter.
     * @param {InterviewResponseFindUniqueArgs} args - Arguments to find a InterviewResponse
     * @example
     * // Get one InterviewResponse
     * const interviewResponse = await prisma.interviewResponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InterviewResponseFindUniqueArgs>(args: SelectSubset<T, InterviewResponseFindUniqueArgs<ExtArgs>>): Prisma__InterviewResponseClient<$Result.GetResult<Prisma.$InterviewResponsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InterviewResponse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InterviewResponseFindUniqueOrThrowArgs} args - Arguments to find a InterviewResponse
     * @example
     * // Get one InterviewResponse
     * const interviewResponse = await prisma.interviewResponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InterviewResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, InterviewResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InterviewResponseClient<$Result.GetResult<Prisma.$InterviewResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InterviewResponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewResponseFindFirstArgs} args - Arguments to find a InterviewResponse
     * @example
     * // Get one InterviewResponse
     * const interviewResponse = await prisma.interviewResponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InterviewResponseFindFirstArgs>(args?: SelectSubset<T, InterviewResponseFindFirstArgs<ExtArgs>>): Prisma__InterviewResponseClient<$Result.GetResult<Prisma.$InterviewResponsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InterviewResponse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewResponseFindFirstOrThrowArgs} args - Arguments to find a InterviewResponse
     * @example
     * // Get one InterviewResponse
     * const interviewResponse = await prisma.interviewResponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InterviewResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, InterviewResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__InterviewResponseClient<$Result.GetResult<Prisma.$InterviewResponsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InterviewResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InterviewResponses
     * const interviewResponses = await prisma.interviewResponse.findMany()
     * 
     * // Get first 10 InterviewResponses
     * const interviewResponses = await prisma.interviewResponse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interviewResponseWithIdOnly = await prisma.interviewResponse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InterviewResponseFindManyArgs>(args?: SelectSubset<T, InterviewResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InterviewResponse.
     * @param {InterviewResponseCreateArgs} args - Arguments to create a InterviewResponse.
     * @example
     * // Create one InterviewResponse
     * const InterviewResponse = await prisma.interviewResponse.create({
     *   data: {
     *     // ... data to create a InterviewResponse
     *   }
     * })
     * 
     */
    create<T extends InterviewResponseCreateArgs>(args: SelectSubset<T, InterviewResponseCreateArgs<ExtArgs>>): Prisma__InterviewResponseClient<$Result.GetResult<Prisma.$InterviewResponsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InterviewResponses.
     * @param {InterviewResponseCreateManyArgs} args - Arguments to create many InterviewResponses.
     * @example
     * // Create many InterviewResponses
     * const interviewResponse = await prisma.interviewResponse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InterviewResponseCreateManyArgs>(args?: SelectSubset<T, InterviewResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InterviewResponses and returns the data saved in the database.
     * @param {InterviewResponseCreateManyAndReturnArgs} args - Arguments to create many InterviewResponses.
     * @example
     * // Create many InterviewResponses
     * const interviewResponse = await prisma.interviewResponse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InterviewResponses and only return the `id`
     * const interviewResponseWithIdOnly = await prisma.interviewResponse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InterviewResponseCreateManyAndReturnArgs>(args?: SelectSubset<T, InterviewResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewResponsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InterviewResponse.
     * @param {InterviewResponseDeleteArgs} args - Arguments to delete one InterviewResponse.
     * @example
     * // Delete one InterviewResponse
     * const InterviewResponse = await prisma.interviewResponse.delete({
     *   where: {
     *     // ... filter to delete one InterviewResponse
     *   }
     * })
     * 
     */
    delete<T extends InterviewResponseDeleteArgs>(args: SelectSubset<T, InterviewResponseDeleteArgs<ExtArgs>>): Prisma__InterviewResponseClient<$Result.GetResult<Prisma.$InterviewResponsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InterviewResponse.
     * @param {InterviewResponseUpdateArgs} args - Arguments to update one InterviewResponse.
     * @example
     * // Update one InterviewResponse
     * const interviewResponse = await prisma.interviewResponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InterviewResponseUpdateArgs>(args: SelectSubset<T, InterviewResponseUpdateArgs<ExtArgs>>): Prisma__InterviewResponseClient<$Result.GetResult<Prisma.$InterviewResponsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InterviewResponses.
     * @param {InterviewResponseDeleteManyArgs} args - Arguments to filter InterviewResponses to delete.
     * @example
     * // Delete a few InterviewResponses
     * const { count } = await prisma.interviewResponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InterviewResponseDeleteManyArgs>(args?: SelectSubset<T, InterviewResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InterviewResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InterviewResponses
     * const interviewResponse = await prisma.interviewResponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InterviewResponseUpdateManyArgs>(args: SelectSubset<T, InterviewResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InterviewResponses and returns the data updated in the database.
     * @param {InterviewResponseUpdateManyAndReturnArgs} args - Arguments to update many InterviewResponses.
     * @example
     * // Update many InterviewResponses
     * const interviewResponse = await prisma.interviewResponse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InterviewResponses and only return the `id`
     * const interviewResponseWithIdOnly = await prisma.interviewResponse.updateManyAndReturn({
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
    updateManyAndReturn<T extends InterviewResponseUpdateManyAndReturnArgs>(args: SelectSubset<T, InterviewResponseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewResponsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InterviewResponse.
     * @param {InterviewResponseUpsertArgs} args - Arguments to update or create a InterviewResponse.
     * @example
     * // Update or create a InterviewResponse
     * const interviewResponse = await prisma.interviewResponse.upsert({
     *   create: {
     *     // ... data to create a InterviewResponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InterviewResponse we want to update
     *   }
     * })
     */
    upsert<T extends InterviewResponseUpsertArgs>(args: SelectSubset<T, InterviewResponseUpsertArgs<ExtArgs>>): Prisma__InterviewResponseClient<$Result.GetResult<Prisma.$InterviewResponsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InterviewResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewResponseCountArgs} args - Arguments to filter InterviewResponses to count.
     * @example
     * // Count the number of InterviewResponses
     * const count = await prisma.interviewResponse.count({
     *   where: {
     *     // ... the filter for the InterviewResponses we want to count
     *   }
     * })
    **/
    count<T extends InterviewResponseCountArgs>(
      args?: Subset<T, InterviewResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InterviewResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InterviewResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InterviewResponseAggregateArgs>(args: Subset<T, InterviewResponseAggregateArgs>): Prisma.PrismaPromise<GetInterviewResponseAggregateType<T>>

    /**
     * Group by InterviewResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewResponseGroupByArgs} args - Group by arguments.
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
      T extends InterviewResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InterviewResponseGroupByArgs['orderBy'] }
        : { orderBy?: InterviewResponseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InterviewResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterviewResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InterviewResponse model
   */
  readonly fields: InterviewResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InterviewResponse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InterviewResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    interview<T extends InterviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InterviewDefaultArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the InterviewResponse model
   */
  interface InterviewResponseFieldRefs {
    readonly id: FieldRef<"InterviewResponse", 'String'>
    readonly answer: FieldRef<"InterviewResponse", 'String'>
    readonly duration: FieldRef<"InterviewResponse", 'Int'>
    readonly score: FieldRef<"InterviewResponse", 'Float'>
    readonly overallRating: FieldRef<"InterviewResponse", 'Rating'>
    readonly feedback: FieldRef<"InterviewResponse", 'String'>
    readonly keywords: FieldRef<"InterviewResponse", 'String[]'>
    readonly sentiment: FieldRef<"InterviewResponse", 'String'>
    readonly confidence: FieldRef<"InterviewResponse", 'Float'>
    readonly createdAt: FieldRef<"InterviewResponse", 'DateTime'>
    readonly updatedAt: FieldRef<"InterviewResponse", 'DateTime'>
    readonly interviewId: FieldRef<"InterviewResponse", 'String'>
    readonly questionId: FieldRef<"InterviewResponse", 'String'>
  }
    

  // Custom InputTypes
  /**
   * InterviewResponse findUnique
   */
  export type InterviewResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewResponse
     */
    select?: InterviewResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewResponse
     */
    omit?: InterviewResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewResponseInclude<ExtArgs> | null
    /**
     * Filter, which InterviewResponse to fetch.
     */
    where: InterviewResponseWhereUniqueInput
  }

  /**
   * InterviewResponse findUniqueOrThrow
   */
  export type InterviewResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewResponse
     */
    select?: InterviewResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewResponse
     */
    omit?: InterviewResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewResponseInclude<ExtArgs> | null
    /**
     * Filter, which InterviewResponse to fetch.
     */
    where: InterviewResponseWhereUniqueInput
  }

  /**
   * InterviewResponse findFirst
   */
  export type InterviewResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewResponse
     */
    select?: InterviewResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewResponse
     */
    omit?: InterviewResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewResponseInclude<ExtArgs> | null
    /**
     * Filter, which InterviewResponse to fetch.
     */
    where?: InterviewResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewResponses to fetch.
     */
    orderBy?: InterviewResponseOrderByWithRelationInput | InterviewResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InterviewResponses.
     */
    cursor?: InterviewResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InterviewResponses.
     */
    distinct?: InterviewResponseScalarFieldEnum | InterviewResponseScalarFieldEnum[]
  }

  /**
   * InterviewResponse findFirstOrThrow
   */
  export type InterviewResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewResponse
     */
    select?: InterviewResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewResponse
     */
    omit?: InterviewResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewResponseInclude<ExtArgs> | null
    /**
     * Filter, which InterviewResponse to fetch.
     */
    where?: InterviewResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewResponses to fetch.
     */
    orderBy?: InterviewResponseOrderByWithRelationInput | InterviewResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InterviewResponses.
     */
    cursor?: InterviewResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InterviewResponses.
     */
    distinct?: InterviewResponseScalarFieldEnum | InterviewResponseScalarFieldEnum[]
  }

  /**
   * InterviewResponse findMany
   */
  export type InterviewResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewResponse
     */
    select?: InterviewResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewResponse
     */
    omit?: InterviewResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewResponseInclude<ExtArgs> | null
    /**
     * Filter, which InterviewResponses to fetch.
     */
    where?: InterviewResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewResponses to fetch.
     */
    orderBy?: InterviewResponseOrderByWithRelationInput | InterviewResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InterviewResponses.
     */
    cursor?: InterviewResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewResponses.
     */
    skip?: number
    distinct?: InterviewResponseScalarFieldEnum | InterviewResponseScalarFieldEnum[]
  }

  /**
   * InterviewResponse create
   */
  export type InterviewResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewResponse
     */
    select?: InterviewResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewResponse
     */
    omit?: InterviewResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a InterviewResponse.
     */
    data: XOR<InterviewResponseCreateInput, InterviewResponseUncheckedCreateInput>
  }

  /**
   * InterviewResponse createMany
   */
  export type InterviewResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InterviewResponses.
     */
    data: InterviewResponseCreateManyInput | InterviewResponseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InterviewResponse createManyAndReturn
   */
  export type InterviewResponseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewResponse
     */
    select?: InterviewResponseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewResponse
     */
    omit?: InterviewResponseOmit<ExtArgs> | null
    /**
     * The data used to create many InterviewResponses.
     */
    data: InterviewResponseCreateManyInput | InterviewResponseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewResponseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InterviewResponse update
   */
  export type InterviewResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewResponse
     */
    select?: InterviewResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewResponse
     */
    omit?: InterviewResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a InterviewResponse.
     */
    data: XOR<InterviewResponseUpdateInput, InterviewResponseUncheckedUpdateInput>
    /**
     * Choose, which InterviewResponse to update.
     */
    where: InterviewResponseWhereUniqueInput
  }

  /**
   * InterviewResponse updateMany
   */
  export type InterviewResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InterviewResponses.
     */
    data: XOR<InterviewResponseUpdateManyMutationInput, InterviewResponseUncheckedUpdateManyInput>
    /**
     * Filter which InterviewResponses to update
     */
    where?: InterviewResponseWhereInput
    /**
     * Limit how many InterviewResponses to update.
     */
    limit?: number
  }

  /**
   * InterviewResponse updateManyAndReturn
   */
  export type InterviewResponseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewResponse
     */
    select?: InterviewResponseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewResponse
     */
    omit?: InterviewResponseOmit<ExtArgs> | null
    /**
     * The data used to update InterviewResponses.
     */
    data: XOR<InterviewResponseUpdateManyMutationInput, InterviewResponseUncheckedUpdateManyInput>
    /**
     * Filter which InterviewResponses to update
     */
    where?: InterviewResponseWhereInput
    /**
     * Limit how many InterviewResponses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewResponseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InterviewResponse upsert
   */
  export type InterviewResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewResponse
     */
    select?: InterviewResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewResponse
     */
    omit?: InterviewResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the InterviewResponse to update in case it exists.
     */
    where: InterviewResponseWhereUniqueInput
    /**
     * In case the InterviewResponse found by the `where` argument doesn't exist, create a new InterviewResponse with this data.
     */
    create: XOR<InterviewResponseCreateInput, InterviewResponseUncheckedCreateInput>
    /**
     * In case the InterviewResponse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InterviewResponseUpdateInput, InterviewResponseUncheckedUpdateInput>
  }

  /**
   * InterviewResponse delete
   */
  export type InterviewResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewResponse
     */
    select?: InterviewResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewResponse
     */
    omit?: InterviewResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewResponseInclude<ExtArgs> | null
    /**
     * Filter which InterviewResponse to delete.
     */
    where: InterviewResponseWhereUniqueInput
  }

  /**
   * InterviewResponse deleteMany
   */
  export type InterviewResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InterviewResponses to delete
     */
    where?: InterviewResponseWhereInput
    /**
     * Limit how many InterviewResponses to delete.
     */
    limit?: number
  }

  /**
   * InterviewResponse without action
   */
  export type InterviewResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewResponse
     */
    select?: InterviewResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewResponse
     */
    omit?: InterviewResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewResponseInclude<ExtArgs> | null
  }


  /**
   * Model CallLog
   */

  export type AggregateCallLog = {
    _count: CallLogCountAggregateOutputType | null
    _avg: CallLogAvgAggregateOutputType | null
    _sum: CallLogSumAggregateOutputType | null
    _min: CallLogMinAggregateOutputType | null
    _max: CallLogMaxAggregateOutputType | null
  }

  export type CallLogAvgAggregateOutputType = {
    duration: number | null
    cost: number | null
    retryCount: number | null
  }

  export type CallLogSumAggregateOutputType = {
    duration: number | null
    cost: number | null
    retryCount: number | null
  }

  export type CallLogMinAggregateOutputType = {
    id: string | null
    phoneNumber: string | null
    callId: string | null
    status: $Enums.CallStatus | null
    startTime: Date | null
    endTime: Date | null
    duration: number | null
    recordingUrl: string | null
    cost: number | null
    errorMessage: string | null
    retryCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CallLogMaxAggregateOutputType = {
    id: string | null
    phoneNumber: string | null
    callId: string | null
    status: $Enums.CallStatus | null
    startTime: Date | null
    endTime: Date | null
    duration: number | null
    recordingUrl: string | null
    cost: number | null
    errorMessage: string | null
    retryCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CallLogCountAggregateOutputType = {
    id: number
    phoneNumber: number
    callId: number
    status: number
    startTime: number
    endTime: number
    duration: number
    recordingUrl: number
    cost: number
    errorMessage: number
    retryCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CallLogAvgAggregateInputType = {
    duration?: true
    cost?: true
    retryCount?: true
  }

  export type CallLogSumAggregateInputType = {
    duration?: true
    cost?: true
    retryCount?: true
  }

  export type CallLogMinAggregateInputType = {
    id?: true
    phoneNumber?: true
    callId?: true
    status?: true
    startTime?: true
    endTime?: true
    duration?: true
    recordingUrl?: true
    cost?: true
    errorMessage?: true
    retryCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CallLogMaxAggregateInputType = {
    id?: true
    phoneNumber?: true
    callId?: true
    status?: true
    startTime?: true
    endTime?: true
    duration?: true
    recordingUrl?: true
    cost?: true
    errorMessage?: true
    retryCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CallLogCountAggregateInputType = {
    id?: true
    phoneNumber?: true
    callId?: true
    status?: true
    startTime?: true
    endTime?: true
    duration?: true
    recordingUrl?: true
    cost?: true
    errorMessage?: true
    retryCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CallLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CallLog to aggregate.
     */
    where?: CallLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CallLogs to fetch.
     */
    orderBy?: CallLogOrderByWithRelationInput | CallLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CallLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CallLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CallLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CallLogs
    **/
    _count?: true | CallLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CallLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CallLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CallLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CallLogMaxAggregateInputType
  }

  export type GetCallLogAggregateType<T extends CallLogAggregateArgs> = {
        [P in keyof T & keyof AggregateCallLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCallLog[P]>
      : GetScalarType<T[P], AggregateCallLog[P]>
  }




  export type CallLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CallLogWhereInput
    orderBy?: CallLogOrderByWithAggregationInput | CallLogOrderByWithAggregationInput[]
    by: CallLogScalarFieldEnum[] | CallLogScalarFieldEnum
    having?: CallLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CallLogCountAggregateInputType | true
    _avg?: CallLogAvgAggregateInputType
    _sum?: CallLogSumAggregateInputType
    _min?: CallLogMinAggregateInputType
    _max?: CallLogMaxAggregateInputType
  }

  export type CallLogGroupByOutputType = {
    id: string
    phoneNumber: string
    callId: string | null
    status: $Enums.CallStatus
    startTime: Date | null
    endTime: Date | null
    duration: number | null
    recordingUrl: string | null
    cost: number | null
    errorMessage: string | null
    retryCount: number
    createdAt: Date
    updatedAt: Date
    _count: CallLogCountAggregateOutputType | null
    _avg: CallLogAvgAggregateOutputType | null
    _sum: CallLogSumAggregateOutputType | null
    _min: CallLogMinAggregateOutputType | null
    _max: CallLogMaxAggregateOutputType | null
  }

  type GetCallLogGroupByPayload<T extends CallLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CallLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CallLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CallLogGroupByOutputType[P]>
            : GetScalarType<T[P], CallLogGroupByOutputType[P]>
        }
      >
    >


  export type CallLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phoneNumber?: boolean
    callId?: boolean
    status?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    recordingUrl?: boolean
    cost?: boolean
    errorMessage?: boolean
    retryCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["callLog"]>

  export type CallLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phoneNumber?: boolean
    callId?: boolean
    status?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    recordingUrl?: boolean
    cost?: boolean
    errorMessage?: boolean
    retryCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["callLog"]>

  export type CallLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phoneNumber?: boolean
    callId?: boolean
    status?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    recordingUrl?: boolean
    cost?: boolean
    errorMessage?: boolean
    retryCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["callLog"]>

  export type CallLogSelectScalar = {
    id?: boolean
    phoneNumber?: boolean
    callId?: boolean
    status?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    recordingUrl?: boolean
    cost?: boolean
    errorMessage?: boolean
    retryCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CallLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phoneNumber" | "callId" | "status" | "startTime" | "endTime" | "duration" | "recordingUrl" | "cost" | "errorMessage" | "retryCount" | "createdAt" | "updatedAt", ExtArgs["result"]["callLog"]>

  export type $CallLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CallLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      phoneNumber: string
      callId: string | null
      status: $Enums.CallStatus
      startTime: Date | null
      endTime: Date | null
      duration: number | null
      recordingUrl: string | null
      cost: number | null
      errorMessage: string | null
      retryCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["callLog"]>
    composites: {}
  }

  type CallLogGetPayload<S extends boolean | null | undefined | CallLogDefaultArgs> = $Result.GetResult<Prisma.$CallLogPayload, S>

  type CallLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CallLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CallLogCountAggregateInputType | true
    }

  export interface CallLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CallLog'], meta: { name: 'CallLog' } }
    /**
     * Find zero or one CallLog that matches the filter.
     * @param {CallLogFindUniqueArgs} args - Arguments to find a CallLog
     * @example
     * // Get one CallLog
     * const callLog = await prisma.callLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CallLogFindUniqueArgs>(args: SelectSubset<T, CallLogFindUniqueArgs<ExtArgs>>): Prisma__CallLogClient<$Result.GetResult<Prisma.$CallLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CallLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CallLogFindUniqueOrThrowArgs} args - Arguments to find a CallLog
     * @example
     * // Get one CallLog
     * const callLog = await prisma.callLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CallLogFindUniqueOrThrowArgs>(args: SelectSubset<T, CallLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CallLogClient<$Result.GetResult<Prisma.$CallLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CallLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallLogFindFirstArgs} args - Arguments to find a CallLog
     * @example
     * // Get one CallLog
     * const callLog = await prisma.callLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CallLogFindFirstArgs>(args?: SelectSubset<T, CallLogFindFirstArgs<ExtArgs>>): Prisma__CallLogClient<$Result.GetResult<Prisma.$CallLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CallLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallLogFindFirstOrThrowArgs} args - Arguments to find a CallLog
     * @example
     * // Get one CallLog
     * const callLog = await prisma.callLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CallLogFindFirstOrThrowArgs>(args?: SelectSubset<T, CallLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__CallLogClient<$Result.GetResult<Prisma.$CallLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CallLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CallLogs
     * const callLogs = await prisma.callLog.findMany()
     * 
     * // Get first 10 CallLogs
     * const callLogs = await prisma.callLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const callLogWithIdOnly = await prisma.callLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CallLogFindManyArgs>(args?: SelectSubset<T, CallLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CallLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CallLog.
     * @param {CallLogCreateArgs} args - Arguments to create a CallLog.
     * @example
     * // Create one CallLog
     * const CallLog = await prisma.callLog.create({
     *   data: {
     *     // ... data to create a CallLog
     *   }
     * })
     * 
     */
    create<T extends CallLogCreateArgs>(args: SelectSubset<T, CallLogCreateArgs<ExtArgs>>): Prisma__CallLogClient<$Result.GetResult<Prisma.$CallLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CallLogs.
     * @param {CallLogCreateManyArgs} args - Arguments to create many CallLogs.
     * @example
     * // Create many CallLogs
     * const callLog = await prisma.callLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CallLogCreateManyArgs>(args?: SelectSubset<T, CallLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CallLogs and returns the data saved in the database.
     * @param {CallLogCreateManyAndReturnArgs} args - Arguments to create many CallLogs.
     * @example
     * // Create many CallLogs
     * const callLog = await prisma.callLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CallLogs and only return the `id`
     * const callLogWithIdOnly = await prisma.callLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CallLogCreateManyAndReturnArgs>(args?: SelectSubset<T, CallLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CallLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CallLog.
     * @param {CallLogDeleteArgs} args - Arguments to delete one CallLog.
     * @example
     * // Delete one CallLog
     * const CallLog = await prisma.callLog.delete({
     *   where: {
     *     // ... filter to delete one CallLog
     *   }
     * })
     * 
     */
    delete<T extends CallLogDeleteArgs>(args: SelectSubset<T, CallLogDeleteArgs<ExtArgs>>): Prisma__CallLogClient<$Result.GetResult<Prisma.$CallLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CallLog.
     * @param {CallLogUpdateArgs} args - Arguments to update one CallLog.
     * @example
     * // Update one CallLog
     * const callLog = await prisma.callLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CallLogUpdateArgs>(args: SelectSubset<T, CallLogUpdateArgs<ExtArgs>>): Prisma__CallLogClient<$Result.GetResult<Prisma.$CallLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CallLogs.
     * @param {CallLogDeleteManyArgs} args - Arguments to filter CallLogs to delete.
     * @example
     * // Delete a few CallLogs
     * const { count } = await prisma.callLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CallLogDeleteManyArgs>(args?: SelectSubset<T, CallLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CallLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CallLogs
     * const callLog = await prisma.callLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CallLogUpdateManyArgs>(args: SelectSubset<T, CallLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CallLogs and returns the data updated in the database.
     * @param {CallLogUpdateManyAndReturnArgs} args - Arguments to update many CallLogs.
     * @example
     * // Update many CallLogs
     * const callLog = await prisma.callLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CallLogs and only return the `id`
     * const callLogWithIdOnly = await prisma.callLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends CallLogUpdateManyAndReturnArgs>(args: SelectSubset<T, CallLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CallLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CallLog.
     * @param {CallLogUpsertArgs} args - Arguments to update or create a CallLog.
     * @example
     * // Update or create a CallLog
     * const callLog = await prisma.callLog.upsert({
     *   create: {
     *     // ... data to create a CallLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CallLog we want to update
     *   }
     * })
     */
    upsert<T extends CallLogUpsertArgs>(args: SelectSubset<T, CallLogUpsertArgs<ExtArgs>>): Prisma__CallLogClient<$Result.GetResult<Prisma.$CallLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CallLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallLogCountArgs} args - Arguments to filter CallLogs to count.
     * @example
     * // Count the number of CallLogs
     * const count = await prisma.callLog.count({
     *   where: {
     *     // ... the filter for the CallLogs we want to count
     *   }
     * })
    **/
    count<T extends CallLogCountArgs>(
      args?: Subset<T, CallLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CallLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CallLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CallLogAggregateArgs>(args: Subset<T, CallLogAggregateArgs>): Prisma.PrismaPromise<GetCallLogAggregateType<T>>

    /**
     * Group by CallLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallLogGroupByArgs} args - Group by arguments.
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
      T extends CallLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CallLogGroupByArgs['orderBy'] }
        : { orderBy?: CallLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CallLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCallLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CallLog model
   */
  readonly fields: CallLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CallLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CallLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the CallLog model
   */
  interface CallLogFieldRefs {
    readonly id: FieldRef<"CallLog", 'String'>
    readonly phoneNumber: FieldRef<"CallLog", 'String'>
    readonly callId: FieldRef<"CallLog", 'String'>
    readonly status: FieldRef<"CallLog", 'CallStatus'>
    readonly startTime: FieldRef<"CallLog", 'DateTime'>
    readonly endTime: FieldRef<"CallLog", 'DateTime'>
    readonly duration: FieldRef<"CallLog", 'Int'>
    readonly recordingUrl: FieldRef<"CallLog", 'String'>
    readonly cost: FieldRef<"CallLog", 'Float'>
    readonly errorMessage: FieldRef<"CallLog", 'String'>
    readonly retryCount: FieldRef<"CallLog", 'Int'>
    readonly createdAt: FieldRef<"CallLog", 'DateTime'>
    readonly updatedAt: FieldRef<"CallLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CallLog findUnique
   */
  export type CallLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallLog
     */
    select?: CallLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallLog
     */
    omit?: CallLogOmit<ExtArgs> | null
    /**
     * Filter, which CallLog to fetch.
     */
    where: CallLogWhereUniqueInput
  }

  /**
   * CallLog findUniqueOrThrow
   */
  export type CallLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallLog
     */
    select?: CallLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallLog
     */
    omit?: CallLogOmit<ExtArgs> | null
    /**
     * Filter, which CallLog to fetch.
     */
    where: CallLogWhereUniqueInput
  }

  /**
   * CallLog findFirst
   */
  export type CallLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallLog
     */
    select?: CallLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallLog
     */
    omit?: CallLogOmit<ExtArgs> | null
    /**
     * Filter, which CallLog to fetch.
     */
    where?: CallLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CallLogs to fetch.
     */
    orderBy?: CallLogOrderByWithRelationInput | CallLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CallLogs.
     */
    cursor?: CallLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CallLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CallLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CallLogs.
     */
    distinct?: CallLogScalarFieldEnum | CallLogScalarFieldEnum[]
  }

  /**
   * CallLog findFirstOrThrow
   */
  export type CallLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallLog
     */
    select?: CallLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallLog
     */
    omit?: CallLogOmit<ExtArgs> | null
    /**
     * Filter, which CallLog to fetch.
     */
    where?: CallLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CallLogs to fetch.
     */
    orderBy?: CallLogOrderByWithRelationInput | CallLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CallLogs.
     */
    cursor?: CallLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CallLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CallLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CallLogs.
     */
    distinct?: CallLogScalarFieldEnum | CallLogScalarFieldEnum[]
  }

  /**
   * CallLog findMany
   */
  export type CallLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallLog
     */
    select?: CallLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallLog
     */
    omit?: CallLogOmit<ExtArgs> | null
    /**
     * Filter, which CallLogs to fetch.
     */
    where?: CallLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CallLogs to fetch.
     */
    orderBy?: CallLogOrderByWithRelationInput | CallLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CallLogs.
     */
    cursor?: CallLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CallLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CallLogs.
     */
    skip?: number
    distinct?: CallLogScalarFieldEnum | CallLogScalarFieldEnum[]
  }

  /**
   * CallLog create
   */
  export type CallLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallLog
     */
    select?: CallLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallLog
     */
    omit?: CallLogOmit<ExtArgs> | null
    /**
     * The data needed to create a CallLog.
     */
    data: XOR<CallLogCreateInput, CallLogUncheckedCreateInput>
  }

  /**
   * CallLog createMany
   */
  export type CallLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CallLogs.
     */
    data: CallLogCreateManyInput | CallLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CallLog createManyAndReturn
   */
  export type CallLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallLog
     */
    select?: CallLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CallLog
     */
    omit?: CallLogOmit<ExtArgs> | null
    /**
     * The data used to create many CallLogs.
     */
    data: CallLogCreateManyInput | CallLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CallLog update
   */
  export type CallLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallLog
     */
    select?: CallLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallLog
     */
    omit?: CallLogOmit<ExtArgs> | null
    /**
     * The data needed to update a CallLog.
     */
    data: XOR<CallLogUpdateInput, CallLogUncheckedUpdateInput>
    /**
     * Choose, which CallLog to update.
     */
    where: CallLogWhereUniqueInput
  }

  /**
   * CallLog updateMany
   */
  export type CallLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CallLogs.
     */
    data: XOR<CallLogUpdateManyMutationInput, CallLogUncheckedUpdateManyInput>
    /**
     * Filter which CallLogs to update
     */
    where?: CallLogWhereInput
    /**
     * Limit how many CallLogs to update.
     */
    limit?: number
  }

  /**
   * CallLog updateManyAndReturn
   */
  export type CallLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallLog
     */
    select?: CallLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CallLog
     */
    omit?: CallLogOmit<ExtArgs> | null
    /**
     * The data used to update CallLogs.
     */
    data: XOR<CallLogUpdateManyMutationInput, CallLogUncheckedUpdateManyInput>
    /**
     * Filter which CallLogs to update
     */
    where?: CallLogWhereInput
    /**
     * Limit how many CallLogs to update.
     */
    limit?: number
  }

  /**
   * CallLog upsert
   */
  export type CallLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallLog
     */
    select?: CallLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallLog
     */
    omit?: CallLogOmit<ExtArgs> | null
    /**
     * The filter to search for the CallLog to update in case it exists.
     */
    where: CallLogWhereUniqueInput
    /**
     * In case the CallLog found by the `where` argument doesn't exist, create a new CallLog with this data.
     */
    create: XOR<CallLogCreateInput, CallLogUncheckedCreateInput>
    /**
     * In case the CallLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CallLogUpdateInput, CallLogUncheckedUpdateInput>
  }

  /**
   * CallLog delete
   */
  export type CallLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallLog
     */
    select?: CallLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallLog
     */
    omit?: CallLogOmit<ExtArgs> | null
    /**
     * Filter which CallLog to delete.
     */
    where: CallLogWhereUniqueInput
  }

  /**
   * CallLog deleteMany
   */
  export type CallLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CallLogs to delete
     */
    where?: CallLogWhereInput
    /**
     * Limit how many CallLogs to delete.
     */
    limit?: number
  }

  /**
   * CallLog without action
   */
  export type CallLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallLog
     */
    select?: CallLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallLog
     */
    omit?: CallLogOmit<ExtArgs> | null
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


  export const RecruiterScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    avatar: 'avatar',
    password: 'password',
    company: 'company',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RecruiterScalarFieldEnum = (typeof RecruiterScalarFieldEnum)[keyof typeof RecruiterScalarFieldEnum]


  export const JobPostingScalarFieldEnum: {
    id: 'id',
    title: 'title',
    descripiton: 'descripiton',
    requirements: 'requirements',
    location: 'location',
    salaryRange: 'salaryRange',
    experienceLevel: 'experienceLevel',
    department: 'department',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    recruiterId: 'recruiterId'
  };

  export type JobPostingScalarFieldEnum = (typeof JobPostingScalarFieldEnum)[keyof typeof JobPostingScalarFieldEnum]


  export const CandidateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phoneNo: 'phoneNo',
    resume: 'resume',
    experience: 'experience',
    skills: 'skills',
    currentCompany: 'currentCompany',
    currentRole: 'currentRole',
    expectedSalary: 'expectedSalary',
    noticePeriod: 'noticePeriod',
    location: 'location',
    status: 'status',
    appliedAt: 'appliedAt',
    updatedAt: 'updatedAt',
    jobPostingId: 'jobPostingId'
  };

  export type CandidateScalarFieldEnum = (typeof CandidateScalarFieldEnum)[keyof typeof CandidateScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    questionText: 'questionText',
    category: 'category',
    difficulty: 'difficulty',
    expectedAnswer: 'expectedAnswer',
    keywords: 'keywords',
    maxDuration: 'maxDuration',
    order: 'order',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    jobPostingId: 'jobPostingId'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const InterviewScalarFieldEnum: {
    id: 'id',
    status: 'status',
    scheduedAt: 'scheduedAt',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    duration: 'duration',
    overallScore: 'overallScore',
    overallRating: 'overallRating',
    notes: 'notes',
    calRecordingUrl: 'calRecordingUrl',
    transscript: 'transscript',
    feedback: 'feedback',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    candidateId: 'candidateId',
    jobPostingId: 'jobPostingId'
  };

  export type InterviewScalarFieldEnum = (typeof InterviewScalarFieldEnum)[keyof typeof InterviewScalarFieldEnum]


  export const InterviewResponseScalarFieldEnum: {
    id: 'id',
    answer: 'answer',
    duration: 'duration',
    score: 'score',
    overallRating: 'overallRating',
    feedback: 'feedback',
    keywords: 'keywords',
    sentiment: 'sentiment',
    confidence: 'confidence',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    interviewId: 'interviewId',
    questionId: 'questionId'
  };

  export type InterviewResponseScalarFieldEnum = (typeof InterviewResponseScalarFieldEnum)[keyof typeof InterviewResponseScalarFieldEnum]


  export const CallLogScalarFieldEnum: {
    id: 'id',
    phoneNumber: 'phoneNumber',
    callId: 'callId',
    status: 'status',
    startTime: 'startTime',
    endTime: 'endTime',
    duration: 'duration',
    recordingUrl: 'recordingUrl',
    cost: 'cost',
    errorMessage: 'errorMessage',
    retryCount: 'retryCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CallLogScalarFieldEnum = (typeof CallLogScalarFieldEnum)[keyof typeof CallLogScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'CandidateStatus'
   */
  export type EnumCandidateStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CandidateStatus'>
    


  /**
   * Reference to a field of type 'CandidateStatus[]'
   */
  export type ListEnumCandidateStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CandidateStatus[]'>
    


  /**
   * Reference to a field of type 'Difficulty'
   */
  export type EnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty'>
    


  /**
   * Reference to a field of type 'Difficulty[]'
   */
  export type ListEnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'InterviewStatus'
   */
  export type EnumInterviewStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InterviewStatus'>
    


  /**
   * Reference to a field of type 'InterviewStatus[]'
   */
  export type ListEnumInterviewStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InterviewStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Rating'
   */
  export type EnumRatingFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rating'>
    


  /**
   * Reference to a field of type 'Rating[]'
   */
  export type ListEnumRatingFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rating[]'>
    


  /**
   * Reference to a field of type 'CallStatus'
   */
  export type EnumCallStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CallStatus'>
    


  /**
   * Reference to a field of type 'CallStatus[]'
   */
  export type ListEnumCallStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CallStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type RecruiterWhereInput = {
    AND?: RecruiterWhereInput | RecruiterWhereInput[]
    OR?: RecruiterWhereInput[]
    NOT?: RecruiterWhereInput | RecruiterWhereInput[]
    id?: StringFilter<"Recruiter"> | string
    name?: StringFilter<"Recruiter"> | string
    email?: StringFilter<"Recruiter"> | string
    avatar?: StringNullableFilter<"Recruiter"> | string | null
    password?: StringFilter<"Recruiter"> | string
    company?: StringNullableFilter<"Recruiter"> | string | null
    createdAt?: DateTimeFilter<"Recruiter"> | Date | string
    updatedAt?: DateTimeFilter<"Recruiter"> | Date | string
    jobPostings?: JobPostingListRelationFilter
  }

  export type RecruiterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    avatar?: SortOrderInput | SortOrder
    password?: SortOrder
    company?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jobPostings?: JobPostingOrderByRelationAggregateInput
  }

  export type RecruiterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: RecruiterWhereInput | RecruiterWhereInput[]
    OR?: RecruiterWhereInput[]
    NOT?: RecruiterWhereInput | RecruiterWhereInput[]
    name?: StringFilter<"Recruiter"> | string
    avatar?: StringNullableFilter<"Recruiter"> | string | null
    password?: StringFilter<"Recruiter"> | string
    company?: StringNullableFilter<"Recruiter"> | string | null
    createdAt?: DateTimeFilter<"Recruiter"> | Date | string
    updatedAt?: DateTimeFilter<"Recruiter"> | Date | string
    jobPostings?: JobPostingListRelationFilter
  }, "id" | "email">

  export type RecruiterOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    avatar?: SortOrderInput | SortOrder
    password?: SortOrder
    company?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RecruiterCountOrderByAggregateInput
    _max?: RecruiterMaxOrderByAggregateInput
    _min?: RecruiterMinOrderByAggregateInput
  }

  export type RecruiterScalarWhereWithAggregatesInput = {
    AND?: RecruiterScalarWhereWithAggregatesInput | RecruiterScalarWhereWithAggregatesInput[]
    OR?: RecruiterScalarWhereWithAggregatesInput[]
    NOT?: RecruiterScalarWhereWithAggregatesInput | RecruiterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Recruiter"> | string
    name?: StringWithAggregatesFilter<"Recruiter"> | string
    email?: StringWithAggregatesFilter<"Recruiter"> | string
    avatar?: StringNullableWithAggregatesFilter<"Recruiter"> | string | null
    password?: StringWithAggregatesFilter<"Recruiter"> | string
    company?: StringNullableWithAggregatesFilter<"Recruiter"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Recruiter"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Recruiter"> | Date | string
  }

  export type JobPostingWhereInput = {
    AND?: JobPostingWhereInput | JobPostingWhereInput[]
    OR?: JobPostingWhereInput[]
    NOT?: JobPostingWhereInput | JobPostingWhereInput[]
    id?: StringFilter<"JobPosting"> | string
    title?: StringFilter<"JobPosting"> | string
    descripiton?: StringFilter<"JobPosting"> | string
    requirements?: StringNullableFilter<"JobPosting"> | string | null
    location?: StringNullableFilter<"JobPosting"> | string | null
    salaryRange?: StringNullableFilter<"JobPosting"> | string | null
    experienceLevel?: StringNullableFilter<"JobPosting"> | string | null
    department?: StringNullableFilter<"JobPosting"> | string | null
    isActive?: BoolFilter<"JobPosting"> | boolean
    createdAt?: DateTimeFilter<"JobPosting"> | Date | string
    updatedAt?: DateTimeFilter<"JobPosting"> | Date | string
    recruiterId?: StringFilter<"JobPosting"> | string
    recruiter?: XOR<RecruiterScalarRelationFilter, RecruiterWhereInput>
    candidates?: CandidateListRelationFilter
    questions?: QuestionListRelationFilter
    interviews?: InterviewListRelationFilter
  }

  export type JobPostingOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    descripiton?: SortOrder
    requirements?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    salaryRange?: SortOrderInput | SortOrder
    experienceLevel?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    recruiterId?: SortOrder
    recruiter?: RecruiterOrderByWithRelationInput
    candidates?: CandidateOrderByRelationAggregateInput
    questions?: QuestionOrderByRelationAggregateInput
    interviews?: InterviewOrderByRelationAggregateInput
  }

  export type JobPostingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JobPostingWhereInput | JobPostingWhereInput[]
    OR?: JobPostingWhereInput[]
    NOT?: JobPostingWhereInput | JobPostingWhereInput[]
    title?: StringFilter<"JobPosting"> | string
    descripiton?: StringFilter<"JobPosting"> | string
    requirements?: StringNullableFilter<"JobPosting"> | string | null
    location?: StringNullableFilter<"JobPosting"> | string | null
    salaryRange?: StringNullableFilter<"JobPosting"> | string | null
    experienceLevel?: StringNullableFilter<"JobPosting"> | string | null
    department?: StringNullableFilter<"JobPosting"> | string | null
    isActive?: BoolFilter<"JobPosting"> | boolean
    createdAt?: DateTimeFilter<"JobPosting"> | Date | string
    updatedAt?: DateTimeFilter<"JobPosting"> | Date | string
    recruiterId?: StringFilter<"JobPosting"> | string
    recruiter?: XOR<RecruiterScalarRelationFilter, RecruiterWhereInput>
    candidates?: CandidateListRelationFilter
    questions?: QuestionListRelationFilter
    interviews?: InterviewListRelationFilter
  }, "id">

  export type JobPostingOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    descripiton?: SortOrder
    requirements?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    salaryRange?: SortOrderInput | SortOrder
    experienceLevel?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    recruiterId?: SortOrder
    _count?: JobPostingCountOrderByAggregateInput
    _max?: JobPostingMaxOrderByAggregateInput
    _min?: JobPostingMinOrderByAggregateInput
  }

  export type JobPostingScalarWhereWithAggregatesInput = {
    AND?: JobPostingScalarWhereWithAggregatesInput | JobPostingScalarWhereWithAggregatesInput[]
    OR?: JobPostingScalarWhereWithAggregatesInput[]
    NOT?: JobPostingScalarWhereWithAggregatesInput | JobPostingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JobPosting"> | string
    title?: StringWithAggregatesFilter<"JobPosting"> | string
    descripiton?: StringWithAggregatesFilter<"JobPosting"> | string
    requirements?: StringNullableWithAggregatesFilter<"JobPosting"> | string | null
    location?: StringNullableWithAggregatesFilter<"JobPosting"> | string | null
    salaryRange?: StringNullableWithAggregatesFilter<"JobPosting"> | string | null
    experienceLevel?: StringNullableWithAggregatesFilter<"JobPosting"> | string | null
    department?: StringNullableWithAggregatesFilter<"JobPosting"> | string | null
    isActive?: BoolWithAggregatesFilter<"JobPosting"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"JobPosting"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JobPosting"> | Date | string
    recruiterId?: StringWithAggregatesFilter<"JobPosting"> | string
  }

  export type CandidateWhereInput = {
    AND?: CandidateWhereInput | CandidateWhereInput[]
    OR?: CandidateWhereInput[]
    NOT?: CandidateWhereInput | CandidateWhereInput[]
    id?: StringFilter<"Candidate"> | string
    name?: StringFilter<"Candidate"> | string
    email?: StringFilter<"Candidate"> | string
    phoneNo?: StringFilter<"Candidate"> | string
    resume?: StringNullableFilter<"Candidate"> | string | null
    experience?: StringNullableFilter<"Candidate"> | string | null
    skills?: StringNullableListFilter<"Candidate">
    currentCompany?: StringNullableFilter<"Candidate"> | string | null
    currentRole?: StringNullableFilter<"Candidate"> | string | null
    expectedSalary?: StringNullableFilter<"Candidate"> | string | null
    noticePeriod?: StringNullableFilter<"Candidate"> | string | null
    location?: StringNullableFilter<"Candidate"> | string | null
    status?: EnumCandidateStatusFilter<"Candidate"> | $Enums.CandidateStatus
    appliedAt?: DateTimeFilter<"Candidate"> | Date | string
    updatedAt?: DateTimeFilter<"Candidate"> | Date | string
    jobPostingId?: StringFilter<"Candidate"> | string
    jobPosting?: XOR<JobPostingScalarRelationFilter, JobPostingWhereInput>
    interviews?: InterviewListRelationFilter
  }

  export type CandidateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNo?: SortOrder
    resume?: SortOrderInput | SortOrder
    experience?: SortOrderInput | SortOrder
    skills?: SortOrder
    currentCompany?: SortOrderInput | SortOrder
    currentRole?: SortOrderInput | SortOrder
    expectedSalary?: SortOrderInput | SortOrder
    noticePeriod?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    status?: SortOrder
    appliedAt?: SortOrder
    updatedAt?: SortOrder
    jobPostingId?: SortOrder
    jobPosting?: JobPostingOrderByWithRelationInput
    interviews?: InterviewOrderByRelationAggregateInput
  }

  export type CandidateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: CandidateWhereInput | CandidateWhereInput[]
    OR?: CandidateWhereInput[]
    NOT?: CandidateWhereInput | CandidateWhereInput[]
    name?: StringFilter<"Candidate"> | string
    phoneNo?: StringFilter<"Candidate"> | string
    resume?: StringNullableFilter<"Candidate"> | string | null
    experience?: StringNullableFilter<"Candidate"> | string | null
    skills?: StringNullableListFilter<"Candidate">
    currentCompany?: StringNullableFilter<"Candidate"> | string | null
    currentRole?: StringNullableFilter<"Candidate"> | string | null
    expectedSalary?: StringNullableFilter<"Candidate"> | string | null
    noticePeriod?: StringNullableFilter<"Candidate"> | string | null
    location?: StringNullableFilter<"Candidate"> | string | null
    status?: EnumCandidateStatusFilter<"Candidate"> | $Enums.CandidateStatus
    appliedAt?: DateTimeFilter<"Candidate"> | Date | string
    updatedAt?: DateTimeFilter<"Candidate"> | Date | string
    jobPostingId?: StringFilter<"Candidate"> | string
    jobPosting?: XOR<JobPostingScalarRelationFilter, JobPostingWhereInput>
    interviews?: InterviewListRelationFilter
  }, "id" | "email">

  export type CandidateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNo?: SortOrder
    resume?: SortOrderInput | SortOrder
    experience?: SortOrderInput | SortOrder
    skills?: SortOrder
    currentCompany?: SortOrderInput | SortOrder
    currentRole?: SortOrderInput | SortOrder
    expectedSalary?: SortOrderInput | SortOrder
    noticePeriod?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    status?: SortOrder
    appliedAt?: SortOrder
    updatedAt?: SortOrder
    jobPostingId?: SortOrder
    _count?: CandidateCountOrderByAggregateInput
    _max?: CandidateMaxOrderByAggregateInput
    _min?: CandidateMinOrderByAggregateInput
  }

  export type CandidateScalarWhereWithAggregatesInput = {
    AND?: CandidateScalarWhereWithAggregatesInput | CandidateScalarWhereWithAggregatesInput[]
    OR?: CandidateScalarWhereWithAggregatesInput[]
    NOT?: CandidateScalarWhereWithAggregatesInput | CandidateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Candidate"> | string
    name?: StringWithAggregatesFilter<"Candidate"> | string
    email?: StringWithAggregatesFilter<"Candidate"> | string
    phoneNo?: StringWithAggregatesFilter<"Candidate"> | string
    resume?: StringNullableWithAggregatesFilter<"Candidate"> | string | null
    experience?: StringNullableWithAggregatesFilter<"Candidate"> | string | null
    skills?: StringNullableListFilter<"Candidate">
    currentCompany?: StringNullableWithAggregatesFilter<"Candidate"> | string | null
    currentRole?: StringNullableWithAggregatesFilter<"Candidate"> | string | null
    expectedSalary?: StringNullableWithAggregatesFilter<"Candidate"> | string | null
    noticePeriod?: StringNullableWithAggregatesFilter<"Candidate"> | string | null
    location?: StringNullableWithAggregatesFilter<"Candidate"> | string | null
    status?: EnumCandidateStatusWithAggregatesFilter<"Candidate"> | $Enums.CandidateStatus
    appliedAt?: DateTimeWithAggregatesFilter<"Candidate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Candidate"> | Date | string
    jobPostingId?: StringWithAggregatesFilter<"Candidate"> | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    questionText?: StringFilter<"Question"> | string
    category?: StringNullableFilter<"Question"> | string | null
    difficulty?: EnumDifficultyFilter<"Question"> | $Enums.Difficulty
    expectedAnswer?: StringNullableFilter<"Question"> | string | null
    keywords?: StringNullableListFilter<"Question">
    maxDuration?: IntNullableFilter<"Question"> | number | null
    order?: IntNullableFilter<"Question"> | number | null
    isActive?: BoolFilter<"Question"> | boolean
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    jobPostingId?: StringFilter<"Question"> | string
    jobPosting?: XOR<JobPostingScalarRelationFilter, JobPostingWhereInput>
    responses?: InterviewResponseListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    questionText?: SortOrder
    category?: SortOrderInput | SortOrder
    difficulty?: SortOrder
    expectedAnswer?: SortOrderInput | SortOrder
    keywords?: SortOrder
    maxDuration?: SortOrderInput | SortOrder
    order?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jobPostingId?: SortOrder
    jobPosting?: JobPostingOrderByWithRelationInput
    responses?: InterviewResponseOrderByRelationAggregateInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    questionText?: StringFilter<"Question"> | string
    category?: StringNullableFilter<"Question"> | string | null
    difficulty?: EnumDifficultyFilter<"Question"> | $Enums.Difficulty
    expectedAnswer?: StringNullableFilter<"Question"> | string | null
    keywords?: StringNullableListFilter<"Question">
    maxDuration?: IntNullableFilter<"Question"> | number | null
    order?: IntNullableFilter<"Question"> | number | null
    isActive?: BoolFilter<"Question"> | boolean
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    jobPostingId?: StringFilter<"Question"> | string
    jobPosting?: XOR<JobPostingScalarRelationFilter, JobPostingWhereInput>
    responses?: InterviewResponseListRelationFilter
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    questionText?: SortOrder
    category?: SortOrderInput | SortOrder
    difficulty?: SortOrder
    expectedAnswer?: SortOrderInput | SortOrder
    keywords?: SortOrder
    maxDuration?: SortOrderInput | SortOrder
    order?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jobPostingId?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    questionText?: StringWithAggregatesFilter<"Question"> | string
    category?: StringNullableWithAggregatesFilter<"Question"> | string | null
    difficulty?: EnumDifficultyWithAggregatesFilter<"Question"> | $Enums.Difficulty
    expectedAnswer?: StringNullableWithAggregatesFilter<"Question"> | string | null
    keywords?: StringNullableListFilter<"Question">
    maxDuration?: IntNullableWithAggregatesFilter<"Question"> | number | null
    order?: IntNullableWithAggregatesFilter<"Question"> | number | null
    isActive?: BoolWithAggregatesFilter<"Question"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
    jobPostingId?: StringWithAggregatesFilter<"Question"> | string
  }

  export type InterviewWhereInput = {
    AND?: InterviewWhereInput | InterviewWhereInput[]
    OR?: InterviewWhereInput[]
    NOT?: InterviewWhereInput | InterviewWhereInput[]
    id?: StringFilter<"Interview"> | string
    status?: EnumInterviewStatusFilter<"Interview"> | $Enums.InterviewStatus
    scheduedAt?: DateTimeNullableFilter<"Interview"> | Date | string | null
    startedAt?: DateTimeNullableFilter<"Interview"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Interview"> | Date | string | null
    duration?: IntNullableFilter<"Interview"> | number | null
    overallScore?: FloatNullableFilter<"Interview"> | number | null
    overallRating?: EnumRatingNullableFilter<"Interview"> | $Enums.Rating | null
    notes?: StringNullableFilter<"Interview"> | string | null
    calRecordingUrl?: StringNullableFilter<"Interview"> | string | null
    transscript?: StringNullableFilter<"Interview"> | string | null
    feedback?: StringNullableFilter<"Interview"> | string | null
    createdAt?: DateTimeFilter<"Interview"> | Date | string
    updatedAt?: DateTimeFilter<"Interview"> | Date | string
    candidateId?: StringFilter<"Interview"> | string
    jobPostingId?: StringFilter<"Interview"> | string
    candidate?: XOR<CandidateScalarRelationFilter, CandidateWhereInput>
    jobPosting?: XOR<JobPostingScalarRelationFilter, JobPostingWhereInput>
    responses?: InterviewResponseListRelationFilter
  }

  export type InterviewOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    scheduedAt?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    overallScore?: SortOrderInput | SortOrder
    overallRating?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    calRecordingUrl?: SortOrderInput | SortOrder
    transscript?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    candidateId?: SortOrder
    jobPostingId?: SortOrder
    candidate?: CandidateOrderByWithRelationInput
    jobPosting?: JobPostingOrderByWithRelationInput
    responses?: InterviewResponseOrderByRelationAggregateInput
  }

  export type InterviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InterviewWhereInput | InterviewWhereInput[]
    OR?: InterviewWhereInput[]
    NOT?: InterviewWhereInput | InterviewWhereInput[]
    status?: EnumInterviewStatusFilter<"Interview"> | $Enums.InterviewStatus
    scheduedAt?: DateTimeNullableFilter<"Interview"> | Date | string | null
    startedAt?: DateTimeNullableFilter<"Interview"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Interview"> | Date | string | null
    duration?: IntNullableFilter<"Interview"> | number | null
    overallScore?: FloatNullableFilter<"Interview"> | number | null
    overallRating?: EnumRatingNullableFilter<"Interview"> | $Enums.Rating | null
    notes?: StringNullableFilter<"Interview"> | string | null
    calRecordingUrl?: StringNullableFilter<"Interview"> | string | null
    transscript?: StringNullableFilter<"Interview"> | string | null
    feedback?: StringNullableFilter<"Interview"> | string | null
    createdAt?: DateTimeFilter<"Interview"> | Date | string
    updatedAt?: DateTimeFilter<"Interview"> | Date | string
    candidateId?: StringFilter<"Interview"> | string
    jobPostingId?: StringFilter<"Interview"> | string
    candidate?: XOR<CandidateScalarRelationFilter, CandidateWhereInput>
    jobPosting?: XOR<JobPostingScalarRelationFilter, JobPostingWhereInput>
    responses?: InterviewResponseListRelationFilter
  }, "id">

  export type InterviewOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    scheduedAt?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    overallScore?: SortOrderInput | SortOrder
    overallRating?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    calRecordingUrl?: SortOrderInput | SortOrder
    transscript?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    candidateId?: SortOrder
    jobPostingId?: SortOrder
    _count?: InterviewCountOrderByAggregateInput
    _avg?: InterviewAvgOrderByAggregateInput
    _max?: InterviewMaxOrderByAggregateInput
    _min?: InterviewMinOrderByAggregateInput
    _sum?: InterviewSumOrderByAggregateInput
  }

  export type InterviewScalarWhereWithAggregatesInput = {
    AND?: InterviewScalarWhereWithAggregatesInput | InterviewScalarWhereWithAggregatesInput[]
    OR?: InterviewScalarWhereWithAggregatesInput[]
    NOT?: InterviewScalarWhereWithAggregatesInput | InterviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Interview"> | string
    status?: EnumInterviewStatusWithAggregatesFilter<"Interview"> | $Enums.InterviewStatus
    scheduedAt?: DateTimeNullableWithAggregatesFilter<"Interview"> | Date | string | null
    startedAt?: DateTimeNullableWithAggregatesFilter<"Interview"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"Interview"> | Date | string | null
    duration?: IntNullableWithAggregatesFilter<"Interview"> | number | null
    overallScore?: FloatNullableWithAggregatesFilter<"Interview"> | number | null
    overallRating?: EnumRatingNullableWithAggregatesFilter<"Interview"> | $Enums.Rating | null
    notes?: StringNullableWithAggregatesFilter<"Interview"> | string | null
    calRecordingUrl?: StringNullableWithAggregatesFilter<"Interview"> | string | null
    transscript?: StringNullableWithAggregatesFilter<"Interview"> | string | null
    feedback?: StringNullableWithAggregatesFilter<"Interview"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Interview"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Interview"> | Date | string
    candidateId?: StringWithAggregatesFilter<"Interview"> | string
    jobPostingId?: StringWithAggregatesFilter<"Interview"> | string
  }

  export type InterviewResponseWhereInput = {
    AND?: InterviewResponseWhereInput | InterviewResponseWhereInput[]
    OR?: InterviewResponseWhereInput[]
    NOT?: InterviewResponseWhereInput | InterviewResponseWhereInput[]
    id?: StringFilter<"InterviewResponse"> | string
    answer?: StringFilter<"InterviewResponse"> | string
    duration?: IntNullableFilter<"InterviewResponse"> | number | null
    score?: FloatNullableFilter<"InterviewResponse"> | number | null
    overallRating?: EnumRatingNullableFilter<"InterviewResponse"> | $Enums.Rating | null
    feedback?: StringNullableFilter<"InterviewResponse"> | string | null
    keywords?: StringNullableListFilter<"InterviewResponse">
    sentiment?: StringNullableFilter<"InterviewResponse"> | string | null
    confidence?: FloatNullableFilter<"InterviewResponse"> | number | null
    createdAt?: DateTimeFilter<"InterviewResponse"> | Date | string
    updatedAt?: DateTimeFilter<"InterviewResponse"> | Date | string
    interviewId?: StringFilter<"InterviewResponse"> | string
    questionId?: StringFilter<"InterviewResponse"> | string
    interview?: XOR<InterviewScalarRelationFilter, InterviewWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }

  export type InterviewResponseOrderByWithRelationInput = {
    id?: SortOrder
    answer?: SortOrder
    duration?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    overallRating?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    keywords?: SortOrder
    sentiment?: SortOrderInput | SortOrder
    confidence?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    interviewId?: SortOrder
    questionId?: SortOrder
    interview?: InterviewOrderByWithRelationInput
    question?: QuestionOrderByWithRelationInput
  }

  export type InterviewResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    interviewId_questionId?: InterviewResponseInterviewIdQuestionIdCompoundUniqueInput
    AND?: InterviewResponseWhereInput | InterviewResponseWhereInput[]
    OR?: InterviewResponseWhereInput[]
    NOT?: InterviewResponseWhereInput | InterviewResponseWhereInput[]
    answer?: StringFilter<"InterviewResponse"> | string
    duration?: IntNullableFilter<"InterviewResponse"> | number | null
    score?: FloatNullableFilter<"InterviewResponse"> | number | null
    overallRating?: EnumRatingNullableFilter<"InterviewResponse"> | $Enums.Rating | null
    feedback?: StringNullableFilter<"InterviewResponse"> | string | null
    keywords?: StringNullableListFilter<"InterviewResponse">
    sentiment?: StringNullableFilter<"InterviewResponse"> | string | null
    confidence?: FloatNullableFilter<"InterviewResponse"> | number | null
    createdAt?: DateTimeFilter<"InterviewResponse"> | Date | string
    updatedAt?: DateTimeFilter<"InterviewResponse"> | Date | string
    interviewId?: StringFilter<"InterviewResponse"> | string
    questionId?: StringFilter<"InterviewResponse"> | string
    interview?: XOR<InterviewScalarRelationFilter, InterviewWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }, "id" | "interviewId_questionId">

  export type InterviewResponseOrderByWithAggregationInput = {
    id?: SortOrder
    answer?: SortOrder
    duration?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    overallRating?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    keywords?: SortOrder
    sentiment?: SortOrderInput | SortOrder
    confidence?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    interviewId?: SortOrder
    questionId?: SortOrder
    _count?: InterviewResponseCountOrderByAggregateInput
    _avg?: InterviewResponseAvgOrderByAggregateInput
    _max?: InterviewResponseMaxOrderByAggregateInput
    _min?: InterviewResponseMinOrderByAggregateInput
    _sum?: InterviewResponseSumOrderByAggregateInput
  }

  export type InterviewResponseScalarWhereWithAggregatesInput = {
    AND?: InterviewResponseScalarWhereWithAggregatesInput | InterviewResponseScalarWhereWithAggregatesInput[]
    OR?: InterviewResponseScalarWhereWithAggregatesInput[]
    NOT?: InterviewResponseScalarWhereWithAggregatesInput | InterviewResponseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InterviewResponse"> | string
    answer?: StringWithAggregatesFilter<"InterviewResponse"> | string
    duration?: IntNullableWithAggregatesFilter<"InterviewResponse"> | number | null
    score?: FloatNullableWithAggregatesFilter<"InterviewResponse"> | number | null
    overallRating?: EnumRatingNullableWithAggregatesFilter<"InterviewResponse"> | $Enums.Rating | null
    feedback?: StringNullableWithAggregatesFilter<"InterviewResponse"> | string | null
    keywords?: StringNullableListFilter<"InterviewResponse">
    sentiment?: StringNullableWithAggregatesFilter<"InterviewResponse"> | string | null
    confidence?: FloatNullableWithAggregatesFilter<"InterviewResponse"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"InterviewResponse"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InterviewResponse"> | Date | string
    interviewId?: StringWithAggregatesFilter<"InterviewResponse"> | string
    questionId?: StringWithAggregatesFilter<"InterviewResponse"> | string
  }

  export type CallLogWhereInput = {
    AND?: CallLogWhereInput | CallLogWhereInput[]
    OR?: CallLogWhereInput[]
    NOT?: CallLogWhereInput | CallLogWhereInput[]
    id?: StringFilter<"CallLog"> | string
    phoneNumber?: StringFilter<"CallLog"> | string
    callId?: StringNullableFilter<"CallLog"> | string | null
    status?: EnumCallStatusFilter<"CallLog"> | $Enums.CallStatus
    startTime?: DateTimeNullableFilter<"CallLog"> | Date | string | null
    endTime?: DateTimeNullableFilter<"CallLog"> | Date | string | null
    duration?: IntNullableFilter<"CallLog"> | number | null
    recordingUrl?: StringNullableFilter<"CallLog"> | string | null
    cost?: FloatNullableFilter<"CallLog"> | number | null
    errorMessage?: StringNullableFilter<"CallLog"> | string | null
    retryCount?: IntFilter<"CallLog"> | number
    createdAt?: DateTimeFilter<"CallLog"> | Date | string
    updatedAt?: DateTimeFilter<"CallLog"> | Date | string
  }

  export type CallLogOrderByWithRelationInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    callId?: SortOrderInput | SortOrder
    status?: SortOrder
    startTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    recordingUrl?: SortOrderInput | SortOrder
    cost?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    retryCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CallLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    callId?: string
    AND?: CallLogWhereInput | CallLogWhereInput[]
    OR?: CallLogWhereInput[]
    NOT?: CallLogWhereInput | CallLogWhereInput[]
    phoneNumber?: StringFilter<"CallLog"> | string
    status?: EnumCallStatusFilter<"CallLog"> | $Enums.CallStatus
    startTime?: DateTimeNullableFilter<"CallLog"> | Date | string | null
    endTime?: DateTimeNullableFilter<"CallLog"> | Date | string | null
    duration?: IntNullableFilter<"CallLog"> | number | null
    recordingUrl?: StringNullableFilter<"CallLog"> | string | null
    cost?: FloatNullableFilter<"CallLog"> | number | null
    errorMessage?: StringNullableFilter<"CallLog"> | string | null
    retryCount?: IntFilter<"CallLog"> | number
    createdAt?: DateTimeFilter<"CallLog"> | Date | string
    updatedAt?: DateTimeFilter<"CallLog"> | Date | string
  }, "id" | "callId">

  export type CallLogOrderByWithAggregationInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    callId?: SortOrderInput | SortOrder
    status?: SortOrder
    startTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    recordingUrl?: SortOrderInput | SortOrder
    cost?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    retryCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CallLogCountOrderByAggregateInput
    _avg?: CallLogAvgOrderByAggregateInput
    _max?: CallLogMaxOrderByAggregateInput
    _min?: CallLogMinOrderByAggregateInput
    _sum?: CallLogSumOrderByAggregateInput
  }

  export type CallLogScalarWhereWithAggregatesInput = {
    AND?: CallLogScalarWhereWithAggregatesInput | CallLogScalarWhereWithAggregatesInput[]
    OR?: CallLogScalarWhereWithAggregatesInput[]
    NOT?: CallLogScalarWhereWithAggregatesInput | CallLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CallLog"> | string
    phoneNumber?: StringWithAggregatesFilter<"CallLog"> | string
    callId?: StringNullableWithAggregatesFilter<"CallLog"> | string | null
    status?: EnumCallStatusWithAggregatesFilter<"CallLog"> | $Enums.CallStatus
    startTime?: DateTimeNullableWithAggregatesFilter<"CallLog"> | Date | string | null
    endTime?: DateTimeNullableWithAggregatesFilter<"CallLog"> | Date | string | null
    duration?: IntNullableWithAggregatesFilter<"CallLog"> | number | null
    recordingUrl?: StringNullableWithAggregatesFilter<"CallLog"> | string | null
    cost?: FloatNullableWithAggregatesFilter<"CallLog"> | number | null
    errorMessage?: StringNullableWithAggregatesFilter<"CallLog"> | string | null
    retryCount?: IntWithAggregatesFilter<"CallLog"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CallLog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CallLog"> | Date | string
  }

  export type RecruiterCreateInput = {
    id?: string
    name: string
    email: string
    avatar?: string | null
    password: string
    company?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobPostings?: JobPostingCreateNestedManyWithoutRecruiterInput
  }

  export type RecruiterUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    avatar?: string | null
    password: string
    company?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobPostings?: JobPostingUncheckedCreateNestedManyWithoutRecruiterInput
  }

  export type RecruiterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobPostings?: JobPostingUpdateManyWithoutRecruiterNestedInput
  }

  export type RecruiterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobPostings?: JobPostingUncheckedUpdateManyWithoutRecruiterNestedInput
  }

  export type RecruiterCreateManyInput = {
    id?: string
    name: string
    email: string
    avatar?: string | null
    password: string
    company?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecruiterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecruiterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobPostingCreateInput = {
    id?: string
    title: string
    descripiton: string
    requirements?: string | null
    location?: string | null
    salaryRange?: string | null
    experienceLevel?: string | null
    department?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    recruiter: RecruiterCreateNestedOneWithoutJobPostingsInput
    candidates?: CandidateCreateNestedManyWithoutJobPostingInput
    questions?: QuestionCreateNestedManyWithoutJobPostingInput
    interviews?: InterviewCreateNestedManyWithoutJobPostingInput
  }

  export type JobPostingUncheckedCreateInput = {
    id?: string
    title: string
    descripiton: string
    requirements?: string | null
    location?: string | null
    salaryRange?: string | null
    experienceLevel?: string | null
    department?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    recruiterId: string
    candidates?: CandidateUncheckedCreateNestedManyWithoutJobPostingInput
    questions?: QuestionUncheckedCreateNestedManyWithoutJobPostingInput
    interviews?: InterviewUncheckedCreateNestedManyWithoutJobPostingInput
  }

  export type JobPostingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    descripiton?: StringFieldUpdateOperationsInput | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    salaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recruiter?: RecruiterUpdateOneRequiredWithoutJobPostingsNestedInput
    candidates?: CandidateUpdateManyWithoutJobPostingNestedInput
    questions?: QuestionUpdateManyWithoutJobPostingNestedInput
    interviews?: InterviewUpdateManyWithoutJobPostingNestedInput
  }

  export type JobPostingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    descripiton?: StringFieldUpdateOperationsInput | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    salaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recruiterId?: StringFieldUpdateOperationsInput | string
    candidates?: CandidateUncheckedUpdateManyWithoutJobPostingNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutJobPostingNestedInput
    interviews?: InterviewUncheckedUpdateManyWithoutJobPostingNestedInput
  }

  export type JobPostingCreateManyInput = {
    id?: string
    title: string
    descripiton: string
    requirements?: string | null
    location?: string | null
    salaryRange?: string | null
    experienceLevel?: string | null
    department?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    recruiterId: string
  }

  export type JobPostingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    descripiton?: StringFieldUpdateOperationsInput | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    salaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobPostingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    descripiton?: StringFieldUpdateOperationsInput | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    salaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recruiterId?: StringFieldUpdateOperationsInput | string
  }

  export type CandidateCreateInput = {
    id?: string
    name: string
    email: string
    phoneNo: string
    resume?: string | null
    experience?: string | null
    skills?: CandidateCreateskillsInput | string[]
    currentCompany?: string | null
    currentRole?: string | null
    expectedSalary?: string | null
    noticePeriod?: string | null
    location?: string | null
    status?: $Enums.CandidateStatus
    appliedAt?: Date | string
    updatedAt?: Date | string
    jobPosting: JobPostingCreateNestedOneWithoutCandidatesInput
    interviews?: InterviewCreateNestedManyWithoutCandidateInput
  }

  export type CandidateUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phoneNo: string
    resume?: string | null
    experience?: string | null
    skills?: CandidateCreateskillsInput | string[]
    currentCompany?: string | null
    currentRole?: string | null
    expectedSalary?: string | null
    noticePeriod?: string | null
    location?: string | null
    status?: $Enums.CandidateStatus
    appliedAt?: Date | string
    updatedAt?: Date | string
    jobPostingId: string
    interviews?: InterviewUncheckedCreateNestedManyWithoutCandidateInput
  }

  export type CandidateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNo?: StringFieldUpdateOperationsInput | string
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: CandidateUpdateskillsInput | string[]
    currentCompany?: NullableStringFieldUpdateOperationsInput | string | null
    currentRole?: NullableStringFieldUpdateOperationsInput | string | null
    expectedSalary?: NullableStringFieldUpdateOperationsInput | string | null
    noticePeriod?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCandidateStatusFieldUpdateOperationsInput | $Enums.CandidateStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobPosting?: JobPostingUpdateOneRequiredWithoutCandidatesNestedInput
    interviews?: InterviewUpdateManyWithoutCandidateNestedInput
  }

  export type CandidateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNo?: StringFieldUpdateOperationsInput | string
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: CandidateUpdateskillsInput | string[]
    currentCompany?: NullableStringFieldUpdateOperationsInput | string | null
    currentRole?: NullableStringFieldUpdateOperationsInput | string | null
    expectedSalary?: NullableStringFieldUpdateOperationsInput | string | null
    noticePeriod?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCandidateStatusFieldUpdateOperationsInput | $Enums.CandidateStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobPostingId?: StringFieldUpdateOperationsInput | string
    interviews?: InterviewUncheckedUpdateManyWithoutCandidateNestedInput
  }

  export type CandidateCreateManyInput = {
    id?: string
    name: string
    email: string
    phoneNo: string
    resume?: string | null
    experience?: string | null
    skills?: CandidateCreateskillsInput | string[]
    currentCompany?: string | null
    currentRole?: string | null
    expectedSalary?: string | null
    noticePeriod?: string | null
    location?: string | null
    status?: $Enums.CandidateStatus
    appliedAt?: Date | string
    updatedAt?: Date | string
    jobPostingId: string
  }

  export type CandidateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNo?: StringFieldUpdateOperationsInput | string
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: CandidateUpdateskillsInput | string[]
    currentCompany?: NullableStringFieldUpdateOperationsInput | string | null
    currentRole?: NullableStringFieldUpdateOperationsInput | string | null
    expectedSalary?: NullableStringFieldUpdateOperationsInput | string | null
    noticePeriod?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCandidateStatusFieldUpdateOperationsInput | $Enums.CandidateStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNo?: StringFieldUpdateOperationsInput | string
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: CandidateUpdateskillsInput | string[]
    currentCompany?: NullableStringFieldUpdateOperationsInput | string | null
    currentRole?: NullableStringFieldUpdateOperationsInput | string | null
    expectedSalary?: NullableStringFieldUpdateOperationsInput | string | null
    noticePeriod?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCandidateStatusFieldUpdateOperationsInput | $Enums.CandidateStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobPostingId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionCreateInput = {
    id?: string
    questionText: string
    category?: string | null
    difficulty?: $Enums.Difficulty
    expectedAnswer?: string | null
    keywords?: QuestionCreatekeywordsInput | string[]
    maxDuration?: number | null
    order?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    jobPosting: JobPostingCreateNestedOneWithoutQuestionsInput
    responses?: InterviewResponseCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    questionText: string
    category?: string | null
    difficulty?: $Enums.Difficulty
    expectedAnswer?: string | null
    keywords?: QuestionCreatekeywordsInput | string[]
    maxDuration?: number | null
    order?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    jobPostingId: string
    responses?: InterviewResponseUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    expectedAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: QuestionUpdatekeywordsInput | string[]
    maxDuration?: NullableIntFieldUpdateOperationsInput | number | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobPosting?: JobPostingUpdateOneRequiredWithoutQuestionsNestedInput
    responses?: InterviewResponseUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    expectedAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: QuestionUpdatekeywordsInput | string[]
    maxDuration?: NullableIntFieldUpdateOperationsInput | number | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobPostingId?: StringFieldUpdateOperationsInput | string
    responses?: InterviewResponseUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: string
    questionText: string
    category?: string | null
    difficulty?: $Enums.Difficulty
    expectedAnswer?: string | null
    keywords?: QuestionCreatekeywordsInput | string[]
    maxDuration?: number | null
    order?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    jobPostingId: string
  }

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    expectedAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: QuestionUpdatekeywordsInput | string[]
    maxDuration?: NullableIntFieldUpdateOperationsInput | number | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    expectedAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: QuestionUpdatekeywordsInput | string[]
    maxDuration?: NullableIntFieldUpdateOperationsInput | number | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobPostingId?: StringFieldUpdateOperationsInput | string
  }

  export type InterviewCreateInput = {
    id?: string
    status?: $Enums.InterviewStatus
    scheduedAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    duration?: number | null
    overallScore?: number | null
    overallRating?: $Enums.Rating | null
    notes?: string | null
    calRecordingUrl?: string | null
    transscript?: string | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    candidate: CandidateCreateNestedOneWithoutInterviewsInput
    jobPosting: JobPostingCreateNestedOneWithoutInterviewsInput
    responses?: InterviewResponseCreateNestedManyWithoutInterviewInput
  }

  export type InterviewUncheckedCreateInput = {
    id?: string
    status?: $Enums.InterviewStatus
    scheduedAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    duration?: number | null
    overallScore?: number | null
    overallRating?: $Enums.Rating | null
    notes?: string | null
    calRecordingUrl?: string | null
    transscript?: string | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    candidateId: string
    jobPostingId: string
    responses?: InterviewResponseUncheckedCreateNestedManyWithoutInterviewInput
  }

  export type InterviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumInterviewStatusFieldUpdateOperationsInput | $Enums.InterviewStatus
    scheduedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    overallScore?: NullableFloatFieldUpdateOperationsInput | number | null
    overallRating?: NullableEnumRatingFieldUpdateOperationsInput | $Enums.Rating | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    calRecordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    transscript?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidate?: CandidateUpdateOneRequiredWithoutInterviewsNestedInput
    jobPosting?: JobPostingUpdateOneRequiredWithoutInterviewsNestedInput
    responses?: InterviewResponseUpdateManyWithoutInterviewNestedInput
  }

  export type InterviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumInterviewStatusFieldUpdateOperationsInput | $Enums.InterviewStatus
    scheduedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    overallScore?: NullableFloatFieldUpdateOperationsInput | number | null
    overallRating?: NullableEnumRatingFieldUpdateOperationsInput | $Enums.Rating | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    calRecordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    transscript?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidateId?: StringFieldUpdateOperationsInput | string
    jobPostingId?: StringFieldUpdateOperationsInput | string
    responses?: InterviewResponseUncheckedUpdateManyWithoutInterviewNestedInput
  }

  export type InterviewCreateManyInput = {
    id?: string
    status?: $Enums.InterviewStatus
    scheduedAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    duration?: number | null
    overallScore?: number | null
    overallRating?: $Enums.Rating | null
    notes?: string | null
    calRecordingUrl?: string | null
    transscript?: string | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    candidateId: string
    jobPostingId: string
  }

  export type InterviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumInterviewStatusFieldUpdateOperationsInput | $Enums.InterviewStatus
    scheduedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    overallScore?: NullableFloatFieldUpdateOperationsInput | number | null
    overallRating?: NullableEnumRatingFieldUpdateOperationsInput | $Enums.Rating | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    calRecordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    transscript?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumInterviewStatusFieldUpdateOperationsInput | $Enums.InterviewStatus
    scheduedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    overallScore?: NullableFloatFieldUpdateOperationsInput | number | null
    overallRating?: NullableEnumRatingFieldUpdateOperationsInput | $Enums.Rating | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    calRecordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    transscript?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidateId?: StringFieldUpdateOperationsInput | string
    jobPostingId?: StringFieldUpdateOperationsInput | string
  }

  export type InterviewResponseCreateInput = {
    id?: string
    answer: string
    duration?: number | null
    score?: number | null
    overallRating?: $Enums.Rating | null
    feedback?: string | null
    keywords?: InterviewResponseCreatekeywordsInput | string[]
    sentiment?: string | null
    confidence?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    interview: InterviewCreateNestedOneWithoutResponsesInput
    question: QuestionCreateNestedOneWithoutResponsesInput
  }

  export type InterviewResponseUncheckedCreateInput = {
    id?: string
    answer: string
    duration?: number | null
    score?: number | null
    overallRating?: $Enums.Rating | null
    feedback?: string | null
    keywords?: InterviewResponseCreatekeywordsInput | string[]
    sentiment?: string | null
    confidence?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    interviewId: string
    questionId: string
  }

  export type InterviewResponseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    overallRating?: NullableEnumRatingFieldUpdateOperationsInput | $Enums.Rating | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: InterviewResponseUpdatekeywordsInput | string[]
    sentiment?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interview?: InterviewUpdateOneRequiredWithoutResponsesNestedInput
    question?: QuestionUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type InterviewResponseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    overallRating?: NullableEnumRatingFieldUpdateOperationsInput | $Enums.Rating | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: InterviewResponseUpdatekeywordsInput | string[]
    sentiment?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
  }

  export type InterviewResponseCreateManyInput = {
    id?: string
    answer: string
    duration?: number | null
    score?: number | null
    overallRating?: $Enums.Rating | null
    feedback?: string | null
    keywords?: InterviewResponseCreatekeywordsInput | string[]
    sentiment?: string | null
    confidence?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    interviewId: string
    questionId: string
  }

  export type InterviewResponseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    overallRating?: NullableEnumRatingFieldUpdateOperationsInput | $Enums.Rating | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: InterviewResponseUpdatekeywordsInput | string[]
    sentiment?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewResponseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    overallRating?: NullableEnumRatingFieldUpdateOperationsInput | $Enums.Rating | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: InterviewResponseUpdatekeywordsInput | string[]
    sentiment?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
  }

  export type CallLogCreateInput = {
    id?: string
    phoneNumber: string
    callId?: string | null
    status?: $Enums.CallStatus
    startTime?: Date | string | null
    endTime?: Date | string | null
    duration?: number | null
    recordingUrl?: string | null
    cost?: number | null
    errorMessage?: string | null
    retryCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CallLogUncheckedCreateInput = {
    id?: string
    phoneNumber: string
    callId?: string | null
    status?: $Enums.CallStatus
    startTime?: Date | string | null
    endTime?: Date | string | null
    duration?: number | null
    recordingUrl?: string | null
    cost?: number | null
    errorMessage?: string | null
    retryCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CallLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    callId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCallStatusFieldUpdateOperationsInput | $Enums.CallStatus
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    recordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CallLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    callId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCallStatusFieldUpdateOperationsInput | $Enums.CallStatus
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    recordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CallLogCreateManyInput = {
    id?: string
    phoneNumber: string
    callId?: string | null
    status?: $Enums.CallStatus
    startTime?: Date | string | null
    endTime?: Date | string | null
    duration?: number | null
    recordingUrl?: string | null
    cost?: number | null
    errorMessage?: string | null
    retryCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CallLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    callId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCallStatusFieldUpdateOperationsInput | $Enums.CallStatus
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    recordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CallLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    callId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCallStatusFieldUpdateOperationsInput | $Enums.CallStatus
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    recordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type JobPostingListRelationFilter = {
    every?: JobPostingWhereInput
    some?: JobPostingWhereInput
    none?: JobPostingWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type JobPostingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecruiterCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    password?: SortOrder
    company?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecruiterMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    password?: SortOrder
    company?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecruiterMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    password?: SortOrder
    company?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RecruiterScalarRelationFilter = {
    is?: RecruiterWhereInput
    isNot?: RecruiterWhereInput
  }

  export type CandidateListRelationFilter = {
    every?: CandidateWhereInput
    some?: CandidateWhereInput
    none?: CandidateWhereInput
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type InterviewListRelationFilter = {
    every?: InterviewWhereInput
    some?: InterviewWhereInput
    none?: InterviewWhereInput
  }

  export type CandidateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InterviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobPostingCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    descripiton?: SortOrder
    requirements?: SortOrder
    location?: SortOrder
    salaryRange?: SortOrder
    experienceLevel?: SortOrder
    department?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    recruiterId?: SortOrder
  }

  export type JobPostingMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    descripiton?: SortOrder
    requirements?: SortOrder
    location?: SortOrder
    salaryRange?: SortOrder
    experienceLevel?: SortOrder
    department?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    recruiterId?: SortOrder
  }

  export type JobPostingMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    descripiton?: SortOrder
    requirements?: SortOrder
    location?: SortOrder
    salaryRange?: SortOrder
    experienceLevel?: SortOrder
    department?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    recruiterId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumCandidateStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CandidateStatus | EnumCandidateStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CandidateStatus[] | ListEnumCandidateStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CandidateStatus[] | ListEnumCandidateStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCandidateStatusFilter<$PrismaModel> | $Enums.CandidateStatus
  }

  export type JobPostingScalarRelationFilter = {
    is?: JobPostingWhereInput
    isNot?: JobPostingWhereInput
  }

  export type CandidateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNo?: SortOrder
    resume?: SortOrder
    experience?: SortOrder
    skills?: SortOrder
    currentCompany?: SortOrder
    currentRole?: SortOrder
    expectedSalary?: SortOrder
    noticePeriod?: SortOrder
    location?: SortOrder
    status?: SortOrder
    appliedAt?: SortOrder
    updatedAt?: SortOrder
    jobPostingId?: SortOrder
  }

  export type CandidateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNo?: SortOrder
    resume?: SortOrder
    experience?: SortOrder
    currentCompany?: SortOrder
    currentRole?: SortOrder
    expectedSalary?: SortOrder
    noticePeriod?: SortOrder
    location?: SortOrder
    status?: SortOrder
    appliedAt?: SortOrder
    updatedAt?: SortOrder
    jobPostingId?: SortOrder
  }

  export type CandidateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNo?: SortOrder
    resume?: SortOrder
    experience?: SortOrder
    currentCompany?: SortOrder
    currentRole?: SortOrder
    expectedSalary?: SortOrder
    noticePeriod?: SortOrder
    location?: SortOrder
    status?: SortOrder
    appliedAt?: SortOrder
    updatedAt?: SortOrder
    jobPostingId?: SortOrder
  }

  export type EnumCandidateStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CandidateStatus | EnumCandidateStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CandidateStatus[] | ListEnumCandidateStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CandidateStatus[] | ListEnumCandidateStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCandidateStatusWithAggregatesFilter<$PrismaModel> | $Enums.CandidateStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCandidateStatusFilter<$PrismaModel>
    _max?: NestedEnumCandidateStatusFilter<$PrismaModel>
  }

  export type EnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type InterviewResponseListRelationFilter = {
    every?: InterviewResponseWhereInput
    some?: InterviewResponseWhereInput
    none?: InterviewResponseWhereInput
  }

  export type InterviewResponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    questionText?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    expectedAnswer?: SortOrder
    keywords?: SortOrder
    maxDuration?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jobPostingId?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    maxDuration?: SortOrder
    order?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    questionText?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    expectedAnswer?: SortOrder
    maxDuration?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jobPostingId?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    questionText?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    expectedAnswer?: SortOrder
    maxDuration?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jobPostingId?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    maxDuration?: SortOrder
    order?: SortOrder
  }

  export type EnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type EnumInterviewStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewStatus | EnumInterviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InterviewStatus[] | ListEnumInterviewStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InterviewStatus[] | ListEnumInterviewStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInterviewStatusFilter<$PrismaModel> | $Enums.InterviewStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumRatingNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Rating | EnumRatingFieldRefInput<$PrismaModel> | null
    in?: $Enums.Rating[] | ListEnumRatingFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Rating[] | ListEnumRatingFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRatingNullableFilter<$PrismaModel> | $Enums.Rating | null
  }

  export type CandidateScalarRelationFilter = {
    is?: CandidateWhereInput
    isNot?: CandidateWhereInput
  }

  export type InterviewCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    scheduedAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    duration?: SortOrder
    overallScore?: SortOrder
    overallRating?: SortOrder
    notes?: SortOrder
    calRecordingUrl?: SortOrder
    transscript?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    candidateId?: SortOrder
    jobPostingId?: SortOrder
  }

  export type InterviewAvgOrderByAggregateInput = {
    duration?: SortOrder
    overallScore?: SortOrder
  }

  export type InterviewMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    scheduedAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    duration?: SortOrder
    overallScore?: SortOrder
    overallRating?: SortOrder
    notes?: SortOrder
    calRecordingUrl?: SortOrder
    transscript?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    candidateId?: SortOrder
    jobPostingId?: SortOrder
  }

  export type InterviewMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    scheduedAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    duration?: SortOrder
    overallScore?: SortOrder
    overallRating?: SortOrder
    notes?: SortOrder
    calRecordingUrl?: SortOrder
    transscript?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    candidateId?: SortOrder
    jobPostingId?: SortOrder
  }

  export type InterviewSumOrderByAggregateInput = {
    duration?: SortOrder
    overallScore?: SortOrder
  }

  export type EnumInterviewStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewStatus | EnumInterviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InterviewStatus[] | ListEnumInterviewStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InterviewStatus[] | ListEnumInterviewStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInterviewStatusWithAggregatesFilter<$PrismaModel> | $Enums.InterviewStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInterviewStatusFilter<$PrismaModel>
    _max?: NestedEnumInterviewStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumRatingNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rating | EnumRatingFieldRefInput<$PrismaModel> | null
    in?: $Enums.Rating[] | ListEnumRatingFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Rating[] | ListEnumRatingFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRatingNullableWithAggregatesFilter<$PrismaModel> | $Enums.Rating | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRatingNullableFilter<$PrismaModel>
    _max?: NestedEnumRatingNullableFilter<$PrismaModel>
  }

  export type InterviewScalarRelationFilter = {
    is?: InterviewWhereInput
    isNot?: InterviewWhereInput
  }

  export type QuestionScalarRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type InterviewResponseInterviewIdQuestionIdCompoundUniqueInput = {
    interviewId: string
    questionId: string
  }

  export type InterviewResponseCountOrderByAggregateInput = {
    id?: SortOrder
    answer?: SortOrder
    duration?: SortOrder
    score?: SortOrder
    overallRating?: SortOrder
    feedback?: SortOrder
    keywords?: SortOrder
    sentiment?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    interviewId?: SortOrder
    questionId?: SortOrder
  }

  export type InterviewResponseAvgOrderByAggregateInput = {
    duration?: SortOrder
    score?: SortOrder
    confidence?: SortOrder
  }

  export type InterviewResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    answer?: SortOrder
    duration?: SortOrder
    score?: SortOrder
    overallRating?: SortOrder
    feedback?: SortOrder
    sentiment?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    interviewId?: SortOrder
    questionId?: SortOrder
  }

  export type InterviewResponseMinOrderByAggregateInput = {
    id?: SortOrder
    answer?: SortOrder
    duration?: SortOrder
    score?: SortOrder
    overallRating?: SortOrder
    feedback?: SortOrder
    sentiment?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    interviewId?: SortOrder
    questionId?: SortOrder
  }

  export type InterviewResponseSumOrderByAggregateInput = {
    duration?: SortOrder
    score?: SortOrder
    confidence?: SortOrder
  }

  export type EnumCallStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CallStatus | EnumCallStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CallStatus[] | ListEnumCallStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CallStatus[] | ListEnumCallStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCallStatusFilter<$PrismaModel> | $Enums.CallStatus
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

  export type CallLogCountOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    callId?: SortOrder
    status?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    recordingUrl?: SortOrder
    cost?: SortOrder
    errorMessage?: SortOrder
    retryCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CallLogAvgOrderByAggregateInput = {
    duration?: SortOrder
    cost?: SortOrder
    retryCount?: SortOrder
  }

  export type CallLogMaxOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    callId?: SortOrder
    status?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    recordingUrl?: SortOrder
    cost?: SortOrder
    errorMessage?: SortOrder
    retryCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CallLogMinOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    callId?: SortOrder
    status?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    recordingUrl?: SortOrder
    cost?: SortOrder
    errorMessage?: SortOrder
    retryCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CallLogSumOrderByAggregateInput = {
    duration?: SortOrder
    cost?: SortOrder
    retryCount?: SortOrder
  }

  export type EnumCallStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CallStatus | EnumCallStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CallStatus[] | ListEnumCallStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CallStatus[] | ListEnumCallStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCallStatusWithAggregatesFilter<$PrismaModel> | $Enums.CallStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCallStatusFilter<$PrismaModel>
    _max?: NestedEnumCallStatusFilter<$PrismaModel>
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

  export type JobPostingCreateNestedManyWithoutRecruiterInput = {
    create?: XOR<JobPostingCreateWithoutRecruiterInput, JobPostingUncheckedCreateWithoutRecruiterInput> | JobPostingCreateWithoutRecruiterInput[] | JobPostingUncheckedCreateWithoutRecruiterInput[]
    connectOrCreate?: JobPostingCreateOrConnectWithoutRecruiterInput | JobPostingCreateOrConnectWithoutRecruiterInput[]
    createMany?: JobPostingCreateManyRecruiterInputEnvelope
    connect?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[]
  }

  export type JobPostingUncheckedCreateNestedManyWithoutRecruiterInput = {
    create?: XOR<JobPostingCreateWithoutRecruiterInput, JobPostingUncheckedCreateWithoutRecruiterInput> | JobPostingCreateWithoutRecruiterInput[] | JobPostingUncheckedCreateWithoutRecruiterInput[]
    connectOrCreate?: JobPostingCreateOrConnectWithoutRecruiterInput | JobPostingCreateOrConnectWithoutRecruiterInput[]
    createMany?: JobPostingCreateManyRecruiterInputEnvelope
    connect?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type JobPostingUpdateManyWithoutRecruiterNestedInput = {
    create?: XOR<JobPostingCreateWithoutRecruiterInput, JobPostingUncheckedCreateWithoutRecruiterInput> | JobPostingCreateWithoutRecruiterInput[] | JobPostingUncheckedCreateWithoutRecruiterInput[]
    connectOrCreate?: JobPostingCreateOrConnectWithoutRecruiterInput | JobPostingCreateOrConnectWithoutRecruiterInput[]
    upsert?: JobPostingUpsertWithWhereUniqueWithoutRecruiterInput | JobPostingUpsertWithWhereUniqueWithoutRecruiterInput[]
    createMany?: JobPostingCreateManyRecruiterInputEnvelope
    set?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[]
    disconnect?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[]
    delete?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[]
    connect?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[]
    update?: JobPostingUpdateWithWhereUniqueWithoutRecruiterInput | JobPostingUpdateWithWhereUniqueWithoutRecruiterInput[]
    updateMany?: JobPostingUpdateManyWithWhereWithoutRecruiterInput | JobPostingUpdateManyWithWhereWithoutRecruiterInput[]
    deleteMany?: JobPostingScalarWhereInput | JobPostingScalarWhereInput[]
  }

  export type JobPostingUncheckedUpdateManyWithoutRecruiterNestedInput = {
    create?: XOR<JobPostingCreateWithoutRecruiterInput, JobPostingUncheckedCreateWithoutRecruiterInput> | JobPostingCreateWithoutRecruiterInput[] | JobPostingUncheckedCreateWithoutRecruiterInput[]
    connectOrCreate?: JobPostingCreateOrConnectWithoutRecruiterInput | JobPostingCreateOrConnectWithoutRecruiterInput[]
    upsert?: JobPostingUpsertWithWhereUniqueWithoutRecruiterInput | JobPostingUpsertWithWhereUniqueWithoutRecruiterInput[]
    createMany?: JobPostingCreateManyRecruiterInputEnvelope
    set?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[]
    disconnect?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[]
    delete?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[]
    connect?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[]
    update?: JobPostingUpdateWithWhereUniqueWithoutRecruiterInput | JobPostingUpdateWithWhereUniqueWithoutRecruiterInput[]
    updateMany?: JobPostingUpdateManyWithWhereWithoutRecruiterInput | JobPostingUpdateManyWithWhereWithoutRecruiterInput[]
    deleteMany?: JobPostingScalarWhereInput | JobPostingScalarWhereInput[]
  }

  export type RecruiterCreateNestedOneWithoutJobPostingsInput = {
    create?: XOR<RecruiterCreateWithoutJobPostingsInput, RecruiterUncheckedCreateWithoutJobPostingsInput>
    connectOrCreate?: RecruiterCreateOrConnectWithoutJobPostingsInput
    connect?: RecruiterWhereUniqueInput
  }

  export type CandidateCreateNestedManyWithoutJobPostingInput = {
    create?: XOR<CandidateCreateWithoutJobPostingInput, CandidateUncheckedCreateWithoutJobPostingInput> | CandidateCreateWithoutJobPostingInput[] | CandidateUncheckedCreateWithoutJobPostingInput[]
    connectOrCreate?: CandidateCreateOrConnectWithoutJobPostingInput | CandidateCreateOrConnectWithoutJobPostingInput[]
    createMany?: CandidateCreateManyJobPostingInputEnvelope
    connect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
  }

  export type QuestionCreateNestedManyWithoutJobPostingInput = {
    create?: XOR<QuestionCreateWithoutJobPostingInput, QuestionUncheckedCreateWithoutJobPostingInput> | QuestionCreateWithoutJobPostingInput[] | QuestionUncheckedCreateWithoutJobPostingInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutJobPostingInput | QuestionCreateOrConnectWithoutJobPostingInput[]
    createMany?: QuestionCreateManyJobPostingInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type InterviewCreateNestedManyWithoutJobPostingInput = {
    create?: XOR<InterviewCreateWithoutJobPostingInput, InterviewUncheckedCreateWithoutJobPostingInput> | InterviewCreateWithoutJobPostingInput[] | InterviewUncheckedCreateWithoutJobPostingInput[]
    connectOrCreate?: InterviewCreateOrConnectWithoutJobPostingInput | InterviewCreateOrConnectWithoutJobPostingInput[]
    createMany?: InterviewCreateManyJobPostingInputEnvelope
    connect?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
  }

  export type CandidateUncheckedCreateNestedManyWithoutJobPostingInput = {
    create?: XOR<CandidateCreateWithoutJobPostingInput, CandidateUncheckedCreateWithoutJobPostingInput> | CandidateCreateWithoutJobPostingInput[] | CandidateUncheckedCreateWithoutJobPostingInput[]
    connectOrCreate?: CandidateCreateOrConnectWithoutJobPostingInput | CandidateCreateOrConnectWithoutJobPostingInput[]
    createMany?: CandidateCreateManyJobPostingInputEnvelope
    connect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutJobPostingInput = {
    create?: XOR<QuestionCreateWithoutJobPostingInput, QuestionUncheckedCreateWithoutJobPostingInput> | QuestionCreateWithoutJobPostingInput[] | QuestionUncheckedCreateWithoutJobPostingInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutJobPostingInput | QuestionCreateOrConnectWithoutJobPostingInput[]
    createMany?: QuestionCreateManyJobPostingInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type InterviewUncheckedCreateNestedManyWithoutJobPostingInput = {
    create?: XOR<InterviewCreateWithoutJobPostingInput, InterviewUncheckedCreateWithoutJobPostingInput> | InterviewCreateWithoutJobPostingInput[] | InterviewUncheckedCreateWithoutJobPostingInput[]
    connectOrCreate?: InterviewCreateOrConnectWithoutJobPostingInput | InterviewCreateOrConnectWithoutJobPostingInput[]
    createMany?: InterviewCreateManyJobPostingInputEnvelope
    connect?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type RecruiterUpdateOneRequiredWithoutJobPostingsNestedInput = {
    create?: XOR<RecruiterCreateWithoutJobPostingsInput, RecruiterUncheckedCreateWithoutJobPostingsInput>
    connectOrCreate?: RecruiterCreateOrConnectWithoutJobPostingsInput
    upsert?: RecruiterUpsertWithoutJobPostingsInput
    connect?: RecruiterWhereUniqueInput
    update?: XOR<XOR<RecruiterUpdateToOneWithWhereWithoutJobPostingsInput, RecruiterUpdateWithoutJobPostingsInput>, RecruiterUncheckedUpdateWithoutJobPostingsInput>
  }

  export type CandidateUpdateManyWithoutJobPostingNestedInput = {
    create?: XOR<CandidateCreateWithoutJobPostingInput, CandidateUncheckedCreateWithoutJobPostingInput> | CandidateCreateWithoutJobPostingInput[] | CandidateUncheckedCreateWithoutJobPostingInput[]
    connectOrCreate?: CandidateCreateOrConnectWithoutJobPostingInput | CandidateCreateOrConnectWithoutJobPostingInput[]
    upsert?: CandidateUpsertWithWhereUniqueWithoutJobPostingInput | CandidateUpsertWithWhereUniqueWithoutJobPostingInput[]
    createMany?: CandidateCreateManyJobPostingInputEnvelope
    set?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    disconnect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    delete?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    connect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    update?: CandidateUpdateWithWhereUniqueWithoutJobPostingInput | CandidateUpdateWithWhereUniqueWithoutJobPostingInput[]
    updateMany?: CandidateUpdateManyWithWhereWithoutJobPostingInput | CandidateUpdateManyWithWhereWithoutJobPostingInput[]
    deleteMany?: CandidateScalarWhereInput | CandidateScalarWhereInput[]
  }

  export type QuestionUpdateManyWithoutJobPostingNestedInput = {
    create?: XOR<QuestionCreateWithoutJobPostingInput, QuestionUncheckedCreateWithoutJobPostingInput> | QuestionCreateWithoutJobPostingInput[] | QuestionUncheckedCreateWithoutJobPostingInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutJobPostingInput | QuestionCreateOrConnectWithoutJobPostingInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutJobPostingInput | QuestionUpsertWithWhereUniqueWithoutJobPostingInput[]
    createMany?: QuestionCreateManyJobPostingInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutJobPostingInput | QuestionUpdateWithWhereUniqueWithoutJobPostingInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutJobPostingInput | QuestionUpdateManyWithWhereWithoutJobPostingInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type InterviewUpdateManyWithoutJobPostingNestedInput = {
    create?: XOR<InterviewCreateWithoutJobPostingInput, InterviewUncheckedCreateWithoutJobPostingInput> | InterviewCreateWithoutJobPostingInput[] | InterviewUncheckedCreateWithoutJobPostingInput[]
    connectOrCreate?: InterviewCreateOrConnectWithoutJobPostingInput | InterviewCreateOrConnectWithoutJobPostingInput[]
    upsert?: InterviewUpsertWithWhereUniqueWithoutJobPostingInput | InterviewUpsertWithWhereUniqueWithoutJobPostingInput[]
    createMany?: InterviewCreateManyJobPostingInputEnvelope
    set?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    disconnect?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    delete?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    connect?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    update?: InterviewUpdateWithWhereUniqueWithoutJobPostingInput | InterviewUpdateWithWhereUniqueWithoutJobPostingInput[]
    updateMany?: InterviewUpdateManyWithWhereWithoutJobPostingInput | InterviewUpdateManyWithWhereWithoutJobPostingInput[]
    deleteMany?: InterviewScalarWhereInput | InterviewScalarWhereInput[]
  }

  export type CandidateUncheckedUpdateManyWithoutJobPostingNestedInput = {
    create?: XOR<CandidateCreateWithoutJobPostingInput, CandidateUncheckedCreateWithoutJobPostingInput> | CandidateCreateWithoutJobPostingInput[] | CandidateUncheckedCreateWithoutJobPostingInput[]
    connectOrCreate?: CandidateCreateOrConnectWithoutJobPostingInput | CandidateCreateOrConnectWithoutJobPostingInput[]
    upsert?: CandidateUpsertWithWhereUniqueWithoutJobPostingInput | CandidateUpsertWithWhereUniqueWithoutJobPostingInput[]
    createMany?: CandidateCreateManyJobPostingInputEnvelope
    set?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    disconnect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    delete?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    connect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    update?: CandidateUpdateWithWhereUniqueWithoutJobPostingInput | CandidateUpdateWithWhereUniqueWithoutJobPostingInput[]
    updateMany?: CandidateUpdateManyWithWhereWithoutJobPostingInput | CandidateUpdateManyWithWhereWithoutJobPostingInput[]
    deleteMany?: CandidateScalarWhereInput | CandidateScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutJobPostingNestedInput = {
    create?: XOR<QuestionCreateWithoutJobPostingInput, QuestionUncheckedCreateWithoutJobPostingInput> | QuestionCreateWithoutJobPostingInput[] | QuestionUncheckedCreateWithoutJobPostingInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutJobPostingInput | QuestionCreateOrConnectWithoutJobPostingInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutJobPostingInput | QuestionUpsertWithWhereUniqueWithoutJobPostingInput[]
    createMany?: QuestionCreateManyJobPostingInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutJobPostingInput | QuestionUpdateWithWhereUniqueWithoutJobPostingInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutJobPostingInput | QuestionUpdateManyWithWhereWithoutJobPostingInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type InterviewUncheckedUpdateManyWithoutJobPostingNestedInput = {
    create?: XOR<InterviewCreateWithoutJobPostingInput, InterviewUncheckedCreateWithoutJobPostingInput> | InterviewCreateWithoutJobPostingInput[] | InterviewUncheckedCreateWithoutJobPostingInput[]
    connectOrCreate?: InterviewCreateOrConnectWithoutJobPostingInput | InterviewCreateOrConnectWithoutJobPostingInput[]
    upsert?: InterviewUpsertWithWhereUniqueWithoutJobPostingInput | InterviewUpsertWithWhereUniqueWithoutJobPostingInput[]
    createMany?: InterviewCreateManyJobPostingInputEnvelope
    set?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    disconnect?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    delete?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    connect?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    update?: InterviewUpdateWithWhereUniqueWithoutJobPostingInput | InterviewUpdateWithWhereUniqueWithoutJobPostingInput[]
    updateMany?: InterviewUpdateManyWithWhereWithoutJobPostingInput | InterviewUpdateManyWithWhereWithoutJobPostingInput[]
    deleteMany?: InterviewScalarWhereInput | InterviewScalarWhereInput[]
  }

  export type CandidateCreateskillsInput = {
    set: string[]
  }

  export type JobPostingCreateNestedOneWithoutCandidatesInput = {
    create?: XOR<JobPostingCreateWithoutCandidatesInput, JobPostingUncheckedCreateWithoutCandidatesInput>
    connectOrCreate?: JobPostingCreateOrConnectWithoutCandidatesInput
    connect?: JobPostingWhereUniqueInput
  }

  export type InterviewCreateNestedManyWithoutCandidateInput = {
    create?: XOR<InterviewCreateWithoutCandidateInput, InterviewUncheckedCreateWithoutCandidateInput> | InterviewCreateWithoutCandidateInput[] | InterviewUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: InterviewCreateOrConnectWithoutCandidateInput | InterviewCreateOrConnectWithoutCandidateInput[]
    createMany?: InterviewCreateManyCandidateInputEnvelope
    connect?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
  }

  export type InterviewUncheckedCreateNestedManyWithoutCandidateInput = {
    create?: XOR<InterviewCreateWithoutCandidateInput, InterviewUncheckedCreateWithoutCandidateInput> | InterviewCreateWithoutCandidateInput[] | InterviewUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: InterviewCreateOrConnectWithoutCandidateInput | InterviewCreateOrConnectWithoutCandidateInput[]
    createMany?: InterviewCreateManyCandidateInputEnvelope
    connect?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
  }

  export type CandidateUpdateskillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumCandidateStatusFieldUpdateOperationsInput = {
    set?: $Enums.CandidateStatus
  }

  export type JobPostingUpdateOneRequiredWithoutCandidatesNestedInput = {
    create?: XOR<JobPostingCreateWithoutCandidatesInput, JobPostingUncheckedCreateWithoutCandidatesInput>
    connectOrCreate?: JobPostingCreateOrConnectWithoutCandidatesInput
    upsert?: JobPostingUpsertWithoutCandidatesInput
    connect?: JobPostingWhereUniqueInput
    update?: XOR<XOR<JobPostingUpdateToOneWithWhereWithoutCandidatesInput, JobPostingUpdateWithoutCandidatesInput>, JobPostingUncheckedUpdateWithoutCandidatesInput>
  }

  export type InterviewUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<InterviewCreateWithoutCandidateInput, InterviewUncheckedCreateWithoutCandidateInput> | InterviewCreateWithoutCandidateInput[] | InterviewUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: InterviewCreateOrConnectWithoutCandidateInput | InterviewCreateOrConnectWithoutCandidateInput[]
    upsert?: InterviewUpsertWithWhereUniqueWithoutCandidateInput | InterviewUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: InterviewCreateManyCandidateInputEnvelope
    set?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    disconnect?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    delete?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    connect?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    update?: InterviewUpdateWithWhereUniqueWithoutCandidateInput | InterviewUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: InterviewUpdateManyWithWhereWithoutCandidateInput | InterviewUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: InterviewScalarWhereInput | InterviewScalarWhereInput[]
  }

  export type InterviewUncheckedUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<InterviewCreateWithoutCandidateInput, InterviewUncheckedCreateWithoutCandidateInput> | InterviewCreateWithoutCandidateInput[] | InterviewUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: InterviewCreateOrConnectWithoutCandidateInput | InterviewCreateOrConnectWithoutCandidateInput[]
    upsert?: InterviewUpsertWithWhereUniqueWithoutCandidateInput | InterviewUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: InterviewCreateManyCandidateInputEnvelope
    set?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    disconnect?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    delete?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    connect?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    update?: InterviewUpdateWithWhereUniqueWithoutCandidateInput | InterviewUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: InterviewUpdateManyWithWhereWithoutCandidateInput | InterviewUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: InterviewScalarWhereInput | InterviewScalarWhereInput[]
  }

  export type QuestionCreatekeywordsInput = {
    set: string[]
  }

  export type JobPostingCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<JobPostingCreateWithoutQuestionsInput, JobPostingUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: JobPostingCreateOrConnectWithoutQuestionsInput
    connect?: JobPostingWhereUniqueInput
  }

  export type InterviewResponseCreateNestedManyWithoutQuestionInput = {
    create?: XOR<InterviewResponseCreateWithoutQuestionInput, InterviewResponseUncheckedCreateWithoutQuestionInput> | InterviewResponseCreateWithoutQuestionInput[] | InterviewResponseUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: InterviewResponseCreateOrConnectWithoutQuestionInput | InterviewResponseCreateOrConnectWithoutQuestionInput[]
    createMany?: InterviewResponseCreateManyQuestionInputEnvelope
    connect?: InterviewResponseWhereUniqueInput | InterviewResponseWhereUniqueInput[]
  }

  export type InterviewResponseUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<InterviewResponseCreateWithoutQuestionInput, InterviewResponseUncheckedCreateWithoutQuestionInput> | InterviewResponseCreateWithoutQuestionInput[] | InterviewResponseUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: InterviewResponseCreateOrConnectWithoutQuestionInput | InterviewResponseCreateOrConnectWithoutQuestionInput[]
    createMany?: InterviewResponseCreateManyQuestionInputEnvelope
    connect?: InterviewResponseWhereUniqueInput | InterviewResponseWhereUniqueInput[]
  }

  export type EnumDifficultyFieldUpdateOperationsInput = {
    set?: $Enums.Difficulty
  }

  export type QuestionUpdatekeywordsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type JobPostingUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<JobPostingCreateWithoutQuestionsInput, JobPostingUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: JobPostingCreateOrConnectWithoutQuestionsInput
    upsert?: JobPostingUpsertWithoutQuestionsInput
    connect?: JobPostingWhereUniqueInput
    update?: XOR<XOR<JobPostingUpdateToOneWithWhereWithoutQuestionsInput, JobPostingUpdateWithoutQuestionsInput>, JobPostingUncheckedUpdateWithoutQuestionsInput>
  }

  export type InterviewResponseUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<InterviewResponseCreateWithoutQuestionInput, InterviewResponseUncheckedCreateWithoutQuestionInput> | InterviewResponseCreateWithoutQuestionInput[] | InterviewResponseUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: InterviewResponseCreateOrConnectWithoutQuestionInput | InterviewResponseCreateOrConnectWithoutQuestionInput[]
    upsert?: InterviewResponseUpsertWithWhereUniqueWithoutQuestionInput | InterviewResponseUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: InterviewResponseCreateManyQuestionInputEnvelope
    set?: InterviewResponseWhereUniqueInput | InterviewResponseWhereUniqueInput[]
    disconnect?: InterviewResponseWhereUniqueInput | InterviewResponseWhereUniqueInput[]
    delete?: InterviewResponseWhereUniqueInput | InterviewResponseWhereUniqueInput[]
    connect?: InterviewResponseWhereUniqueInput | InterviewResponseWhereUniqueInput[]
    update?: InterviewResponseUpdateWithWhereUniqueWithoutQuestionInput | InterviewResponseUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: InterviewResponseUpdateManyWithWhereWithoutQuestionInput | InterviewResponseUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: InterviewResponseScalarWhereInput | InterviewResponseScalarWhereInput[]
  }

  export type InterviewResponseUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<InterviewResponseCreateWithoutQuestionInput, InterviewResponseUncheckedCreateWithoutQuestionInput> | InterviewResponseCreateWithoutQuestionInput[] | InterviewResponseUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: InterviewResponseCreateOrConnectWithoutQuestionInput | InterviewResponseCreateOrConnectWithoutQuestionInput[]
    upsert?: InterviewResponseUpsertWithWhereUniqueWithoutQuestionInput | InterviewResponseUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: InterviewResponseCreateManyQuestionInputEnvelope
    set?: InterviewResponseWhereUniqueInput | InterviewResponseWhereUniqueInput[]
    disconnect?: InterviewResponseWhereUniqueInput | InterviewResponseWhereUniqueInput[]
    delete?: InterviewResponseWhereUniqueInput | InterviewResponseWhereUniqueInput[]
    connect?: InterviewResponseWhereUniqueInput | InterviewResponseWhereUniqueInput[]
    update?: InterviewResponseUpdateWithWhereUniqueWithoutQuestionInput | InterviewResponseUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: InterviewResponseUpdateManyWithWhereWithoutQuestionInput | InterviewResponseUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: InterviewResponseScalarWhereInput | InterviewResponseScalarWhereInput[]
  }

  export type CandidateCreateNestedOneWithoutInterviewsInput = {
    create?: XOR<CandidateCreateWithoutInterviewsInput, CandidateUncheckedCreateWithoutInterviewsInput>
    connectOrCreate?: CandidateCreateOrConnectWithoutInterviewsInput
    connect?: CandidateWhereUniqueInput
  }

  export type JobPostingCreateNestedOneWithoutInterviewsInput = {
    create?: XOR<JobPostingCreateWithoutInterviewsInput, JobPostingUncheckedCreateWithoutInterviewsInput>
    connectOrCreate?: JobPostingCreateOrConnectWithoutInterviewsInput
    connect?: JobPostingWhereUniqueInput
  }

  export type InterviewResponseCreateNestedManyWithoutInterviewInput = {
    create?: XOR<InterviewResponseCreateWithoutInterviewInput, InterviewResponseUncheckedCreateWithoutInterviewInput> | InterviewResponseCreateWithoutInterviewInput[] | InterviewResponseUncheckedCreateWithoutInterviewInput[]
    connectOrCreate?: InterviewResponseCreateOrConnectWithoutInterviewInput | InterviewResponseCreateOrConnectWithoutInterviewInput[]
    createMany?: InterviewResponseCreateManyInterviewInputEnvelope
    connect?: InterviewResponseWhereUniqueInput | InterviewResponseWhereUniqueInput[]
  }

  export type InterviewResponseUncheckedCreateNestedManyWithoutInterviewInput = {
    create?: XOR<InterviewResponseCreateWithoutInterviewInput, InterviewResponseUncheckedCreateWithoutInterviewInput> | InterviewResponseCreateWithoutInterviewInput[] | InterviewResponseUncheckedCreateWithoutInterviewInput[]
    connectOrCreate?: InterviewResponseCreateOrConnectWithoutInterviewInput | InterviewResponseCreateOrConnectWithoutInterviewInput[]
    createMany?: InterviewResponseCreateManyInterviewInputEnvelope
    connect?: InterviewResponseWhereUniqueInput | InterviewResponseWhereUniqueInput[]
  }

  export type EnumInterviewStatusFieldUpdateOperationsInput = {
    set?: $Enums.InterviewStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumRatingFieldUpdateOperationsInput = {
    set?: $Enums.Rating | null
  }

  export type CandidateUpdateOneRequiredWithoutInterviewsNestedInput = {
    create?: XOR<CandidateCreateWithoutInterviewsInput, CandidateUncheckedCreateWithoutInterviewsInput>
    connectOrCreate?: CandidateCreateOrConnectWithoutInterviewsInput
    upsert?: CandidateUpsertWithoutInterviewsInput
    connect?: CandidateWhereUniqueInput
    update?: XOR<XOR<CandidateUpdateToOneWithWhereWithoutInterviewsInput, CandidateUpdateWithoutInterviewsInput>, CandidateUncheckedUpdateWithoutInterviewsInput>
  }

  export type JobPostingUpdateOneRequiredWithoutInterviewsNestedInput = {
    create?: XOR<JobPostingCreateWithoutInterviewsInput, JobPostingUncheckedCreateWithoutInterviewsInput>
    connectOrCreate?: JobPostingCreateOrConnectWithoutInterviewsInput
    upsert?: JobPostingUpsertWithoutInterviewsInput
    connect?: JobPostingWhereUniqueInput
    update?: XOR<XOR<JobPostingUpdateToOneWithWhereWithoutInterviewsInput, JobPostingUpdateWithoutInterviewsInput>, JobPostingUncheckedUpdateWithoutInterviewsInput>
  }

  export type InterviewResponseUpdateManyWithoutInterviewNestedInput = {
    create?: XOR<InterviewResponseCreateWithoutInterviewInput, InterviewResponseUncheckedCreateWithoutInterviewInput> | InterviewResponseCreateWithoutInterviewInput[] | InterviewResponseUncheckedCreateWithoutInterviewInput[]
    connectOrCreate?: InterviewResponseCreateOrConnectWithoutInterviewInput | InterviewResponseCreateOrConnectWithoutInterviewInput[]
    upsert?: InterviewResponseUpsertWithWhereUniqueWithoutInterviewInput | InterviewResponseUpsertWithWhereUniqueWithoutInterviewInput[]
    createMany?: InterviewResponseCreateManyInterviewInputEnvelope
    set?: InterviewResponseWhereUniqueInput | InterviewResponseWhereUniqueInput[]
    disconnect?: InterviewResponseWhereUniqueInput | InterviewResponseWhereUniqueInput[]
    delete?: InterviewResponseWhereUniqueInput | InterviewResponseWhereUniqueInput[]
    connect?: InterviewResponseWhereUniqueInput | InterviewResponseWhereUniqueInput[]
    update?: InterviewResponseUpdateWithWhereUniqueWithoutInterviewInput | InterviewResponseUpdateWithWhereUniqueWithoutInterviewInput[]
    updateMany?: InterviewResponseUpdateManyWithWhereWithoutInterviewInput | InterviewResponseUpdateManyWithWhereWithoutInterviewInput[]
    deleteMany?: InterviewResponseScalarWhereInput | InterviewResponseScalarWhereInput[]
  }

  export type InterviewResponseUncheckedUpdateManyWithoutInterviewNestedInput = {
    create?: XOR<InterviewResponseCreateWithoutInterviewInput, InterviewResponseUncheckedCreateWithoutInterviewInput> | InterviewResponseCreateWithoutInterviewInput[] | InterviewResponseUncheckedCreateWithoutInterviewInput[]
    connectOrCreate?: InterviewResponseCreateOrConnectWithoutInterviewInput | InterviewResponseCreateOrConnectWithoutInterviewInput[]
    upsert?: InterviewResponseUpsertWithWhereUniqueWithoutInterviewInput | InterviewResponseUpsertWithWhereUniqueWithoutInterviewInput[]
    createMany?: InterviewResponseCreateManyInterviewInputEnvelope
    set?: InterviewResponseWhereUniqueInput | InterviewResponseWhereUniqueInput[]
    disconnect?: InterviewResponseWhereUniqueInput | InterviewResponseWhereUniqueInput[]
    delete?: InterviewResponseWhereUniqueInput | InterviewResponseWhereUniqueInput[]
    connect?: InterviewResponseWhereUniqueInput | InterviewResponseWhereUniqueInput[]
    update?: InterviewResponseUpdateWithWhereUniqueWithoutInterviewInput | InterviewResponseUpdateWithWhereUniqueWithoutInterviewInput[]
    updateMany?: InterviewResponseUpdateManyWithWhereWithoutInterviewInput | InterviewResponseUpdateManyWithWhereWithoutInterviewInput[]
    deleteMany?: InterviewResponseScalarWhereInput | InterviewResponseScalarWhereInput[]
  }

  export type InterviewResponseCreatekeywordsInput = {
    set: string[]
  }

  export type InterviewCreateNestedOneWithoutResponsesInput = {
    create?: XOR<InterviewCreateWithoutResponsesInput, InterviewUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: InterviewCreateOrConnectWithoutResponsesInput
    connect?: InterviewWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutResponsesInput = {
    create?: XOR<QuestionCreateWithoutResponsesInput, QuestionUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutResponsesInput
    connect?: QuestionWhereUniqueInput
  }

  export type InterviewResponseUpdatekeywordsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type InterviewUpdateOneRequiredWithoutResponsesNestedInput = {
    create?: XOR<InterviewCreateWithoutResponsesInput, InterviewUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: InterviewCreateOrConnectWithoutResponsesInput
    upsert?: InterviewUpsertWithoutResponsesInput
    connect?: InterviewWhereUniqueInput
    update?: XOR<XOR<InterviewUpdateToOneWithWhereWithoutResponsesInput, InterviewUpdateWithoutResponsesInput>, InterviewUncheckedUpdateWithoutResponsesInput>
  }

  export type QuestionUpdateOneRequiredWithoutResponsesNestedInput = {
    create?: XOR<QuestionCreateWithoutResponsesInput, QuestionUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutResponsesInput
    upsert?: QuestionUpsertWithoutResponsesInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutResponsesInput, QuestionUpdateWithoutResponsesInput>, QuestionUncheckedUpdateWithoutResponsesInput>
  }

  export type EnumCallStatusFieldUpdateOperationsInput = {
    set?: $Enums.CallStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumCandidateStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CandidateStatus | EnumCandidateStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CandidateStatus[] | ListEnumCandidateStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CandidateStatus[] | ListEnumCandidateStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCandidateStatusFilter<$PrismaModel> | $Enums.CandidateStatus
  }

  export type NestedEnumCandidateStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CandidateStatus | EnumCandidateStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CandidateStatus[] | ListEnumCandidateStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CandidateStatus[] | ListEnumCandidateStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCandidateStatusWithAggregatesFilter<$PrismaModel> | $Enums.CandidateStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCandidateStatusFilter<$PrismaModel>
    _max?: NestedEnumCandidateStatusFilter<$PrismaModel>
  }

  export type NestedEnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type NestedEnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumInterviewStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewStatus | EnumInterviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InterviewStatus[] | ListEnumInterviewStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InterviewStatus[] | ListEnumInterviewStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInterviewStatusFilter<$PrismaModel> | $Enums.InterviewStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRatingNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Rating | EnumRatingFieldRefInput<$PrismaModel> | null
    in?: $Enums.Rating[] | ListEnumRatingFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Rating[] | ListEnumRatingFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRatingNullableFilter<$PrismaModel> | $Enums.Rating | null
  }

  export type NestedEnumInterviewStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewStatus | EnumInterviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InterviewStatus[] | ListEnumInterviewStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InterviewStatus[] | ListEnumInterviewStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInterviewStatusWithAggregatesFilter<$PrismaModel> | $Enums.InterviewStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInterviewStatusFilter<$PrismaModel>
    _max?: NestedEnumInterviewStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumRatingNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rating | EnumRatingFieldRefInput<$PrismaModel> | null
    in?: $Enums.Rating[] | ListEnumRatingFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Rating[] | ListEnumRatingFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRatingNullableWithAggregatesFilter<$PrismaModel> | $Enums.Rating | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRatingNullableFilter<$PrismaModel>
    _max?: NestedEnumRatingNullableFilter<$PrismaModel>
  }

  export type NestedEnumCallStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CallStatus | EnumCallStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CallStatus[] | ListEnumCallStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CallStatus[] | ListEnumCallStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCallStatusFilter<$PrismaModel> | $Enums.CallStatus
  }

  export type NestedEnumCallStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CallStatus | EnumCallStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CallStatus[] | ListEnumCallStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CallStatus[] | ListEnumCallStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCallStatusWithAggregatesFilter<$PrismaModel> | $Enums.CallStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCallStatusFilter<$PrismaModel>
    _max?: NestedEnumCallStatusFilter<$PrismaModel>
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

  export type JobPostingCreateWithoutRecruiterInput = {
    id?: string
    title: string
    descripiton: string
    requirements?: string | null
    location?: string | null
    salaryRange?: string | null
    experienceLevel?: string | null
    department?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    candidates?: CandidateCreateNestedManyWithoutJobPostingInput
    questions?: QuestionCreateNestedManyWithoutJobPostingInput
    interviews?: InterviewCreateNestedManyWithoutJobPostingInput
  }

  export type JobPostingUncheckedCreateWithoutRecruiterInput = {
    id?: string
    title: string
    descripiton: string
    requirements?: string | null
    location?: string | null
    salaryRange?: string | null
    experienceLevel?: string | null
    department?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    candidates?: CandidateUncheckedCreateNestedManyWithoutJobPostingInput
    questions?: QuestionUncheckedCreateNestedManyWithoutJobPostingInput
    interviews?: InterviewUncheckedCreateNestedManyWithoutJobPostingInput
  }

  export type JobPostingCreateOrConnectWithoutRecruiterInput = {
    where: JobPostingWhereUniqueInput
    create: XOR<JobPostingCreateWithoutRecruiterInput, JobPostingUncheckedCreateWithoutRecruiterInput>
  }

  export type JobPostingCreateManyRecruiterInputEnvelope = {
    data: JobPostingCreateManyRecruiterInput | JobPostingCreateManyRecruiterInput[]
    skipDuplicates?: boolean
  }

  export type JobPostingUpsertWithWhereUniqueWithoutRecruiterInput = {
    where: JobPostingWhereUniqueInput
    update: XOR<JobPostingUpdateWithoutRecruiterInput, JobPostingUncheckedUpdateWithoutRecruiterInput>
    create: XOR<JobPostingCreateWithoutRecruiterInput, JobPostingUncheckedCreateWithoutRecruiterInput>
  }

  export type JobPostingUpdateWithWhereUniqueWithoutRecruiterInput = {
    where: JobPostingWhereUniqueInput
    data: XOR<JobPostingUpdateWithoutRecruiterInput, JobPostingUncheckedUpdateWithoutRecruiterInput>
  }

  export type JobPostingUpdateManyWithWhereWithoutRecruiterInput = {
    where: JobPostingScalarWhereInput
    data: XOR<JobPostingUpdateManyMutationInput, JobPostingUncheckedUpdateManyWithoutRecruiterInput>
  }

  export type JobPostingScalarWhereInput = {
    AND?: JobPostingScalarWhereInput | JobPostingScalarWhereInput[]
    OR?: JobPostingScalarWhereInput[]
    NOT?: JobPostingScalarWhereInput | JobPostingScalarWhereInput[]
    id?: StringFilter<"JobPosting"> | string
    title?: StringFilter<"JobPosting"> | string
    descripiton?: StringFilter<"JobPosting"> | string
    requirements?: StringNullableFilter<"JobPosting"> | string | null
    location?: StringNullableFilter<"JobPosting"> | string | null
    salaryRange?: StringNullableFilter<"JobPosting"> | string | null
    experienceLevel?: StringNullableFilter<"JobPosting"> | string | null
    department?: StringNullableFilter<"JobPosting"> | string | null
    isActive?: BoolFilter<"JobPosting"> | boolean
    createdAt?: DateTimeFilter<"JobPosting"> | Date | string
    updatedAt?: DateTimeFilter<"JobPosting"> | Date | string
    recruiterId?: StringFilter<"JobPosting"> | string
  }

  export type RecruiterCreateWithoutJobPostingsInput = {
    id?: string
    name: string
    email: string
    avatar?: string | null
    password: string
    company?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecruiterUncheckedCreateWithoutJobPostingsInput = {
    id?: string
    name: string
    email: string
    avatar?: string | null
    password: string
    company?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecruiterCreateOrConnectWithoutJobPostingsInput = {
    where: RecruiterWhereUniqueInput
    create: XOR<RecruiterCreateWithoutJobPostingsInput, RecruiterUncheckedCreateWithoutJobPostingsInput>
  }

  export type CandidateCreateWithoutJobPostingInput = {
    id?: string
    name: string
    email: string
    phoneNo: string
    resume?: string | null
    experience?: string | null
    skills?: CandidateCreateskillsInput | string[]
    currentCompany?: string | null
    currentRole?: string | null
    expectedSalary?: string | null
    noticePeriod?: string | null
    location?: string | null
    status?: $Enums.CandidateStatus
    appliedAt?: Date | string
    updatedAt?: Date | string
    interviews?: InterviewCreateNestedManyWithoutCandidateInput
  }

  export type CandidateUncheckedCreateWithoutJobPostingInput = {
    id?: string
    name: string
    email: string
    phoneNo: string
    resume?: string | null
    experience?: string | null
    skills?: CandidateCreateskillsInput | string[]
    currentCompany?: string | null
    currentRole?: string | null
    expectedSalary?: string | null
    noticePeriod?: string | null
    location?: string | null
    status?: $Enums.CandidateStatus
    appliedAt?: Date | string
    updatedAt?: Date | string
    interviews?: InterviewUncheckedCreateNestedManyWithoutCandidateInput
  }

  export type CandidateCreateOrConnectWithoutJobPostingInput = {
    where: CandidateWhereUniqueInput
    create: XOR<CandidateCreateWithoutJobPostingInput, CandidateUncheckedCreateWithoutJobPostingInput>
  }

  export type CandidateCreateManyJobPostingInputEnvelope = {
    data: CandidateCreateManyJobPostingInput | CandidateCreateManyJobPostingInput[]
    skipDuplicates?: boolean
  }

  export type QuestionCreateWithoutJobPostingInput = {
    id?: string
    questionText: string
    category?: string | null
    difficulty?: $Enums.Difficulty
    expectedAnswer?: string | null
    keywords?: QuestionCreatekeywordsInput | string[]
    maxDuration?: number | null
    order?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    responses?: InterviewResponseCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutJobPostingInput = {
    id?: string
    questionText: string
    category?: string | null
    difficulty?: $Enums.Difficulty
    expectedAnswer?: string | null
    keywords?: QuestionCreatekeywordsInput | string[]
    maxDuration?: number | null
    order?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    responses?: InterviewResponseUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutJobPostingInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutJobPostingInput, QuestionUncheckedCreateWithoutJobPostingInput>
  }

  export type QuestionCreateManyJobPostingInputEnvelope = {
    data: QuestionCreateManyJobPostingInput | QuestionCreateManyJobPostingInput[]
    skipDuplicates?: boolean
  }

  export type InterviewCreateWithoutJobPostingInput = {
    id?: string
    status?: $Enums.InterviewStatus
    scheduedAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    duration?: number | null
    overallScore?: number | null
    overallRating?: $Enums.Rating | null
    notes?: string | null
    calRecordingUrl?: string | null
    transscript?: string | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    candidate: CandidateCreateNestedOneWithoutInterviewsInput
    responses?: InterviewResponseCreateNestedManyWithoutInterviewInput
  }

  export type InterviewUncheckedCreateWithoutJobPostingInput = {
    id?: string
    status?: $Enums.InterviewStatus
    scheduedAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    duration?: number | null
    overallScore?: number | null
    overallRating?: $Enums.Rating | null
    notes?: string | null
    calRecordingUrl?: string | null
    transscript?: string | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    candidateId: string
    responses?: InterviewResponseUncheckedCreateNestedManyWithoutInterviewInput
  }

  export type InterviewCreateOrConnectWithoutJobPostingInput = {
    where: InterviewWhereUniqueInput
    create: XOR<InterviewCreateWithoutJobPostingInput, InterviewUncheckedCreateWithoutJobPostingInput>
  }

  export type InterviewCreateManyJobPostingInputEnvelope = {
    data: InterviewCreateManyJobPostingInput | InterviewCreateManyJobPostingInput[]
    skipDuplicates?: boolean
  }

  export type RecruiterUpsertWithoutJobPostingsInput = {
    update: XOR<RecruiterUpdateWithoutJobPostingsInput, RecruiterUncheckedUpdateWithoutJobPostingsInput>
    create: XOR<RecruiterCreateWithoutJobPostingsInput, RecruiterUncheckedCreateWithoutJobPostingsInput>
    where?: RecruiterWhereInput
  }

  export type RecruiterUpdateToOneWithWhereWithoutJobPostingsInput = {
    where?: RecruiterWhereInput
    data: XOR<RecruiterUpdateWithoutJobPostingsInput, RecruiterUncheckedUpdateWithoutJobPostingsInput>
  }

  export type RecruiterUpdateWithoutJobPostingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecruiterUncheckedUpdateWithoutJobPostingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidateUpsertWithWhereUniqueWithoutJobPostingInput = {
    where: CandidateWhereUniqueInput
    update: XOR<CandidateUpdateWithoutJobPostingInput, CandidateUncheckedUpdateWithoutJobPostingInput>
    create: XOR<CandidateCreateWithoutJobPostingInput, CandidateUncheckedCreateWithoutJobPostingInput>
  }

  export type CandidateUpdateWithWhereUniqueWithoutJobPostingInput = {
    where: CandidateWhereUniqueInput
    data: XOR<CandidateUpdateWithoutJobPostingInput, CandidateUncheckedUpdateWithoutJobPostingInput>
  }

  export type CandidateUpdateManyWithWhereWithoutJobPostingInput = {
    where: CandidateScalarWhereInput
    data: XOR<CandidateUpdateManyMutationInput, CandidateUncheckedUpdateManyWithoutJobPostingInput>
  }

  export type CandidateScalarWhereInput = {
    AND?: CandidateScalarWhereInput | CandidateScalarWhereInput[]
    OR?: CandidateScalarWhereInput[]
    NOT?: CandidateScalarWhereInput | CandidateScalarWhereInput[]
    id?: StringFilter<"Candidate"> | string
    name?: StringFilter<"Candidate"> | string
    email?: StringFilter<"Candidate"> | string
    phoneNo?: StringFilter<"Candidate"> | string
    resume?: StringNullableFilter<"Candidate"> | string | null
    experience?: StringNullableFilter<"Candidate"> | string | null
    skills?: StringNullableListFilter<"Candidate">
    currentCompany?: StringNullableFilter<"Candidate"> | string | null
    currentRole?: StringNullableFilter<"Candidate"> | string | null
    expectedSalary?: StringNullableFilter<"Candidate"> | string | null
    noticePeriod?: StringNullableFilter<"Candidate"> | string | null
    location?: StringNullableFilter<"Candidate"> | string | null
    status?: EnumCandidateStatusFilter<"Candidate"> | $Enums.CandidateStatus
    appliedAt?: DateTimeFilter<"Candidate"> | Date | string
    updatedAt?: DateTimeFilter<"Candidate"> | Date | string
    jobPostingId?: StringFilter<"Candidate"> | string
  }

  export type QuestionUpsertWithWhereUniqueWithoutJobPostingInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutJobPostingInput, QuestionUncheckedUpdateWithoutJobPostingInput>
    create: XOR<QuestionCreateWithoutJobPostingInput, QuestionUncheckedCreateWithoutJobPostingInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutJobPostingInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutJobPostingInput, QuestionUncheckedUpdateWithoutJobPostingInput>
  }

  export type QuestionUpdateManyWithWhereWithoutJobPostingInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutJobPostingInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: StringFilter<"Question"> | string
    questionText?: StringFilter<"Question"> | string
    category?: StringNullableFilter<"Question"> | string | null
    difficulty?: EnumDifficultyFilter<"Question"> | $Enums.Difficulty
    expectedAnswer?: StringNullableFilter<"Question"> | string | null
    keywords?: StringNullableListFilter<"Question">
    maxDuration?: IntNullableFilter<"Question"> | number | null
    order?: IntNullableFilter<"Question"> | number | null
    isActive?: BoolFilter<"Question"> | boolean
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    jobPostingId?: StringFilter<"Question"> | string
  }

  export type InterviewUpsertWithWhereUniqueWithoutJobPostingInput = {
    where: InterviewWhereUniqueInput
    update: XOR<InterviewUpdateWithoutJobPostingInput, InterviewUncheckedUpdateWithoutJobPostingInput>
    create: XOR<InterviewCreateWithoutJobPostingInput, InterviewUncheckedCreateWithoutJobPostingInput>
  }

  export type InterviewUpdateWithWhereUniqueWithoutJobPostingInput = {
    where: InterviewWhereUniqueInput
    data: XOR<InterviewUpdateWithoutJobPostingInput, InterviewUncheckedUpdateWithoutJobPostingInput>
  }

  export type InterviewUpdateManyWithWhereWithoutJobPostingInput = {
    where: InterviewScalarWhereInput
    data: XOR<InterviewUpdateManyMutationInput, InterviewUncheckedUpdateManyWithoutJobPostingInput>
  }

  export type InterviewScalarWhereInput = {
    AND?: InterviewScalarWhereInput | InterviewScalarWhereInput[]
    OR?: InterviewScalarWhereInput[]
    NOT?: InterviewScalarWhereInput | InterviewScalarWhereInput[]
    id?: StringFilter<"Interview"> | string
    status?: EnumInterviewStatusFilter<"Interview"> | $Enums.InterviewStatus
    scheduedAt?: DateTimeNullableFilter<"Interview"> | Date | string | null
    startedAt?: DateTimeNullableFilter<"Interview"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Interview"> | Date | string | null
    duration?: IntNullableFilter<"Interview"> | number | null
    overallScore?: FloatNullableFilter<"Interview"> | number | null
    overallRating?: EnumRatingNullableFilter<"Interview"> | $Enums.Rating | null
    notes?: StringNullableFilter<"Interview"> | string | null
    calRecordingUrl?: StringNullableFilter<"Interview"> | string | null
    transscript?: StringNullableFilter<"Interview"> | string | null
    feedback?: StringNullableFilter<"Interview"> | string | null
    createdAt?: DateTimeFilter<"Interview"> | Date | string
    updatedAt?: DateTimeFilter<"Interview"> | Date | string
    candidateId?: StringFilter<"Interview"> | string
    jobPostingId?: StringFilter<"Interview"> | string
  }

  export type JobPostingCreateWithoutCandidatesInput = {
    id?: string
    title: string
    descripiton: string
    requirements?: string | null
    location?: string | null
    salaryRange?: string | null
    experienceLevel?: string | null
    department?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    recruiter: RecruiterCreateNestedOneWithoutJobPostingsInput
    questions?: QuestionCreateNestedManyWithoutJobPostingInput
    interviews?: InterviewCreateNestedManyWithoutJobPostingInput
  }

  export type JobPostingUncheckedCreateWithoutCandidatesInput = {
    id?: string
    title: string
    descripiton: string
    requirements?: string | null
    location?: string | null
    salaryRange?: string | null
    experienceLevel?: string | null
    department?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    recruiterId: string
    questions?: QuestionUncheckedCreateNestedManyWithoutJobPostingInput
    interviews?: InterviewUncheckedCreateNestedManyWithoutJobPostingInput
  }

  export type JobPostingCreateOrConnectWithoutCandidatesInput = {
    where: JobPostingWhereUniqueInput
    create: XOR<JobPostingCreateWithoutCandidatesInput, JobPostingUncheckedCreateWithoutCandidatesInput>
  }

  export type InterviewCreateWithoutCandidateInput = {
    id?: string
    status?: $Enums.InterviewStatus
    scheduedAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    duration?: number | null
    overallScore?: number | null
    overallRating?: $Enums.Rating | null
    notes?: string | null
    calRecordingUrl?: string | null
    transscript?: string | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobPosting: JobPostingCreateNestedOneWithoutInterviewsInput
    responses?: InterviewResponseCreateNestedManyWithoutInterviewInput
  }

  export type InterviewUncheckedCreateWithoutCandidateInput = {
    id?: string
    status?: $Enums.InterviewStatus
    scheduedAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    duration?: number | null
    overallScore?: number | null
    overallRating?: $Enums.Rating | null
    notes?: string | null
    calRecordingUrl?: string | null
    transscript?: string | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobPostingId: string
    responses?: InterviewResponseUncheckedCreateNestedManyWithoutInterviewInput
  }

  export type InterviewCreateOrConnectWithoutCandidateInput = {
    where: InterviewWhereUniqueInput
    create: XOR<InterviewCreateWithoutCandidateInput, InterviewUncheckedCreateWithoutCandidateInput>
  }

  export type InterviewCreateManyCandidateInputEnvelope = {
    data: InterviewCreateManyCandidateInput | InterviewCreateManyCandidateInput[]
    skipDuplicates?: boolean
  }

  export type JobPostingUpsertWithoutCandidatesInput = {
    update: XOR<JobPostingUpdateWithoutCandidatesInput, JobPostingUncheckedUpdateWithoutCandidatesInput>
    create: XOR<JobPostingCreateWithoutCandidatesInput, JobPostingUncheckedCreateWithoutCandidatesInput>
    where?: JobPostingWhereInput
  }

  export type JobPostingUpdateToOneWithWhereWithoutCandidatesInput = {
    where?: JobPostingWhereInput
    data: XOR<JobPostingUpdateWithoutCandidatesInput, JobPostingUncheckedUpdateWithoutCandidatesInput>
  }

  export type JobPostingUpdateWithoutCandidatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    descripiton?: StringFieldUpdateOperationsInput | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    salaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recruiter?: RecruiterUpdateOneRequiredWithoutJobPostingsNestedInput
    questions?: QuestionUpdateManyWithoutJobPostingNestedInput
    interviews?: InterviewUpdateManyWithoutJobPostingNestedInput
  }

  export type JobPostingUncheckedUpdateWithoutCandidatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    descripiton?: StringFieldUpdateOperationsInput | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    salaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recruiterId?: StringFieldUpdateOperationsInput | string
    questions?: QuestionUncheckedUpdateManyWithoutJobPostingNestedInput
    interviews?: InterviewUncheckedUpdateManyWithoutJobPostingNestedInput
  }

  export type InterviewUpsertWithWhereUniqueWithoutCandidateInput = {
    where: InterviewWhereUniqueInput
    update: XOR<InterviewUpdateWithoutCandidateInput, InterviewUncheckedUpdateWithoutCandidateInput>
    create: XOR<InterviewCreateWithoutCandidateInput, InterviewUncheckedCreateWithoutCandidateInput>
  }

  export type InterviewUpdateWithWhereUniqueWithoutCandidateInput = {
    where: InterviewWhereUniqueInput
    data: XOR<InterviewUpdateWithoutCandidateInput, InterviewUncheckedUpdateWithoutCandidateInput>
  }

  export type InterviewUpdateManyWithWhereWithoutCandidateInput = {
    where: InterviewScalarWhereInput
    data: XOR<InterviewUpdateManyMutationInput, InterviewUncheckedUpdateManyWithoutCandidateInput>
  }

  export type JobPostingCreateWithoutQuestionsInput = {
    id?: string
    title: string
    descripiton: string
    requirements?: string | null
    location?: string | null
    salaryRange?: string | null
    experienceLevel?: string | null
    department?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    recruiter: RecruiterCreateNestedOneWithoutJobPostingsInput
    candidates?: CandidateCreateNestedManyWithoutJobPostingInput
    interviews?: InterviewCreateNestedManyWithoutJobPostingInput
  }

  export type JobPostingUncheckedCreateWithoutQuestionsInput = {
    id?: string
    title: string
    descripiton: string
    requirements?: string | null
    location?: string | null
    salaryRange?: string | null
    experienceLevel?: string | null
    department?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    recruiterId: string
    candidates?: CandidateUncheckedCreateNestedManyWithoutJobPostingInput
    interviews?: InterviewUncheckedCreateNestedManyWithoutJobPostingInput
  }

  export type JobPostingCreateOrConnectWithoutQuestionsInput = {
    where: JobPostingWhereUniqueInput
    create: XOR<JobPostingCreateWithoutQuestionsInput, JobPostingUncheckedCreateWithoutQuestionsInput>
  }

  export type InterviewResponseCreateWithoutQuestionInput = {
    id?: string
    answer: string
    duration?: number | null
    score?: number | null
    overallRating?: $Enums.Rating | null
    feedback?: string | null
    keywords?: InterviewResponseCreatekeywordsInput | string[]
    sentiment?: string | null
    confidence?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    interview: InterviewCreateNestedOneWithoutResponsesInput
  }

  export type InterviewResponseUncheckedCreateWithoutQuestionInput = {
    id?: string
    answer: string
    duration?: number | null
    score?: number | null
    overallRating?: $Enums.Rating | null
    feedback?: string | null
    keywords?: InterviewResponseCreatekeywordsInput | string[]
    sentiment?: string | null
    confidence?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    interviewId: string
  }

  export type InterviewResponseCreateOrConnectWithoutQuestionInput = {
    where: InterviewResponseWhereUniqueInput
    create: XOR<InterviewResponseCreateWithoutQuestionInput, InterviewResponseUncheckedCreateWithoutQuestionInput>
  }

  export type InterviewResponseCreateManyQuestionInputEnvelope = {
    data: InterviewResponseCreateManyQuestionInput | InterviewResponseCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type JobPostingUpsertWithoutQuestionsInput = {
    update: XOR<JobPostingUpdateWithoutQuestionsInput, JobPostingUncheckedUpdateWithoutQuestionsInput>
    create: XOR<JobPostingCreateWithoutQuestionsInput, JobPostingUncheckedCreateWithoutQuestionsInput>
    where?: JobPostingWhereInput
  }

  export type JobPostingUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: JobPostingWhereInput
    data: XOR<JobPostingUpdateWithoutQuestionsInput, JobPostingUncheckedUpdateWithoutQuestionsInput>
  }

  export type JobPostingUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    descripiton?: StringFieldUpdateOperationsInput | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    salaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recruiter?: RecruiterUpdateOneRequiredWithoutJobPostingsNestedInput
    candidates?: CandidateUpdateManyWithoutJobPostingNestedInput
    interviews?: InterviewUpdateManyWithoutJobPostingNestedInput
  }

  export type JobPostingUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    descripiton?: StringFieldUpdateOperationsInput | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    salaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recruiterId?: StringFieldUpdateOperationsInput | string
    candidates?: CandidateUncheckedUpdateManyWithoutJobPostingNestedInput
    interviews?: InterviewUncheckedUpdateManyWithoutJobPostingNestedInput
  }

  export type InterviewResponseUpsertWithWhereUniqueWithoutQuestionInput = {
    where: InterviewResponseWhereUniqueInput
    update: XOR<InterviewResponseUpdateWithoutQuestionInput, InterviewResponseUncheckedUpdateWithoutQuestionInput>
    create: XOR<InterviewResponseCreateWithoutQuestionInput, InterviewResponseUncheckedCreateWithoutQuestionInput>
  }

  export type InterviewResponseUpdateWithWhereUniqueWithoutQuestionInput = {
    where: InterviewResponseWhereUniqueInput
    data: XOR<InterviewResponseUpdateWithoutQuestionInput, InterviewResponseUncheckedUpdateWithoutQuestionInput>
  }

  export type InterviewResponseUpdateManyWithWhereWithoutQuestionInput = {
    where: InterviewResponseScalarWhereInput
    data: XOR<InterviewResponseUpdateManyMutationInput, InterviewResponseUncheckedUpdateManyWithoutQuestionInput>
  }

  export type InterviewResponseScalarWhereInput = {
    AND?: InterviewResponseScalarWhereInput | InterviewResponseScalarWhereInput[]
    OR?: InterviewResponseScalarWhereInput[]
    NOT?: InterviewResponseScalarWhereInput | InterviewResponseScalarWhereInput[]
    id?: StringFilter<"InterviewResponse"> | string
    answer?: StringFilter<"InterviewResponse"> | string
    duration?: IntNullableFilter<"InterviewResponse"> | number | null
    score?: FloatNullableFilter<"InterviewResponse"> | number | null
    overallRating?: EnumRatingNullableFilter<"InterviewResponse"> | $Enums.Rating | null
    feedback?: StringNullableFilter<"InterviewResponse"> | string | null
    keywords?: StringNullableListFilter<"InterviewResponse">
    sentiment?: StringNullableFilter<"InterviewResponse"> | string | null
    confidence?: FloatNullableFilter<"InterviewResponse"> | number | null
    createdAt?: DateTimeFilter<"InterviewResponse"> | Date | string
    updatedAt?: DateTimeFilter<"InterviewResponse"> | Date | string
    interviewId?: StringFilter<"InterviewResponse"> | string
    questionId?: StringFilter<"InterviewResponse"> | string
  }

  export type CandidateCreateWithoutInterviewsInput = {
    id?: string
    name: string
    email: string
    phoneNo: string
    resume?: string | null
    experience?: string | null
    skills?: CandidateCreateskillsInput | string[]
    currentCompany?: string | null
    currentRole?: string | null
    expectedSalary?: string | null
    noticePeriod?: string | null
    location?: string | null
    status?: $Enums.CandidateStatus
    appliedAt?: Date | string
    updatedAt?: Date | string
    jobPosting: JobPostingCreateNestedOneWithoutCandidatesInput
  }

  export type CandidateUncheckedCreateWithoutInterviewsInput = {
    id?: string
    name: string
    email: string
    phoneNo: string
    resume?: string | null
    experience?: string | null
    skills?: CandidateCreateskillsInput | string[]
    currentCompany?: string | null
    currentRole?: string | null
    expectedSalary?: string | null
    noticePeriod?: string | null
    location?: string | null
    status?: $Enums.CandidateStatus
    appliedAt?: Date | string
    updatedAt?: Date | string
    jobPostingId: string
  }

  export type CandidateCreateOrConnectWithoutInterviewsInput = {
    where: CandidateWhereUniqueInput
    create: XOR<CandidateCreateWithoutInterviewsInput, CandidateUncheckedCreateWithoutInterviewsInput>
  }

  export type JobPostingCreateWithoutInterviewsInput = {
    id?: string
    title: string
    descripiton: string
    requirements?: string | null
    location?: string | null
    salaryRange?: string | null
    experienceLevel?: string | null
    department?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    recruiter: RecruiterCreateNestedOneWithoutJobPostingsInput
    candidates?: CandidateCreateNestedManyWithoutJobPostingInput
    questions?: QuestionCreateNestedManyWithoutJobPostingInput
  }

  export type JobPostingUncheckedCreateWithoutInterviewsInput = {
    id?: string
    title: string
    descripiton: string
    requirements?: string | null
    location?: string | null
    salaryRange?: string | null
    experienceLevel?: string | null
    department?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    recruiterId: string
    candidates?: CandidateUncheckedCreateNestedManyWithoutJobPostingInput
    questions?: QuestionUncheckedCreateNestedManyWithoutJobPostingInput
  }

  export type JobPostingCreateOrConnectWithoutInterviewsInput = {
    where: JobPostingWhereUniqueInput
    create: XOR<JobPostingCreateWithoutInterviewsInput, JobPostingUncheckedCreateWithoutInterviewsInput>
  }

  export type InterviewResponseCreateWithoutInterviewInput = {
    id?: string
    answer: string
    duration?: number | null
    score?: number | null
    overallRating?: $Enums.Rating | null
    feedback?: string | null
    keywords?: InterviewResponseCreatekeywordsInput | string[]
    sentiment?: string | null
    confidence?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    question: QuestionCreateNestedOneWithoutResponsesInput
  }

  export type InterviewResponseUncheckedCreateWithoutInterviewInput = {
    id?: string
    answer: string
    duration?: number | null
    score?: number | null
    overallRating?: $Enums.Rating | null
    feedback?: string | null
    keywords?: InterviewResponseCreatekeywordsInput | string[]
    sentiment?: string | null
    confidence?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questionId: string
  }

  export type InterviewResponseCreateOrConnectWithoutInterviewInput = {
    where: InterviewResponseWhereUniqueInput
    create: XOR<InterviewResponseCreateWithoutInterviewInput, InterviewResponseUncheckedCreateWithoutInterviewInput>
  }

  export type InterviewResponseCreateManyInterviewInputEnvelope = {
    data: InterviewResponseCreateManyInterviewInput | InterviewResponseCreateManyInterviewInput[]
    skipDuplicates?: boolean
  }

  export type CandidateUpsertWithoutInterviewsInput = {
    update: XOR<CandidateUpdateWithoutInterviewsInput, CandidateUncheckedUpdateWithoutInterviewsInput>
    create: XOR<CandidateCreateWithoutInterviewsInput, CandidateUncheckedCreateWithoutInterviewsInput>
    where?: CandidateWhereInput
  }

  export type CandidateUpdateToOneWithWhereWithoutInterviewsInput = {
    where?: CandidateWhereInput
    data: XOR<CandidateUpdateWithoutInterviewsInput, CandidateUncheckedUpdateWithoutInterviewsInput>
  }

  export type CandidateUpdateWithoutInterviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNo?: StringFieldUpdateOperationsInput | string
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: CandidateUpdateskillsInput | string[]
    currentCompany?: NullableStringFieldUpdateOperationsInput | string | null
    currentRole?: NullableStringFieldUpdateOperationsInput | string | null
    expectedSalary?: NullableStringFieldUpdateOperationsInput | string | null
    noticePeriod?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCandidateStatusFieldUpdateOperationsInput | $Enums.CandidateStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobPosting?: JobPostingUpdateOneRequiredWithoutCandidatesNestedInput
  }

  export type CandidateUncheckedUpdateWithoutInterviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNo?: StringFieldUpdateOperationsInput | string
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: CandidateUpdateskillsInput | string[]
    currentCompany?: NullableStringFieldUpdateOperationsInput | string | null
    currentRole?: NullableStringFieldUpdateOperationsInput | string | null
    expectedSalary?: NullableStringFieldUpdateOperationsInput | string | null
    noticePeriod?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCandidateStatusFieldUpdateOperationsInput | $Enums.CandidateStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobPostingId?: StringFieldUpdateOperationsInput | string
  }

  export type JobPostingUpsertWithoutInterviewsInput = {
    update: XOR<JobPostingUpdateWithoutInterviewsInput, JobPostingUncheckedUpdateWithoutInterviewsInput>
    create: XOR<JobPostingCreateWithoutInterviewsInput, JobPostingUncheckedCreateWithoutInterviewsInput>
    where?: JobPostingWhereInput
  }

  export type JobPostingUpdateToOneWithWhereWithoutInterviewsInput = {
    where?: JobPostingWhereInput
    data: XOR<JobPostingUpdateWithoutInterviewsInput, JobPostingUncheckedUpdateWithoutInterviewsInput>
  }

  export type JobPostingUpdateWithoutInterviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    descripiton?: StringFieldUpdateOperationsInput | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    salaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recruiter?: RecruiterUpdateOneRequiredWithoutJobPostingsNestedInput
    candidates?: CandidateUpdateManyWithoutJobPostingNestedInput
    questions?: QuestionUpdateManyWithoutJobPostingNestedInput
  }

  export type JobPostingUncheckedUpdateWithoutInterviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    descripiton?: StringFieldUpdateOperationsInput | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    salaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recruiterId?: StringFieldUpdateOperationsInput | string
    candidates?: CandidateUncheckedUpdateManyWithoutJobPostingNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutJobPostingNestedInput
  }

  export type InterviewResponseUpsertWithWhereUniqueWithoutInterviewInput = {
    where: InterviewResponseWhereUniqueInput
    update: XOR<InterviewResponseUpdateWithoutInterviewInput, InterviewResponseUncheckedUpdateWithoutInterviewInput>
    create: XOR<InterviewResponseCreateWithoutInterviewInput, InterviewResponseUncheckedCreateWithoutInterviewInput>
  }

  export type InterviewResponseUpdateWithWhereUniqueWithoutInterviewInput = {
    where: InterviewResponseWhereUniqueInput
    data: XOR<InterviewResponseUpdateWithoutInterviewInput, InterviewResponseUncheckedUpdateWithoutInterviewInput>
  }

  export type InterviewResponseUpdateManyWithWhereWithoutInterviewInput = {
    where: InterviewResponseScalarWhereInput
    data: XOR<InterviewResponseUpdateManyMutationInput, InterviewResponseUncheckedUpdateManyWithoutInterviewInput>
  }

  export type InterviewCreateWithoutResponsesInput = {
    id?: string
    status?: $Enums.InterviewStatus
    scheduedAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    duration?: number | null
    overallScore?: number | null
    overallRating?: $Enums.Rating | null
    notes?: string | null
    calRecordingUrl?: string | null
    transscript?: string | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    candidate: CandidateCreateNestedOneWithoutInterviewsInput
    jobPosting: JobPostingCreateNestedOneWithoutInterviewsInput
  }

  export type InterviewUncheckedCreateWithoutResponsesInput = {
    id?: string
    status?: $Enums.InterviewStatus
    scheduedAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    duration?: number | null
    overallScore?: number | null
    overallRating?: $Enums.Rating | null
    notes?: string | null
    calRecordingUrl?: string | null
    transscript?: string | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    candidateId: string
    jobPostingId: string
  }

  export type InterviewCreateOrConnectWithoutResponsesInput = {
    where: InterviewWhereUniqueInput
    create: XOR<InterviewCreateWithoutResponsesInput, InterviewUncheckedCreateWithoutResponsesInput>
  }

  export type QuestionCreateWithoutResponsesInput = {
    id?: string
    questionText: string
    category?: string | null
    difficulty?: $Enums.Difficulty
    expectedAnswer?: string | null
    keywords?: QuestionCreatekeywordsInput | string[]
    maxDuration?: number | null
    order?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    jobPosting: JobPostingCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateWithoutResponsesInput = {
    id?: string
    questionText: string
    category?: string | null
    difficulty?: $Enums.Difficulty
    expectedAnswer?: string | null
    keywords?: QuestionCreatekeywordsInput | string[]
    maxDuration?: number | null
    order?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    jobPostingId: string
  }

  export type QuestionCreateOrConnectWithoutResponsesInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutResponsesInput, QuestionUncheckedCreateWithoutResponsesInput>
  }

  export type InterviewUpsertWithoutResponsesInput = {
    update: XOR<InterviewUpdateWithoutResponsesInput, InterviewUncheckedUpdateWithoutResponsesInput>
    create: XOR<InterviewCreateWithoutResponsesInput, InterviewUncheckedCreateWithoutResponsesInput>
    where?: InterviewWhereInput
  }

  export type InterviewUpdateToOneWithWhereWithoutResponsesInput = {
    where?: InterviewWhereInput
    data: XOR<InterviewUpdateWithoutResponsesInput, InterviewUncheckedUpdateWithoutResponsesInput>
  }

  export type InterviewUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumInterviewStatusFieldUpdateOperationsInput | $Enums.InterviewStatus
    scheduedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    overallScore?: NullableFloatFieldUpdateOperationsInput | number | null
    overallRating?: NullableEnumRatingFieldUpdateOperationsInput | $Enums.Rating | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    calRecordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    transscript?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidate?: CandidateUpdateOneRequiredWithoutInterviewsNestedInput
    jobPosting?: JobPostingUpdateOneRequiredWithoutInterviewsNestedInput
  }

  export type InterviewUncheckedUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumInterviewStatusFieldUpdateOperationsInput | $Enums.InterviewStatus
    scheduedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    overallScore?: NullableFloatFieldUpdateOperationsInput | number | null
    overallRating?: NullableEnumRatingFieldUpdateOperationsInput | $Enums.Rating | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    calRecordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    transscript?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidateId?: StringFieldUpdateOperationsInput | string
    jobPostingId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionUpsertWithoutResponsesInput = {
    update: XOR<QuestionUpdateWithoutResponsesInput, QuestionUncheckedUpdateWithoutResponsesInput>
    create: XOR<QuestionCreateWithoutResponsesInput, QuestionUncheckedCreateWithoutResponsesInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutResponsesInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutResponsesInput, QuestionUncheckedUpdateWithoutResponsesInput>
  }

  export type QuestionUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    expectedAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: QuestionUpdatekeywordsInput | string[]
    maxDuration?: NullableIntFieldUpdateOperationsInput | number | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobPosting?: JobPostingUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    expectedAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: QuestionUpdatekeywordsInput | string[]
    maxDuration?: NullableIntFieldUpdateOperationsInput | number | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobPostingId?: StringFieldUpdateOperationsInput | string
  }

  export type JobPostingCreateManyRecruiterInput = {
    id?: string
    title: string
    descripiton: string
    requirements?: string | null
    location?: string | null
    salaryRange?: string | null
    experienceLevel?: string | null
    department?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobPostingUpdateWithoutRecruiterInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    descripiton?: StringFieldUpdateOperationsInput | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    salaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidates?: CandidateUpdateManyWithoutJobPostingNestedInput
    questions?: QuestionUpdateManyWithoutJobPostingNestedInput
    interviews?: InterviewUpdateManyWithoutJobPostingNestedInput
  }

  export type JobPostingUncheckedUpdateWithoutRecruiterInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    descripiton?: StringFieldUpdateOperationsInput | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    salaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidates?: CandidateUncheckedUpdateManyWithoutJobPostingNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutJobPostingNestedInput
    interviews?: InterviewUncheckedUpdateManyWithoutJobPostingNestedInput
  }

  export type JobPostingUncheckedUpdateManyWithoutRecruiterInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    descripiton?: StringFieldUpdateOperationsInput | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    salaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidateCreateManyJobPostingInput = {
    id?: string
    name: string
    email: string
    phoneNo: string
    resume?: string | null
    experience?: string | null
    skills?: CandidateCreateskillsInput | string[]
    currentCompany?: string | null
    currentRole?: string | null
    expectedSalary?: string | null
    noticePeriod?: string | null
    location?: string | null
    status?: $Enums.CandidateStatus
    appliedAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionCreateManyJobPostingInput = {
    id?: string
    questionText: string
    category?: string | null
    difficulty?: $Enums.Difficulty
    expectedAnswer?: string | null
    keywords?: QuestionCreatekeywordsInput | string[]
    maxDuration?: number | null
    order?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InterviewCreateManyJobPostingInput = {
    id?: string
    status?: $Enums.InterviewStatus
    scheduedAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    duration?: number | null
    overallScore?: number | null
    overallRating?: $Enums.Rating | null
    notes?: string | null
    calRecordingUrl?: string | null
    transscript?: string | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    candidateId: string
  }

  export type CandidateUpdateWithoutJobPostingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNo?: StringFieldUpdateOperationsInput | string
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: CandidateUpdateskillsInput | string[]
    currentCompany?: NullableStringFieldUpdateOperationsInput | string | null
    currentRole?: NullableStringFieldUpdateOperationsInput | string | null
    expectedSalary?: NullableStringFieldUpdateOperationsInput | string | null
    noticePeriod?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCandidateStatusFieldUpdateOperationsInput | $Enums.CandidateStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviews?: InterviewUpdateManyWithoutCandidateNestedInput
  }

  export type CandidateUncheckedUpdateWithoutJobPostingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNo?: StringFieldUpdateOperationsInput | string
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: CandidateUpdateskillsInput | string[]
    currentCompany?: NullableStringFieldUpdateOperationsInput | string | null
    currentRole?: NullableStringFieldUpdateOperationsInput | string | null
    expectedSalary?: NullableStringFieldUpdateOperationsInput | string | null
    noticePeriod?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCandidateStatusFieldUpdateOperationsInput | $Enums.CandidateStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviews?: InterviewUncheckedUpdateManyWithoutCandidateNestedInput
  }

  export type CandidateUncheckedUpdateManyWithoutJobPostingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNo?: StringFieldUpdateOperationsInput | string
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: CandidateUpdateskillsInput | string[]
    currentCompany?: NullableStringFieldUpdateOperationsInput | string | null
    currentRole?: NullableStringFieldUpdateOperationsInput | string | null
    expectedSalary?: NullableStringFieldUpdateOperationsInput | string | null
    noticePeriod?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCandidateStatusFieldUpdateOperationsInput | $Enums.CandidateStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUpdateWithoutJobPostingInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    expectedAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: QuestionUpdatekeywordsInput | string[]
    maxDuration?: NullableIntFieldUpdateOperationsInput | number | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: InterviewResponseUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutJobPostingInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    expectedAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: QuestionUpdatekeywordsInput | string[]
    maxDuration?: NullableIntFieldUpdateOperationsInput | number | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: InterviewResponseUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutJobPostingInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    expectedAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: QuestionUpdatekeywordsInput | string[]
    maxDuration?: NullableIntFieldUpdateOperationsInput | number | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewUpdateWithoutJobPostingInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumInterviewStatusFieldUpdateOperationsInput | $Enums.InterviewStatus
    scheduedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    overallScore?: NullableFloatFieldUpdateOperationsInput | number | null
    overallRating?: NullableEnumRatingFieldUpdateOperationsInput | $Enums.Rating | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    calRecordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    transscript?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidate?: CandidateUpdateOneRequiredWithoutInterviewsNestedInput
    responses?: InterviewResponseUpdateManyWithoutInterviewNestedInput
  }

  export type InterviewUncheckedUpdateWithoutJobPostingInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumInterviewStatusFieldUpdateOperationsInput | $Enums.InterviewStatus
    scheduedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    overallScore?: NullableFloatFieldUpdateOperationsInput | number | null
    overallRating?: NullableEnumRatingFieldUpdateOperationsInput | $Enums.Rating | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    calRecordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    transscript?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidateId?: StringFieldUpdateOperationsInput | string
    responses?: InterviewResponseUncheckedUpdateManyWithoutInterviewNestedInput
  }

  export type InterviewUncheckedUpdateManyWithoutJobPostingInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumInterviewStatusFieldUpdateOperationsInput | $Enums.InterviewStatus
    scheduedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    overallScore?: NullableFloatFieldUpdateOperationsInput | number | null
    overallRating?: NullableEnumRatingFieldUpdateOperationsInput | $Enums.Rating | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    calRecordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    transscript?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidateId?: StringFieldUpdateOperationsInput | string
  }

  export type InterviewCreateManyCandidateInput = {
    id?: string
    status?: $Enums.InterviewStatus
    scheduedAt?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    duration?: number | null
    overallScore?: number | null
    overallRating?: $Enums.Rating | null
    notes?: string | null
    calRecordingUrl?: string | null
    transscript?: string | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobPostingId: string
  }

  export type InterviewUpdateWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumInterviewStatusFieldUpdateOperationsInput | $Enums.InterviewStatus
    scheduedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    overallScore?: NullableFloatFieldUpdateOperationsInput | number | null
    overallRating?: NullableEnumRatingFieldUpdateOperationsInput | $Enums.Rating | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    calRecordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    transscript?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobPosting?: JobPostingUpdateOneRequiredWithoutInterviewsNestedInput
    responses?: InterviewResponseUpdateManyWithoutInterviewNestedInput
  }

  export type InterviewUncheckedUpdateWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumInterviewStatusFieldUpdateOperationsInput | $Enums.InterviewStatus
    scheduedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    overallScore?: NullableFloatFieldUpdateOperationsInput | number | null
    overallRating?: NullableEnumRatingFieldUpdateOperationsInput | $Enums.Rating | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    calRecordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    transscript?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobPostingId?: StringFieldUpdateOperationsInput | string
    responses?: InterviewResponseUncheckedUpdateManyWithoutInterviewNestedInput
  }

  export type InterviewUncheckedUpdateManyWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumInterviewStatusFieldUpdateOperationsInput | $Enums.InterviewStatus
    scheduedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    overallScore?: NullableFloatFieldUpdateOperationsInput | number | null
    overallRating?: NullableEnumRatingFieldUpdateOperationsInput | $Enums.Rating | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    calRecordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    transscript?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobPostingId?: StringFieldUpdateOperationsInput | string
  }

  export type InterviewResponseCreateManyQuestionInput = {
    id?: string
    answer: string
    duration?: number | null
    score?: number | null
    overallRating?: $Enums.Rating | null
    feedback?: string | null
    keywords?: InterviewResponseCreatekeywordsInput | string[]
    sentiment?: string | null
    confidence?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    interviewId: string
  }

  export type InterviewResponseUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    overallRating?: NullableEnumRatingFieldUpdateOperationsInput | $Enums.Rating | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: InterviewResponseUpdatekeywordsInput | string[]
    sentiment?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interview?: InterviewUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type InterviewResponseUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    overallRating?: NullableEnumRatingFieldUpdateOperationsInput | $Enums.Rating | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: InterviewResponseUpdatekeywordsInput | string[]
    sentiment?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewId?: StringFieldUpdateOperationsInput | string
  }

  export type InterviewResponseUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    overallRating?: NullableEnumRatingFieldUpdateOperationsInput | $Enums.Rating | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: InterviewResponseUpdatekeywordsInput | string[]
    sentiment?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewId?: StringFieldUpdateOperationsInput | string
  }

  export type InterviewResponseCreateManyInterviewInput = {
    id?: string
    answer: string
    duration?: number | null
    score?: number | null
    overallRating?: $Enums.Rating | null
    feedback?: string | null
    keywords?: InterviewResponseCreatekeywordsInput | string[]
    sentiment?: string | null
    confidence?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questionId: string
  }

  export type InterviewResponseUpdateWithoutInterviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    overallRating?: NullableEnumRatingFieldUpdateOperationsInput | $Enums.Rating | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: InterviewResponseUpdatekeywordsInput | string[]
    sentiment?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type InterviewResponseUncheckedUpdateWithoutInterviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    overallRating?: NullableEnumRatingFieldUpdateOperationsInput | $Enums.Rating | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: InterviewResponseUpdatekeywordsInput | string[]
    sentiment?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionId?: StringFieldUpdateOperationsInput | string
  }

  export type InterviewResponseUncheckedUpdateManyWithoutInterviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    overallRating?: NullableEnumRatingFieldUpdateOperationsInput | $Enums.Rating | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: InterviewResponseUpdatekeywordsInput | string[]
    sentiment?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionId?: StringFieldUpdateOperationsInput | string
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