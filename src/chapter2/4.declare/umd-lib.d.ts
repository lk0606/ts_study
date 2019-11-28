declare namespace umdLib {
    const version: string
    function doSomething(): void
}

// umd库必备 专用！
export as namespace umdLib

export = umdLib
