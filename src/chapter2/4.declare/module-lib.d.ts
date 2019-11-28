declare function moduleLib(options: Options): void

interface Options {
    [key: string]: any
}

declare namespace moduleLib {
    // const 可有可无
    const version: string
    function doSomething(): void
}

export = moduleLib
