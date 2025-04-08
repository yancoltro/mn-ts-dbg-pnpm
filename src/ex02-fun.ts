function fun1 (...args: (string|number)[]) {
    const now = Date.now()
    // @ts-ignore strict mode
    const diff = fun1["__last__"] ? now - fun1["__last__"] : 0
    // @ts-ignore strict mode
    fun1["__last__"] = now
    console.log(...args, `+${diff}ms`)
}

fun1("foo1 %d", 123) // poe um breakpoint aqui, espera e depois avança um step...
fun1("foo2 %d", 234)
fun1("foo3 %d", 345)
