# 社交按钮分享hover发光特效

## 知识点

1. shadow
 ```scss
<<<<<<< HEAD
 /* x偏移量 | y偏移量 | 阴影模糊半径 | 阴影扩散半径 | 阴影颜色 */
 box-shadow: 0 0 4px #25ccf7;
 ```
2. filter

=======
 /* (insert) x偏移量 | y偏移量 | 阴影模糊半径 | 阴影扩散半径 | 阴影颜色 */
 box-shadow: 0 0 4px #25ccf7;
 ```
2. filter
   1. 函数
      1. blur() 高斯模糊(屏幕上有多少像素相互融合) 默认为0  接受css单位长度, 但不接受百分比
      2. brightness() 明度 0%(全黑) 100%(不变) 高于100%(更高的明度)
      3. contrast() 对比度 0(全黑) 100%(不变) 高于100%(更低的对比度)
      4. drop_shadow()  用法类似`box-shadow`
      5. invert() 反向 0(不变) 100%(完全翻转)

[more MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter)
>>>>>>> 2625d61 ([feature] 01-social-icon-effect-readme)
## 注意事项

- `::before` 不能与`:hover`选择器嵌套, 必须分开
  
```scss
// wrong
&::before{
    &:hover::before{
    }
}

// yes
&::before{
}
&:hover::before{
}
```