import { useModel } from 'umi';

// interface initialState={

// }

export default function(initialState: any) {
  console.log(initialState);

  const { userId, role } = initialState;

  return {
    canReadFoo: true,
    canUpdateFoo: role === 'admin',
    canDeleteFoo: (foo: any) => {
      return foo.ownerId === userId;
    },
  };
}
