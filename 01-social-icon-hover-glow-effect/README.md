# 社交按钮分享hover发光特效

## 知识点

1. shadow
 ```scss
 /* x偏移量 | y偏移量 | 阴影模糊半径 | 阴影扩散半径 | 阴影颜色 */
 box-shadow: 0 0 4px #25ccf7;
 ```
2. filter

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