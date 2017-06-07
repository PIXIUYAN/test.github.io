 var a = 12
 var obj = {
     a: 100,
     foo: () => {
         console.log(this.a)
     }
 }
 obj.foo() // 100

 // 箭头函数
 var a = 12
 var obj = {
     a: 100,
     foo: () => {
         console.log(this.a)
     }
 }

 obj.foo() // 12

 