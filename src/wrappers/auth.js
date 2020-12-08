import { Redirect } from 'umi'
export default (props) => {
  const { isLogin } = useAuth();

  function useAuth(params) {
    let isLogin = localStorage.getItem("token") && localStorage.getItem("token").length === 32;
    return { isLogin }
  }

  if (isLogin) {
    return <div>{props.children}</div>;
  } else {
    return <Redirect to="/login" />;
  }
}
