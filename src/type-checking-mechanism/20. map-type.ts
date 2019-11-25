
/**
 * 映射类型
 * 定义：通过映射类型可以通过一个旧的类型生成一个新的类型
 * 本质：预先定义的范型接口，通常还会结合索引类型获取对象的属性和属性值，从而将一个对象映射成我们想要的结构
 */

interface Obj20 {
    a: string
    b: number
    c: boolean
}

// 以下三种称为同态 只会作用于Obj20属性，而不会引入新的属性
type ReadonlyObj = Readonly<Obj20>

type PartialObj = Partial<Obj20> // 可选类型

type PickObj = Pick<Obj20, 'a' | 'b'> // 抽取Obj20的子集

/**
 * 非同态类型
 * 会创建新的属性
 * 第一个参数为预定义的新的属性，不来自Obj20
 * 第二个参数是已知的类型，
 * 属性的类型是已知的类型
 */
type RecordObj = Record<'x' | 'y', Obj20>
