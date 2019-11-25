
/**
 * 条件类型
 * 定义：是一种由条件表达式所决定的类型
 * example: T extends U ? x : y
 * 解释：如果类型T可以被赋值给U，那么结果类型就是x类型，否则是y类型
 * 特点：是类型具有了不唯一性，同时增加了语言的灵活性
 */

type TypeName<T> =
    T extends string ? 'string' :
        T extends number ? 'number' :
            T extends boolean ? 'boolean' :
                T extends undefined ? 'undefined' :
                    T extends Function ? 'Function' :
                        'object'

type T1 = TypeName<string>
type T2 = TypeName<string[]>

/**
 * 分布式条件类型
 * 定义：类型T如果是一个联合类型，结果类型变成多个条件类型的联合类型
 * example: (A | B) extends U ? x : y
 * 拆解：( A extends U ? x : y ) | ( B extends U ? x : y )
 */

type T3 = TypeName<string | string[]>

type Diff<T, U> = T extends U ? never : T

type T4 = Diff< 'a' | 'b' | 'c', 'a' | 'e' >
// Diff<'a', 'a'> | Diff<'b', 'a' | 'e'> | Diff<'c', 'a' | 'e'>
// never | 'b' | 'c'
// 'b' | 'c'
// Diff的作用：可以从类型T中过滤掉可以赋值给类型U的类型

type NotNull<T> = Diff<T, undefined | null>
type T5 = NotNull<string | number | undefined | null>

// Exclude<T, U> Diff // 从类型T中过滤掉可以赋值给类型U的类型
// NonNullable<T> NotNull
// Extract<T, U> !Diff // !

type T6 = Extract<'a' | 'b' | 'c', 'a' | 'e'>

// ReturnType<T> 获取函数返回值类型
type T7 = ReturnType<() => string>
