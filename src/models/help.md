### models
```
models文件夹将被视为 model 模块
全局model
通过useModel获取
//  const { user } = useModel('useAuthModel', model => ({ user: 990 }));

```
```
  // 获取初始值全局Model
  const { initialState, loading, error, refresh, setInitialState } = useModel('@@initialState');
  console.log(initialState);
```
