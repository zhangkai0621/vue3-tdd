/*
 * @Author: zhangkai
 * @Date: 2021-01-20 10:43:30
 * @LastEditTime: 2021-01-20 10:44:07
 * @LastEditors: zhangkai
 * @Description: 
 */

describe('base', ()=> {
  // 类型检查
  test('null', () => {
    const n: null = null
    expect(n).toBeNull()
    expect(n).toBeDefined()
    expect(n).not.toBeUndefined()
    expect(n).not.toBeTruthy()
    expect(n).toBeFalsy()
  })

  // 数值比较
  test('Numbers', () => {
    const value: number = 2 + 2
    expect(value).toBeGreaterThan(3)
    expect(value).toBeGreaterThanOrEqual(3.5)
    expect(value).toBeLessThan(5)
    expect(value).toBeLessThanOrEqual(4.5)

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4)
    expect(value).toEqual(4)
  })
})