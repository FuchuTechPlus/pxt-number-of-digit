namespace 数値の二桁化 {

    /**
     * 数値の二桁化
     */
    //% blockId="numberToDoubleStr" block="数値の二桁化 %num"
    //% weight=95 blockGap=8
    export function numberToDoubleStr(num: number): string {
        return ('00' + num).slice(-2)
    }

}
